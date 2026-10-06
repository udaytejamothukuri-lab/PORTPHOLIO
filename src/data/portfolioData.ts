import type { PortfolioConfig } from '../types/portfolio';

/**
 * ============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION - MOTHUKURI UDAY TEJA
 * ============================================================================
 * Clean, verified configuration for a CSE (Data Science) student.
 * All fields are editable here.
 */

export const GITHUB_USERNAME = "udaytejamothukuri-lab";

export const portfolioConfig: PortfolioConfig = {
  name: "Mothukuri Uday Teja",
  displayName: "Uday Teja Mothukuri",
  initials: "UT",
  role: "B.Tech – Computer Science & Engineering (Data Science)",
  tagline: "CSE (Data Science) Student | Building with AI, Data & Code",
  subTagline:
    "I'm a Computer Science & Engineering (Data Science) student passionate about Artificial Intelligence, Data Science, software development, and building practical solutions to real-world problems.",
  statusBadge: "Open to Internship Opportunities",
  
  // Real Social Profiles
  email: "", // Empty so it displays "Email address will be added soon."
  githubUsername: GITHUB_USERNAME,
  githubUrl: "https://github.com/udaytejamothukuri-lab",
  linkedinUrl: "https://www.linkedin.com/in/uday-teja-mothukuri-797919373",
  location: "Hyderabad, Telangana, India",
  
  // Media Assets
  profileImage: "/profile.jpg",
  resumePath: "/resume.pdf",

  // About Section Narrative
  aboutText:
    "I am Mothukuri Uday Teja, a B.Tech Computer Science & Engineering (Data Science) student interested in Artificial Intelligence, Data Science, software development, and emerging technologies. I enjoy learning by building practical projects and exploring new technologies through workshops, technical events, and hands-on experimentation.",

  // Authentic Student Metrics
  stats: [
    {
      value: "01+",
      label: "Years Learning",
      description: "Dedicated Computer Science & Data Science focus",
    },
    {
      value: "05+",
      label: "Core Technologies",
      description: "Across Python, Web, Databases & AI libraries",
    },
    {
      value: "04+",
      label: "Projects Built",
      description: "Applied AI, NLP, Vision & Web applications",
    },
    {
      value: "Multiple",
      label: "Workshops & Events",
      description: "Active participant in technical immersions & bootcamps",
    },
  ],

  // Education Timeline (Configurable)
  education: {
    degree: "B.Tech – Computer Science & Engineering (Data Science)",
    field: "Computer Science & Engineering (Data Science)",
    institution: "NXT Wave Institute of Advanced Technology at Malla Reddy Vishwavidyapeeth",
    status: "Undergraduate Student",
    graduationYear: "2025 – 2029",
    location: "Hyderabad, India",
    highlights: [
      "Specialized coursework in Data Science, Machine Learning, Mathematical Foundations & Algorithms",
      "Hands-on practical development tracks in Artificial Intelligence, Computer Vision & Full-Stack Systems",
      "Active engagement in hands-on workshops, technical symposiums, and peer coding initiatives",
    ],
  },

  // Categorized Skills (Honestly Represented - No fake percentage bars)
  skillCategories: [
    {
      category: "Programming",
      iconName: "Code2",
      skills: [
        { name: "Python", level: "Primary Language / Applied AI & Data Science" },
        { name: "Java", level: "Object-Oriented Programming & DSA" },
        { name: "C/C++", level: "Core Systems Fundamentals & Logic" },
      ],
    },
    {
      category: "Web Development",
      iconName: "Globe",
      skills: [
        { name: "HTML", level: "Semantic Structure & Modern Markup" },
        { name: "CSS", level: "Responsive Styling & Layouts" },
        { name: "JavaScript", level: "DOM Manipulation & Async Logic" },
        { name: "React", level: "Component Architecture & State Management" },
      ],
    },
    {
      category: "Data & AI",
      iconName: "Brain",
      skills: [
        { name: "Data Science", level: "Exploratory Data Analysis & Wrangling" },
        { name: "Artificial Intelligence", level: "Core Concepts & Intelligent Systems" },
        { name: "Machine Learning", level: "Supervised & Unsupervised Modeling" },
        { name: "NLP", level: "Text Preprocessing & Similarity Chatbots" },
        { name: "Computer Vision", level: "OpenCV & YOLO Real-Time Tracking" },
      ],
    },
    {
      category: "Database",
      iconName: "Database",
      skills: [
        { name: "SQL", level: "Relational Queries & Schema Design" },
      ],
    },
    {
      category: "Tools",
      iconName: "Terminal",
      skills: [
        { name: "Git", level: "Version Control & Branching" },
        { name: "GitHub", level: "Code Collaboration & Repositories" },
        { name: "VS Code", level: "Primary Development IDE" },
        { name: "AI Coding Tools", level: "Prompt Engineering & Accelerated Workflows" },
      ],
    },
  ],

  // Featured Engineering Projects with Individual Configurable Repositories
  projects: [
    {
      id: "crop-advisory-ai",
      title: "AI-Powered Agriculture Crop Advisory Assistant",
      shortDescription:
        "An AI-powered application designed to provide agriculture-related crop recommendations and advisory information based on user inputs.",
      problemSolved:
        "Farmers and agricultural planners frequently face unpredictable crop yields due to lack of accessible, data-driven soil and climate advisory systems.",
      solution:
        "Engineered an advisory system that evaluates agricultural parameters (soil types, rainfall, season) and delivers targeted crop recommendations paired with actionable agronomic insights.",
      keyFeatures: [
        "Interactive query input interface for soil and climate parameters",
        "Algorithmic recommendation engine generating optimized crop suggestions",
        "Actionable advisory insights regarding seasonal readiness and crop care",
        "Responsive, easy-to-navigate user interface designed for intuitive access",
      ],
      technologies: ["AI", "Python", "Data Science", "Web Development", "API Integration"],
      whatILearned: [
        "Mapping multidimensional soil and weather parameters into deterministic recommendation rules",
        "Designing responsive frontend states for dynamic query submissions",
        "Structuring modular Python code for evaluation pipelines",
      ],
      futureImprovements: [
        "Integration of live hyper-local meteorological APIs for dynamic forecasting",
        "Multilingual voice interface for diverse regional agricultural communities",
      ],
      githubUrl: "ADD_PROJECT_REPOSITORY_URL",
      liveUrl: "#",
      badge: "AI / Data Science",
    },
    {
      id: "faq-chatbot",
      title: "FAQ Chatbot",
      shortDescription:
        "An intelligent FAQ chatbot that matches user questions with relevant answers using NLP and similarity-based techniques.",
      problemSolved:
        "Standard static FAQ pages cause high user drop-off and manual support burden when queries differ slightly in wording or phrasing.",
      solution:
        "Developed a natural language processing chatbot that tokenizes, cleanses, and matches user queries with indexed knowledge-base answers using semantic similarity techniques.",
      keyFeatures: [
        "Text preprocessing pipeline handling punctuation, casing, and stop words",
        "Similarity-based scoring algorithm matching user intent against FAQ knowledge bases",
        "Instant interactive chat interface with realistic response rendering",
        "Graceful fallback handling for out-of-scope or uncatalogued queries",
      ],
      technologies: ["Python", "NLP", "AI", "Web Development"],
      whatILearned: [
        "Implementing text normalization and similarity metrics for conversational intent matching",
        "Designing clean chat UI interfaces with asynchronous message state handling",
        "Evaluating edge cases with short, noisy user inputs",
      ],
      futureImprovements: [
        "Upgrading to transformer-based sentence embeddings for deeper semantic comprehension",
        "Admin dashboard to dynamically append and verify new QA pairs without redeploying",
      ],
      githubUrl: "ADD_PROJECT_REPOSITORY_URL",
      liveUrl: "#",
      badge: "AI / NLP",
    },
    {
      id: "object-detection-tracking",
      title: "Real-Time Object Detection & Tracking",
      shortDescription:
        "A computer vision project that detects and tracks objects from real-time video using a pre-trained object detection model.",
      problemSolved:
        "Processing dynamic video feeds in real time often introduces severe frame drops and noisy bounding-box jitter in resource-constrained environments.",
      solution:
        "Implemented a robust computer vision pipeline utilizing pre-trained YOLO object detection weights and OpenCV for continuous video feed frame capture, bounding box prediction, and tracking.",
      keyFeatures: [
        "Real-time video feed ingestion via OpenCV capturing live camera streams",
        "Multi-class bounding box detection powered by pre-trained YOLO neural models",
        "Class confidence thresholding and Non-Maximum Suppression (NMS) to eliminate duplicate detections",
        "Visual HUD overlay displaying identified classes, confidence scores, and real-time FPS",
      ],
      technologies: ["Python", "OpenCV", "YOLO", "Computer Vision"],
      whatILearned: [
        "Optimizing real-time frame capture pipelines and inference throughput with OpenCV",
        "Working with pre-trained neural network weights and bounding box coordinate mathematics",
        "Applying non-maximum suppression (NMS) to eliminate redundant detections",
      ],
      futureImprovements: [
        "Implementation of centroid tracking algorithms for persistent cross-frame unique IDs",
        "Edge hardware optimization (quantization) for low-power IoT deployment",
      ],
      githubUrl: "ADD_PROJECT_REPOSITORY_URL",
      liveUrl: "#",
      badge: "Computer Vision",
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      shortDescription:
        "A responsive personal portfolio website showcasing projects, skills, education, certifications, and achievements.",
      problemSolved:
        "Generic student resume templates do not effectively demonstrate frontend engineering quality, modular architecture, responsive design, and clean interactive UX.",
      solution:
        "Architected a production-ready, dark-themed responsive single-page portfolio utilizing React, TypeScript, Tailwind CSS, and Framer Motion with centralized configuration and verified profiles.",
      keyFeatures: [
        "Fully responsive layout verified across mobile, tablet, and desktop viewports",
        "Interactive project inspection modal with comprehensive architectural breakdowns",
        "Accessible Dark/Light/System theme toggling persisted via localStorage",
        "Validated contact form with direct mailto fallback and copy-to-clipboard conveniences",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      whatILearned: [
        "Structuring modular, production-ready React component systems with strict TypeScript contracts",
        "Creating smooth, accessible micro-interactions with Framer Motion",
        "Responsive styling and custom design tokens using Tailwind CSS",
      ],
      futureImprovements: [
        "Dynamic live GitHub activity integration using GitHub REST API caching",
        "Interactive terminal sandbox simulating a mini CLI for technical visitors",
      ],
      githubUrl: "https://github.com/udaytejamothukuri-lab/PORTPHOLIO",
      liveUrl: "#",
      badge: "Web Development",
    },
  ],

  // Learning & Technical Experience
  learningExperience: [
    {
      title: "AI, Machine Learning & Data Science Explorations",
      category: "Academic & Hands-On Engineering",
      period: "2024 - Present",
      description:
        "Building practical models and data pipelines in Python, focusing on applied intelligence, recommendation systems, and data analytics.",
      skills: ["Python", "Machine Learning", "Data Science", "Data Preprocessing", "NLP"],
      highlights: [
        "Implemented end-to-end data pipelines from CSV sanitization to train-test splits",
        "Developed agricultural advisory logic combining climate factors and crop yield markers",
        "Explored vector similarity algorithms for NLP question answering",
      ],
    },
    {
      title: "Modern Web & Software Development",
      category: "Interface Design & Web Apps",
      period: "2024 - Present",
      description:
        "Designing responsive, accessible web interfaces using semantic HTML, modern CSS/Tailwind, and modular React with TypeScript for clean type safety.",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      highlights: [
        "Built modular component libraries emphasizing reusability and clean props contracts",
        "Implemented smooth micro-interactions, dark mode ergonomics, and responsive grids",
        "Ensured zero layout shifts and strict accessibility standards across mobile and desktop",
      ],
    },
    {
      title: "Computer Vision & Visual Perception",
      category: "Laboratory & Applied Experiments",
      period: "2024 - Present",
      description:
        "Experimenting with OpenCV video capture and YOLO neural networks for real-time bounding box prediction and multi-object identification.",
      skills: ["OpenCV", "YOLO", "Image Processing", "Python", "Computer Vision"],
      highlights: [
        "Engineered real-time frame capture pipelines with confidence score thresholding",
        "Studied frame latency optimization and non-maximum suppression algorithms",
      ],
    },
  ],

  // Certifications & Workshops (Accurate & Authentic)
  certifications: [
    {
      name: "UI/UX Mastery Bootcamp",
      organization: "BITS Pilani Hyderabad Campus",
      date: undefined, // No invented dates
      credentialId: undefined, // No invented IDs
      credentialUrl: undefined,
      description:
        "Immersive technical bootcamp on user-centric product design, wireframing, high-fidelity prototyping, visual hierarchy, typography, and developer-designer handoff principles.",
      skillsGained: ["User Research", "Wireframing", "Figma / Prototyping", "Design Systems", "Usability"],
      status: "Completed",
    },
  ],

  // Achievements & Milestones
  achievements: [
    {
      title: "UI/UX Mastery Bootcamp Attendee",
      organizationOrEvent: "BITS Pilani Hyderabad Campus",
      date: undefined,
      category: "Bootcamp",
      description:
        "Selected participant in the intensive UI/UX design bootcamp hosted at BITS Pilani Hyderabad, collaborating with peers to design accessible and intuitive digital interfaces.",
      highlight: "BITS Pilani Hyderabad Campus",
    },
    {
      title: "Technical Workshops Participant",
      organizationOrEvent: "Engineering College Technical Forums",
      date: "Ongoing",
      category: "Workshop",
      description:
        "Regularly attended specialized technical workshops covering modern web development, Python for data science, and applied machine learning tooling.",
      highlight: "Technical Upskilling",
    },
    {
      title: "Hackathon & Problem-Solving Initiatives",
      organizationOrEvent: "Student Developer Challenges",
      date: "Ongoing",
      category: "Hackathon",
      description:
        "Active team member in collegiate hackathons and coding sprints, tackling real-world problem statements under rapid development timelines.",
      highlight: "Collaborative Engineering",
    },
    {
      title: "Curated Technical Project Portfolio",
      organizationOrEvent: "Applied Software Engineering",
      date: "2024 - Present",
      category: "Academics",
      description:
        "Designed and built 4 functional software and AI projects with clean documentation, organized GitHub codebases, and modular architectures.",
      highlight: "Applied Engineering",
    },
  ],
};
