import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "pinnacle-labs",
    company: "Pinnacle Labs",
    role: "Data Science Intern",
    location: "Remote / Hybrid",
    period: "June 2026 – July 2026",
    type: "Internship",
    responsibilities: [
      "Engineered automated Python pipelines for cleaning, sanitizing, and validating structured datasets.",
      "Prepared feature matrices and handled missing value imputations for downstream machine learning workflows.",
      "Evaluated structured datasets to systematically improve data hygiene and analytical reliability before exploratory data analysis.",
      "Documented data preprocessing pipelines and standardized script modularity."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Data Preprocessing", "Feature Engineering"]
  },
  {
    id: "geonixa",
    company: "Geonixa",
    role: "Data Science & Machine Learning Intern",
    location: "Remote / Hybrid",
    period: "May 2026 – July 2026",
    type: "Internship",
    responsibilities: [
      "Authored optimized Python scripts for multi-source data preprocessing and tabular normalization.",
      "Assisted in dataset curation, transformation, and train-test splits for internal machine learning projects.",
      "Executed practical data science validation workflows ensuring high data fidelity across iterations.",
      "Collaborated with developers on model feature selection and exploratory benchmark reviews."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Data Pipelines"]
  }
];
