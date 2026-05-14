import { motion } from 'motion/react';
import { Layout, User, Code, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import Magnetic from './Magnetic';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const navItems = [
    { id: 'hero', label: 'Home {"/>"}', icon: Layout },
    { id: 'about', label: 'About {"/>"}', icon: User },
    { id: 'work', label: 'Work {"/>"}', icon: Code },
    { id: 'contact', label: 'Contact {"/>"}', icon: Mail },
  ];

  const socialItems = [
    { icon: Github, href: 'https://github.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Twitter, href: 'https://twitter.com' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 md:w-24 border-r border-white/10 bg-black flex flex-col items-center py-12 z-50">
      <div className="mb-12">
        <div className="w-10 h-10 border-2 border-neon-cyan flex items-center justify-center font-bold text-neon-cyan text-xl">
          N
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-12 justify-center">
        {navItems.map((item) => (
          <Magnetic key={item.id} strength={0.3}>
            <button
              onClick={() => onNavigate(item.id)}
              className={cn(
                "group relative flex items-center justify-center -rotate-90 md:rotate-0",
                activeSection === item.id ? "text-neon-cyan" : "text-white/40 hover:text-white"
              )}
            >
              <span className="hidden md:block text-xs font-medium whitespace-nowrap uppercase tracking-widest transition-all group-hover:tracking-[0.2em]">
                {item.label}
              </span>
              <item.icon className="md:hidden w-5 h-5" />
              {activeSection === item.id && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute -right-12 md:-right-6 w-1 h-1 bg-neon-cyan rounded-full"
                />
              )}
            </button>
          </Magnetic>
        ))}
      </nav>

      <div className="flex flex-col gap-6">
        {socialItems.map((social, index) => (
          <Magnetic key={index} strength={0.5}>
            <a 
              href={social.href} 
              target="_blank" 
              className="text-white/40 hover:text-neon-lime transition-colors"
            >
              <social.icon size={18} />
            </a>
          </Magnetic>
        ))}
      </div>
    </aside>
  );
}
