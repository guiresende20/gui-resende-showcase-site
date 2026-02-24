import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ModalContent, Project } from './projects/types';
import { getProjects } from './projects/projectsData';
import ProjectCard from './projects/ProjectCard';
import PatentSection from './projects/PatentSection';
import AwardsSection from './projects/AwardsSection';
import VideoSection from './projects/VideoSection';
import ProjectModal from './projects/ProjectModal';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ title: '', iframe: '', link: '' });
  const projects = getProjects(t);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible, getStaggerDelay } = useStaggerReveal(projects.length);

  const handleLearnMore = (project: Project) => {
    const isYouTubeUrl = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');
    const toYouTubeEmbed = (url: string) => {
      try {
        let videoId = '';
        if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1]?.split(/[?&]/)[0] ?? '';
        else if (url.includes('watch?v=')) videoId = new URL(url).searchParams.get('v') ?? '';
        else if (url.includes('/shorts/')) videoId = url.split('/shorts/')[1]?.split(/[?&]/)[0] ?? '';
        return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : url;
      } catch { return url; }
    };

    if (project.iframe) {
      setModalContent({ title: project.title, iframe: project.iframe });
      setModalOpen(true);
    } else if (project.link) {
      if (isYouTubeUrl(project.link)) {
        setModalContent({ title: project.title, iframe: toYouTubeEmbed(project.link) });
        setModalOpen(true);
      } else {
        window.open(project.link, '_blank');
      }
    }
  };

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="projects" ref={sectionRef} className={`py-20 bg-gradient-to-b from-slate-50 to-blue-50/30 section-transition ${sectionVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('projects.title')}</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t('projects.description')}</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`scroll-reveal ${gridVisible ? 'visible' : ''}`} style={getStaggerDelay(index)}>
              <ProjectCard project={project} onLearnMore={handleLearnMore} />
            </div>
          ))}
        </div>

        <VideoSection />
        <PatentSection />
        <AwardsSection />
      </div>

      <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} content={modalContent} />
    </section>
  );
};

export default Projects;
