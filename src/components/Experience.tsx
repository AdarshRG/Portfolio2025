import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, Globe2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  regionHighlight?: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    company: 'AdroitMinds Software Labs,Technopark,Tvm',
    location: 'Technopark, Trivandrum',
    period: 'October 2023 – Present',
    isCurrent: true,
    regionHighlight: '🇨🇦 Canada, 🇦🇺 Australia & 🇺🇸 USA Clients',
    description: [
      'Front-End Developer specializing in BigCommerce enterprise solutions and international storefronts',
      'Managed and delivered production storefronts for overseas clients in Canada (Let’s Talk Flowers), Australia (Tobys Estate, Toolmart, Medcart), and the US (Equivont)',
      'Led asynchronous, cross-timezone sprint communication with international business owners and design teams',
      'Configured localized currency, multi-region tax rules (HST/GST), and custom delivery/pickup scheduling logic',
      'Customized BigCommerce storefronts using Stencil framework and Handlebars templating',
      'Enhanced SEO, site structure, and Core Web Vitals to elevate conversion rates',
      'Integrated GraphQL Storefront APIs for dynamic product catalog queries and UI filtering',
      'Actively exploring BigCommerce Catalyst headless architecture and Next.js cloud workflows'
    ],
    skills: ['BigCommerce Stencil', 'Handlebars.js', 'JavaScript (ES6+)', 'TypeScript', 'Storefront GraphQL', 'International Client Delivery', 'SEO & Core Web Vitals', 'Catalyst (Exploration)']
  },
  {
    title: 'Intern',
    company: 'Luminar Technolab, Kochi',
    location: 'Kochi, Kerala',
    period: 'December 2023 – July 2023',
    description: [
      'MEARN Stack Developer',
      'Trained extensively on MongoDB, Express.js, React.js, and Node.js',
      'Built RESTful APIs and connected front-end interfaces to database systems',
      'Developed responsive full-stack applications with state management'
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Full-Stack Architecture']
  },
  {
    title: 'Web Designer',
    company: 'Singularium Technologies, Bangalore',
    location: 'Bangalore, Karnataka',
    period: 'July 2021 – November 2022',
    description: [
      'HTML/CSS Developer',
      'Front-End Data Management',
      'Crafted pixel-perfect, responsive web layouts and ensured cross-browser consistency',
      'Optimized asset loading and mobile user experiences across diverse browsers'
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Cross-Browser QA']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = (isLeft: boolean) => ({
  hidden: { x: isLeft ? -50 : 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
    },
  },
});

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-portfolio-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-portfolio-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
          }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Milestones & Global Delivery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            4 years of proven front-end engineering, delivering enterprise e-commerce solutions for international clients across Canada, Australia, and the US.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="relative"
          >
            {/* Center Timeline Spine Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-portfolio-accent via-purple-300 to-gray-200"></div>

            {/* Experience Items */}
            <div className="space-y-10">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants(isLeft)}
                    className="relative flex flex-col md:flex-row items-start md:items-center group"
                  >
                    {/* Timeline Node / Icon */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-portfolio-accent text-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase size={18} />
                    </div>

                    {/* Left or Right Card Placement */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pr-10' : 'md:pl-10 md:ml-auto'}`}>
                      <div className="bg-white p-6 md:p-7 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                        {/* Status Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Active Position
                            </span>
                          )}

                          {exp.regionHighlight && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold">
                              <Globe2 size={12} />
                              {exp.regionHighlight}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-portfolio-primary transition-colors">
                            {exp.title}
                          </h3>
                        </div>

                        <h4 className="text-sm font-semibold text-portfolio-primary mb-1">
                          {exp.company}
                        </h4>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                          <span className="flex items-center gap-1 font-medium text-portfolio-accent">
                            <Calendar size={13} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description Bullets */}
                        <ul className="space-y-2 text-xs md:text-sm text-gray-700 mb-5">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-portfolio-accent shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Chips */}
                        <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                          {exp.skills.map((skill, sIdx) => (
                            <Badge 
                              key={sIdx} 
                              variant="secondary" 
                              className="text-[11px] font-medium bg-gray-100 text-gray-700 hover:bg-portfolio-accent/15 hover:text-portfolio-primary transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
