
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const AwardsSection: React.FC = () => {
  const { t } = useLanguage();

  const awards = [
    {
      title: t('projects.awards.bordancini.title'),
      description: t('projects.awards.bordancini.description'),
      link: 'https://drive.google.com/file/d/1ls8JBOotSEa8f7nBAFqPVHz0d7_P59E5/view?usp=drive_link'
    },
    {
      title: t('projects.awards.jornalismo.title'),
      description: t('projects.awards.jornalismo.description'),
      link: 'https://www.coletiva.net/noticias/gauchos-se-destacam-no-39-premio-direitos-humanos-de-jornalismo-,421812.jhtml'
    }
  ];

  return (
    <div className="mt-8">
      <Card className="border-2 border-amber-200 bg-amber-50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-slate-800 flex items-center gap-2">
            🏆 {t('projects.awards')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {awards.map((award, index) => (
            <div key={index} className="border-l-4 border-amber-400 pl-4">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">
                {award.title}
              </h4>
              <p className="text-slate-700 mb-3">
                {award.description}
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => window.open(award.link, '_blank')}
              >
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
