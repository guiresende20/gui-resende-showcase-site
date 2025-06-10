
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useLanguage } from '../hooks/useLanguage';

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: t('experience.crialab.title'),
      company: t('experience.crialab.company'),
      period: t('experience.crialab.period'),
      description: [
        t('experience.crialab.description1'),
        t('experience.crialab.description2'),
        t('experience.crialab.description3')
      ]
    },
    {
      title: t('experience.ufrgs.title'),
      company: t('experience.ufrgs.company'),
      period: t('experience.ufrgs.period'),
      description: [
        t('experience.ufrgs.description1'),
        t('experience.ufrgs.description2'),
        t('experience.ufrgs.description3')
      ]
    },
    {
      title: t('experience.espm.title'),
      company: t('experience.espm.company'),
      period: t('experience.espm.period'),
      description: [
        t('experience.espm.description1'),
        t('experience.espm.description2')
      ]
    },
    {
      title: t('experience.bsmotion.title'),
      company: t('experience.bsmotion.company'),
      period: t('experience.bsmotion.period'),
      description: [
        t('experience.bsmotion.description1'),
        t('experience.bsmotion.description2'),
        t('experience.bsmotion.description3')
      ]
    },
    {
      title: t('experience.anglo.title'),
      company: t('experience.anglo.company'),
      period: t('experience.anglo.period'),
      description: [
        t('experience.anglo.description1'),
        t('experience.anglo.description2'),
        t('experience.anglo.description3'),
        t('experience.anglo.description4')
      ]
    },
    {
      title: t('experience.campus.title'),
      company: t('experience.campus.company'),
      period: t('experience.campus.period'),
      description: [
        t('experience.campus.description1'),
        t('experience.campus.description2'),
        t('experience.campus.description3')
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('experience.title')}</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-blue-900 font-medium">{exp.company}</h4>
                  </div>
                  <span className="text-slate-500 font-medium md:text-right mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-900 mr-3 mt-2">•</span>
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
