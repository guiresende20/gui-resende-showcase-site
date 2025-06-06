
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Modal } from '@/components/ui/modal';

const Projects = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; iframe?: string; link?: string }>({
    title: '',
    iframe: '',
    link: ''
  });
  
  const projects = [
    {
      title: "MuseuVR",
      description: "Projeto de doutorado focado em interação natural em ambientes virtuais culturais, desenvolvendo novas formas de experiência imersiva em museus.",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&h=250&fit=crop",
      technologies: ["Unity", "VR", "C#", "Interação Natural"],
      type: "Pesquisa",
      link: "https://youtu.be/JV1fSU26OI8"
    },
    {
      title: "Semear AgroHUB",
      description: "Desenvolvimento de estratégia, UX e governança para hub de inovação no agronegócio, conectando produtores com tecnologias sustentáveis.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop",
      technologies: ["UX Strategy", "Service Design", "Governança", "Inovação"],
      type: "Profissional",
      link: "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:4887118c-3eca-3a20-ba15-09492d48bd71"
    },
    {
      title: "Projeto Aula 360º",
      description: "Iniciativa educacional utilizando tecnologias imersivas para criar experiências de aprendizado em realidade virtual.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
      technologies: ["VR", "Educação", "Unity", "Design Educacional"],
      type: "Educacional",
      iframe: "https://player.vimeo.com/video/53293573"
    },
    {
      title: "Avaliação app Mobiteste",
      description: "Pesquisa e avaliação de usabilidade do aplicativo educacional Mobiteste, com foco na experiência do usuário estudante.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["UX Research", "Usabilidade", "Mobile UX", "Educação"],
      type: "Pesquisa",
      link: "https://lume.ufrgs.br/handle/10183/159288"
    },
    {
      title: "Ebook Leituras Obrigatórias UFRGS",
      description: "Desenvolvimento de material educacional digital para auxiliar estudantes nas leituras obrigatórias do vestibular.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      technologies: ["Design Editorial", "UX", "Educação", "Digital Publishing"],
      type: "Editorial",
      iframe: "https://player.vimeo.com/video/140704714?h=d93163f478"
    },
    {
      title: "Digitalização 3D: Preservação de Patrimônio",
      description: "Desenvolvimento de repositório 3D de digitalizações de prédios históricos votaldo para preservação e divulgação do patrimônio cultural. O projeto foi um dos resultados do meu mestrado",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
      technologies: ["AR", "Patrimônio Cultural", "Preservação", "Research"],
      type: "Pesquisa",
      link: "https://www.ufrgs.br/ldsm/3d/"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Pesquisa': return 'bg-blue-100 text-blue-800';
      case 'Profissional': return 'bg-green-100 text-green-800';
      case 'Educacional': return 'bg-purple-100 text-purple-800';
      case 'Editorial': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleLearnMore = (project: any) => {
    if (project.iframe) {
      setModalContent({
        title: project.title,
        iframe: project.iframe
      });
      setModalOpen(true);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('projects.title')}</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-semibold text-slate-800">
                    {project.title}
                  </CardTitle>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-900 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {(project.link || project.iframe) ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => handleLearnMore(project)}
                    >
                      <FileText size={16} />
                      {t('projects.learnMore')}
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="flex items-center gap-2" disabled>
                      <FileText size={16} />
                      {t('projects.learnMore')}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Patente */}
        <div className="mt-12">
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-800 flex items-center gap-2">
                🏆 {t('projects.patent')}
              </CardTitle>
              <CardDescription className="text-lg text-slate-700">
                <strong>Sistema e método de produção de assentos personalizáveis</strong>
                <br />
                Inovação tecnológica registrada com aplicação industrial.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
      >
        {modalContent.iframe && (
          <iframe
            src={modalContent.iframe}
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            className="rounded"
          />
        )}
      </Modal>
    </section>
  );
};

export default Projects;
