import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, RotateCcw } from 'lucide-react';
import { executeTerminalCommand, type TerminalOutputLine } from '../data/terminalCommands';

export const InteractiveTerminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalOutputLine[]>([
    { text: "Akshay OS [Version 3.4.0-ai-kernel]", type: 'output' },
    { text: "System initialized. Connected to local workspace environment.", type: 'output' },
    { text: "Type 'help' to view available system routines, or click the quick commands below.", type: 'highlight' },
    { text: "$ whoami", type: 'command' },
    { text: "USER: D V AKSHAY KUMAR (Akshay Kumar)", type: 'success' },
    { text: "ROLE: Data Science Undergraduate • AI/ML Developer • Builder", type: 'output' },
    { text: "TAGLINE: 'Building intelligent systems, data-driven products, and polished digital experiences.'", type: 'highlight' },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const quickCommands = ['help', 'projects', 'skills', 'about', 'experience', 'contact', 'status', 'clear'];

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const commandLine: TerminalOutputLine = { text: `$ ${trimmed}`, type: 'command' };
    const outputs = executeTerminalCommand(trimmed);

    setHistory(prev => [...prev, commandLine, ...outputs]);
    setCommandHistory(prev => [trimmed, ...prev]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0 && historyIndex + 1 < commandHistory.length) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const prevIdx = historyIndex - 1;
        setHistoryIndex(prevIdx);
        setInputVal(commandHistory[prevIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl bg-dark-950 border border-indigo-500/30 overflow-hidden shadow-2xl font-mono text-xs sm:text-sm text-left">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-dark-900 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-400 font-mono text-xs ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>akshay@ai-lab:~ (bash)</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleCommand('clear')}
            type="button"
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-dark-800 transition-colors"
            title="Clear Terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            ONLINE
          </span>
        </div>
      </div>

      {/* Quick clickable chips */}
      <div className="px-4 py-2 bg-dark-900/60 border-b border-white/[0.04] flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-cyan-400" /> Quick:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-dark-850 hover:bg-indigo-950 hover:border-indigo-500/40 border border-white/[0.06] text-slate-300 hover:text-cyan-300 transition-all font-mono text-[11px]"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Viewport */}
      <div 
        onClick={() => inputRef.current?.focus()}
        className="p-4 sm:p-5 h-80 overflow-y-auto space-y-1.5 bg-dark-950/90 cursor-text select-text"
      >
        {history.map((line, idx) => (
          <div key={idx} className="leading-relaxed">
            {line.type === 'command' && (
              <span className="text-cyan-300 font-bold">{line.text}</span>
            )}
            {line.type === 'success' && (
              <span className="text-emerald-400">{line.text}</span>
            )}
            {line.type === 'highlight' && (
              <span className="text-violet-300 font-semibold">{line.text}</span>
            )}
            {line.type === 'error' && (
              <span className="text-red-400">{line.text}</span>
            )}
            {line.type === 'link' && line.url && (
              <span className="text-slate-300">
                {line.text.split(':')[0]}:{' '}
                <a
                  href={line.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline hover:text-cyan-300"
                >
                  {line.url}
                </a>
              </span>
            )}
            {(!line.type || line.type === 'output') && (
              <span className="text-slate-300">{line.text}</span>
            )}
          </div>
        ))}

        {/* Active Command Input Line */}
        <div className="flex items-center gap-2 pt-1 text-cyan-400">
          <span className="shrink-0 text-slate-400">akshay@ai-lab:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-0 outline-none text-white font-mono text-xs sm:text-sm p-0 m-0"
            placeholder="Type 'help' or any command..."
            autoFocus={false}
          />
          <button
            onClick={() => handleCommand(inputVal)}
            type="button"
            className="text-slate-500 hover:text-cyan-400 p-1"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
};
