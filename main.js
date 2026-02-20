var before = getEl("before")
var liner = getEl("liner")
var command = getEl("typer")
var textarea = getEl("texter")
var terminal = getEl("terminal")
var mainContent = getEl("main-content")
var body = getEl("body")

var SUPABASE_URL = "https://zkodgtygleehzklkjsvc.supabase.co"
var SUPABASE_ANON_KEY = "sb_publishable_zjID95Jk3779QiYrj_fPWw_ltxakTQk"
var COMMENT_COOLDOWN_MS = 20000
var LAST_COMMENT_AT_KEY = "last-comment-at-v1"
var GA_MEASUREMENT_ID = window.GA_MEASUREMENT_ID || ""
var analyticsInitialized = false

var git = 0
var commands = []

document.addEventListener("DOMContentLoaded", function() {
    initAnalytics()

    var loadingBar = getEl("loading-bar")
    var loadingText = getEl("loading-text")
    var loadingContainer = getEl("loading-container")
    var width = 0

    function load() {
        if (width >= 100) {

            clearInterval(interval)
            loadingText.textContent = "Complete"
            setTimeout(function() {
                document.body.classList.remove('loading')
                loadingContainer.style.display = 'none'
                getEl("webTitle").style.display = 'none'
                mainContent.style.display = 'block'
                setTimeout(function() {
                    writeLines(getResponsiveBanner(), "banner-line", 20)
                    textarea.focus()
                }, 100)
            }, 500)
        } else {
            width += 33.34
            loadingBar.style.width = width + '%'
        }
    }
    var interval = setInterval(load, 500)
})

window.addEventListener("keyup", enterKey)

textarea.value = ""
command.innerHTML = textarea.value

function enterKey(e) {
    if (document.activeElement !== textarea) {
        return
    }

    if (e.keyCode == 181) {
        document.location.reload(true)
    }
    else {
        if (e.keyCode == 13) {
            commands.push(command.innerHTML)
            git = commands.length
            addLine("X:\\Users\\Guest> " + command.innerHTML, "no-animation", 0)
            commander(command.innerHTML)
            command.innerHTML = ""
            textarea.value = ""
        }
        if (e.keyCode == 38 && git != 0) {
            git -= 1
            textarea.value = commands[git]
            command.innerHTML = textarea.value
        }
        if (e.keyCode == 40 && git != commands.length) {
            git += 1
            if (commands[git] === undefined) {
                textarea.value = ""
            } 
            else {
                textarea.value = commands[git]
            }
        command.innerHTML = textarea.value
        }
    }
}

function commander(cmd) {
    var trimmedCmd = cmd.trim()
    var normalizedCmd = trimmedCmd.toLowerCase()

    if (normalizedCmd.startsWith("comment ")) {
        trackEvent("conversation_comment_attempted", {
            channel: "terminal"
        })
        saveComment(trimmedCmd.slice(8))
        return
    }

    switch (normalizedCmd) {
        case "help":
            writeLines(help, "color2 margin", 50)
        break
        case "whois":
            writeLines(whois, "color2 margin", 50)
        break
        case "techstack":
            writeLines(skills, "color2 margin", 50)
        break
        case "activities":
            writeLines(activities, "color2 margin",50)
        break
        case "internships":
            writeLines(internships, "color2 margin", 50)
        break
        case "socials":
            writeLines(socials, "color2 margin", 50)
        break
        case "projects":
            writeLines(projects, "color2 margin", 50)
        break
        case "ai":
            writeLines(ai, "color2 margin", 50)
        break
        case "av":
            writeLines(av, "color2 margin", 50)
        break
        case "rpg":
            writeLines(rpg, "color2 margin", 50)
        break
        case "benchmark":
            writeLines(benchmark, "color2 margin", 50)
        break
        case "portfolio":
            writeLines(portfolio, "color2 margin", 50)
        break
        case "news":
            writeLines(news, "color2 margin", 50)
        break
        case "aiapi":
            writeLines(aiAPI, "color2 margin", 50)
        break
        case "comments":
            trackEvent("conversation_comments_viewed", {
                channel: "terminal"
            })
            showComments()
        break
        case "wateralarm":
            writeLines(wateralarm, "color2 margin", 50)
        break
        case "dispenser":
            writeLines(sanitizer, "color2 margin", 50)
        break
        case "sheepfinder":
            writeLines(sheep, "color2 margin", 50)
            break
        case "history":
            addLine("<br>", "", 0)
            writeLines(commands, "color2", 50)
            addLine("<br>", "command", 80 * commands.length + 50)
        break
        case "clear":
            setTimeout(function() {
            terminal.innerHTML = '<a id="before"></a>'
            before = document.getElementById("before")
            }, 1)
        break
        case "banner":
            writeLines(getResponsiveBanner(), "banner-line", 50)
        break
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0)
            newTab(linkedin)
        break
        case "github":
            addLine("Opening GitHub...", "color2", 0)
            newTab(github)
        break
        case "light":
            writeLines(light, "color2", 0)
            body.classList.add("light")
        break
        case "dark":
            writeLines(dark, "color2", 0)
            body.classList.remove("light")
        break
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100)
        break
    }
}

