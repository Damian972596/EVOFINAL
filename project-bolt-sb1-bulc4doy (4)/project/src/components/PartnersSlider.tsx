import React from 'react';

const partners = [
  'Inclose',
  'Rapid Pare-Brise', 'Orpi', 'Bijouterie Gelineau', 'Cordialement Agency'
];

const PartnersSlider: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 mb-16">
        <h3 className="text-center text-3xl font-bold text-white mb-6 animate-fade-in-up">
          Ils nous font confiance
        </h3>
        <p className="text-center text-text-muted text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Des entreprises leaders qui transforment leurs appels manqués en opportunités
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-bg via-dark-bg/80 to-transparent z-10"></div>
        
        <div className="flex animate-slide">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-10 py-6 bg-card-bg/30 rounded-2xl backdrop-blur-sm border border-gray-800/50 hover:border-primary-purple/50 hover:bg-card-bg/50 transition-all duration-500 group"
              style={{ minWidth: '240px' }}
            >
              <span className="text-white font-medium text-xl whitespace-nowrap group-hover:text-accent-pink transition-colors duration-300">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;