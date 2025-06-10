import React, { useEffect, useRef, useState } from 'react';

const videos = [
  'ztvpb8DujAc',
  'kx-RVrkZ_uQ',
  '1IXVnT018dM',
  'jHoE9FOKEWA',
  'NqbL4SRf8NE',
];

const AUTO_PREVIEW_DELAY = 5000;

const YouTubeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null);
  const previewTimeoutRef = useRef(null);
  const hasInteractedRef = useRef(false);
  const playerContainerId = 'youtube-player-container';
  const playerContainerRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    const loadYT = () =>
      new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve(window.YT);
        } else {
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          document.body.appendChild(tag);
          window.onYouTubeIframeAPIReady = () => resolve(window.YT);
        }
      });

    loadYT().then(() => createPlayer());

    return () => {
      clearTimeout(previewTimeoutRef.current);
      if (playerRef.current?.destroy) playerRef.current.destroy();
      if (observer.current) observer.current.disconnect();
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  useEffect(() => {
    if (playerRef.current?.destroy) playerRef.current.destroy();
    if (window.YT && window.YT.Player) createPlayer();
  }, [currentIndex]);

  useEffect(() => {
    if (!playerContainerRef.current) return;

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (playerRef.current?.mute && playerRef.current?.unMute) {
          entry.isIntersecting ? playerRef.current.unMute() : playerRef.current.mute();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.current.observe(playerContainerRef.current);

    return () => observer.current?.disconnect();
  }, [playerContainerRef.current, currentIndex]);

  const createPlayer = () => {
    if (!document.getElementById(playerContainerId)) return;

    playerRef.current = new window.YT.Player(playerContainerId, {
      videoId: videos[currentIndex],
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3,
        disablekb: 1,
        playsinline: 1,
        fs: 0,
        mute: 1,
      },
      events: {
        onReady: (event) => {
          event.target.mute();
          event.target.playVideo();
          hasInteractedRef.current = false;
          setupPreviewTimeout();
        },
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const onPlayerStateChange = (event) => {
    const state = event.data;

    if (state === window.YT.PlayerState.PLAYING) {
      clearTimeout(previewTimeoutRef.current);
      hasInteractedRef.current = true;
    }

    if (state === window.YT.PlayerState.ENDED) {
      goToNextVideo();
    }
  };

  const setupPreviewTimeout = () => {
    clearTimeout(previewTimeoutRef.current);
    previewTimeoutRef.current = setTimeout(() => {
      if (!hasInteractedRef.current) goToNextVideo();
    }, AUTO_PREVIEW_DELAY);
  };

  const goToNextVideo = () => {
    clearTimeout(previewTimeoutRef.current);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const goToPrevVideo = () => {
    clearTimeout(previewTimeoutRef.current);
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const userSelectVideo = (index) => {
    clearTimeout(previewTimeoutRef.current);
    hasInteractedRef.current = false;
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-secondary px-4 md:px-8 lg:px-16 py-16 sm:py-20" id='work'>
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12 text-white">
        Where your vision <span className="text-gradient">becomes Reality</span>
      </h2>

      <div className="relative flex flex-col items-center w-full max-w-7xl mx-auto">
        <div className="relative flex w-full items-center justify-center">
          <CarouselButton direction="prev" onClick={goToPrevVideo} />

          <div
            className="w-full max-w-3xl sm:mx-6 md:mx-12"
            ref={playerContainerRef}
          >
            <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
              <div
                id={playerContainerId}
                className="absolute top-0 left-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
            </div>
          </div>

          <CarouselButton direction="next" onClick={goToNextVideo} />
        </div>

        <CarouselDots
          count={videos.length}
          currentIndex={currentIndex}
          onDotClick={userSelectVideo}
        />

        <VideoCounter current={currentIndex + 1} total={videos.length} />
      </div>
    </section>
  );
};

const CarouselButton = ({ direction, onClick }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === 'prev' ? 'left-2 sm:left-4' : 'right-2 sm:right-4'
    } z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 glass rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold hover:bg-white/20 hover:shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent`}
    onClick={onClick}
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} video`}
  >
    {direction === 'prev' ? '‹' : '›'}
  </button>
);

const CarouselDots = ({ count, currentIndex, onDotClick }) => (
  <div className="flex justify-center items-center mt-6 gap-3 flex-wrap">
    {Array.from({ length: count }).map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none ${
          index === currentIndex
            ? 'bg-gradient-to-r from-accent to-accent-light shadow-md scale-125'
            : 'bg-white/30 hover:bg-white/60'
        }`}
        onClick={() => onDotClick(index)}
        aria-label={`Go to video ${index + 1}`}
      />
    ))}
  </div>
);

const VideoCounter = ({ current, total }) => (
  <div className="text-center mt-4">
    <span className="text-white/70 font-medium text-sm">
      {current} / {total}
    </span>
  </div>
);

export default YouTubeCarousel;
