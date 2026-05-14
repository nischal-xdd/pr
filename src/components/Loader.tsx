import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[20000] bg-black flex flex-col items-center justify-center p-6"
    >
      <div className="relative w-full max-w-md">
        {/* Progress Text */}
        <div className="flex justify-between items-end mb-4 font-mono">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Status</span>
            <span className="text-neon-cyan text-sm tracking-widest animate-pulse">
              INITIALIZING_SYSTEM...
            </span>
          </div>
          <div className="flex flex-col items-end">
             <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Progress</span>
             <span className="text-neon-lime text-xl font-bold">{progress}%</span>
          </div>
        </div>

        {/* The Track */}
        <div className="relative h-12 w-full flex items-center overflow-hidden">
          {/* Dots to eat */}
          <div className="absolute inset-0 flex items-center justify-around px-4">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ 
                  opacity: progress > (i + 1) * 12 ? 0 : 1,
                  scale: progress > (i + 1) * 12 ? 0 : 1
                }}
                className="w-1.5 h-1.5 rounded-full bg-white/20"
              />
            ))}
          </div>

          {/* Pacman */}
          <motion.div 
            className="absolute z-10"
            style={{ left: `${progress}%`, x: '-50%' }}
          >
            <div className="relative w-10 h-10">
              {/* Mouth Top */}
              <motion.div 
                className="absolute inset-0 bg-neon-cyan rounded-full"
                style={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%)', backgroundColor: '#00ffff' }}
                animate={{ rotate: [-35, 0, -35] }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              />
              {/* Mouth Bottom */}
              <motion.div 
                className="absolute inset-0 bg-neon-cyan rounded-full"
                style={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%)', backgroundColor: '#00ffff' }}
                animate={{ rotate: [35, 0, 35] }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              />
              {/* Eye */}
              <div className="absolute top-2 left-6 w-1 h-1 bg-black rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Loading Bar Background */}
        <div className="h-[2px] w-full bg-white/10 mt-8">
           <motion.div 
             className="h-full bg-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.5)]"
             style={{ width: `${progress}%` }}
           />
        </div>

        {/* Random Code Snippets */}
        <div className="mt-8 font-mono text-[8px] uppercase tracking-widest text-white/20 overflow-hidden h-4">
          <motion.div
            animate={{ y: [0, -20, -40, -60] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div>{">"} LOADING_ASSETS...</div>
            <div>{">"} COMPILING_MODULES...</div>
            <div>{">"} BOOTSTRAPPING_UI...</div>
            <div>{">"} ESTABLISHING_CONNECTION...</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
