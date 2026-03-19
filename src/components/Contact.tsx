import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible, getStaggerDelay } = useStaggerReveal(3);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">Entre em Contato</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto? Estou sempre aberto a novas oportunidades e colaborações.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className={`glass-card gradient-border-hover scroll-reveal ${cardsVisible ? 'visible' : ''}`} style={getStaggerDelay(0)}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-neon-900/30 rounded-lg flex items-center justify-center icon-bounce">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">E-mail</h3>
                  <p className="text-muted-foreground">guiresende20@gmail.com</p>
                </div>
              </div>
              <Button variant="outline" className="w-full btn-enhanced" onClick={() => window.open('mailto:guiresende20@gmail.com')}>
                Enviar E-mail
              </Button>
            </CardContent>
          </Card>

          <Card className={`glass-card gradient-border-hover scroll-reveal ${cardsVisible ? 'visible' : ''}`} style={getStaggerDelay(1)}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-neon-900/30 rounded-lg flex items-center justify-center icon-bounce">
                  <MessageSquare className="text-neon-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">+55 51 99792-5092</p>
                </div>
              </div>
              <Button variant="outline" className="w-full btn-enhanced" onClick={() => window.open('https://wa.me/5551997925092')}>
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className={`glass-card gradient-border-hover scroll-reveal ${cardsVisible ? 'visible' : ''}`} style={getStaggerDelay(2)}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-electric-800/30 rounded-lg flex items-center justify-center icon-bounce">
                  <MapPin className="text-electric" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Localização</h3>
                  <p className="text-muted-foreground">Porto Alegre - RS, Brasil</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 justify-center mt-12">
          <Button variant="outline" size="icon" className="w-12 h-12 btn-enhanced" onClick={() => window.open('https://www.linkedin.com/in/guilhermeresende')}>
            <Linkedin size={20} />
          </Button>
          <Button variant="outline" size="icon" className="w-12 h-12 btn-enhanced" onClick={() => window.open('http://lattes.cnpq.br/5709726694301047')}>
            <ExternalLink size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
