import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { GitBranch, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const GithubSection: React.FC = () => {
  const publicRepos = [
    {
      name: "SocialSense",
      fullName: "dvakshay/SocialSense",
      language: "Python",
      langColor: "#3572A5",
      description: "AI-powered social media intelligence platform analyzing sentiment, emotion vectors, and community interaction graphs across Telegram & X/Twitter.",
      url: "https://github.com/dvakshay/SocialSense",
      topics: ["nlp", "distilbert", "networkx", "sentiment-analysis"]
    },
    {
      name: "Riraru_Ai",
      fullName: "dvakshay/Riraru_Ai",
      language: "Python",
      langColor: "#3572A5",
      description: "Autonomous local voice AI assistant running Faster Whisper for acoustic decoding and local Qwen LLM via Ollama for private reasoning.",
      url: "https://github.com/dvakshay/Riraru_Ai",
      topics: ["speech-recognition", "whisper", "ollama", "local-llm"]
    },
    {
      name: "TerraShield-AI",
      fullName: "dvakshay/TerraShield-AI",
      language: "TypeScript / Python",
      langColor: "#3178c6",
      description: "Hyper-local Landslide and Flash-Flood Early Warning System for hilly terrains fusing multi-sensor telemetry with geospatial hazard risk modeling.",
      url: "https://github.com/dvakshay",
      topics: ["fastapi", "react", "disaster-warning", "iot-telemetry"]
    },
    {
      name: "Satellite-Cloud-Removal",
      fullName: "dvakshay/Satellite-Cloud-Removal",
      language: "Python / PyTorch",
      langColor: "#ee4c2c",
      description: "Deep learning U-Net convolutional neural network designed during Bharatiya Antariksh Hackathon to reconstruct cloud-occluded satellite imagery.",
      url: "https://github.com/dvakshay",
      topics: ["computer-vision", "u-net", "pytorch", "earth-observation"]
    }
  ];

  return (
    <section id="github" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      <SectionHeading
        number="09"
        tag="OPEN SOURCE"
        title="Built in Public"
        subtitle="Exploring architectures, pushing open source code, and documenting machine learning pipelines on GitHub."
      />

      {/* GitHub Profile Banner */}
      <div className="mb-10 p-6 rounded-2xl bg-dark-900/80 border border-white/[0.08] backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-dark-850 border border-white/[0.1] flex items-center justify-center text-white">
            <GithubIcon className="w-7 h-7 text-slate-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white font-mono">@dvakshay</h3>
              <span className="px-2 py-0.5 rounded bg-dark-850 text-slate-400 font-mono text-[10px] border border-white/[0.05]">
                Developer Profile
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              github.com/dvakshay • Data Science Undergraduate & Builder
            </p>
          </div>
        </div>

        <a
          href="https://github.com/dvakshay"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="GITHUB"
          className="px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-750 border border-white/[0.1] hover:border-indigo-400 text-xs font-mono text-white flex items-center gap-2 transition-all"
        >
          <span>Follow on GitHub</span>
          <ArrowUpRight className="w-4 h-4 text-cyan-400" />
        </a>
      </div>

      {/* Selected Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publicRepos.map((repo, idx) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-dark-900/70 border border-white/[0.07] hover:border-indigo-500/40 hover:bg-dark-850/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 text-slate-400 group-hover:text-cyan-300 transition-colors font-mono font-medium">
                  <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                  {repo.fullName}
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-cyan-300 transition-all" />
              </div>

              <h4 className="text-base font-bold text-white font-sans mt-2 mb-2 group-hover:text-white">
                {repo.name}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                {repo.description}
              </p>

              {/* Topics */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {repo.topics.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950/80 text-slate-400 border border-white/[0.04]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: repo.langColor }} />
                <span>{repo.language}</span>
              </span>
              <span className="text-cyan-400 group-hover:underline">View Source →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
