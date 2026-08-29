import React, { useState, useEffect, useCallback } from 'react';
import { RetroWindow } from './RetroWindow';
import { playRetroSound } from '../utils/sound';

interface MinesweeperWindowProps {
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

type CellValue = {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighborCount: number;
};

const ROWS = 9;
const COLS = 9;
const MINES = 10;

const NUMBER_COLORS: Record<number, string> = {
  1: '#0000FF', // Blue
  2: '#008000', // Green
  3: '#FF0000', // Red
  4: '#000080', // Navy
  5: '#800000', // Maroon
  6: '#008080', // Teal
  7: '#000000', // Black
  8: '#808080', // Gray
};

export const MinesweeperWindow: React.FC<MinesweeperWindowProps> = ({
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
  const [grid, setGrid] = useState<CellValue[][]>([]);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'won' | 'lost'>('idle');
  const [flagsLeft, setFlagsLeft] = useState<number>(MINES);
  const [timer, setTimer] = useState<number>(0);
  const [flagMode, setFlagMode] = useState<boolean>(false);

  // Initialize fresh board
  const initBoard = useCallback(() => {
    const newGrid: CellValue[][] = Array(ROWS)
      .fill(null)
      .map(() =>
        Array(COLS)
          .fill(null)
          .map(() => ({
            isMine: false,
            isRevealed: false,
            isFlagged: false,
            neighborCount: 0,
          }))
      );

    // Place mines randomly
    let placed = 0;
    while (placed < MINES) {
      const r = Math.floor(Math.random() * ROWS);
      const c = Math.floor(Math.random() * COLS);
      if (!newGrid[r][c].isMine) {
        newGrid[r][c].isMine = true;
        placed++;
      }
    }

    // Compute neighbor counts
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!newGrid[r][c].isMine) {
          let count = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const nr = r + dr;
              const nc = c + dc;
              if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && newGrid[nr][nc].isMine) {
                count++;
              }
            }
          }
          newGrid[r][c].neighborCount = count;
        }
      }
    }

    setGrid(newGrid);
    setGameState('idle');
    setFlagsLeft(MINES);
    setTimer(0);
  }, []);

  useEffect(() => {
    if (isOpen) initBoard();
  }, [isOpen, initBoard]);

  // Timer counter
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState === 'playing') {
      interval = setInterval(() => {
        setTimer((t) => Math.min(999, t + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState]);

  if (!isOpen || isMinimized) return null;

  // Reveal flood fill
  const revealCell = (r: number, c: number) => {
    if (gameState === 'won' || gameState === 'lost') return;
    if (grid[r][c].isRevealed || grid[r][c].isFlagged) return;

    if (gameState === 'idle') {
      setGameState('playing');
    }

    const nextGrid = grid.map((row) => row.map((cell) => ({ ...cell })));

    if (nextGrid[r][c].isMine) {
      // Hit mine -> Game Over
      playRetroSound('error');
      // Reveal all mines
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          if (nextGrid[row][col].isMine) {
            nextGrid[row][col].isRevealed = true;
          }
        }
      }
      setGrid(nextGrid);
      setGameState('lost');
      return;
    }

    playRetroSound('click');

    const queue: [number, number][] = [[r, c]];
    nextGrid[r][c].isRevealed = true;

    while (queue.length > 0) {
      const [currR, currC] = queue.shift()!;
      if (nextGrid[currR][currC].neighborCount === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = currR + dr;
            const nc = currC + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
              const neighbor = nextGrid[nr][nc];
              if (!neighbor.isRevealed && !neighbor.isFlagged && !neighbor.isMine) {
                neighbor.isRevealed = true;
                if (neighbor.neighborCount === 0) {
                  queue.push([nr, nc]);
                }
              }
            }
          }
        }
      }
    }

    // Check for win
    let unrevealedSafeCells = 0;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (!nextGrid[row][col].isMine && !nextGrid[row][col].isRevealed) {
          unrevealedSafeCells++;
        }
      }
    }

    if (unrevealedSafeCells === 0) {
      playRetroSound('startup');
      setGameState('won');
    }

    setGrid(nextGrid);
  };

  const toggleFlag = (e: React.MouseEvent, r: number, c: number) => {
    e.preventDefault();
    if (gameState === 'won' || gameState === 'lost') return;
    if (grid[r][c].isRevealed) return;

    playRetroSound('blip');
    const nextGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
    const curr = nextGrid[r][c];

    if (!curr.isFlagged && flagsLeft > 0) {
      curr.isFlagged = true;
      setFlagsLeft((f) => f - 1);
    } else if (curr.isFlagged) {
      curr.isFlagged = false;
      setFlagsLeft((f) => f + 1);
    }

    setGrid(nextGrid);
  };

  const handleCellClick = (e: React.MouseEvent, r: number, c: number) => {
    if (flagMode || e.button === 2) {
      toggleFlag(e, r, c);
    } else {
      revealCell(r, c);
    }
  };

  const getSmiley = () => {
    switch (gameState) {
      case 'won':
        return '😎';
      case 'lost':
        return '😵';
      default:
        return '🙂';
    }
  };

  const format3Digits = (n: number) => {
    return Math.max(0, Math.min(999, n)).toString().padStart(3, '0');
  };

  return (
    <RetroWindow
      id="minesweeper"
      title="Minesweeper.exe"
      icon="settings"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['Game', 'Options', 'Help']}
      statusBarLeft={gameState === 'won' ? '★ YOU WON!' : gameState === 'lost' ? 'GAME OVER' : 'Playing'}
      statusBarRight={<span>9x9 Grid (10 Mines)</span>}
      style={style}
      className={`w-full max-w-[340px] shadow-2xl ${className}`}
      bodyClassName="p-2 sm:p-3 bg-[#C0C0C0]"
      dragConstraintsRef={dragConstraintsRef}
    >
      <div className="flex flex-col items-center select-none font-mono">
        {/* Top Control LCD Bar */}
        <div className="retro-inset p-2 bg-[#C0C0C0] w-full flex items-center justify-between mb-2">
          {/* Remaining Mines LCD */}
          <div className="bg-black text-red-600 font-mono font-bold text-lg px-1.5 py-0.5 border border-[#808080] tracking-widest">
            {format3Digits(flagsLeft)}
          </div>

          {/* Smiley Reset Button */}
          <button
            type="button"
            onClick={() => {
              playRetroSound('click');
              initBoard();
            }}
            className="retro-btn w-8 h-8 flex items-center justify-center text-lg active:scale-95"
            title="New Game"
          >
            {getSmiley()}
          </button>

          {/* Timer LCD */}
          <div className="bg-black text-red-600 font-mono font-bold text-lg px-1.5 py-0.5 border border-[#808080] tracking-widest">
            {format3Digits(timer)}
          </div>
        </div>

        {/* Mobile flag toggle button */}
        <div className="w-full flex justify-between items-center mb-1.5 px-1 text-xs">
          <button
            type="button"
            onClick={() => {
              playRetroSound('blip');
              setFlagMode(!flagMode);
            }}
            className={`retro-btn px-2 py-0.5 text-[10px] font-bold flex items-center gap-1 ${
              flagMode ? 'bg-[#FFBF00] text-black font-extrabold' : ''
            }`}
          >
            <span>🚩 Flag Mode:</span>
            <span>{flagMode ? 'ON' : 'OFF'}</span>
          </button>

          <span className="text-[10px] text-gray-600 hidden sm:inline">Right-click to flag</span>
        </div>

        {/* 9x9 Minesweeper Grid */}
        <div className="retro-inset p-1 bg-[#808080] inline-block">
          <div className="grid grid-cols-9 gap-[1px] bg-[#808080]">
            {grid.map((row, r) =>
              row.map((cell, c) => (
                <button
                  key={`${r}-${c}`}
                  type="button"
                  onContextMenu={(e) => toggleFlag(e, r, c)}
                  onClick={(e) => handleCellClick(e, r, c)}
                  className={`w-6 h-6 sm:w-7 sm:h-7 text-xs font-bold font-mono flex items-center justify-center p-0 select-none ${
                    cell.isRevealed
                      ? cell.isMine
                        ? 'bg-red-600 border border-[#808080]'
                        : 'bg-[#C0C0C0] border border-[#808080] border-t-[#606060] border-l-[#606060]'
                      : 'retro-btn bg-[#C0C0C0] hover:bg-[#D4D0C8]'
                  }`}
                >
                  {cell.isRevealed ? (
                    cell.isMine ? (
                      '💣'
                    ) : cell.neighborCount > 0 ? (
                      <span style={{ color: NUMBER_COLORS[cell.neighborCount] || '#000000' }}>
                        {cell.neighborCount}
                      </span>
                    ) : null
                  ) : cell.isFlagged ? (
                    '🚩'
                  ) : null}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </RetroWindow>
  );
};
