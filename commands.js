var linkedin = "https://www.linkedin.com/in/nicholas-henry-57b325283/";
var github = "https://github.com/fastfruits";
var instagram = "https://instagram.com/n.henry06"
var email = 'mailto:nichoias.henry1006@gmail.com';

help = [
  "<br>",
  '<span class="command">whois</span>          Who Is Nicholas Henry?',
  '<span class="command">techstack</span>      My Languages And Libraries',
  '<span class="command">internships</span>    Real World Experience',
  '<span class="command">projects</span>       View My Projects',
  '<span class="command">socials</span>        Display Social Links',
  '<span class="command">email</span>          Contact Through Email',
  '<span class="command">light/dark</span>     Changes The Theme Of The Terminal',
  '<span class="command">banner</span>         Display The Header Again',
  '<span class="command">history</span>        View Command History',
  '<span class="command">clear</span>          Clear The Terminal',
  "<br>",
];

whois = [
  "<br>",
  "Hi I'm Nicholas Henry",
  "<br>",
  " I am currently a incoming freshman at Northeastern University studying mechanical engineering and computer science.",
  " I started programming after getting a RaspberryPi 3 as a gift and then really took off after picking up AP Computer Science A at my school in which",
  " I learned a lot about Java and OOP and had a great teacher who instilled good programming practices and skills through creativity driven projects.",
  "<br>",
  " After passing my class with flying colors I continued to program and strived to learn new skills which I did through AICamp.org",
  " In their summer camp I programmed and trained an AI model with python, tensorflow, and Google's API which taught me a lot.",
  "<br>",
  " After the camp they called me back after seeing my work and asked me to intern for them which I did and this taught me a lot of",
  " web development like HTML/CSS, Javascript, and libraries like React and Vite to connect frontend to backend.",
  " After the internship I started learning C# and have won my school coding club's Hack-A-Thon and GameJam and made this website.",
  "<br>",
  "Thanks for visiting my site!",
  "                           -Nicholas Henry",
  "<br>"
];

skills = [
  "<br>",
  '<span class="command">Programming Languages</span>',
  "<br>",
  "   -Java: ",
  "         *Learned through my AP Computer Science class and the projects assigned by my teacher",
  "         which were very beneficial as they were structured in a way that allowed creativity and freedom.",
  "         *Experienced in developing computer applications, games, and other types of programs.",
  "         *Have a lot of work with Java GUI like swing and JOP libraries.",
  "   -Python: ",
  "         *Learned through self teaching, videos, and projects.",
  "         *Skilled in machine learning, web scraping, automation, and working with robotics.",
  "         *Mainly used for my school club's Ten80 AV car which used a micro controller and sensors like an odometer, IR, and ultrasonic.",
  "   -C#: ",
  "         *Learned through the freecodecamp.org C# certification course and self-driven projects.",
  "         *This is the language I'm least experienced in but have created applications and small games in the Unity Engine.",
  "<br>",
  '<span class="command">Web Development</span>',
  "<br>",
  "   -HTML & CSS: ",
  "         *Learned through self teaching, videos and creating websites like this and my internship for AICamp.org.",
  "         *Strong understanding of web design principles and responsive design techniques.",
  "   -JavaScript: ",
  "         *Learned through self teaching, videos and creating websites like this and my internship for AICamp.org.",
  "         *Adept at creating dynamic and interactive web applications using vanilla JavaScript.",
  "         *Able to also work with frameworks and libraries like React and Vite",
  "<br>",
  '<span class="command">Certifications</span>',
  "   -CAD and 3D Printing",
  "         *Learned these skills in my school's engineering classes and employed these skills throughout on projects like the AV car.",
  "         *Have certifications for programs like Fusion360, OnShape, and MakerBot 3D printers.",
  "   -Engineering",
  "         *Learned engineering skills and practices also through my engineering classes at school and through projects.",
  "         *Certified by the RECF(Robotics Education & Competition Foundation) for Robotics and Pre-Engineering.",
  "<br>",
  '<span class="command">Future Skills To Learn</span>',
  "<br>",
  "   -More work with machine learning and Tensorflow",
  "   -C++",
  "<br>"
]

