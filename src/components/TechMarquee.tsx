import React from 'react';
import { 
  Flame, 
  Rocket, 
  Bot, 
  Globe2, 
  Cloud, 
  Code2, 
  Database, 
  Layers, 
  Sparkles 
} from 'lucide-react';

interface MarqueeItem {
  label: string;
  category: 'bigcommerce' | 'nextjs' | 'international' | 'ai' | 'cloud' | 'fullstack';
  icon: React.ReactNode;
}

const marqueeItems: MarqueeItem[] = [
  { label: 'BigCommerce Stencil', category: 'bigcommerce', icon: <Flame className="w-3.5 h-3.5 text-amber-400" /> },
  { label: '🇨🇦 Canada Client (Let’s Talk Flowers)', category: 'international', icon: <Globe2 className="w-3.5 h-3.5 text-red-400" /> },
  { label: 'Next.js 14+ (App Router)', category: 'nextjs', icon: <Rocket className="w-3.5 h-3.5 text-blue-400" /> },
  { label: '🇦🇺 Australia Clients (Toby’s, Toolmart, Medcart)', category: 'international', icon: <Globe2 className="w-3.5 h-3.5 text-emerald-400" /> },
  { label: '☁️ Vercel Cloud (Nova E-Commerce)', category: 'cloud', icon: <Cloud className="w-3.5 h-3.5 text-cyan-400" /> },
  { label: '⚡ AI Vibe Coding & LLM Workflows', category: 'ai', icon: <Bot className="w-3.5 h-3.5 text-purple-400" /> },
  { label: 'Storefront GraphQL API', category: 'bigcommerce', icon: <Code2 className="w-3.5 h-3.5 text-pink-400" /> },
  { label: '🇺🇸 USA Platform (Equivont)', category: 'international', icon: <Globe2 className="w-3.5 h-3.5 text-indigo-400" /> },
  { label: 'BigCommerce Catalyst Headless', category: 'nextjs', icon: <Layers className="w-3.5 h-3.5 text-purple-400" /> },
  { label: 'React & TypeScript Ecosystem', category: 'fullstack', icon: <Code2 className="w-3.5 h-3.5 text-blue-400" /> },
  { label: 'Full-Stack MERN Architecture', category: 'fullstack', icon: <Database className="w-3.5 h-3.5 text-emerald-400" /> },
  { label: 'Core Web Vitals & Technical SEO', category: 'bigcommerce', icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" /> },
  { label: 'AWS Cloud Fundamentals (S3, CloudFront)', category: 'cloud', icon: <Cloud className="w-3.5 h-3.5 text-amber-300" /> },
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-4 bg-gray-950 border-y border-gray-800/80 select-none z-20">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="animate-marquee flex items-center gap-4">
        {/* First set */}
        {marqueeItems.map((item, idx) => (
          <div
            key={`marquee-1-${idx}`}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-900/90 border border-gray-800 text-xs font-medium text-gray-300 whitespace-nowrap shadow-xs hover:border-portfolio-accent/60 hover:text-white transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}

        {/* Duplicate set for seamless continuous loop */}
        {marqueeItems.map((item, idx) => (
          <div
            key={`marquee-2-${idx}`}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-900/90 border border-gray-800 text-xs font-medium text-gray-300 whitespace-nowrap shadow-xs hover:border-portfolio-accent/60 hover:text-white transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;

