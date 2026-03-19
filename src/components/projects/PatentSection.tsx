import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../../hooks/useLanguage';

const PatentSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-12">
      <Card className="border-2 border-neon-800/50 bg-neon-900/10">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-foreground flex items-center gap-2">
            🏆 {t('projects.patent')}
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            <strong className="text-foreground">{t('projects.patent.title')}</strong>
            <br />
            {t('projects.patent.description')}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default PatentSection;
