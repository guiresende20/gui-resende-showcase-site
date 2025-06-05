
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Trajetória Acadêmica e Profissional
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Designer e pesquisador com mestrado em Design e Tecnologia e graduação em Comunicação Social pela UFRGS. 
              Atuo no CriaLab - Tecnopuc com projetos de UX/UI, IA e tecnologias imersivas (VR/AR), desenvolvendo 
              soluções estratégicas para empresas como a HP e órgãos públicos (ex.: Semear Agrohub).
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Tenho experiência prática em prototipagem rápida, impressão 3D e facilitação de workshops. 
              Sou entusiasta da tecnologia e utilizo IA para análises estratégicas, geração de insights e design de serviços.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Minha trajetória inclui passagens pela ESPM como professor, pelo marketing do Anglo Vestibulares 
              e pela startup BSMotion, sempre na intersecção entre tecnologia, design e inovação.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-900 text-xl font-bold">UX</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800">UX/UI Design</h4>
                </div>
                <p className="text-slate-600">
                  Desenvolvimento de soluções estratégicas e interfaces centradas no usuário.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl font-bold">VR</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800">VR/AR</h4>
                </div>
                <p className="text-slate-600">
                  Pesquisa e desenvolvimento em tecnologias imersivas e interação natural.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl font-bold">AI</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800">IA em Design</h4>
                </div>
                <p className="text-slate-600">
                  Utilização de IA para análises estratégicas e geração de insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
