import React, { useState } from 'react';
import { Share2, Users, Flame, Brain, BarChart2 } from 'lucide-react';

interface NetworkNode {
  id: string;
  name: string;
  platform: 'Telegram' | 'X/Twitter';
  community: string;
  influence: number; // PageRank %
  sentiment: 'Positive' | 'Negative' | 'Neutral';
  sentimentScore: number;
  activity: string;
  x: number;
  y: number;
  size: number;
}

export const SocialSenseGraphPreview: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NetworkNode | null>(null);

  const nodes: NetworkNode[] = [
    { id: '1', name: '@alpha_analyst', platform: 'X/Twitter', community: 'Tech Discourse #A', influence: 94, sentiment: 'Positive', sentimentScore: 0.88, activity: '1.4k posts/day', x: 28, y: 35, size: 24 },
    { id: '2', name: '@deep_insight_tg', platform: 'Telegram', community: 'Market Intel #B', influence: 82, sentiment: 'Neutral', sentimentScore: 0.05, activity: '890 posts/day', x: 55, y: 25, size: 20 },
    { id: '3', name: '@sentiment_radar', platform: 'X/Twitter', community: 'Tech Discourse #A', influence: 78, sentiment: 'Positive', sentimentScore: 0.72, activity: '540 posts/day', x: 22, y: 72, size: 18 },
    { id: '4', name: '@macro_stream', platform: 'Telegram', community: 'Macro Global #C', influence: 88, sentiment: 'Negative', sentimentScore: -0.65, activity: '2.1k posts/day', x: 75, y: 65, size: 22 },
    { id: '5', name: '@neural_hub', platform: 'X/Twitter', community: 'Tech Discourse #A', influence: 71, sentiment: 'Positive', sentimentScore: 0.61, activity: '430 posts/day', x: 42, y: 60, size: 16 },
    { id: '6', name: '@alpha_pulse', platform: 'Telegram', community: 'Market Intel #B', influence: 65, sentiment: 'Neutral', sentimentScore: -0.08, activity: '310 posts/day', x: 82, y: 30, size: 15 },
  ];

  // Set default node to the highest influencer
  const displayNode = activeNode || nodes[0];

  return (
    <div className="w-full rounded-xl bg-dark-900 border border-violet-500/30 overflow-hidden shadow-2xl text-left">
      {/* Top Bar */}
      <div className="px-4 py-3 bg-dark-850 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Brain className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            SOCIALSENSE // INTELLIGENCE GRAPH
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
          <Share2 className="w-3 h-3 text-cyan-400" />
          <span>NETWORKX GRAPH ENGINE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Interactive Network Graph Viewport */}
        <div className="md:col-span-7 p-4 bg-dark-950/80 relative min-h-[260px] flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/[0.06]">
          {/* Subtle grid */}
          <div className="absolute inset-0 technical-grid opacity-40 pointer-events-none" />

          {/* SVG Connections between nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="28%" y1="35%" x2="55%" y2="25%" stroke="#6366f1" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 3" />
            <line x1="28%" y1="35%" x2="22%" y2="72%" stroke="#6366f1" strokeWidth="1.6" strokeOpacity="0.5" />
            <line x1="28%" y1="35%" x2="42%" y2="60%" stroke="#8b5cf6" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="55%" y1="25%" x2="75%" y2="65%" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="2 2" />
            <line x1="55%" y1="25%" x2="82%" y2="30%" stroke="#38bdf8" strokeWidth="1.8" strokeOpacity="0.6" />
            <line x1="42%" y1="60%" x2="75%" y2="65%" stroke="#6366f1" strokeWidth="1.4" strokeOpacity="0.4" />
          </svg>

          {/* Render Interactive Nodes */}
          {nodes.map((node) => {
            const isSelected = displayNode.id === node.id;
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
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 flex items-center justify-center group focus:outline-none ${
                  isSelected
                    ? 'ring-4 ring-cyan-400/40 z-20 scale-125'
                    : 'hover:scale-110 z-10'
                }`}
              >
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center border transition-all ${
                    node.sentiment === 'Positive'
                      ? 'bg-emerald-950 border-emerald-400 text-emerald-300'
                      : node.sentiment === 'Negative'
                        ? 'bg-red-950 border-red-400 text-red-300'
                        : 'bg-indigo-950 border-indigo-400 text-indigo-300'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold">
                    {node.influence}
                  </span>
                </div>
              </button>
            );
          })}

          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"/> Positive</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-400 inline-block"/> Neutral</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400 inline-block"/> Negative</span>
          </div>
        </div>

        {/* Node Detail & DistilBERT Breakdown */}
        <div className="md:col-span-5 p-4 flex flex-col justify-between bg-dark-900">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] mb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400">INSPECTED ENTITY</span>
                <h4 className="text-sm font-bold text-white font-mono">{displayNode.name}</h4>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-violet-950/60 border border-violet-500/30 text-violet-300">
                {displayNode.platform}
              </span>
            </div>

            {/* Entity Metrics */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center bg-dark-850 p-2 rounded">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" /> Influence (PageRank)
                </span>
                <span className="font-mono font-bold text-amber-300">{displayNode.influence}/100</span>
              </div>

              <div className="flex justify-between items-center bg-dark-850 p-2 rounded">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" /> Community Cluster
                </span>
                <span className="font-mono text-cyan-300 text-[11px]">{displayNode.community}</span>
              </div>

              <div className="flex justify-between items-center bg-dark-850 p-2 rounded">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-indigo-400" /> DistilBERT Polarity
                </span>
                <span className={`font-mono font-bold ${
                  displayNode.sentiment === 'Positive' ? 'text-emerald-400' :
                  displayNode.sentiment === 'Negative' ? 'text-red-400' : 'text-slate-300'
                }`}>
                  {displayNode.sentiment} ({displayNode.sentimentScore > 0 ? `+${displayNode.sentimentScore}` : displayNode.sentimentScore})
                </span>
              </div>
            </div>
          </div>

          {/* Emotion Spectrum Bar */}
          <div className="mt-3 pt-3 border-t border-white/[0.06]">
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-1.5 flex justify-between">
              <span>Emotion Spectrum (Hugging Face)</span>
              <span className="text-violet-400">DistilBERT Model</span>
            </div>
            <div className="flex h-2 rounded-full overflow-hidden bg-dark-800">
              <div style={{ width: '42%' }} className="bg-emerald-500" title="Joy 42%" />
              <div style={{ width: '28%' }} className="bg-cyan-500" title="Optimism 28%" />
              <div style={{ width: '18%' }} className="bg-indigo-500" title="Anticipation 18%" />
              <div style={{ width: '12%' }} className="bg-amber-500" title="Anger/Fear 12%" />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-400 mt-1">
              <span>Joy 42%</span>
              <span>Optimism 28%</span>
              <span>Other 30%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
