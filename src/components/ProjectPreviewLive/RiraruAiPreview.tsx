import React, { useState, useEffect } from 'react';
import { Mic, Volume2, Cpu, Lock, Sparkles, Terminal, Activity } from 'lucide-react';

interface VoiceQuery {
  id: string;
  question: string;
  response: string;
  latencyMs: number;
}

export const RiraruAiPreview: React.FC = () => {
  const sampleQueries: VoiceQuery[] = [
    {
      id: "q1",
      question: "Explain transformer self-attention in simple terms.",
      response: "Self-attention computes dynamic relevance scores between every token in a sequence, allowing the model to correlate related concepts regardless of their distance in the sentence.",
      latencyMs: 165
    },
    {
      id: "q2",
      question: "Check local GPU VRAM and Ollama model status.",
      response: "Ollama runtime active. Qwen 7B 4-bit GGUF weights mapped into GPU memory. 4.8 GB allocated. No outbound network requests emitted.",
      latencyMs: 138
    },
    {
      id: "q3",
      question: "Synthesize summary of recent disaster alerts.",
      response: "Station HIM-TERRAIN-04 logged 142mm precipitation. Soil pore saturation is critical in Sector B. Automated early warning advisories have been compiled.",
      latencyMs: 192
    }
  ];

  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [pipelineState, setPipelineState] = useState<'Idle' | 'Listening' | 'Transcribing (Whisper)' | 'Reasoning (Qwen)' | 'Synthesizing Audio'>('Idle');
  const [displayedResponse, setDisplayedResponse] = useState(sampleQueries[0].response);
  const [isTyping, setIsTyping] = useState(false);

  const currentQuery = sampleQueries[activeQueryIndex];

  const runSimulation = (index: number) => {
    setActiveQueryIndex(index);
    setIsTyping(true);
    setDisplayedResponse('');
    setPipelineState('Listening');

    setTimeout(() => {
      setPipelineState('Transcribing (Whisper)');
    }, 600);

    setTimeout(() => {
      setPipelineState('Reasoning (Qwen)');
    }, 1200);

    setTimeout(() => {
      setPipelineState('Synthesizing Audio');
      // Stream typewriter text
      const fullText = sampleQueries[index].response;
      let charIdx = 0;
      const interval = setInterval(() => {
        if (charIdx <= fullText.length) {
          setDisplayedResponse(fullText.slice(0, charIdx));
          charIdx += 4;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 30);
    }, 1800);
  };

  useEffect(() => {
    setDisplayedResponse(sampleQueries[0].response);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-dark-900 border border-cyan-500/30 overflow-hidden shadow-2xl text-left font-sans">
      {/* Top Bar */}
      <div className="px-4 py-3 bg-dark-850/90 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            RIRARU AI // PRIVATE SPEECH ASSISTANT
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
            <Lock className="w-3 h-3" />
            100% OFFLINE / ZERO-CLOUD
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: Dynamic Pulsing Neural Voice Orb & Waveform */}
        <div className="md:col-span-5 bg-dark-950/90 rounded-xl border border-white/[0.08] p-4 flex flex-col justify-between items-center text-center">
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 border-b border-white/[0.06]">
            <span>ENGINE: FASTER WHISPER</span>
            <span className="text-cyan-400 font-bold">{currentQuery.latencyMs} ms</span>
          </div>

          {/* Futuristic Audio Orb with Multi-Layer Glow */}
          <div className="my-5 relative flex items-center justify-center">
            {/* Outer animated ripple */}
            <div className={`w-28 h-28 rounded-full border border-cyan-400/30 flex items-center justify-center transition-all duration-700 ${
              isTyping ? 'scale-115 shadow-[0_0_40px_rgba(6,182,212,0.5)] bg-cyan-950/30' : 'bg-dark-900 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
            }`}>
              {/* Inner core */}
              <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30 border border-cyan-400/50 flex items-center justify-center">
                <Mic className={`w-8 h-8 ${isTyping ? 'text-cyan-300 animate-pulse' : 'text-cyan-400'}`} />
              </div>
            </div>

            {/* Orbiting dashed aura */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 animate-spin-slow pointer-events-none" />
          </div>

          {/* Audio Waveform Spectrum */}
          <div className="w-full flex items-center justify-center gap-1.5 h-10 px-2 bg-dark-900 rounded-lg border border-white/[0.04]">
            {[35, 60, 85, 30, 95, 55, 75, 45, 90, 60, 40, 75, 80, 50, 65, 40].map((h, i) => (
              <span
                key={i}
                style={{
                  height: isTyping ? `${Math.min(95, h + (i % 4) * 8)}%` : `${h * 0.35}%`,
                  transition: 'height 0.15s ease'
                }}
                className="w-1 bg-gradient-to-t from-cyan-500 to-indigo-400 rounded-full inline-block"
              />
            ))}
          </div>

          <div className="mt-3 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>State: {pipelineState}</span>
          </div>
        </div>

        {/* Right: Audio Transcript & Local LLM Output */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-3">
          {/* Query Selection Buttons */}
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5 font-semibold">
              TRIGGER SPEECH QUERY:
            </span>
            <div className="flex flex-col gap-1.5">
              {sampleQueries.map((q, idx) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => runSimulation(idx)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-mono transition-all flex items-center justify-between border ${
                    activeQueryIndex === idx
                      ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200 shadow-sm'
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
          <div className="p-3.5 rounded-xl bg-dark-950/90 border border-white/[0.08] relative">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <Volume2 className="w-3.5 h-3.5" /> REASONED VOICE RESPONSE
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Cpu className="w-3 h-3" /> Qwen 7B (Ollama)
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-medium min-h-[48px]">
              "{displayedResponse}"
              {isTyping && <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse" />}
            </p>

            <div className="mt-3 pt-2.5 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>sounddevice → Faster Whisper → Qwen</span>
              <span className="text-emerald-400 font-semibold">Latency: {currentQuery.latencyMs}ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
