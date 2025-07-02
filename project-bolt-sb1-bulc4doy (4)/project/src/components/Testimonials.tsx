import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marie Dubois",
    company: "ORPI Lyon",
    content: "Depuis qu'on utilise Evosmart, on ne rate plus aucun prospect. +25% de RDV en 2 mois !",
    rating: 5
  },
  {
    name: "Pierre Martin",
    company: "Century 21 Paris",
    content: "L'IA répond tellement bien qu'on dirait un vrai agent. Nos clients sont impressionnés.",
    rating: 5
  },
  {
    name: "Sophie Chen",
    company: "Nexity Toulouse",
    content: "Interface ultra simple, résultats immédiats. On gagne 6h par jour sur la gestion des prospects.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-card-bg/50">
      {/* Clean Testimonials Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-light text-white mb-12">
            Ce que disent nos clients
          </h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-purple/30 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-purple to-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="flex mr-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div>
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-text-muted text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Testimonials;