
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Trajetória Acadêmica e Profissional
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Possuo Mestrado em Design e Tecnologia pela UFRGS e graduação em Comunicação Social, 
              combinando uma sólida base teórica com experiência prática em design de interfaces e inovação tecnológica.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Minha expertise abrange UX/UI Design, Realidade Virtual e Aumentada, Inteligência Artificial em interfaces, 
              design de serviços e metodologias de design thinking. Tenho paixão por criar experiências digitais 
              que realmente fazem a diferença na vida das pessoas.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Atuo na intersecção entre pesquisa acadêmica e aplicação prática, sempre buscando soluções inovadoras 
              e centradas no usuário para problemas complexos.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl font-bold">UX</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800">UX/UI Design</h4>
                </div>
                <p className="text-slate-600">
                  Criação de interfaces intuitivas e experiências centradas no usuário.
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
                  Desenvolvimento de experiências imersivas em realidade virtual e aumentada.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl font-bold">AI</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800">IA em Interfaces</h4>
                </div>
                <p className="text-slate-600">
                  Integração de inteligência artificial para criar interfaces mais inteligentes.
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
