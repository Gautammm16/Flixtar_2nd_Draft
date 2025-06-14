

import React, { useRef, useEffect } from 'react';

const companies = [
  {
    name: 'llmware',
    image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464744/82b53084794726b60ec28283bac7_ytm2uf.png',
    link: 'https://www.youtube.com/@llmware/featured',
  },
  {
    name: 'Intel',
    image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464745/intel_yoyfi7.png',
    link: 'https://llmware.ai/intel',
  },
  {
    name: 'Shopify',
    image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464744/SHOPIFY_gvndfu.png',
    link: 'https://www.instagram.com/shopify/',
  },
  {
    name: '222 agency',
    image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464744/222_agencyt_jxs10h.png',
    link: 'https://www.222agency.co/',
  },
  {
    name: 'Rooter',
    image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464744/rooter_nffh5d.png',
    link: 'https://www.instagram.com/rooter.gg/',
  },
  {
    name: 'Saamir Mithwani',
    image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464748/saamir_dxvi0u.png',
    link: 'https://www.instagram.com/saamirir/',
  },
  {
    name: 'Ankit Arora',
    image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464745/ai_ankit_ox37to.png',
    link: 'https://www.instagram.com/ai_ankitarora/',
  },
];

const CompanyCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;
    let animationFrameId;

    const autoScroll = () => {
      if (container && window.innerWidth < 768) {
        container.scrollLeft += 1;
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    let resizeObserver;
    const startAutoScroll = () => {
      if (window.innerWidth < 768) {
        animationFrameId = requestAnimationFrame(autoScroll);
      } else {
        cancelAnimationFrame(animationFrameId);
        if (container) container.scrollLeft = 0;
      }
    };

    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(startAutoScroll);
      resizeObserver.observe(document.body);
    } else {
      window.addEventListener('resize', startAutoScroll);
    }

    startAutoScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener('resize', startAutoScroll);
    };
  }, []);

  return (
    <section
      id="portfolio"
      aria-label="Portfolio Clients Carousel"
      className="relative w-full px-6 py-10 bg-primary text-white"
    >
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold">Portfolio Clients</h2>
      </header>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto md:flex-wrap md:justify-center items-center gap-10 px-4 no-scrollbar scroll-smooth transition-all duration-2000 ease-in-out"
        role="list"
      >
        {companies.map((company, index) => (
          <article
            key={index}
            role="listitem"
            className="flex flex-col items-center justify-center min-w-[150px] transition-transform hover:scale-105"
          >
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
              aria-label={`Visit ${company.name}`}
            >
              <img
                src={company.image}
                alt={`${company.name} logo`}
                loading="lazy"
                width="128"
                height="64"
                className="w-32 h-auto object-contain mb-2"
              />
              <p className="text-base font-medium">{company.name}</p>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CompanyCarousel;
