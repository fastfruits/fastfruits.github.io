var linkedin = "https://www.linkedin.com/in/nahenry06/"
var github = "https://github.com/fastfruits"
var instagram = "https://instagram.com/n.henry06"
var email = "mailto:nicholasahenry06@gmail.com"

help = [
  "<br>",
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(whois, \'color2\', 50)">whois</a>          who is Nicholas Henry?',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(resume, \'color2\', 50)">resume</a>         my resume',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(skills, \'color2\', 50)">techstack</a>      languages, frameworks, systems',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(activities, \'color2\', 50)">activities</a>     clubs and other',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(internships, \'color2\', 50)">internships</a>    experience',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(projects, \'color2\', 50)">projects</a>       my projects',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> comments\', \'no-animation\', 0); commander(\'comments\')">comments</a>       view and add comments to this site',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(socials, \'color2\', 50)">socials</a>        display my social links',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(history, \'color2\', 50)">history</a>        view command history',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> light\', \'no-animation\', 0); commander(\'light\')">light</a>/<a class="command" onclick="addLine(\'X:\\Users\\Guest> dark\', \'no-animation\', 0); commander(\'dark\')">dark</a>     change the theme',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> banner\', \'no-animation\', 0); commander(\'banner\')">banner</a>         display the header',
  '<a class="command" onclick="addLine(\'X:\\Users\\Guest> clear\', \'no-animation\', 0); commander(\'clear\')">clear</a>          clear the terminal',
  "<br>",
]

whois = [
  "<br>",
  "Hello,",
  "<br>",
  "I am currently a freshman at Northeastern University studying mechanical engineering and computer science, looking for an internship for summer 2026 or a co-op next spring.",
  "I studied abroad for my first semester at Queen's University in Northern Ireland through NU.IN and gained a great deal of independence.",
  "Now on the Boston campus, I'm involved in clubs like NER and SEDS while excelling in my studies with a 3.94 GPA.",
  "<br>",
  "<b>A little bit about my past</b>",
  "I'm a first-generation American — with Russian and Irish citizenship as well — and I grew up in Miami, FL.",
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

skills = [
  "<br>",
  '<span class="command">Programming Languages</span>',
  "<br>",
  "   -Python: ",
  "         *Learned through videos and projects",
  "         *Skilled in machine learning, web scraping, automation, and robotics",
  "         *Use in both of my clubs NER and SEDS for different applications",
  "   -Java: ",
  "         *Learned through my AP Computer Science class and the projects",
  "         *Experienced in developing computer applications, games, and other types of programs",
  "<br>",
  '<span class="command">Web Development</span>',
  "<br>",
  "   -HTML & CSS: ",
  "         *Learned through videos and creating websites like this and my internship for AICamp.org",
  "         *Strong understanding of web design principles and responsive design techniques",
  "   -JavaScript: ",
  "         *Learned through videos and creating websites like this and my internship for AICamp.org",
  "         *Adept at creating dynamic and interactive web applications using JavaScript",
  "         *Also comfortable working with frameworks and libraries like React and Vite",
  "<br>",
  '<span class="command">Certifications</span>',
  "   -CAD and 3D Printing",
  "         *Learned these skills through engineering classes and applied them throughout projects like the AV car and sanitizer",
  "         *Have certifications for programs like Fusion360, OnShape, and MakerBot 3D printers",
  "   -Engineering",
  "         *Learned engineering skills and practices also through my engineering classes at school and through projects",
  "         *Certified by the RECF(Robotics Education & Competition Foundation) for Robotics and Pre-Engineering",
  "<br>",
  '<span class="command">Future Skills To Learn</span>',
  "<br>",
  "   -C++",
  "   -ROS 2",
  "   -Mobile App Development",
  "<br>"
]

activities = [
  "<br>",
  '<a class="command">Northeastern Electric Racing (NER)</a> - SWE for the simulation team',
  "<br>",
  "   - Working on a team of two to develop a multi-body simulation tool for NER to test and examine changes to",
  "     vehicle, suspension, and tire variables and their effect on speed and times of the car",
  "   - Use Python as the backend to do all the physics and Dash Plotly to display to a site to easily see all graphs and metrics",
  "   - Learned to work with other departments to understand what each one needed in order to better develop the car they were building",
  "<br>",
  '<a class="command">Students for the Exploration and Discovery of Space</a> - SWE for NEST (Network Exploration Swarm Toolkit)',
  "<br>",
  "   - NEST is a project to create a swarm of miniature C.O.B.R.A. (Crater Observing Bio-inspired Rolling Articulator)",
  "    \"snake\" robots to explore and develop multi-agent collaboration in order to complete teamwork-based tasks",
  "   - Specifically working on the basic controls of the robots and imitation learning for the COBRA to work “together” with a",
  "     robotic grabber arm from ROBOTIS to complete tasks together autonomously",
  "   - Used Python to program the robots and simulation software and ROS 2 to communicate with sensors and relay information and instructions",
  "<br>"
]

internships = [
  "<br>",
  '<a class="command" href="seoneeded.com" target="_blank">SEONeeded</a> - Search Engine Optimization Assistant Intern --> SEO and GEO Assistant',
  "<br>",
  "   - Returned to SEONeeded in Oct 2025 after my old boss reached out about an opportunity, and I took it",
  "   - Took on more responsibilities and now work directly with 15+ clients across the South Florida region in all sorts of industries",
  "<br>",
  "   - Worked as an SEO assistant intern for SEONeeded through the MDCPS Summer Internship Program",
  "   - Learned a lot about how search engines prioritize results and how to boost sites to the top of the rankings, both organically and locally",
  "   - Used tools like WordPress, SEOMoz, and Meta Business Suite for the tasks I was assigned",
  "<br>",
  '<a class="command" href="aicamp.org" target="_blank">AICamp</a> - Web Developer Intern',
  "<br>",
  "   - Worked as a web developer intern for AICamp, where I built new features for the website and helped organize it",
  "   - Built a new part of the site to host their computer vision AI camps beyond just the summer",
  "   - Served as manager of the five-person team, where I led update meetings and coordinated the coding and content teams",
  "   - Used HTML, Tailwind CSS, JavaScript, Vite.js, and React.js to create the site's additions",
  "<br>"
]

projects = [
  "<br>",
  '<a class="command" id="portfolio" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(portfolio, \'\', 80)">Portfolio Website</a>           this website',
  '<a class="command" id="aiAPI" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(aiAPI, \'\', 80)">AI Personality</a>              AI personality chatbot',
  '<a class="command" id="ai" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(ai, \'\', 80)">AI Text-Transcriber</a>         written to digital text converter',
  '<a class="command" id="rpg" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(rpg, \'\', 80)">Medieval RPG</a>                GameJam 2D RPG',
  '<a class="command" id="benchmark" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(energy, \'\', 80)">Energy Education</a>            class project to teach kids about energy conservation',
  '<a class="command" id="sanitizer" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(sanitizer, \'\', 80)">Auto Sanitizer Dispenser</a>    class project for a contactless sanitizer dispenser',
  '<a class="command" id="sheep" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(sheep, \'\', 80)">Sheep Finder[WIP]</a>',
  '<a class="command" id="av" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(av, \'\', 80)">Ten80 AV Car</a>                for my high school\'s Ten80 AV car',
  '<a class="command" id="benchmark" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(benchmark, \'\', 80)">Human Benchmark Test</a>        Hack-A-Thon submission of a human benchmark test',
  //'<a class="command" id="jarvis" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(jarvis, \'\', 80)">Jarvis Discord Bot[WIP]</a>',
  //'<a class="command" id="news" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(news, \'\', 80)">Daily News Compiler[WIP]</a>',
  //'<a class="command" id="news" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(wateralarm, \'\', 80)">Water Alarm Clock[WIP]</a>',
  "<br>",
  '<span class="command">Commands(or clickable btw^):</span>           portfolio, aiAPI, ai, rpg, av, energy, benchmark, sanitizer, sheepfinder',
  "<br>"
]

socials = [
  "<br>",
  '<a class="command" href="' + github + '" target="_blank">github</a>',
  '<a class="command" href="' + linkedin + '" target="_blank">linkedin</a>',
  '<a class="command" href="' + instagram + '" target="_blank">instagram</a>',
  '<a class="command" href="' + email + '" target="_blank">email</a>',
  "<br>"
] 

projectCatalog = [
  portfolio = [
    "<br>",
    '<span class="command">Portfolio Website</span>',
    "<br>",
    '       -This very website, which I programmed with HTML/CSS and JavaScript to show off my portfolio and web development skills like responsiveness and interactivity.',
    "        With this project I deepened my knowledge of HTML, CSS, and JavaScript and learned how to use them to create a website that is both engaging and functional as a portfolio.",
    "<br>",
    'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/Website" target="_blank">Repository</a>',
    "<br>"
  ],
  
  aiAPI = [
    "<br>",
    '<span class="command">AI Personality</span>',
    "<br>",
    "       -This is an AI personality chatbot that I created using the OpenAI, Azure, and ElevenLabs APIs. The project was coded in Python and used a range of imports",
    "        and libraries to tie all the APIs together, creating a chatbot the user could interact with by speaking directly into their microphone.",
    "        This project taught me a lot about APIs and how to combine them into a compelling project with Python.",
    " <br>",
    'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(aiAPIDemo, \'\', 80)">Demo</a>',
    'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/AI-Personality" target="_blank">Repository</a>',
    "<br>"
  ],
  
  
  ai = [
    "<br>",
    '<span class="command">AI Text-Transcriber</span>',
    "<br>",
    "      -Created and trained an AI model to recognize handwritten text and transcribe it into a .txt file, which could then be converted into an .mp3 file and translated",
    "       into whatever language the user wants, if it's available through Google's Translate API. The program was written in Python and used TensorFlow to train the model on over 10,000",
    "       images of handwritten text over a few days.",
    "<br>",
    //'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(aiDemo, \'\', 80)">Demo</a>',
    'Check out the code here on GitHub -----> <a class="command" href="https://github.com/panyang05/Text-Transcriber" target="_blank">Repository</a>',
    "<br>"
  ],
  
  rpg = [
    "<br>",
    '<span class="command">Medieval RPG</span>',
    "<br>",
    "      -A submission for my school coding club's GameJam, where the theme was time. The game, a 2D top-down RPG, was written in Java using game development",
    "       practices like delta timing, rendering many objects to the screen, and building rudimentary AI for the enemies.",
    "       It won first place in the competition by an almost unanimous member vote.",
    "<br>",
    'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(rpgDemo, \'\', 80)">Demo</a>',
    'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/Medieval-RPG" target="_blank">Repository</a>',
    "<br>"
  ],
  
  av = [
    "<br>",
    '<span class="command">Ten80 AV Car</span>',
    "<br>",
    "     -I joined my school's Ten80 club and became head of the AV car. I coded all the scripts for it to meet the requirements of the Ten80 competition and each of its challenges.",
    "      We took the car to many competitions, won often, and were invited to the national finals in Charlotte. With this project I learned to combine software and hardware,",
    "      as I programmed sensors like an odometer, IR, and ultrasonic to make the car fully autonomous in each challenge.",
    "<br>",
    'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/AutonomousVehicle_Ten802023-2024" target="_blank">Repository</a>',
    "</br>"
  ],
  
  benchmark = [
    "<br>",
    '<span class="command">Human Benchmark Test</span>',
    "<br>",
    "     -A program I created with Java for my school coding club's Hack-A-Thon, where the theme was \"test\". Building it for the competition taught me about working with",
    "      user input and aggregating data to generate scores and other info for users. It won first place in the competition by popular vote.",
    "<br>",
    'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(benchmarkDemo, \'\', 80)">Demo</a>',
    'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/Benchmark-Test" target="_blank">Repository</a>',
    "<br>"
  ],
  
  sanitizer = [
  "</br>",
  '<span class="command">Automatic Hand Sanitizer Dispenser</span>',
  "</br>",
  "      -A project in my high school engineering class where we were tasked with using any means necessary to create a contactless sanitizer dispenser.",
  "      -While other groups used simple circuits, my group pushed further by using more advanced servos and an Arduino.",
  "      -The Arduino was programmed alongside an ultrasonic sensor that would detect whether a hand was present and even dispense different amounts based on distance.",
  "      -We 3D printed a housing for everything to give it a cleaner look.",
  "      -Through this project I learned more about 3D printing, electronics, and Arduino while working on a team that pursued creative and advanced solutions.",
  "</br>",
  'Check out the code here on my Github -----> <a class="command" href="https://github.com/fastfruits/AutoSanitizerDispenser" target="_blank">Repository</a>',
  "</br>"
  ],
  
  energy = [
    "<br>",
    '<span class="command">Energy Education</span>',
    "<br>",
    "     -A Cornerstone of Engineering class project that I built to present at an end-of-semester expo, where kids aged 7-11 playtested it",
    "     -Built an online quiz hosted on a Flask server that communicated over serial with a Raspberry Pi Pico to read button presses and send LED signals",
    "     -Received high praise from users for its responsiveness, functionality, and educational value",
    "<br>",
    '<span>Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(energyDemo, \'\', 80)">Demo</a></span>',
    'Check out the code here on my Github -----> <a class="command" href="https://github.com/fastfruits/Energy-Education" target="_blank">Repository</a>',
  ],
  
  sheep = [
    "<br>",
    '<span class="command">Sheep Finder[WIP]</span>',
    "<br>",
    "     -After studying abroad in Northern Ireland, I spotted a problem: farmers and runaway sheep. I'm building a mobile app to help farmers tackle it.",
    "     -Community members who come across a runaway sheep can upload a photo and describe its markings. Farmers who are signed up and have sheep with",
    "     those markings are then notified of the sheep and its location so they can bring it back to the farm.",
    "<br>",
    'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/sheep-finder" target="_blank">Repository</a>',
    "<br>"
  ],
]

demos = [
  aiDemo = [
    "<br>",
    '<video controls src="demos/sample.mp4">',
    "<br>",
  ],
  
  rpgDemo = [
    "<br>",
    '<video controls src="demos/medievalDemo.mp4">',
    "<br>",
  ],
  
  benchmarkDemo = [
    "<br>",
    '<video controls src="demos/benchmarkDemo.mp4">',
    "<br>",
  ],
  
  aiAPIDemo = [
    "<br>",
    '<video controls src="demos/sample.mp4">',
    "<br>",
  ],
]

resume = [
  "<br>",
  '<span>Download my latest resume here --> <a class="command" href="/resume.pdf" download target="_blank">(PDF)</a><span>',
  "<br>",
]

banner = [
  '<span class="index">NHenry.dev [Version 2.0.0]<span>',
  ,'<span class="index">Nicholas Henry (NH) Not A Corporation. All rights reserved.</span>',
  ,"                              =",
  ,"                              ==",
  ,"                             ===",
  ,"                            ===",
  ,"                          ====",
  ,"                        =====    ==",
  ,"                      ======  ===",
  ,"                    =====  ====",
  ,"                  =====   ===",
  ,"                 =====   ====",
  ,"                 ====    =====",
  ,"                  ====    =====",
  ,"                    ===    ====",
  ,"                      ==   ====       ***",
  ,"            ****#         ===           ***#",
  ,"           **************************    ***",
  ,"               ******************       ***#",
  ,"              ***                      ***",
  ,"              ******************** ****#",
  ,"                   **********",
  ,"                ****                                " + '<span class="color2">__                                     _            ',
  ,"        ******  ****************                 " + '<span class="color2">/\\ \\ \\/\\  /\\___ _ __  _ __ _   _       __| | _____   __</span>',
  ,"      *****          #***#*           ***       " + '<span class="color2">/  \\/ / /_/ / _ \\ \'_ \\| \'__| | | |     / _` |/ _ \\ \\ / /',
  ,"       *************###***************** **    " + '<span class="color2">/ /\\  / __  /  __/ | | | |  | |_| |  _ | (_| |  __/\\ V / ',
  ,"            *********************** #*****     " + '<span class="color2">\\_\\ \\/\\/ /_/ \\___|_| |_|_|   \\__, | (_) \\__,_|\\___| \\_/  ',
  ,"             ************************                                       " + '<span class="color2">|___/                   ',
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  "<span class=\"color2\">For a list of available commands, type (or click) '</span><a class=\"command\" onclick=\"addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(help, \'color2\', 50)\">help</a><span class=\"color2\">'.</span>",
]

bannerMobile = [
  '<span class="index">NHenry.dev [Version 1.2.4]<span>',
  '<span class="index">Nicholas Henry (NH) Not A Corporation. All rights reserved.</span>',
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
  "                ****",
  "        ******  ****************                 ",
  "      *****          #***#*           ***       ",
  "       *************###***************** **    ",
  "            *********************** #*****     ",
  "             ************************",
  '<span class="color2">     __                                     _</span>',
  '<span class="color2">  /\\ \\ \\/\\  /\\___ _ __  _ __ _   _       __| | _____   __</span>',
  '<span class="color2"> /  \\/ / /_/ / _ \\ \'_ \\| \'__| | | |     / _` |/ _ \\ \\ / /</span>',
  '<span class="color2">/ /\\  / __  /  __/ | | | |  | |_| |  _ | (_| |  __/\\ V /</span>',
  '<span class="color2">\\_\\ \\/\\/ /_/ \\___|_| |_|_|   \\__, | (_) \\__,_|\\___| \\_/</span>',
  '<span class="color2">                              |___/</span>',
  "<br>",
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  "<span class=\"color2\">For a list of available commands \ntype (or click) '</span><a class=\"command\" onclick=\"addLine('X:\\\\Users\\\\Guest> help', 'no-animation', 0); commander('help')\">help</a><span class=\"color2\">'.</span>",
]

light = [
  "<br>",
  "<span>Terminal set to light mode!</span>",
  "<br>"
]

dark = [
  "<br>",
  "<span>Terminal set to dark mode!</span>",
  "<br>"
]

webtitle = [
           '<span class="color2">__                                     _            ',
   '<span class="color2">/\\ \\ \\/\\  /\\___ _ __  _ __ _   _       __| | _____   __</span>',
  '<span class="color2">/  \\/ / /_/ / _ \\ \'_ \\| \'__| | | |     / _` |/ _ \\ \\ / /',
     '<span class="color2">/ /\\  / __  /  __/ | | | |  | |_| |  _ | (_| |  __/\\ V / ',
'<span class="color2">\\_\\ \\/\\/ /_/ \\___|_| |_|_|   \\__, | (_) \\__,_|\\___| \\_/  ',
                                    '<span class="color2">|___/                   ',
]
