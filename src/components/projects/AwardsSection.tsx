import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const AwardsSection: React.FC = () => {
  const { t } = useLanguage();

  const awards = [
    {
      title: t('Prêmio Bornancini 2024'),
      description: t('Categoria Design Digital - Realidade Aumentada e Realidades Extendidas'),
      link: 'https://drive.google.com/file/d/1ls8JBOotSEa8f7nBAFqPVHz0d7_P59E5/view?usp=drive_link'
    },
    {
      title: t('39º PRÊMIO DIREITOS HUMANOS DE JORNALISMO 2022'),
      description: t('Menção honrosa 39º PRÊMIO DIREITOS HUMANOS DE JORNALISMO 2022 - projeto Revista Ceos'),
      link: 'https://www.coletiva.net/noticias/gauchos-se-destacam-no-39-premio-direitos-humanos-de-jornalismo-,421812.jhtml'
    }
  ];

  return (
    <div className="mt-8">
      <Card className="border-2 border-amber-800/50 bg-amber-900/10">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-foreground flex items-center gap-2">
            🏆 {t('Prêmios e Reconhecimentos')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {awards.map((award, index) => (
            <div key={index} className="border-l-4 border-amber-500/50 pl-4">
              <h4 className="text-lg font-semibold text-foreground mb-2">{award.title}</h4>
              <p className="text-muted-foreground mb-3">{award.description}</p>
              <Button variant="outline" size="sm" className="flex items-center gap-2 btn-enhanced" onClick={() => window.open(award.link, '_blank')}>
                <ExternalLink size={16} />
                {t('projects.viewProject')}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AwardsSection;
