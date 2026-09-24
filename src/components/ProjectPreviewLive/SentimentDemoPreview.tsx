import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

export const SentimentDemoPreview: React.FC = () => {
  const presets = [
    { text: "This movie was absolutely amazing, the cinematography and direction were sheer perfection!", label: "Positive", score: 98.4 },
    { text: "A disjointed, slow, and thoroughly uninspired waste of two hours with wooden acting.", label: "Negative", score: 96.2 },
    { text: "The score was atmospheric, but the screenplay lost momentum in the final act.", label: "Neutral / Mixed", score: 54.0 }
  ];

  const [inputVal, setInputVal] = useState(presets[0].text);
  const [result, setResult] = useState<{ sentiment: 'Positive' | 'Negative'; confidence: number; topTokens: string[] }>({
    sentiment: 'Positive',
    confidence: 98.4,
    topTokens: ['amazing', 'cinematography', 'perfection', 'direction']
  });

  const analyzeText = (text: string) => {
    setInputVal(text);
    const lower = text.toLowerCase();
    const positiveWords = ['amazing', 'great', 'masterpiece', 'perfection', 'love', 'brilliant', 'superb', 'best', 'stunning', 'incredible', 'enjoyed'];
    const negativeWords = ['boring', 'waste', 'bad', 'terrible', 'worst', 'wooden', 'slow', 'disjointed', 'awful', 'poor', 'uninspired'];

    let posScore = 0;
    let negScore = 0;
    const tokens = lower.match(/\b[a-z]{3,}\b/g) || [];
    const matchedTokens: string[] = [];

    tokens.forEach(t => {
      if (positiveWords.includes(t)) {
        posScore += 2.5;
        matchedTokens.push(t);
      }
      if (negativeWords.includes(t)) {
        negScore += 2.5;
        matchedTokens.push(t);
      }
    });

    const isPos = posScore >= negScore;
    const confidence = isPos
      ? Math.min(99.2, 70 + (posScore / (posScore + negScore + 1)) * 28)
      : Math.min(99.2, 70 + (negScore / (posScore + negScore + 1)) * 28);

    setResult({
      sentiment: isPos ? 'Positive' : 'Negative',
      confidence: Math.round(confidence * 10) / 10,
      topTokens: matchedTokens.length > 0 ? matchedTokens.slice(0, 4) : ['sample', 'text', 'features']
    });
  };

  return (
    <div className="w-full rounded-xl bg-dark-900 border border-indigo-500/30 overflow-hidden shadow-2xl text-left">
      {/* Header */}
      <div className="px-4 py-3 bg-dark-850 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            IMDB SENTIMENT CLASSIFIER // TF-IDF + LOGISTIC REGRESSION
          </span>
        </div>
        <span className="text-[11px] font-mono text-cyan-300">STREAMLIT DEMO ENGINE</span>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Preset Buttons */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[10px] font-mono uppercase text-slate-400">TEST PRESETS:</span>
          {presets.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => analyzeText(p.text)}
              className="px-2.5 py-1 rounded bg-dark-850 border border-white/[0.08] hover:border-cyan-500/40 text-slate-300 text-xs font-mono transition-all"
            >
              Preset #{idx + 1} ({p.label})
            </button>
          ))}
        </div>

        {/* Text Input Area */}
        <div className="relative">
          <textarea
            value={inputVal}
            onChange={(e) => analyzeText(e.target.value)}
            rows={2}
            className="w-full rounded-lg bg-dark-950 border border-white/[0.1] p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 font-sans resize-none transition-colors"
            placeholder="Type or edit a movie review..."
          />
        </div>

        {/* Prediction Output Card */}
        <div className="p-4 rounded-lg bg-dark-950/80 border border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
              result.sentiment === 'Positive'
                ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                : 'bg-red-950/80 border-red-500/50 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
            }`}>
              {result.sentiment === 'Positive' ? <ThumbsUp className="w-5 h-5" /> : <ThumbsDown className="w-5 h-5" />}
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">PREDICTED CLASSIFICATION</div>
              <div className={`text-base font-bold font-mono ${
                result.sentiment === 'Positive' ? 'text-emerald-300' : 'text-red-300'
              }`}>
                {result.sentiment.toUpperCase()} SENTIMENT
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <div>
              <span className="text-slate-400 text-[10px] block">TF-IDF N-GRAMS</span>
              <div className="flex gap-1 mt-0.5">
                {result.topTokens.map((tok, i) => (
                  <span key={i} className="px-1.5 py-0.5 rounded bg-dark-850 text-cyan-300 border border-cyan-500/20 text-[10px]">
                    {tok}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <span className="text-slate-400 text-[10px] block">MODEL CONFIDENCE</span>
              <span className="text-cyan-300 font-bold text-sm">{result.confidence}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
