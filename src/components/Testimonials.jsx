// import React, { useState } from 'react';

// const testimonials = [
//   {
//     name: 'Darren Oberst',
//     title: 'EX Vice President\nHCL Technologies and IEM',
//     videoUrl: 'https://player.vimeo.com/video/1027808787?badge=0&autopause=0&player_id=0&app_id=58479',
//   },
//   {
//     name: 'Isuru Warakagoda',
//     title: 'Founder Exyme Media',
//     videoUrl: 'https://player.vimeo.com/video/1027808721?badge=0&autopause=0&player_id=0&app_id=58479',
//   },
//   {
//     name: 'Saamir Mithwani',
//     title: 'Ecom Dropshipper',
//     videoUrl: 'https://player.vimeo.com/video/1027808750?badge=0&autopause=0&player_id=0&app_id=58479',
//   },
//   {
//     name: 'Namee',
//     title: 'CEO LLMWARE',
//     videoUrl: 'https://player.vimeo.com/video/1027808696?badge=0&autopause=0&player_id=0&app_id=58479',
//   },
//   {
//     name: 'Alex',
//     title: 'Amazon FBA Dropshipping Expert',
//     videoUrl: 'https://player.vimeo.com/video/1027808663?badge=0&autopause=0&player_id=0&app_id=58479',
//   },
// ];

// export const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const scroll = (direction) => {
//     if (direction === 'left' && activeIndex > 0) {
//       setActiveIndex((prev) => prev - 1);
//     } else if (direction === 'right' && activeIndex < testimonials.length - 1) {
//       setActiveIndex((prev) => prev + 1);
//     }
//   };

//   return (
//     <section
//       className="py-16 bg-secondary"
//       id="testimonials"
//       aria-labelledby="testimonials-heading"
//     >
//       <div className="container-padding max-w-8xl mx-auto px-4">
//         <header className="text-center mb-12">
//           <h2
//             id="testimonials-heading"
//             className="text-4xl md:text-5xl font-display font-bold mb-4 text-light"
//           >
//             Real Feedback <span className="text-gradient">Real Results</span>
//           </h2>
//           <p className="text-lg text-light/80 max-w-2xl mx-auto">
//             Hear from the brands we've partnered with and discover the impact our work has made.
//           </p>
//         </header>

//         {/* Mobile Single Testimonial View */}
//         <div className="relative md:hidden flex items-center justify-center">
//           <CarouselButton direction="left" onClick={() => scroll('left')} disabled={activeIndex === 0} />
//           <TestimonialCard testimonial={testimonials[activeIndex]} />
//           <CarouselButton direction="right" onClick={() => scroll('right')} disabled={activeIndex === testimonials.length - 1} />
//         </div>

//         {/* Grid for md and above */}
//         <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard key={index} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const TestimonialCard = ({ testimonial }) => {
//   return (
//     <article
//       className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-[85vw] sm:w-[260px] flex-shrink-0 md:w-auto"
//       aria-label={`Testimonial from ${testimonial.name}`}
//     >
//       <div className="relative pt-[177.78%] overflow-hidden">
//         <iframe
//           src={testimonial.videoUrl}
//           title={`Testimonial video from ${testimonial.name}`}
//           frameBorder="0"
//           allow="autoplay; encrypted-media; picture-in-picture"
//           allowFullScreen
//           className="absolute top-0 left-0 w-full h-full"
//           loading="lazy"
//         />
//       </div>
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-light mb-2">{testimonial.name}</h3>
//         <p className="text-light/80 whitespace-pre-line">{testimonial.title}</p>
//       </div>
//     </article>
//   );
// };

// const CarouselButton = ({ direction, onClick, disabled }) => (
//   <button
//     className={`z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-2 glass rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold hover:bg-white/20 hover:shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-30 disabled:pointer-events-none`}
//     onClick={onClick}
//     disabled={disabled}
//     aria-label={`${direction === 'left' ? 'Previous' : 'Next'} testimonial`}
//   >
//     {direction === 'left' ? '‹' : '›'}
//   </button>
// );



import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Darren Oberst',
    title: 'EX Vice President\nHCL Technologies and IEM',
    videoUrl: 'https://player.vimeo.com/video/1027808787?badge=0&autopause=0&player_id=0&app_id=58479',
  },
  {
    name: 'Isuru Warakagoda',
    title: 'Founder Exyme Media',
    videoUrl: 'https://player.vimeo.com/video/1027808721?badge=0&autopause=0&player_id=0&app_id=58479',
  },
  {
    name: 'Saamir Mithwani',
    title: 'Ecom Dropshipper',
    videoUrl: 'https://player.vimeo.com/video/1027808750?badge=0&autopause=0&player_id=0&app_id=58479',
  },
  {
    name: 'Namee',
    title: 'CEO LLMWARE',
    videoUrl: 'https://player.vimeo.com/video/1027808696?badge=0&autopause=0&player_id=0&app_id=58479',
  },
  {
    name: 'Alex',
    title: 'Amazon FBA Dropshipping Expert',
    videoUrl: 'https://player.vimeo.com/video/1027808663?badge=0&autopause=0&player_id=0&app_id=58479',
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (direction === 'left' && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else if (direction === 'right' && activeIndex < testimonials.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <section
      className="py-16 bg-secondary"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-padding max-w-8xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-light"
          >
            Real Feedback <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-lg text-light/80 max-w-2xl mx-auto">
            Hear from the brands we've partnered with and discover the impact our work has made.
          </p>
        </header>

        {/* Mobile Single Testimonial View */}
        <div className="relative md:hidden flex items-center justify-center">
          <CarouselButton direction="left" onClick={() => scroll('left')} disabled={activeIndex === 0} />
          <TestimonialCard testimonial={testimonials[activeIndex]} />
          <CarouselButton direction="right" onClick={() => scroll('right')} disabled={activeIndex === testimonials.length - 1} />
        </div>

        {/* Grid for md and above */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <article
      className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-[85vw] sm:w-[260px] flex-shrink-0 md:w-auto"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <div className="relative pt-[177.78%] overflow-hidden">
        <iframe
          src={testimonial.videoUrl}
          title={`Testimonial video from ${testimonial.name}`}
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-light mb-2">{testimonial.name}</h3>
        <p className="text-light/80 whitespace-pre-line">{testimonial.title}</p>
      </div>
    </article>
  );
};

const CarouselButton = ({ direction, onClick, disabled }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 glass rounded-full flex items-center justify-center text-white text-2xl font-bold hover:bg-white/20 hover:shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none ${
      direction === 'left' ? 'left-2' : 'right-2'
    } disabled:opacity-30 disabled:pointer-events-none`}
    onClick={onClick}
    disabled={disabled}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} testimonial`}
  >
    {direction === 'left' ? '‹' : '›'}
  </button>
);
