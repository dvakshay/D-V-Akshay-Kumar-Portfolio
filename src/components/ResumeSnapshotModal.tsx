import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, MapPin, Award, GraduationCap, Briefcase, Code, CheckCircle2, ExternalLink } from 'lucide-react';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { achievementsData } from '../data/achievements';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeSnapshotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeSnapshotModal: React.FC<ResumeSnapshotModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 -z-10"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-dark-900 border border-white/[0.12] shadow-2xl relative flex flex-col text-left text-slate-200"
        >
          {/* Header Controls */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-dark-900/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                CANDIDATE PROFILE & RESUME SNAPSHOT
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/[0.08] text-slate-400 hover:text-white transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-10 space-y-8 font-sans">
            {/* Top Identity Block */}
            <div className="border-b border-white/[0.08] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    D V AKSHAY KUMAR
                  </h1>
                  <p className="text-sm sm:text-base font-mono text-cyan-300 mt-1">
                    Data Science Undergraduate • AI/ML Developer • Full-Stack Builder
                  </p>
                </div>

                <div className="text-xs font-mono text-slate-300 space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>dvakshayk@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                    <span>github.com/dvakshay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>Education</span>
              </div>

              <div className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white font-sans">
                    {educationData.degree}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono">
                    {educationData.institution} • {educationData.location}
                  </div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-sm font-bold text-emerald-400">CGPA: {educationData.cgpa} / 10</div>
                  <div className="text-xs text-slate-400">{educationData.period}</div>
                </div>
              </div>
            </div>

            {/* Practical Work Experience */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-3">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>Industry Experience</span>
              </div>

              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06]">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">{exp.role}</h4>
                        <span className="text-xs font-mono text-cyan-300">{exp.company}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                    </div>

                    <ul className="space-y-1.5 mt-3 text-xs sm:text-sm text-slate-300">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Flagship Projects Highlights */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-bold uppercase tracking-wider mb-3">
                <Code className="w-4 h-4 text-violet-400" />
                <span>Featured Engineering Projects</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06]">
                  <h4 className="text-sm font-bold text-white">TerraShield AI</h4>
                  <div className="text-xs font-mono text-cyan-300 mb-1">Disaster Early Warning System</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hyper-local landslide and flood warning platform combining real-time rainfall/soil sensor telemetry with predictive ML risk models. Built with FastAPI & React.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06]">
                  <h4 className="text-sm font-bold text-white">SocialSense</h4>
                  <div className="text-xs font-mono text-violet-300 mb-1">AI Social Intelligence Platform</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    NLP analysis platform analyzing sentiment, emotion vectors, and community interaction graphs across Telegram & X using DistilBERT & NetworkX.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06]">
                  <h4 className="text-sm font-bold text-white">Riraru AI</h4>
                  <div className="text-xs font-mono text-cyan-300 mb-1">Private Local Voice Assistant</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Autonomous voice assistant running Faster Whisper for speech transcription and quantized Qwen models via Ollama. 100% on-device execution.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06]">
                  <h4 className="text-sm font-bold text-white">Satellite Cloud Removal</h4>
                  <div className="text-xs font-mono text-emerald-300 mb-1">ISRO Bharatiya Antariksh Hackathon</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Deep learning U-Net convolutional neural network reconstructing ground surface details from cloud-occluded earth observation imagery.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements & Honors */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-3">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Honors & Key Milestones</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {achievementsData.map((ach) => (
                  <div key={ach.id} className="p-3 rounded-xl bg-dark-950/70 border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-amber-300 uppercase block mb-1">{ach.badge}</span>
                    <h5 className="font-bold text-white text-xs">{ach.title}</h5>
                    <p className="text-[11px] text-slate-400 mt-1">{ach.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
