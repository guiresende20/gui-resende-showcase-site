import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: skillsRef, isVisible: skillsVisible, getStaggerDelay } = useStaggerReveal(4);
  const { ref: langRef, isVisible: langVisible } = useScrollReveal();
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    if (skillsVisible) {
      const timer = setTimeout(() => setAnimateBars(true), 300);
      return () => clearTimeout(timer);
    }
  }, [skillsVisible]);

  const skillCategories = [
    {
      title: "UX/UI Design",
      skills: [
        { name: "Figma", level: 95 }, { name: "User Research", level: 90 },
        { name: "Prototipagem", level: 95 }, { name: "Design Thinking", level: 90 },
        { name: "Service Design", level: 85 }, { name: "Usabilidade", level: 90 }
      ]
    },
    {
      title: "Inteligência Artificial",
      skills: [
        { name: "IA aplicada a Design", level: 85 }, { name: "Análises Estratégicas", level: 80 },
        { name: "Geração de Insights", level: 85 }, { name: "Machine Learning", level: 70 },
        { name: "Data Analysis", level: 75 }, { name: "AI Ethics", level: 80 }
      ]
    },
    {
      title: "VR/AR & 3D",
      skills: [
        { name: "Unity 3D", level: 90 }, { name: "Blender", level: 85 },
        { name: "Realidade Virtual", level: 95 }, { name: "Realidade Aumentada", level: 85 },
        { name: "Digitalização 3D", level: 90 }, { name: "Impressão 3D", level: 85 }
      ]
    },
    {
      title: "Desenvolvimento & Tecnologia",
      skills: [
        { name: "React Native", level: 80 }, { name: "C#", level: 75 },
        { name: "HTML/CSS", level: 85 }, { name: "JavaScript", level: 75 },
        { name: "Prototipagem Rápida", level: 90 }, { name: "Workshop Facilitation", level: 95 }
      ]
    }
  ];

  const languages = [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Profissional" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Tecnologias</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`glass-card gradient-border-hover scroll-reveal ${skillsVisible ? 'visible' : ''}`} style={getStaggerDelay(index)}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${animateBars ? 'shimmer-bar' : ''}`}
                          style={{ width: animateBars ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={langRef}>
          <Card className={`glass-card gradient-border-hover scroll-reveal ${langVisible ? 'visible' : ''}`}>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                Idiomas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {languages.map((language, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-800 font-medium">{language.name}</span>
                    <span className="text-blue-900 font-semibold">{language.level}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
