import React from 'react';
import { cn } from '../lib/utils';

interface TechBadgeProps {
  name: string;
  category?: string;
  size?: 'sm' | 'md';
  highlight?: boolean;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  size = 'md',
  highlight = false,
  className
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md font-mono transition-all duration-200 border",
        size === 'sm' ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs",
        highlight
          ? "bg-indigo-950/50 text-indigo-300 border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
          : "bg-dark-850/80 text-slate-300 border-white/[0.08] hover:border-slate-600 hover:text-white",
        className
      )}
    >
      <span className={cn(
        "w-1 h-1 rounded-full",
        highlight ? "bg-cyan-400 shadow-[0_0_6px_#22d3ee]" : "bg-slate-500"
      )} />
      {name}
    </span>
  );
};
