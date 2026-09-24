import React, { useState, useEffect } from 'react';
import { Activity, Zap, CheckCircle2, ChevronRight } from 'lucide-react';

export const EegWaveformPreview: React.FC = () => {
  const [pipelineStep, setPipelineStep] = useState(0);
  const steps = [
    { title: "Raw Signal", desc: "14-Channel DREAMER EEG Electrode Ingestion" },
    { title: "Preprocessing", desc: "0.5Hz–45Hz Butterworth Bandpass + Artifact Removal" },
    { title: "Feature Extraction", desc: "Welch PSD Energy (Theta, Alpha, Beta, Gamma Bands)" },
    { title: "ML Classification", desc: "SVM / Random Forest Valence & Arousal Mapping" },
    { title: "Emotion State", desc: "Predicted Quadrant: Positive Calm / Alert Engagement" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPipelineStep(prev => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full rounded-xl bg-dark-900 border border-violet-500/30 overflow-hidden shadow-2xl text-left">
      {/* Header */}
      <div className="px-4 py-3 bg-dark-850 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Activity className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            EEG SIGNAL PIPELINE // DREAMER DATASET
          </span>
        </div>
        <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>AFFECTIVE COMPUTING ML</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Animated EEG Waves View */}
        <div className="md:col-span-7 bg-dark-950 p-4 rounded-lg border border-white/[0.06] flex flex-col justify-between">
          <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 mb-2">
            <span>ELECTRODE TELEMETRY (128 Hz)</span>
            <span className="text-emerald-400">STATUS: NOISE FILTERED</span>
          </div>

          {/* SVG Waveforms */}
          <div className="space-y-3 py-2">
            {/* Channel AF3 */}
            <div>
              <div className="text-[10px] font-mono text-cyan-400 mb-0.5">CH 01 [AF3 - Frontal]</div>
              <svg className="w-full h-8 stroke-cyan-400 overflow-visible" fill="none">
                <path
                  d="M0 16 Q 20 2, 40 16 T 80 16 T 120 16 T 160 30 T 200 16 T 240 4 T 280 16 T 320 16 T 360 26 T 400 16 T 440 8 T 480 16"
                  strokeWidth="1.5"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Channel FP1 */}
            <div>
              <div className="text-[10px] font-mono text-violet-400 mb-0.5">CH 02 [FP1 - Prefrontal]</div>
              <svg className="w-full h-8 stroke-violet-400 overflow-visible" fill="none">
                <path
                  d="M0 16 Q 15 28, 30 16 T 60 16 T 90 6 T 120 16 T 150 24 T 180 16 T 210 10 T 240 16 T 270 28 T 300 16 T 330 4 T 360 16 T 400 20 T 440 16"
                  strokeWidth="1.5"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Channel T7 */}
            <div>
              <div className="text-[10px] font-mono text-emerald-400 mb-0.5">CH 03 [T7 - Temporal]</div>
              <svg className="w-full h-8 stroke-emerald-400 overflow-visible" fill="none">
                <path
                  d="M0 16 Q 25 6, 50 16 T 100 24 T 150 16 T 200 4 T 250 16 T 300 26 T 350 16 T 400 10 T 450 16"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

          {/* Band power breakdown */}
          <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/[0.06] text-center font-mono text-[10px]">
            <div className="p-1.5 rounded bg-dark-850 border border-white/[0.04]">
              <span className="text-slate-400 block">THETA (4-8Hz)</span>
              <span className="text-cyan-300 font-bold">22.4 μV²</span>
            </div>
            <div className="p-1.5 rounded bg-dark-850 border border-white/[0.04]">
              <span className="text-slate-400 block">ALPHA (8-13Hz)</span>
              <span className="text-indigo-300 font-bold">48.1 μV²</span>
            </div>
            <div className="p-1.5 rounded bg-dark-850 border border-white/[0.04]">
              <span className="text-slate-400 block">BETA (13-30Hz)</span>
              <span className="text-violet-300 font-bold">31.6 μV²</span>
            </div>
            <div className="p-1.5 rounded bg-dark-850 border border-white/[0.04]">
              <span className="text-slate-400 block">GAMMA (&gt;30Hz)</span>
              <span className="text-emerald-300 font-bold">14.2 μV²</span>
            </div>
          </div>
        </div>

        {/* Pipeline Step Navigator */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
              PROCESSING STAGES:
            </span>
            {steps.map((st, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPipelineStep(idx)}
                className={`w-full text-left p-2.5 rounded text-xs transition-all border flex items-start gap-2.5 ${
                  pipelineStep === idx
                    ? 'bg-violet-950/40 border-violet-500/50 text-white shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                    : 'bg-dark-950/60 border-white/[0.05] text-slate-400 hover:text-slate-200'
                }`}
              >
                {pipelineStep === idx ? (
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-mono font-bold text-[11px]">{st.title}</div>
                  <div className="text-[10px] text-slate-400 font-sans">{st.desc}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-3 p-3 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-between">
            <span>VALENCE / AROUSAL:</span>
            <span className="font-bold text-white">POSITIVE ENGAGED</span>
          </div>
        </div>
      </div>
    </div>
  );
};
