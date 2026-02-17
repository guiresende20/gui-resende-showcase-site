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
import SectionDivider from '../components/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <SectionDivider variant="wave" fromColor="#eef4fb" toColor="#ffffff" />
        <About />
        <SectionDivider variant="curve" fromColor="#f8fafc" toColor="#ffffff" />
        <Experience />
        <SectionDivider variant="wave" fromColor="#f8fafc" toColor="#f8fafc" />
        <Projects />
        <SectionDivider variant="diagonal" fromColor="#f0f5ff" toColor="#ffffff" />
        <Education />
        <SectionDivider variant="curve" fromColor="#f8fafc" toColor="#ffffff" />
        <Skills />
        <SectionDivider variant="wave" fromColor="#f8fbff" toColor="#f8fafc" />
        <Contact className="rounded-sm" />
        <Footer />
      </div>
    </div>);

};

export default Index;