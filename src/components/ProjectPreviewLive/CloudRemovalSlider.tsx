import React, { useState, useRef, useCallback } from 'react';
import { Eye, Sliders, Orbit, CheckCircle2 } from 'lucide-react';

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
    <div className="w-full rounded-2xl bg-dark-900 border border-indigo-500/30 overflow-hidden shadow-2xl text-left select-none font-sans">
      {/* Top Header */}
      <div className="px-4 py-3 bg-dark-850/90 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Orbit className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            U-NET SATELLITE RECONSTRUCTION // BHARATIYA ANTARIKSH HACKATHON
          </span>
        </div>
        <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
          <Sliders className="w-3.5 h-3.5" />
          <span>DRAG SLIDER TO INSPECT</span>
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
        <div className="absolute inset-0 bg-[#0e2019] flex items-center justify-center overflow-hidden">
          {/* Detailed Earth Observation Graphic */}
          <svg className="w-full h-full object-cover" viewBox="0 0 800 450" preserveAspectRatio="none">
            {/* Terrain Background */}
            <rect width="800" height="450" fill="#153326" />

            {/* Topographic elevation contours */}
            <path d="M-50 120 Q 200 60 450 140 T 850 90" fill="none" stroke="#1d4433" strokeWidth="35" opacity="0.6" />
            <path d="M-50 280 Q 250 200 550 310 T 850 240" fill="none" stroke="#1b3d2e" strokeWidth="45" opacity="0.7" />

            {/* Agricultural parcels */}
            <rect x="40" y="30" width="130" height="90" fill="#23523d" stroke="#2d694e" strokeWidth="1.5" />
            <rect x="180" y="35" width="150" height="110" fill="#2d614a" stroke="#39795d" strokeWidth="1.5" />
            <rect x="340" y="45" width="130" height="75" fill="#1f4937" stroke="#295e46" strokeWidth="1.5" />
            <rect x="480" y="30" width="160" height="95" fill="#306b52" stroke="#3b8264" strokeWidth="1.5" />
            <rect x="650" y="40" width="120" height="100" fill="#255540" stroke="#316e53" strokeWidth="1.5" />

            <rect x="50" y="140" width="140" height="120" fill="#295c46" stroke="#347559" strokeWidth="1.5" />
            <rect x="520" y="145" width="230" height="135" fill="#204c39" stroke="#2c674e" strokeWidth="1.5" />

            <rect x="60" y="280" width="150" height="130" fill="#1b4131" stroke="#245540" strokeWidth="1.5" />
            <rect x="220" y="300" width="180" height="110" fill="#275943" stroke="#327256" strokeWidth="1.5" />
            <rect x="420" y="290" width="170" height="125" fill="#2e664e" stroke="#3a7e61" strokeWidth="1.5" />
            <rect x="610" y="295" width="150" height="120" fill="#224f3b" stroke="#2d674d" strokeWidth="1.5" />

            {/* Winding River with Tributaries */}
            <path
              d="M-20 220 Q 220 170 350 250 T 640 190 T 820 310"
              fill="none"
              stroke="#0284c7"
              strokeWidth="24"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M-20 220 Q 220 170 350 250 T 640 190 T 820 310"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path d="M 350 250 Q 380 320 440 370" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" opacity="0.7" />

            {/* Infrastructure settlements & roads */}
            <line x1="120" y1="0" x2="160" y2="450" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="6 3" opacity="0.7" />
            <line x1="0" y1="260" x2="800" y2="280" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="6 3" opacity="0.7" />
            <circle cx="280" cy="205" r="16" fill="#cbd5e1" opacity="0.7" />
            <circle cx="500" cy="225" r="20" fill="#cbd5e1" opacity="0.7" />
          </svg>

          {/* Reconstructed Tag */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-dark-900/90 border border-emerald-500/50 text-emerald-400 font-mono text-xs flex items-center gap-1.5 shadow-xl">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>AFTER: U-Net Reconstructed (0% Cloud)</span>
          </div>
        </div>

        {/* LEFT LAYER: Cloud-Covered Satellite Imagery */}
        <div
          style={{ width: `${sliderPosition}%` }}
          className="absolute inset-0 bg-[#141b24] overflow-hidden border-r-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.7)]"
        >
          <div className="w-full h-full relative" style={{ width: containerRef.current?.offsetWidth || '100%' }}>
            <svg className="w-full h-full object-cover" viewBox="0 0 800 450" preserveAspectRatio="none">
              <rect width="800" height="450" fill="#153326" opacity="0.25" />

              {/* Realistic Cloud Ground Shadows */}
              <ellipse cx="230" cy="210" rx="190" ry="120" fill="#090d14" opacity="0.5" />
              <ellipse cx="370" cy="250" rx="170" ry="100" fill="#090d14" opacity="0.55" />
              <ellipse cx="610" cy="280" rx="200" ry="110" fill="#090d14" opacity="0.5" />

              {/* Dense White Cloud Formations with layered opacity */}
              <ellipse cx="210" cy="180" rx="210" ry="130" fill="#e2e8f0" opacity="0.8" />
              <ellipse cx="210" cy="180" rx="180" ry="110" fill="#ffffff" opacity="0.95" />

              <ellipse cx="380" cy="220" rx="190" ry="120" fill="#f1f5f9" opacity="0.85" />
              <ellipse cx="380" cy="220" rx="160" ry="100" fill="#ffffff" opacity="0.98" />

              <ellipse cx="120" cy="110" rx="150" ry="85" fill="#f8fafc" opacity="0.9" />
              <ellipse cx="620" cy="240" rx="230" ry="125" fill="#ffffff" opacity="0.94" />
              <ellipse cx="510" cy="115" rx="170" ry="95" fill="#ffffff" opacity="0.92" />
            </svg>

            {/* Cloud Covered Tag */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-dark-900/90 border border-red-500/50 text-red-300 font-mono text-xs flex items-center gap-1.5 shadow-xl">
              <Eye className="w-3.5 h-3.5" />
              <span>BEFORE: 82.4% Atmospheric Occlusion</span>
            </div>
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div
          style={{ left: `${sliderPosition}%` }}
          className="absolute top-0 bottom-0 -translate-x-1/2 flex items-center justify-center pointer-events-none z-20"
        >
          <div className="w-9 h-9 rounded-full bg-cyan-400 border-2 border-dark-950 shadow-[0_0_20px_#22d3ee] flex items-center justify-center text-dark-950 font-bold">
            <Sliders className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>

      {/* Bottom Technical Specifications */}
      <div className="px-4 py-3 bg-dark-850/90 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>PyTorch U-Net • Skip-Connection Synthesis</span>
        </span>
        <span className="text-cyan-300 font-semibold">PSNR: 32.8 dB • SSIM: 0.941</span>
      </div>
    </div>
  );
};
