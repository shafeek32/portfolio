import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, Check, Copy, Github, Linkedin, Terminal, CheckCircle2 } from 'lucide-react';
import { ContactFormData } from '../../types';
import { supabase } from '../../utils/supabase';

export const ModernContact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shafeekl2002@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 7593936350');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('INPUT_ERROR: Name parameter required.');
      return false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage('INPUT_ERROR: Valid email address required.');
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('INPUT_ERROR: Message payload must exceed 10 characters.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (web3FormsKey) {
        try {
          await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              access_key: web3FormsKey,
              name: formData.name.trim(),
              email: formData.email.trim(),
              subject: `Portfolio Contact: ${(formData.subject || '').trim() || 'New Inquiry'} from ${formData.name.trim()}`,
              message: formData.message.trim(),
              from_name: `${formData.name.trim()} (Cyberpunk Portfolio)`,
              reply_to: formData.email.trim(),
            }),
          });
        } catch (mailErr) {
          console.warn('Web3Forms error:', mailErr);
        }
      }

      if (supabase) {
        try {
          await supabase.from('messages').insert([
            {
              name: formData.name.trim(),
              email: formData.email.trim(),
              subject: (formData.subject || '').trim() || 'General Inquiry',
              message: formData.message.trim(),
              created_at: new Date().toISOString(),
            },
          ]);
        } catch (err) {
          console.warn('Supabase insert note:', err);
        }
      }

      if (!web3FormsKey && !supabase) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#00f0ff', '#ff007f', '#ffffff'],
      });
    } catch {
      setStatus('error');
      setErrorMessage('DISPATCH_FAILED: Please route message directly to shafeekl2002@gmail.com');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-[#00f0ff]/40 text-xs text-[#00f0ff] mb-3 shadow-[0_0_12px_rgba(0,240,255,0.2)]">
          <Terminal className="w-3.5 h-3.5" />
          <span>// DIRECT_TRANSMISSION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
          Transmit a <span className="text-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">Message</span>
        </h2>
        <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-mono">
          Initiate contact for engineering roles, technical collaboration, or system consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="cyber-card rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-black border border-[#00f0ff]/40 text-[#00f0ff]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">EMAIL_ENDPOINT</p>
                  <a
                    href="mailto:shafeekl2002@gmail.com"
                    className="text-xs sm:text-sm font-bold text-white hover:text-[#00f0ff] transition-colors"
                  >
                    shafeekl2002@gmail.com
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="cyber-card rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-black border border-emerald-500/40 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">SECURE_VOICE</p>
                  <a
                    href="tel:+917593936350"
                    className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    +91 7593936350
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className="cyber-card rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-black border border-[#ff007f]/40 text-[#ff007f]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">GEO_COORDINATES</p>
                <p className="text-xs sm:text-sm font-bold text-white">
                  Kerala, India // Worldwide Remote
                </p>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://github.com/shafeek32"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-black border border-slate-800 hover:border-[#00f0ff]/50 text-slate-300 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Github className="w-4 h-4 text-[#00f0ff]" />
              <span>GITHUB</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shafeek-latheef/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-black border border-slate-800 hover:border-[#ff007f]/50 text-slate-300 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4 text-[#ff007f]" />
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>

        {/* Right Side: Cyber Form */}
        <div className="lg:col-span-7 cyber-card rounded-2xl p-6 sm:p-8">
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/40 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white font-sans">TRANSMISSION_DELIVERED</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto font-mono">
                Message successfully queued. I will review your transmission and respond promptly.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 px-5 py-2 rounded-xl bg-slate-900 border border-[#00f0ff]/30 text-xs font-bold text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black transition-all cursor-pointer"
              >
                SEND ANOTHER TRANSMISSION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1.5 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1.5 uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@cyber.net"
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1.5 uppercase">
                  Subject Header
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineer Opportunity / Project Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1.5 uppercase">
                  Message Payload *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Transmit requirements, opportunity scope, or technical questions..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all resize-none font-mono"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-[#ff007f] font-mono">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 rounded-xl bg-[#00f0ff] hover:bg-white active:bg-cyan-200 disabled:opacity-50 text-black font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                {status === 'submitting' ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-black" />
                    <span>TRANSMIT_PAYLOAD</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
