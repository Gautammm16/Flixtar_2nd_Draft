// import React, { useState } from 'react';

// const videos = [
//   { url: 'https://player.vimeo.com/video/1027579242?badge=0&autopause=0&player_id=0&app_id=58479' },
//   { url: 'https://player.vimeo.com/video/1027581820?badge=0&autopause=0&player_id=0&app_id=58479' },
//   { url: 'https://player.vimeo.com/video/1027581935?badge=0&autopause=0&player_id=0&app_id=58479' },
//   { url: 'https://player.vimeo.com/video/1027582384?badge=0&autopause=0&player_id=0&app_id=58479' },
//   { url: 'https://player.vimeo.com/video/1027581890?badge=0&autopause=0&player_id=0&app_id=58479' },
// ];

// export const VideoGrid = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const scroll = (direction) => {
//     if (direction === 'left' && activeIndex > 0) {
//       setActiveIndex((prev) => prev - 1);
//     } else if (direction === 'right' && activeIndex < videos.length - 1) {
//       setActiveIndex((prev) => prev + 1);
//     }
//   };

//   return (
//     <section className="py-16 bg-primary text-light" id="video-showcase">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//           Watch Our <span className="text-gradient">Featured Shorts</span>
//         </h2>

//         {/* Mobile Single Video View */}
//         <div className="relative md:hidden flex items-center justify-center">
//           <CarouselButton direction="left" onClick={() => scroll('left')} disabled={activeIndex === 0} />
//           <VideoCard video={videos[activeIndex]} index={activeIndex} />
//           <CarouselButton direction="right" onClick={() => scroll('right')} disabled={activeIndex === videos.length - 1} />
//         </div>

//         {/* Desktop Grid Layout */}
//         <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 place-items-center">
//           {videos.map((video, index) => (
//             <VideoCard key={index} video={video} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const VideoCard = ({ video, index }) => {
//   const embedUrl = `${video.url}&controls=1&autoplay=0&title=0&byline=0&portrait=0&color=ffffff&transparent=0`;

//   return (
//     <div
//       className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-[85vw] sm:w-[240px] flex-shrink-0 bg-black flex items-center justify-center p-2"
//       style={{
//         aspectRatio: '9 / 16',
//       }}
//     >
//       <iframe
//         src={embedUrl}
//         title={`Flixtar Client Video ${index + 1}`}
//         className="w-full h-full rounded-md"
//         frameBorder="0"
//         allow="autoplay; encrypted-media; picture-in-picture"
//         allowFullScreen
//         loading="lazy"
//       />
//     </div>
//   );
// };

// const CarouselButton = ({ direction, onClick, disabled }) => (
//   <button
//     className={`z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-2 glass rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold hover:bg-white/20 hover:shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-30 disabled:pointer-events-none`}
//     onClick={onClick}
//     disabled={disabled}
//     aria-label={`${direction === 'left' ? 'Previous' : 'Next'} video`}
//   >
//     {direction === 'left' ? '‹' : '›'}
//   </button>
// );



import React, { useState } from 'react';

const videos = [
  { url: 'https://player.vimeo.com/video/1027579242?badge=0&autopause=0&player_id=0&app_id=58479' },
  { url: 'https://player.vimeo.com/video/1027581820?badge=0&autopause=0&player_id=0&app_id=58479' },
  { url: 'https://player.vimeo.com/video/1027581935?badge=0&autopause=0&player_id=0&app_id=58479' },
  { url: 'https://player.vimeo.com/video/1027582384?badge=0&autopause=0&player_id=0&app_id=58479' },
  { url: 'https://player.vimeo.com/video/1027581890?badge=0&autopause=0&player_id=0&app_id=58479' },
];

export const VideoGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (direction === 'left' && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else if (direction === 'right' && activeIndex < videos.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="py-16 bg-primary text-light" id="video-showcase">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Watch Our <span className="text-gradient">Featured Shorts</span>
        </h2>

        {/* Mobile Single Video View */}
        <div className="relative md:hidden flex items-center justify-center">
          <CarouselButton direction="left" onClick={() => scroll('left')} disabled={activeIndex === 0} />
          <VideoCard video={videos[activeIndex]} index={activeIndex} />
          <CarouselButton direction="right" onClick={() => scroll('right')} disabled={activeIndex === videos.length - 1} />
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 place-items-center">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({ video, index }) => {
  const embedUrl = `${video.url}&controls=1&autoplay=0&title=0&byline=0&portrait=0&color=ffffff&transparent=0`;

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-[85vw] sm:w-[240px] flex-shrink-0 bg-black flex items-center justify-center p-2"
      style={{
        aspectRatio: '9 / 16',
      }}
    >
      <iframe
        src={embedUrl}
        title={`Flixtar Client Video ${index + 1}`}
        className="w-full h-full rounded-md"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

const CarouselButton = ({ direction, onClick, disabled }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 glass rounded-full flex items-center justify-center text-white text-2xl font-bold hover:bg-white/20 hover:shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none ${
      direction === 'left' ? 'left-2' : 'right-2'
    } ${disabled ? 'opacity-30 pointer-events-none' : ''}`}
    onClick={onClick}
    disabled={disabled}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} video`}
  >
    {direction === 'left' ? '‹' : '›'}
  </button>
);
