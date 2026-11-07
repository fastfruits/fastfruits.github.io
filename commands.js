// Terminal command machinery: helpers, renderers, and the command registry.
//
// The content itself lives in content.js. Everything here turns that data into
// the arrays of HTML line strings that writeLines() in main.js consumes, and
// registers the commands that render them.
//
// Load-order rule: this file runs before main.js, so nothing here may call
// addLine/writeLines/trackEvent at load time. Every such call sits inside a
// run() body, which only fires once the user types or clicks.

const BR = "<br>"

// Column at which the description starts in the two index listings. Kept as
// explicit values because they are a visual choice, with the widest label plus
// a two-space gutter as the floor so a long title can never collide.
const HELP_COLUMN = 15
const PROJECT_COLUMN = 28
const LEGEND_GAP = 11

const BULLET = "     -"
const CONT = "      "
const ENTRY_BULLET = "   - "
const ENTRY_CONT = "     "
const SKILL_ITEM = "   -"
const SKILL_NOTE = "         *"
const REPO_PREFIX = "Check out the code here on my GitHub -----> "


// --- helpers ----------------------------------------------------------------

// Only attribute values get escaped. Body text is authored prose and is passed
// through as-is, exactly as the hand-written arrays did.
function attr(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

// A link that dispatches a command. main.js has one delegated listener on
// #terminal that picks these up, so there is no inline handler to escape.
function cmdLink(name, label) {
  return '<a class="command" data-cmd="' + attr(name) + '">' + label + "</a>"
}

function linkOut(url, label) {
  return (
    '<a class="command" href="' + attr(url) + '" target="_blank" rel="noopener noreferrer">' +
    label +
    "</a>"
  )
}

// addLine() turns each pair of spaces into &nbsp;&nbsp; and leaves a lone
// trailing space, so N spaces render as N columns for any N. Padding is exact.
// Never emit two consecutive spaces inside a tag: the same pass would rewrite
// them and corrupt the attribute.
function indexRow(html, label, description, column) {
  return html + " ".repeat(Math.max(column - label.length, 2)) + description
}

function columnFor(entries, minimum) {
  return entries.reduce(function (widest, entry) {
    return Math.max(widest, entry.label.length + 2)
  }, minimum)
}

// A bullet is a string, or an array of strings for a hand-wrapped one whose
// continuation lines indent to match. "" is a blank line.
function renderBullets(bullets, bulletPrefix, continuationPrefix) {
  const lines = []
  bullets.forEach(function (bullet) {
    if (bullet === "") {
      lines.push(BR)
      return
    }
    const parts = Array.isArray(bullet) ? bullet : [bullet]
    parts.forEach(function (part, index) {
      lines.push((index === 0 ? bulletPrefix : continuationPrefix) + part)
    })
  })
  return lines
}


// --- renderers --------------------------------------------------------------

function renderProject(project) {
  const lines = [BR, '<span class="command">' + (project.heading || project.title) + "</span>", BR]
  lines.push.apply(lines, renderBullets(project.bullets, BULLET, CONT))
  lines.push(BR)
  if (project.demo) {
    lines.push("Click for a " + cmdLink(demoCommand(project), "Demo"))
  }
  if (project.site) {
    lines.push("<span>Visit the site " + linkOut(project.site, "here") + ".</span>")
  }
  if (project.repo) {
    lines.push(REPO_PREFIX + linkOut(project.repo, "Repository"))
  }
  lines.push(BR)
  return lines
}

function renderDemo(project) {
  return [BR, '<video controls src="' + attr(project.demo) + '">', BR]
}

function renderProjectIndex() {
  const entries = listCommands("project")
  const column = columnFor(entries, PROJECT_COLUMN)
  const lines = [BR]
  entries.forEach(function (entry) {
    lines.push(indexRow(cmdLink(entry.name, entry.label), entry.label, entry.help, column))
  })
  lines.push(BR)
  // The legend is generated from the same list as the rows above it, so it can
  // no longer advertise a command that does not dispatch.
  lines.push(
    '<span class="command">Commands(or clickable btw^):</span>' +
      " ".repeat(LEGEND_GAP) +
      entries
        .map(function (entry) { return entry.name })
        .join(", ")
  )
  lines.push(BR)
  return lines
}

function renderHelp() {
  const entries = []
  HELP_ORDER.forEach(function (name) {
    const entry = registry.get(name)
    if (entry && entries.indexOf(entry) === -1) {
      entries.push(entry)
    }
  })
  // Anything registered for the help listing but left out of HELP_ORDER still
  // shows up, so a new command cannot go missing from help.
  listCommands("main").forEach(function (entry) {
    if (entries.indexOf(entry) === -1) {
      entries.push(entry)
    }
  })

  const column = columnFor(entries, HELP_COLUMN)
  const lines = [BR]
  entries.forEach(function (entry) {
    lines.push(indexRow(entry.html || cmdLink(entry.name, entry.label), entry.label, entry.help, column))
  })
  lines.push(BR)
  return lines
}

// Shared by internships and activities, which have the same shape.
function renderEntries(list) {
  const lines = [BR]
  list.forEach(function (item) {
    const name = item.url ? linkOut(item.url, item.org) : '<a class="command">' + item.org + "</a>"
    lines.push(name + " - " + item.role)
    lines.push(BR)
    lines.push.apply(lines, renderBullets(item.bullets, ENTRY_BULLET, ENTRY_CONT))
    lines.push(BR)
  })
  return lines
}

function renderSkills() {
  const lines = [BR]
  SKILL_GROUPS.forEach(function (group) {
    lines.push('<span class="command">' + group.heading + "</span>")
    lines.push(BR)
    group.items.forEach(function (item) {
      lines.push(SKILL_ITEM + item.name + (item.notes.length ? ":" : ""))
      item.notes.forEach(function (note) {
        lines.push(SKILL_NOTE + note)
      })
    })
    lines.push(BR)
  })
  return lines
}

function renderSocials() {
  const lines = [BR]
  SOCIALS.forEach(function (social) {
    lines.push(linkOut(social.url, social.label))
  })
  lines.push(BR)
  return lines
}


// --- registry ---------------------------------------------------------------

// A Map, so listing order is insertion order no matter what the keys look like.
// Aliases map to the same object as their canonical name, which is how
// listCommands() filters them back out.
const registry = new Map()

function defineCommand(name, spec) {
  const entry = {
    name: name,
    label: spec.label || name,
    help: spec.help || "",
    group: spec.group || "",
    html: spec.html || "",
    run: spec.run,
  }
  registry.set(name, entry)
  ;(spec.aliases || []).forEach(function (alias) {
    registry.set(alias, entry)
  })
  return entry
}

function resolveCommand(input) {
  return registry.get(String(input == null ? "" : input).trim().toLowerCase()) || null
}

function listCommands(group) {
  const seen = []
  registry.forEach(function (entry, key) {
    if (entry.group === group && key === entry.name && seen.indexOf(entry) === -1) {
      seen.push(entry)
    }
  })
  return seen
}

function demoCommand(project) {
  return project.id + "-demo"
}

// Order of the help listing. A name with no registered command is skipped, so
// help cannot advertise something that does not exist.
const HELP_ORDER = [
  "whois",
  "resume",
  "techstack",
  "activities",
  "internships",
  "projects",
  "comments",
  "socials",
  "history",
  "theme",
  "banner",
  "clear",
]

function registerCommands() {
  PROJECTS.forEach(function (project) {
    if (project.status === "wip") {
      return
    }
    defineCommand(project.id, {
      group: "project",
      label: project.title,
      help: project.blurb,
      aliases: project.aliases,
      run: function () { writeLines(renderProject(project), "color2 margin", 50) },
    })
    if (project.demo) {
      defineCommand(demoCommand(project), {
        run: function () { writeLines(renderDemo(project), "color2 margin", 50) },
      })
    }
  })

  defineCommand("help", {
    run: function () { writeLines(renderHelp(), "color2 margin", 50) },
  })
  defineCommand("whois", {
    group: "main",
    help: "who is Nicholas Henry?",
    run: function () { writeLines(whois, "color2 margin", 50) },
  })
  defineCommand("resume", {
    group: "main",
    help: "my resume",
    run: function () { writeLines(resume, "color2", 0) },
  })
  defineCommand("techstack", {
    group: "main",
    help: "languages, frameworks, systems",
    run: function () { writeLines(renderSkills(), "color2 margin", 50) },
  })
  defineCommand("activities", {
    group: "main",
    help: "clubs and other",
    run: function () { writeLines(renderEntries(ACTIVITIES), "color2 margin", 50) },
  })
  defineCommand("internships", {
    group: "main",
    help: "experience",
    run: function () { writeLines(renderEntries(EXPERIENCES), "color2 margin", 50) },
  })
  defineCommand("projects", {
    group: "main",
    help: "my projects",
    run: function () { writeLines(renderProjectIndex(), "color2 margin", 50) },
  })
  defineCommand("comments", {
    group: "main",
    help: "view and add comments to this site",
    run: function () {
      trackEvent("conversation_comments_viewed", {
        channel: "terminal"
      })
      showComments()
    },
  })
  defineCommand("socials", {
    group: "main",
    help: "display my social links",
    run: function () { writeLines(renderSocials(), "color2 margin", 50) },
  })
  defineCommand("history", {
    group: "main",
    help: "view command history",
    run: function () {
      addLine(BR, "", 0)
      writeLines(commands, "color2", 50)
      addLine(BR, "command", 80 * commands.length + 50)
    },
  })
  defineCommand("banner", {
    group: "main",
    help: "display the header",
    run: function () { writeLines(getResponsiveBanner(), "banner-line", 50) },
  })
  defineCommand("clear", {
    group: "main",
    help: "clear the terminal",
    run: function () {
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>'
        before = document.getElementById("before")
      }, 1)
    },
  })

  // light and dark dispatch separately but share one row in help, so the row
  // is registered as its own listing-only entry.
  defineCommand("light", {
    run: function () {
      addLine(BR)
      writeLines(light, "color2", 0)
      addLine(BR)
      body.classList.add("light")
    },
  })
  defineCommand("dark", {
    run: function () {
      writeLines(dark, "color2", 0)
      body.classList.remove("light")
    },
  })
  defineCommand("theme", {
    group: "main",
    label: "light/dark",
    help: "change the theme",
    html: cmdLink("light", "light") + "/" + cmdLink("dark", "dark"),
    run: function () { commander(body.classList.contains("light") ? "dark" : "light") },
  })

  defineCommand("linkedin", {
    run: function () {
      addLine(BR)
      addLine("Opening LinkedIn...", "color2", 0)
      addLine(BR)
      newTab(linkedin)
    },
  })
  defineCommand("github", {
    run: function () {
      addLine(BR)
      addLine("Opening GitHub...", "color2", 0)
      addLine(BR)
      newTab(github)
    },
  })
}


