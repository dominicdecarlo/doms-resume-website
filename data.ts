export const profile = {
  name: "Dominic DeCarlo",
  short: "Dom",
  title: "Computer Science & Data Science",
  school: "University of Pittsburgh",
  email: "dominic2decarlo@gmail.com",
  phone: "412.773.9883",
  phoneRaw: "4127739883",
  location: "Pittsburgh, PA",
  links: {
    linkedin: "https://linkedin.com/in/domdecarlo",
    github: "https://github.com/dominicdecarlo",
    site: "https://dominicdecarlo.vercel.app",
  },
  status: "Open to Summer 2027 internships",
};

export const education = {
  school: "University of Pittsburgh",
  degree: "B.S. Computer Science & Data Science",
  dates: "August 2023 — April 2027",
  location: "Pittsburgh, PA",
  gpa: "3.6",
  gpaMax: "4.00",
  coursework: [
    "Data Structures & Algorithms",
    "Intro to AI",
    "Machine Learning",
    "Software Engineering",
    "Data Science",
    "Systems Software",
    "Discrete Math",
    "Calculus",
    "Linear Algebra",
    "Formal Methods",
    "Statistics",
    "Probability",
  ],
};

export type Project = {
  num: string;
  title: string;
  blurb: string;
  details: string[];
  tags: string[];   // tech stack — sample values, edit per project
  date: string;
  dateLong: string;
  github?: string;  // GitHub repo URL — fill in your actual repo links
  site?: string;    // Live site URL (if hosted)
};

export const projects: Project[] = [
  {
    num: "01",
    title: "Ground-Up Large Language Model",
    blurb: "A custom transformer trained from scratch on H100 clusters.",
    details: [
      "Architected a custom transformer-based neural network from the ground up, executing distributed pre-training pipelines across high-performance A100/H100 GPU clusters to optimize the model architecture.",
      "Fine-tuned conversational behavior using a curated proprietary dataset and engineered a stable deployment pipeline to serve the optimized model weights via a live, web-hosted interface.",
    ],
    tags: ["Python", "PyTorch", "A100/H100"],
    date: "04 / 2026",
    dateLong: "April 2026",
    github: "https://github.com/dominicdecarlo", // ← replace with actual repo
    // site: "https://your-llm-demo.vercel.app", // ← add when live
  },
  {
    num: "02",
    title: "Real-Time Prediction Market Arbitrage SaaS",
    blurb: "Live arbitrage scanner across Kalshi & Polymarket.",
    details: [
      "Engineered a Python scanner to instantly detect profitable arbitrage bets across Kalshi and Polymarket.",
      "Built an interactive dashboard to sort live market spreads by profit margin with direct execution links to exchanges.",
    ],
    tags: ["Python", "FastAPI", "Google Stitch"],
    date: "02 / 2026",
    dateLong: "February 2026",
    github: "https://github.com/dominicdecarlo", // ← replace with actual repo
    // site: "https://your-arb-saas.vercel.app", // ← add when live
  },
  {
    num: "03",
    title: "AI Resume Builder for Veterans",
    blurb: "Translates military roles into job-ready resumes.",
    details: [
      "Built an AI resume builder with Next.js that translates military roles into professional, job-ready bullet points.",
      "Designed a complete workflow for users to generate, customize, and download a polished resume online.",
    ],
    tags: ["TypeScript", "Next.js", "Tailwind", "Gemini"],
    date: "09 / 2025",
    dateLong: "September 2025",
    github: "https://github.com/dominicdecarlo", // ← replace with actual repo
    // site: "https://your-resume-builder.vercel.app", // ← add when live
  },
  {
    num: "04",
    title: "College Real Estate Predictor",
    blurb: "ML model beating Zillow estimates for student rentals.",
    details: [
      "Created a machine-learning model to provide more accurate current and future housing value and rent predictions than Zillow estimates, tailored for landlords and investors.",
      "Merged and gathered student and property data using Pandas for analysis and predictions.",
    ],
    tags: ["Python", "NumPy", "Sci-Kit Learn", "Pandas"],
    date: "10 / 2024",
    dateLong: "October 2024",
    github: "https://github.com/dominicdecarlo", // ← replace with actual repo
  },
  {
    num: "05",
    title: "AI Soccer Analysis System",
    blurb: "Computer vision pipeline for match analysis.",
    details: [
      "Developed an AI/ML system using Python and computer vision to analyze football/soccer matches.",
      "Implemented real-time object detection to analyze player movement and important game events.",
      "Provided valuable insights to improve match evaluation and strategy.",
    ],
    tags: ["Python", "OpenCV", "YOLO"],
    date: "07 / 2024",
    dateLong: "July 2024",
    github: "https://github.com/dominicdecarlo", // ← replace with actual repo
  },
];

