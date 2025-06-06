
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Doutorado em Design",
      institution: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      period: "2017 - em andamento",
      description: "Pesquisa em digitalização 3D e interação em realidade virtual. Desenvolvimento do projeto MuseuVR para interação natural em ambientes virtuais culturais.",
      achievements: ["Bolsista CAPES", "Pesquisador no LdSM", "Publicações internacionais"]
    },
    {
      degree: "Mestrado em Design e Tecnologia",
      institution: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      period: "2013 - 2015",
      description: "Formação avançada em design e tecnologia com foco em inovação e metodologias de pesquisa.",
      achievements: [
        "Dissertação aprovada", 
        "Participação em congressos", 
        "Pesquisa aplicada",
        {
          text: "Dissertação: O uso do design e das tecnologias 3D na criação do repositório digital de elementos de fachada dos prédios históricos da UFRGS",
          link: "https://www.lume.ufrgs.br/handle/10183/143935"
        }
      ]
    },
    {
      degree: "Graduação em Comunicação Social - Publicidade",
      institution: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      period: "2004 - 2010",
      description: "Formação em comunicação social com habilitação em publicidade e propaganda.",
      achievements: [
        "Formação completa", 
        "Projetos práticos", 
        "Base sólida em comunicação",
        {
          text: "TCC: Do Napster ao Grooveshark: uma análise comparativa da evolução do compartilhamento de música na internet",
          link: "https://bibliotecadigital.ufrgs.br/handle/10183/37592"
        }
      ]
    },
    {
      degree: "English for Business",
      institution: "Leinster College - Irlanda",
      period: "2009 - 2010",
      description: "Curso de inglês para negócios com imersão cultural na Irlanda.",
      achievements: ["Certificação internacional", "Fluência em inglês", "Experiência internacional"]
    },
    {
      degree: "Chora PPT - Apresentações Criativas",
      institution: "Perestroika",
      period: "2011",
      description: "Curso especializado em criação de apresentações criativas e storytelling.",
      achievements: ["Certificação em apresentações", "Técnicas avançadas", "Storytelling"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Formação Acadêmica</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-blue-900" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-semibold text-slate-800">{edu.degree}</h3>
                      <span className="text-slate-500 font-medium">{edu.period}</span>
                    </div>
                    <h4 className="text-lg text-blue-900 font-medium mb-2">{edu.institution}</h4>
                    <p className="text-slate-600 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="ml-16">
                  <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <Award size={18} className="text-yellow-600" />
                    Destaques
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-900 mr-3 mt-1">•</span>
                        {typeof achievement === 'string' ? (
                          <span className="text-slate-600">{achievement}</span>
                        ) : (
                          <span className="text-slate-600">
                            <a 
                              href={achievement.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                            >
                              {achievement.text}
                              <ExternalLink size={14} />
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
