import React, { useState } from 'react';
import { RetroWindow } from './RetroWindow';
import { PixelIcon } from './PixelIcon';
import { playRetroSound } from '../utils/sound';

interface RecycleBinWindowProps {
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

interface TrashedItem {
  id: string;
  name: string;
  originalLocation: string;
  size: string;
  type: string;
}

const INITIAL_TRASH: TrashedItem[] = [
  { id: '1', name: 'bugs_fixed_2024.tar.gz', originalLocation: 'C:\\PROD\\BUGS', size: '1.4 MB', type: 'Archive' },
  { id: '2', name: 'legacy_jquery_1.4.min.js', originalLocation: 'C:\\WEB\\SCRIPTS', size: '94 KB', type: 'JavaScript' },
  { id: '3', name: 'infinite_while_loop.tmp', originalLocation: 'C:\\TEMP', size: '0 KB', type: 'Temporary' },
  { id: '4', name: 'cold_coffee_cup.obj', originalLocation: 'C:\\DESK', size: '350 ml', type: 'Object' },
  { id: '5', name: 'imposter_syndrome.exe', originalLocation: 'C:\\BRAIN', size: '999 GB', type: 'Deleted Virus' },
];

export const RecycleBinWindow: React.FC<RecycleBinWindowProps> = ({
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
  const [items, setItems] = useState<TrashedItem[]>(INITIAL_TRASH);

  if (!isOpen || isMinimized) return null;

  const handleEmpty = () => {
    playRetroSound('close');
    setItems([]);
  };

  const handleRestore = () => {
    playRetroSound('open');
    setItems(INITIAL_TRASH);
  };

  return (
    <RetroWindow
      id="recycle"
      title="Recycle Bin"
      icon="trash"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['File', 'Edit', 'View', 'Help']}
      statusBarLeft={`${items.length} objects`}
      statusBarRight={<span>Recycle Bin</span>}
      style={style}
      className={`w-full max-w-md shadow-2xl ${className}`}
      bodyClassName="p-3 bg-[#C0C0C0]"
      dragConstraintsRef={dragConstraintsRef}
    >
      <div className="space-y-2.5 font-mono text-xs">
        {/* Action ribbon */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleEmpty}
            disabled={items.length === 0}
            className="retro-btn px-2 py-0.5 text-[11px] font-bold disabled:opacity-50"
          >
            Empty Recycle Bin
          </button>
          {items.length === 0 && (
            <button
              type="button"
              onClick={handleRestore}
              className="retro-btn px-2 py-0.5 text-[11px] font-bold"
            >
              Restore Items
            </button>
          )}
        </div>

        {/* File Table Inset */}
        <div className="retro-inset bg-white p-2 min-h-[140px] max-h-[220px] overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center text-gray-400 py-8 text-xs">
              Recycle Bin is empty.
            </div>
          ) : (
            <table className="w-full text-left text-[11px] border-collapse">
              <thead>
                <tr className="border-b border-[#A0A0A0] text-gray-600">
                  <th className="pb-1 font-bold">Name</th>
                  <th className="pb-1 font-bold">Path</th>
                  <th className="pb-1 font-bold text-right">Size</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-[#000080] hover:text-white group cursor-default">
                    <td className="py-0.5 flex items-center gap-1 truncate">
                      <PixelIcon name="document" size={12} />
                      <span className="truncate">{item.name}</span>
                    </td>
                    <td className="py-0.5 text-gray-500 group-hover:text-white truncate">{item.originalLocation}</td>
                    <td className="py-0.5 text-right text-gray-500 group-hover:text-white">{item.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </RetroWindow>
  );
};
