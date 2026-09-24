import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { journeyMilestones } from '../data/education';
import { Code2, BarChart3, BrainCircuit, Eye, MessageSquareText, Mic2, Layout, Server, Cpu } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-emerald-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-4 h-4 text-violet-400" />;
      case 'Eye': return <Eye className="w-4 h-4 text-amber-400" />;
      case 'MessageSquareText': return <MessageSquareText className="w-4 h-4 text-indigo-400" />;
      case 'Mic2': return <Mic2 className="w-4 h-4 text-cyan-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-emerald-400" />;
      case 'Server': return <Server className="w-4 h-4 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-red-400" />;
      default: return <Code2 className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      <SectionHeading
        number="03"
        tag="EVOLUTION"
        title="From Data to Intelligence"
        subtitle="The progression from raw numerical computation to machine learning pipelines, full-stack interfaces, and deployed AI products."
      />

      {/* Grid of Evolution Stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {journeyMilestones.map((m, idx) => (
          <motion.div
            key={m.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="p-5 rounded-2xl bg-dark-900/60 border border-white/[0.06] hover:border-indigo-500/30 transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Step watermark */}
            <span className="absolute top-3 right-4 font-mono text-3xl font-extrabold text-white/[0.03] select-none group-hover:text-indigo-500/[0.08] transition-colors">
              {m.step}
            </span>

            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-lg bg-dark-850 border border-white/[0.06]">
                  {getIcon(m.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 block uppercase">
                    STEP {m.step} // {m.tag}
                  </span>
                  <h3 className="text-base font-bold text-white font-sans">
                    {m.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mt-2">
                {m.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Continuum Stage</span>
              <span className="text-cyan-400 font-semibold">Active</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Evolution Synthesis Banner */}
      <div className="mt-8 p-5 rounded-xl bg-dark-950/80 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Core Trajectory: Transforming mathematical models into interactive, real-world utility.</span>
        </div>
        <a href="#projects" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">
          Inspect Flagship Projects ↓
        </a>
      </div>
    </section>
  );
};
