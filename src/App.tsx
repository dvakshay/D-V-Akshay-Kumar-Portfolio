import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { InteractiveCanvasBackground } from './components/InteractiveCanvasBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { JourneySection } from './sections/JourneySection';
import { ProjectsSection } from './sections/ProjectsSection';
import { TerminalSection } from './sections/TerminalSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { EducationSection } from './sections/EducationSection';
import { GithubSection } from './sections/GithubSection';
import { ContactSection } from './sections/ContactSection';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ResumeSnapshotModal } from './components/ResumeSnapshotModal';
import type { ProjectItem } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleExploreClick = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-cyan-300 relative">
      {/* Subtle Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Interactive Neural Nodes & Data Stream Canvas */}
      <InteractiveCanvasBackground />

      {/* Floating Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onExploreClick={handleExploreClick}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <TerminalSection />
        <ExperienceSection />
        <AchievementsSection />
        <EducationSection />
        <GithubSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Case Study Explorer Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Quick Resume Snapshot Modal */}
      <ResumeSnapshotModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
