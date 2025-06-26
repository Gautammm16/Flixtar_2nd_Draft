import React, { useEffect, useState } from 'react';

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 786);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 786);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logos = isMobile ? [...companies, ...companies] : companies;

  return (
    <section className="bg-primary py-10 w-full overflow-hidden">
      <h2 className="text-center text-3xl text-white font-bold mb-8">Portfolio Clients</h2>
      <div className="relative w-full overflow-hidden"> {/* Prevent overflow from scroll */}
        <div
          className={`mx-auto flex gap-12 items-center ${
            isMobile
              ? 'animate-scrollX w-max overflow-hidden no-scrollbar'
              : 'justify-center overflow-hidden whitespace-nowrap no-scrollbar'
          }`}
        >
          {logos.map((company, index) => (
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              key={`${company.name}-${index}`}
              className="flex flex-col items-center hover:scale-105 transition-transform min-w-[120px] px-2"
              aria-label={`Visit ${company.name}`}
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-28 sm:w-24 md:w-20 lg:w-32 h-auto object-contain mb-2"
                loading="lazy"
              />
              <span className="text-white text-sm text-center">{company.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCarousel;
