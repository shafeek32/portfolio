import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RetroWindow } from './RetroWindow';
import { playRetroSound } from '../utils/sound';

interface SnakeWindowProps {
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

type Point = { x: number; y: number };

const GRID_SIZE = 16;
const INITIAL_SNAKE: Point[] = [
  { x: 8, y: 8 },
  { x: 8, y: 9 },
  { x: 8, y: 10 },
];
const INITIAL_DIRECTION: Point = { x: 0, y: -1 };

export const SnakeWindow: React.FC<SnakeWindowProps> = ({
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
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Point>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Point>({ x: 4, y: 4 });
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const directionRef = useRef<Point>(INITIAL_DIRECTION);
  directionRef.current = direction;

  const generateFood = useCallback((currentSnake: Point[]) => {
    let newFood: Point;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      if (!currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)) {
        break;
      }
    }
    return newFood;
  }, []);

  const resetGame = () => {
    playRetroSound('click');
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setScore(0);
    setIsGameOver(false);
    setIsPaused(false);
    setGameStarted(true);
    setFood(generateFood(INITIAL_SNAKE));
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || isMinimized || !isActive) return;

      const curr = directionRef.current;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (curr.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (curr.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (curr.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (curr.x !== -1) setDirection({ x: 1, y: 0 });
          break;
        case ' ':
          setIsPaused((p) => !p);
          break;
      }
    },
    [isOpen, isMinimized, isActive]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Main game loop tick
  useEffect(() => {
    if (!gameStarted || isGameOver || isPaused) return;

    const tick = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const newHead: Point = {
          x: head.x + directionRef.current.x,
          y: head.y + directionRef.current.y,
        };

        // Check wall collision
        if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
          playRetroSound('error');
          setIsGameOver(true);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
          playRetroSound('error');
          setIsGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          playRetroSound('blip');
          setScore((s) => {
            const nextScore = s + 10;
            setHighScore((hs) => Math.max(hs, nextScore));
            return nextScore;
          });
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 130);

    return () => clearInterval(tick);
  }, [gameStarted, isGameOver, isPaused, food, generateFood]);

  if (!isOpen || isMinimized) return null;

  return (
    <RetroWindow
      id="snake"
      title="Snake_1997.exe"
      icon="settings"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['Game', 'Speed', 'Help']}
      statusBarLeft={`Score: ${score} | High: ${highScore}`}
      statusBarRight={<span>{isGameOver ? 'GAME OVER' : isPaused ? 'PAUSED' : 'Press Arrows'}</span>}
      style={style}
      className={`w-full max-w-[340px] shadow-2xl ${className}`}
      bodyClassName="p-2.5 sm:p-3 bg-[#C0C0C0]"
      dragConstraintsRef={dragConstraintsRef}
    >
      <div className="flex flex-col items-center select-none font-mono">
        {/* Retro Game Header */}
        <div className="retro-inset p-2 bg-[#98A888] border-2 border-black w-full flex items-center justify-between mb-2 text-black text-xs font-bold font-mono shadow-inner">
          <div>SCORE: {score.toString().padStart(4, '0')}</div>
          <div>HIGH: {highScore.toString().padStart(4, '0')}</div>
        </div>

        {/* Snake LCD Screen */}
        <div className="relative border-4 border-[#333333] bg-[#889878] p-1 shadow-inner">
          <div
            className="grid grid-cols-16 grid-rows-16 bg-[#889878] w-[240px] h-[240px] border border-[#556644]"
            style={{
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
            }}
          >
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, idx) => {
              const x = idx % GRID_SIZE;
              const y = Math.floor(idx / GRID_SIZE);

              const isHead = snake[0]?.x === x && snake[0]?.y === y;
              const isBody = snake.slice(1).some((s) => s.x === x && s.y === y);
              const isFood = food.x === x && food.y === y;

              return (
                <div
                  key={idx}
                  className={`w-full h-full ${
                    isHead
                      ? 'bg-[#112211] rounded-none'
                      : isBody
                      ? 'bg-[#223322] border-[0.5px] border-[#889878]'
                      : isFood
                      ? 'bg-[#000000] animate-ping'
                      : 'border-[0.2px] border-[#7d8d6d]/40'
                  }`}
                />
              );
            })}
          </div>

          {/* Overlay Prompts */}
          {(!gameStarted || isGameOver) && (
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center p-3 font-mono space-y-2">
              <div className="text-sm font-bold text-[#00FF66]">
                {isGameOver ? 'GAME OVER!' : 'RETRO SNAKE'}
              </div>
              <div className="text-[11px] text-gray-200">
                Use Arrow Keys or WASD to navigate.
              </div>
              <button
                type="button"
                onClick={resetGame}
                className="retro-btn px-3 py-1 text-xs font-bold bg-[#D4D0C8] text-black hover:bg-white"
              >
                {isGameOver ? 'Play Again' : 'Start Game'}
              </button>
            </div>
          )}
        </div>

        {/* D-Pad Buttons for Mobile / Click Navigation */}
        <div className="mt-2.5 flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={() => {
              if (directionRef.current.y !== 1) setDirection({ x: 0, y: -1 });
            }}
            className="retro-btn w-8 h-7 flex items-center justify-center font-bold text-xs"
          >
            ▲
          </button>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => {
                if (directionRef.current.x !== 1) setDirection({ x: -1, y: 0 });
              }}
              className="retro-btn w-8 h-7 flex items-center justify-center font-bold text-xs"
            >
              ◀
            </button>
            <button
              type="button"
              onClick={() => {
                if (directionRef.current.y !== -1) setDirection({ x: 0, y: 1 });
              }}
              className="retro-btn w-8 h-7 flex items-center justify-center font-bold text-xs"
            >
              ▼
            </button>
            <button
              type="button"
              onClick={() => {
                if (directionRef.current.x !== -1) setDirection({ x: 1, y: 0 });
              }}
              className="retro-btn w-8 h-7 flex items-center justify-center font-bold text-xs"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </RetroWindow>
  );
};
