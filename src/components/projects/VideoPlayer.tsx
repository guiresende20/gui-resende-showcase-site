
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

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
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeEmbedUrl = (youtubeId: string) => {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=${isPlaying ? 1 : 0}&rel=0`;
  };

  const handleVideoSelect = (video: Video) => {
    setCurrentVideo(video);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!currentVideo) return null;

  return (
    <div className="space-y-6">
      {/* Video Player */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video">
            <iframe
              src={getYouTubeEmbedUrl(currentVideo.youtubeId)}
              title={currentVideo.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              {currentVideo.title}
            </h3>
            {currentVideo.description && (
              <p className="text-slate-600">{currentVideo.description}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Video Playlist */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">
            Lista de Vídeos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {videos.map((video, index) => (
              <Button
                key={index}
                variant={currentVideo.youtubeId === video.youtubeId ? "default" : "outline"}
                className="w-full justify-start text-left h-auto p-3"
                onClick={() => handleVideoSelect(video)}
              >
                <div className="flex items-center gap-3">
                  <Play size={16} />
                  <span className="truncate">{video.title}</span>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoPlayer;
