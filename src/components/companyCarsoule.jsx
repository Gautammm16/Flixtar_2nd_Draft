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
  const animationRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;

    const startScroll = () => {
      if (!container || window.innerWidth >= 768) return;

      let scrollSpeed = 0.5; // Adjust this value for faster/slower scroll

      const step = () => {
        container.scrollLeft += scrollSpeed;

        // Seamless loop logic
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }

        animationRef.current = requestAnimationFrame(step);
      };

      animationRef.current = requestAnimationFrame(step);
    };

    const stopScroll = () => {
      cancelAnimationFrame(animationRef.current);
      if (carouselRef.current) carouselRef.current.scrollLeft = 0;
    };

    const handleResize = () => {
      stopScroll();
      if (window.innerWidth < 768) startScroll();
    };

    // Duplicate content once for seamless scroll
    if (carouselRef.current && window.innerWidth < 768) {
      const originalChildren = [...carouselRef.current.children];
      originalChildren.forEach(child => {
        const clone = child.cloneNode(true);
        carouselRef.current.appendChild(clone);
      });
    }

    window.addEventListener('resize', handleResize);
    startScroll();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
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
        className="flex overflow-x-auto md:flex-wrap md:justify-center items-center gap-10 px-4 no-scrollbar scroll-smooth whitespace-nowrap"
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
