import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

interface HeaderProps {
  onOpenResume?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = navigation.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' 
          : 'bg-gray-950/40 backdrop-blur-xs py-4 md:py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="text-xl font-extrabold tracking-tight flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-portfolio-primary to-portfolio-accent flex items-center justify-center text-white text-sm font-black shadow-md group-hover:scale-105 transition-transform">
            A
          </span>
          <span className={cn(
            "transition-colors font-bold",
            scrolled ? "text-gray-900" : "text-white"
          )}>
            Adarsh <span className="text-portfolio-accent">RG</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <ul className="flex space-x-6 lg:space-x-7">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      'text-xs lg:text-sm font-medium transition-all relative py-1',
                      scrolled 
                        ? (isActive ? 'text-portfolio-accent font-semibold' : 'text-gray-600 hover:text-portfolio-accent')
                        : (isActive ? 'text-portfolio-accent font-semibold' : 'text-gray-300 hover:text-white')
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-portfolio-accent rounded-full animate-fade-in" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Quick Resume CTA Button */}
          {onOpenResume && (
            <Button
              size="sm"
              onClick={onOpenResume}
              className={cn(
                'text-xs font-semibold rounded-lg px-3.5 py-1.5 transition-all flex items-center gap-1.5 shadow-sm',
                scrolled
                  ? 'bg-portfolio-accent hover:bg-portfolio-primary text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md'
              )}
            >
              <FileText size={13} />
              <span>Resume</span>
            </Button>
          )}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {onOpenResume && (
            <Button
              size="sm"
              variant="outline"
              onClick={onOpenResume}
              className={cn(
                "text-xs px-2.5 h-8",
                scrolled ? "text-gray-800 border-gray-200" : "text-white border-white/20 bg-white/10"
              )}
            >
              <FileText size={12} className="mr-1" />
              <span>CV</span>
            </Button>
          )}

          <button 
            className={cn(
              "p-2 rounded-lg transition-colors",
              scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      <div 
        className={cn(
          'fixed inset-0 top-[57px] bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden shadow-xl border-t',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container mx-auto px-6 py-8">
          <ul className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <li key={item.name} className="border-b border-gray-100 pb-3">
                <a
                  href={item.href}
                  className="text-gray-800 hover:text-portfolio-accent text-lg font-medium block transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {onOpenResume && (
            <div className="mt-8 pt-4">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full bg-portfolio-accent hover:bg-portfolio-primary text-white py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