// --- prose ------------------------------------------------------------------
//
// These occur once each and are hand-tuned, so they stay as literal line
// arrays rather than gaining a schema that only one caller would ever use.

const whois = [
  "<br>",
  "Hello my name is Nicholas Henry,",
  '<img src="resources/me.png" width=200 height=300>',
  "<br>",
  "I am currently a sophomore at Northeastern University studying mechanical engineering and computer science, looking for an internship for summer or a co-op spring 2027.",
  "I studied abroad for my first semester at Queen's University in Northern Ireland through NU.IN and gained a great deal of independence.",
  "Now on the Boston campus, I'm involved in clubs like NER and Northeastern Satellite Lab while excelling in my studies with a 3.79 GPA.",
  "<br>",
  "<b>A little bit about my past</b>",
  "I'm a first-generation American, with Russian and Irish citizenship as well and I grew up in Miami, FL.",
  "After taking AP Computer Science A in high school, I continued to program and strived to learn new skills, which I did through AICamp.org.",
  "In their summer camp I programmed and trained an AI model with Python, TensorFlow, and some Google APIs, which taught me a lot.",
  "<br>",
  "After the camp they reached out about my work and asked me to intern for them, which I did. This taught me a lot about",
  "web development, including HTML/CSS and JavaScript, along with libraries like React and Vite for connecting a frontend to a backend.",
  "After the internship I started learning C#, won my high school coding club's Hack-A-Thon and GameJam, and built this website.",
  "<br>",
  "Thank you for visiting my site and feel free to reach out if you have opportunities!",
  "      -Nicholas Henry",
  "<br>",
]

