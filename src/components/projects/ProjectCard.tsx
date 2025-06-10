
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
      case 'Pesquisa': return 'bg-blue-100 text-blue-800';
      case 'Profissional': return 'bg-green-100 text-green-800';
      case 'Educacional': return 'bg-purple-100 text-purple-800';
      case 'Editorial': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
              onClick={() => onLearnMore(project)}
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
  );
};

export default ProjectCard;
