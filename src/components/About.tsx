
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              {t('about.journey')}
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t('about.description2')}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('about.description3')}
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-900 text-xl font-bold">UX</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800">{t('about.ux.title')}</h4>
                </div>
                <p className="text-slate-600">
                  {t('about.ux.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl font-bold">VR</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800">{t('about.vr.title')}</h4>
                </div>
                <p className="text-slate-600">
                  {t('about.vr.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl font-bold">AI</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800">{t('about.ai.title')}</h4>
                </div>
                <p className="text-slate-600">
                  {t('about.ai.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