const resume = [
  "<br>",
  '<span>Download my latest resume here --> <a class="command" href="/resume.pdf" download target="_blank">(PDF)</a><span>',
  "<br>",
]

const light = [
  "<br>",
  "<span>Terminal set to light mode!</span>",
  "<br>"
]

const dark = [
  "<br>",
  "<span>Terminal set to dark mode!</span>",
  "<br>"
]

// The rocket art is identical in both banners, so it is defined once. Only the
// tail rows differ: the desktop variant splices the wordmark onto the right of
// the art, at offsets that were eyeballed against the art's ragged edge, so
// those six rows stay literal rather than computed.
//
// index.html carries a fourth copy of the wordmark as the pre-load splash. It
// has to be static markup, because it exists to show before any JS runs.
const BANNER_HEAD = [
  '<span class="index">NHenry.dev [Version 3.1.27]</span>',
  '<span class="index">Nicholas Henry (NH) Not A Corporation. All rights reserved.</span>',
]

const LOGO_MARK = [
  "                              =",
  "                              ==",
  "                             ===",
  "                            ===",
  "                          ====",
  "                        =====    ==",
  "                      ======  ===",
  "                    =====  ====",
  "                  =====   ===",
  "                 =====   ====",
  "                 ====    =====",
  "                  ====    =====",
  "                    ===    ====",
  "                      ==   ====       ***",
  "            ****#         ===           ***#",
  "           **************************    ***",
  "               ******************       ***#",
  "              ***                      ***",
  "              ******************** ****#",
  "                   **********",
]

