// import React from 'react';

// const CalendlyWidget = () => {
//   return (
//     <section
//       id="book"
//       aria-label="Schedule a Call Section"
//       className="w-full bg-primary py-12 2xl:py-20"
//     >
//       <div className="max-w-4xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-20 text-center mb-10">
//         <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-light mb-4 animate-fade-in-up">
//           Book a call and<span className="text-gradient"> let's get started!</span>
//         </h2>
//       </div>

//       <div className="max-w-4xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-20">
//         {/* Calendly Embed Iframe */}
//         <div
//           className="rounded-xl shadow-lg overflow-auto"
//           style={{
//             maxHeight: '90vh',
//             height: 'auto',
//           }}
//         >
//           <iframe
//             src="https://calendly.com/info-flixtar/30min?embed_domain=localhost&embed_type=Inline"
//             className="w-full min-h-[800px] md:min-h-[900px] lg:min-h-[1000px] 2xl:min-h-[1100px]"
//             frameBorder="0"
//             scrolling="auto"
//             title="Flixtar Meeting Scheduler"
//             aria-label="Calendly Meeting Scheduler"
//             style={{
//               backgroundColor: 'transparent',
//               border: 'none',
//             }}
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CalendlyWidget;


import React, { useEffect, useRef, useState } from 'react';

const CalendlyWidget = () => {
  const [showIframe, setShowIframe] = useState(false);
  const iframeRef = useRef();

  // Lazy-load iframe when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIframe(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, []);

  return (
    <section
      id="book"
      aria-label="Schedule a Call Section"
      className="w-full bg-primary py-12 2xl:py-20"
    >
      <div className="max-w-4xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-20 text-center mb-10">
        <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-light mb-4 animate-fade-in-up">
          Book a call and
          <span className="text-gradient"> let's get started!</span>
        </h2>
      </div>

      <div className="max-w-4xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-20">
        <div
          className="rounded-xl shadow-lg overflow-hidden min-h-[800px]"
          style={{ maxHeight: '90vh' }}
          ref={iframeRef}
        >
          {showIframe ? (
            <iframe
              src="https://calendly.com/info-flixtar/30min?embed_domain=flixtar.in&embed_type=Inline"
              title="Flixtar Meeting Scheduler"
              className="w-full h-[800px] md:h-[900px] lg:h-[1000px] 2xl:h-[1100px]"
              frameBorder="0"
              aria-label="Calendly Meeting Scheduler"
              fetchpriority="low"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-[800px] text-white text-xl bg-gray-800">
              Loading scheduler...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget;
