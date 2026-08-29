import React, { useState } from 'react';
import { RetroWindow } from './RetroWindow';
import { PixelIcon } from './PixelIcon';
import { playRetroSound } from '../utils/sound';

interface ContactWindowProps {
  isOpen: boolean;
  isActive: boolean;
  isMinimized: boolean;
  onFocus: () => void;
  onMinimize: () => void;
  onClose: () => void;
  style?: React.CSSProperties;
  className?: string;
  dragConstraintsRef?: React.RefObject<Element>;
}

export const ContactWindow: React.FC<ContactWindowProps> = ({
  isOpen,
  isActive,
  isMinimized,
  onFocus,
  onMinimize,
  onClose,
  style,
  className = '',
  dragConstraintsRef,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || isMinimized) return null;

  const handleCopyEmail = () => {
    playRetroSound('blip');
    navigator.clipboard.writeText('shafeekl2002@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playRetroSound('open');
    setSubmitted(true);
  };

  return (
    <RetroWindow
      id="contact"
      title="Contact_Me.exe"
      icon="mail"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['File', 'Options', 'Help']}
      statusBarLeft="Ready to send"
      statusBarRight={<span>SMTP</span>}
      style={style}
      className={`w-full max-w-lg shadow-2xl ${className}`}
      bodyClassName="p-3 bg-[#C0C0C0]"
      dragConstraintsRef={dragConstraintsRef}
    >
      <div className="retro-inset-cream p-3 font-mono text-xs text-black space-y-3">
        {/* Header Direct Reachout */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#B0B0B0] pb-2">
          <div>
            <div className="font-bold text-xs text-black">Shafeek Latheef</div>
            <div className="text-gray-600 text-[10px]">Kerala, India • Available for 2026 roles</div>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="retro-btn px-2 py-0.5 text-[11px] font-bold flex items-center gap-1 bg-[#D4D0C8] hover:bg-white"
          >
            <PixelIcon name="mail" size={13} />
            <span>{copied ? '✓ Copied!' : 'Copy Email'}</span>
          </button>
        </div>

        {/* Form or Submitted State */}
        {submitted ? (
          <div className="p-3 bg-white border border-[#A0A0A0] text-center space-y-1.5">
            <div className="text-emerald-700 font-bold text-xs">✓ Message Dispatched!</div>
            <p className="text-gray-600 text-[10px]">
              Thank you! You can also write to <a href="mailto:shafeekl2002@gmail.com" className="text-[#000080] underline font-bold">shafeekl2002@gmail.com</a>.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setMessage('');
              }}
              className="retro-btn px-2.5 py-0.5 text-[11px] font-bold mt-1"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="space-y-0.5">
              <label className="font-bold text-gray-700 text-[10px] block">From (Name):</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Recruiter or Lead"
                className="w-full retro-inset px-2 py-1 text-xs font-mono outline-none bg-white text-black"
              />
            </div>

            <div className="space-y-0.5">
              <label className="font-bold text-gray-700 text-[10px] block">Reply Email:</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="w-full retro-inset px-2 py-1 text-xs font-mono outline-none bg-white text-black"
              />
            </div>

            <div className="space-y-0.5">
              <label className="font-bold text-gray-700 text-[10px] block">Message:</label>
              <textarea
                rows={2}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Let's build something great..."
                className="w-full retro-inset px-2 py-1 text-xs font-mono outline-none bg-white text-black resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/shafeek-latheef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000080] hover:underline font-bold text-[10px]"
                >
                  LinkedIn ↗
                </a>
                <span className="text-gray-400">•</span>
                <a
                  href="https://github.com/shafeek32"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000080] hover:underline font-bold text-[10px]"
                >
                  GitHub ↗
                </a>
              </div>

              <button
                type="submit"
                className="retro-btn px-3 py-1 text-xs font-bold flex items-center gap-1 bg-[#D4D0C8] hover:bg-white text-black"
              >
                <PixelIcon name="mail" size={13} />
                <span>Send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </RetroWindow>
  );
};
