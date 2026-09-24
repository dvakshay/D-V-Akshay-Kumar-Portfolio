import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Compass, AlertCircle } from 'lucide-react';
import type { ProjectItem } from '../types';
import { TechBadge } from './TechBadge';
import { GithubIcon } from './Icons';
import { TerraShieldLivePreview } from './ProjectPreviewLive/TerraShieldLivePreview';
import { SocialSenseGraphPreview } from './ProjectPreviewLive/SocialSenseGraphPreview';
import { RiraruAiPreview } from './ProjectPreviewLive/RiraruAiPreview';
import { CloudRemovalSlider } from './ProjectPreviewLive/CloudRemovalSlider';
import { EegWaveformPreview } from './ProjectPreviewLive/EegWaveformPreview';
import { SentimentDemoPreview } from './ProjectPreviewLive/SentimentDemoPreview';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderLivePreview = () => {
    switch (project.previewType) {
      case 'terrashield':
        return <TerraShieldLivePreview />;
      case 'socialsense':
        return <SocialSenseGraphPreview />;
      case 'riraru':
        return <RiraruAiPreview />;
      case 'cloudremoval':
        return <CloudRemovalSlider />;
      case 'eeg':
        return <EegWaveformPreview />;
      case 'sentiment':
        return <SentimentDemoPreview />;
      default:
        return (
          <div className="p-8 rounded-xl bg-dark-900 border border-white/[0.08] text-center">
            <Cpu className="w-12 h-12 text-indigo-400 mx-auto mb-3 opacity-60" />
            <h4 className="text-white font-medium text-base mb-1">{project.title}</h4>
            <p className="text-sm text-slate-400 max-w-md mx-auto">{project.description}</p>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop click catcher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-dark-900/95 border border-indigo-500/30 shadow-2xl shadow-indigo-950/40 relative flex flex-col"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-30 px-6 py-4 bg-dark-900/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-indigo-950/70 border border-indigo-500/40 text-indigo-300 text-xs font-mono">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                // CASE STUDY DEEP DIVE
              </span>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg bg-dark-800 border border-white/[0.08] hover:border-slate-500 text-slate-300 hover:text-white transition-all"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-10 text-left">
            {/* Project Hero Header */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.category.map((cat, idx) => (
                  <span key={idx} className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h1>
              <p className="mt-2 text-lg text-indigo-300/90 font-mono">
                {project.subtitle}
              </p>
              <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-4xl">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-dark-800 border border-white/[0.12] hover:border-indigo-400 text-white text-xs font-mono font-medium transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-300" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-medium shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
                  >
                    <span>Launch Live System</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Quick Metrics & Parameters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metricsOrHighlights.map((m, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-dark-950 border border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">{m.label}</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{m.value}</span>
                </div>
              ))}
            </div>

            {/* 06 — Interactive Live Preview / Simulated Interface */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono text-cyan-400 font-bold">01 // INTERACTIVE SYSTEM PREVIEW</span>
              </div>
              {renderLivePreview()}
            </div>

            {/* 01 — Problem & 02 — Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="p-5 rounded-xl bg-dark-950/80 border border-red-500/20">
                <div className="flex items-center gap-2 mb-3 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Real-World Challenge</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>

              {/* Solution / Approach */}
              <div className="p-5 rounded-xl bg-dark-950/80 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-3 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>The Engineering Approach</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* 03 — Architecture Pipeline */}
            {project.architecture && project.architecture.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono text-indigo-300 font-bold uppercase tracking-wider">
                    02 // ARCHITECTURE & DATA FLOW
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.architecture.map((arch, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-dark-950/90 border border-white/[0.06] flex flex-col justify-between">
                      <div className="text-xs font-mono font-bold text-cyan-300 mb-1.5">{arch.step}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{arch.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 04 — Technology Stack Breakdown */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono text-violet-300 font-bold uppercase tracking-wider">
                  03 // TECHNOLOGY IMPLEMENTATION
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-dark-950/70 border border-white/[0.06]">
                {project.technologies.aiMl && (
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2">AI / Machine Learning</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.aiMl.map((t, i) => (
                        <TechBadge key={i} name={t} highlight size="sm" />
                      ))}
                    </div>
                  </div>
                )}
                {project.technologies.frontend && (
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2">Frontend SPA</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.frontend.map((t, i) => (
                        <TechBadge key={i} name={t} size="sm" />
                      ))}
                    </div>
                  </div>
                )}
                {project.technologies.backend && (
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2">Backend & APIs</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.backend.map((t, i) => (
                        <TechBadge key={i} name={t} size="sm" />
                      ))}
                    </div>
                  </div>
                )}
                {project.technologies.tools && (
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2">Tools & Environments</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.tools.map((t, i) => (
                        <TechBadge key={i} name={t} size="sm" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 05 — Key Capabilities & Deliverables */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider">
                  04 // VERIFIED KEY CAPABILITIES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-dark-950/60 border border-white/[0.05] flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300 font-sans">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-5 bg-dark-900 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
            <span>D V AKSHAY KUMAR // PORTFOLIO CASE STUDY</span>
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-1.5 rounded bg-dark-800 border border-white/[0.1] hover:border-slate-500 text-slate-200 transition-all"
            >
              Close Window (Esc)
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
