import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { skillsData, skillsFilterList } from '../data/skills';
import type { SkillCategoryType } from '../types';
import { TechBadge } from '../components/TechBadge';
import { Cpu, Database, Layout, Server, Wrench, Sparkles, Filter } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategoryType>('All');

  const filteredSkills = skillsData.filter((skill) => {
    if (activeFilter === 'All') return true;
    return skill.category === activeFilter;
  });

  // Group by domain grouping for structured visualization
  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.group]) {
      acc[skill.group] = [];
    }
    acc[skill.group].push(skill);
    return acc;
  }, {} as Record<string, typeof filteredSkills>);

  const getGroupIcon = (group: string) => {
    switch (group) {
      case 'Programming':
      case 'Backend':
      case 'Applications':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Machine Learning / AI':
      case 'Computer Vision':
      case 'AI Tools':
        return <Cpu className="w-4 h-4 text-violet-400" />;
      case 'Data Science':
      case 'Data Visualization':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-indigo-400" />;
      default:
        return <Wrench className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      <SectionHeading
        number="02"
        tag="TECHNICAL MATRIX"
        title="Engineering & AI Capabilities"
        subtitle="An interactive taxonomy of languages, machine learning architectures, data science tooling, and frontend/backend systems."
      />

      {/* Interactive Filter Pills */}
      <div className="mb-10 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2">
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          <span>FILTER CLUSTER:</span>
        </div>

        {skillsFilterList.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              data-cursor="FILTER"
              className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                isActive
                  ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                  : 'bg-dark-900/80 border-white/[0.06] text-slate-400 hover:text-white hover:border-slate-600'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Categorized Skills Cluster Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {Object.entries(groupedSkills).map(([groupName, skills]) => (
            <motion.div
              key={groupName}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-2xl bg-dark-900/70 border border-white/[0.07] backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/30 transition-all group"
            >
              <div>
                {/* Cluster Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                  <div className="flex items-center gap-2">
                    {getGroupIcon(groupName)}
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      {groupName}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    {skills.length} tools
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <TechBadge
                      key={skill.name}
                      name={skill.name}
                      highlight={skill.highlight}
                      size="sm"
                    />
                  ))}
                </div>
              </div>

              {/* Status footer line */}
              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Verified practical usage</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* AI Specialization Callout */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-violet-950/30 via-dark-900 to-cyan-950/20 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white font-sans">
              Local AI & Speech Pipelines
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Hands-on implementation with Ollama, Faster Whisper, and Qwen quantized LLMs running 100% on device.
            </p>
          </div>
        </div>

        <a
          href="#projects"
          className="shrink-0 px-4 py-2 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/[0.1] text-xs font-mono text-cyan-300 hover:text-white transition-all"
        >
          View Implementations →
        </a>
      </div>
    </section>
  );
};
