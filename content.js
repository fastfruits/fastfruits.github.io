// Site content. Pure data: no HTML, no markup, no hand-counted whitespace.
//
// Rendering lives in commands.js, dispatch in main.js. Every field here is
// read from inside a function at dispatch time, never while this file loads.
//
// To add a project, add one object to PROJECTS. The index row, the detail
// view, the `help` listing and the typed command are all derived from it.

const LINKS = {
  linkedin: "https://www.linkedin.com/in/nahenry06/",
  github: "https://github.com/fastfruits",
  instagram: "https://instagram.com/n.henry06",
  twitter: "https://x.com/nhenrydev",
  email: "mailto:nicholasahenry06@gmail.com",
}

// main.js opens these by name for the `linkedin` and `github` commands.
var linkedin = LINKS.linkedin
var github = LINKS.github
var instagram = LINKS.instagram
var email = LINKS.email
var twitter = LINKS.twitter

const SOCIALS = [
  { label: "github", url: LINKS.github },
  { label: "linkedin", url: LINKS.linkedin },
  { label: "X (fka twitter)", url: LINKS.twitter },
  { label: "instagram", url: LINKS.instagram },
  { label: "email", url: LINKS.email },
]

// id      the typed command and the data-cmd value; must be unique and lowercase
// title   left column of the projects index, and the detail heading
// heading optional override when the detail heading differs from the title
// blurb   right column of the projects index
// bullets string, or array-of-strings for a hand-wrapped bullet
// demo    path to a video, or null
// site    live URL, or null
// repo    source URL, or null
// status  "wip" hides it from both the index and the dispatcher
const PROJECTS = [
  {
    id: "sheep",
    title: "SheepFinder",
    blurb: "crowd powered solution for lost animals",
    aliases: ["sheepfinder"],
    bullets: [
      "After studying abroad in Northern Ireland, I spotted a problem: farmers and runaway sheep. I built a web app to help farmers tackle it.",
      [
        "Community members who come across a runaway sheep or other animals can upload a photo and describe its markings. Farmers who are signed up and have animals with",
        "those markings are then notified of the animals and its location so they can bring it back to the farm.",
      ],
      "I built this app with Next.js and React and in collaboration with Claude Code a lot in order to create the database and frontend.",
    ],
    site: "https://sheepfinder.xyz",
    repo: "https://github.com/fastfruits/sheep-finder",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    blurb: "this website",
    bullets: [
      [
        "This very website, which I programmed with HTML/CSS and JavaScript to show off my portfolio and web development skills like responsiveness and interactivity.",
        "With this project I deepened my knowledge of HTML, CSS, and JavaScript and learned how to use them to create a website that is both engaging and functional as a portfolio.",
      ],
    ],
    repo: "https://github.com/fastfruits/Website",
  },
  {
    id: "aiapi",
    title: "AI Personality",
    blurb: "AI personality chatbot",
    bullets: [
      [
        "This is an AI personality chatbot that I created using the OpenAI, Azure, and ElevenLabs APIs. The project was coded in Python and used a range of imports",
        "and libraries to tie all the APIs together, creating a chatbot the user could interact with by speaking directly into their microphone.",
        "This project taught me a lot about APIs and how to combine them into a compelling project with Python.",
      ],
    ],
    // TODO: this plays the Text-Transcriber video; it needs a recording of its own.
    demo: "resources/sample.mp4",
    repo: "https://github.com/fastfruits/AI-Personality",
  },
  {
    id: "ai",
    title: "AI Text-Transcriber",
    blurb: "written to digital text converter",
    bullets: [
      [
        "Created and trained an AI model to recognize handwritten text and transcribe it into a .txt file, which could then be converted into an .mp3 file and translated",
        "into whatever language the user wants, if it's available through Google's Translate API. The program was written in Python and used TensorFlow to train the model on over 10,000",
        "images of handwritten text over a few days.",
      ],
    ],
    repo: "https://github.com/panyang05/Text-Transcriber",
  },
  {
    id: "wheat",
    title: "Bro Look At My Wheat",
    heading: "Bro Look At My Wheat (HackHarvard)",
    blurb: "HackHarvard project to assist farmers in crop maintenance",
    bullets: [
      "Trained a drone to autonomously search for wheat with a YoloV8 model, determine its close, then return to an april tag",
      [
        "Built a data pipeline that took the images and weather data gathered and matched them to satellite info in the area and analyzed",
        "it using chalk data agents to then send messages to the farmer via sms of what their next steps should be",
      ],
      "Run on virtual environments through Factory so there's no physical overhead for farmers and faster data processing",
    ],
    repo: "https://github.com/jaromero3rd/audio_signaling",
  },
  {
    id: "neural",
    title: "Neural Network",
    blurb: "Neural network project with NumPy and propagation",
    bullets: [
      [
        "Quick little neural network project using just NumPy so no Tensorflow or other machine learning frameworks. Wanted to learn about what a network is built out of.",
        "Has two layers and uses forward and backward propagation and a simple weight adjustment function to enable learning. Uses the MNIST handwritten numbers dataset and can achieve",
        "around a 90% accuracy on its predictions.",
      ],
    ],
    repo: "https://github.com/fastfruits/neural-network",
  },
  {
    id: "rpg",
    title: "Medieval RPG",
    blurb: "GameJam 2D RPG",
    bullets: [
      [
        "A submission for my school coding club's GameJam, where the theme was time. The game, a 2D top-down RPG, was written in Java using game development",
        "practices like delta timing, rendering many objects to the screen, and building rudimentary AI for the enemies.",
        "It won first place in the competition by an almost unanimous member vote.",
      ],
    ],
    demo: "resources/medievalDemo.mp4",
    repo: "https://github.com/fastfruits/Medieval-RPG",
  },
  {
    id: "energy",
    title: "Energy Education",
    blurb: "class project to teach kids about energy conservation",
    bullets: [
      "A Cornerstone of Engineering class project that I built to present at an end-of-semester expo, where kids aged 7-11 playtested it",
      "Built an online quiz hosted on a Flask server that communicated over serial with a Raspberry Pi Pico to read button presses and send LED signals",
      "Received high praise from users for its responsiveness, functionality, and educational value",
    ],
    repo: "https://github.com/fastfruits/Energy-Education",
  },
  {
    id: "sanitizer",
    title: "Auto Sanitizer Dispenser",
    heading: "Automatic Hand Sanitizer Dispenser",
    blurb: "class project for a contactless sanitizer dispenser",
    bullets: [
      "A project in my high school engineering class where we were tasked with using any means necessary to create a contactless sanitizer dispenser.",
      "While other groups used simple circuits, my group pushed further by using more advanced servos and an Arduino.",
      "The Arduino was programmed alongside an ultrasonic sensor that would detect whether a hand was present and even dispense different amounts based on distance.",
      "We 3D printed a housing for everything to give it a cleaner look.",
      "Through this project I learned more about 3D printing, electronics, and Arduino while working on a team that pursued creative and advanced solutions.",
    ],
    repo: "https://github.com/fastfruits/AutoSanitizerDispenser",
  },
  {
    id: "av",
    title: "Ten80 AV Car",
    blurb: "for my high school's Ten80 AV car",
    bullets: [
      [
        "I joined my school's Ten80 club and became head of the AV car. I coded all the scripts for it to meet the requirements of the Ten80 competition and each of its challenges.",
        "We took the car to many competitions, won often, and were invited to the national finals in Charlotte. With this project I learned to combine software and hardware,",
        "as I programmed sensors like an odometer, IR, and ultrasonic to make the car fully autonomous in each challenge.",
      ],
    ],
    repo: "https://github.com/fastfruits/AutonomousVehicle_Ten802023-2024",
  },
  {
    id: "benchmark",
    title: "Human Benchmark Test",
    blurb: "Hack-A-Thon submission of a human benchmark test",
    bullets: [
      [
        "A program I created with Java for my school coding club's Hack-A-Thon, where the theme was \"test\". Building it for the competition taught me about working with",
        "user input and aggregating data to generate scores and other info for users. It won first place in the competition by popular vote.",
      ],
    ],
    demo: "resources/benchmarkDemo.mp4",
    repo: "https://github.com/fastfruits/Benchmark-Test",
  },

  // Not finished, so not listed and not dispatchable. Flip status to "live"
  // once there are bullets worth showing.
  { id: "jarvis", title: "Jarvis Discord Bot", blurb: "", status: "wip", bullets: [] },
  { id: "news", title: "Daily News Compiler", blurb: "", status: "wip", bullets: [] },
  { id: "wateralarm", title: "Water Alarm Clock", blurb: "", status: "wip", bullets: [] },
]