function newTab(link) {
    setTimeout(function() {
        trackEvent("outbound_link_click", {
            destination: link
        })
        window.open(link, "_blank")
    }, 500)
}

function addLine(text, style, time) {
    var t = ""
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;"
            i++
        } 
        else {
            t += text.charAt(i)
        }
    }
    setTimeout(function() {
        var next = document.createElement("p");
        next.innerHTML = t
        next.className = style

        before.parentNode.insertBefore(next, before)

        window.scrollTo(0, document.body.offsetHeight)
    }, time)
}

function writeLines(name, style, time) {
    name.forEach(function(item, index) {
        addLine(item, style, index * time)
    })
}

function getEl(elid) {
    return document.getElementById(elid)
}

function init() {
    cursor = getEl("cursor")
    cursor.style.left = "0px"
}

function newLineBR(txt) {
    return txt.replace(/\n/g, '')
}

function typeToTyper(from, e) {
    e = e || window.event
    var w = getEl("typer")
    var tw = from.value
    w.innerHTML = newLineBR(tw)
}

function shiftCursor(count, e) {
    e = e || window.event
    var keycode = e.keyCode || e.which
    if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px"
    } 
    else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px"
    }
}

async function saveComment(rawInput) {
    var parts = rawInput.split("-");
    if (parts.length < 2) {
        trackEvent("conversation_comment_failed", {
            reason: "invalid_format"
        })
        addLine("Usage: comment name - short message", "error", 0)
        return
    }

    var name = parts[0].trim();
    var comment = parts.slice(1).join("-").trim()

    if (!name || !comment) {
        trackEvent("conversation_comment_failed", {
            reason: "empty_fields"
        })
        addLine("Name and comment cannot be empty.", "error", 0)
        return
    }

    if (name.length > 40 || comment.length > 240) {
        trackEvent("conversation_comment_failed", {
            reason: "max_length_exceeded"
        })
        addLine("Max length: name 40 characters, comment 240 characters.", "error", 0)
        return
    }

    if (!isSupabaseConfigured()) {
        trackEvent("conversation_comment_failed", {
            reason: "supabase_unconfigured"
        })
        addLine("Supabase is not configured in main.js yet.", "error", 0)
        return
    }

    var waitMs = getRemainingCooldownMs()
    if (waitMs > 0) {
        trackEvent("conversation_comment_failed", {
            reason: "cooldown_active"
        })
        addLine("Please wait " + Math.ceil(waitMs / 1000) + "s before posting again.", "error", 0)
        return
    }

    try {
        var response = await fetch(SUPABASE_URL + "/rest/v1/comments", {
            method: "POST",
            headers: getSupabaseHeaders({
                "Content-Type": "application/json",
                Prefer: "return=minimal"
            }),
            body: JSON.stringify({
                name: name,
                message: comment
            })
        })

        if (!response.ok) {
            throw new Error("Failed to save comment")
        }

        setLastCommentAt(Date.now())
        addLine("Comment saved. Type 'comments' to view.", "color2", 0)
        trackEvent("conversation_comment_submitted", {
            channel: "terminal",
            name_length: name.length,
            message_length: comment.length
        })
    } catch (error) {
        trackEvent("conversation_comment_failed", {
            reason: "request_failed"
        })
        addLine("Could not save comment right now. Please try again.", "error", 0)
    }
}

