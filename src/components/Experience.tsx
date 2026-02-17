import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, ExternalLink, Play } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import ImageModal from './ImageModal';
import ProjectModal from './projects/ProjectModal';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const Experience = () => {
  const { t } = useLanguage();
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoModalContent, setVideoModalContent] = useState({ title: '', iframe: '' });
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  const experiences = [
    {
      title: t('experience.crialab.title'),
      company: t('experience.crialab.company'),
      period: t('experience.crialab.period'),
      location: "Porto Alegre, RS",
      descriptions: [t('experience.crialab.description1'), t('experience.crialab.description2'), t('experience.crialab.description3')],
      type: "current"
    },
    {
      title: t('experience.ufrgs.title'),
      company: t('experience.ufrgs.company'),
      period: t('experience.ufrgs.period'),
      location: "Porto Alegre, RS",
      descriptions: [t('experience.ufrgs.description1'), t('experience.ufrgs.description2'), t('experience.ufrgs.description3')],
      type: "education"
    },
    {
      title: t('experience.espm.title'),
      company: t('experience.espm.company'),
      period: t('experience.espm.period'),
      location: "Porto Alegre, RS",
      descriptions: [t('experience.espm.description1'), t('experience.espm.description2')],
      type: "professional"
    },
    {
      title: t('experience.bsmotion.title'),
      company: t('experience.bsmotion.company'),
      period: t('experience.bsmotion.period'),
      location: "Porto Alegre, RS",
      descriptions: [t('experience.bsmotion.description1'), t('experience.bsmotion.description2'), t('experience.bsmotion.description3')],
      type: "professional"
    },
    {
      title: t('experience.anglo.title'),
      company: t('experience.anglo.company'),
      period: t('experience.anglo.period'),
      location: "Porto Alegre, RS",
      descriptions: [t('experience.anglo.description1'), t('experience.anglo.description2'), t('experience.anglo.description3'), t('experience.anglo.description4')],
      type: "professional",
      thumbnails: [
        "/lovable-uploads/391c7ceb-0e2c-46fc-b88a-98874b459ab4.png",
        "/lovable-uploads/382ba06e-e8a9-4521-8e91-8c2f22d28045.png",
        "/lovable-uploads/fc5b37ef-bb5e-4d11-a8f5-0ec6f21e1b89.png"
      ]
    },
    {
      title: t('experience.campus.title'),
      company: t('experience.campus.company'),
      period: t('experience.campus.period'),
      location: "São Paulo, SP",
      descriptions: [t('experience.campus.description1'), t('experience.campus.description2'), t('experience.campus.description3')],
      type: "professional",
      videoLink: "https://www.youtube.com/watch?v=oriyrJ_0QVY&ab_channel=GuilhermeResende"
    }
  ];

  const { ref: cardsRef, isVisible: cardsVisible, getStaggerDelay } = useStaggerReveal(experiences.length);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current': return 'bg-green-100 text-green-800 border-green-200';
      case 'education': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'professional': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleVideoClick = (videoLink: string) => {
    const toYouTubeEmbed = (url: string) => {
      try {
        let videoId = '';
        if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1]?.split(/[?&]/)[0] ?? '';
        else if (url.includes('watch?v=')) videoId = new URL(url).searchParams.get('v') ?? '';
        else if (url.includes('/shorts/')) videoId = url.split('/shorts/')[1]?.split(/[?&]/)[0] ?? '';
        return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : url;
      } catch { return url; }
    };
    setVideoModalContent({ title: 'Campus Party Brasil', iframe: toYouTubeEmbed(videoLink) });
    setVideoModalOpen(true);
  };

  const handleImageClick = (imageSrc: string, imageAlt: string) => setModalImage({ src: imageSrc, alt: imageAlt });

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('experience.title')}</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
        </div>

        <div ref={cardsRef} className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-900 glass-card gradient-border-hover scroll-reveal ${cardsVisible ? 'visible' : ''}`}
              style={getStaggerDelay(index)}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl font-bold text-slate-800">{exp.title}</CardTitle>
                      <span className={`px-3 py-1 text-sm rounded-full font-medium border ${getTypeColor(exp.type)}`}>
                        {exp.type === 'current' ? 'Atual' : exp.type === 'education' ? 'Acadêmico' : 'Profissional'}
                      </span>
                    </div>
                    <p className="text-xl font-semibold text-blue-900 mb-2">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-600">
                      <div className="flex items-center gap-1"><Calendar size={16} /><span className="font-medium">{exp.period}</span></div>
                      <div className="flex items-center gap-1"><MapPin size={16} /><span>{exp.location}</span></div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.descriptions.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
                {exp.thumbnails && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-600 mb-3">Desenvolvimento do novo site do curso:</h4>
                    <div className="flex gap-4 flex-wrap">
                      {exp.thumbnails.map((thumbnail, thumbIndex) => (
                        <div key={thumbIndex} className="w-24 h-24 rounded-lg overflow-hidden border border-slate-200 hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleImageClick(thumbnail, `Anglo Vestibulares thumbnail ${thumbIndex + 1}`)}>
                          <img src={thumbnail} alt={`Anglo Vestibulares thumbnail ${thumbIndex + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {exp.videoLink && (
                  <div className="mt-6">
                    <button onClick={() => handleVideoClick(exp.videoLink)} className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors btn-enhanced">
                      <Play size={16} />Vídeo do Evento Campus Party<ExternalLink size={14} />
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ImageModal isOpen={!!modalImage} onClose={() => setModalImage(null)} imageSrc={modalImage?.src || ''} imageAlt={modalImage?.alt || ''} />
      <ProjectModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} content={videoModalContent} />
    </section>
  );
};

export default Experience;
