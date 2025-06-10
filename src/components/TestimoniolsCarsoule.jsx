import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'Exyme Media',
    text: 'Flixtar transformed our social media presence with creative strategies and exceptional results. Their professionalism, dedication, and results-driven approach make them a top choice for marketing success.',
    img: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749468871/2l9wj0ci_400x400_bn6v50.jpg',
  },
  {
    name: 'Lauren Belz',
    text: 'Darshan did a great job! Quick response time and made the requested edits. He was recommended to me and I will continue to recommend his work to other creators.',
    img: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749468873/Untitled-1_imasko.png',
  },
  {
    name: 'Ron Basra',
    text: 'Excellent work! Very consistent & quick delivery flixtar did great work, and did everything I asked in a timely manner. Would definitely work with them again.',
    img: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749468873/ron_basra_oud0x4.png',
  },
  {
    name: 'Kevin Kosi',
    text: 'Flixtar elevated our social media presence with creative strategies and impressive results. Their professional, results-driven approach and dedication to success make them an outstanding choice for impactful social media marketing.',
    img: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749547052/kevin_kosi_utdh6s.jpg',
  },
  {
    name: 'Mick Walker',
    text: 'Fantastic work, prompt and on time delivery, highly recommended!',
    img: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749547052/mick_walker_moqpiw.jpg',
  },
  {
    name: 'Eldorasiman',
    text: 'I had the pleasure of working with flixtar media on a project recently and I must say it was an outstanding experience. From start to finish.',
    img: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749547052/Eldora_siman_oypuu9.jpg',
  },
  {
    name: 'Richard Lawrence',
    text: 'The quality is exceptional, revisions are taken care of immediately. Just started a new contract and looking forward to working with flixtar long term.',
    img: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749468873/lawrence_ug5fhx.png',
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
        <p className="text-lg text-gray-100 mb-10">
          Hear directly from the amazing people we've worked with.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white shadow-xl rounded-2xl p-8 mx-4 transition-transform transform hover:scale-105 duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6 w-20 h-20 mx-auto overflow-hidden rounded-full">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{testimonial.name}</h3>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;