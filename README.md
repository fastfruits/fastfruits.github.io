# README

# Portfolio Website Project

## Project Description

This project is a portfolio website designed to look and function like a terminal interface. The goal was to create a unique and interactive experience for visitors, showcasing my web development skills using HTML, CSS, JavaScript, and Supabase.

### HTML
- **Banner Section**: Contains the title and introductory message.
- **Command Input Area**: A text input field where users can type commands.
- **Output Area**: A section where the results of the commands typed by the user are displayed.

### CSS
- **Terminal Window**: The main container styled to look like a terminal window with a dark background, light text, and a fixed-width font.
- **Command Line Interface**: The input field and output area are styled to mimic a real terminal.
- **Animations**: Subtle animations and transitions to enhance the user experience, such as blinking cursor and smooth scrolling.

### JavaScript
- **Command Handling**: Capturing and processing user input to mimic terminal commands. This includes recognizing commands like `help`, `whois`, `projects`, etc., and displaying corresponding outputs.
- **Auto-scroll**: Ensuring the terminal window scrolls automatically as new output is added, maintaining the look and feel of a real terminal.

### Supabase
- **Comment Storage**: Use Supabase in order to store comments made by users here
- **Comment Creation**: Enables users to create comments with their name and a short message
- **Comment Moderation**: `profanity.js` blocks profanity and slurs (including leetspeak, spaced-out, and repeated-letter variants) before a comment is sent, and masks anything already stored when comments are displayed
- **Server-Side Enforcement**: `supabase/comments-hardening.sql` mirrors that filter as a database trigger, along with length limits, rate limiting, and duplicate blocking, so the rules still apply to anyone posting directly to the API

### Google Analytics 4 (GA4)
- **Site Visits**: Automatically tracks page views and a `site_visit` event.
- **Conversations**: Tracks comment command attempts, successful comment submissions, failures, and comment feed views.
- **Traffic Sources**: Captures source/medium/campaign attribution via UTM params and referrer data.

### Future Enhancements

- **Additional Commands**: Adding more commands to display additional information.
- **More projects!**: Working on more projects to add here as I keep on creating.

---

This project not only showcases my skills in HTML, CSS, and JavaScript but also demonstrates my ability to create an engaging and unique user experience. Thank you for visiting my portfolio repository!
