import React, { useState } from 'react';
import { Activity, Zap, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export const EegWaveformPreview: React.FC = () => {
  const [pipelineStep, setPipelineStep] = useState(2);

  const steps = [
    { title: "Raw Signal Ingestion", desc: "14-Channel DREAMER EEG Electrode voltages (128 Hz)" },
    { title: "Signal Preprocessing", desc: "0.5Hz–45Hz Butterworth Bandpass + Artifact Filtering" },
    { title: "PSD Feature Extraction", desc: "Welch method relative band energy across Alpha, Beta & Theta" },
    { title: "ML Classification", desc: "SVM & Random Forest Valence/Arousal coordinate mapping" },
    { title: "Emotional State", desc: "Predicted: High Valence / Positive Calm Engagement" }
  ];

  return (
    <div className="w-full rounded-2xl bg-dark-900 border border-violet-500/30 overflow-hidden shadow-2xl text-left font-sans">
      {/* Header */}
      <div className="px-4 py-3 bg-dark-850/90 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Activity className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            AFFECTIVE EEG SIGNAL WORKSTATION // DREAMER
          </span>
        </div>
        <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>NEURO-ML CLASSIFICATION</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Animated EEG Waveforms View */}
        <div className="md:col-span-7 bg-dark-950/90 p-4 rounded-xl border border-white/[0.08] flex flex-col justify-between">
          <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 mb-2">
            <span>MULTI-CHANNEL VOLTAGE TRACES</span>
            <span className="text-emerald-400 font-semibold">SAMPLING: 128 Hz</span>
          </div>

          {/* SVG Waveforms with realistic electrode tracks */}
          <div className="space-y-3 py-1">
            {/* Channel AF3 */}
            <div>
              <div className="flex justify-between text-[10px] font-mono text-cyan-300 mb-0.5">
                <span>CH 01: AF3 [Frontal Left]</span>
                <span className="text-slate-500">12.4 μV</span>
              </div>
              <svg className="w-full h-7 stroke-cyan-400 overflow-visible" fill="none">
                <path
                  d="M0 14 Q 20 2, 40 14 T 80 14 T 120 14 T 160 26 T 200 14 T 240 4 T 280 14 T 320 14 T 360 24 T 400 14 T 440 8 T 480 14 T 520 14 T 560 4 T 600 14"
                  strokeWidth="1.5"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Channel FP1 */}
            <div>
              <div className="flex justify-between text-[10px] font-mono text-violet-300 mb-0.5">
                <span>CH 02: FP1 [Prefrontal]</span>
                <span className="text-slate-500">18.2 μV</span>
              </div>
              <svg className="w-full h-7 stroke-violet-400 overflow-visible" fill="none">
                <path
                  d="M0 14 Q 15 24, 30 14 T 60 14 T 90 6 T 120 14 T 150 22 T 180 14 T 210 10 T 240 14 T 270 24 T 300 14 T 330 4 T 360 14 T 400 18 T 440 14 T 480 8 T 520 14 T 560 22 T 600 14"
                  strokeWidth="1.5"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Channel T7 */}
            <div>
              <div className="flex justify-between text-[10px] font-mono text-emerald-300 mb-0.5">
                <span>CH 03: T7 [Temporal Left]</span>
                <span className="text-slate-500">9.8 μV</span>
              </div>
              <svg className="w-full h-7 stroke-emerald-400 overflow-visible" fill="none">
                <path
                  d="M0 14 Q 25 6, 50 14 T 100 22 T 150 14 T 200 4 T 250 14 T 300 24 T 350 14 T 400 10 T 450 14 T 500 22 T 550 14 T 600 6"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

          {/* Band power breakdown */}
          <div className="grid grid-cols-4 gap-2 pt-3 border-t border-white/[0.06] text-center font-mono text-[10px]">
            <div className="p-1.5 rounded-lg bg-dark-850 border border-white/[0.04]">
              <span className="text-slate-400 block">THETA (4-8Hz)</span>
              <span className="text-cyan-300 font-bold">22.4 μV²</span>
            </div>
            <div className="p-1.5 rounded-lg bg-dark-850 border border-white/[0.04]">
              <span className="text-slate-400 block">ALPHA (8-13Hz)</span>
              <span className="text-indigo-300 font-bold">48.1 μV²</span>
            </div>
            <div className="p-1.5 rounded-lg bg-dark-850 border border-white/[0.04]">
              <span className="text-slate-400 block">BETA (13-30Hz)</span>
              <span className="text-violet-300 font-bold">31.6 μV²</span>
            </div>
            <div className="p-1.5 rounded-lg bg-dark-850 border border-white/[0.04]">
              <span className="text-slate-400 block">GAMMA (&gt;30Hz)</span>
              <span className="text-emerald-300 font-bold">14.2 μV²</span>
            </div>
          </div>
        </div>

        {/* Right: Pipeline Steps & 2D Emotion Circumplex */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
              PROCESSING STAGES:
            </span>
            {steps.map((st, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPipelineStep(idx)}
                className={`w-full text-left p-2.5 rounded-lg text-xs transition-all border flex items-start gap-2.5 ${
                  pipelineStep === idx
                    ? 'bg-violet-950/50 border-violet-500/60 text-white shadow-sm'
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
                  <div className="text-[10px] text-slate-400 font-sans leading-tight mt-0.5">{st.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Circumplex Emotion Outcome */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/50 to-dark-950 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>CLASSIFIED STATE:</span>
            </div>
            <span className="font-bold text-white bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
              POSITIVE ENGAGED (89.2%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
