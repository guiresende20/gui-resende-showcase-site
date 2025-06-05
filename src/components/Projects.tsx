
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Semear AgroHUB",
      description: "Plataforma digital para conectar produtores rurais com tecnologias sustentáveis e práticas inovadoras.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "UX Research"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "MuseuVR",
      description: "Experiência de realidade virtual para visitação virtual de museus, criando imersão total para o usuário.",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&h=250&fit=crop",
      technologies: ["Unity3D", "C#", "VR", "Blender"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "AI Interface Designer",
      description: "Ferramenta de design assistida por IA que ajuda designers a criar interfaces mais eficientes e acessíveis.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      technologies: ["React", "TensorFlow", "Python", "Figma API"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "EcoService Design",
      description: "Sistema de design de serviços sustentáveis com metodologias centradas no usuário e impacto ambiental.",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop",
      technologies: ["Service Design", "Design Thinking", "Sustainability", "User Research"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projetos & Prêmios</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Seleção de projetos que demonstram minha expertise em design, tecnologia e inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                <CardTitle className="text-xl font-semibold text-slate-800">
                  {project.title}
                </CardTitle>
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
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Ver Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
