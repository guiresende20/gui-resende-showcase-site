import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const About = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.05 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible, getStaggerDelay } = useStaggerReveal(3);

  return (
    <section id="about" ref={sectionRef} className={`py-20 bg-gradient-to-b from-white to-slate-50 section-transition ${sectionVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className={`scroll-reveal-left ${textVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">{t('about.journey')}</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t('about.description1')}</p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t('about.description2')}</p>
            <p className="text-lg text-slate-600 leading-relaxed">{t('about.description3')}</p>
          </div>

          <div ref={cardsRef} className="space-y-6">
            {[
              { icon: 'UX', color: 'bg-blue-100', textColor: 'text-blue-900', titleKey: 'about.ux.title', descKey: 'about.ux.description' },
              { icon: 'VR', color: 'bg-purple-100', textColor: 'text-purple-600', titleKey: 'about.vr.title', descKey: 'about.vr.description' },
              { icon: 'AI', color: 'bg-green-100', textColor: 'text-green-600', titleKey: 'about.ai.title', descKey: 'about.ai.description' },
            ].map((item, index) => (
              <Card
                key={index}
                className={`p-6 glass-card gradient-border-hover scroll-reveal ${cardsVisible ? 'visible' : ''}`}
                style={getStaggerDelay(index)}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mr-4 icon-bounce`}>
                      <span className={`${item.textColor} text-xl font-bold`}>{item.icon}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-800">{t(item.titleKey)}</h4>
                  </div>
                  <p className="text-slate-600">{t(item.descKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
