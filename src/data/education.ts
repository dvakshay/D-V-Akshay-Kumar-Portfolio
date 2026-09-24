import type { EducationItem } from '../types';

export const educationData: EducationItem = {
  degree: "B.Tech in Data Science",
  institution: "Sreenidhi Institute of Science and Technology (SNIST)",
  period: "September 2024 – September 2028",
  expectedGraduation: "2028",
  cgpa: "7.6",
  academicLevel: "3rd Year Undergraduate",
  location: "Hyderabad, Telangana, India",
  highlights: [
    "Core focus on Data Structures, Algorithms, Probability & Statistics, and Machine Learning.",
    "Active participant in collegiate hackathons, AI development sprints, and open-source building.",
    "Applying coursework theory directly into practical machine learning and full-stack software products."
  ]
};

export interface JourneyMilestone {
  step: string;
  title: string;
  tag: string;
  description: string;
  icon: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    step: "01",
    title: "Python Foundations",
    tag: "Core Syntax & OOP",
    description: "Started with Python programming, understanding core data structures, algorithms, and modular software architecture.",
    icon: "Code2"
  },
  {
    step: "02",
    title: "Data Analysis & EDA",
    tag: "Pandas • NumPy • SQL",
    description: "Moved into data cleaning, exploratory data analysis, tabular transformations, and statistical correlation modeling.",
    icon: "BarChart3"
  },
  {
    step: "03",
    title: "Machine Learning",
    tag: "Scikit-learn • Supervised / Unsupervised",
    description: "Formulated predictive models, regression curves, classification boundaries, and feature engineering pipelines.",
    icon: "BrainCircuit"
  },
  {
    step: "04",
    title: "Computer Vision",
    tag: "OpenCV • PyTorch • U-Net",
    description: "Expanded into convolutional neural networks, spatial feature extraction, and satellite image cloud removal.",
    icon: "Eye"
  },
  {
    step: "05",
    title: "Natural Language Processing",
    tag: "Transformers • DistilBERT",
    description: "Engineered sentiment classification, emotion vectorization, and network graph analysis for social intelligence.",
    icon: "MessageSquareText"
  },
  {
    step: "06",
    title: "Speech & AI Assistants",
    tag: "Whisper • Ollama • Qwen",
    description: "Built local, private AI voice assistants orchestrating local LLM reasoning and real-time audio streaming.",
    icon: "Mic2"
  },
  {
    step: "07",
    title: "Modern Frontend",
    tag: "React • TypeScript • Tailwind",
    description: "Developing modern interactive interfaces, dashboards, geospatial map renderers, and responsive user experiences.",
    icon: "Layout"
  },
  {
    step: "08",
    title: "Backend & APIs",
    tag: "FastAPI • REST • Pipelines",
    description: "Developing robust backend APIs with FastAPI to serve machine learning models and handle sensor ingestion.",
    icon: "Server"
  },
  {
    step: "09",
    title: "Full AI Products",
    tag: "TerraShield AI • End-to-End",
    description: "Synthesizing AI models, real-time sensor streams, and interactive interfaces into full-stack societal products.",
    icon: "Cpu"
  }
];
