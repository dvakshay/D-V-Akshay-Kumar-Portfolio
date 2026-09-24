import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { GithubIcon } from '../components/Icons';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-36 pb-20 px-4 sm:px-8 flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-indigo-600/20 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Status Beacon / Current Operational Focus */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-indigo-500/30 text-xs font-mono text-slate-300 shadow-[0_0_20px_rgba(99,102,241,0.2)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-semibold">Live Operational Status:</span>
          <span>Building AI-powered systems & full-stack products</span>
        </motion.div>

        {/* Large Name Typography with Cinematic Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase select-none leading-none">
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              D V AKSHAY
            </span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              KUMAR
            </span>
          </h1>
        </motion.div>

        {/* Professional Subtitles */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-cyan-300"
        >
          <span className="px-3 py-1 rounded-md bg-dark-900/80 border border-white/[0.08]">
            Data Science Undergraduate
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="px-3 py-1 rounded-md bg-dark-900/80 border border-white/[0.08] text-indigo-300">
            AI/ML Developer
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="px-3 py-1 rounded-md bg-dark-900/80 border border-white/[0.08] text-emerald-300">
            Practical Builder
          </span>
        </motion.div>

        {/* Main Positioning Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight max-w-3xl leading-snug"
        >
          "I build intelligent systems, data-driven applications, and interactive products."
        </motion.p>

        {/* Supporting Narrative Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-sans"
        >
          Data Science undergraduate exploring AI, machine learning, computer vision, NLP, and full-stack development — turning real-world problems into practical, deployed products.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={onExploreClick}
            data-cursor="EXPLORE"
            className="rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 p-[1px] shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all group"
          >
            <div className="px-6 py-3.5 rounded-xl bg-dark-950 group-hover:bg-opacity-90 flex items-center gap-2.5 text-xs sm:text-sm font-mono font-semibold text-white">
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
            </div>
          </MagneticButton>

          <MagneticButton
            href="https://github.com/dvakshay"
            target="_blank"
            data-cursor="GITHUB"
            className="rounded-xl bg-dark-900/90 border border-white/[0.1] hover:border-indigo-400/60 p-[1px] transition-all group"
          >
            <div className="px-5 py-3.5 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-200 group-hover:text-white">
              <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white" />
              <span>View GitHub</span>
            </div>
          </MagneticButton>

          <MagneticButton
            href="#contact"
            data-cursor="CONNECT"
            className="rounded-xl bg-dark-900/90 border border-white/[0.1] hover:border-cyan-400/60 p-[1px] transition-all group"
          >
            <div className="px-5 py-3.5 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-200 group-hover:text-white">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Let's Connect</span>
            </div>
          </MagneticButton>
        </motion.div>

        {/* Live Lab Key Indicators Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 sm:mt-18 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3 text-left"
        >
          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-white/[0.06] backdrop-blur-md">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase text-slate-400">Flagship AI</span>
            </div>
            <div className="text-sm font-bold text-white font-mono">TerraShield AI</div>
            <div className="text-[11px] text-slate-400">Disaster warning engine</div>
          </div>

          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-white/[0.06] backdrop-blur-md">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Layers className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase text-slate-400">NLP & Graphs</span>
            </div>
            <div className="text-sm font-bold text-white font-mono">SocialSense</div>
            <div className="text-[11px] text-slate-400">DistilBERT intelligence</div>
          </div>

          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-white/[0.06] backdrop-blur-md">
            <div className="flex items-center gap-2 text-violet-400 mb-1">
              <Activity className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase text-slate-400">Academic Level</span>
            </div>
            <div className="text-sm font-bold text-white font-mono">B.Tech 3rd Year</div>
            <div className="text-[11px] text-slate-400">SNIST Data Science</div>
          </div>

          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-white/[0.06] backdrop-blur-md">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase text-slate-400">Honors</span>
            </div>
            <div className="text-sm font-bold text-white font-mono">IIT Madras</div>
            <div className="text-[11px] text-slate-400">NeuroHackathon Finalist</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
