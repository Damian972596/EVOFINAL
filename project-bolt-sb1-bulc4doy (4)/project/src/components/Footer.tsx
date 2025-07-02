import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card-bg/50 border-t border-gray-800/50 backdrop-blur-sm" id="contact">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src="/evosmart-high-resolution-logo.png" 
                alt="Evosmart" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-text-muted mb-8 leading-relaxed text-lg">
              La solution IA qui transforme vos appels manqués en opportunités commerciales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800/50 hover:bg-primary-purple rounded-xl flex items-center justify-center transition-colors duration-300 border border-gray-700/50">
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800/50 hover:bg-primary-purple rounded-xl flex items-center justify-center transition-colors duration-300 border border-gray-700/50">
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800/50 hover:bg-primary-purple rounded-xl flex items-center justify-center transition-colors duration-300 border border-gray-700/50">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-white font-semibold mb-8 text-xl">Produit</h4>
            <ul className="space-y-4">
              <li><a href="#solution" className="text-text-muted hover:text-accent-pink transition-colors duration-300 text-lg">Solution</a></li>
              <li><a href="#offres" className="text-text-muted hover:text-accent-pink transition-colors duration-300 text-lg">Tarifs</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-pink transition-colors duration-300 text-lg">Intégrations</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-pink transition-colors duration-300 text-lg">API</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-white font-semibold mb-8 text-xl">Support</h4>
            <ul className="space-y-4">
              <li><a href="#faq" className="text-text-muted hover:text-accent-pink transition-colors duration-300 text-lg">FAQ</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-pink transition-colors duration-300 text-lg">Documentation</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-pink transition-colors duration-300 text-lg">Formation</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-pink transition-colors duration-300 text-lg">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-white font-semibold mb-8 text-xl">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary-purple mr-4" />
                <span className="text-text-muted text-lg">contact@evosmart.fr</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary-purple mr-4" />
                <span className="text-text-muted text-lg">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary-purple mr-4" />
                <span className="text-text-muted text-lg">Paris, France</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 pt-10 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted">
              © 2025 Evosmart. Tous droits réservés.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-text-muted hover:text-accent-pink transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="text-text-muted hover:text-accent-pink transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-text-muted hover:text-accent-pink transition-colors duration-300">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;