import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { InteractiveTerminal } from '../components/InteractiveTerminal';

export const TerminalSection: React.FC = () => {
  return (
    <section id="terminal" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      <SectionHeading
        number="05"
        tag="SYSTEM CONSOLE"
        title="Interactive Command Shell"
        subtitle="Query runtime environment variables, inspect repository paths, or test system routines directly through the terminal emulator."
        align="center"
      />

      <InteractiveTerminal />
    </section>
  );
};
