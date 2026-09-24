import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 flex justify-center ${
          scrolled ? 'backdrop-blur-md bg-dark-950/70 border-b border-white/[0.06] shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Logo & Status Indicator */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            data-cursor="HOME"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
              <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  AK
                </span>
              </div>
            </div>

            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold text-white tracking-wider flex items-center gap-1.5">
                <span>AKSHAY KUMAR</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-[10px] font-mono text-slate-400 tracking-tight">
                AI / DATA SCIENCE BUILDER
              </div>
            </div>
          </a>

          {/* Desktop Floating Navigation Pill */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-dark-900/80 border border-white/[0.08] backdrop-blur-xl shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  data-cursor="VIEW"
                  className={`relative px-3 py-1 text-xs font-medium transition-all rounded-full ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-indigo-600/30 border border-indigo-500/50 shadow-[0_0_12px_rgba(99,102,241,0.3)] -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/dvakshay"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 border border-white/[0.08] hover:border-slate-500 text-xs font-mono text-slate-300 hover:text-white transition-all"
              data-cursor="GITHUB"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
              <span>dvakshay</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 border border-indigo-400/40 text-xs font-mono font-medium text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all"
              data-cursor="CONNECT"
            >
              <Sparkles className="w-3 h-3 text-cyan-300" />
              <span>Connect</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-lg bg-dark-850 border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 p-4 bg-dark-950/95 backdrop-blur-2xl border-b border-white/[0.1] lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg bg-dark-900/60 border border-white/[0.04] text-sm font-medium text-slate-200 hover:bg-indigo-950 hover:text-cyan-300 transition-all text-left flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-slate-500">→</span>
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <a
                href="https://github.com/dvakshay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href="mailto:dvakshayk@gmail.com"
                className="flex items-center gap-1.5 text-cyan-400"
              >
                <Mail className="w-4 h-4" /> Email Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
