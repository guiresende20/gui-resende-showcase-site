
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
