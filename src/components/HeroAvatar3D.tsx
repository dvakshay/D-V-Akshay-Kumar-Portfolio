import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Activity, Brain, Volume2, Hand } from 'lucide-react';

interface HeroAvatar3DProps {
  className?: string;
}

export const HeroAvatar3D: React.FC<HeroAvatar3DProps> = ({ className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeMood, setActiveMood] = useState<'building' | 'neural' | 'coding'>('building');
  const [showSpeechBubble, setShowSpeechBubble] = useState(true);
  const [hasWaved, setHasWaved] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Mouse tilt physics using Framer Motion springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 220, mass: 0.4 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], ['10%', '90%']);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], ['10%', '90%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleWave = () => {
    setHasWaved(true);
    setTimeout(() => setHasWaved(false), 2000);
  };

  const handleSimulateVoice = () => {
    setIsPlayingAudio(true);
    setTimeout(() => setIsPlayingAudio(false), 2800);
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* Outer ambient glow rings with soft breathing animation */}
      <div className="absolute w-[360px] sm:w-[460px] md:w-[520px] h-[360px] sm:h-[460px] md:h-[520px] rounded-full bg-gradient-to-tr from-indigo-600/25 via-violet-600/20 to-cyan-400/20 blur-[90px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Rotating Cybernetic Celestial HUD Rings */}
      <div className="absolute w-[350px] sm:w-[430px] md:w-[480px] h-[350px] sm:h-[430px] md:h-[480px] rounded-full border border-indigo-500/25 border-dashed animate-spin-slow pointer-events-none -z-10" />
      <div className="absolute w-[310px] sm:w-[390px] md:w-[430px] h-[310px] sm:h-[390px] md:h-[430px] rounded-full border border-cyan-400/20 pointer-events-none -z-10" />

      {/* Interactive Speech / Greeting Bubble from Akshay */}
      {showSpeechBubble && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute -top-16 sm:-top-20 z-40 max-w-[280px] sm:max-w-xs p-3 rounded-2xl bg-dark-900/95 border border-indigo-400/40 shadow-2xl backdrop-blur-xl text-left"
        >
          <div className="flex items-start gap-2.5">
            <span className="text-xl shrink-0 mt-0.5">{hasWaved ? '👋' : '🚀'}</span>
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold font-sans text-white">Akshay Kumar</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-cyan-400">Available</span>
                  <button
                    type="button"
                    onClick={() => setShowSpeechBubble(false)}
                    className="text-slate-400 hover:text-white text-xs px-1 leading-none rounded hover:bg-white/10"
                    title="Dismiss"
                  >
                    ×
                  </button>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug mt-0.5 font-sans">
                "Hey there! Welcome to my AI lab. Explore my live models below."
              </p>
            </div>
          </div>
          {/* Bubble tail */}
          <div className="absolute -bottom-2 left-12 w-3 h-3 bg-dark-900 border-b border-r border-indigo-400/40 rotate-45" />
        </motion.div>
      )}

      {/* Interactive 3D Tilting Character Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-[300px] sm:w-[360px] md:w-[410px] aspect-square rounded-3xl p-2.5 bg-gradient-to-b from-indigo-500/35 via-slate-900/60 to-cyan-500/25 shadow-[0_25px_70px_-15px_rgba(99,102,241,0.45)] backdrop-blur-xl border border-white/[0.14] transition-shadow duration-300 hover:shadow-[0_30px_80px_-10px_rgba(6,182,212,0.55)] group cursor-grab active:cursor-grabbing"
      >
        {/* Holographic Corner Technical Brackets */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none z-30" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-indigo-400 pointer-events-none z-30" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-indigo-400 pointer-events-none z-30" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none z-30" />

        {/* Top Telemetry Header Tag */}
        <div className="absolute top-4 inset-x-5 flex items-center justify-between z-30 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-950/85 border border-white/[0.12] text-[11px] font-mono text-cyan-300 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AKSHAY // 3D LAB</span>
          </div>
          <span className="text-[10px] font-mono text-slate-300 bg-dark-950/85 px-2.5 py-1 rounded-full border border-white/[0.1] shadow-lg">
            SNIST '28
          </span>
        </div>

        {/* 3D Character Image with Inner Mask & Rounded Edges */}
        <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-dark-950 shadow-inner">
          <img
            src="/avatar_3d.jpg"
            alt="D V Akshay Kumar 3D Animated Developer Avatar"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />

          {/* Interactive Mouse Glare Effect */}
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22) 0%, transparent 60%)`,
            }}
            className="absolute inset-0 pointer-events-none z-10"
          />

          {/* Subtle Bottom Vignette Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent pointer-events-none z-20" />

          {/* Quick Interactive Controls inside Avatar Frame */}
          <div className="absolute bottom-3 inset-x-3 z-30 flex items-center justify-between text-[11px] font-mono">
            {/* Quick Modes */}
            <div className="flex items-center gap-1 bg-dark-950/90 p-1 rounded-lg border border-white/[0.1]">
              <button
                type="button"
                onClick={() => setActiveMood('building')}
                className={`px-2 py-0.5 rounded text-[10px] transition-all font-sans font-medium ${
                  activeMood === 'building'
                    ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Building
              </button>
              <button
                type="button"
                onClick={() => setActiveMood('neural')}
                className={`px-2 py-0.5 rounded text-[10px] transition-all font-sans font-medium ${
                  activeMood === 'neural'
                    ? 'bg-cyan-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Neural
              </button>
              <button
                type="button"
                onClick={() => setActiveMood('coding')}
                className={`px-2 py-0.5 rounded text-[10px] transition-all font-sans font-medium ${
                  activeMood === 'coding'
                    ? 'bg-emerald-600 text-white shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Code
              </button>
            </div>

            {/* Micro Interaction Actions: Wave & Audio simulation */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleWave}
                data-cursor="WAVE"
                title="Say Hello"
                className={`p-1.5 rounded-lg border text-xs transition-all ${
                  hasWaved
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                    : 'bg-dark-900/90 border-white/[0.12] text-slate-300 hover:text-white hover:border-slate-500'
                }`}
              >
                <Hand className={`w-3.5 h-3.5 ${hasWaved ? 'animate-bounce text-amber-400' : ''}`} />
              </button>

              <button
                type="button"
                onClick={handleSimulateVoice}
                data-cursor="GREET"
                title="Voice greeting simulation"
                className={`p-1.5 rounded-lg border text-xs transition-all flex items-center gap-1 ${
                  isPlayingAudio
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'bg-dark-900/90 border-white/[0.12] text-slate-300 hover:text-white hover:border-slate-500'
                }`}
              >
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-pulse text-cyan-400' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Orbiting Satellite Floating Badge 1: Top Right */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(50px)' }}
          className="absolute -top-5 -right-4 sm:-right-8 z-40 px-3.5 py-2 rounded-2xl bg-dark-900/95 border border-indigo-500/40 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 pointer-events-none"
        >
          <div className="w-7 h-7 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-400">RESEARCH & DEV</div>
            <div className="text-xs font-bold font-sans text-white">AI / Data Science</div>
          </div>
        </motion.div>

        {/* Orbiting Satellite Floating Badge 2: Bottom Left */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ transform: 'translateZ(60px)' }}
          className="absolute -bottom-5 -left-4 sm:-left-8 z-40 px-3.5 py-2 rounded-2xl bg-dark-900/95 border border-cyan-500/40 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 pointer-events-none"
        >
          <div className="w-7 h-7 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-400">ACTIVE PROJECT</div>
            <div className="text-xs font-bold font-sans text-cyan-300">TerraShield AI</div>
          </div>
        </motion.div>

        {/* Orbiting Satellite Floating Badge 3: Right Center */}
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ transform: 'translateZ(45px)' }}
          className="hidden sm:flex absolute top-1/2 -right-10 -translate-y-1/2 z-40 px-3 py-1.5 rounded-xl bg-dark-900/95 border border-emerald-500/40 shadow-2xl backdrop-blur-xl items-center gap-2 pointer-events-none"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-[11px] font-mono text-emerald-300 font-semibold">
            CGPA 7.6 • SNIST
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
