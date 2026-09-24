import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { achievementsData } from '../data/achievements';
import { Trophy, Award, Shield, Sparkles } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Leadership':
        return <Shield className="w-5 h-5 text-cyan-400" />;
      default:
        return <Award className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      <SectionHeading
        number="07"
        tag="RECOGNITION"
        title="Hackathons & Milestones"
        subtitle="National competition final stages, earth-observation hackathon challenges, and leadership credentials."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievementsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

            <div>
              {/* Badge & Organization */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-dark-850 border border-white/[0.06]">
                  {getIcon(item.category)}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-950/70 text-indigo-300 font-mono text-[11px] border border-indigo-500/30">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <div className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                {item.organization}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Verified Credential</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