const EXPERIENCES = [
  {
    org: "Citizens Bank",
    role: "Automation Developer Co-op",
    bullets: [
      "Joining the automation engineering team in the spring to develop scripts and tooling that streamlines internal banking operations",
    ],
  },
  {
    org: "SEONeeded",
    url: "https://seoneeded.com",
    role: "Search Engine Optimization Assistant Intern --> SEO and GEO Assistant",
    bullets: [
      "Returned to SEONeeded in Oct 2025 after my old boss reached out about an opportunity, and I took it",
      "Took on more responsibilities and now work directly with 15+ clients across the South Florida region in all sorts of industries",
      "",
      "Worked as an SEO assistant intern for SEONeeded through the MDCPS Summer Internship Program",
      "Learned a lot about how search engines prioritize results and how to boost sites to the top of the rankings, both organically and locally",
      "Used tools like WordPress, SEOMoz, and Meta Business Suite for the tasks I was assigned",
    ],
  },
  {
    org: "AICamp",
    url: "https://aicamp.org",
    role: "Web Developer Intern",
    bullets: [
      "Worked as a web developer intern for AICamp, where I built new features for the website and helped organize it",
      "Built a new part of the site to host their computer vision AI camps beyond just the summer",
      "Served as manager of the five-person team, where I led update meetings and coordinated the coding and content teams",
      "Used HTML, Tailwind CSS, JavaScript, Vite.js, and React.js to create the site's additions",
    ],
  },
]

