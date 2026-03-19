import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import ProjectsSection from '../components/ProjectsSection';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { CustomCursor, SmoothScrollProvider, ScrollProgress } from '../components/MicroInteractions';

const Index = () => {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <ScrollProgress />
      <div className="min-h-screen bg-background relative">
        <div className="relative z-10">
          <HeroSection />
          <About />
          <Experience />
          <ProjectsSection />
          <Projects />
          <Education />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </SmoothScrollProvider>
  );
};

export default Index;
