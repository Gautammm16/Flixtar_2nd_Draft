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
    <div
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center bg-primary px-6 py-10 2xl:px-20 2xl:py-24 relative"
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
  <div className="text-center max-w-4xl 2xl:max-w-6xl mb-12 2xl:mb-16">
    <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-extrabold text-light mb-4 animate-fade-in-up leading-tight">
      Ensure Your Online Growth
    </h1>
    <p className="text-accent-light text-lg md:text-xl 2xl:text-3xl leading-relaxed">
      We Transform CEOs into Industry Icons through <br />
      <span className="italic font-medium text-gradient">
        "Strategic Video Branding"
      </span>
    </p>
  </div>
);

const HeroVideo = () => (
  <div className="max-w-4xl 2xl:max-w-7xl w-full mb-12 border-4 border-accent rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300">
    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/eIehlyi_ca0?autoplay=1&mute=0&loop=1&playlist=eIehlyi_ca0&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&fs=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  </div>
);

const HeroButtons = ({ onNavClick }) => (
  <div className="flex flex-col sm:flex-row gap-4 2xl:gap-6">
    <button
      onClick={() => onNavClick('book')}
      className="px-6 py-3 2xl:px-8 2xl:py-4 bg-accent text-white font-semibold text-base 2xl:text-lg rounded-lg hover:bg-opacity-90 transition"
    >
      Book a Call
    </button>
    <button
      onClick={() => onNavClick('work')}
      className="px-6 py-3 2xl:px-8 2xl:py-4 border border-accent text-accent font-semibold text-base 2xl:text-lg rounded-lg hover:bg-accent hover:text-white transition"
    >
      See our Work
    </button>
  </div>
);

const CarouselBackgroundElements = () => (
  <>
    <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none"></div>
    <div className="absolute top-20 left-10 w-20 h-20 2xl:w-28 2xl:h-28 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-full blur-xl float-animation"></div>
    <div className="absolute bottom-20 right-10 w-32 h-32 2xl:w-40 2xl:h-40 bg-gradient-to-r from-accent-light/20 to-accent/20 rounded-full blur-xl float-animation float-animation-delay-1"></div>
    <div className="absolute top-1/2 left-1/4 w-16 h-16 2xl:w-24 2xl:h-24 bg-gradient-to-r from-accent/10 to-accent-light/10 rounded-full blur-lg float-animation float-animation-delay-2"></div>
  </>
);
