/*
 * Comment profanity filter.
 *
 * Blocks profanity and slurs before a comment is posted, and masks anything
 * that slipped through when comments are rendered.
 *
 * Matching is obfuscation aware:
 *   - leetspeak substitutions  (f4ck, sh1t, @ss)
 *   - repeated characters      (fuuuuck)
 *   - accents and zero-width characters (fuck written with hidden characters)
 *   - separators between letters (f.u.c.k, s h i t)
 *
 * Matches are anchored to word boundaries, so ordinary words that contain a
 * blocked word ("class", "assassin", "shiitake", "document") are not flagged.
 *
 * To tune the filter, edit the PROFANITY or SLURS lists below. The database
 * keeps its own copy of this list in supabase/comments-hardening.sql.
 */
var Profanity = (function () {
  var LEET = {
    a: "a4@*",
    b: "b8",
    c: "c(",
    e: "e3*",
    g: "g69",
    h: "h#",
    i: "i1!|*",
    l: "l1|",
    o: "o0*",
    s: "s5$z",
    t: "t7+",
    u: "uv4*",
    z: "z2",
  };

  // Everyday profanity.
  var PROFANITY = [
    "arse",
    "arsehole",
    "ass",
    "asshat",
    "asshole",
    "bitch",
    "bitchy",
    "blowjob",
    "boner",
    "bullshit",
    "clusterfuck",
    "cock",
    "cocksucker",
    "crap",
    "cum",
    "cunt",
    "dick",
    "dickhead",
    "dildo",
    "douche",
    "douchebag",
    "dumbass",
    "dumbfuck",
    "fuck",
    "fuckboy",
    "fucker",
    "fuckface",
    "handjob",
    "horseshit",
    "jackass",
    "jizz",
    "motherfucker",
    "nutsack",
    "piss",
    "pussy",
    "shit",
    "shithead",
    "shitty",
    "slut",
    "tits",
    "titties",
    "whore",
  ];

  // Slurs and hate terms. Written by claude I swear
  var SLURS = [
    "beaner",
    "chink",
    "coon",
    "darkie",
    "dyke",
    "fag",
    "faggot",
    "gook",
    "jap",
    "kike",
    "negro",
    "nigga",
    "nigger",
    "paki",
    "raghead",
    "retard",
    "shemale",
    "spic",
    "towelhead",
    "tranny",
    "wetback",
  ];

  // Endings allowed after a blocked word ("bitches", "fucking", "shits").
  var SUFFIX = "(?:ers|ing|ies|es|ed|er|in|s|z)?";

  function escapeForClass(chars) {
    return chars.replace(/[\\\]^-]/g, "\\$&");
  }

  // Words shorter than this are matched without separator tolerance: letting
  // "a s s" or "c u m" match would flag ordinary initialisms.
  var MIN_LENGTH_FOR_SEPARATORS = 4;

  function wordPattern(word) {
    var separator =
      word.length >= MIN_LENGTH_FOR_SEPARATORS ? "[^a-z0-9]{0,2}" : "";
    var parts = [];

    for (var i = 0; i < word.length; i++) {
      var letter = word.charAt(i);
      parts.push("[" + escapeForClass(LEET[letter] || letter) + "]+");
    }

    return parts.join(separator);
  }

  function byLengthDesc(a, b) {
    return b.length - a.length;
  }

  function buildRegex(words) {
    var alternatives = words
      .slice()
      .sort(byLengthDesc)
      .map(function (word) {
        return wordPattern(word);
      });

    // Leading boundary keeps "class" and "assassin" clean, the trailing
    // lookahead keeps "shiitake" and "cocktail" clean.
    return new RegExp(
      "(?:^|[^a-z])((?:" + alternatives.join("|") + ")" + SUFFIX + ")(?![a-z])",
      "gi"
    );
  }

  var REGEXES = [buildRegex(PROFANITY.concat(SLURS))];

  // Strip accents and invisible characters so "fück" and "fu<zero width>ck"
  // are seen as "fuck".
  function normalize(text) {
    var value = String(text == null ? "" : text);

    if (value.normalize) {
      value = value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
    }

    return value.replace(/[\u00ad\u200b-\u200f\u2060\ufeff]/g, "");
  }

  function findMatches(text) {
    var normalized = normalize(text);
    var matches = [];

    REGEXES.forEach(function (regex) {
      var match;

      regex.lastIndex = 0;
      while ((match = regex.exec(normalized)) !== null) {
        matches.push(match[1]);

        if (match.index === regex.lastIndex) {
          regex.lastIndex++;
        }
      }
    });

    return matches;
  }

  function check(text) {
    var matches = findMatches(text);

    return {
      blocked: matches.length > 0,
      matches: matches,
    };
  }

  function isClean(text) {
    return !check(text).blocked;
  }

  function mask(text) {
    var value = String(text == null ? "" : text);

    REGEXES.forEach(function (regex) {
      regex.lastIndex = 0;
      value = value.replace(regex, function (full, word) {
        var prefix = full.slice(0, full.length - word.length);
        return prefix + new Array(word.length + 1).join("*");
      });
    });

    return value;
  }

  return {
    check: check,
    isClean: isClean,
    mask: mask,
  };
})();
