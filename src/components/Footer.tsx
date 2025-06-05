
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Informações Pessoais */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Guilherme Resende</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Designer & Pesquisador em Inovação, especialista em UX/UI, VR/AR e IA. 
              Criando experiências digitais que fazem a diferença.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/guilhermeresende" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/guilhermeresende" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:guilherme@exemplo.com"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-slate-300">
              <p>Porto Alegre, RS</p>
              <p>guilherme@exemplo.com</p>
              <p>+55 (11) 99999-9999</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Guilherme Resende Muniz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
