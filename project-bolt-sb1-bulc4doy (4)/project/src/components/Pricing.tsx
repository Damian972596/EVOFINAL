import React from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Mensuel",
    price: "39,99€",
    period: "/mois",
    popular: false,
    features: [
      "Détection appels manqués illimitée",
      "SMS automatisés personnalisés",
      "Analyse IA avancée",
      "Interface de gestion intuitive",
      "Support client 7j/7",
      "Intégrations CRM"
    ]
  },
  {
    name: "Annuel",
    price: "299,99€",
    period: "/an",
    popular: true,
    savings: "Économisez 180€",
    features: [
      "Tout du plan mensuel inclus",
      "2 mois offerts",
      "Formation personnalisée",
      "Support prioritaire",
      "Rapports avancés détaillés",
      "API développeur complète"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="offres" className="py-24">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
            Offres tarifaires
          </h2>
          <p className="text-text-muted text-xl leading-relaxed">
            Choisissez l'offre qui correspond à vos besoins
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card-bg/30 rounded-3xl p-10 border transition-all duration-500 transform hover:scale-105 group backdrop-blur-sm animate-fade-in-up ${
                plan.popular 
                  ? 'border-primary-purple shadow-2xl shadow-primary-purple/20 hover:shadow-primary-purple/30' 
                  : 'border-gray-800/50 hover:border-primary-purple/50 hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-purple to-primary-blue px-6 py-3 rounded-full text-white font-medium flex items-center animate-pulse-glow">
                    <Zap className="w-5 h-5 mr-2" />
                    Le plus populaire
                  </div>
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="text-3xl font-light text-white mb-4">{plan.name}</h3>
                {plan.savings && (
                  <p className="text-green-400 font-medium mb-6 animate-pulse">{plan.savings}</p>
                )}
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-light text-white">{plan.price}</span>
                  <span className="text-text-muted ml-3 text-xl">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-white text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-5 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group text-lg ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-purple to-primary-blue hover:from-accent-pink hover:to-accent-pink text-white shadow-lg hover:shadow-xl'
                    : 'border-2 border-gray-600 hover:border-accent-pink text-white hover:bg-accent-pink hover:text-white'
                }`}
              >
                Réserver une démo
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-text-muted">
            Essai gratuit de 14 jours • Résiliation à tout moment • Support inclus
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;