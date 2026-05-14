import Section from './Section';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const aboutCode = `class GraphicsDesigner {
  constructor() {
    this.name = "Ultimate Nischal";
    this.role = "Creative Director / Designer";
    this.focus = "Visual Storytelling & Branding";
    this.location = "Global / Remote";
  }

  getSkills() {
    return [
      "Figma", "Adobe Photoshop", "Adobe Illustrator", 
      "After Effects", "InDesign", "Webflow", 
      "3D Modeling", "UI/UX Design", "Motion Graphics", 
      "Typography", "Brand Identity", "Photography"
    ];
  }

  getPhilosophy() {
    return {
      aesthetic: "Minimalist, bold, impactful",
      process: "Research-driven, iterative",
      outcome: "Memorable brand experiences"
    };
  }

  hireMe() {
    if (this.readyForNewChallenges) {
      return "Let's turn your vision into reality.";
    }
  }
}`;

export default function AboutSection() {
  return (
    <Section id="about" className="min-h-screen py-32 px-12 md:px-24">
      <div className="flex flex-col lg:flex-row gap-16 h-full items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neon-cyan" />
            <span className="text-sm uppercase tracking-[0.3em] font-medium text-neon-cyan">About {"/>"}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            I craft visual identities that <br />
            <span className="text-neon-lime italic">blend aesthetics</span> <br />
            with strategic soul.
          </h2>

          <p className="text-white/60 text-lg max-w-xl mb-8 leading-relaxed">
            With over half a decade of experience in the creative industry, I help 
            startups and established brands bring their visions to life 
            through bold, elegant design solutions.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">05+</div>
              <div className="text-[10px] uppercase text-white/40 tracking-widest font-bold">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-[10px] uppercase text-white/40 tracking-widest font-bold">Projects Done</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan/20 to-neon-lime/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative border border-white/10 bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="flex items-center gap-2 px-4 py-3 border-bottom border-white/5 bg-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <span className="ml-2 text-[10px] uppercase tracking-widest text-white/40 font-bold">About.design</span>
              </div>
              <div className="p-2 md:p-6 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto">
                <SyntaxHighlighter 
                  language="typescript" 
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', padding: 0 }}
                  codeTagProps={{ style: { background: 'transparent' } }}
                >
                  {aboutCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
