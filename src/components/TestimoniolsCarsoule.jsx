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
    img: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749468872/rrr_ns4nhq.png',
  },

  {
    name: 'Ron Basra',
    text: 'Excellent work! Very consistent & quick delivery flixtar did great work, and did everything I asked in a timely manner. Would definitely work with them again.',
    img: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749468873/ron_basra_oud0x4.png',
  },
  

  
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 ">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Hear directly from the amazing people we’ve worked with.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true} // ✅ Infinite loop fix
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
                className="bg-white shadow-xl rounded-2xl p-6 mx-4 transition-transform transform hover:scale-105 duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 rounded-full w-[120px] h-[120px] mx-auto overflow-hidden border-4 border-indigo-100">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-indigo-600">{testimonial.title}</p>
                  <p className="mt-3 text-sm text-gray-600 italic">“{testimonial.text}”</p>
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
