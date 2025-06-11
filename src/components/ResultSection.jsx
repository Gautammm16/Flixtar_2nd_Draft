import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const resultsData = {
  row1: [
    {
      title: 'SAAMIR MITHWANI',
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749479090/1_saamir_rllp0q.png',
    },
    {
      title: 'SECTION8KARIM',
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749479090/2_karim_flz7g7.png',
    },
    {
      title: 'INTEL PARTNER BRAND LLMWARE',
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749479090/3_llmware_js3j5l.png',
    },
  ],
  row2: [
    {
      title: '',
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749387790/4_f89fla.jpg',
    },
    {
      title: '',
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749387791/5_otundn.png',
    },
  ],
  row3: [
    {
      title: '',
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749479090/1_laolhr.png',
    },
    {
      title: '',
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749479091/3_ioh7xr.png',
    },
    {
      title: '',
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749479090/2_etquje.png',
    },
  ],
};

const CustomArrow = ({ onClick, direction }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 glass rounded-full flex items-center justify-center text-white text-2xl font-bold hover:bg-white/20 hover:shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none ${
      direction === 'prev' ? 'left-2' : 'right-2'
    }`}
    onClick={onClick}
    aria-label={direction === 'prev' ? 'Previous Slide' : 'Next Slide'}
  >
    {direction === 'prev' ? '‹' : '›'}
  </button>
);

export const ResultsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const filteredItems = isMobile
    ? [...resultsData.row1, ...resultsData.row3]
    : [...resultsData.row1, ...resultsData.row2, ...resultsData.row3];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <section className="py-20 bg-primary" id="results" aria-labelledby="results-heading">
      <div className="container-padding max-w-7xl mx-auto">
        <h2
          id="results-heading"
          className="text-4xl md:text-5xl font-extrabold text-light text-center mb-16 animate-fade-in-up"
        >
          Our <span className="text-gradient">Results</span>
        </h2>

        {/* Desktop View */}
        <div className="hidden md:block space-y-12">
          <ResultsRow items={resultsData.row1} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />

          {/* Row 2 */}
          <div className="md:flex justify-center items-center gap-8 mb-12 min-h-[400px] hidden">
            {resultsData.row2.map((item, index) => (
              <div key={index} className="w-full max-w-md">
                <ResultCard item={item} />
              </div>
            ))}
          </div>

          <ResultsRow items={resultsData.row3} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden mb-12 relative">
          <Slider {...sliderSettings}>
            {filteredItems.map((item, index) => (
              <div key={index} className="px-4">
                <ResultCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const ResultsRow = ({ items, className }) => (
  <div className={`grid gap-8 mb-12 ${className}`}>
    {items.map((item, index) => (
      <ResultCard key={index} item={item} />
    ))}
  </div>
);

const ResultCard = ({ item }) => (
  <figure className="card-3d group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-1000">
    <img
      src={item.src}
      alt={item.title || 'Client Result Image'}
      loading="lazy"
      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
    />
    {item.title && item.title.trim() !== '' && (
      <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
        <h3 className="text-2xl font-display font-bold text-light">{item.title}</h3>
      </figcaption>
    )}
  </figure>
);
