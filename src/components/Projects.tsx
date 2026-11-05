import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  Info,
  CheckCircle2,
  Rocket,
  Check,
  Globe,
  MapPin,
  Cloud
} from 'lucide-react';
import { cn, getAssetPath } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: 'bigcommerce' | 'catalyst-nextjs' | 'fullstack-ai';
  status: 'Production Live' | 'Learning & Developing' | 'Full-Stack Project';
  region?: string;
  isDeveloping?: boolean;
  highlights?: string[];
  links: {
    github: string;
    live: string;
  };
}

const projectsData: ProjectItem[] = [
  // 1. Let's Talk Flowers (Canada) - NEW CANADIAN CLIENT PROJECT
  {
    id: 'letstalkflowers',
    title: "Let's Talk Flowers (Canada)",
    description: "Canadian retail florist e-commerce storefront in Toronto built on BigCommerce Stencil with custom delivery schedulers and localized checkout.",
    longDescription: "Engineered and customized the BigCommerce Stencil storefront for Let's Talk Flowers, a premier Canadian floral boutique and gift delivery service in Toronto, Ontario. Implemented bespoke product collections, custom pickup and delivery date pickers, Canadian tax/currency configurations, and technical SEO for local search visibility. Collaborated directly with Canadian stakeholders managing cross-timezone communication.",
    image: '/Portfolio2025/Lets talk flowers.png',
    tags: ['BigCommerce', 'Stencil', 'JavaScript', 'Canada Client', 'Delivery Scheduler', 'SEO', 'Responsive UI'],
    category: 'bigcommerce',
    status: 'Production Live',
    region: '🇨🇦 Canada',
    highlights: [
      'Custom BigCommerce Stencil theme development for Canadian retail market',
      'Configured custom date & time pickers for local hand-delivery and in-store pickup',
      'Localized Canadian taxation (HST/GST), currency, and regional delivery radius',
      'Managed cross-timezone client collaboration with Toronto business owners',
      'Optimized Core Web Vitals and local technical SEO for floral gifting seasons'
    ],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://letstalkflowers.ca/'
    }
  },
  // 2. Nova E-Commerce (Course Project on Vercel) - NEW
  {
    id: 'nova-ecommerce',
    title: 'Nova E-Commerce (Vercel Coursework)',
    description: 'Modern full-stack e-commerce platform built during coursework and deployed on Vercel, exploring Next.js App Router, SSR, and dynamic catalog state.',
    longDescription: 'Next-generation modern e-commerce web application developed as part of our intensive coursework and deployed live on Vercel. Explores Next.js 14 App Router, Turbopack, React Server Components (RSC), responsive modern UI styling, shopping cart state management, and API routes. Built using modern AI-assisted workflows (vibe coding & rapid prototyping) to simulate cutting-edge e-commerce storefronts.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js 14+', 'Vercel Deployment', 'Turbopack', 'React', 'TypeScript', 'Tailwind CSS', 'Headless Commerce'],
    category: 'catalyst-nextjs',
    status: 'Learning & Developing',
    region: '☁️ Vercel Cloud',
    isDeveloping: true,
    highlights: [
      'Production deployment on Vercel utilizing Turbopack build engine',
      'Server-Side Rendering (SSR) & React Server Components for fast page loads',
      'Interactive shopping cart drawer and dynamic product filtering',
      'Built with AI-augmented workflows (vibe coding & prompt engineering)',
      'Clean modern responsive UI designed with Tailwind CSS'
    ],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://nova-ecommerce-pofqlbegt-projects-9356.vercel.app/'
    }
  },
  // 3. Tobys Estate Australia (Existing)
  {
    id: 'tobys-estate',
    title: 'Tobys Estate Australia',
    description: 'I recently developed an e-commerce platform for a leading coffee brand in Australia using the BigCommerce Stencil framework.',
    longDescription: 'Developed an e-commerce platform for a leading specialty coffee brand in Australia using the BigCommerce Stencil framework. Features custom product selectors, subscription workflows, GraphQL integration for dynamic catalog queries, and technical SEO optimizations.',
    image: '/Portfolio2025/toby.png',
    tags: ['BigCommerce', 'Stencil', 'JavaScript', 'Australia Client', 'SEO', 'GraphQl', 'Responsive Design'],
    category: 'bigcommerce',
    status: 'Production Live',
    region: '🇦🇺 Australia',
    highlights: [
      'Engineered custom BigCommerce Stencil storefront components',
      'Optimized product configuration and subscription options',
      'Implemented Storefront GraphQL queries for seamless browsing',
      'Enhanced Core Web Vitals and site structure for SEO'
    ],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.tobysestate.com.au/'
    }
  },
  // 4. Toolmart Australia (Existing)
  {
    id: 'toolmart',
    title: 'Toolmart Australia',
    description: 'E-commerce platform for Tools and other mechanical parts using BigCommerce Stencil framework.',
    longDescription: 'High-volume e-commerce storefront for industrial tools and mechanical supplies built on BigCommerce. Engineered for large catalog navigation, instant search filtering, and cross-browser stability.',
    image: '/Portfolio2025/Toolmart.png',
    tags: ['BigCommerce', 'JavaScript', 'Stencil', 'Australia Client', 'SEO', 'GraphQl', 'High Volume'],
    category: 'bigcommerce',
    status: 'Production Live',
    region: '🇦🇺 Australia',
    highlights: [
      'Architected high-density catalog navigation for thousands of SKUs',
      'Integrated GraphQL queries to speed up category filtering',
      'Customized checkout and cart flow optimizations',
      'Maintained 100% cross-browser compatibility across mobile and desktop'
    ],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.toolmart.com.au/'
    }
  },
  // 5. Medcart (Existing)
  {
    id: 'medcart',
    title: 'Medcart',
    description: 'E-commerce platform for medical supplies using BigCommerce Stencil framework.',
    longDescription: 'Comprehensive medical equipment and healthcare marketplace developed with BigCommerce Stencil, designed for intuitive product categorisation, high trust, accessibility, and frictionless purchasing.',
    image: '/Portfolio2025/medcart.png',
    tags: ['BigCommerce', 'JavaScript', 'Stencil', 'Australia Client', 'SEO', 'Healthcare'],
    category: 'bigcommerce',
    status: 'Production Live',
    region: '🇦🇺 Australia',
    highlights: [
      'Tailored UI components catering to medical and hospital buyers',
      'Optimized page load speed and asset loading',
      'Custom Handlebars helpers for specialized product badges and inventory data'
    ],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://medcart.com.au/'
    }
  },
  // 6. BarkControl (Existing)
  {
    id: 'barkcontrol',
    title: 'BarkControl',
    description: 'Pet products e-commerce site with enhanced user experience and functionality.',
    longDescription: 'Pet supplies and behavioral equipment e-commerce storefront on BigCommerce. Focused on clean mobile-first responsive layout, customer-guided product selector, and checkout usability.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    tags: ['BigCommerce', 'CSS', 'JavaScript', 'Australia Client', 'Responsive Design'],
    category: 'bigcommerce',
    status: 'Production Live',
    region: '🇦🇺 Australia',
    highlights: [
      'Mobile-first responsive redesign of core template components',
      'Enhanced product filtering and intuitive navigation',
      'Reduced checkout friction for higher conversion rate'
    ],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.barkcontrol.com.au/'
    }
  },
  // 7. Equivont (Existing)
  {
    id: 'equivont',
    title: 'Equivont',
    description: 'E-commerce platform with optimized checkout flow and improved site performance.',
    longDescription: 'Equestrian lifestyle and horse supplies commerce platform with optimized checkout flow, performance enhancements, and custom front-end styling.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['BigCommerce', 'Front-end', 'USA Client', 'Optimization', 'Performance'],
    category: 'bigcommerce',
    status: 'Production Live',
    region: '🇺🇸 USA',
    highlights: [
      'Checkout flow optimization to lower cart abandonment',
      'Performance audits and asset optimization for speed',
      'Responsive design improvements across varied device viewports'
    ],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.equivont.com/'
    }
  },
  // 8. Banking Application (Existing)
  {
    id: 'banking-app',
    title: 'Banking Application',
    description: 'Full-stack banking application built with MongoDB and Express.',
    longDescription: 'Full-stack banking web application developed during MEARN training. Features customer account management, secure transaction simulation, Express RESTful endpoints, and MongoDB data modeling.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['MongoDB', 'Express', 'Node.js', 'JavaScript', 'React'],
    category: 'fullstack-ai',
    status: 'Full-Stack Project',
    region: '💻 Full-Stack',
    highlights: [
      'Built with Node.js, Express, React, and MongoDB',
      'REST API endpoints for transaction history and user balance',
      'Form validation and secure database operations'
    ],
    links: {
      github: 'https://github.com/AdarshRG',
      live: '#'
    }
  },
  // 9. BigCommerce Catalyst Headless Storefront (Course Project)
  {
    id: 'catalyst-headless',
    title: 'BigCommerce Catalyst Headless Storefront',
    description: 'Modern headless commerce prototype built during coursework using BigCommerce Catalyst and Next.js 14 App Router.',
    longDescription: 'Next-generation headless commerce prototype built during specialized coursework on BigCommerce Catalyst. Powered by Next.js 14 App Router, React Server Components (RSC), and BigCommerce GraphQL Storefront API for sub-second page transitions and modular front-end architecture.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['BigCommerce Catalyst', 'Next.js', 'GraphQL API', 'TypeScript', 'Tailwind CSS', 'Headless Commerce'],
    category: 'catalyst-nextjs',
    status: 'Learning & Developing',
    region: '🚀 Headless Coursework',
    isDeveloping: true,
    highlights: [
      'Hands-on coursework exploration of BigCommerce Catalyst CLI & architecture',
      'Decoupled Next.js 14 App Router with React Server Components',
      'Integration with BigCommerce GraphQL Storefront API',
      'Exploring next-gen headless advantages over monolithic Stencil'
    ],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://github.com/AdarshRG'
    }
  },
  // 10. AI-Powered Commerce Assistant (Course Project)
  {
    id: 'ai-commerce-assistant',
    title: 'AI-Powered Commerce Assistant',
    description: 'AI-assisted product recommendation and smart conversational shopping prototype exploring LLM integrations.',
    longDescription: 'Exploratory e-commerce tool built during AI coursework. Investigates prompt engineering, LLM API integration, and natural language customer query understanding to assist shoppers in finding specialized products.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI / LLM', 'Prompt Engineering', 'Next.js', 'React', 'TypeScript'],
    category: 'fullstack-ai',
    status: 'Learning & Developing',
    region: '⚡ AI Experiment',
    isDeveloping: true,
    highlights: [
      'Applied prompt engineering techniques to structure catalog queries',
      'Integrated LLM endpoints to interpret natural language shopping intent',
      'Interactive chat UI component built with React and Tailwind CSS'
    ],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://github.com/AdarshRG'
    }
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
    },
  },
};

