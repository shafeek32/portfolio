import React from 'react';

export type PixelIconName =
  | 'monitor'
  | 'folder'
  | 'document'
  | 'gear'
  | 'terminal'
  | 'pdf'
  | 'mail'
  | 'trash'
  | 'code'
  | 'server'
  | 'database'
  | 'wrench'
  | 'star'
  | 'sparkle'
  | 'speaker'
  | 'speaker-mute'
  | 'settings'
  | 'check'
  | 'close'
  | 'minimize'
  | 'maximize'
  | 'user'
  | 'arrow-right'
  | 'external'
  | 'github'
  | 'lock'
  | 'clock'
  | 'disc'
  | 'download';

interface PixelIconProps {
  name: PixelIconName;
  size?: number | string;
  className?: string;
}

export const PixelIcon: React.FC<PixelIconProps> = ({ name, size = 24, className = '' }) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  const renderIconContent = () => {
    switch (name) {
      case 'monitor':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            {/* Monitor Outer Bezel */}
            <rect x="2" y="2" width="20" height="14" fill="#D4D0C8" stroke="#333333" strokeWidth="1.5" />
            <rect x="3" y="3" width="18" height="1" fill="#FFFFFF" />
            <rect x="3" y="15" width="18" height="1" fill="#808080" />
            {/* Screen */}
            <rect x="4" y="4" width="16" height="10" fill="#0c1033" stroke="#222222" strokeWidth="1" />
            {/* Screen details: mini windows */}
            <rect x="6" y="6" width="6" height="4" fill="#1560bd" />
            <rect x="7" y="7" width="4" height="2" fill="#80c0ff" />
            <rect x="13" y="8" width="5" height="4" fill="#008080" />
            {/* Monitor Stand */}
            <rect x="10" y="16" width="4" height="3" fill="#A0A0A0" stroke="#333333" strokeWidth="1" />
            <rect x="7" y="19" width="10" height="3" fill="#C0C0C0" stroke="#333333" strokeWidth="1.5" />
            <rect x="8" y="19" width="8" height="1" fill="#FFFFFF" />
            {/* Power LED */}
            <rect x="18" y="14" width="2" height="1" fill="#00FF66" />
          </svg>
        );

      case 'folder':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            {/* Folder Tab */}
            <path d="M2 5h7l2 2h11v13H2V5z" fill="#E8B830" stroke="#333333" strokeWidth="1.5" />
            <path d="M3 6h5l2 2h11v2H3V6z" fill="#FFE27A" />
            {/* Folder Front Leaf */}
            <path d="M2 9h20v11H2V9z" fill="#F4C430" stroke="#333333" strokeWidth="1.5" />
            <rect x="3" y="10" width="18" height="1" fill="#FFF2A3" />
            <rect x="3" y="19" width="18" height="1" fill="#B38600" />
            <rect x="5" y="12" width="6" height="4" fill="#E0A000" />
          </svg>
        );

      case 'document':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            {/* Document body with folded corner */}
            <path d="M4 2h11l5 5v15H4V2z" fill="#FFFFFF" stroke="#333333" strokeWidth="1.5" />
            {/* Folded corner */}
            <path d="M15 2v5h5" fill="#D4D0C8" stroke="#333333" strokeWidth="1" />
            {/* Document text lines */}
            <rect x="7" y="8" width="6" height="2" fill="#000080" />
            <rect x="7" y="12" width="10" height="1.5" fill="#555555" />
            <rect x="7" y="15" width="10" height="1.5" fill="#555555" />
            <rect x="7" y="18" width="7" height="1.5" fill="#555555" />
          </svg>
        );

      case 'gear':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            {/* Gear teeth */}
            <rect x="10" y="2" width="4" height="20" fill="#909090" stroke="#333333" strokeWidth="1" />
            <rect x="2" y="10" width="20" height="4" fill="#909090" stroke="#333333" strokeWidth="1" />
            <rect x="4" y="4" width="16" height="16" fill="#A0A0A0" stroke="#333333" strokeWidth="1" />
            {/* Gear center body */}
            <rect x="5" y="5" width="14" height="14" fill="#C0C0C0" stroke="#333333" strokeWidth="1.5" />
            <rect x="6" y="6" width="12" height="2" fill="#FFFFFF" />
            {/* Gear hole */}
            <rect x="9" y="9" width="6" height="6" fill="#333333" stroke="#222222" strokeWidth="1" />
            <rect x="10" y="10" width="4" height="4" fill="#120e2e" />
          </svg>
        );

      case 'terminal':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            {/* Outer case */}
            <rect x="2" y="3" width="20" height="18" fill="#303030" stroke="#111111" strokeWidth="1.5" />
            {/* Title strip */}
            <rect x="3" y="4" width="18" height="3" fill="#000080" />
            {/* Screen */}
            <rect x="3" y="7" width="18" height="13" fill="#000000" />
            {/* Prompt lines */}
            <path d="M5 10l2 2-2 2" stroke="#00FF66" strokeWidth="1.5" strokeLinecap="square" />
            <rect x="9" y="13" width="4" height="1.5" fill="#00FF66" />
            <rect x="5" y="16" width="8" height="1" fill="#00CC55" />
          </svg>
        );

      case 'pdf':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <path d="M4 2h11l5 5v15H4V2z" fill="#FFFFFF" stroke="#333333" strokeWidth="1.5" />
            <path d="M15 2v5h5" fill="#D4D0C8" stroke="#333333" strokeWidth="1" />
            {/* Red PDF banner */}
            <rect x="2" y="10" width="16" height="7" fill="#C02020" stroke="#800000" strokeWidth="1" />
            <rect x="4" y="12" width="12" height="3" fill="#FFFFFF" />
            <text x="5" y="15" fill="#C02020" fontSize="4.5" fontFamily="monospace" fontWeight="900">PDF</text>
            <rect x="7" y="19" width="10" height="1.5" fill="#888888" />
          </svg>
        );

      case 'mail':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            {/* Envelope body */}
            <rect x="2" y="5" width="20" height="14" fill="#FFFFF0" stroke="#333333" strokeWidth="1.5" />
            {/* Flap outline */}
            <path d="M3 6l9 7 9-7" stroke="#333333" strokeWidth="1.5" fill="none" />
            {/* Stamp */}
            <rect x="16" y="8" width="4" height="4" fill="#C02020" stroke="#333333" strokeWidth="0.8" />
            <rect x="17" y="9" width="2" height="2" fill="#FFFFFF" />
            {/* Bottom folds */}
            <path d="M3 18l6-5M21 18l-6-5" stroke="#B0B0B0" strokeWidth="1" />
          </svg>
        );

      case 'trash':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            {/* Lid */}
            <rect x="5" y="4" width="14" height="3" fill="#A0A0A0" stroke="#333333" strokeWidth="1.5" />
            <rect x="9" y="2" width="6" height="2" fill="#C0C0C0" stroke="#333333" strokeWidth="1" />
            {/* Bin Can */}
            <path d="M6 7l1 14h10l1-14H6z" fill="#C0C0C0" stroke="#333333" strokeWidth="1.5" />
            {/* Vertical ridges */}
            <rect x="9" y="9" width="1.5" height="10" fill="#808080" />
            <rect x="12" y="9" width="1.5" height="10" fill="#808080" />
            <rect x="15" y="9" width="1.5" height="10" fill="#808080" />
          </svg>
        );

      case 'code':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <rect x="2" y="3" width="20" height="18" fill="#FFFFFA" stroke="#333333" strokeWidth="1.5" />
            {/* Left bracket < */}
            <path d="M8 8l-3 4 3 4" stroke="#000080" strokeWidth="2" strokeLinecap="square" />
            {/* Right bracket > */}
            <path d="M16 8l3 4-3 4" stroke="#000080" strokeWidth="2" strokeLinecap="square" />
            {/* Slash / */}
            <path d="M13 7l-2 10" stroke="#C02020" strokeWidth="1.5" />
          </svg>
        );

      case 'server':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            {/* Unit 1 */}
            <rect x="3" y="3" width="18" height="5" fill="#D4D0C8" stroke="#333333" strokeWidth="1.5" />
            <rect x="5" y="5" width="2" height="1.5" fill="#00FF00" />
            <rect x="8" y="5" width="2" height="1.5" fill="#000080" />
            <rect x="13" y="5" width="6" height="1" fill="#666666" />
            {/* Unit 2 */}
            <rect x="3" y="9.5" width="18" height="5" fill="#D4D0C8" stroke="#333333" strokeWidth="1.5" />
            <rect x="5" y="11.5" width="2" height="1.5" fill="#00FF00" />
            <rect x="8" y="11.5" width="2" height="1.5" fill="#00FF00" />
            <rect x="13" y="11.5" width="6" height="1" fill="#666666" />
            {/* Unit 3 */}
            <rect x="3" y="16" width="18" height="5" fill="#D4D0C8" stroke="#333333" strokeWidth="1.5" />
            <rect x="5" y="18" width="2" height="1.5" fill="#FFBF00" />
            <rect x="8" y="18" width="2" height="1.5" fill="#000080" />
            <rect x="13" y="18" width="6" height="1" fill="#666666" />
          </svg>
        );

      case 'database':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            {/* Top cylinder */}
            <ellipse cx="12" cy="6" rx="8" ry="3" fill="#E8E8E8" stroke="#333333" strokeWidth="1.5" />
            <ellipse cx="12" cy="6" rx="6" ry="1.8" fill="#FFFFFF" />
            {/* Middle layer */}
            <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="#D4D0C8" stroke="#333333" strokeWidth="1.5" />
            <ellipse cx="12" cy="11" rx="8" ry="2.5" fill="none" stroke="#333333" strokeWidth="1.2" />
            {/* Bottom layer */}
            <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="#C0C0C0" stroke="#333333" strokeWidth="1.5" />
            <ellipse cx="12" cy="17" rx="8" ry="2.5" fill="none" stroke="#333333" strokeWidth="1.2" />
            {/* Data line */}
            <rect x="8" y="8" width="4" height="1" fill="#000080" />
            <rect x="8" y="14" width="4" height="1" fill="#000080" />
          </svg>
        );

      case 'wrench':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <path d="M19 3a5 5 0 0 0-4.5 7.1L4.2 20.4a1.5 1.5 0 0 0 2.1 2.1l10.3-10.3A5 5 0 0 0 21 6.5l-3.5 3.5-2.5-2.5L18.5 4A5 5 0 0 0 19 3z" fill="#9CA3AF" stroke="#333333" strokeWidth="1.5" />
            <rect x="8" y="14" width="3" height="3" fill="#D1D5DB" />
          </svg>
        );

      case 'star':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="#FFD700" stroke="#B8860B" strokeWidth="1.5" />
            <polygon points="12,5 14,10 19,10 15,13 17,18 12,15 7,18 9,13 5,10 10,10" fill="#FFF275" />
          </svg>
        );

      case 'sparkle':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z" fill="#FFE57F" stroke="#E6A800" strokeWidth="1.2" />
            <rect x="11" y="11" width="2" height="2" fill="#FFFFFF" />
          </svg>
        );

      case 'speaker':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <path d="M3 9h4l5-5v16l-5-5H3V9z" fill="#D4D0C8" stroke="#333333" strokeWidth="1.5" />
            <path d="M16 8a5 5 0 0 1 0 8" stroke="#000080" strokeWidth="2" strokeLinecap="square" />
            <path d="M19 5a9 9 0 0 1 0 14" stroke="#000080" strokeWidth="2" strokeLinecap="square" />
          </svg>
        );

      case 'speaker-mute':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <path d="M3 9h4l5-5v16l-5-5H3V9z" fill="#A0A0A0" stroke="#333333" strokeWidth="1.5" />
            <path d="M16 9l6 6M22 9l-6 6" stroke="#C02020" strokeWidth="2" strokeLinecap="square" />
          </svg>
        );

      case 'settings':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <rect x="3" y="5" width="18" height="2" fill="#808080" />
            <rect x="8" y="3" width="4" height="6" fill="#000080" stroke="#222222" strokeWidth="1" />
            <rect x="3" y="11" width="18" height="2" fill="#808080" />
            <rect x="14" y="9" width="4" height="6" fill="#000080" stroke="#222222" strokeWidth="1" />
            <rect x="3" y="17" width="18" height="2" fill="#808080" />
            <rect x="6" y="15" width="4" height="6" fill="#000080" stroke="#222222" strokeWidth="1" />
          </svg>
        );

      case 'check':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <path d="M4 12l5 5L20 7" stroke="#008000" strokeWidth="3" strokeLinecap="square" />
          </svg>
        );

      case 'close':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <path d="M5 5l14 14M19 5L5 19" stroke="#000000" strokeWidth="2.5" strokeLinecap="square" />
          </svg>
        );

      case 'minimize':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <rect x="4" y="18" width="16" height="3" fill="#000000" />
          </svg>
        );

      case 'maximize':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <rect x="4" y="4" width="16" height="16" stroke="#000000" strokeWidth="2.5" fill="none" />
          </svg>
        );

      case 'user':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <rect x="8" y="3" width="8" height="8" fill="#F4C29E" stroke="#333333" strokeWidth="1.5" />
            <rect x="6" y="2" width="12" height="3" fill="#222222" />
            <rect x="4" y="13" width="16" height="8" fill="#1560bd" stroke="#333333" strokeWidth="1.5" />
          </svg>
        );

      case 'arrow-right':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <path d="M4 12h14M12 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
          </svg>
        );

      case 'external':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" />
          </svg>
        );

      case 'github':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );

      case 'lock':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <rect x="5" y="11" width="14" height="10" fill="#E8B830" stroke="#333333" strokeWidth="1.5" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#333333" strokeWidth="2" fill="none" />
            <circle cx="12" cy="16" r="1.5" fill="#333333" />
          </svg>
        );

      case 'clock':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <rect x="2" y="2" width="20" height="20" fill="#FFFFF0" stroke="#333333" strokeWidth="1.5" />
            <line x1="12" y1="6" x2="12" y2="12" stroke="#000080" strokeWidth="2" />
            <line x1="12" y1="12" x2="16" y2="12" stroke="#000080" strokeWidth="2" />
          </svg>
        );

      case 'disc':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <rect x="3" y="3" width="18" height="18" fill="#1560bd" stroke="#333333" strokeWidth="1.5" />
            <rect x="6" y="3" width="12" height="7" fill="#E0E0E0" stroke="#333333" strokeWidth="1" />
            <rect x="8" y="4" width="3" height="5" fill="#333333" />
            <rect x="6" y="13" width="12" height="7" fill="#FFFFFF" />
          </svg>
        );

      case 'download':
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <path d="M12 3v12M6 10l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
            <rect x="4" y="18" width="16" height="2.5" fill="currentColor" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 24 24" width={pixelSize} height={pixelSize} className={`pixel-art-rendering ${className}`} fill="none">
            <rect x="4" y="4" width="16" height="16" fill="#C0C0C0" stroke="#333333" strokeWidth="1.5" />
          </svg>
        );
    }
  };

  return <span className="inline-flex items-center justify-center shrink-0 select-none">{renderIconContent()}</span>;
};
