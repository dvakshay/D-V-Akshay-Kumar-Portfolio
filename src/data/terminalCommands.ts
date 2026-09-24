export interface TerminalOutputLine {
  text: string;
  type?: 'command' | 'output' | 'error' | 'success' | 'highlight' | 'link';
  url?: string;
}

export const executeTerminalCommand = (rawCommand: string): TerminalOutputLine[] => {
  const cmd = rawCommand.trim().toLowerCase();

  switch (cmd) {
    case 'help':
      return [
        { text: "Available commands:", type: 'highlight' },
        { text: "  whoami      - Displays my identity and positioning", type: 'output' },
        { text: "  about       - Short background and builder philosophy", type: 'output' },
        { text: "  projects    - List flagship AI & Full-Stack systems", type: 'output' },
        { text: "  skills      - Overview of AI, ML, Frontend & Backend stack", type: 'output' },
        { text: "  experience  - Internships at Pinnacle Labs & Geonixa", type: 'output' },
        { text: "  education   - B.Tech Data Science at SNIST details", type: 'output' },
        { text: "  contact     - Direct contact points (email, GitHub, LinkedIn)", type: 'output' },
        { text: "  status      - Current operational focus and project in development", type: 'output' },
        { text: "  clear       - Clears the terminal screen", type: 'output' }
      ];

    case 'whoami':
      return [
        { text: "USER: D V AKSHAY KUMAR (Akshay Kumar)", type: 'success' },
        { text: "ROLE: Data Science Undergraduate | AI/ML Developer | Builder", type: 'output' },
        { text: "TAGLINE: 'Building intelligent systems, data-driven products, and polished digital experiences.'", type: 'highlight' },
        { text: "LOCATION: Hyderabad, Telangana, India", type: 'output' }
      ];

    case 'about':
      return [
        { text: "ABOUT D V AKSHAY KUMAR:", type: 'highlight' },
        { text: "I'm a B.Tech Data Science student at Sreenidhi Institute of Science and Technology (SNIST).", type: 'output' },
        { text: "Rather than treating code as theory, I focus on turning complex problem spaces into usable products.", type: 'output' },
        { text: "My work bridges Machine Learning, Computer Vision, NLP, and modern React + FastAPI software architectures.", type: 'output' }
      ];

    case 'projects':
      return [
        { text: "FLAGSHIP SYSTEMS:", type: 'highlight' },
        { text: "  1. TerraShield AI      - Hyper-local landslide & flash-flood early warning system", type: 'success' },
        { text: "  2. SocialSense         - AI social media intelligence & DistilBERT + NetworkX platform", type: 'success' },
        { text: "  3. Riraru AI           - Private local voice assistant (Faster Whisper + Ollama/Qwen)", type: 'success' },
        { text: "  4. Satellite CV        - U-Net satellite cloud removal (Bharatiya Antariksh Hackathon)", type: 'success' },
        { text: "  5. EEG Emotion ML      - DREAMER brainwave affective computing pipeline", type: 'output' },
        { text: "Type 'projects' on the page or scroll down for interactive case study explorers.", type: 'highlight' }
      ];

    case 'skills':
      return [
        { text: "CORE TECH STACK:", type: 'highlight' },
        { text: "  AI / ML:       PyTorch, Scikit-learn, DistilBERT, Transformers, U-Net, OpenCV", type: 'output' },
        { text: "  Data Science:  Pandas, NumPy, SciPy, Matplotlib, Seaborn, SQL, ECharts", type: 'output' },
        { text: "  Frontend:      React, TypeScript, Tailwind CSS, Vite, React Leaflet, shadcn/ui", type: 'output' },
        { text: "  Backend/Tools: FastAPI, Python, REST APIs, Git, Ollama, Whisper, Linux CLI", type: 'output' }
      ];

    case 'experience':
      return [
        { text: "PRACTICAL EXPERIENCE:", type: 'highlight' },
        { text: "  • Pinnacle Labs (June 2026 – July 2026)", type: 'success' },
        { text: "    Data Science Intern - Automated dataset cleaning, preprocessing & ML preparation", type: 'output' },
        { text: "  • Geonixa (May 2026 – July 2026)", type: 'success' },
        { text: "    Data Science / ML Intern - Tabular normalization, data pipelines & model validation", type: 'output' }
      ];

    case 'education':
      return [
        { text: "ACADEMIC BACKGROUND:", type: 'highlight' },
        { text: "  Institution:  Sreenidhi Institute of Science and Technology (SNIST)", type: 'output' },
        { text: "  Degree:       B.Tech in Data Science (2024 – 2028)", type: 'output' },
        { text: "  Current:      3rd Year Undergraduate", type: 'output' },
        { text: "  CGPA:         7.6", type: 'success' }
      ];

    case 'contact':
      return [
        { text: "DIRECT CONTACT CHANNELS:", type: 'highlight' },
        { text: "  Email:     dvakshayk@gmail.com", type: 'link', url: "mailto:dvakshayk@gmail.com" },
        { text: "  GitHub:    github.com/dvakshay", type: 'link', url: "https://github.com/dvakshay" },
        { text: "  LinkedIn:  D V Akshay Kumar", type: 'output' },
        { text: "  Phone:     +91 6267030182", type: 'output' },
        { text: "  Location:  Hyderabad, Telangana, India", type: 'output' }
      ];

    case 'status':
      return [
        { text: "CURRENT SYSTEM STATUS:", type: 'highlight' },
        { text: "  ● Currently building AI-powered products", type: 'success' },
        { text: "  Primary focus: Expanding TerraShield AI hyper-local telemetry & early warning UI.", type: 'output' },
        { text: "  Actively seeking high-impact internships, hackathon collaborations, and AI engineering roles.", type: 'output' }
      ];

    case '':
      return [];

    default:
      return [
        { text: `Command not recognized: '${cmd}'`, type: 'error' },
        { text: "Type 'help' to inspect available system commands.", type: 'output' }
      ];
  }
};
