import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, Sparkles, ZoomIn, ShieldCheck, BookOpen } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CertItem {
  id: string;
  title: string;
  issuer: string;
  image: string;
  description: string;
  skills: string[];
  isPrimary?: boolean;
}

const certificationsData: CertItem[] = [
  {
    id: 'bigcommerce-cert',
    title: 'Full Stack B-commerce Developer',
    issuer: 'BigCommerce Accredited Certification',
    image: '/Portfolio2025/Bigdev.jpg',
    description: 'Certified as a Full Stack B-commerce Developer, demonstrating proficiency in building and deploying end-to-end e-commerce solutions. This certification covers both front-end and back-end technologies, including modern JavaScript frameworks, server-side logic, database management, and API integration.',
    skills: ['BigCommerce Stencil', 'Handlebars.js', 'Storefront GraphQL API', 'Checkout API', 'Theme Architecture', 'Technical SEO'],
    isPrimary: true,
  },
  {
    id: 'mern-cert',
    title: 'MERN Stack Crash Course',
    issuer: 'Luminar Technolab',
    image: '/Portfolio2025/mern.png',
    description: 'Completed a comprehensive crash course on the MERN stack, covering MongoDB, Express.js, React, and Node.js. This course provided hands-on experience in building full-stack web applications, from creating RESTful APIs to developing dynamic user interfaces.',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful API Design', 'State Management'],
    isPrimary: false,
  }
];

const Certifications = () => {
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="certifications" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Certifications & Coursework
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Formal certifications and specialized training backing my e-commerce engineering and full-stack development skills.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200/90 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              {cert.isPrimary && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-portfolio-accent to-purple-600 text-white text-[11px] font-bold px-4 py-1 rounded-bl-xl shadow-sm flex items-center gap-1">
                  <Award size={13} />
                  <span>Primary Specialization</span>
                </div>
              )}

              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
                {/* Certificate Image Preview */}
                <div className="md:col-span-5 relative group/img cursor-pointer" onClick={() => setPreviewImage({ url: cert.image, title: cert.title })}>
                  <div className="relative rounded-xl overflow-hidden border-2 border-portfolio-primary/20 shadow-md bg-gray-50 aspect-[4/3]">
                    <img 
                      src={getAssetPath(cert.image)} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    {/* Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 backdrop-blur-xs">
                      <ZoomIn size={20} />
                      <span className="text-xs font-semibold">Click to Zoom</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="md:col-span-7">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-portfolio-accent uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                    {cert.title}
                  </h3>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills badges */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Key Competencies Covered:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <Badge 
                          key={sIdx} 
                          variant="secondary" 
                          className="bg-purple-50 text-portfolio-primary border border-purple-100 text-[11px] font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Specialized Coursework Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-8 bg-gradient-to-r from-purple-900/5 via-portfolio-accent/10 to-blue-900/5 rounded-2xl p-6 md:p-8 border border-purple-200/80"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-portfolio-accent text-white shadow-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Ongoing & Specialized Coursework (Course Focus)
              </h3>
              <p className="text-xs text-gray-600">
                Actively expanding into next-generation headless commerce and developer AI tools
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-700">
            <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-xs">
              <div className="font-bold text-portfolio-primary flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-4 h-4 text-portfolio-accent" />
                <span>BigCommerce Catalyst & Next.js Headless</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Completed hands-on coursework on BigCommerce Catalyst storefronts, React Server Components (RSC), Next.js App Router, and headless GraphQL commerce patterns.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-xs">
              <div className="font-bold text-blue-700 flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>AI-Assisted Web Engineering</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Applied AI prompt engineering, LLM workflow automation, and code synthesis tools to accelerate component delivery and e-commerce schema design.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Image Zoom Dialog */}
      <Dialog open={!!previewImage} onOpenChange={(open) => !open && setPreviewImage(null)}>
        {previewImage && (
          <DialogContent className="max-w-3xl p-4 bg-white border-gray-200">
            <DialogHeader className="pb-2">
              <DialogTitle className="text-lg font-bold text-gray-900">
                {previewImage.title}
              </DialogTitle>
            </DialogHeader>
            <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50 max-h-[75vh] flex items-center justify-center">
              <img 
                src={getAssetPath(previewImage.url)} 
                alt={previewImage.title} 
                className="w-full h-auto object-contain max-h-[70vh]" 
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Certifications;
