import React from 'react';

export const BackgroundNetwork: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#008080]">
      {/* 90s Pixel Dither Pattern */}
      <div className="absolute inset-0 retro-desktop-pattern opacity-40" />
    </div>
  );
};
