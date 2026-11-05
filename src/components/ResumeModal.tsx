import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Sparkles,
  Globe2,
  Cloud
} from 'lucide-react';
import { toast } from 'sonner';

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ open, onOpenChange }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rg.adarsh1@gmail.com');
    toast.success('Email copied to clipboard!', {
      description: 'rg.adarsh1@gmail.com',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 bg-white text-gray-900 border-gray-200">
        <DialogHeader className="border-b pb-4 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <DialogTitle className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Adarsh RG
              </DialogTitle>
              <DialogDescription className="text-base font-medium text-portfolio-primary mt-1">
                Front-End & E-Commerce Web Engineer • BigCommerce Specialist
              </DialogDescription>
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-portfolio-accent" /> Trivandrum, Kerala, India
                </span>
                <span className="flex items-center gap-1">
                  <Globe2 className="w-3.5 h-3.5 text-blue-600" /> Serving Clients in Canada, Australia & USA
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-portfolio-accent" /> rg.adarsh1@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-portfolio-accent" /> +91 8547855799
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyEmail}
                className="text-xs flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                Copy Email
              </Button>
              <Button
                size="sm"
                onClick={handlePrint}
                className="bg-portfolio-accent hover:bg-portfolio-primary text-white text-xs flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save PDF
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 pt-4 text-sm leading-relaxed text-gray-700">
          {/* Executive Summary */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-portfolio-primary mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-portfolio-accent" /> Professional Summary
            </h4>
            <p className="text-gray-700 bg-gray-50 p-3.5 rounded-lg border border-gray-100">
              Front-End & E-Commerce Web Engineer with <strong>4 years of production experience</strong> delivering high-conversion BigCommerce Stencil storefronts for international retail brands across <strong>Canada (Let's Talk Flowers), Australia (Tobys Estate, Toolmart, Medcart), and the USA (Equivont)</strong>. Expert in custom theme architecture, Storefront GraphQL APIs, and regional e-commerce workflows (currencies, taxes, local delivery pickers). Actively expanding future-proof engineering depth through intensive coursework in <strong>BigCommerce Catalyst</strong>, <strong>Next.js 14+ on Vercel (Nova E-Commerce)</strong>, <strong>AI-assisted rapid prototyping ("vibe coding")</strong>, and <strong>AWS cloud fundamentals</strong>.
            </p>
          </div>

          {/* Technical Skills Breakdown */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-portfolio-primary mb-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-portfolio-accent" /> Technical Expertise & Proficiency
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-purple-50/60 p-3 rounded-lg border border-purple-100">
                <span className="text-xs font-bold text-portfolio-primary block mb-1.5">
                  ★ Primary & Production Mastery (4+ Years)
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'BigCommerce Stencil', 
                    'Handlebars.js', 
                    'JavaScript (ES6+)', 
                    'TypeScript', 
                    'Storefront GraphQL', 
                    'International Multi-Currency/Tax', 
                    'Technical SEO & Core Web Vitals', 
                    'Responsive UI Design', 
                    'Cross-Browser QA', 
                    'Custom Checkout Integrations'
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-white text-gray-800 text-[11px] font-medium border">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50/60 p-3 rounded-lg border border-blue-100">
                <span className="text-xs font-bold text-blue-700 block mb-1.5">
                  🌱 Actively Developing & Cloud Coursework (Current Focus)
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Next.js 14+ (App Router)', 
                    'Vercel Deployment (Nova)', 
                    'BigCommerce Catalyst', 
                    'React Server Components', 
                    'Headless Commerce', 
                    'AWS Cloud Basics (S3, CloudFront)', 
                    'Modern Tailwind CSS'
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-white text-blue-900 text-[11px] font-medium border border-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50/60 p-3 rounded-lg border border-indigo-100">
                <span className="text-xs font-bold text-indigo-700 block mb-1.5">
                  ⚡ AI-Augmented Workflows & Integrations
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'AI-Assisted Dev Tools', 
                    'Vibe Coding & Rapid Prototyping', 
                    'Prompt Engineering', 
                    'LLM API Integration', 
                    'AI Product Recommendations (Concepts)', 
                    'GitHub Copilot'
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-white text-indigo-900 text-[11px] font-medium border border-indigo-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="text-xs font-bold text-gray-800 block mb-1.5">
                  Full-Stack MERN & Developer Environment
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Git & GitHub', 'macOS / Linux / Windows', 'AutoCAD'].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-white text-[11px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-portfolio-primary mb-3 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-portfolio-accent" /> Work History
            </h4>
            <div className="space-y-4">
              <div className="border-l-2 border-portfolio-accent pl-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="font-bold text-gray-900">Software Engineer</h5>
                  <span className="text-xs font-medium text-portfolio-accent">October 2023 – Present</span>
                </div>
                <p className="text-xs text-gray-600 font-medium mb-1.5">AdroitMinds Software Labs, Technopark, Trivandrum</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                  <li>Front-End Developer leading BigCommerce theme development for international retail clients across Canada, Australia, and the US.</li>
                  <li>Delivered Canadian storefront for Let's Talk Flowers (Toronto) with custom delivery/pickup date pickers, Canadian tax rules, and local SEO.</li>
                  <li>Customized high-volume Australian storefronts (Tobys Estate Australia, Toolmart, Medcart) using Stencil framework and Handlebars.</li>
                  <li>Integrated GraphQL Storefront APIs for dynamic product catalog queries and interactive UI filtering.</li>
                  <li>Enhanced SEO, page speed, structured data, and Core Web Vitals to elevate conversion rates.</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 pl-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="font-bold text-gray-900">Intern — MEARN Stack Developer</h5>
                  <span className="text-xs text-gray-500">December 2023 – July 2023</span>
                </div>
                <p className="text-xs text-gray-600 font-medium mb-1.5">Luminar Technolab, Kochi</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                  <li>Hands-on training and implementation of full-stack web applications using MongoDB, Express, React, and Node.js.</li>
                  <li>Designed RESTful APIs and built a full-stack banking application interface.</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 pl-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="font-bold text-gray-900">Web Designer</h5>
                  <span className="text-xs text-gray-500">July 2021 – November 2022</span>
                </div>
                <p className="text-xs text-gray-600 font-medium mb-1.5">Singularium Technologies, Bangalore</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                  <li>HTML/CSS Developer responsible for responsive front-end layout implementation and data management.</li>
                  <li>Ensured cross-browser consistency and mobile usability across multiple devices.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Production & Cloud Projects */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-portfolio-primary mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-portfolio-accent" /> Key Production & Cloud Projects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded border border-gray-200 bg-gray-50/70">
                <div className="font-bold text-gray-900">Let's Talk Flowers (🇨🇦 Canada)</div>
                <p className="text-gray-600">Canadian retail florist & gift e-commerce on BigCommerce Stencil with bespoke delivery date scheduler & Canadian checkout rules.</p>
              </div>
              <div className="p-2.5 rounded border border-blue-200 bg-blue-50/50">
                <div className="font-bold text-blue-900">Nova E-Commerce (☁️ Vercel Coursework)</div>
                <p className="text-gray-600">Modern Next.js 14+ platform deployed on Vercel with Turbopack, SSR, dynamic catalog state, and AI vibe-coded components.</p>
              </div>
              <div className="p-2.5 rounded border border-gray-200 bg-gray-50/70">
                <div className="font-bold text-gray-900">Tobys Estate Australia (🇦🇺 Australia)</div>
                <p className="text-gray-600">Leading Australian specialty coffee brand e-commerce on BigCommerce Stencil, featuring custom product flows & GraphQL.</p>
              </div>
              <div className="p-2.5 rounded border border-purple-200 bg-purple-50/50">
                <div className="font-bold text-portfolio-primary">BigCommerce Catalyst & AI Storefront</div>
                <p className="text-gray-600">Headless Next.js prototype exploring React Server Components, GraphQL Storefront API, and AI prompt engineering.</p>
              </div>
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t">
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-portfolio-primary mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-portfolio-accent" /> Certifications & Training
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li>
                  <strong>Full Stack B-commerce Developer</strong> — BigCommerce Certified
                </li>
                <li>
                  <strong>MERN Stack Crash Course</strong> — Luminar Technolab
                </li>
                <li>
                  <strong>BigCommerce Catalyst & Next.js Headless</strong> — Coursework
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-portfolio-primary mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-portfolio-accent" /> Education
              </h4>
              <div className="space-y-1.5 text-xs text-gray-700">
                <div>
                  <strong>B.Tech</strong>, Kerala Technological University (2016 – 2020)
                  <p className="text-gray-500">Rajadhani Institute of Engineering and Technology (CGPA: 6.5)</p>
                </div>
                <div>
                  <strong>12th Computer Science & 10th</strong>, CBSE
                  <p className="text-gray-500">Christ Nagar Senior Secondary School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
