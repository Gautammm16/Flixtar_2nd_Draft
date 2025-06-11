// // VideoGrid.jsx
// import React from 'react';

// const videos = [
//   { url: 'https://player.vimeo.com/video/1027579242?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
//   { url: 'https://player.vimeo.com/video/1027581820?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
//   { url: 'https://player.vimeo.com/video/1027581935?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
//   { url: 'https://player.vimeo.com/video/1027582384?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
//   { url: 'https://player.vimeo.com/video/1027581890?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
// ];

// export const VideoGrid = () => {
//   return (
//     <div className="py-20 bg-primary">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-display font-bold text-light text-center mb-12 animate-fade-in-up">
//           Watch Our <span className="text-gradient">Featured Shorts</span>
//         </h2>

//         <div className="flex flex-col items-center space-y-8">
//           {/* First row: 3 videos */}
//           <div className="flex flex-wrap justify-center gap-6 w-full">
//             {videos.slice(0, 3).map((video, index) => (
//               <VideoCard key={index} video={video} index={index} />
//             ))}
//           </div>

//           {/* Second row: 2 videos */}
//           <div className="flex flex-wrap justify-center gap-6 w-full">
//             {videos.slice(3).map((video, index) => (
//               <VideoCard key={index + 3} video={video} index={index + 3} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const VideoCard = ({ video, index }) => {
//   // Add minimal controls parameters to existing URL
//   const embedUrl = `${video.url}&amp;controls=1&amp;autoplay=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;transparent=0&amp;background=1&amp;muted=0&amp;loop=0&amp;texttrack=0&amp;playbar=0&amp;volume=0&amp;fullscreen=0&amp;pip=0&amp;speed=0&amp;keyboard=0`;

//   return (
//     <div
//       className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
//       style={{
//         aspectRatio: '9 / 16',
//         width: '100%',
//         maxWidth: '300px',
//         flex: '1 1 30%',
//       }}
//     >
//       <iframe
//         src={embedUrl}
//         title={`Video ${index + 1}`}
//         className="w-full h-full"
//         frameBorder="0"
//         allow="autoplay; encrypted-media; picture-in-picture"
//         allowFullScreen
//         loading="lazy"
//       />
//     </div>
//   );
// };


import React from 'react';

const videos = [
  { url: 'https://player.vimeo.com/video/1027579242?badge=0&autopause=0&player_id=0&app_id=58479' },
  { url: 'https://player.vimeo.com/video/1027581820?badge=0&autopause=0&player_id=0&app_id=58479' },
  { url: 'https://player.vimeo.com/video/1027581935?badge=0&autopause=0&player_id=0&app_id=58479' },
  { url: 'https://player.vimeo.com/video/1027582384?badge=0&autopause=0&player_id=0&app_id=58479' },
  { url: 'https://player.vimeo.com/video/1027581890?badge=0&autopause=0&player_id=0&app_id=58479' },
];

export const VideoGrid = () => {
  return (
    <section className="py-20 bg-primary" id="video-showcase">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-light text-center mb-12 animate-fade-in-up">
          Watch Our <span className="text-gradient">Featured Shorts</span>
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center">
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
      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 w-full"
      style={{
        aspectRatio: '9 / 16',
        maxWidth: '280px',
      }}
    >
      <iframe
        src={embedUrl}
        title={`Flixtar Client Video ${index + 1}`}
        className="w-full h-full"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};
