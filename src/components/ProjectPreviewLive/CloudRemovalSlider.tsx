import React, { useState, useRef, useCallback } from 'react';
import { Eye, Sliders, Sparkles, Orbit } from 'lucide-react';

export const CloudRemovalSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full rounded-xl bg-dark-900 border border-indigo-500/30 overflow-hidden shadow-2xl text-left select-none">
      {/* Top Header */}
      <div className="px-4 py-3 bg-dark-850 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Orbit className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            U-NET SATELLITE RECONSTRUCTION // BHARATIYA ANTARIKSH HACKATHON
          </span>
        </div>
        <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">DRAG SLIDER TO COMPARE</span>
        </div>
      </div>

      {/* Interactive Before / After Canvas Slider */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-64 sm:h-72 w-full overflow-hidden cursor-ew-resize bg-dark-950"
      >
        {/* RIGHT LAYER: Cloud-Free Reconstructed Earth Observation */}
        <div className="absolute inset-0 bg-[#0c1a17] flex items-center justify-center overflow-hidden">
          {/* Simulated Satellite Terrain (Vegetation, River, Settlements) */}
          <svg className="w-full h-full object-cover" viewBox="0 0 800 450" preserveAspectRatio="none">
            {/* Topography background */}
            <rect width="800" height="450" fill="#142c22" />
            {/* Agriculture plots */}
            <rect x="50" y="40" width="120" height="90" fill="#1b3d30" stroke="#225341" strokeWidth="2" />
            <rect x="180" y="40" width="160" height="110" fill="#204b3b" stroke="#2a634e" strokeWidth="2" />
            <rect x="360" y="50" width="140" height="80" fill="#16382b" stroke="#1d4a39" strokeWidth="2" />
            <rect x="60" y="160" width="150" height="120" fill="#255a47" stroke="#2e6f57" strokeWidth="2" />
            <rect x="520" y="80" width="220" height="140" fill="#184233" stroke="#245c48" strokeWidth="2" />
            {/* Winding River */}
            <path
              d="M-20 220 Q 220 180 340 260 T 650 200 T 820 320"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="28"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M-20 220 Q 220 180 340 260 T 650 200 T 820 320"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* Urban/infrastructure settlement nodes */}
            <circle cx="280" cy="210" r="14" fill="#64748b" opacity="0.6" />
            <circle cx="480" cy="230" r="18" fill="#64748b" opacity="0.6" />
            <line x1="280" y1="210" x2="480" y2="230" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6 4" opacity="0.7" />
          </svg>

          {/* Badge */}
          <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded bg-dark-900/90 border border-emerald-500/40 text-emerald-400 font-mono text-xs flex items-center gap-1.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AFTER: U-Net Reconstructed (Cloud-Free)</span>
          </div>
        </div>

        {/* LEFT LAYER: Cloud-Covered Satellite Imagery (Clipped by slider position) */}
        <div
          style={{ width: `${sliderPosition}%` }}
          className="absolute inset-0 bg-[#16202c] overflow-hidden border-r-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
        >
          {/* Simulated Satellite Terrain Under Heavy Clouds */}
          <div className="w-full h-full relative" style={{ width: containerRef.current?.offsetWidth || '100%' }}>
            <svg className="w-full h-full object-cover" viewBox="0 0 800 450" preserveAspectRatio="none">
              <rect width="800" height="450" fill="#142c22" opacity="0.3" />
              {/* Massive White Cloud Formations occluding ground */}
              <ellipse cx="250" cy="180" rx="220" ry="140" fill="white" opacity="0.88" />
              <ellipse cx="380" cy="220" rx="200" ry="120" fill="#f8fafc" opacity="0.92" />
              <ellipse cx="140" cy="120" rx="160" ry="90" fill="#e2e8f0" opacity="0.85" />
              <ellipse cx="600" cy="260" rx="240" ry="130" fill="white" opacity="0.9" />
              <ellipse cx="500" cy="120" rx="180" ry="100" fill="#f1f5f9" opacity="0.8" />
              {/* Cloud shadow */}
              <ellipse cx="440" cy="270" rx="120" ry="70" fill="#0f172a" opacity="0.4" />
            </svg>

            {/* Badge */}
            <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded bg-dark-900/90 border border-red-500/40 text-red-300 font-mono text-xs flex items-center gap-1.5 shadow-lg">
              <Eye className="w-3.5 h-3.5" />
              <span>BEFORE: 82% Cloud Occlusion</span>
            </div>
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div
          style={{ left: `${sliderPosition}%` }}
          className="absolute top-0 bottom-0 -translate-x-1/2 flex items-center justify-center pointer-events-none z-20"
        >
          <div className="w-8 h-8 rounded-full bg-cyan-400 border-2 border-dark-950 shadow-[0_0_15px_#22d3ee] flex items-center justify-center text-dark-950">
            <Sliders className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>

      {/* Bottom Technical Specs */}
      <div className="px-4 py-3 bg-dark-850 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
        <span>PyTorch • OpenCV • Skip-Connection Synthesis</span>
        <span className="text-cyan-400">Restoration: Optical Earth Observation</span>
      </div>
    </div>
  );
};
