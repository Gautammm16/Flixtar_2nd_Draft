// Testimonials.js
import React from 'react';

const testimonials = [
  {
    name: 'Darren Oberst',
    title: 'EX Vice President\nHCL Technologies and IEM',
    videoUrl: 'https://player.vimeo.com/video/1027808787?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    name: 'Isuru Warakagoda',
    title: 'Founder Exyme Media',
    videoUrl: 'https://player.vimeo.com/video/1027808721?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    name: 'Saamir Mithwani',
    title: 'Ecom Dropshipper',
    videoUrl: 'https://player.vimeo.com/video/1027808750?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    name: 'Namee',
    title: 'CEO LLMWARE',
    videoUrl: 'https://player.vimeo.com/video/1027808696?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    name: 'Alex',
    title: 'Amazon Fba Dropshipping',
    videoUrl: 'https://player.vimeo.com/video/1027808663?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-secondary" id="testimonials">
      <div className="container-padding max-w-8xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
          Real Feedback <span className="text-gradient">Real Results</span>
        </h2>
        <p className="text-center text-lg text-light/80 mb-12 max-w-2xl mx-auto">
          Hear from the brands we've partnered with and discover the impact our work have made.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative pt-[177.78%] overflow-hidden">
        <iframe
          src={testimonial.videoUrl}
          title={testimonial.name}
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
    </div>
  );
};