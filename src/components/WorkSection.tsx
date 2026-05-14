import { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "Quantum Nexus",
    category: "Full-Stack / AI",
    year: "2024",
    image: "https://picsum.photos/seed/nebula/800/600",
    color: "#00ffff"
  },
  {
    id: 2,
    title: "EcoSphere Dashboard",
    category: "Data Visualization",
    year: "2023",
    image: "https://picsum.photos/seed/forest/800/600",
    color: "#39ff14"
  },
  {
    id: 3,
    title: "Aura Creative Studio",
    category: "Branding / Web",
    year: "2023",
    image: "https://picsum.photos/seed/abstract/800/600",
    color: "#ff00ff"
  },
  {
    id: 4,
    title: "Cipher Vault",
    category: "Cybersecurity Platform",
    year: "2022",
    image: "https://picsum.photos/seed/tech/800/600",
    color: "#00ff00"
  }
];

export default function WorkSection() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 100 };
  const previewX = useSpring(mouseX, springConfig);
  const previewY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <Section id="work" className="min-h-screen py-32 px-12 md:px-24">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[1px] bg-neon-lime" />
        <span className="text-sm uppercase tracking-[0.3em] font-medium text-neon-lime">Work {"/>"}</span>
      </div>

      <div className="flex flex-col border-t border-white/10" onMouseMove={handleMouseMove}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative border-b border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5 px-4"
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-12">
                <span className="text-white/20 text-sm font-bold tracking-widest group-hover:text-neon-cyan transition-colors">
                  0{project.id}
                </span>
                <h3 className="text-4xl md:text-6xl font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-16">
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-[10px] uppercase text-white/40 tracking-[0.3em] font-bold">{project.category}</span>
                  <span className="text-sm text-white/60">{project.year}</span>
                </div>
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:bg-neon-lime group-hover:text-black group-hover:border-neon-lime transition-all rounded-full overflow-hidden rotate-45 group-hover:rotate-0">
                   <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Preview */}
      <motion.div
        className="fixed top-0 left-0 w-80 h-48 pointer-events-none z-[8000] overflow-hidden rounded-lg border border-white/20 shadow-2xl"
        style={{
          x: previewX,
          y: previewY,
          translateX: 40,
          translateY: 40,
          opacity: activeProject ? 1 : 0,
          scale: activeProject ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
      >
        {activeProject && (
          <img 
            src={activeProject.image} 
            alt={activeProject.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        )}
      </motion.div>

      <div className="mt-20 flex justify-center">
        <button className="flex items-center gap-4 text-white/40 hover:text-white transition-colors group">
          <span className="text-sm uppercase tracking-[0.5em] font-bold">More Projects</span>
          <div className="w-10 h-[1px] bg-white/40 group-hover:w-20 group-hover:bg-neon-cyan transition-all" />
        </button>
      </div>
    </Section>
  );
}
