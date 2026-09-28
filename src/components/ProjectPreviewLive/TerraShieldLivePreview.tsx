import React, { useState } from 'react';
import { ShieldAlert, Activity, Droplets, Mountain, Radio, AlertTriangle, Play, RefreshCw, CheckCircle, MapPin } from 'lucide-react';

export const TerraShieldLivePreview: React.FC = () => {
  const [scenario, setScenario] = useState<'normal' | 'moderate' | 'critical'>('critical');

  const scenarioData = {
    normal: {
      rainfall: 28.4,
      soilMoisture: 42,
      slopeStress: '14.2 kPa',
      riskTier: 'TIER 0 // STABLE',
      riskColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300',
      statusMsg: 'Hydrological and slope stability parameters within seasonal baselines. No warnings.',
      ward4Risk: '12% [NORMAL]',
      ward2Risk: '18% [NORMAL]',
      ward1Risk: '8% [NORMAL]',
      activeSensors: 14,
      alertActive: false,
    },
    moderate: {
      rainfall: 88.5,
      soilMoisture: 67,
      slopeStress: '29.8 kPa',
      riskTier: 'TIER 1 // ADVISORY',
      riskColor: 'text-amber-400',
      badgeBg: 'bg-amber-950/70 border-amber-500/40 text-amber-300',
      statusMsg: 'Precipitation exceeding 80mm threshold in sub-basin 3. Inclinometers show minor creep.',
      ward4Risk: '54% [ELEVATED]',
      ward2Risk: '46% [ELEVATED]',
      ward1Risk: '15% [NORMAL]',
      activeSensors: 14,
      alertActive: false,
    },
    critical: {
      rainfall: 142.8,
      soilMoisture: 89,
      slopeStress: '48.6 kPa',
      riskTier: 'TIER 2 // RED ALERT',
      riskColor: 'text-red-400',
      badgeBg: 'bg-red-950/80 border-red-500/60 text-red-200',
      statusMsg: 'CRITICAL: Soil saturation threshold breached in Sector B. Early evacuation advisory dispatched.',
      ward4Risk: '88% [CRITICAL]',
      ward2Risk: '68% [WARNING]',
      ward1Risk: '22% [STABLE]',
      activeSensors: 14,
      alertActive: true,
    }
  };

  const current = scenarioData[scenario];

  return (
    <div className="w-full rounded-2xl bg-dark-900 border border-indigo-500/30 overflow-hidden shadow-2xl relative text-left font-sans">
      {/* Top Telemetry Header */}
      <div className="px-4 py-3 bg-dark-850/90 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className={`w-2.5 h-2.5 rounded-full ${current.alertActive ? 'bg-red-500 animate-ping' : 'bg-emerald-400'}`} />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            TERRASHIELD // DISASTER INTELLIGENCE MISSION CONTROL
          </span>
        </div>

        {/* Live Scenario Selector Buttons */}
        <div className="flex items-center gap-1.5 bg-dark-950 p-1 rounded-lg border border-white/[0.08]">
          <span className="text-[10px] font-mono text-slate-400 px-1 hidden sm:inline">Simulate:</span>
          <button
            type="button"
            onClick={() => setScenario('normal')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
              scenario === 'normal'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Normal
          </button>
          <button
            type="button"
            onClick={() => setScenario('moderate')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
              scenario === 'moderate'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Moderate
          </button>
          <button
            type="button"
            onClick={() => setScenario('critical')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
              scenario === 'critical'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Critical
          </button>
        </div>
      </div>

      {/* Main Mission Control Grid */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: GIS Topographic Map & Ward Pins */}
        <div className="md:col-span-7 bg-dark-950/90 rounded-xl border border-white/[0.08] p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 z-10">
            <div className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold text-white tracking-wide">
                TOPOGRAPHIC ELEVATION & GIS RISK ZONES
              </span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400">LAT: 31.1048° N, 77.1734° E</span>
          </div>

          {/* Simulated Satellite Topographic View */}
          <div className="h-48 sm:h-56 w-full rounded-lg bg-[#0a101d] border border-white/[0.06] relative p-3 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Topographic Contour Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-10 40 Q 90 10 190 70 T 390 30 T 590 80" fill="none" stroke="#6366f1" strokeWidth="1.5" />
              <path d="M-10 90 Q 110 50 230 110 T 430 70 T 610 120" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
              <path d="M-10 140 Q 130 100 270 160 T 470 120 T 630 170" fill="none" stroke={scenario === 'critical' ? '#ef4444' : '#10b981'} strokeWidth="1.5" />
              <path d="M-10 190 Q 150 150 310 200 T 510 160 T 650 210" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            {/* Ward Interactive Markers */}
            <div className="relative z-10 flex flex-wrap gap-2 text-xs">
              <div className={`px-2.5 py-1.5 rounded-lg border transition-all ${
                scenario === 'critical'
                  ? 'bg-red-950/90 border-red-500/60 text-red-200 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                  : 'bg-dark-900/90 border-white/[0.1] text-slate-300'
              }`}>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span className="font-mono font-bold text-[11px]">WARD 4 (UPPER RIDGE)</span>
                </div>
                <div className="text-[10px] text-red-300 mt-0.5">Landslide Risk: {current.ward4Risk}</div>
              </div>

              <div className={`px-2.5 py-1.5 rounded-lg border transition-all ${
                scenario === 'critical' || scenario === 'moderate'
                  ? 'bg-amber-950/80 border-amber-500/50 text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                  : 'bg-dark-900/90 border-white/[0.1] text-slate-300'
              }`}>
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono font-bold text-[11px]">WARD 2 (VALLEY STREAM)</span>
                </div>
                <div className="text-[10px] text-amber-300 mt-0.5">Flash Flood: {current.ward2Risk}</div>
              </div>

              <div className="px-2.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono font-bold text-[11px]">WARD 1 (PLATEAU)</span>
                </div>
                <div className="text-[10px] text-emerald-300 mt-0.5">Slope Risk: {current.ward1Risk}</div>
              </div>
            </div>

            {/* Alert Status Banner */}
            <div className={`relative z-10 p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all ${
              scenario === 'critical'
                ? 'bg-red-500/20 border-red-500/50 text-red-200 shadow-lg'
                : scenario === 'moderate'
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-200'
                  : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
            }`}>
              <div className="flex items-center gap-2">
                <AlertTriangle className={`w-4 h-4 shrink-0 ${scenario === 'critical' ? 'animate-bounce text-red-400' : 'text-slate-400'}`} />
                <span className="text-[11px] font-sans font-medium line-clamp-1">{current.statusMsg}</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950/80 shrink-0 ml-2 font-bold">
                {scenario === 'critical' ? 'TRIGGERED' : 'MONITORING'}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Live Telemetry Gauges */}
        <div className="md:col-span-5 flex flex-col gap-3 justify-between">
          {/* Rainfall Card */}
          <div className="p-3.5 rounded-xl bg-dark-950/90 border border-white/[0.08]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Droplets className="w-4 h-4 text-cyan-400" />
                24H PRECIPITATION
              </span>
              <span className="font-mono text-cyan-300 font-bold">{current.rainfall} mm</span>
            </div>
            <div className="w-full bg-dark-800 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${Math.min(100, (current.rainfall / 160) * 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
              <span>Threshold: 80 mm</span>
              <span className={scenario === 'critical' ? 'text-red-400 font-semibold' : 'text-slate-400'}>
                {scenario === 'critical' ? '+78% Over Threshold' : 'Safe Range'}
              </span>
            </div>
          </div>

          {/* Soil Moisture Card */}
          <div className="p-3.5 rounded-xl bg-dark-950/90 border border-white/[0.08]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Activity className="w-4 h-4 text-indigo-400" />
                SOIL SATURATION INDEX
              </span>
              <span className="font-mono text-indigo-300 font-bold">{current.soilMoisture}%</span>
            </div>
            <div className="w-full bg-dark-800 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-500 via-amber-500 to-red-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${current.soilMoisture}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
              <span>Pore Pressure: {current.slopeStress}</span>
              <span className={scenario === 'critical' ? 'text-red-400 font-semibold' : 'text-slate-400'}>
                {scenario === 'critical' ? 'Liquefaction Risk' : 'Normal Cohesion'}
              </span>
            </div>
          </div>

          {/* Overall Hazard Status */}
          <div className="p-3.5 rounded-xl bg-gradient-to-br from-dark-850 to-dark-950 border border-white/[0.1] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldAlert className={`w-7 h-7 ${current.riskColor}`} />
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">PREDICTIVE HAZARD TIER</div>
                <div className={`text-sm font-bold font-mono ${current.riskColor}`}>
                  {current.riskTier}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] font-mono text-slate-400">ML CONFIDENCE</div>
              <div className="text-xs font-mono font-bold text-cyan-300">92.4%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
