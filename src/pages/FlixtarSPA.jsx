// FlixtarLikeSPA.js
import React from 'react';
import { Helmet } from 'react-helmet';

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
      {/* SEO HEAD */}
      <Helmet>
        <title>Flixtar | Social Media Growth Agency for Creators & Startups</title>
        <meta name="description" content="Grow your startup, creator profile, or business with high-performance Instagram, YouTube & content strategies. Book a free call with Flixtar today!" />
        <meta name="keywords" content="Instagram marketing, YouTube growth, content marketing, startup branding, reels agency, personal branding, Flixtar" />
        <link rel="canonical" href="https://www.flixtar.in/" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn, etc) */}
        <meta property="og:title" content="Flixtar | Social Media Growth Experts" />
        <meta property="og:description" content="Scale your business or personal brand using powerful content systems on Instagram and YouTube." />
        <meta property="og:image" content="https://www.flixtar.in/logo.png" />
        <meta property="og:url" content="https://www.flixtar.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flixtar | Grow Your Business on Instagram & YouTube" />
        <meta name="twitter:description" content="We help startups, creators, and founders grow fast using content that works." />
        <meta name="twitter:image" content="https://www.flixtar.in/logo.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Flixtar",
              "url": "https://www.flixtar.in",
              "logo": "https://www.flixtar.in/logo.png",
              "sameAs": [
                "https://www.instagram.com/flixtar.in/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Sections */}
      <HeroSection />
      <CompanyCarousel />
      <StatsSection />
      <ResultsSection />
      <YouTubeCarousel />
      <VideoGrid />
      <Testimonials />
      <TestimonialsCarsoule />
      <CalendlyWidget />
    </div>
  );
};

export default FlixtarLikeSPA;
