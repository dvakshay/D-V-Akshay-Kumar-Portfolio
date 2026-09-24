import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { projectsData } from '../data/projects';
import type { ProjectCategory, ProjectItem } from '../types';
import { TechBadge } from '../components/TechBadge';
import { ArrowUpRight, Filter, ChevronRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { TerraShieldLivePreview } from '../components/ProjectPreviewLive/TerraShieldLivePreview';
import { SocialSenseGraphPreview } from '../components/ProjectPreviewLive/SocialSenseGraphPreview';
import { RiraruAiPreview } from '../components/ProjectPreviewLive/RiraruAiPreview';
import { CloudRemovalSlider } from '../components/ProjectPreviewLive/CloudRemovalSlider';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'AI / ML',
    'NLP',
    'Computer Vision',
    'Data Science',
    'Full Stack',
    'Applications'
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category.includes(activeCategory);
  });

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const secondaryProjects = filteredProjects.filter(p => !p.featured && p.previewType !== 'generic');
  const experimentProjects = filteredProjects.filter(p => p.previewType === 'generic');

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      <SectionHeading
        number="04"
        tag="PORTFOLIO LAB"
        title="Featured Systems & Case Studies"
        subtitle="Full-scale machine learning systems, disaster intelligence platforms, local voice agents, and computer vision models built from the ground up."
      />

      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2">
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          <span>FILTER DOMAIN:</span>
        </div>

        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              data-cursor="FILTER"
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                isActive
                  ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                  : 'bg-dark-900/80 border-white/[0.06] text-slate-400 hover:text-white hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 1. CINEMATIC FEATURED SHOWCASE */}
      <div className="space-y-16">
        <AnimatePresence mode="popLayout">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-dark-900/90 border border-indigo-500/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden group"
            >
              {/* Ambient radial blur */}
              <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Project Narrative & Specs */}
                <div className="lg:col-span-5 space-y-5 text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-semibold">
                      {project.badge}
                    </span>
                    {project.category.map((cat, i) => (
                      <span key={i} className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-indigo-300/90 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {project.metricsOrHighlights.map((m, i) => (
                      <div key={i} className="p-2 rounded bg-dark-950/70 border border-white/[0.05]">
                        <span className="text-slate-400 text-[10px] block">{m.label}</span>
                        <span className="text-white font-medium truncate block">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Pills */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.aiMl?.slice(0, 3).map((t, i) => (
                        <TechBadge key={i} name={t} highlight size="sm" />
                      ))}
                      {project.technologies.frontend?.slice(0, 2).map((t, i) => (
                        <TechBadge key={i} name={t} size="sm" />
                      ))}
                      {project.technologies.backend?.slice(0, 2).map((t, i) => (
                        <TechBadge key={i} name={t} size="sm" />
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      data-cursor="CASE STUDY"
                      type="button"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 border border-indigo-400/40 text-white font-mono text-xs font-semibold shadow-[0_0_20px_rgba(99,102,241,0.35)] flex items-center gap-2 transition-all"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="GITHUB"
                        className="px-4 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/[0.08] hover:border-slate-500 text-slate-200 font-mono text-xs flex items-center gap-2 transition-all"
                      >
                        <GithubIcon className="w-4 h-4 text-slate-400" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Embedded Live Interactive Preview */}
                <div className="lg:col-span-7">
                  {project.previewType === 'terrashield' && <TerraShieldLivePreview />}
                  {project.previewType === 'socialsense' && <SocialSenseGraphPreview />}
                  {project.previewType === 'riraru' && <RiraruAiPreview />}
                  {project.previewType === 'cloudremoval' && <CloudRemovalSlider />}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 2. SECONDARY ADVANCED ML PROJECTS (EEG, Sentiment, etc.) */}
      {secondaryProjects.length > 0 && (
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
              Applied Machine Learning & Signal Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-dark-900/70 border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-dark-850 text-indigo-300 font-mono text-[11px] border border-white/[0.06]">
                      {project.badge}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400">
                      {project.category.join(' • ')}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-indigo-300/80 mt-0.5 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs font-mono">
                    {project.metricsOrHighlights.slice(0, 2).map((m, i) => (
                      <div key={i} className="p-2 rounded bg-dark-950/80 border border-white/[0.04]">
                        <span className="text-slate-400 text-[10px] block">{m.label}</span>
                        <span className="text-white truncate block">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    type="button"
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>Inspect Pipeline & Live Demo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-dark-850 hover:bg-dark-800 text-slate-400 hover:text-white transition-colors"
                      title="View GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. MORE EXPERIMENTS & DASHBOARDS */}
      {experimentProjects.length > 0 && (
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                More Experiments & Data Dashboards
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              COMPACT SHOWCASE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {experimentProjects.map((exp) => (
              <div
                key={exp.id}
                onClick={() => onSelectProject(exp)}
                className="p-4 rounded-xl bg-dark-900/50 border border-white/[0.05] hover:border-slate-600 hover:bg-dark-850/60 transition-all cursor-pointer group text-left"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="text-cyan-400 font-medium">{exp.badge}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-cyan-300 transition-all" />
                </div>
                <h4 className="text-sm font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                  {exp.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {exp.technologies.aiMl?.slice(0, 2).map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-950 text-slate-400 border border-white/[0.04]">
                      {t}
                    </span>
                  ))}
                  {exp.technologies.backend?.slice(0, 2).map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-950 text-slate-400 border border-white/[0.04]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
