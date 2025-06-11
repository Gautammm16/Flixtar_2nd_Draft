import React from 'react';

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
  return (
    <section className="py-16 bg-secondary" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container-padding max-w-8xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-display font-bold mb-4 text-light">
            Real Feedback <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-lg text-light/80 max-w-2xl mx-auto">
            Hear from the brands we've partnered with and discover the impact our work has made.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
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
      className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
