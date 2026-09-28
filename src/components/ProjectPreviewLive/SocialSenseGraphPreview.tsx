import React, { useState } from 'react';
import { Share2, Users, Flame, Brain, BarChart2, MessageSquare, ExternalLink, CheckCircle } from 'lucide-react';

interface NetworkNode {
  id: string;
  name: string;
  platform: 'Telegram' | 'X/Twitter';
  community: string;
  influence: number;
  sentiment: 'Positive' | 'Negative' | 'Neutral';
  sentimentScore: number;
  samplePost: string;
  emotion: string;
  x: number;
  y: number;
  size: number;
}

export const SocialSenseGraphPreview: React.FC = () => {
  const nodes: NetworkNode[] = [
    {
      id: '1',
      name: '@alpha_analyst',
      platform: 'X/Twitter',
      community: 'AI Builders #A',
      influence: 94,
      sentiment: 'Positive',
      sentimentScore: 0.88,
      samplePost: "Local LLMs running quantized Qwen models on consumer GPUs are completely disrupting centralized cloud APIs. Sub-200ms latency is here.",
      emotion: 'Optimism (88%)',
      x: 30,
      y: 35,
      size: 26
    },
    {
      id: '2',
      name: '@deep_insight_tg',
      platform: 'Telegram',
      community: 'Data Intel #B',
      influence: 84,
      sentiment: 'Positive',
      sentimentScore: 0.74,
      samplePost: "Dataset release: 50k annotated multimodal pairs for disaster mitigation and geospatial early warning mapping now public.",
      emotion: 'Joy (74%)',
      x: 60,
      y: 28,
      size: 22
    },
    {
      id: '3',
      name: '@macro_stream',
      platform: 'Telegram',
      community: 'Macro Watch #C',
      influence: 88,
      sentiment: 'Negative',
      sentimentScore: -0.65,
      samplePost: "Severe regional flooding caused major supply line disruptions across sector 4. Emergency response teams mobilized.",
      emotion: 'Concern / Fear (65%)',
      x: 75,
      y: 65,
      size: 24
    },
    {
      id: '4',
      name: '@sentiment_radar',
      platform: 'X/Twitter',
      community: 'AI Builders #A',
      influence: 76,
      sentiment: 'Positive',
      sentimentScore: 0.62,
      samplePost: "Testing DistilBERT fine-tuned on social posts. The classification precision on nuance and sarcasm exceeded benchmark expectations.",
      emotion: 'Anticipation (62%)',
      x: 24,
      y: 72,
      size: 20
    },
    {
      id: '5',
      name: '@neural_hub',
      platform: 'X/Twitter',
      community: 'AI Builders #A',
      influence: 72,
      sentiment: 'Neutral',
      sentimentScore: 0.05,
      samplePost: "Comparing PyTorch vs ONNX runtime for edge device model quantization across Raspberry Pi and mobile chips.",
      emotion: 'Analytical (90%)',
      x: 44,
      y: 60,
      size: 18
    },
  ];

  const [activeNode, setActiveNode] = useState<NetworkNode>(nodes[0]);

  return (
    <div className="w-full rounded-2xl bg-dark-900 border border-violet-500/30 overflow-hidden shadow-2xl text-left font-sans">
      {/* Top Header */}
      <div className="px-4 py-3 bg-dark-850/90 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Brain className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            SOCIALSENSE // REAL-TIME NETWORK INTELLIGENCE
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
          <Share2 className="w-3 h-3 text-cyan-400" />
          <span>DISTILBERT + NETWORKX</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Interactive Network Graph Viewport */}
        <div className="md:col-span-7 p-4 bg-dark-950/90 relative min-h-[280px] flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/[0.08]">
          <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none" />

          {/* SVG Connections between nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="30%" y1="35%" x2="60%" y2="28%" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
            <line x1="30%" y1="35%" x2="24%" y2="72%" stroke="#6366f1" strokeWidth="1.8" strokeOpacity="0.6" />
            <line x1="30%" y1="35%" x2="44%" y2="60%" stroke="#8b5cf6" strokeWidth="2.2" strokeOpacity="0.8" />
            <line x1="60%" y1="28%" x2="75%" y2="65%" stroke="#38bdf8" strokeWidth="1.4" strokeOpacity="0.35" strokeDasharray="2 2" />
            <line x1="44%" y1="60%" x2="75%" y2="65%" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.4" />
          </svg>

          {/* Interactive Nodes */}
          {nodes.map((node) => {
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onMouseEnter={() => setActiveNode(node)}
                onClick={() => setActiveNode(node)}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  width: `${node.size * 1.5}px`,
                  height: `${node.size * 1.5}px`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 flex items-center justify-center focus:outline-none ${
                  isSelected
                    ? 'ring-4 ring-cyan-400/50 z-20 scale-125 shadow-lg'
                    : 'hover:scale-110 z-10'
                }`}
              >
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center border font-mono font-bold text-[10px] transition-all ${
                    node.sentiment === 'Positive'
                      ? 'bg-emerald-950 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                      : node.sentiment === 'Negative'
                        ? 'bg-red-950 border-red-400 text-red-300 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                        : 'bg-indigo-950 border-indigo-400 text-indigo-300'
                  }`}
                >
                  {node.influence}
                </div>
              </button>
            );
          })}

          <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-slate-400 flex items-center gap-3 bg-dark-900/80 px-2.5 py-1 rounded-md border border-white/[0.06]">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"/> Positive</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-400 inline-block"/> Neutral</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400 inline-block"/> Negative</span>
          </div>
        </div>

        {/* Live Inspected Post & Emotion Breakdown */}
        <div className="md:col-span-5 p-4 flex flex-col justify-between bg-dark-900">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] mb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400">INSPECTED ENTITY</span>
                <h4 className="text-sm font-bold text-white font-mono">{activeNode.name}</h4>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-violet-950/60 border border-violet-500/30 text-violet-300">
                {activeNode.platform}
              </span>
            </div>

            {/* Live Message Sample Card */}
            <div className="p-3 rounded-lg bg-dark-950 border border-white/[0.06] mb-3">
              <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-400 mb-1">
                <MessageSquare className="w-3 h-3" />
                <span>INCOMING STREAM TEXT:</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed italic">
                "{activeNode.samplePost}"
              </p>
            </div>

            {/* Entity Metrics */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-center bg-dark-850 p-2 rounded">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" /> Influence (PageRank)
                </span>
                <span className="font-mono font-bold text-amber-300">{activeNode.influence}/100</span>
              </div>

              <div className="flex justify-between items-center bg-dark-850 p-2 rounded">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-cyan-400" /> Polarity & Emotion
                </span>
                <span className={`font-mono font-bold ${
                  activeNode.sentiment === 'Positive' ? 'text-emerald-400' :
                  activeNode.sentiment === 'Negative' ? 'text-red-400' : 'text-slate-300'
                }`}>
                  {activeNode.emotion}
                </span>
              </div>
            </div>
          </div>

          {/* DistilBERT Spectrum Bar */}
          <div className="mt-3 pt-3 border-t border-white/[0.06]">
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-1.5 flex justify-between">
              <span>Emotion Spectrum (DistilBERT)</span>
              <span className="text-violet-400 font-semibold">{activeNode.sentimentScore > 0 ? `+${activeNode.sentimentScore}` : activeNode.sentimentScore}</span>
            </div>
            <div className="flex h-2 rounded-full overflow-hidden bg-dark-800">
              <div style={{ width: '42%' }} className="bg-emerald-500" title="Joy 42%" />
              <div style={{ width: '28%' }} className="bg-cyan-500" title="Optimism 28%" />
              <div style={{ width: '18%' }} className="bg-indigo-500" title="Analytical 18%" />
              <div style={{ width: '12%' }} className="bg-amber-500" title="Anger/Fear 12%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
