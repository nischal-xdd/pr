import { useState } from 'react';
import Section from './Section';
import { Send, Terminal as TerminalIcon } from 'lucide-react';
import Magnetic from './Magnetic';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <Section id="contact" className="min-h-screen py-32 px-12 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-24">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neon-cyan" />
            <span className="text-sm uppercase tracking-[0.3em] font-medium text-neon-cyan">Contact {"/>"}</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-bold mb-12">
            LET'S <br />
            TALK <span className="text-neon-lime">SHOP</span>.
          </h2>

          <div className="space-y-12">
            <div>
              <h4 className="text-[10px] uppercase text-white/40 tracking-[0.5em] font-bold mb-4">Email</h4>
              <p className="text-2xl hover:text-neon-cyan transition-colors cursor-pointer">hello@nischal.design</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase text-white/40 tracking-[0.5em] font-bold mb-4">Social</h4>
              <div className="flex gap-8">
                {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
                  <a key={social} href="#" className="text-lg hover:text-neon-cyan transition-colors uppercase font-medium">{social}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="border border-white/10 bg-white/5 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-12 text-white/40">
              <TerminalIcon size={16} />
              <span className="text-[10px] uppercase tracking-widest font-bold font-mono">Send_Message.sh</span>
            </div>

            <form className="space-y-8">
              <div className="group relative">
                <input 
                  type="text" 
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-neon-cyan transition-colors placeholder:text-white/20 uppercase text-sm font-bold tracking-widest"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-focus-within:w-full" />
              </div>

              <div className="group relative">
                <input 
                  type="email" 
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-neon-cyan transition-colors placeholder:text-white/20 uppercase text-sm font-bold tracking-widest"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-focus-within:w-full" />
              </div>

              <div className="group relative">
                <textarea 
                  rows={4}
                  placeholder="MESSAGE"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-neon-cyan transition-colors placeholder:text-white/20 uppercase text-sm font-bold tracking-widest resize-none"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-focus-within:w-full" />
              </div>

              <Magnetic>
                <button 
                  type="submit"
                  className="w-full py-5 bg-neon-cyan text-black font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-neon-lime transition-colors group mt-12"
                >
                  Initiate Connection
                  <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center text-[10px] uppercase text-white/20 font-bold tracking-[0.2em]">
        <div>© 2024 Ultimate Nischal. All bits reserved.</div>
        <div>Built with React + Framer Motion</div>
      </footer>
    </Section>
  );
}
