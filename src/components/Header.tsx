
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const menuItems = [
    { label: t('nav.home'), id: 'hero' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="text-2xl font-bold text-slate-800 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Guilherme Resende
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            
            {/* AI Chat Button */}
            <a
              href="https://chatgpt.com/g/g-68654885f5c88191b5d2df8265320cce-guilherme-resende-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white px-3 py-2 text-sm rounded-md font-medium transition-colors"
            >
              Converse com minha IA
            </a>
            
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 border-slate-300 hover:border-blue-900 hover:text-blue-900"
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-2 text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile AI Chat Button */}
              <a
                href="https://chatgpt.com/g/g-68654885f5c88191b5d2df8265320cce-guilherme-resende-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white px-3 py-2 text-sm rounded-md font-medium transition-colors mx-4 mt-2"
              >
                Converse com minha IA
              </a>
              
              {/* Mobile Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="mx-4 mt-2 flex items-center gap-2 justify-center border-slate-300 hover:border-blue-900 hover:text-blue-900"
              >
                <Globe size={16} />
                {language.toUpperCase()}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