type FilterCategory = 'all' | 'bigcommerce' | 'catalyst-nextjs' | 'fullstack-ai';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>International Portfolio & Coursework</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Live enterprise BigCommerce storefronts for international clients across <strong>Canada, Australia, and the US</strong>, alongside modern coursework deployments on <strong>Vercel (Nova E-Commerce)</strong> and headless prototypes.
          </p>

          {/* Global Client Region Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
              🇨🇦 Canada (Let's Talk Flowers)
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              🇦🇺 Australia (Tobys Estate, Toolmart, Medcart, BarkControl)
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
              🇺🇸 USA (Equivont)
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold">
              ☁️ Cloud / Vercel (Nova E-Commerce)
            </span>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('all')}
            className={`rounded-full text-xs font-semibold transition-all ${activeFilter === 'all'
              ? 'bg-portfolio-accent hover:bg-portfolio-primary text-white shadow-md'
              : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-200'
              }`}
          >
            All Projects ({projectsData.length})
          </Button>

          <Button
            variant={activeFilter === 'bigcommerce' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('bigcommerce')}
            className={`rounded-full text-xs font-semibold transition-all ${activeFilter === 'bigcommerce'
              ? 'bg-portfolio-accent hover:bg-portfolio-primary text-white shadow-md'
              : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-200'
              }`}
          >
            ★ BigCommerce Production (6)
          </Button>

          <Button
            variant={activeFilter === 'catalyst-nextjs' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('catalyst-nextjs')}
            className={`rounded-full text-xs font-semibold transition-all ${activeFilter === 'catalyst-nextjs'
              ? 'bg-portfolio-accent hover:bg-portfolio-primary text-white shadow-md'
              : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-200'
              }`}
          >
            🌱 Next.js & Vercel (Nova) (2)
          </Button>

          <Button
            variant={activeFilter === 'fullstack-ai' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter('fullstack-ai')}
            className={`rounded-full text-xs font-semibold transition-all ${activeFilter === 'fullstack-ai'
              ? 'bg-portfolio-accent hover:bg-portfolio-primary text-white shadow-md'
              : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-200'
              }`}
          >
            AI & Full-Stack (2)
          </Button>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isDeveloping = project.status === 'Learning & Developing';
              const isLive = project.status === 'Production Live';

              return (
                <motion.div
                  layout
                  key={project.id}
                  variants={itemVariants}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/90 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                >
                  {/* Project Image & Overlay Status */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={getAssetPath(project.image)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-transparent to-black/25" />

                    {/* Top Status & Region Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm border flex items-center gap-1.5 ${isLive
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                            : isDeveloping
                              ? 'bg-purple-950/80 text-purple-200 border-purple-500/40'
                              : 'bg-blue-950/80 text-blue-200 border-blue-500/40'
                            }`}
                        >
                          {isLive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                          {isDeveloping && <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
                          {project.status}
                        </span>

                        {project.region && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                            {project.region}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors shrink-0"
                        title="View Project Details"
                        aria-label="View project details"
                      >
                        <Info size={16} />
                      </button>
                    </div>

                    {/* Title in Image Footer */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-lg font-bold text-white tracking-tight drop-shadow-sm">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md text-[11px] font-medium border border-slate-200/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-portfolio-accent hover:text-portfolio-primary transition-colors flex items-center gap-1"
                      >
                        <span>Case Details</span>
                        <ArrowRight size={14} />
                      </button>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs font-medium text-gray-600 hover:text-portfolio-accent transition-colors gap-1"
                          title="View Code on GitHub"
                        >
                          <Github size={15} />
                          <span>Code</span>
                        </a>

                        {project.links.live && project.links.live !== '#' && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs font-medium text-gray-900 hover:text-portfolio-accent transition-colors gap-1 bg-gray-100 hover:bg-portfolio-accent/10 px-2.5 py-1 rounded-md"
                            title="Visit Live Store"
                          >
                            <span>Live</span>
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* GitHub More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/AdarshRG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-portfolio-accent text-white rounded-xl font-medium hover:bg-portfolio-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 gap-2"
          >
            <Github size={18} />
            <span>Explore More on GitHub</span>
            <ExternalLink size={15} />
          </a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-6 bg-white text-gray-900 border-gray-200">
            <DialogHeader className="text-left border-b pb-4">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${selectedProject.status === 'Production Live'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-purple-50 text-purple-700 border-purple-200'
                    }`}
                >
                  {selectedProject.status}
                </span>

                {selectedProject.region && (
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                    {selectedProject.region}
                  </span>
                )}

                {selectedProject.isDeveloping && (
                  <span className="text-[11px] font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                    Coursework & Learning Project
                  </span>
                )}
              </div>
              <DialogTitle className="text-2xl font-extrabold text-gray-900">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-xs text-gray-500">
                Category: {selectedProject.category.toUpperCase().replace('-', ' ')}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 pt-3">
              {/* Modal Image */}
              <div className="rounded-xl overflow-hidden h-60 bg-gray-100 border border-gray-200">
                <img
                  src={getAssetPath(selectedProject.image)}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detailed Narrative */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Project Overview
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Key Highlights */}
              {selectedProject.highlights && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Key Highlights & Technical Deliverables
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-portfolio-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-800 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-3">
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 text-xs font-semibold hover:bg-gray-50 flex items-center gap-1.5 transition-colors"
                >
                  <Github size={15} />
                  <span>View Repository</span>
                </a>

                {selectedProject.links.live && selectedProject.links.live !== '#' && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg bg-portfolio-accent hover:bg-portfolio-primary text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Visit Live Store</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
