import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      <SectionHeading
        number="08"
        tag="ACADEMICS"
        title="Educational Foundations"
        subtitle="Rigorous academic immersion in Data Science, probability modeling, computing theory, and software development at SNIST."
      />

      <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/80 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-400">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white font-sans">
                  {educationData.degree}
                </h3>
                <div className="text-sm font-mono text-cyan-300">
                  {educationData.institution}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-xl">
              Studying under the specialized Data Science curriculum, integrating advanced mathematical foundations, deep learning frameworks, statistical inference, and full-stack software development.
            </p>

            {/* Highlights */}
            <div className="space-y-2 pt-2">
              {educationData.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Metric Pillars */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-4 rounded-xl bg-dark-950/90 border border-white/[0.06] text-center">
              <span className="text-slate-400 block text-[11px] mb-1">CUMULATIVE CGPA</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                {educationData.cgpa}
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">Scale of 10.0</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-950/90 border border-white/[0.06] text-center">
              <span className="text-slate-400 block text-[11px] mb-1">CURRENT LEVEL</span>
              <span className="text-xl sm:text-2xl font-extrabold text-cyan-300">
                3rd Year
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">B.Tech Data Science</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-950/90 border border-white/[0.06] text-center">
              <span className="text-slate-400 block text-[11px] mb-1">TENURE</span>
              <span className="text-base sm:text-lg font-bold text-white">
                2024 – 2028
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">4-Year Program</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-950/90 border border-white/[0.06] text-center">
              <span className="text-slate-400 block text-[11px] mb-1">LOCATION</span>
              <span className="text-base sm:text-lg font-bold text-indigo-300">
                Hyderabad
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">Telangana, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
