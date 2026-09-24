import type { SkillItem, SkillCategoryType } from '../types';

export const skillsFilterList: SkillCategoryType[] = [
  "All",
  "AI/ML",
  "Data Science",
  "Frontend",
  "Backend",
  "Tools"
];

export const skillsData: SkillItem[] = [
  // Programming
  { name: "Python", category: "Backend", group: "Programming", highlight: true },
  { name: "Java", category: "Backend", group: "Programming" },
  { name: "C", category: "Backend", group: "Programming" },
  { name: "SQL", category: "Data Science", group: "Programming", highlight: true },

  // Machine Learning / AI
  { name: "Scikit-learn", category: "AI/ML", group: "Machine Learning / AI", highlight: true },
  { name: "PyTorch", category: "AI/ML", group: "Machine Learning / AI", highlight: true },
  { name: "Transformers", category: "AI/ML", group: "Machine Learning / AI", highlight: true },
  { name: "DistilBERT", category: "AI/ML", group: "Machine Learning / AI", highlight: true },
  { name: "NLP", category: "AI/ML", group: "Machine Learning / AI", highlight: true },
  { name: "Deep Learning", category: "AI/ML", group: "Machine Learning / AI" },
  { name: "Computer Vision", category: "AI/ML", group: "Computer Vision", highlight: true },
  { name: "OpenCV", category: "AI/ML", group: "Computer Vision", highlight: true },
  { name: "U-Net", category: "AI/ML", group: "Computer Vision", highlight: true },
  { name: "Image Processing", category: "AI/ML", group: "Computer Vision" },

  // Data Science
  { name: "Pandas", category: "Data Science", group: "Data Science", highlight: true },
  { name: "NumPy", category: "Data Science", group: "Data Science", highlight: true },
  { name: "SciPy", category: "Data Science", group: "Data Science" },
  { name: "Matplotlib", category: "Data Science", group: "Data Visualization" },
  { name: "Seaborn", category: "Data Science", group: "Data Visualization" },
  { name: "Power BI", category: "Data Science", group: "Data Visualization" },
  { name: "Apache ECharts", category: "Data Science", group: "Data Visualization", highlight: true },
  { name: "Recharts", category: "Frontend", group: "Data Visualization" },

  // Frontend
  { name: "React", category: "Frontend", group: "Frontend", highlight: true },
  { name: "TypeScript", category: "Frontend", group: "Frontend", highlight: true },
  { name: "Vite", category: "Frontend", group: "Frontend" },
  { name: "JavaScript", category: "Frontend", group: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend", group: "Frontend", highlight: true },
  { name: "shadcn/ui", category: "Frontend", group: "Frontend" },
  { name: "React Leaflet", category: "Frontend", group: "Frontend", highlight: true },
  { name: "HTML / CSS", category: "Frontend", group: "Frontend" },

  // Backend & APIs
  { name: "FastAPI", category: "Backend", group: "Backend", highlight: true },
  { name: "REST APIs", category: "Backend", group: "Backend", highlight: true },
  { name: "Streamlit", category: "Backend", group: "Applications", highlight: true },
  { name: "Tkinter", category: "Backend", group: "Applications" },

  // AI Tools
  { name: "Ollama", category: "Tools", group: "AI Tools", highlight: true },
  { name: "Whisper", category: "Tools", group: "AI Tools", highlight: true },
  { name: "Faster Whisper", category: "Tools", group: "AI Tools", highlight: true },
  { name: "Hugging Face", category: "Tools", group: "AI Tools", highlight: true },

  // Developer Tools
  { name: "Git", category: "Tools", group: "Tools", highlight: true },
  { name: "GitHub", category: "Tools", group: "Tools", highlight: true },
  { name: "VS Code", category: "Tools", group: "Tools" },
  { name: "Google Colab", category: "Tools", group: "Tools" },
  { name: "Figma", category: "Tools", group: "Tools" },
  { name: "Canva", category: "Tools", group: "Tools" },
  { name: "MS Excel", category: "Tools", group: "Tools" },
  { name: "PowerPoint", category: "Tools", group: "Tools" }
];
