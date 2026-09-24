import React, { useState, useEffect } from 'react';
import { Mic, Volume2, Cpu, Lock, Sparkles } from 'lucide-react';

interface VoiceQuery {
  question: string;
  transcription: string;
  response: string;
  latencyMs: number;
}

export const RiraruAiPreview: React.FC = () => {
  const sampleQueries: VoiceQuery[] = [
    {
      question: "Explain transformer self-attention in simple terms.",
      transcription: "explain transformer self-attention in simple terms",
      response: "Self-attention computes dynamic weight scores between every token in a sequence, allowing the model to focus on related words regardless of their positional distance.",
      latencyMs: 165
    },
    {
      question: "Check local GPU VRAM and Ollama model status.",
      transcription: "check local gpu v-ram and ollama model status",
      response: "Ollama runtime active. Qwen 7B 4-bit quantization loaded into VRAM. Memory allocated: 4.8 GB. Zero cloud requests emitted.",
      latencyMs: 140
    },
    {
      question: "Synthesize summary of recent disaster alerts.",
      transcription: "synthesize summary of recent disaster alerts",
      response: "Station HIM-TERRAIN-04 reports 138mm precipitation. Ward 4 categorized under landslide caution. Notification payloads compiled.",
      latencyMs: 195
    }
  ];

  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [pipelineState, setPipelineState] = useState<'Listening' | 'Transcribing (Whisper)' | 'Reasoning (Qwen)' | 'Synthesizing Audio'>('Listening');
  const [isSimulating, setIsSimulating] = useState(false);

  const currentQuery = sampleQueries[activeQueryIndex];

  const triggerSimulation = (index: number) => {
    setActiveQueryIndex(index);
    setIsSimulating(true);
    setPipelineState('Listening');

    setTimeout(() => {
      setPipelineState('Transcribing (Whisper)');
    }, 700);

    setTimeout(() => {
      setPipelineState('Reasoning (Qwen)');
    }, 1500);

    setTimeout(() => {
      setPipelineState('Synthesizing Audio');
      setIsSimulating(false);
    }, 2400);
  };

  useEffect(() => {
    // start initial simulation
    const t = setTimeout(() => {
      setPipelineState('Synthesizing Audio');
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full rounded-xl bg-dark-900 border border-cyan-500/30 overflow-hidden shadow-2xl text-left">
      {/* Top Bar */}
      <div className="px-4 py-3 bg-dark-850 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            RIRARU AI // LOCAL SPEECH REASONER
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
            <Lock className="w-3 h-3" />
            100% OFFLINE / ZERO-CLOUD
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: Waveform & Audio Core */}
        <div className="md:col-span-5 bg-dark-950/90 rounded-lg border border-white/[0.06] p-4 flex flex-col justify-between items-center text-center">
          {/* Status Indicator */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 border-b border-white/[0.06]">
            <span>ENGINE: WHISPER + QWEN</span>
            <span className="text-cyan-400 font-semibold">{currentQuery.latencyMs}ms</span>
          </div>

          {/* Central Pulsing Audio Hub */}
          <div className="my-6 relative flex items-center justify-center">
            <div className={`w-28 h-28 rounded-full border border-cyan-500/30 flex items-center justify-center transition-all duration-500 ${
              isSimulating ? 'scale-110 shadow-[0_0_30px_rgba(6,182,212,0.3)] bg-cyan-950/20' : 'bg-dark-850'
            }`}>
              <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center">
                <Mic className={`w-8 h-8 ${isSimulating ? 'text-cyan-300 animate-bounce' : 'text-cyan-400'}`} />
              </div>
            </div>

            {/* Orbiting particles */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 animate-spin-slow pointer-events-none" />
          </div>

          {/* Animated Waveform Visualizer */}
          <div className="w-full flex items-center justify-center gap-1 h-10 px-2 bg-dark-900 rounded border border-white/[0.04]">
            {[40, 65, 85, 30, 95, 55, 75, 45, 90, 60, 35, 70, 80, 50, 65, 40].map((h, i) => (
              <span
                key={i}
                style={{
                  height: isSimulating ? `${Math.min(95, h + (i % 3) * 10)}%` : `${h * 0.4}%`,
                  transition: 'height 0.2s ease'
                }}
                className="w-1 bg-gradient-to-t from-cyan-500 to-indigo-400 rounded-full inline-block"
              />
            ))}
          </div>

          <div className="mt-3 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>State: {pipelineState}</span>
          </div>
        </div>

        {/* Right: Audio Transcript & Local LLM Output */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-3">
          {/* Query Selection Buttons */}
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">
              TEST VOICE PROMPT INFERENCE:
            </span>
            <div className="flex flex-col gap-1.5">
              {sampleQueries.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => triggerSimulation(idx)}
                  className={`text-left px-3 py-2 rounded text-xs font-mono transition-all flex items-center justify-between border ${
                    activeQueryIndex === idx
                      ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                      : 'bg-dark-950/60 border-white/[0.06] text-slate-400 hover:text-white hover:border-slate-600'
                  }`}
                >
                  <span className="truncate">"{q.question}"</span>
                  <span className="text-[10px] text-cyan-400 shrink-0 ml-2">▶ Run</span>
                </button>
              ))}
            </div>
          </div>

          {/* Assistant Reasoning Output */}
          <div className="p-3.5 rounded-lg bg-dark-950/90 border border-white/[0.08] relative">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1 text-cyan-400">
                <Volume2 className="w-3.5 h-3.5" /> SYNTHESIZED SPEECH OUTPUT
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Cpu className="w-3 h-3" /> Qwen Local LLM
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-medium">
              "{currentQuery.response}"
            </p>

            <div className="mt-3 pt-2.5 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Whisper STT → Qwen (Ollama) → sounddevice</span>
              <span className="text-emerald-400">Latency: {currentQuery.latencyMs}ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
