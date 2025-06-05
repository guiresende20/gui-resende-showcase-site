
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Designer & Pesquisador em Inovação",
      company: "Empresa Atual",
      period: "2023 - Presente",
      description: [
        "Desenvolvimento de interfaces inovadoras utilizando metodologias de design thinking",
        "Pesquisa e implementação de soluções em VR/AR para problemas complexos",
        "Liderança de projetos multidisciplinares com foco em experiência do usuário"
      ]
    },
    {
      title: "UX/UI Designer Sênior",
      company: "Empresa Anterior",
      period: "2021 - 2023",
      description: [
        "Design de interfaces web e mobile para aplicações de alta complexidade",
        "Condução de pesquisas com usuários e testes de usabilidade",
        "Colaboração com equipes de desenvolvimento para implementação de designs"
      ]
    },
    {
      title: "Designer de Produto",
      company: "Startup Tecnológica",
      period: "2019 - 2021",
      description: [
        "Criação de produtos digitais do conceito ao lançamento",
        "Prototipagem rápida e validação de conceitos com usuários",
        "Implementação de sistemas de design escaláveis"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experiência Profissional</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-blue-600 font-medium">{exp.company}</h4>
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
                      <span className="text-blue-600 mr-3 mt-2">•</span>
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
