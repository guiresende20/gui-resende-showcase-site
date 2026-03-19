import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
  onLearnMore: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onLearnMore }) => {
  const { t } = useLanguage();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Pesquisa': return 'bg-electric-800/30 text-electric';
      case 'Profissional': return 'bg-neon-900/30 text-neon';
      case 'Educacional': return 'bg-accent text-accent-foreground';
      case 'Editorial': return 'bg-amber-900/30 text-amber-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="group glass-card gradient-border-hover tilt-card">
      <div className="overflow-hidden rounded-t-lg relative">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl font-semibold text-foreground">{project.title}</CardTitle>
          <span className={`px-2 py-1 text-xs rounded-full font-medium ${getTypeColor(project.type)}`}>{project.type}</span>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-neon-900/20 text-neon text-sm rounded-full font-medium">{tech}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          {(project.link || project.iframe) ? (
            <Button variant="outline" size="sm" className="flex items-center gap-2 btn-enhanced" onClick={() => onLearnMore(project)}>
              <FileText size={16} />{t('projects.learnMore')}
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="flex items-center gap-2" disabled>
              <FileText size={16} />{t('projects.learnMore')}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
