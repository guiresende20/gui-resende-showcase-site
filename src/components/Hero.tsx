
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-4">
              Guilherme
              <span className="block text-blue-600">Resende Muniz</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-slate-600 mb-6 font-medium">
              Designer & Pesquisador em Inovação
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Especialista em UX/UI Design, Realidade Virtual/Aumentada e Inteligência Artificial em interfaces. 
              Combino pesquisa acadêmica com experiência prática para criar soluções inovadoras e centradas no usuário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Guilherme Resende"
                className="w-72 h-72 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
