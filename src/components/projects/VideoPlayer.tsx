
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Play } from 'lucide-react';

interface Video {
  title: string;
  youtubeId: string;
  description?: string;
}

interface VideoPlayerProps {
  videos: Video[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(videos[0] || null);

  const getYouTubeEmbedUrl = (youtubeId: string) => {
    return `https://www.youtube.com/embed/${youtubeId}?rel=0`;
  };

  const handleVideoSelect = (video: Video) => {
    setCurrentVideo(video);
  };

  if (!currentVideo) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Video Player */}
      <div className="lg:col-span-2">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video">
              <iframe
                src={getYouTubeEmbedUrl(currentVideo.youtubeId)}
                title={currentVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />

            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {currentVideo.title}
              </h3>
              {currentVideo.description &&
              <p className="text-slate-600">{currentVideo.description}</p>
              }
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Video Playlist */}
      <div className="lg:col-span-1">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">
              Lista de Vídeos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <div className="space-y-2 pr-4">
                {videos.map((video, index) =>
                <Button
                  key={index}
                  variant={currentVideo.youtubeId === video.youtubeId ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto p-3"
                  onClick={() => handleVideoSelect(video)}>

                    <div className="flex items-start gap-3">
                      <Play size={16} className="mt-1 flex-shrink-0" />
                      <span className="text-sm leading-tight font-extralight">{video.title}</span>
                    </div>
                  </Button>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default VideoPlayer;