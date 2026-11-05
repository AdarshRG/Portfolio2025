import { Heart, Linkedin, Github, ArrowUp, Mail, Code2, Globe2 } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-950 text-white pt-14 pb-12 relative border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-gray-800/80">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-black gradient-text tracking-tight inline-block mb-1">
              Adarsh RG
            </a>
            <p className="text-xs text-gray-400 font-medium">
              Front-End & E-Commerce Web Engineer
            </p>
            <p className="text-[11px] text-gray-500 mt-1 flex items-center justify-center md:justify-start gap-1">
              <Globe2 size={12} className="text-blue-400" />
              <span>Delivering for clients in Canada 🇨🇦, Australia 🇦🇺 & USA 🇺🇸</span>
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center items-center space-x-5">
            <a 
              href="https://www.linkedin.com/in/adarsh-rg-367a0a1ba/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-portfolio-accent transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/AdarshRG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-portfolio-accent transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:rg.adarsh1@gmail.com" 
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-portfolio-accent transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          {/* Copyright & Signoff */}
          <div className="text-center md:text-right text-xs text-gray-400">
            <p className="flex items-center justify-center md:justify-end gap-1 mb-1 text-gray-300">
              <span>Made with</span>
              <Heart size={14} className="text-rose-500 fill-rose-500 inline" />
              <span>by Adarsh RG</span>
            </p>
            <p className="text-gray-500 text-[11px]">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-wrap items-center justify-between text-[11px] text-gray-500 gap-2">
          <div>
            <span>Primary Production Focus: </span>
            <span className="text-gray-300">BigCommerce Stencil & Global Client Storefronts</span>
          </div>
          <div>
            <span>Cloud & Coursework: </span>
            <span className="text-purple-400">Next.js (Nova on Vercel) • Catalyst • AI Vibe Coding • AWS Basics</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="absolute -top-5 right-6 md:right-12 bg-portfolio-accent hover:bg-portfolio-primary text-white p-3 rounded-full shadow-lg hover:shadow-portfolio-accent/40 transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
