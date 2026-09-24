import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { GraduationCap, MapPin, Calendar, Award, Code, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const timelineMilestones = [
    {
      year: "2024",
      title: "Started B.Tech in Data Science",
      desc: "Enrolled at Sreenidhi Institute of Science and Technology (SNIST), diving deep into Python, foundational data structures, and discrete mathematics."
    },
    {
      year: "2025",
      title: "Expanded into ML & Data Science",
      desc: "Built supervised and unsupervised models, statistical analysis pipelines, EDA dashboards, and classical machine learning algorithms."
    },
    {
      year: "2026",
      title: "Hackathons, Internships & AI Apps",
      desc: "Participated in national hackathons (ISRO Bharatiya Antariksh, IIT Madras NeuroHackathon Finalist), completed internships at Pinnacle Labs & Geonixa, and engineered local LLM voice assistants."
    },
    {
      year: "2026+",
      title: "Building Larger AI & Full-Stack Systems",
      desc: "Architecting end-to-end disaster intelligence products (TerraShield AI) combining IoT sensors, real-time ML risk models, FastAPI backends, and modern React SPAs."
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      <SectionHeading
        number="01"
        tag="ABOUT ME"
        title="More than a student. A builder."
        subtitle="Bridging the gap between mathematical machine learning models and production-ready, human-facing software products."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative & Builder Philosophy */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Building intelligent systems that turn real-world problems into practical products.
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              <p>
                I'm a B.Tech Data Science student at <strong className="text-white">Sreenidhi Institute of Science and Technology (SNIST)</strong>, passionate about Artificial Intelligence, Machine Learning, and software development.
              </p>
              <p>
                I don't just study algorithms in isolation. I enjoy taking an idea, understanding the human or societal problem behind it, building the intelligence layer, and turning it into an interactive, reliable product.
              </p>
              <p>
                My work spans machine learning, computer vision, natural language processing, exploratory data analysis, interactive dashboards, REST APIs, and modern frontend development.
              </p>
            </div>

            {/* Verified Quick Profile Attributes */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>SNIST Hyderabad</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CGPA: 7.6 / 10</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Class of 2028 (3rd Year)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Builder Creed Box */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-950/40 via-dark-900 to-dark-950 border border-indigo-500/25 flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0 mt-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wide">
                The Practical Builder Mindset
              </h4>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed font-sans">
                "Ambitious Data Science undergraduate who builds real-world AI/ML applications and increasingly full-stack products."
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Timeline */}
        <div className="lg:col-span-6 space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Code className="w-4 h-4 text-cyan-400" />
            <span>PROGRESSION TIMELINE</span>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-8">
            {timelineMilestones.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-dark-950 border-2 border-indigo-400 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                <div className="p-4 sm:p-5 rounded-xl bg-dark-900/60 border border-white/[0.06] hover:border-indigo-500/30 transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono font-bold text-sm sm:text-base text-cyan-300">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-dark-850 text-slate-400 border border-white/[0.05]">
                      Stage 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1.5 font-sans">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
