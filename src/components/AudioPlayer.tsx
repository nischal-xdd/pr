import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Magnetic from './Magnetic';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Using a stable royalty-free ambient track
  const AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3";

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener('click', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-12 left-12 z-[10001]">
      <audio ref={audioRef} src={AUDIO_URL} loop />
      
      <Magnetic strength={0.5}>
        <button
          onClick={togglePlay}
          className="relative group w-12 h-12 flex items-center justify-center border border-white/10 bg-black/50 backdrop-blur-md rounded-full text-white/40 hover:text-neon-cyan hover:border-neon-cyan transition-all"
          data-cursor={isPlaying ? "MUTE" : "PLAY"}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="on"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <Volume2 size={18} />
              </motion.div>
            ) : (
              <motion.div
                key="off"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <VolumeX size={18} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sound wave animation when playing */}
          {isPlaying && (
            <div className="absolute -right-1 flex gap-0.5 items-end h-3">
              {[0.5, 1, 0.7, 1.2, 0.4].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-[1px] bg-neon-cyan"
                  animate={{ height: ['20%', '100%', '20%'] }}
                  transition={{ 
                    duration: 0.5, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut" 
                  }}
                  style={{ height: `${h * 100}%` }}
                />
              ))}
            </div>
          )}
        </button>
      </Magnetic>
      
      {!hasInteracted && !isPlaying && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-[8px] uppercase tracking-[0.2em] font-bold text-white/20 pointer-events-none"
        >
          Click anywhere to enable audio
        </motion.div>
      )}
    </div>
  );
}
