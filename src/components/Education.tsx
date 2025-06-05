
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Mestrado em Design e Tecnologia",
      institution: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      period: "2019 - 2021",
      description: "Pesquisa focada em interfaces de realidade virtual e experiência do usuário em ambientes imersivos.",
      achievements: ["Bolsa de Pesquisa CNPq", "Publicação em revista internacional", "Melhor dissertação do programa"]
    },
    {
      degree: "Graduação em Comunicação Social",
      institution: "ESPM - Escola Superior de Propaganda e Marketing",
      period: "2015 - 2018",
      description: "Formação em comunicação digital com foco em design de interfaces e experiência do usuário.",
      achievements: ["Cum Laude", "Projeto de TCC premiado", "Estágio em agência internacional"]
    },
    {
      degree: "Curso de Especialização em UX Design",
      institution: "Interaction Design Foundation",
      period: "2020",
      description: "Certificação internacional em User Experience Design e Design Thinking.",
      achievements: ["Certificação internacional", "Top 5% da turma"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Educação</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-semibold text-slate-800">{edu.degree}</h3>
                      <span className="text-slate-500 font-medium">{edu.period}</span>
                    </div>
                    <h4 className="text-lg text-blue-600 font-medium mb-2">{edu.institution}</h4>
                    <p className="text-slate-600 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="ml-16">
                  <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <Award size={18} className="text-yellow-600" />
                    Destaques e Conquistas
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="text-slate-600">{achievement}</span>
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