internships = [
  "<br>",
  '<a class="command" href="aicamp.org" target="_blank">AICamp</a> - Web Developer Intern',
  "<br>",
  "   - Was a web developer intern for AICamp in which I created additions for the website and organization of it",
  "   - Worked on creating new a part of the site to host their computer vision AI summer camps on the site instead of needed a instructor",
  "   - Was the team manager of the five person team in which I lead update meetings and worked with the coding and content team together",
  "   - Used HTML, Tailwind CSS, JavaScript, Vite.js, and React.js to create the site's additions",
  "<br>",
  '<a class="command" href="seoneeded.com" target="_blank">SEONeeded</a> - SEO Assistant Intern',
  "<br>",
  "   - Worked as an SEO assistant intern for SEONeeded through the MDCPS(Miami-Dade County Public Schools) Summer Internship Program",
  "   - Learned a lot about the way search engines prioritize search results and how to boost sites to the top of the lists organically and locally",
  "   - Mainly did keyword research, blog creation, and social media posting for SEONeeded and The4thSister for the duration of the internship",
  "   - Used technologies like WordPress, SEOMoz, and Meta business suite for the tasks I was assigned.",
  "<br>"
]

projects = [
  "<br>",
  '<a class="command" id="portfolio" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(portfolio, \'\', 80)">Portfolio Website</a>           This website which I coded using HTML/CSS and JavaScript',
  '<a class="command" id="aiAPI" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(aiAPI, \'\', 80)">AI Personality</a>              AI personality chatbot using OpenAI, Azure, and Elevenlabs APIs coded in Python',
  '<a class="command" id="ai" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(ai, \'\', 80)">AI Text-Transcriber</a>         First machine learning project using python, tensorflow, and google APIs',
  '<a class="command" id="rpg" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(rpg, \'\', 80)">Medieval RPG</a>                Submission for my school club\'s GameJam coded in Java',
  '<a class="command" id="av" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(av, \'\', 80)">Ten80 AV Car</a>                Wrote scripts in python for my school\'s Ten80 AV Car',
  '<a class="command" id="benchmark" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(benchmark, \'\', 80)">Human Benchmark Test</a>        Submission for my school club\'s Hack-A-Thon coded in Java',
  '<a class="command" id="sanitizer" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(sanitizer, \'\', 80)">Auto Sanitizer Dispenser</a>    Engineering class project to create a contactless sanitizer dispenser',
  '<a class="command" id="jarvis" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(jarvis, \'\', 80)">Jarvis Discord Bot[WIP]</a>',
  '<a class="command" id="news" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(news, \'\', 80)">Daily News Compiler[WIP]</a>',
  '<a class="command" id="news" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(wateralarm, \'\', 80)">Water Alarm Clock[WIP]</a>',
  "<br>",
  '<span class="command">Commands(or clickable btw^):</span>                   portfolio, aiAPI, ai, rpg, av, benchmark, dispenser, jarvis, news, wateralarm',
  "<br>"
];

socials = [
  "<br>",
  '<span class="command">instagram</span>      <a href="' + instagram + '" target="_blank">instagram.com' + "</a>",
  '<span class="command">github</span>         <a href="' + github + '" target="_blank">github.com' + "</a>",
  '<span class="command">linkedin</span>       <a href="' + linkedin + '" target="_blank">linkedin.com' + "</a>",
  "<br>"
]; 

portfolio = [
  "<br>",
  '<span class="command">Portfolio Website</span>',
  "<br>",
  "       -This very website which I programmed with HTML/CSS and Javascript to show off my portfolio and web development skills like responsiveness and functionality.",
  "        With this project I increased my knowledge of HTML, CSS, and Javascript and how to use them to create a website that is interesting and usable as a portfolio.", 
  "<br>",
  'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/Website" target="_blank">Repository</a>',
  "<br>"
];

aiAPI = [
  "<br>",
  '<span class="command">AI Personality</span>',
  "<br>",
  "       -This is an AI personality chatbot that I created using OpenAI, Azure, and Elevenlabs APIs. The project was coded in Python and used a multitude of imports",
  "        and libraries to tie together all the APIs to create a chatbot that could be used to interact with the user using the microphone and speaking directly to the LLM.",
  "        This project taught me a lot about APIs and how to utilize them to create an interesting project with Python.",
  " <br>",
  'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(aiAPIDemo, \'\', 80)">Demo</a>',
  'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/AI-Personality" target="_blank">Repository</a>',
  "<br>"
]

news = [
  "<br>",
  '<span class="command">Daily News Compiler[WIP]</span>',
  "<br>",
  "      -Web app that pulls and aggregates news stories from around the world based on what topics the user picks. Using World News API to pull articles and ElevenLabs API",
  "       for text to speech.",
  "      -WIP come back later.",
  "<br>",
  //'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(newsDemo, \'\', 80)">Demo</a>',
  'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/Daily-News-Compiler" target="_blank">Repository</a>',
  "<br>"
]

jarvis = [
  "<br>",
  '<span class="command">Jarvis Discord Bot[WIP]</span>',
  "<br>",
  "      -Discord bot that sits in a voice chat that waits and listens for call command which will then do what the user asks for example play music or explain a topic.",
  "      -WIP come back later.",
  "<br>",
  //'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(jarvisDemo, \'\', 80)">Demo</a>',
  'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/Discord-Jarvis-Bot" target="_blank">Repository</a>',
  "<br>"
]

