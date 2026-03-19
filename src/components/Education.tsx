import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const Education = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  const education = [
    { degree: t('education.phd.degree'), institution: t('education.phd.institution'), period: t('education.phd.period'), description: t('education.phd.description'), achievements: [t('education.phd.achievement1'), t('education.phd.achievement2'), t('education.phd.achievement3')] },
    { degree: t('education.master.degree'), institution: t('education.master.institution'), period: t('education.master.period'), description: t('education.master.description'), achievements: [t('education.master.achievement1'), t('education.master.achievement2'), t('education.master.achievement3'), { text: t('education.master.achievement4'), link: "https://www.lume.ufrgs.br/handle/10183/143935" }] },
    { degree: t('education.bachelor.degree'), institution: t('education.bachelor.institution'), period: t('education.bachelor.period'), description: t('education.bachelor.description'), achievements: [t('education.bachelor.achievement1'), t('education.bachelor.achievement2'), t('education.bachelor.achievement3'), { text: t('education.bachelor.achievement4'), link: "https://bibliotecadigital.ufrgs.br/handle/10183/37592" }] },
    { degree: t('education.english.degree'), institution: t('education.english.institution'), period: t('education.english.period'), description: t('education.english.description'), achievements: [t('education.english.achievement1'), t('education.english.achievement2'), t('education.english.achievement3')] },
    { degree: t('education.perestroika.degree'), institution: t('education.perestroika.institution'), period: t('education.perestroika.period'), description: t('education.perestroika.description'), achievements: [t('education.perestroika.achievement1'), t('education.perestroika.achievement2'), t('education.perestroika.achievement3')] }
  ];

  const { ref: cardsRef, isVisible: cardsVisible, getStaggerDelay } = useStaggerReveal(education.length);

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('education.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div ref={cardsRef} className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className={`glass-card gradient-border-hover scroll-reveal ${cardsVisible ? 'visible' : ''}`} style={getStaggerDelay(index)}>
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neon-900/30 rounded-lg flex items-center justify-center flex-shrink-0 icon-bounce">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-semibold text-foreground">{edu.degree}</h3>
                      <span className="text-muted-foreground font-medium">{edu.period}</span>
                    </div>
                    <h4 className="text-lg text-primary font-medium mb-2">{edu.institution}</h4>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="ml-16">
                  <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Award size={18} className="text-amber-400" />
                    {t('education.highlights')}
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        {typeof achievement === 'string' ? (
                          <span className="text-muted-foreground">{achievement}</span>
                        ) : (
                          <span className="text-muted-foreground">
                            <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="text-electric hover:text-electric-200 underline inline-flex items-center gap-1">
                              {achievement.text}<ExternalLink size={14} />
                            </a>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
