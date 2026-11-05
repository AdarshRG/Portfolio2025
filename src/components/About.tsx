import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Bot, 
  GraduationCap, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Award,
  Zap,
  Globe2,
  Clock,
  Briefcase
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      stiffness: 80,
      damping: 15,
    },
  },
};

export const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Profile & Engineering Mindset</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Front-End & E-Commerce Web Engineer with 4 years of experience delivering high-converting storefronts for global clients, actively developing next-generation headless and AI-augmented capabilities.
          </p>
        </motion.div>

        {/* 2-Column Main Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid lg:grid-cols-12 gap-8 items-start mb-12"
        >
          {/* Who I Am / Engineering Narrative (7 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Who I Am</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-portfolio-accent" /> Based in Trivandrum, Kerala, India • Serving Global Clients
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                I'm a <strong>Front-End Web Developer with 4 years of expertise in BigCommerce and the MERN stack</strong>. 
                My journey in web development has equipped me with a strong foundation in creating 
                responsive, user-focused websites and e-commerce solutions.
              </p>
              <p>
                Based in Trivandrum, Kerala, I'm passionate about combining technical innovation with 
                creative problem-solving to deliver exceptional digital experiences. I constantly 
                strive to stay updated with the latest web technologies and best practices to ensure 
                my work meets modern standards.
              </p>

              {/* International Management Highlight */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-gray-800 text-sm">
                <div className="flex items-center gap-2 font-semibold text-blue-900 mb-1.5">
                  <Globe2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>International Client Management Across Canada & Australia</span>
                </div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  I have managed and deployed production storefronts for overseas clients across <strong>Canada</strong> (such as Toronto's <a href="https://letstalkflowers.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold underline">Let's Talk Flowers</a>) and <strong>Australia</strong> (Tobys Estate, Toolmart, Medcart, BarkControl). This experience has honed my ability to lead asynchronous, cross-timezone sprint communication, configure regional currency and tax workflows, and implement localized shipping/delivery logic.
                </p>
              </div>

              {/* Learning & Developing Roadmap */}
              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100 text-purple-950 text-sm">
                <div className="flex items-center gap-2 font-semibold text-portfolio-primary mb-1">
                  <Zap className="w-4 h-4 text-portfolio-accent shrink-0" />
                  <span>Future-Proof Skill Progression (Developing & Coursework)</span>
                </div>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  While my primary day-to-day mastery is <strong>BigCommerce Stencil themes and e-commerce engineering</strong>, I am actively expanding into <strong>BigCommerce Catalyst</strong>, <strong>Next.js 14+ on Vercel (our Nova E-Commerce deployment)</strong>, and <strong>AI-assisted development (vibe coding, prompt engineering, and LLM API integrations)</strong>, alongside AWS cloud fundamentals.
                </p>
              </div>
            </div>

            {/* Core Strengths Checklist */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-6 mt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom BigCommerce Stencil Themes</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Cross-Timezone International Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Storefront GraphQL & RESTful APIs</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Next.js, Vercel & AI Tooling (Developing)</span>
              </div>
            </div>
          </motion.div>

          {/* Education & Personal Interests (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            {/* International Footprint Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 text-white rounded-2xl p-6 shadow-md border border-gray-800">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Global Client Footprint</h4>
                  <p className="text-xs text-gray-400">Regions & live storefronts delivered</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-800/60 border border-gray-700/60">
                  <span className="font-semibold text-gray-200">🇨🇦 Canada (Toronto)</span>
                  <span className="text-purple-300">Let's Talk Flowers</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-800/60 border border-gray-700/60">
                  <span className="font-semibold text-gray-200">🇦🇺 Australia</span>
                  <span className="text-purple-300">Toby's Estate, Toolmart, Medcart</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gray-800/60 border border-gray-700/60">
                  <span className="font-semibold text-gray-200">🇺🇸 United States</span>
                  <span className="text-purple-300">Equivont Platform</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-portfolio-primary/10 text-portfolio-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Education</h3>
                  <p className="text-xs text-gray-500">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-portfolio-accent pl-3.5">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">
                    Rajadhani Institute of Engineering and Technology
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm font-medium">
                    B.Tech, Kerala Technological University (CGPA: 6.5)
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">2016 – 2020</p>
                </div>

                <div className="border-l-2 border-gray-200 pl-3.5">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">
                    Christ Nagar Senior Secondary School
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    12th - Computer Science (65%) • 10th (80%)
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">CBSE</p>
                </div>
              </div>
            </div>

            {/* Interests Card */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Interests</h3>
                  <p className="text-xs text-gray-500">Beyond the screen</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  'Software Development',
                  'Financial Markets',
                  'Fitness',
                  'Travel',
                  'Cue Sports',
                  'Team Sports'
                ].map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="secondary" 
                    className="bg-gray-100 hover:bg-portfolio-accent/15 hover:text-portfolio-primary text-gray-700 text-xs font-medium py-1 px-3 transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 4 Future-Proof Pillars Grid: Why Hire Me */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <motion.div 
            variants={itemVariants}
            className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-portfolio-primary flex items-center justify-center font-bold mb-3">
              01
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-1.5">BigCommerce Mastery</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              4+ years in Stencil themes, Handlebars logic, checkout customization, and catalog scaling across international storefronts.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
              02
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-1.5">Global Client Delivery</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Proven async management across Canada, Australia, and USA time zones, localized currencies, regional taxes, and compliance.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-3">
              03
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-1.5">Next.js & Cloud (Nova)</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Active coursework building modern Next.js 14+ apps deployed on Vercel, exploring BigCommerce Catalyst and AWS basics.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-3">
              04
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-1.5">AI-Augmented Velocity</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Vibe coding practitioner using AI prompt engineering and LLM tools to prototype, test, and ship components with high speed.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
