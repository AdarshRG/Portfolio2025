import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'AdroitMinds Software Labs,Technopark,Tvm',
    period: 'October 2023 – Present',
    description: [
      'Front-End Developer',
      'Customized BigCommerce storefronts using Stencil framework',
      'Enhanced SEO and site structure'
    ]
  },
  {
    title: 'Intern',
    company: 'Luminar Technolab, Kochi',
    period: 'December 2023 – July 2023',
    description: [
      'MEARN Stack Developer'
    ]
  },
  {
    title: 'Web Designer',
    company: 'Singularium Technologies, Bangalore',
    period: 'July 2021 – November 2022',
    description: [
      'HTML/CSS Developer',
      'Front-End Data Management'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = (isLeft: boolean) => ({
  hidden: { x: isLeft ? -100 : 100, opacity: 0 },
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
    <section id="experience" className="section-padding bg-gray-50 relative card-hover">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Work Experience</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My professional journey in web development and design
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="relative"
          >
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants(isLeft)}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8"
                >
                  {/* Timeline Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-portfolio-accent bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <Briefcase size={16} className="text-portfolio-accent" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-lg border border-gray-200 shadow-md card-hover">
                    <h3 className="text-xl font-bold text-portfolio-primary">{exp.title}</h3>
                    <h4 className="text-lg font-medium mb-1">{exp.company}</h4>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                    <ul className="list-disc list-inside text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
