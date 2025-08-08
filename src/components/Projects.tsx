import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    title: 'Tobys Estate Australia',
    description: 'I recently developed an e-commerce platform for a leading coffee brand in Australia using the BigCommerce Stencil framework."',
    image: '/toby.png',
    tags: ['BigCommerce','Stencil', 'JavaScript', 'Stencil', 'SEO','GraphQl'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.tobysestate.com.au/'
    }
  },
  {
    title: 'Toolmart Australia',
    description: 'E-commerce platform for Tools and other mechanical parts using BigCommerce Stencil framework',
    image: '/Toolmart.png',
    tags: ['BigCommerce', 'JavaScript', 'Stencil', 'SEO','GraphQl'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.toolmart.com.au/'
    }
  },
  {
    title: 'Medcart',
    description: 'E-commerce platform for medical supplies using BigCommerce Stencil framework',
    image: '/medcart.png',
    tags: ['BigCommerce', 'JavaScript', 'Stencil', 'SEO'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://medcart.com.au/'
    }
  },
  {
    title: 'BarkControl',
    description: 'Pet products e-commerce site with enhanced user experience and functionality',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    tags: ['BigCommerce', 'CSS', 'JavaScript', 'Responsive Design'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.barkcontrol.com.au/'
    }
  },
  {
    title: 'Equivont',
    description: 'E-commerce platform with optimized checkout flow and improved site performance',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['BigCommerce', 'Front-end', 'Optimization'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: 'https://www.equivont.com/'
    }
  },
  {
    title: 'Banking Application',
    description: 'Full-stack banking application built with MongoDB and Express',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['MongoDB', 'Express', 'Node.js', 'JavaScript','React'],
    links: {
      github: 'https://github.com/AdarshRG',
      live: '#'
    }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
    },
  },
};

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent web development work
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-60 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-portfolio-primary/10 text-portfolio-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-portfolio-accent transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-portfolio-accent transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/AdarshRG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-portfolio-accent text-white rounded-lg font-medium hover:bg-portfolio-primary transition-colors card-hover animate-pulse"
          >
            <span>View More Projects</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