function getRemainingCooldownMs() {
    var raw = localStorage.getItem(LAST_COMMENT_AT_KEY)
    var last = Number(raw)
    if (!last || Number.isNaN(last)) {
        return 0
    }

    var elapsed = Date.now() - last
    if (elapsed >= COMMENT_COOLDOWN_MS) {
        return 0
    }

    return COMMENT_COOLDOWN_MS - elapsed
}

function setLastCommentAt(timestampMs) {
    localStorage.setItem(LAST_COMMENT_AT_KEY, String(timestampMs))
}

function isSupabaseConfigured() {
    return SUPABASE_URL.indexOf("YOUR_PROJECT_ID") === -1 && SUPABASE_ANON_KEY.indexOf("YOUR_SUPABASE_ANON_KEY") === -1
}

function getSupabaseHeaders(extraHeaders) {
    return Object.assign({
        apikey: SUPABASE_ANON_KEY,
        Authorization: "Bearer " + SUPABASE_ANON_KEY
    }, extraHeaders || {})
}

async function fetchGlobalComments() {
    var response = await fetch(
        SUPABASE_URL + "/rest/v1/comments?select=name,message,created_at&order=created_at.desc&limit=100",
        {
            method: "GET",
            headers: getSupabaseHeaders()
        }
    )

    if (!response.ok) {
        throw new Error("Failed to load comments")
    }

    var data = await response.json()
    return Array.isArray(data) ? data : []
}

async function showComments() {
    addLine("<br>", "", 0)
    addLine("Add comment with: comment name - short message", "color2", 40)
    addLine("<br>", "", 80)

    if (!isSupabaseConfigured()) {
        addLine("Supabase is not configured in main.js yet.", "error", 120)
        return
    }

    try {
        var comments = await fetchGlobalComments();
        trackEvent("conversation_comments_loaded", {
            comment_count: comments.length
        })
        if (!comments.length) {
            addLine("No comments yet.", "color2", 120)
            return
        }

        var lines = ['<span class="command">Comments</span>', "<br>"]
        comments.forEach(function(item) {
            lines.push(escapeHtml(item.name) + " [" + formatCommentTime(item.created_at) + "]")
            lines.push("  " + escapeHtml(item.message))
            lines.push("<br>")
        });

        writeLines(lines, "color2 margin", 50)
    } catch (error) {
        addLine("Could not load comments right now. Please try again.", "error", 120)
    }
}

function formatCommentTime(isoTime) {
    var date = new Date(isoTime)
    if (Number.isNaN(date.getTime())) {
        return "Unknown time"
    }
    return date.toLocaleString()
}

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
}

function getResponsiveBanner() {
    return window.innerWidth <= 900 ? bannerMobile : banner
}

function isGaConfigured() {
    return /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
}

function initAnalytics() {
    if (analyticsInitialized || !isGaConfigured()) {
        return
    }

    window.dataLayer = window.dataLayer || []
    if (!window.gtag) {
        window.gtag = function() {
            window.dataLayer.push(arguments)
        }
    }

    window.gtag("js", new Date())
    window.gtag("config", GA_MEASUREMENT_ID, {
        send_page_view: true
    })

    var script = document.createElement("script")
    script.async = true
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID)
    document.head.appendChild(script)

    analyticsInitialized = true

    var traffic = getTrafficAttribution()
    trackEvent("site_visit", {
        traffic_source: traffic.source,
        traffic_medium: traffic.medium,
        traffic_campaign: traffic.campaign
    })
}

function trackEvent(eventName, params) {
    if (!isGaConfigured() || !window.gtag) {
        return
    }

    window.gtag("event", eventName, params || {})
}

function getTrafficAttribution() {
    var params = new URLSearchParams(window.location.search)
    var utmSource = params.get("utm_source")
    var utmMedium = params.get("utm_medium")
    var utmCampaign = params.get("utm_campaign")

    if (utmSource || utmMedium || utmCampaign) {
        return {
            source: utmSource || "(not set)",
            medium: utmMedium || "(not set)",
            campaign: utmCampaign || "(not set)"
        }
    }

    if (!document.referrer) {
        return {
            source: "direct",
            medium: "(none)",
            campaign: "(not set)"
        }
    }

    var referrerHost = "referral"
    try {
        referrerHost = new URL(document.referrer).hostname.replace(/^www\./, "")
    } catch (error) {}

    return {
        source: referrerHost || "referral",
        medium: "referral",
        campaign: "(not set)"
    }
}
