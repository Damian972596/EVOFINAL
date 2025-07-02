import React from 'react';
import { Play } from 'lucide-react';

const integrations = [
  { name: 'Google Agenda', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1200px-Google_Calendar_icon_%282020%29.svg.png" },
  { name: 'Salesforce', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" }, 
  { name: 'HubSpot', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png" },
  { name: 'Pipedrive', url: "https://play-lh.googleusercontent.com/XAKratCqSJUb3ZmItve16p8RjiF0ZvN_czysEoqtGET7i-tsdJEozbnOYRM6jQNHEg" },
  { name: 'Outlook', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png" },
  { name: 'Zoho CRM', url: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d9d3ff178178a1f790a9d6114e104471/zoho-crm.png" },
  { name: 'Microsoft Teams', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" },
  { name: 'Slack', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" },
  { name: 'Zapier', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/2560px-Zapier_logo.svg.png" },
  { name: 'Monday.com', url: "https://www.cdnlogo.com/logos/m/75/monday.svg" },
  { name: 'Notion', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png" },
  { name: 'Trello', url: "https://cdn.iconscout.com/icon/free/png-256/free-trello-2-432549.png" }
];

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 mt-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* Integrations Section */}
        <div className="mb-24">
          <div className="text-center mb-8 animate-fade-in-up">
            <h3 className="text-xs md:text-sm font-light text-white/60 mb-6 leading-tight">
              Notre solution s'intègre à vos outils du quotidien
            </h3>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-bg via-dark-bg/80 to-transparent z-10"></div>
            
            <div className="flex animate-slide">
              {[...integrations, ...integrations, ...integrations].map((integration, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-3 bg-card-bg/30 rounded-2xl backdrop-blur-sm border border-gray-800/50 hover:border-primary-purple/50 hover:bg-card-bg/50 transition-all duration-500 group flex items-center justify-center"
                  style={{ width: '60px', height: '60px' }}
                >
                  <img 
                    src={integration.url} 
                    alt={integration.name}
                    className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      maxWidth: '32px', 
                      maxHeight: '32px',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Découvrez Evosmart en action
          </h2>
          <p className="text-text-muted text-xl leading-relaxed max-w-3xl mx-auto">
            Voyez comment Evosmart transforme vos appels manqués en opportunités concrètes
          </p>
        </div>
        
        <div className="relative group cursor-pointer transform hover:scale-[1.02] transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-blur-sm">
            {/* Video Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-primary-purple/10 via-primary-blue/10 to-transparent flex items-center justify-center relative">
              <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
              <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-accent-pink/20 transition-all duration-500 border border-white/20 group-hover:border-accent-pink/50">
                <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple/20 to-primary-blue/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
        </div>
        
        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-text-muted">
            Durée : 2 minutes • Démonstration complète de la solution
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;