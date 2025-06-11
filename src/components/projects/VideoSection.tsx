
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VideoPlayer from './VideoPlayer';
import { useLanguage } from '../../hooks/useLanguage';

const VideoSection: React.FC = () => {
  const { t } = useLanguage();

  const videos = [
    {
      title: "MUSEU VR - REPORTAGEM",
      youtubeId: "MfF3DtRcPt8",
      description: "Reportagem sobre o projeto de Museu Virtual desenvolvido na UFRGS"
    },
    {
      title: "TECNOPUC 3D",
      youtubeId: "PnA-OM2vmQ4",
      description: "Demonstração das tecnologias 3D desenvolvidas no TECNOPUC"
    },
    {
      title: "MUSEUVR",
      youtubeId: "JV1fSU26OI8",
      description: "Apresentação completa do projeto MuseuVR"
    },
    {
      title: "DIGITALIZAÇÃO 3D - INS QUÍMICA UFRGS / CENTRO CULTURAL",
      youtubeId: "cnu7cPUpoUw",
      description: "Processo de digitalização 3D do Instituto de Química da UFRGS"
    },
    {
      title: "IASPI 3D",
      youtubeId: "D8rCRnvKOtg",
      description: "Projeto de digitalização 3D do IASPI"
    },
    {
      title: "GRAFITTI VR",
      youtubeId: "dbQSeUF8NOQ",
      description: "Experiência de realidade virtual com grafitti"
    }
  ];

  return (
    <div className="mt-12">
      <Card className="border-2 border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-slate-800 flex items-center gap-2">
            🎥 {t('Vídeos dos Projetos')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VideoPlayer videos={videos} />
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoSection;
