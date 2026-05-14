import { motion } from 'motion/react';
import Section from './Section';
import Magnetic from './Magnetic';
import { ArrowRight, Terminal } from 'lucide-react';

export default function HeroSection() {
  return (
    <Section id="hero" className="min-h-screen flex flex-col justify-center px-12 md:px-24">
      <div className="max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 text-neon-lime mb-6"
        >
          <Terminal size={18} />
          <span className="text-sm font-medium tracking-[0.3em] uppercase">Status: Available for Work</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/40 text-sm font-bold tracking-[0.4em] uppercase mb-2"
        >
          Nischal Adhikari
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          GRAPHICS <br />
          <span className="text-neon-cyan text-glow-cyan">DESIGNER</span>
        </motion.h1>

        <motion.p 
          className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Specializing in crafting premium visual identities, high-end branding, 
          and immersive motion graphics with a focus on aesthetic excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-8"
        >
          <Magnetic>
            <button 
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-neon-lime transition-colors group"
              data-cursor="VIEW"
            >
              Latest Work
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Magnetic>

          <div className="flex flex-col justify-center">
            <span className="text-[10px] uppercase text-white/40 tracking-widest mb-1">Creative toolkit</span>
            <div className="text-sm font-medium text-white/80">
              Figma / Photoshop / Illustrator / After Effects
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 right-12 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-white/20" />
          <span className="text-[10px] uppercase tracking-[0.5em] -rotate-90 origin-right translate-x-12">Scroll</span>
        </div>
      </motion.div>
    </Section>
  );
}
