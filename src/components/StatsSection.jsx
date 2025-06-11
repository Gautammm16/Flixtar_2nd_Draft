import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

export const StatsSection = () => {
  const sectionRef = useRef(null);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowStats(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="statistics"
      className="bg-secondary py-16 px-6"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 id="stats-heading" className="text-4xl font-bold text-white">
          Our Impact in Numbers
        </h2>
        <p className="text-accent-light/80 mt-2 text-sm md:text-base">
          Trusted by clients worldwide with proven results.
        </p>
      </div>

      {showStats && (
        <div className="flex flex-col md:flex-row justify-around gap-12 text-center">
          <StatItem 
            number={50} 
            suffix="+" 
            title="Trusted Clients" 
            description="Demonstrating our long-standing trust and expertise in the industry." 
            delay={0.3}
          />
          <StatItem 
            number={1000} 
            suffix="+" 
            title="Successful Projects" 
            description="Building strong partnerships through a diverse range of successful projects." 
            delay={0.4}
          />
          <StatItem 
            number={100} 
            suffix="M+" 
            title="Collective Views" 
            description="Reflecting our widespread impact and dedication to client satisfaction." 
            delay={0.5}
          />
        </div>
      )}
    </section>
  );
};

const StatItem = ({ number, suffix, title, description, delay }) => (
  <article
    className="animate-fade-in-up"
    style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
    aria-label={`${number}${suffix} ${title}`}
  >
    <h3 className="stat-number text-4xl font-bold text-white">
      <CountUp end={number} duration={2} suffix={suffix} />
    </h3>
    <p className="font-display font-medium text-light mb-2">{title}</p>
    <p className="text-sm text-accent-light/80 max-w-xs mx-auto">{description}</p>
  </article>
);
