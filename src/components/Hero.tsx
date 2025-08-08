import { ArrowDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import { useCallback } from 'react';

export const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-900 text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#111827",
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
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-8">
        <div className="text-center md:text-left">
          <div
            ref={titleRef}
            className={cn(
              'transition-all duration-1000 delay-100',
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-portfolio-accent/20 text-portfolio-accent text-sm font-medium mb-4">
              Front-End Web Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Hi, I'm <span className="animated-gradient-text">Adarsh RG</span>
            </h1>
          </div>

          <div
            ref={subtitleRef}
            className={cn(
              'max-w-2xl transition-all duration-1000 delay-300',
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Web Developer with 3 years of experience specializing in BigCommerce and basics of MERN stack,
              creating engaging and functional digital experiences.
            </p>
          </div>

          <div
            ref={ctaRef}
            className={cn(
              'flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 justify-center md:justify-start',
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-portfolio-accent text-white font-medium hover:bg-portfolio-primary transition-colors duration-300 card-hover animate-pulse"
            >
              Contact Me
            </a>
            <a 
              href="https://github.com/AdarshRG" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 rounded-lg border-2 border-portfolio-accent text-portfolio-accent font-medium hover:bg-portfolio-accent/20 transition-colors duration-300 card-hover"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative w-80 h-80 mx-auto floating-image">
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-full blur-2xl opacity-50"></div>
            <img 
              src="/Media-profile.jpg" 
              alt="Adarsh RG" 
              className="relative rounded-full w-full h-full object-cover shadow-2xl" 
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white hover:text-portfolio-accent transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
