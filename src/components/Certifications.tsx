import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Award } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-12 px-3 sm:px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="retro-window-frame overflow-hidden font-mono"
        >
          {/* Titlebar */}
          <div className="retro-titlebar">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-white inline" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                06_Credentials_Viewer.cert — [Certificates & Verified Accreditations]
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button className="retro-titlebar-btn">_</button>
              <button className="retro-titlebar-btn">□</button>
              <button className="retro-titlebar-btn">✕</button>
            </div>
          </div>

          {/* Menu */}
          <div className="px-3 py-1 bg-[#C0C0C0] border-b border-[#808080] flex items-center justify-between text-xs text-black select-none border-t border-white">
            <div className="flex items-center gap-3">
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>C</u>ertificates</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>V</u>erify</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>H</u>elp</span>
            </div>
            <div className="text-[11px] text-gray-700">
              TRUSTED ROOT CERTIFICATES: VALID
            </div>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-8 bg-[#C0C0C0] space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="retro-inset p-5 bg-[#FFFFFA] flex flex-col justify-between space-y-4 hover:border-[#000080] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-black font-bold pb-2 border-b border-gray-200 mb-3">
                      <span className="text-[#000080] bg-[#E0E8FF] px-2 py-0.5 border border-[#80A0FF]">
                        [{cert.issuer}]
                      </span>
                      <span className="text-gray-600">{cert.issueDate}</span>
                    </div>

                    <h3 className="text-base font-bold text-black mb-2 leading-snug font-mono">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-[#333333] font-sans leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#EAEAEA] border border-[#B0B0B0] text-black"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-3 py-1">
            <span>Certificates: 2 Active</span>
            <span>Signature: SHA-256</span>
            <span>Validity: Permanent</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
