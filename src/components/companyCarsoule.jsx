

// import React, { useEffect, useRef } from 'react';

// const companies = [
//   {
//     name: 'Intel',
//     image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464745/intel_yoyfi7.png',
//     link: 'https://llmware.ai/intel',
//   },
//   {
//     name: 'llmware',
//     image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464744/82b53084794726b60ec28283bac7_ytm2uf.png',
//     link: 'https://www.youtube.com/@llmware/featured',
//   },
//   // {
//   //   name: 'Dell',
//   //   image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464745/DELL_dzkpsg.png',
//   //   link: 'https://www.linkedin.com/in/reidhoffman',
//   // },
//   {
//     name: 'Saamir Mithwani',
//     image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464748/saamir_dxvi0u.png',
//     link: 'https://www.instagram.com/saamirir/',
//   },
//   {
//     name: 'Shopify',
//     image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464744/SHOPIFY_gvndfu.png',
//     link: 'https://www.instagram.com/shopify/',
//   },
//   {
//     name: 'Ankit Arora',
//     image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464745/ai_ankit_ox37to.png',
//     link: 'https://www.instagram.com/ai_ankitarora/',
//   },
//   // {
//   //   name: 'OpenLetter',
//   //   image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464745/open_later__w5dpoo.png',
//   //   link: 'https://www.youtube.com/@openletteryt',
//   // },
//   {
//     name: '222 agency',
//     image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464744/222_agencyt_jxs10h.png',
//     link: 'https://www.222agency.co/',
//   },
//   {
//     name: 'Rooter',
//     image: 'https://res.cloudinary.com/dgtc1q3ae/image/upload/v1749464744/rooter_nffh5d.png',
//     link: 'https://www.instagram.com/rooter.gg/',
//   },
// ];

// const CompanyCarousel = () => {
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (carouselRef.current) {
//         carouselRef.current.scrollBy({
//           left: 200,
//           behavior: 'smooth',
//         });

//         if (
//           carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
//           carouselRef.current.scrollWidth
//         ) {
//           carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
//         }
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full px-6 py-10 bg-primary text-white">
//       <h2 className="text-3xl font-bold mb-6 text-center">Portfolio Clients</h2>

//       <div
//         ref={carouselRef}
//         className="flex space-x-6 overflow-x-auto px-10"
//         style={{
//           scrollbarWidth: 'none',
//           msOverflowStyle: 'none',
//           WebkitOverflowScrolling: 'touch',
//         }}
//       >
//         {companies.map((company, index) => (
//           <a
//             key={index}
//             href={company.link.trim()}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="min-w-[180px] max-w-[180px] flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
//           >
//             <div className="w-20 h-20 flex items-center justify-center mb-4 overflow-hidden">
//               <img
//                 src={company.image}
//                 alt={company.name}
//                 className="object-contain w-full h-full"
//               />
//             </div>
//             <h3 className="text-lg font-semibold text-center">{company.name}</h3>
//           </a>
//         ))}
//       </div>

//       {/* Hide scrollbars for all browsers */}
//       <style>{
//         div::-webkit-scrollbar {
//           display: none;
//         }
//       }</style>
//     </div>
//   );
// };

// export default CompanyCarousel;


import React, { useRef } from 'react';

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

  return (
    <div className="relative w-full px-6 py-10 bg-primary text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Portfolio Clients</h2>

      <div
        ref={carouselRef}
        className="flex space-x-6 overflow-x-auto px-10"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {companies.map((company, index) => (
          <a
            key={index}
            href={company.link.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[180px] max-w-[180px] flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
          >
            <div className="w-40 h-40 flex items-center justify-center mb-4 overflow-hidden">
              <img
                src={company.image}
                alt={company.name}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">{company.name}</h3>
          </a>
        ))}
      </div>

      {/* Hide scrollbars for all browsers */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CompanyCarousel;


