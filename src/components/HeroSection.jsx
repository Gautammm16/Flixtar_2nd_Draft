import React, { useEffect, useRef } from 'react';

export const HeroSection = () => {
  const sectionRef = useRef(null);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-primary px-6 py-10 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroHeading />
      <HeroVideo />
      <HeroButtons onNavClick={handleNavClick} />
      <CarouselBackgroundElements />
    </section>
  );
};

const HeroHeading = () => (
  <div className="text-center max-w-4xl mb-12">
    <h1
      id="hero-heading"
      className="text-4xl md:text-5xl font-extrabold text-light mb-4 animate-fade-in-up"
    >
      Ensure Your Online Growth
    </h1>
    <p className="text-accent-light text-lg md:text-xl leading-relaxed">
      We Transform CEOs into Industry Icons through <br />
      <span className="italic font-medium text-gradient">
        "Strategic Video Branding"
      </span>
    </p>
  </div>
);


const HeroVideo = () => {
  const videoContainerRef = useRef(null);
  const playerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve();
        } else {
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          document.body.appendChild(tag);
          window.onYouTubeIframeAPIReady = resolve;
        }
      });
    };

    const createPlayer = () => {
      playerRef.current = new window.YT.Player(videoRef.current, {
        events: {
          onReady: (event) => {
            event.target.playVideo();
            event.target.unMute();
          },
        },
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (playerRef.current) {
          if (entry.isIntersecting) {
            playerRef.current.unMute();
          } else {
            playerRef.current.mute();
          }
        }
      },
      { threshold: 0.5 }
    );

    loadYouTubeAPI().then(() => {
      createPlayer();
      if (videoContainerRef.current) {
        observer.observe(videoContainerRef.current);
      }
    });

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={videoContainerRef}
      className="max-w-4xl w-full mb-12 border-4 border-accent rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300"
    >
      <div className="relative w-full h-0 pb-[56.25%]">
        <iframe
          ref={videoRef}
          id="hero-video"
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/eIehlyi_ca0?enablejsapi=1&autoplay=1&mute=0&loop=1&playlist=eIehlyi_ca0&controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&fs=0"
          title="Strategic Video Branding by Flixtar"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
};


const HeroButtons = ({ onNavClick }) => (
  <div className="flex flex-col sm:flex-row gap-4">
    <button
      onClick={() => onNavClick('book')}
      className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
      aria-label="Book a Call"
    >
      Book a Call
    </button>
    <button
      onClick={() => onNavClick('work')}
      className="px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition"
      aria-label="See our Work"
    >
      See our Work
    </button>
  </div>
);

const CarouselBackgroundElements = () => (
  <>
    <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none"></div>
    <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-full blur-xl animate-float"></div>
    <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-accent-light/20 to-accent/20 rounded-full blur-xl animate-float delay-1000"></div>
    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-accent/10 to-accent-light/10 rounded-full blur-lg animate-float delay-2000"></div>
  </>
);