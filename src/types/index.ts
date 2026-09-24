export type ProjectCategory = 
  | "All" 
  | "AI / ML" 
  | "NLP" 
  | "Computer Vision" 
  | "Data Science" 
  | "Full Stack" 
  | "Applications";

export interface ProjectArchitectureStep {
  step: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory[];
  badge: string;
  subtitle: string;
  description: string;
  featured: boolean;
  problem: string;
  solution: string;
  technologies: {
    frontend?: string[];
    backend?: string[];
    aiMl?: string[];
    tools?: string[];
  };
  keyFeatures: string[];
  architecture?: ProjectArchitectureStep[];
  githubUrl?: string;
  liveDemoUrl?: string;
  metricsOrHighlights: { label: string; value: string }[];
  previewType: 'terrashield' | 'socialsense' | 'riraru' | 'cloudremoval' | 'eeg' | 'sentiment' | 'generic';
}

export type SkillCategoryType = 
  | "All"
  | "AI/ML"
  | "Data Science"
  | "Frontend"
  | "Backend"
  | "Tools";

export interface SkillItem {
  name: string;
  category: SkillCategoryType;
  group: string;
  proficiencyLevel?: string;
  iconName?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  type: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  period?: string;
  description: string;
  category: "Hackathon" | "Honor" | "Leadership" | "Recognition";
  badge: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  expectedGraduation: string;
  cgpa: string;
  academicLevel: string;
  location: string;
  highlights: string[];
}