const banner = BANNER_HEAD.concat(LOGO_MARK, [
  "                ****                                " + '<span class="color2">__                                     _            ',
  "        ******  ****************                 " + '<span class="color2">/\\ \\ \\/\\  /\\___ _ __  _ __ _   _       __| | _____   __</span>',
  "      *****          #***#*           ***       " + '<span class="color2">/  \\/ / /_/ / _ \\ \'_ \\| \'__| | | |     / _` |/ _ \\ \\ / /',
  "       *************###***************** **    " + '<span class="color2">/ /\\  / __  /  __/ | | | |  | |_| |  _ | (_| |  __/\\ V / ',
  "            *********************** #*****     " + '<span class="color2">\\_\\ \\/\\/ /_/ \\___|_| |_|_|   \\__, | (_) \\__,_|\\___| \\_/  ',
  "             ************************                                       " + '<span class="color2">|___/                   ',
], [
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  '<span class="color2">For a list of available commands, type (or click) \'</span>' + cmdLink("help", "help") + '<span class="color2">\'.</span>',
])

const bannerMobile = BANNER_HEAD.concat(LOGO_MARK, [
  "                ****",
  "        ******  ****************                 ",
  "      *****          #***#*           ***       ",
  "       *************###***************** **    ",
  "            *********************** #*****     ",
  "             ************************",
], [
  '<span class="color2">     __                                     _</span>',
  '<span class="color2">  /\\ \\ \\/\\  /\\___ _ __  _ __ _   _       __| | _____   __</span>',
  '<span class="color2"> /  \\/ / /_/ / _ \\ \'_ \\| \'__| | | |     / _` |/ _ \\ \\ / /</span>',
  '<span class="color2">/ /\\  / __  /  __/ | | | |  | |_| |  _ | (_| |  __/\\ V /</span>',
  '<span class="color2">\\_\\ \\/\\/ /_/ \\___|_| |_|_|   \\__, | (_) \\__,_|\\___| \\_/</span>',
  '<span class="color2">                              |___/</span>',
  "<br>",
], [
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  '<span class="color2">For a list of available commands \ntype (or click) \'</span>' + cmdLink("help", "help") + '<span class="color2">\'.</span>',
])