export type Experience = {
  role: string;
  roleHighlight: string;
  company: string;
  location: string;
  dates: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Intern",
    roleHighlight: "AI & Automation",
    company: "Thermo Fisher Scientific",
    location: "Pittsburgh, PA",
    dates: "May 2026 — Aug 2026",
    points: [
      "Designing and deploying automated machine-learning pipelines using Python to streamline complex data processing workflows and improve operational efficiency.",
      "Leveraging predictive modeling and advanced AI frameworks to optimize internal enterprise systems and support data-driven decision-making.",
    ],
  },
  {
    role: "& Reporting",
    roleHighlight: "IT Intern, Data Insights",
    company: "National Philanthropic Trust",
    location: "Philadelphia, PA",
    dates: "May 2025 — Aug 2025",
    points: [
      "Built a Python-based AI/ML model to forecast contribution trends, helping the team proactively strategize for the high-volume giving season.",
      "Performed data analysis on complex datasets to develop business-focused data visualizations (Sankey charts, Power BI dashboards), improving reporting efficiency and providing actionable insights into donor behavior.",
    ],
  },
  {
    role: "",
    roleHighlight: "Camp Counselor",
    company: "JCC South Hills Day Camp",
    location: "Pittsburgh, PA",
    dates: "Jun 2024 — Aug 2024",
    points: [
      "Led and supervised daily activities for a diverse group of children, including many with disabilities, from 8 AM to 4 PM, with additional aftercare responsibilities until 6 PM.",
      "Fostered an inclusive, supportive environment, ensuring every child had a positive camp experience.",
    ],
  },
];

export const involvement = [
  {
    name: "Pitt Computer Science Club",
    role: "Member",
    dates: "August 2024 — Present",
    points: [
      "Contributed to collaborative projects and technical discussions, sharpening problem-solving and technical knowledge.",
      "Participated in coding competitions and workshops, deepening fluency in languages and tooling.",
    ],
  },
  {
    name: "Panther Equity",
    role: "Junior Analyst",
    dates: "January 2025 — Present",
    points: [
      "Gained hands-on finance experience through market trend analysis and equity research for simulated portfolios.",
    ],
  },
];

export type Skill = {
  name: string;
  icon: string; // path under /public
};

export const skillCategories: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "/img/skills/python.png" },
      { name: "TypeScript", icon: "/img/skills/ts.png" },
      { name: "JavaScript", icon: "/img/skills/js.png" },
      { name: "Java", icon: "/img/skills/java.png" },
      { name: "C", icon: "/img/skills/C.png" },
      { name: "C++", icon: "/img/skills/c++.png" },
      { name: "SQL", icon: "/img/skills/SQL.png" },
      { name: "R", icon: "/img/skills/R.png" },
      { name: "HTML", icon: "/img/skills/html.png" },
      { name: "CSS", icon: "/img/skills/css.png" },
      { name: "MIPS Assembly", icon: "/img/skills/asm.png" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "PyTorch", icon: "/img/skills/pytorch.png" },
      { name: "TensorFlow", icon: "/img/skills/tensorflow.png" },
      { name: "Scikit-Learn", icon: "/img/skills/scikitlearn.png" },
      { name: "NumPy", icon: "/img/skills/numpy.png" },
      { name: "React", icon: "/img/skills/react.png" },
      { name: "Next.js", icon: "/img/skills/next.webp" },
      { name: "Svelte", icon: "/img/skills/svelte.png" },
      { name: "Node.js", icon: "/img/skills/node.png" },
      { name: "Flask", icon: "/img/skills/flask.png" },
      { name: "OpenCV", icon: "/img/skills/opencv.png" },
      { name: "YOLO", icon: "/img/skills/yolo.png" },
      { name: "LangChain", icon: "/img/skills/langchain.png" },
      { name: "Tailwind", icon: "/img/skills/tailwind.png" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "GitHub", icon: "/img/skills/github.png" },
      { name: "Git", icon: "/img/skills/git.png" },
      { name: "Jira", icon: "/img/skills/jira.png" },
      { name: "Power BI", icon: "/img/skills/powerbi.png" },
      { name: "VS Code", icon: "/img/skills/vsc.png" },
      { name: "Excel", icon: "/img/skills/excel.webp" },
      { name: "Markdown", icon: "/img/skills/markdown.png" },
    ],
  },
];

// Flat list (used by the marquee rows). Split roughly in half.
export const skillsFlat: Skill[] = skillCategories.flatMap((c) => c.items);

const half = Math.ceil(skillsFlat.length / 2);
export const skillsRowA: Skill[] = skillsFlat.slice(0, half);
export const skillsRowB: Skill[] = skillsFlat.slice(half);
