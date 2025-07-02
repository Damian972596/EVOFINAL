import React from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../constants/data';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border-b border-white/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="text-2xl font-bold text-purple-400">
            Evosmart
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScroll(item.href)}
                className="text-white/90 hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button onClick={() => (window.location.href = 'https://app.evosmart.fr/auth/')} className="hidden sm:block px-4 py-2 border border-purple-500 text-white rounded-lg hover:bg-purple-500/20 transition-all duration-200 font-medium">
              Connexion
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10">
            <nav className="flex flex-col space-y-2 p-4">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleScroll(item.href)}
                  className="text-white/90 hover:text-purple-400 transition-colors duration-200 font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <button className="sm:hidden mt-4 px-4 py-2 border border-purple-500 text-white rounded-lg hover:bg-purple-500/20 transition-all duration-200 font-medium">
                Connexion
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;