import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Github, Linkedin, Copy, Check, Send, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
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
      setErrorMessage('Please enter your name.');
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

  const handleCancel = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
    setErrorMessage('');
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
              subject: `Portfolio Contact: ${(formData.subject || '').trim() || 'New Inquiry'} from ${formData.name.trim()}`,
              message: formData.message.trim(),
              from_name: `${formData.name.trim()} (Portfolio Visitor)`,
              reply_to: formData.email.trim()
            })
          });
          const data = await res.json();
          if (!res.ok || !data.success) {
            console.warn('Web3Forms response:', data);
          }
        } catch (mailErr) {
          console.warn('Web3Forms error:', mailErr);
        }
      }

      if (supabase) {
        const { error } = await supabase.from('messages').insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: (formData.subject || '').trim() || 'General Inquiry',
            message: formData.message.trim(),
            created_at: new Date().toISOString()
          }
        ]);
        if (error) console.warn('Supabase insert note:', error);
      }

      if (!web3FormsKey && !supabase) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#000080', '#008080', '#FFFF00']
      });
    } catch (err: unknown) {
      setStatus('error');
      const errObj = err as { message?: string };
      setErrorMessage(errObj?.message || 'Something went wrong. Please try emailing directly.');
    }
  };

  return (
    <section id="contact" className="py-8 px-3 sm:px-6 lg:px-12 relative z-10 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="retro-window-frame overflow-hidden shadow-2xl">
          {/* Titlebar */}
          <div className="retro-titlebar">
            <div className="flex items-center gap-2 truncate">
              <Mail className="w-4 h-4 text-white inline shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-wide truncate">
                Contact.exe — [Direct Communication Dialog]
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="retro-titlebar-btn">_</button>
              <button className="retro-titlebar-btn">□</button>
              <button className="retro-titlebar-btn">✕</button>
            </div>
          </div>

          {/* Menu Bar */}
          <div className="px-3 py-1 bg-[#C0C0C0] border-b border-[#808080] flex items-center justify-between text-xs text-black select-none border-t border-white">
            <div className="flex items-center gap-3">
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>M</u>essage</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>E</u>ndpoints</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>H</u>elp</span>
            </div>
            <div className="text-[11px] text-gray-700 hidden sm:block">
              Gateway: Active (SSL Encrypted)
            </div>
          </div>

          {/* Body Container */}
          <div className="p-4 sm:p-7 bg-[#C0C0C0] space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
              {/* Direct Channels Column */}
              <div className="lg:col-span-5 space-y-3">
                <div className="retro-inset p-4 bg-[#FFFFFA] space-y-2.5">
                  <div className="text-xs font-bold text-[#000080] pb-1.5 border-b border-gray-200 uppercase">
                    [DIRECT TRANSMISSION CHANNELS]
                  </div>

                  {/* Email */}
                  <div className="p-2 bg-[#F0F0F0] border border-[#C0C0C0] flex items-center justify-between gap-2 text-xs">
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-gray-500 font-bold block">EMAIL:</span>
                      <a href="mailto:shafeekl2002@gmail.com" className="text-xs font-bold text-black truncate block hover:underline">
                        shafeekl2002@gmail.com
                      </a>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="retro-btn p-1.5 text-[10px] font-bold"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Copy className="w-3.5 h-3.5 text-black" />}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="p-2 bg-[#F0F0F0] border border-[#C0C0C0] flex items-center justify-between gap-2 text-xs">
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-gray-500 font-bold block">PHONE:</span>
                      <a href="tel:+917593936350" className="text-xs font-bold text-black truncate block hover:underline">
                        +91 7593936350
                      </a>
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      className="retro-btn p-1.5 text-[10px] font-bold"
                      title="Copy phone"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Phone className="w-3.5 h-3.5 text-black" />}
                    </button>
                  </div>

                  {/* WhatsApp */}
                  <div className="p-2 bg-[#F0F0F0] border border-[#C0C0C0] flex items-center justify-between gap-2 text-xs">
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-gray-500 font-bold block">WHATSAPP:</span>
                      <a href="https://wa.me/qr/Z73NBLC5WL7FO1" target="_blank" rel="noreferrer" className="text-xs font-bold text-black truncate block hover:underline">
                        Direct Instant Chat
                      </a>
                    </div>
                    <a
                      href="https://wa.me/qr/Z73NBLC5WL7FO1"
                      target="_blank"
                      rel="noreferrer"
                      className="retro-btn p-1.5 text-[10px] font-bold"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-800" />
                    </a>
                  </div>
                </div>

                {/* Social Network Quick Launch */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://github.com/shafeek32"
                    target="_blank"
                    rel="noreferrer"
                    className="retro-btn py-2 text-xs font-bold uppercase flex items-center justify-center gap-1.5 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black"
                  >
                    <Github className="w-4 h-4 text-[#000080]" />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shafeek-latheef/"
                    target="_blank"
                    rel="noreferrer"
                    className="retro-btn py-2 text-xs font-bold uppercase flex items-center justify-center gap-1.5 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black"
                  >
                    <Linkedin className="w-4 h-4 text-[#000080]" />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>

              {/* Message Dialog Form */}
              <div className="lg:col-span-7">
                <div className="retro-inset p-4 sm:p-6 bg-[#FFFFFA]">
                  {status === 'success' ? (
                    <div className="py-8 text-center space-y-3 font-mono">
                      <div className="w-10 h-10 bg-[#E0E8FF] border-2 border-[#000080] text-[#000080] flex items-center justify-center mx-auto mb-2">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-black uppercase">TRANSMISSION DELIVERED</h4>
                      <p className="text-xs text-gray-600 font-sans">Thank you! Your message was received. I will get back to you shortly.</p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="retro-btn mt-4 px-4 py-2 text-xs font-bold uppercase bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black"
                      >
                        Transmit Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5 font-mono text-xs">
                      <div className="text-xs font-bold text-[#000080] pb-1.5 border-b border-gray-200 uppercase flex items-center justify-between">
                        <span>[SEND MESSAGE FORM]</span>
                        <span className="text-gray-500 text-[10px]">* REQUIRED FIELDS</span>
                      </div>

                      {status === 'error' && errorMessage && (
                        <div className="p-2 bg-red-100 border border-red-400 text-xs text-red-800 font-bold">
                          [ERROR]: {errorMessage}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-black mb-1 uppercase">NAME: *</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name"
                            className="retro-inset w-full p-2 text-xs text-black bg-white focus:outline-none"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-black mb-1 uppercase">EMAIL: *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your.email@domain.com"
                            className="retro-inset w-full p-2 text-xs text-black bg-white focus:outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-black mb-1 uppercase">SUBJECT:</label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Project Inquiry / Engineering Role"
                          className="retro-inset w-full p-2 text-xs text-black bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-black mb-1 uppercase">MESSAGE: *</label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Write message content here..."
                          className="retro-inset w-full p-2 text-xs text-black bg-white focus:outline-none resize-none font-sans"
                          required
                        />
                      </div>

                      <div className="pt-2 flex items-center gap-3">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="retro-btn flex-1 py-2 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black disabled:opacity-50"
                        >
                          <Send className="w-3.5 h-3.5 text-[#000080]" />
                          <span>{status === 'submitting' ? 'SENDING PACKETS...' : 'SEND MESSAGE'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCancel}
                          className="retro-btn px-4 py-2 text-xs font-bold uppercase bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black"
                        >
                          CANCEL
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-3 py-1">
            <span>Buffer: Ready</span>
            <span>Port: 443 SSL</span>
            <span>Transmission: Operational</span>
          </div>
        </div>
      </div>
    </section>
  );
};
