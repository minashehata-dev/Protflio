import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Mail, FileText, Github, Linkedin, X, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast("Email copied to clipboard");
  };

  const navigateTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands = [
    {
      group: "Navigation",
      items: [
        { label: "Overview & Introduction", icon: Compass, action: () => navigateTo('hero') },
        { label: "Core Disciplines", icon: Compass, action: () => navigateTo('disciplines') },
        { label: "Track Record & Architecture", icon: Compass, action: () => navigateTo('about') },
        { label: "Selected Projects & Case Studies", icon: Compass, action: () => navigateTo('projects') },
        { label: "Experience & Timeline", icon: Compass, action: () => navigateTo('experience') },
        { label: "Direct Inquiries & Contact", icon: Compass, action: () => navigateTo('contact') },
      ],
    },
    {
      group: "Actions",
      items: [
        { label: "Copy Direct Email", icon: Mail, action: copyEmail },
        { label: "Download Executive Resume", icon: FileText, action: () => window.open(personalInfo.resumeUrl, '_blank') },
      ],
    },
    {
      group: "Profiles",
      items: [
        { label: "LinkedIn Profile", icon: Linkedin, action: () => window.open(personalInfo.linkedin, '_blank') },
        { label: "GitHub Repositories", icon: Github, action: () => window.open(personalInfo.github, '_blank') },
      ],
    },
  ];

  const filteredCommands = commands.map(group => ({
    ...group,
    items: group.items.filter(item =>
      item.label.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(group => group.items.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl pro-card rounded-2xl p-4 shadow-2xl z-10 overflow-hidden bg-[#0e1017] border border-white/10"
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-3 py-2 border-b border-white/10 text-slate-300">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search portfolio sections, actions, links..."
                className="w-full bg-transparent text-sm outline-none text-white placeholder:text-slate-500 font-mono"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="mt-3 max-h-72 overflow-y-auto pr-1 space-y-4">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-500 font-mono">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((group) => (
                  <div key={group.group}>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono px-3 mb-1">
                      {group.group}
                    </p>
                    <div className="space-y-1">
                      {group.items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={index}
                            onClick={item.action}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs text-slate-300 hover:text-white hover:bg-white/5 transition group"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="p-1 rounded-md bg-white/5 text-slate-400 group-hover:text-sky-400 transition">
                                <Icon className="w-3.5 h-3.5" />
                              </span>
                              <span>{item.label}</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-300 transition" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">ESC</kbd> to exit</span>
              <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">↵</kbd> to select</span>
            </div>

            {/* Notification Toast */}
            <AnimatePresence>
              {toastMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-md bg-white text-slate-900 font-mono text-xs shadow-md"
                >
                  {toastMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
