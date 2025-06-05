
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "InVision", level: 80 },
        { name: "Design Thinking", level: 95 },
        { name: "User Research", level: 90 }
      ]
    },
    {
      title: "Desenvolvimento",
      skills: [
        { name: "React", level: 85 },
        { name: "React Native", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      title: "3D & VR/AR",
      skills: [
        { name: "Unity3D", level: 90 },
        { name: "Blender", level: 85 },
        { name: "C#", level: 80 },
        { name: "ARCore/ARKit", level: 75 },
        { name: "Oculus SDK", level: 85 },
        { name: "3D Modeling", level: 80 }
      ]
    },
    {
      title: "IA & Dados",
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "Python", level: 80 },
        { name: "Data Analysis", level: 75 },
        { name: "AI Ethics", level: 85 },
        { name: "Computer Vision", level: 70 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Habilidades & Competências</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
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
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
