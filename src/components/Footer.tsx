import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-dark-950/80 backdrop-blur-xl py-12 px-4 sm:px-8 text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-lg text-white font-sans tracking-tight">
              D V AKSHAY KUMAR
            </span>
            <span className="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-500/30 text-indigo-300 font-mono text-[10px]">
              SNIST '28
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Data Science Undergraduate | AI/ML | Software Development
          </p>
        </div>

        {/* Links & Socials */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <a
            href="https://github.com/dvakshay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:dvakshayk@gmail.com"
            className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>dvakshayk@gmail.com</span>
          </a>

          <button
            onClick={scrollToTop}
            type="button"
            className="p-2 rounded-lg bg-dark-850 border border-white/[0.08] hover:border-indigo-400 text-slate-300 hover:text-white transition-all ml-2"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
        <span>© 2026 D V Akshay Kumar. All rights reserved.</span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <span>Engineered with React, Vite & Tailwind</span>
        </span>
      </div>
    </footer>
  );
};
