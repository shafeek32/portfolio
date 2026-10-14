import React from 'react';
import { CheckCircle, ExternalLink, Terminal } from 'lucide-react';
import { certifications } from '../../data/certifications';

export const ModernCertifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto font-mono">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-[#00f0ff]/40 text-xs text-[#00f0ff] mb-3 shadow-[0_0_12px_rgba(0,240,255,0.2)]">
          <Terminal className="w-3.5 h-3.5" />
          <span>// VERIFIED_CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
          Certifications & <span className="text-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">Specialized Training</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="cyber-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 flex items-center gap-1.5 uppercase">
                  <CheckCircle className="w-3 h-3 text-[#00f0ff]" />
                  {cert.issueDate}
                </span>

                <span className="text-xs text-slate-400">
                  [{cert.issuer}]
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight font-sans">
                {cert.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {cert.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[10px] bg-black/60 text-slate-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {cert.credentialUrl && (
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex justify-end">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#00f0ff] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>VERIFY_CREDENTIAL</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
