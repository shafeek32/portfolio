import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  MapPin, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { ContactFormData } from '../types';
import { supabase } from '../utils/supabase';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
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
      setErrorMessage('Please provide your name.');
      return false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Message should be at least 10 characters long.');
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

      // 1. Send Email Notification directly to Gmail via Web3Forms (if configured)
      if (web3FormsKey) {
        try {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              access_key: web3FormsKey,
              name: formData.name.trim(),
              email: formData.email.trim(),
              subject: `Portfolio Contact: ${(formData.subject || '').trim() || 'New Message'} from ${formData.name.trim()}`,
              message: formData.message.trim(),
              from_name: `${formData.name.trim()} (Portfolio Visitor)`,
              reply_to: formData.email.trim()
            })
          });
          const data = await res.json();
          if (!res.ok || !data.success) {
            console.warn('Web3Forms dispatch response:', data);
          }
        } catch (mailErr) {
          console.warn('Web3Forms email error:', mailErr);
        }
      }

      // 2. Persist Message to Supabase Database (if configured)
      if (supabase) {
        const { error } = await supabase.from('messages').insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: (formData.subject || '').trim() || 'No Subject',
            message: formData.message.trim(),
            created_at: new Date().toISOString()
          }
        ]);
        if (error) throw error;
      }

      if (!web3FormsKey && !supabase) {
        // Fallback simulation when no external services configured
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#06b6d4', '#10b981', '#6366f1']
      });
    } catch (err: unknown) {
      setStatus('error');
      const errObj = err as { message?: string };
      setErrorMessage(errObj?.message || 'Something went wrong. Please try emailing directly.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-background/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Let's <span className="text-gradient-cyan">Build Something.</span>
          </h2>
          <p className="text-sm text-text-muted mt-2 max-w-lg">
            Have an opportunity, project, or idea? I'd love to hear about it. Send a message or reach out on any channel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Channels & Meta Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl glass-card border border-border-subtle space-y-6">
              <div>
                <h3 className="text-base font-bold text-text-primary mb-1">Direct Channels</h3>
                <p className="text-xs text-text-secondary">
                  Feel free to reach out for software engineering roles, full-stack collaborations, or technical inquiries.
                </p>
              </div>

              {/* Direct Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-background-elevated/70 border border-border-subtle flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-text-muted font-mono block">Direct Email</span>
                    <a
                      href="mailto:shafeekl2002@gmail.com"
                      className="text-xs font-semibold text-text-primary truncate block hover:text-accent-cyan transition-colors"
                    >
                      shafeekl2002@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-background-secondary hover:bg-white/10 text-text-secondary hover:text-accent-cyan border border-border-subtle transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Phone Card with Copy / Call button */}
              <div className="p-4 rounded-xl bg-background-elevated/70 border border-border-subtle flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-text-muted font-mono block">Phone & WhatsApp</span>
                    <a
                      href="tel:+917593936350"
                      className="text-xs font-semibold text-text-primary truncate block hover:text-emerald-400 transition-colors font-mono"
                    >
                      +91 7593936350
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-background-secondary hover:bg-white/10 text-text-secondary hover:text-emerald-400 border border-border-subtle transition-colors shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Quick Profile Links */}
              <div className="space-y-2.5">
                <a
                  href="https://linkedin.com/in/shafeek-latheef"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-background-elevated/50 hover:bg-background-elevated border border-border-subtle hover:border-accent-cyan/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-accent-cyan" />
                    <span className="text-xs font-medium text-text-primary">LinkedIn Profile</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-cyan group-hover:translate-x-0.5 transition-all" />
                </a>

                <a
                  href="https://github.com/shafeek32"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-background-elevated/50 hover:bg-background-elevated border border-border-subtle hover:border-accent-cyan/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium text-text-primary">GitHub Profile (@shafeek32)</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-background-elevated/30 border border-border-subtle text-xs text-text-muted">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>Based in Kerala, India • Open to Remote & On-site Roles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl glass-card border border-border-strong shadow-xl"
            >
              <h3 className="text-lg font-bold text-text-primary mb-1">Send a Message</h3>
              <p className="text-xs text-text-secondary mb-6">
                Fill in the details below and I'll get back to you promptly.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-text-primary">Message Dispatched!</h4>
                  <p className="text-xs text-text-secondary max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been received and I'll respond as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-background-elevated hover:bg-white/10 text-text-primary border border-border-subtle transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-xs text-rose-400">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary mb-1.5">
                        Your Name <span className="text-accent-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background-elevated/70 border border-border-subtle text-text-primary text-xs focus:border-accent-cyan focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary mb-1.5">
                        Your Email <span className="text-accent-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background-elevated/70 border border-border-subtle text-text-primary text-xs focus:border-accent-cyan focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-1.5">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full-Stack Engineer Role / Project Consultation"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background-elevated/70 border border-border-subtle text-text-primary text-xs focus:border-accent-cyan focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-1.5">
                      Message <span className="text-accent-cyan">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shafeek, I'd like to discuss an opportunity or project with you..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background-elevated/70 border border-border-subtle text-text-primary text-xs focus:border-accent-cyan focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-background bg-accent-cyan hover:bg-accent-cyan-light transition-all shadow-glow-cyan disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
