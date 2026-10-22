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
    : badge(title);
};

// Fallback for technologies with no devicon logo: an initials badge.
const badge = (title: string) => {
  const letters = title.replace(/[^A-Za-z0-9+]/g, "").slice(0, 2).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#2C6975"/><text x="40" y="50" font-family="Helvetica,Arial,sans-serif" font-size="30" font-weight="700" fill="#F8F8F8" text-anchor="middle">${letters}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const pageInfo: PageInfo = {
  name: "Adarsh Agarwala",
  role: "Full Stack AI/ML Engineer",
  heroImage: `${BASE}/images/hero.jpg`,
  profilePic: `${BASE}/images/profile.jpg`,
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
  skill("Pandas", 80),
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

export const projects: Project[] = [
  {
    _id: "haqdaar",
    title: "Haqdaar",
    linkToBuild: "https://github.com/agarwaladarshcoding-maker/haqdaar-v3",
    sourceLink: "https://github.com/agarwaladarshcoding-maker/haqdaar-v3",
    image: `${BASE}/images/projects/haqdaar.svg`,
    summary:
      "A phone helpline that tells people which Indian government schemes they are entitled to. Callers speak in their own language or use the keypad, answer a handful of questions and hear the schemes they qualify for. They can also send a photo of a crop or document by SMS, and missed calls get the answer back as an SMS with text and a sound link. Built for people with feature phones: no app, no internet, no reading. Scheme content is read verbatim from a database so the model never invents a benefit.",
    technologies: [tech("Python"), tech("FastAPI"), tech("Twilio"), tech("Supabase")],
  },
  {
    _id: "medical-rag",
    title: "Evidence-Aware Medical RAG",
    linkToBuild: "https://medical-rag-demo.vercel.app/",
    sourceLink: "https://github.com/agarwaladarshcoding-maker/Advanced-Medical-Based-RAG-System",
    image: `${BASE}/images/projects/medical-rag.svg`,
    summary:
      "Medical QA that splits its own answer into individual claims and verifies each against the retrieved passages, labelling them SUPPORTED, WEAK, UNSUPPORTED or CONTRADICTED. Hybrid BM25 + dense retrieval, rank fusion, reranking, per-claim source attribution and a refusal guardrail. Local-first, 96 tests.",
    technologies: [tech("Python"), tech("PyTorch"), tech("ChromaDB"), tech("BM25")],
  },
  {
    _id: "agentwatch",
    title: "AgentWatcher",
    linkToBuild: "https://github.com/agarwaladarshcoding-maker/AgentWatcher",
    sourceLink: "https://github.com/agarwaladarshcoding-maker/AgentWatcher",
    image: `${BASE}/images/projects/agentwatch.svg`,
    summary:
      "Mirrors a CLI coding agent's terminal byte-for-byte inside a PTY, then layers on state annotations and a permission control plane that answers the agent's own y/n prompts with a logged verdict. A TF-IDF + LinearSVC classifier labels seven activity states at ~99% accuracy.",
    technologies: [tech("Electron"), tech("TypeScript"), tech("scikit-learn")],
  },
  {
    _id: "amber-copilot",
    title: "Amber Student Copilot",
    linkToBuild: "https://github.com/agarwaladarshcoding-maker/Amber-Student-Chatbot",
    sourceLink: "https://github.com/agarwaladarshcoding-maker/Amber-Student-Chatbot",
    image: `${BASE}/images/projects/amber-copilot.svg`,
    summary:
      "A student-housing assistant constrained to answer only from five confirmed API endpoints plus a small policy knowledge base, with human-in-the-loop escalation. Grounding is the architecture, not a prompt instruction, so a hallucinated property or price cannot reach the user.",
    technologies: [tech("Python"), tech("FastAPI"), tech("Redis")],
  },
  {
    _id: "agentic-knowledge",
    title: "Agentic Knowledge Chatbot",
    linkToBuild: "https://github.com/agarwaladarshcoding-maker/Agentic-Knowledge-Chatbot",
    sourceLink: "https://github.com/agarwaladarshcoding-maker/Agentic-Knowledge-Chatbot",
    image: `${BASE}/images/projects/agentic-knowledge.svg`,
    summary:
      "A local-first agentic assistant (voice and text) over your own files, Gmail and databases. Hybrid BM25 + vector retrieval, chunking, reranking and anti-hallucination checks. Runs on Ollama and Chroma, so nothing leaves the machine.",
    technologies: [tech("Python"), tech("ChromaDB")],
  },
  {
    _id: "ml-from-scratch",
    title: "ML From Scratch",
    linkToBuild: "https://github.com/agarwaladarshcoding-maker/ml-from-scratch",
    sourceLink: "https://github.com/agarwaladarshcoding-maker/ml-from-scratch",
    image: `${BASE}/images/projects/ml-from-scratch.svg`,
    summary:
      "Classical machine learning implemented from first principles in NumPy with no scikit-learn, so the derivation has to be right. PCA from the SVD up, linear regression and more.",
    technologies: [tech("Python")],
  },
  {
    _id: "order-book",
    title: "HFT Order Matching Engine",
    linkToBuild: "https://github.com/agarwaladarshcoding-maker/High-Frequency-Order-Book",
    sourceLink: "https://github.com/agarwaladarshcoding-maker/High-Frequency-Order-Book",
    image: `${BASE}/images/projects/order-book.svg`,
    summary:
      "A limit order book and matching engine in C++17 executing on price-time priority with partial and full fills. std::map price levels keep the book ordered and per-level vectors preserve arrival order.",
    technologies: [tech("C++")],
  },
  {
    _id: "pairs-trading",
    title: "Mean-Reverting Pairs Trading",
    linkToBuild: "https://github.com/agarwaladarshcoding-maker/Project-Section/tree/main/Quant-Finance-Project/Mean%20Reverting%20Pairs",
    sourceLink: "https://github.com/agarwaladarshcoding-maker/Project-Section/tree/main/Quant-Finance-Project/Mean%20Reverting%20Pairs",
    image: `${BASE}/images/projects/pairs-trading.svg`,
    summary:
      "Statistical arbitrage on real market data: rolling OLS for the hedge ratio and an Augmented Dickey-Fuller test deciding whether the spread is stationary enough to trade. The test is allowed to say no.",
    technologies: [tech("Python"), tech("Pandas"), tech("statsmodels")],
  },
  {
    _id: "monte-carlo",
    title: "Monte Carlo Barrier Pricer",
    linkToBuild: "https://github.com/agarwaladarshcoding-maker/Monte-Carlo-Project-Simulator",
    sourceLink: "https://github.com/agarwaladarshcoding-maker/Monte-Carlo-Project-Simulator",
    image: `${BASE}/images/projects/monte-carlo.svg`,
    summary:
      "Prices down-and-out barrier call options under Geometric Brownian Motion. 252 discrete steps per path so the barrier is monitored properly, Mersenne Twister and early exit on breach.",
    technologies: [tech("Python"), tech("NumPy")],
  },
  {
    _id: "portfolio-optimiser",
    title: "Algorithmic Portfolio Manager",
    linkToBuild: "https://github.com/agarwaladarshcoding-maker/Algorithmic_Portfolio_Manager",
    sourceLink: "https://github.com/agarwaladarshcoding-maker/Algorithmic_Portfolio_Manager",
    image: `${BASE}/images/projects/portfolio-optimiser.svg`,
    summary:
      "Modern Portfolio Theory optimiser over 20+ tickers: 5,000 Monte Carlo portfolios, the efficient frontier, max-Sharpe and min-volatility allocations and 95% Value at Risk.",
    technologies: [tech("Python"), tech("Pandas")],
  },
];
