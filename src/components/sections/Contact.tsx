import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Clock, Phone } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const domainLabels: Record<string, string> = {
      web: 'Web Application Architecture',
      mobile: 'Cross-Platform Mobile App',
      embedded: 'Embedded Systems & IoT Hardware',
      integrated: 'End-to-End Integrated Solution',
    };

    const domainName = domainLabels[formData.subject] || formData.subject || 'General Inquiry';

    const whatsappMessage = `*New Project Brief - Mina Shehata Portfolio*
----------------------------------------
*Client Name:* ${formData.name}
*Email:* ${formData.email}
*Domain:* ${domainName}
----------------------------------------
*Requirements & Scope:*
${formData.message}
----------------------------------------
_Sent via Mina Shehata Portfolio Website_`;

    const encoded = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/201270144885?text=${encoded}`;

    // Open WhatsApp directly to send the complete brief
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full max-w-[1920px] 3xl:max-w-[2200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
        {/* Left Column: Direct Inquiries */}
        <div>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-sky-400 mb-2 sm:mb-3">
            Direct Contact
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            Discuss a project or consultation.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 font-light">
            Whether you require an end-to-end IoT deployment, a custom mobile app, or a high-concurrency web platform, I am available to discuss specifications, timelines, and technical architecture.
          </p>

          {/* Quick Contact Cards */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <div className="pro-card rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase">Primary Email</p>
                  <p className="text-xs sm:text-sm lg:text-base font-medium text-white font-mono break-all">{personalInfo.email}</p>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="w-full sm:w-auto px-3.5 sm:px-4 py-2 rounded-lg subtle-badge hover:bg-white/10 text-xs sm:text-sm font-mono text-slate-200 flex items-center justify-center gap-1.5 transition cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="pro-card rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase">Direct Mobile & WhatsApp</p>
                  <p className="text-xs sm:text-sm lg:text-base font-medium text-white font-mono">{personalInfo.phone}</p>
                </div>
              </div>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-lg subtle-badge hover:bg-emerald-500/10 hover:text-emerald-400 text-xs sm:text-sm font-mono text-slate-200 text-center transition shrink-0"
              >
                Chat
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Right Column: Corporate Inquiry Form */}
        <div className="pro-card rounded-2xl p-5 sm:p-7 lg:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">Project Brief</h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 font-mono">Fill in project requirements for an initial technical evaluation.</p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 sm:py-16 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5">Redirecting to WhatsApp...</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Opening WhatsApp with your project brief directly to <span className="text-emerald-400 font-mono font-semibold">+20 127 014 4885</span>.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ahmed Salem"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/10 focus:border-slate-400 text-xs sm:text-sm text-white placeholder:text-slate-600 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Business Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@company.com"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/10 focus:border-slate-400 text-xs sm:text-sm text-white placeholder:text-slate-600 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Project Domain</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/10 focus:border-slate-400 text-xs sm:text-sm text-slate-300 outline-none transition"
                >
                  <option value="" className="bg-[#12141c]">Select Project Field...</option>
                  <option value="web" className="bg-[#12141c]">Web Application Architecture</option>
                  <option value="mobile" className="bg-[#12141c]">Cross-Platform Mobile App</option>
                  <option value="embedded" className="bg-[#12141c]">Embedded Systems & IoT Hardware</option>
                  <option value="integrated" className="bg-[#12141c]">End-to-End Integrated Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Scope & Requirements</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline key requirements, technical stack constraints, and expected delivery timeline..."
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-black/40 border border-white/10 focus:border-slate-400 text-xs sm:text-sm text-white placeholder:text-slate-600 outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 px-6 rounded-lg bg-white hover:bg-slate-200 text-slate-900 font-bold text-xs sm:text-sm md:text-base transition flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99]"
              >
                <span>Send via WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
