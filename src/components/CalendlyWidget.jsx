import React from 'react';

const CalendlyWidget = () => {
  return (
    <div className="w-full bg-primary py-12" >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10" id='book'> 
        <h1 className="text-4xl md:text-5xl font-extrabold text-light mb-4 animate-fade-in-up">
          Book a call and<span className="text-gradient"> let's get started!</span>
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Calendly Embed Iframe */}
        <div
          className="rounded-xl shadow-lg overflow-auto"
          style={{
            maxHeight: '90vh',
            height: 'auto',
          }}
        >
          <iframe
            src="https://calendly.com/info-flixtar/30min?embed_domain=localhost&embed_type=Inline"
            className="w-full min-h-[800px] md:min-h-[900px] lg:min-h-[1000px]"
            frameBorder="0"
            scrolling="auto"
            title="Schedule a meeting"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CalendlyWidget;
