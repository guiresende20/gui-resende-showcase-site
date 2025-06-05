
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <div className="space-y-6">
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

            {/* Links de Redes Sociais */}
            <div className="flex gap-4 justify-center">
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

          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-800">
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-medium mb-2">
                        Nome
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-medium mb-2">
                        E-mail
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-me sobre seu projeto ou como posso ajudar..."
                      rows={6}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
