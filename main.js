var before = getEl("before");
var liner = getEl("liner");
var command = getEl("typer"); 
var textarea = getEl("texter"); 
var terminal = getEl("terminal");
var mainContent = getEl("main-content");
var body = getEl("body");

var git = 0;
var commands = [];

document.addEventListener("DOMContentLoaded", function() {
    var loadingBar = getEl("loading-bar");
    var loadingText = getEl("loading-text");
    var loadingContainer = getEl("loading-container");
    var width = 0;

    function load() {
        if (width >= 100) {

            clearInterval(interval);
            loadingText.textContent = "Complete";
            setTimeout(function() {
                document.body.classList.remove('loading');
                loadingContainer.style.display = 'none';
                getEl("webTitle").style.display = 'none';
                mainContent.style.display = 'block';
                setTimeout(function() {
                    writeLines(banner, "", 20);
                    textarea.focus();
                }, 100);
            }, 500);
        } else {
            width += 33.34;
            loadingBar.style.width = width + '%';
        }
    }
    var interval = setInterval(load, 500);
});

window.addEventListener("keyup", enterKey);

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    else {
        if (e.keyCode == 13) {
            commands.push(command.innerHTML);
            git = commands.length;
            addLine("X:\\Users\\Guest> " + command.innerHTML, "no-animation", 0);
            commander(command.innerHTML.toLowerCase());
            command.innerHTML = "";
            textarea.value = "";
        }
        if (e.keyCode == 38 && git != 0) {
            git -= 1;
            textarea.value = commands[git];
            command.innerHTML = textarea.value;
        }
        if (e.keyCode == 40 && git != commands.length) {
            git += 1;
            if (commands[git] === undefined) {
                textarea.value = "";
            } 
            else {
                textarea.value = commands[git];
            }
        command.innerHTML = textarea.value;
        }
    }
}

function commander(cmd) {
    switch (cmd.trimEnd().toLowerCase()) {
        case "help":
            writeLines(help, "color2 margin", 50);
        break;
        case "whois":
            writeLines(whois, "color2 margin", 50);
        break;
        case "techstack":
            writeLines(skills, "color2 margin", 50)
        break;
        case "activities":
            writeLines(activities, "color2 margin",50)
        break;
        case "internships":
            writeLines(internships, "color2 margin", 50);
        break;
        case "socials":
            writeLines(socials, "color2 margin", 50);
        break;
        case "projects":
            writeLines(projects, "color2 margin", 50);
        break;
        case "ai":
            writeLines(ai, "color2 margin", 50);
        break;
        case "av":
            writeLines(av, "color2 margin", 50);
        break;
        case "rpg":
            writeLines(rpg, "color2 margin", 50);
        break;
        case "benchmark":
            writeLines(benchmark, "color2 margin", 50);
        break;
        case "portfolio":
            writeLines(portfolio, "color2 margin", 50);
        break;
        case "news":
            writeLines(news, "color2 margin", 50);
        break;
        case "aiAPI":
            writeLines(aiAPI, "color2 margin", 50);
        break;
        case "wateralarm":
            writeLines(wateralarm, "color2 margin", 50);
        break;
        case "dispenser":
            writeLines(sanitizer, "color2 margin", 50);
        break;
        case "sheepfinder":
            writeLines(sheep, "color2 margin", 50);
            break;
        case "history":
            addLine("<br>", "", 0);
            writeLines(commands, "color2", 50);
            addLine("<br>", "command", 80 * commands.length + 50);
        break;
        case "clear":
            setTimeout(function() {
            terminal.innerHTML = '<a id="before"></a>';
            before = document.getElementById("before");
            }, 1);
        break;
        case "banner":
            writeLines(banner, "", 50);
        break;
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0);
            newTab(linkedin);
        break;
        case "github":
            addLine("Opening GitHub...", "color2", 0);
            newTab(github);
        break;
        case "light":
            writeLines(light, "color2", 0);
            body.classList.add("light");
        break;
        case "dark":
            writeLines(dark, "color2", 0);
            body.classList.remove("light");
        break;
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
        break;
    }
}

function newTab(link) {
    setTimeout(function() {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } 
        else {
            t += text.charAt(i);
        }
    }
    setTimeout(function() {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function writeLines(name, style, time) {
    name.forEach(function(item, index) {
        addLine(item, style, index * time);
    });
}

function getEl(elid) {
    return document.getElementById(elid);
}

function init() {
    cursor = getEl("cursor");
    cursor.style.left = "0px";
}

function newLineBR(txt) {
    return txt.replace(/\n/g, '');
}

function typeToTyper(from, e) {
    e = e || window.event;
    var w = getEl("typer");
    var tw = from.value;
    w.innerHTML = newLineBR(tw);
}

function shiftCursor(count, e) {
    e = e || window.event;
    var keycode = e.keyCode || e.which;
    if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } 
    else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
}

