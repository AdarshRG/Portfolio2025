import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Layout, 
  Laptop, 
  Palette, 
  Sparkles, 
  Rocket, 
  CheckCircle, 
  BookOpen, 
  Flame, 
  Bot, 
  Cpu,
  Cloud,
  Globe2
} from 'lucide-react';
import Globe from './Globe';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from '@/components/ui/badge';

interface SkillItem {
  name: string;
  level?: string;
  isDeveloping?: boolean;
  isCore?: boolean;
  isAI?: boolean;
  isCloud?: boolean;
}

interface SkillCategory {
  title: string;
  badge: string;
  badgeVariant: 'core' | 'developing' | 'ai' | 'fullstack' | 'tools';
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Primary Expertise: BigCommerce & Front-End',
    badge: '★ Production Mastered (4+ Years)',
    badgeVariant: 'core',
    icon: <Flame className="w-5 h-5 text-amber-400" />,
    description: 'Core commercial expertise driving high-conversion storefronts and custom e-commerce experiences across Canada, Australia, and the US.',
    skills: [
      { name: 'BigCommerce Stencil', isCore: true },
      { name: 'Handlebars', isCore: true },
      { name: 'JavaScript', isCore: true },
      { name: 'TypeScript', isCore: true },
      { name: 'Graph QL', isCore: true },
      { name: 'HTML', isCore: true },
      { name: 'CSS', isCore: true },
      { name: 'SEO', isCore: true },
      { name: 'Responsive Design', isCore: true },
      { name: 'Cross-Browser Compatibility', isCore: true },
      { name: 'Testing', isCore: true },
      { name: 'Multi-Currency & Tax Localization', isCore: true },
    ]
  },
  {
    title: 'Learning & Developing: Next.js, Catalyst & Cloud',
    badge: '🌱 Actively Developing (Coursework)',
    badgeVariant: 'developing',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    description: 'Current active coursework expanding into modern headless architecture and cloud deployments (e.g. Nova E-Commerce on Vercel).',
    skills: [
      { name: 'Next.js (App Router)', isDeveloping: true },
      { name: 'Vercel Deployment', isDeveloping: true },
      { name: 'BigCommerce Catalyst', isDeveloping: true },
      { name: 'Headless Commerce', isDeveloping: true },
      { name: 'AWS Cloud Basics (S3, CloudFront)', isDeveloping: true, isCloud: true },
      { name: 'React Server Components', isDeveloping: true },
      { name: 'Modern Tailwind CSS', isDeveloping: true },
    ]
  },
  {
    title: 'AI-Augmented Engineering & Modern Tooling',
    badge: '⚡ Practitioner & Rapid Prototyping',
    badgeVariant: 'ai',
    icon: <Bot className="w-5 h-5 text-indigo-400" />,
    description: 'Practical adoption of AI tools to accelerate development velocity, prototype rapidly ("vibe coding"), and explore intelligent features.',
    skills: [
      { name: 'AI-Assisted Dev Tools', isDeveloping: true, isAI: true },
      { name: 'Vibe Coding & Rapid Prototyping', isDeveloping: true, isAI: true },
      { name: 'AI Prompt Engineering', isDeveloping: true, isAI: true },
      { name: 'LLM API Integrations', isDeveloping: true, isAI: true },
      { name: 'AI Product Recommendations (Concepts)', isDeveloping: true, isAI: true },
      { name: 'GitHub Copilot Workflows', isDeveloping: true, isAI: true },
    ]
  },
  {
    title: 'Full-Stack Foundations: MERN Stack',
    badge: 'Certified Full-Stack Training',
    badgeVariant: 'fullstack',
    icon: <Database className="w-5 h-5 text-cyan-400" />,
    description: 'Full-stack application architecture learned through formal MEARN training.',
    skills: [
      { name: 'React', isCore: true },
      { name: 'Node.js', isCore: true },
      { name: 'Express', isCore: true },
      { name: 'MongoDB', isCore: true },
      { name: 'RESTful APIs', isCore: true },
    ]
  },
  {
    title: 'Tools, Platforms & OS Environment',
    badge: 'Workflow & System Mastery',
    badgeVariant: 'tools',
    icon: <Laptop className="w-5 h-5 text-emerald-400" />,
    description: 'Everyday developer environment, version control, operating systems, and technical software.',
    skills: [
      { name: 'Git', isCore: true },
      { name: 'Stencil CLI', isCore: true },
      { name: 'AutoCAD', isCore: true },
      { name: 'MS Office', isCore: true },
      { name: 'macOS', isCore: true },
      { name: 'Ubuntu', isCore: true },
      { name: 'Linux', isCore: true },
      { name: 'Windows', isCore: true },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
    },
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-accent/20 border border-portfolio-accent/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-portfolio-accent" />
            <span>Technical Capabilities & Future-Proof Scope</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Transparent, realistic proficiency levels: <strong>BigCommerce as my primary mastered expertise</strong>, paired with active growth in <strong>Next.js, Vercel cloud hosting, AI vibe coding, and AWS fundamentals</strong>.
          </p>
        </motion.div>

        {/* Top Grid: Skills Cards & 3D Interactive Globe */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Skill Category Cards (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="lg:col-span-7 space-y-5"
          >
            {skillCategories.map((category, index) => {
              const isHighlight = category.badgeVariant === 'core';
              const isDeveloping = category.badgeVariant === 'developing';
              const isAI = category.badgeVariant === 'ai';

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`rounded-xl p-6 transition-all duration-300 backdrop-blur-md border ${
                    isHighlight
                      ? 'bg-gradient-to-r from-gray-900 to-purple-950/40 border-purple-500/40 shadow-lg shadow-purple-950/20'
                      : isDeveloping
                      ? 'bg-gradient-to-r from-gray-900 to-blue-950/40 border-blue-500/40 shadow-lg shadow-blue-950/20'
                      : isAI
                      ? 'bg-gradient-to-r from-gray-900 to-indigo-950/40 border-indigo-500/40 shadow-lg shadow-indigo-950/20'
                      : 'bg-gray-900/80 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-lg bg-gray-800/90 p-2 border border-gray-700">
                        {category.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        isHighlight
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : isDeveloping
                          ? 'bg-purple-500/10 text-purple-300 border-purple-500/30 animate-pulse'
                          : isAI
                          ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                          : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                      }`}
                    >
                      {category.badge}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mb-4">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <TooltipProvider>
                      {category.skills.map((skill, i) => (
                        <Tooltip key={i}>
                          <TooltipTrigger asChild>
                            <span 
                              className={`cursor-default px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                                skill.isDeveloping
                                  ? 'bg-purple-950/60 text-purple-200 border-purple-500/40 hover:bg-purple-900/60 hover:scale-105'
                                  : isHighlight
                                  ? 'bg-gray-800 text-gray-200 border-gray-700 hover:border-portfolio-accent hover:text-white hover:scale-105'
                                  : 'bg-gray-800/80 text-gray-300 border-gray-700/80 hover:text-white hover:scale-105'
                              }`}
                            >
                              {skill.name}
                              {skill.isDeveloping && (
                                <span className="ml-1.5 text-[10px] text-purple-400 font-semibold">• Developing</span>
                              )}
                              {skill.isAI && (
                                <span className="ml-1.5 text-[10px] text-indigo-300 font-semibold">• AI Workflow</span>
                              )}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-800 text-white border-gray-700 text-xs">
                            <p>
                              {skill.isDeveloping
                                ? `${skill.name} — Actively learning through course projects & modern experimentation`
                                : `${skill.name} — Production experience`}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* 3D Globe + Quick Interview Perspective (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Interactive 3D Canvas Box */}
            <div className="bg-gradient-to-b from-gray-900/90 to-gray-900/40 rounded-2xl p-6 border border-gray-800 relative shadow-xl overflow-hidden flex flex-col items-center">
              <div className="w-full flex items-center justify-between border-b border-gray-800 pb-3 mb-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Global Reach & WebGL
                </span>
                <span className="text-[11px] text-purple-400 font-mono">Three.js / WebGL</span>
              </div>
              <div className="h-72 w-full">
                <Globe />
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                Drag to rotate • Servicing clients in Canada, Australia & USA
              </p>
            </div>

            {/* Quick Interview Summary Card */}
            <div className="bg-gradient-to-br from-purple-950/40 via-gray-900 to-gray-900 rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm mb-2">
                <Bot className="w-4 h-4 text-portfolio-accent" />
                <span>Interview Quick Take: Future-Proof Alignment</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                "I bring 4 years of proven BigCommerce development experience building international stores. Rather than claiming full mastery of bleeding-edge tools, I am transparent: I am actively learning <strong>Catalyst</strong>, <strong>Next.js</strong>, and <strong>AI workflows</strong> so I can bridge traditional Stencil stores with modern headless architectures."
              </p>
            </div>
          </div>
        </div>

        {/* Achievements & Continuous Learning Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-portfolio-primary via-purple-700 to-portfolio-accent rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
            {/* Subtle overlay effect */}
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl bg-white/20 p-2.5 backdrop-blur-sm">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight">Achievements & Continuous Learning</h3>
                  <p className="text-xs text-purple-200">Demonstrated track record of ongoing professional development</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 text-sm mb-6">
                {/* Preserved Original 4 Achievements */}
                <div className="flex items-start gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Developed fully dynamic e-commerce sites through Bigcommerce and stencil framework</span>
                </div>
                <div className="flex items-start gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Completed Workshop on Python in national level technical fest Pantheon @CET</span>
                </div>
                <div className="flex items-start gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Completed course on MEARN Stack</span>
                </div>
                <div className="flex items-start gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>Built a banking page using MongoDB</span>
                </div>

                {/* Newly Added Milestones */}
                <div className="flex items-start gap-2 bg-purple-900/40 border border-purple-300/30 p-3 rounded-lg backdrop-blur-sm">
                  <Globe2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Delivered Canadian retail e-commerce storefront (Let's Talk Flowers) with custom delivery scheduling</span>
                </div>
                <div className="flex items-start gap-2 bg-purple-900/40 border border-purple-300/30 p-3 rounded-lg backdrop-blur-sm">
                  <Cloud className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Deployed modern Next.js 14+ platform (Nova E-Commerce) live on Vercel with Turbopack and SSR</span>
                </div>
                <div className="flex items-start gap-2 bg-purple-900/40 border border-purple-300/30 p-3 rounded-lg backdrop-blur-sm">
                  <Rocket className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Advanced coursework in BigCommerce Catalyst & Next.js Headless Commerce</span>
                </div>
                <div className="flex items-start gap-2 bg-purple-900/40 border border-purple-300/30 p-3 rounded-lg backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Practicing AI-assisted development ("vibe coding"), prompt workflows & AWS cloud basics</span>
                </div>
              </div>

              <p className="text-xs text-purple-100 italic text-center md:text-left">
                "Committed to continuous learning, international client collaboration, and modern web development."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
