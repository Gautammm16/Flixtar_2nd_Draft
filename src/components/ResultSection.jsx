// ResultsSection.js
import React from 'react';

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
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749387790/4_f89fla.jpg',
    },
    {
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749387791/5_otundn.png',
    },
  ],
  row3: [
    {
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749479090/1_laolhr.png',
    },
    {
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749479091/3_ioh7xr.png',
    },
    {
      src: 'https://res.cloudinary.com/gautamm16/image/upload/v1749479090/2_etquje.png',
    },
  ],
};

export const ResultsSection = () => {
  return (
    <section className="py-20 bg-primary" id="results" aria-labelledby="results-heading">
      <div className="container-padding max-w-7xl mx-auto">
        <h2
          id="results-heading"
          className="text-4xl md:text-5xl font-extrabold text-light text-center mb-16 animate-fade-in-up"
        >
          Our <span className="text-gradient">Results</span>
        </h2>

        <ResultsRow items={resultsData.row1} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
        <ResultsRow items={resultsData.row2} className="grid-cols-1 lg:grid-cols-2" />
        <ResultsRow items={resultsData.row3} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
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
  <figure className="card-3d group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-2000">
    <img
      src={item.src}
      alt={item.title || 'Client Result Image'}
      loading="lazy"
      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
    />
    {item.title && (
      <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
        <h3 className="text-2xl font-display font-bold text-light">{item.title}</h3>
      </figcaption>
    )}
  </figure>
);
