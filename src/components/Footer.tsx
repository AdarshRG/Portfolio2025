
import { Heart, Linkedin, Github, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-portfolio-dark text-white py-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold gradient-text">
              Adarsh RG
            </a>
            <p className="mt-2 text-gray-400">Front-End Web Developer</p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/adarsh-rg-367a0a1ba/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform duration-300 ease-in-out hover:scale-125"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/AdarshRG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform duration-300 ease-in-out hover:scale-125"
            >
              <Github size={24} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end text-gray-400 mb-2">
              Made by Adarsh RG
            </p>
            <p className="text-gray-500">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="absolute -top-5 right-10 bg-portfolio-accent text-white p-3 rounded-full shadow-lg hover:bg-portfolio-primary transition-all duration-300 animate-bounce"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
