import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Code, Database, Layout, Laptop, Palette } from 'lucide-react';
import Globe from './Globe';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="w-6 h-6 text-portfolio-accent" />,
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks',
    icon: <Layout className="w-6 h-6 text-portfolio-accent" />,
    skills: ['BigCommerce Stencil', 'Graph QL', 'React', 'Node.js', 'Express']
  },
  {
    title: 'Tools',
    icon: <Laptop className="w-6 h-6 text-portfolio-accent" />,
    skills: ['Git', 'AutoCAD', 'MongoDB', 'MS Office', 'macOS', 'Windows', 'Ubuntu', 'Linux']
  },
  {
    title: 'Other Skills',
    icon: <Palette className="w-6 h-6 text-portfolio-accent" />,
    skills: ['SEO', 'Responsive Design', 'Handlebars', 'Cross-Browser Compatibility', 'Testing']
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
    <section id="skills" className="section-padding bg-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Technical Skills</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            The technologies and tools I specialize in
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg shadow-lg p-6 card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-portfolio-accent/10 p-2 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <TooltipProvider>
                    {category.skills.map((skill, i) => (
                      <Tooltip key={i}>
                        <TooltipTrigger>
                          <span 
                            className="bg-portfolio-accent/20 text-portfolio-accent px-3 py-1 rounded-full text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-110"
                          >
                            {skill}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="h-96">
            <Globe />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="mt-16"
        >
          <div className="max-w-3xl mx-auto">
            <div 
              className="bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-lg p-6 text-white text-center shadow-lg card-hover"
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-white/20 p-3">
                  <Database className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Achievements & Continuous Learning</h3>
              <ul className="space-y-2 mb-4 text-left list-disc pl-6">
                <li>Developed fully dynamic e-commerce sites through Bigcommerce and stencil framework </li>
                <li>Completed Workshop on Python in national level technical fest Pantheon @CET</li>
                <li>Completed course on MEARN Stack</li>
                <li>Built a banking page using MongoDB</li>
              </ul>
              <p className="italic">
                Committed to continuous learning and improving my skills in web development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
