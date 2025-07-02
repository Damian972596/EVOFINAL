import React from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  Brain, 
  Monitor, 
  RefreshCw,
  Mic
} from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: "Détection en temps réel des appels manqués",
    description: "Notre système surveille automatiquement tous vos appels manqués, 24h/24 et 7j/7, sans interruption",
    step: "01"
  },
  {
    icon: Mic,
    title: "Agents IA vocaux pour répondre et prendre des rendez-vous",
    description: "Nos agents intelligents Sarah et Julien répondent directement aux appels entrants, accueillent vos prospects et prennent des rendez-vous automatiquement selon vos disponibilités",
    step: "02",
    hasImages: true
  },
  {
    icon: MessageSquare,
    title: "SMS personnalisé envoyé automatiquement",
    description: "Réponse immédiate par SMS adapté au contexte, à l'heure et au profil de votre prospect",
    step: "03"
  },
  {
    icon: Brain,
    title: "Analyse et qualification IA du message",
    description: "Intelligence artificielle avancée qui analyse et qualifie chaque réponse pour identifier les prospects prioritaires",
    step: "04"
  },
  {
    icon: Monitor,
    title: "Centralisation des échanges dans une plateforme claire",
    description: "Interface intuitive qui regroupe tous vos prospects et conversations en un seul endroit",
    step: "05"
  },
  {
    icon: RefreshCw,
    title: "Notification des équipes pour rappel intelligent",
    description: "Système de relance optimisé qui notifie vos équipes au moment idéal pour maximiser les conversions",
    step: "06"
  }
];

const TechSteps: React.FC = () => {
  return (
    <section id="solution" className="py-24 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-5"></div>
      
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-purple mb-8 leading-tight">
            Technologie révolutionnaire
          </h2>
          <p className="text-text-muted text-xl leading-relaxed max-w-3xl mx-auto">
            Découvrez les 6 étapes clés qui transforment vos appels manqués en opportunités commerciales
          </p>
        </div>
        
        <div className="space-y-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-fade-in-up ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <span className="text-primary-purple text-sm font-bold tracking-wider">
                      ÉTAPE {step.step}
                    </span>
                    <div className="h-px bg-gradient-to-r from-primary-purple to-primary-blue w-16"></div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-light text-white leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-muted text-lg leading-relaxed">
                    {step.description}
                  </p>

                  {/* Images des agents IA pour l'étape 2 - AGRANDIES */}
                  {step.hasImages && (
                    <div className="flex justify-center lg:justify-start space-x-12 mt-12">
                      <div className="text-center group">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-purple/50 group-hover:border-primary-purple transition-all duration-300 transform group-hover:scale-110 shadow-2xl group-hover:shadow-primary-purple/30">
                          <img 
                            src="/SARRRRAH.png" 
                            alt="Sarah - Agent IA" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-white font-semibold mt-4 text-lg">Sarah</p>
                        <p className="text-primary-purple text-sm font-medium">Agent IA • Prise de RDV & Accueil</p>
                      </div>
                      
                      <div className="text-center group">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-blue/50 group-hover:border-primary-blue transition-all duration-300 transform group-hover:scale-110 shadow-2xl group-hover:shadow-primary-blue/30">
                          <img 
                            src="/JULIEN IA.png" 
                            alt="Julien - Agent IA" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-white font-semibold mt-4 text-lg">Julien</p>
                        <p className="text-primary-blue text-sm font-medium">Agent IA • Prise de RDV & Accueil</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-36 h-36 bg-gradient-to-br from-primary-purple/20 to-primary-blue/20 rounded-3xl flex items-center justify-center transform hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-purple/20 animate-float border border-gray-800/50 backdrop-blur-sm group"
                       style={{ animationDelay: `${index * 0.3}s` }}>
                    <IconComponent className="w-16 h-16 text-white group-hover:text-accent-pink transition-colors duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSteps;