import React, { useState, useEffect } from 'react';
import { ShieldAlert, Activity, Droplets, Mountain, Radio, AlertTriangle } from 'lucide-react';

export const TerraShieldLivePreview: React.FC = () => {
  const [rainfall, setRainfall] = useState(138);
  const [soilMoisture, setSoilMoisture] = useState(82);

  // Gentle simulation of real-time sensor fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setRainfall(prev => Math.min(160, Math.max(120, prev + (Math.random() * 4 - 2))));
      setSoilMoisture(prev => Math.min(95, Math.max(75, prev + (Math.random() * 2 - 1))));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-xl bg-dark-900 border border-indigo-500/30 overflow-hidden shadow-2xl relative text-left">
      {/* Top Telemetry Header */}
      <div className="px-4 py-3 bg-dark-850 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase">
            LIVE RISK MONITORING
          </span>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            // STATION: HIM-TERRAIN-04
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            12 SENSORS ONLINE
          </span>
          <span className="text-slate-400 text-[11px]">LAT: 31.1048° N, 77.1734° E</span>
        </div>
      </div>

      {/* Main Mission Control Grid */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: Interactive Simulated Map & Wards */}
        <div className="md:col-span-7 bg-dark-950/90 rounded-lg border border-white/[0.06] p-4 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold text-white tracking-wide">
                TERRAIN SLOPE & HAZARD ZONES
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400">RESOLUTION: 100m WARD LEVEL</span>
          </div>

          {/* Simulated Topographic / Map Canvas View */}
          <div className="h-44 sm:h-52 w-full rounded bg-dark-850/80 border border-white/[0.05] relative p-3 flex flex-col justify-between overflow-hidden">
            {/* Topographic Contour Background Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-20 60 Q 80 20 180 80 T 380 40 T 580 90" fill="none" stroke="#6366f1" strokeWidth="1.5" />
              <path d="M-20 110 Q 100 70 220 120 T 420 80 T 600 130" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
              <path d="M-20 160 Q 120 120 260 170 T 460 130 T 620 180" fill="none" stroke="#ef4444" strokeWidth="1.5" />
            </svg>

            {/* Ward Interactive Markers */}
            <div className="relative z-10 flex flex-wrap gap-2 text-xs">
              <div className="px-2.5 py-1.5 rounded bg-red-950/80 border border-red-500/50 text-red-200 flex items-center gap-2 shadow-[0_0_12px_rgba(239,68,68,0.3)]">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400 animate-bounce" />
                <div>
                  <div className="font-mono font-bold text-[11px]">WARD 4 (UPPER RIDGE)</div>
                  <div className="text-[10px] text-red-300">LANDSLIDE RISK: 86% [CRITICAL]</div>
                </div>
              </div>

              <div className="px-2.5 py-1.5 rounded bg-amber-950/70 border border-amber-500/40 text-amber-200 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                <div>
                  <div className="font-mono font-bold text-[11px]">WARD 2 (VALLEY STREAM)</div>
                  <div className="text-[10px] text-amber-300">FLASH FLOOD: 64% [WARNING]</div>
                </div>
              </div>

              <div className="px-2.5 py-1.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-200 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div>
                  <div className="font-mono font-bold text-[11px]">WARD 1 (PLATEAU)</div>
                  <div className="text-[10px] text-emerald-300">STABLE: 18% [NORMAL]</div>
                </div>
              </div>
            </div>

            {/* Simulated Live Alert Banner */}
            <div className="relative z-10 p-2 rounded bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center justify-between">
              <span className="font-mono text-[11px] font-medium">
                ALERT: High soil saturation threshold breached in Sector B. Early advisory triggered.
              </span>
              <span className="text-[10px] font-mono bg-red-500/20 px-2 py-0.5 rounded text-red-200">
                ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* Right: Live Telemetry Gauges */}
        <div className="md:col-span-5 flex flex-col gap-3 justify-between">
          {/* Rainfall Card */}
          <div className="p-3 rounded-lg bg-dark-950/90 border border-white/[0.06]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                24H CUMULATIVE RAINFALL
              </span>
              <span className="font-mono text-cyan-300 font-semibold">{rainfall.toFixed(1)} mm</span>
            </div>
            <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${Math.min(100, (rainfall / 180) * 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
              <span>Threshold: 100mm</span>
              <span className="text-amber-400 font-medium">+38% Above Baseline</span>
            </div>
          </div>

          {/* Soil Moisture Card */}
          <div className="p-3 rounded-lg bg-dark-950/90 border border-white/[0.06]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Activity className="w-3.5 h-3.5 text-indigo-400" />
                SOIL SATURATION INDEX
              </span>
              <span className="font-mono text-indigo-300 font-semibold">{soilMoisture.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-red-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${soilMoisture}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
              <span>Critical Mark: 80%</span>
              <span className="text-red-400 font-medium">Critical Saturation</span>
            </div>
          </div>

          {/* Overall Hazard Status */}
          <div className="p-3 rounded-lg bg-gradient-to-br from-red-950/40 to-dark-950 border border-red-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className="w-6 h-6 text-red-400 animate-pulse" />
              <div>
                <div className="text-xs font-mono text-slate-400">OVERALL HAZARD TIER</div>
                <div className="text-sm font-bold text-red-300">RED ALERT (TIER 2)</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-slate-400">ML CONFIDENCE</div>
              <div className="text-xs font-mono font-bold text-cyan-300">91.4%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
