import { useState } from 'react';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import Certifications from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SpotlightCursor } from "@/components/SpotlightCursor";
import { TechMarquee } from "@/components/TechMarquee";

const Index = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-portfolio-accent selection:text-white relative">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Ambient Mouse Spotlight Glow */}
      <SpotlightCursor />

      {/* Navigation Header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Seamless Infinite Tech Marquee Ribbon */}
        <TechMarquee />

        {/* About Section */}
        <About />

        {/* Experience Timeline */}
        <Experience />

        {/* Skills & 3D Interactive Globe */}
        <Skills />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Certifications Section */}
        <div className="relative z-10">
          <Certifications />
        </div>

        {/* Contact Form & Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Resume Modal */}
      <ResumeModal open={isResumeOpen} onOpenChange={setIsResumeOpen} />
    </div>
  );
};

export default Index;
