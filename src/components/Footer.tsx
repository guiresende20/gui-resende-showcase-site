import React from 'react';
import { Linkedin, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: t('nav.home'), id: 'hero' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <footer ref={ref} className={`bg-card text-foreground py-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Guilherme Resende Muniz</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {t('footer.description')}<br />{t('footer.bio')}
            </p>
            <div className="flex space-x-4">
              {[
                { href: 'https://www.linkedin.com/in/guilhermeresende', icon: <Linkedin size={20} />, hover: 'hover:bg-electric/20' },
                { href: 'http://lattes.cnpq.br/5709726694301047', icon: <ExternalLink size={20} />, hover: 'hover:bg-muted' },
                { href: 'mailto:guiresende20@gmail.com', icon: <Mail size={20} />, hover: 'hover:bg-neon-900/30' },
                { href: 'https://wa.me/5551997925092', icon: <MessageSquare size={20} />, hover: 'hover:bg-neon-800/30' },
              ].map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer"
                  className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center ${link.hover} transition-colors duration-200`}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Porto Alegre - RS, Brasil</p>
              <p>guiresende20@gmail.com</p>
              <p>+55 51 99792-5092</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