const ACTIVITIES = [
  {
    org: "Northeastern Electric Racing (NER)",
    role: "SWE for the simulation team",
    bullets: [
      [
        "Working on a team of two to develop a multi-body simulation tool for NER to test and examine changes to",
        "vehicle, suspension, and tire variables and their effect on speed and times of the car",
      ],
      "Use Python as the backend to do all the physics and Dash Plotly to display to a site to easily see all graphs and metrics",
      "Learned to work with other departments to understand what each one needed in order to better develop the car they were building",
    ],
  },
  {
    org: "Northeastern Satellite Lab (NSL)",
    role: "SWE for the telemetry team",
    bullets: [
      "Working in the telemetry, tracking, and control manager system for the satellite which means working with networking, SDRs, and OBCs",
      "Write F prime code (C++) for all the systems on the satellite for extra redundancy and safety",
    ],
  },
  {
    org: "Students for the Exploration and Discovery of Space",
    role: "SWE for NEST (Network Exploration Swarm Toolkit)",
    bullets: [
      [
        "NEST is a project to create a swarm of miniature C.O.B.R.A. (Crater Observing Bio-inspired Rolling Articulator)",
        "\"snake\" robots to explore and develop multi-agent collaboration in order to complete teamwork-based tasks",
      ],
      [
        "Specifically working on the basic controls of the robots and imitation learning for the COBRA to work “together” with a",
        "robotic grabber arm from ROBOTIS to complete tasks together autonomously",
      ],
      "Used Python to program the robots and simulation software and ROS 2 to communicate with sensors and relay information and instructions",
    ],
  },
]

const SKILL_GROUPS = [
  {
    heading: "Programming Languages",
    items: [
      {
        name: "Python",
        notes: [
          "Learned through videos and projects",
          "Skilled in machine learning, web scraping, automation, and robotics",
          "Use in both of my clubs NER and SEDS for different applications",
        ],
      },
      {
        name: "Java",
        notes: [
          "Learned through my AP Computer Science class and the projects",
          "Experienced in developing computer applications, games, and other types of programs",
        ],
      },
    ],
  },
  {
    heading: "Web Development",
    items: [
      {
        name: "HTML & CSS",
        notes: [
          "Learned through videos and creating websites like this and my internship for AICamp.org",
          "Strong understanding of web design principles and responsive design techniques",
        ],
      },
      {
        name: "JavaScript",
        notes: [
          "Learned through videos and creating websites like this and my internship for AICamp.org",
          "Adept at creating dynamic and interactive web applications using JavaScript",
          "Also comfortable working with frameworks and libraries like React and Vite",
        ],
      },
    ],
  },
  {
    heading: "Certifications",
    items: [
      {
        name: "CAD and 3D Printing",
        notes: [
          "Learned these skills through engineering classes and applied them throughout projects like the AV car and sanitizer",
          "Have certifications for programs like Fusion360, OnShape, and MakerBot 3D printers",
        ],
      },
      {
        name: "Engineering",
        notes: [
          "Learned engineering skills and practices also through my engineering classes at school and through projects",
          "Certified by the RECF(Robotics Education & Competition Foundation) for Robotics and Pre-Engineering",
        ],
      },
    ],
  },
  {
    heading: "Future Skills To Learn",
    items: [
      { name: "C++", notes: [] },
      { name: "ROS 2", notes: [] },
      { name: "Mobile App Development", notes: [] },
    ],
  },
]
