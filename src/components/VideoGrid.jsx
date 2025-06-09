import React from 'react';

const videos = [
  { url: 'https://player.vimeo.com/video/1027579242' },
  { url: 'https://player.vimeo.com/video/1027581820' },
  { url: 'https://player.vimeo.com/video/1027581935' },
  { url: 'https://player.vimeo.com/video/1027582384' },
  { url: 'https://player.vimeo.com/video/1027581890' },
];

export const VideoGrid = () => {
  return (
    <div className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-light text-center mb-12 animate-fade-in-up">
          Watch Our <span className="text-gradient">Featured Shorts</span>
        </h2>

        <div className="flex flex-col items-center space-y-8">
          {/* First row: 3 videos */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {videos.slice(0, 3).map((video, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                style={{
                  aspectRatio: '9 / 16',
                  width: '100%',
                  maxWidth: '300px',
                  flex: '1 1 30%',
                }}
              >
                <iframe
                  src={video.url}
                  title={`Video ${index + 1}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          {/* Second row: 2 videos */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {videos.slice(3).map((video, index) => (
              <div
                key={index + 3}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                style={{
                  aspectRatio: '9 / 16',
                  width: '100%',
                  maxWidth: '300px',
                  flex: '1 1 30%', // same as row 1
                }}
              >
                <iframe
                  src={video.url}
                  title={`Video ${index + 4}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