ai = [
  "<br>",
  '<span class="command">AI Text-Transcriber</span>',
  "<br>",
  "      -Created and trained an AI model to recognize handwritten text and then transcribe it into a .txt file which could then be created into a .mp3 file that could be translated",
  "       to whatever language the user wants if its available through Google's translate API. The program was written in python and used tensorflow to teach the model with >10,000",
  "       images of handwritten text over a few days.",
  "<br>",
  //'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(aiDemo, \'\', 80)">Demo</a>',
  'Check out the code here on GitHub -----> <a class="command" href="https://github.com/panyang05/Text-Transcriber" target="_blank">Repository</a>',
  "<br>"
];

rpg = [
  "<br>",
  '<span class="command">Medieval RPG</span>',
  "<br>",
  "      -Was a submission for my school coding club's GameJam in which the theme was time. The game a 2D top down RPG style game was written in java using game development ",
  "       practices like delta time, drawing many things to the screen, and creating a rudimentary artificial intelligence for the enemies.",
  "       Won first place in the competition by almost unanimous member voting.",
  "<br>",
  'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(rpgDemo, \'\', 80)">Demo</a>',
  'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/Medieval-RPG" target="_blank">Repository</a>',
  "<br>"
];

av = [
  "<br>",
  '<span class="command">Ten80 AV Car</span>',
  "<br>",
  "     -I joined my school's Ten80 club and became the head of the AV car. I coded all the scripts for it to adhere to the Ten80 competition and each of the challenges.",
  "      We took this car to many competitions and won a lot and were invited to the national finals in Charlotte. With this project I learned to combined software and hardware",
  "      as I worked with coding sensors like an odometer, IR, and ultrasonic for the cars to be fully automatic in each challenge.",
  "<br>",
  'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/AutonomousVehicle_Ten802023-2024" target="_blank">Repository</a>',
  "</br>"
];

benchmark = [
  "<br>",
  '<span class="command">Human Benchmark Test</span>',
  "<br>",
  "     -A program I created with Java for my school coding club's Hack-A-Thon where the them was \"test\". Creating this program for the competition taught me about working with",
  "      user input and agglomerating data to generate scores and other info for the users. This program won first place in the competition by popular vote.",
  "<br>",
  'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(benchmarkDemo, \'\', 80)">Demo</a>',
  'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/Benchmark-Test" target="_blank">Repository</a>',
  "<br>"
];

sanitizer = [
"</br>",
'<span class="command">Automatic Hand Sanitizer Dispenser</span>',
"</br>",
"      -A project in my high school engineering class in which we were assigned to use any means necessary to create a contactless dispenser for sanitizer.",
"       while other groups used simple circuits my group pioneered by using more advanced servos and Arduino.",
"      -The arduino was programmed in tandem with a ultrasonic sensor which would detect if a hand was there and even dispense different amounts based on distance",
"      -We 3D printed a housing for everything to make it look cleaner.",
"      -Through this project I learned more about 3D printing, electronics, and Arduino while working on a team that used creative and advanced solutions.",
"</br>",
'Check out the code here on my Github -----> <a class="command" href="https://github.com/fastfruits/AutoSanitizerDispenser" target="_blank">Repository</a>',
"</br>"
]

wateralarm = [
  "<br>",
  '<span class="command">Water Alarm Clock[WIP]</span>',
  "<br>",
  "      -WIP come back later for the complete project.",
  "<br>",
  //'Click for a <a class="command" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); writeLines(jarvisDemo, \'\', 80)">Demo</a>',
  'Check out the code here on my GitHub -----> <a class="command" href="https://github.com/fastfruits/Water-Alarm-Clock" target="_blank">Repository</a>',
  "<br>"
];

aiDemo = [
  "<br>",
  '<video controls src="demos/sample.mp4">',
  "<br>",
]

rpgDemo = [
  "<br>",
  '<video controls src="demos/medievalDemo.mp4">',
  "<br>",
]

benchmarkDemo = [
  "<br>",
  '<video controls src="demos/benchmarkDemo.mp4">',
  "<br>",
]

aiAPIDemo = [
  "<br>",
  '<video controls src="demos/sample.mp4">',
  "<br>",
]

newsDemo = [
  "<br>",
  '<video controls src="demos/sample.mp4">',
  "<br>",
]

jarvisDemo = [
  "<br>",
  '<video controls src="demos/sample.mp4">',
  "<br>",
]

banner = [
  '<span class="index">NHenry.dev [Version 1.2.4]<span>',
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
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
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