
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, MapPin, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Entre em Contato</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto? Estou sempre aberto a novas oportunidades e colaborações.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Informações de Contato */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-900" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">E-mail</h3>
                  <p className="text-slate-600">guiresende20@gmail.com</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('mailto:guiresende20@gmail.com')}
              >
                Enviar E-mail
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">WhatsApp</h3>
                  <p className="text-slate-600">+55 51 99792-5092</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('https://wa.me/5551997925092')}
              >
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Localização</h3>
                  <p className="text-slate-600">Porto Alegre - RS, Brasil</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Links de Redes Sociais */}
        <div className="flex gap-4 justify-center mt-12">
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12"
            onClick={() => window.open('https://www.linkedin.com/in/guilhermeresende')}
          >
            <Linkedin size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12"
            onClick={() => window.open('http://lattes.cnpq.br/5709726694301047')}
          >
            <ExternalLink size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
