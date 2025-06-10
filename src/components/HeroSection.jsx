import React, { useEffect, useRef, useState } from 'react';

export const HeroSection = () => {
  const sectionRef = useRef(null);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center bg-primary px-6 py-10 relative"
      id="hero"
    >
      <HeroHeading />
      <HeroVideo />
      <HeroButtons onNavClick={handleNavClick} />
      <CarouselBackgroundElements />
    </div>
  );
};

const HeroHeading = () => (
  <div className="text-center max-w-4xl mb-12">
    <h1 className="text-4xl md:text-5xl font-extrabold text-light mb-4 animate-fade-in-up">
      Ensure Your Online Growth
    </h1>
    <p className="text-accent-light text-lg md:text-xl">
      We Transform CEOs into Industry Icons through <br />
      <span className="italic font-medium text-gradient">
        "Strategic Video Branding"
      </span>
    </p>
  </div>
);

// const HeroVideo = () => {
//   const videoContainerRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const videoUrl = "https://www.youtube.com/embed/eIehlyi_ca0";

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     if (videoContainerRef.current) {
//       observer.observe(videoContainerRef.current);
//     }

//     return () => {
//       if (videoContainerRef.current) {
//         observer.unobserve(videoContainerRef.current);
//       }
//     };
//   }, []);

//   // Generate the iframe src based on visibility
//   const getVideoSrc = () => {
//     const params = new URLSearchParams({
//       autoplay: 1,
//       loop: 1,
//       playlist: 'eIehlyi_ca0',
//       controls: 1,
//       modestbranding: 1,
//       rel: 0,
//       iv_load_policy: 3,
//       disablekb: 1,
//       playsinline: 1,
//       fs: 0,
//       enablejsapi: 1,
//       mute: isVisible ? 0 : 1 // Toggle mute based on visibility
//     });
//     return `${videoUrl}?${params.toString()}`;
//   };

//   return (
//     <div ref={videoContainerRef} className="max-w-4xl w-full mb-12 border-4 border-accent rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300">
//       <div className="relative w-full h-0 pb-[56.25%]">
//         <iframe
//           key={isVisible ? 'visible' : 'hidden'} // Force re-render when visibility changes
//           className="absolute top-0 left-0 w-full h-full"
//           src={getVideoSrc()}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//           referrerPolicy="strict-origin-when-cross-origin"
//         />
//       </div>
//     </div>
//   );
// };

const HeroVideo = () => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (videoRef.current) {
          if (entry.isIntersecting) {
            // When visible - unmute while continuing playback
            videoRef.current.contentWindow.postMessage(
              '{"event":"command","func":"unMute","args":""}',
              '*'
            );
          } else {
            // When not visible - mute while continuing playback
            videoRef.current.contentWindow.postMessage(
              '{"event":"command","func":"mute","args":""}',
              '*'
            );
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    // Initialize player with autoplay and unmuted
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
        videoRef.current.contentWindow.postMessage(
          '{"event":"command","func":"unMute","args":""}',
          '*'
        );
      }
    }, 1000);

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={videoContainerRef} className="max-w-4xl w-full mb-12 border-4 border-accent rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300">
      <div className="relative w-full h-0 pb-[56.25%]">
        <iframe
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/eIehlyi_ca0?enablejsapi=1&autoplay=1&mute=0&loop=1&playlist=eIehlyi_ca0&controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&fs=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
    >
      Book a Call
    </button>
    <button
      onClick={() => onNavClick('work')}
      className="px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition"
    >
      See our Work
    </button>
  </div>
);

const CarouselBackgroundElements = () => (
  <>
    <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none"></div>
    <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-full blur-xl float-animation"></div>
    <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-accent-light/20 to-accent/20 rounded-full blur-xl float-animation float-animation-delay-1"></div>
    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-accent/10 to-accent-light/10 rounded-full blur-lg float-animation float-animation-delay-2"></div>
  </>
);