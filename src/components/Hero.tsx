import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
const Hero = () => {
  const {
    t
  } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-4">
              Guilherme
              <span className="block text-blue-900">Resende Muniz</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-slate-600 mb-4 font-medium">
              {t('hero.subtitle')}
            </h2>
            <p className="text-lg text-slate-500 mb-6">
              {t('hero.location')}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
              {t('hero.description')}
              <br />
              Link para minha <a href="https://chatgpt.com/g/g-68654885f5c88191b5d2df8265320cce-guilherme-resende-gpt" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-800 underline">IA</a>: https://chatgpt.com/g/g-68654885f5c88191b5d2df8265320cce-guilherme-resende-gpt
            </p>
            
            {/* Links sociais */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button variant="outline" onClick={() => window.open('https://www.linkedin.com/in/guilhermeresende', '_blank')} className="flex items-center gap-2 border-blue-900 text-blue-900 hover:bg-blue-50">
                <Linkedin size={20} />
                LinkedIn
              </Button>
              <Button variant="outline" onClick={() => window.open('mailto:guiresende20@gmail.com')} className="flex items-center gap-2 border-blue-900 text-blue-900 hover:bg-blue-50">
                <Mail size={20} />
                E-mail
              </Button>
              <Button variant="outline" onClick={() => window.open('https://wa.me/5551997925092', '_blank')} className="flex items-center gap-2 border-blue-900 text-blue-900 hover:bg-blue-50">
                <MessageSquare size={20} />
                WhatsApp
              </Button>
              <Button variant="outline" onClick={() => window.open('http://lattes.cnpq.br/5709726694301047', '_blank')} className="flex items-center gap-2 border-blue-900 text-blue-900 hover:bg-blue-50">
                <ExternalLink size={20} />
                Lattes
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={() => scrollToSection('projects')} className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg">
                {t('hero.viewProjects')}
              </Button>
              <a href="https://chatgpt.com/g/g-68654885f5c88191b5d2df8265320cce-guilherme-resende-gpt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white px-8 text-lg rounded-md font-medium transition-colors py-0">Minha I.A</a>
              <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg">
                {t('hero.contact')}
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
              <img src="/lovable-uploads/12608115-5850-49cd-a918-f853b0ba2573.png" alt="Guilherme Resende Muniz" className="w-72 h-72 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;