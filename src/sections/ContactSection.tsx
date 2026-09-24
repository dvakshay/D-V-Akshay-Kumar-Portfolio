import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Mail, Copy, Check, Send, Phone, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const email = "dvakshayk@gmail.com";
  const phone = "+91 6267030182";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#22d3ee', '#10b981']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#22d3ee', '#8b5cf6']
    });

    // Generate mailto link
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      <SectionHeading
        number="10"
        tag="GET IN TOUCH"
        title="Let's build something meaningful."
        subtitle="I'm always interested in interesting problems, AI ideas, hackathons, collaborations, and opportunities to build useful technology."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Points & Copy Email Action */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/80 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-xl font-bold text-white mb-2">
              Direct Contact Channels
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
              Whether you are an engineering team, a hackathon collaborator, or exploring an AI initiative, my inbox is open.
            </p>

            <div className="space-y-4 text-xs font-mono">
              {/* Email item with copy button */}
              <div className="p-3.5 rounded-xl bg-dark-950 border border-white/[0.06] flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">PRIMARY EMAIL</span>
                    <a href={`mailto:${email}`} className="text-white hover:text-cyan-300 font-semibold truncate block">
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  data-cursor="COPY"
                  className="px-2.5 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/[0.08] text-slate-300 hover:text-white flex items-center gap-1.5 transition-all text-[11px]"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com/dvakshay"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="p-3.5 rounded-xl bg-dark-950 border border-white/[0.06] hover:border-slate-500 flex items-center gap-3 transition-all block group"
              >
                <div className="p-2 rounded-lg bg-dark-850 text-slate-300">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">GITHUB PROFILE</span>
                  <span className="text-white group-hover:text-cyan-300 font-semibold">
                    github.com/dvakshay
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="p-3.5 rounded-xl bg-dark-950 border border-white/[0.06] hover:border-slate-500 flex items-center gap-3 transition-all block group"
              >
                <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">LINKEDIN NETWORK</span>
                  <span className="text-white group-hover:text-cyan-300 font-semibold">
                    D V Akshay Kumar
                  </span>
                </div>
              </a>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-dark-950 border border-white/[0.06] flex items-center gap-3">
                <div className="p-2 rounded-lg bg-dark-850 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">DIRECT CONTACT</span>
                  <span className="text-white font-semibold">{phone}</span>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-dark-950 border border-white/[0.06] flex items-center gap-3">
                <div className="p-2 rounded-lg bg-dark-850 text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">BASE LOCATION</span>
                  <span className="text-white font-semibold">
                    Hyderabad, Telangana, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Message Dispatcher */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleFormSubmit}
            className="p-6 sm:p-8 rounded-3xl bg-dark-900/80 border border-white/[0.08] backdrop-blur-xl space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">
                  Send a Direct Message
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                DISPATCH READY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/[0.08] text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/[0.08] text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                Subject
              </label>
              <input
                type="text"
                required
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                placeholder="Collaboration / AI Opportunity / Hackathon"
                className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/[0.08] text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                Message Content
              </label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Share project details, ideas, or opportunity outline..."
                className="w-full p-3.5 rounded-xl bg-dark-950 border border-white/[0.08] text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                data-cursor="SEND"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-mono text-xs font-semibold shadow-[0_0_20px_rgba(99,102,241,0.35)] flex items-center justify-center gap-2 transition-all"
              >
                <span>{submitted ? "Dispatched to Mail Client!" : "Send Message via Email"}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
