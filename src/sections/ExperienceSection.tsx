import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TechBadge } from '../components/TechBadge';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      <SectionHeading
        number="06"
        tag="TRACK RECORD"
        title="Practical Industry Experience"
        subtitle="Hands-on data science and machine learning internships focused on data cleaning pipelines, feature engineering, and model preparation."
      />

      <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-12">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Pulsing timeline beacon */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-dark-950 border-2 border-indigo-400 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-indigo-500/30 transition-all backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-300 font-mono">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-dark-850 border border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-dark-850 border border-white/[0.06]">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="mt-5 space-y-2.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Core Responsibilities & Deliverables:
                </span>
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400 mr-2">Stack:</span>
                {exp.technologies.map((tech, i) => (
                  <TechBadge key={i} name={tech} size="sm" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
