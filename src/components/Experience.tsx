
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Designer e Pesquisador em Inovação",
      company: "CriaLab - Tecnopuc",
      period: "2021 - atual",
      description: [
        "Desenvolvimento de projetos de UX/UI, IA e tecnologias imersivas (VR/AR)",
        "Soluções estratégicas para empresas como HP e órgãos públicos",
        "Prototipagem rápida, impressão 3D e facilitação de workshops"
      ]
    },
    {
      title: "Doutorando e Pesquisador",
      company: "UFRGS - LdSM",
      period: "2017 - atual",
      description: [
        "Pesquisa em digitalização 3D e interação em realidade virtual",
        "Desenvolvimento do projeto MuseuVR",
        "Publicações científicas sobre preservação de patrimônio em RA"
      ]
    },
    {
      title: "Professor",
      company: "ESPM",
      period: "2018 - 2022",
      description: [
        "Cursos de Publicidade, Design, Jornalismo e Administração",
        "Disciplinas: Cibercultura, Mobilidade & Apps, Design Editorial, Design Digital, Consumo e entretenimento digital, Webdesign, Projeto IV Inovação Social, Desenho Digital, Mobilidade e Aplicativos, Inovação Social"
      ]
    },
    {
      title: "Head de Marketing",
      company: "BSMotion",
      period: "2017",
      description: [
        "Desenvolvimento de soluções em VR com hardware e software integrados",
        "Estratégia de marketing para startup de tecnologia",
        "Gestão de equipe e relacionamento com clientes"
      ]
    },
    {
      title: "Gestor de Marketing",
      company: "Anglo Vestibulares",
      period: "2012-2013 / 2008",
      description: [
        "Desenvolvimento do novo site do curso",
        "Reestruturação da comunicação institucional",
        "Desenvolvimento de ações promocionais",
        "Análise de mercado e estratégias competitivas"
      ]
    },
    {
      title: "Executivo de Contas e Curador",
      company: "Campus Party Brasil",
      period: "2010-2011",
      description: [
        "Curadoria da área de games",
        "Planejamento de conteúdo e gestão orçamentária",
        "Relacionamento com patrocinadores e parceiros"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experiência Profissional</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-blue-900 font-medium">{exp.company}</h4>
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
                      <span className="text-blue-900 mr-3 mt-2">•</span>
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
