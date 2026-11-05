import { 
  ArrowDown, 
  Briefcase, 
  Award, 
  Sparkles, 
  ExternalLink, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Globe2, 
  Layers, 
  Rocket, 
  Bot, 
  Flame,
  Cloud
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn, getAssetPath } from '@/lib/utils';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import { useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResumeModal } from './ResumeModal';
import { AnimatedCounter } from './AnimatedCounter';

const dynamicHeadlines = [
  "High-Conversion BigCommerce Storefronts",
  "Global Retail Stores across 🇨🇦 & 🇦🇺",
  "Next.js & Catalyst Headless Architecture (Nova)",
  "AI Vibe-Coded Prototypes & Rapid Workflows"
];

export const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  // Rotate tagline every 3.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicHeadlines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-950 text-white overflow-hidden pt-24 pb-16">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#8B5CF6", "#6e59a5", "#38bdf8", "#ec4899"],
            },
            links: {
              color: "#8B5CF6",
              distance: 140,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 75,
            },
            opacity: {
              value: 0.25,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Decorative gradient glow orbs with breathing animation */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-portfolio-accent/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-portfolio-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 items-center gap-12 lg:gap-8">
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status & Role Badges */}
            <div
              ref={titleRef}
              className={cn(
                'transition-all duration-1000 delay-100',
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-3">
                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-sm shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Available for Opportunities
                </span>
                <span className="inline-block py-1 px-3 rounded-full bg-portfolio-accent/20 border border-portfolio-accent/30 text-portfolio-secondary text-xs font-semibold tracking-wide backdrop-blur-sm">
                  Front-End & E-Commerce Web Engineer
                </span>
              </div>

              {/* International Client Trust Pill */}
              <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-gradient-to-r from-blue-950/60 to-purple-950/60 border border-blue-500/30 text-blue-200 text-xs font-medium mb-4 backdrop-blur-sm shadow-xs hover:border-blue-400/50 transition-colors">
                <Globe2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>
                  Delivering for International Clients across <strong>🇨🇦 Canada</strong>, <strong>🇦🇺 Australia</strong> & <strong>🇺🇸 USA</strong>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 leading-tight">
                Hi, I'm <span className="animated-gradient-text">Adarsh RG</span>
              </h1>

              {/* Dynamic Animated Rotating Sub-headline */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden mb-4">
                <span className="text-gray-400 text-sm sm:text-lg mr-2 font-medium">I engineer</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={textIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-portfolio-secondary font-bold text-sm sm:text-lg md:text-xl truncate"
                  >
                    {dynamicHeadlines[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Subtitle / Positioning Statement */}
            <div
              ref={subtitleRef}
              className={cn(
                'max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-300',
                subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                Web Developer with <span className="text-white font-semibold">4 years of production experience</span> specializing in <span className="text-white font-semibold">BigCommerce Stencil</span> storefronts for international brands. Actively advancing future-ready engineering competencies in <span className="text-purple-300 font-medium">BigCommerce Catalyst</span>, <span className="text-purple-300 font-medium">Next.js & Vercel deployment</span>, and <span className="text-purple-300 font-medium">AI-driven workflows</span> alongside a foundation in the MERN stack.
              </p>

              {/* Latest Launches Focus Box */}
              <div className="inline-flex items-center gap-2 p-2.5 px-3.5 rounded-xl bg-gray-900/90 border border-gray-800 text-xs text-gray-300 mb-8 backdrop-blur-sm shadow-md">
                <Sparkles className="w-4 h-4 text-portfolio-accent shrink-0" />
                <span>
                  <strong>Latest Launches:</strong> Live Canadian store (<a href="https://letstalkflowers.ca/" target="_blank" rel="noopener noreferrer" className="underline text-purple-300 hover:text-white font-medium">Let's Talk Flowers</a>) + Vercel deployment (<a href="https://nova-ecommerce-pofqlbegt-projects-9356.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline text-purple-300 hover:text-white font-medium">Nova E-Commerce</a>).
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className={cn(
                'flex flex-wrap items-center justify-center lg:justify-start gap-3.5 transition-all duration-1000 delay-500 mb-10',
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <a 
                href="#projects" 
                className="shimmer-btn px-6 py-3 rounded-xl bg-portfolio-accent text-white font-medium hover:bg-portfolio-primary transition-all duration-300 shadow-lg shadow-portfolio-accent/30 hover:shadow-portfolio-accent/50 hover:-translate-y-0.5 inline-flex items-center gap-2 group"
              >
                <Briefcase size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>View Projects</span>
              </a>

              <a 
                href="#contact" 
                className="px-6 py-3 rounded-xl border border-gray-700 bg-gray-900/70 text-white font-medium hover:bg-gray-800 hover:border-portfolio-accent transition-all duration-300 backdrop-blur-sm inline-flex items-center gap-2"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="shimmer-btn px-6 py-3 rounded-xl border border-purple-500/40 bg-purple-950/40 text-purple-200 font-medium hover:bg-purple-900/60 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm inline-flex items-center gap-2"
              >
                <FileText size={18} />
                <span>View Resume</span>
              </button>
            </div>

            {/* Animated Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0 pt-4 border-t border-gray-800/80">
              <div className="p-3.5 rounded-xl bg-gray-900/50 border border-gray-800/60 backdrop-blur-sm text-left hover:border-portfolio-accent/50 transition-colors">
                <div className="text-2xl font-bold text-white tracking-tight">
                  <AnimatedCounter to={4} suffix="+ Yrs" />
                </div>
                <div className="text-xs text-gray-400">Production Experience</div>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-900/50 border border-gray-800/60 backdrop-blur-sm text-left hover:border-portfolio-accent/50 transition-colors">
                <div className="text-2xl font-bold text-white tracking-tight">
                  <AnimatedCounter to={7} suffix="+" />
                </div>
                <div className="text-xs text-gray-400">Global Stores (🇨🇦, 🇦🇺, 🇺🇸)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-900/50 border border-gray-800/60 backdrop-blur-sm text-left hover:border-portfolio-accent/50 transition-colors">
                <div className="text-2xl font-bold text-emerald-400 tracking-tight">Certified</div>
                <div className="text-xs text-gray-400">Full-Stack B-Commerce</div>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-900/50 border border-gray-800/60 backdrop-blur-sm text-left hover:border-portfolio-accent/50 transition-colors">
                <div className="text-2xl font-bold text-purple-300 tracking-tight">Nova & Vercel</div>
                <div className="text-xs text-gray-400">Next.js Cloud Coursework</div>
              </div>
            </div>
          </div>

          {/* Profile Picture with Floating Orbiting Badges (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 mx-auto">
              {/* Outer glowing pulsing background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-portfolio-accent via-purple-500 to-cyan-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full border-4 border-portfolio-accent/40 shadow-2xl overflow-hidden bg-gray-900 floating-image z-10">
                <img 
                  src={getAssetPath('/Portfolio2025/Media-profile.jpg')} 
                  alt="Adarsh RG" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>

              {/* Floating Orbiting Badges */}
              {/* Badge 1: BigCommerce (Top-Left) */}
              <div className="floating-badge-1 absolute -top-2 -left-4 sm:-left-6 bg-gray-900/90 border border-amber-500/40 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-1.5 z-20 hover:scale-110 transition-transform">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-bold text-amber-300">BigCommerce Specialist</span>
              </div>

              {/* Badge 2: Next.js & Vercel (Top-Right) */}
              <div className="floating-badge-2 absolute -top-2 -right-4 sm:-right-6 bg-gray-900/90 border border-cyan-500/40 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-1.5 z-20 hover:scale-110 transition-transform">
                <Cloud className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-bold text-cyan-300">Next.js & Vercel (Nova)</span>
              </div>

              {/* Badge 3: Global Clients (Bottom-Left) */}
              <div className="floating-badge-3 absolute -bottom-2 -left-4 sm:-left-6 bg-gray-900/90 border border-blue-500/40 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-1.5 z-20 hover:scale-110 transition-transform">
                <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px] font-bold text-blue-300">🇨🇦 🇦🇺 Global Clients</span>
              </div>

              {/* Badge 4: AI Vibe Coding (Bottom-Right) */}
              <div className="floating-badge-4 absolute -bottom-2 -right-4 sm:-right-6 bg-gray-900/90 border border-purple-500/40 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-1.5 z-20 hover:scale-110 transition-transform">
                <Bot className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] font-bold text-purple-300">⚡ AI Vibe Coding</span>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="flex items-center gap-4 mt-10">
              <a 
                href="https://github.com/AdarshRG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900/90 border border-gray-800 text-gray-400 hover:text-white hover:border-portfolio-accent hover:bg-portfolio-accent/20 transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/adarsh-rg-367a0a1ba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900/90 border border-gray-800 text-gray-400 hover:text-white hover:border-portfolio-accent hover:bg-portfolio-accent/20 transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:rg.adarsh1@gmail.com" 
                className="p-3 rounded-full bg-gray-900/90 border border-gray-800 text-gray-400 hover:text-white hover:border-portfolio-accent hover:bg-portfolio-accent/20 transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="Email Adarsh"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-portfolio-accent transition-colors">
          <span className="text-xs mb-1 font-medium tracking-wider uppercase">Scroll Down</span>
          <ArrowDown size={18} />
        </a>
      </div>

      {/* Resume Modal */}
      <ResumeModal open={isResumeOpen} onOpenChange={setIsResumeOpen} />
    </section>
  );
};

export default Hero;
