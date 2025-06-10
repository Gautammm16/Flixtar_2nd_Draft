// FlixtarLikeSPA.js
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { ResultsSection } from '../components/ResultSection';
import YouTubeCarousel from '../components/YouTubeCarousel';
import { VideoGrid } from '../components/VideoGrid';
import { Testimonials } from '../components/Testimonials';
import TestimonialsCarsoule from '../components/TestimoniolsCarsoule';
import CalendlyWidget from '../components/CalendlyWidget';
import CompanyCarousel from '../components/companyCarsoule';

export const FlixtarLikeSPA = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <CompanyCarousel/>
      <StatsSection />

      <ResultsSection />
      <YouTubeCarousel />
      <VideoGrid />
      <Testimonials />
      <TestimonialsCarsoule/>
      <CalendlyWidget/>

    </div>
  );
};

export default FlixtarLikeSPA;