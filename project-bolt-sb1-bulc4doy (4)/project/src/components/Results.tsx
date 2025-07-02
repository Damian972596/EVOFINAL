import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Clock, DollarSign, Star, Bot } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    value: 32,
    suffix: "%",
    label: "de RDV confirmés",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Clock,
    value: 40,
    suffix: "h",
    label: "gagnées par collaborateur/mois",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: DollarSign,
    value: 15,
    suffix: "%",
    label: "de conversion client",
    color: "from-yellow-400 to-orange-500"
  }
];

const testimonials = [
  {
    name: "Marie Dubois",
    company: "ORPI Lyon",
    content: "Depuis qu'on utilise Evosmart, on ne rate plus aucun prospect. Les résultats sont impressionnants et immédiats !",
    rating: 5
  },
  {
    name: "Pierre Martin", 
    company: "Century 21 Paris",
    content: "L'IA répond tellement bien qu'on dirait un vrai agent. Nos clients sont conquis par la réactivité.",
    rating: 5
  },
  {
    name: "Sophie Chen",
    company: "Nexity Toulouse", 
    content: "Interface ultra simple, résultats immédiats. On gagne un temps précieux chaque jour avec cette solution.",
    rating: 5
  }
];

const AnimatedCounter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-light text-white mb-4">
      +{count}{suffix}
    </div>
  );
};

const Results: React.FC = () => {
  return (
    <section className="py-24" id="result">
      <div className="max-w-6xl mx-auto px-8">
        {/* Image Section */}
        <div className="mb-24 animate-fade-in-up relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
              Interface intuitive et puissante
            </h2>
            <p className="text-text-muted text-xl leading-relaxed max-w-3xl mx-auto">
              Découvrez notre tableau de bord conçu pour maximiser votre productivité
            </p>
          </div>
          
          {/* Robot with Speech Bubble */}
          <div className="absolute top-0 right-4 md:right-8 lg:right-16 z-10 animate-float">
            <div className="relative">
              {/* Speech Bubble */}
              <div className="absolute -top-16 -left-20 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-gray-200/50 animate-fade-in-up">
                <p className="text-gray-800 text-sm font-medium whitespace-nowrap">
                  Totalement personnalisable !
                </p>
                {/* Bubble Arrow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
                </div>
              </div>
              
              {/* Robot */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-primary-blue rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow">
                <Bot className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
          
          <div className="relative group transform hover:scale-[1.02] transition-all duration-500">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-blur-sm">
              <img 
                src="/app-screenshot.webp" 
                alt="Interface Evosmart - Tableau de bord" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple/20 to-primary-blue/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          </div>
        </div>

        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
            Résultats mesurables
          </h2>
          <p className="text-text-muted text-xl leading-relaxed">
            L'impact d'Evosmart sur votre business en chiffres
          </p>
        </div>
        
        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-24 h-24 bg-gradient-to-r ${result.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl hover:shadow-3xl transition-shadow duration-500`}>
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                
                <AnimatedCounter value={result.value} suffix={result.suffix} />
                
                <p className="text-text-muted text-lg leading-relaxed">
                  {result.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;