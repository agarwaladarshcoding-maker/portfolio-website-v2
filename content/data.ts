import {
  Experience,
  PageInfo,
  Project,
  Skill,
  Social,
  Technology,
} from "../typings";

// Photos/logos/tech icons are still placeholders: drop files in public/images and update the paths.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const PLACEHOLDER = `${BASE}/images/placeholder.svg`;

export const resumeUrl = "https://know-about-adarsh.vercel.app/adarsh-agarwala-resume.pdf";

// Tech icons come from the devicon CDN; unknown names fall back to the placeholder.
const DEVICON: Record<string, string> = {
  python: "python/python-original",
  pytorch: "pytorch/pytorch-original",
  "c++": "cplusplus/cplusplus-original",
  typescript: "typescript/typescript-original",
  react: "react/react-original",
  "node-js": "nodejs/nodejs-original",
  mongodb: "mongodb/mongodb-original",
  express: "express/express-original",
  electron: "electron/electron-original",
  fastapi: "fastapi/fastapi-original",
  redis: "redis/redis-original",
  pandas: "pandas/pandas-original",
  "scikit-learn": "scikitlearn/scikitlearn-original",
};
const icon = (title: string) => {
  const key = title.toLowerCase().replace(/[^a-z0-9+]+/g, "-");
  const path = DEVICON[key];
  return path
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`
    : PLACEHOLDER;
};

export const pageInfo: PageInfo = {
  name: "Adarsh Agarwala",
  role: "Full Stack AI/ML Engineer",
  heroImage: PLACEHOLDER,
  profilePic: PLACEHOLDER,
  backgroundInformation: "I like to code and I figure things out. I'm addicted to coffee for that extra dash of energy.",
  phoneNumber: "+91 6296399690",
  email: "agarwalaadarsh.work@gmail.com",
  address: "Pune, India",
};

// Hero typewriter lines (the name line is generated from pageInfo.name).
export const heroWords: string[] = [
  `Hi, the name's ${pageInfo.name}`,
  "I figure things out",
  "I_like_to_code.py",
  "And I'm addicted to ☕️",
];

export const socials: Social[] = [
  { _id: "github", title: "GitHub", url: "https://github.com/agarwaladarshcoding-maker" },
  { _id: "linkedin", title: "LinkedIn", url: "https://linkedin.com/in/adarsh-agarwala" },
];

const tech = (title: string): Technology => ({
  _id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  title,
  image: icon(title),
});

// progress values are rough self-ratings, adjust freely.
const skill = (title: string, progress: number): Skill => ({
  _id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  title,
  image: icon(title),
  progress,
});

export const skills: Skill[] = [
  skill("Python", 90),
  skill("PyTorch", 75),
  skill("RAG / LLM Agents", 80),
  skill("C++", 80),
  skill("TypeScript", 70),
  skill("React", 75),
  skill("Node.js", 75),
  skill("MongoDB", 70),
];

export const experiences: Experience[] = [
  {
    _id: "coding-club",
    jobTitle: "Member & Writer",
    company: "Coding & Technical Club, IIIT Pune",
    companyImage: PLACEHOLDER,
    dateStarted: "2025-08-01",
    isCurrentlyWorkingHere: true,
    technologies: [tech("C++"), tech("Codeforces")],
    points: [
      "Compete in programming contests; active on Codeforces as AdarshAg (graphs, DP, data structures in C++).",
      "Write the daily 'Day X of Infinity' series on C++ internals, HFT and quantitative finance.",
    ],
  },
  {
    _id: "india-innovates",
    jobTitle: "Team Lead (Team SHA256)",
    company: "India Innovates Challenge",
    companyImage: PLACEHOLDER,
    dateStarted: "2025-01-01",
    dateEnded: "2025-01-03",
    isCurrentlyWorkingHere: false,
    technologies: [tech("Node.js"), tech("WebSockets")],
    points: [
      "Led backend architecture for a real-time collaborative workspace platform in a 48-hour sprint.",
    ],
  },
  {
    _id: "sih",
    jobTitle: "Developer & Mentor",
    company: "Smart India Hackathon",
    companyImage: PLACEHOLDER,
    dateStarted: "2025-01-01",
    dateEnded: "2025-01-31",
    isCurrentlyWorkingHere: false,
    technologies: [tech("MongoDB"), tech("Express"), tech("React"), tech("Node.js")],
    points: [
      "Built a civic infrastructure reporting platform (MERN) with role-based access and geolocation-based routing under national-level constraints.",
    ],
  },
];

const GH = "https://github.com/agarwaladarshcoding-maker";

export const projects: Project[] = [
  {
    _id: "medical-rag",
    title: "Evidence-Aware Medical RAG",
    linkToBuild: "https://medical-rag-demo.vercel.app/",
    sourceLink: `${GH}/Advanced-Medical-Based-RAG-System`,
    image: PLACEHOLDER,
    summary:
      "A local-first medical RAG pipeline that answers only from its documents, then splits its own answer into atomic claims and labels each SUPPORTED, WEAK, UNSUPPORTED or CONTRADICTED against the retrieved passages using an NLI model. 96 tests, no data leaves the machine.",
    technologies: [tech("Python"), tech("PyTorch"), tech("ChromaDB"), tech("BM25")],
  },
  {
    _id: "agentwatch",
    title: "AgentWatch",
    linkToBuild: `${GH}/AgentWatcher`,
    sourceLink: `${GH}/AgentWatcher`,
    image: PLACEHOLDER,
    summary:
      "A macOS monitor that intercepts CLI AI tools in real time and classifies their activity into 7 states with a TF-IDF + LinearSVC model at ~99% accuracy, replacing brittle regex rules.",
    technologies: [tech("Electron"), tech("TypeScript"), tech("scikit-learn")],
  },
  {
    _id: "amber-copilot",
    title: "amber Copilot",
    linkToBuild: `${GH}/Amber-Student-Chatbot`,
    sourceLink: `${GH}/Amber-Student-Chatbot`,
    image: PLACEHOLDER,
    summary:
      "A conversational housing assistant for international students, grounded against five live API endpoints with guardrails so a hallucinated property or price cannot reach the user. 70B agent + 8B router, four memory layers.",
    technologies: [tech("Python"), tech("FastAPI"), tech("Llama 3.3"), tech("Redis")],
  },
  {
    _id: "pairs-trading",
    title: "Mean-Reverting Pairs Trading",
    linkToBuild: `${GH}/Project-Section/tree/main/Quant-Finance-Project/Mean%20Reverting%20Pairs`,
    sourceLink: `${GH}/Project-Section/tree/main/Quant-Finance-Project/Mean%20Reverting%20Pairs`,
    image: PLACEHOLDER,
    summary:
      "Statistical arbitrage on real market data: rolling OLS for the hedge ratio and an Augmented Dickey-Fuller test deciding whether a spread is stationary enough to trade.",
    technologies: [tech("Python"), tech("Pandas"), tech("statsmodels")],
  },
  {
    _id: "order-book",
    title: "HFT Order Matching Engine",
    linkToBuild: `${GH}/High-Frequency-Order-Book`,
    sourceLink: `${GH}/High-Frequency-Order-Book`,
    image: PLACEHOLDER,
    summary: "A low-latency limit order book in modern C++17 (in progress).",
    technologies: [tech("C++")],
  },
];
