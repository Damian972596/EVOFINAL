import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen h-[200px] pointer-events-none">
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[110px] overflow-hidden flex justify-center">
    <div className="w-screen h-[50vw] border-t-2 border-primary-purple/30 rounded-t-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-purple/5 to-transparent rounded-t-full"></div>
            </div>
      {/* Planètes contenues à l’intérieur */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Planet 1 */}
      <div className="absolute w-2 h-2 bg-primary-purple/60 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 25vw',
          animation: 'orbit1 20s linear infinite'
        }}>
        <div className="w-full h-full bg-primary-purple rounded-full animate-pulse" />
      </div>
      {/* Planet 2 */}
      <div className="absolute w-1.5 h-1.5 bg-accent-pink/50 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 20vw',
          animation: 'orbit2 15s linear infinite'
        }}>
        <div className="w-full h-full bg-accent-pink rounded-full animate-pulse" />
      </div>
      {/* Planet 3 */}
      <div className="absolute w-2.5 h-2.5 bg-primary-blue/40 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 18vw',
          animation: 'orbit3 25s linear infinite'
        }}>
        <div className="w-full h-full bg-primary-blue rounded-full animate-pulse" />
      </div>
      {/* Planet 4 */}
      <div className="absolute w-1 h-1 bg-white/40 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 12vw',
          animation: 'orbit4 12s linear infinite'
        }}>
        <div className="w-full h-full bg-white rounded-full animate-pulse" />
      </div>
      {/* Planet 5 */}
      <div className="absolute w-1.5 h-1.5 bg-purple-300/50 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 22vw',
          animation: 'orbit5 30s linear infinite'
        }}>
        <div className="w-full h-full bg-purple-300 rounded-full animate-pulse" />
      </div>
      {/* Planet 6 */}
      <div className="absolute w-1 h-1 bg-primary-purple/30 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 17vw',
          animation: 'orbit1 18s linear infinite reverse'
        }}>
        <div className="w-full h-full bg-primary-purple rounded-full animate-pulse" />
      </div>
      {/* Planet 7 */}
      <div className="absolute w-1.5 h-1.5 bg-yellow-400/30 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 23vw',
          animation: 'orbit2 22s linear infinite reverse'
        }}>
        <div className="w-full h-full bg-yellow-400 rounded-full animate-pulse" />
      </div>
      {/* Planet 8 */}
      <div className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 15vw',
          animation: 'orbit3 19s linear infinite'
        }}>
        <div className="w-full h-full bg-cyan-400 rounded-full animate-pulse" />
      </div>
      {/* Planet 9 */}
      <div className="absolute w-1 h-1 bg-pink-300/50 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 19vw',
          animation: 'orbit4 27s linear infinite'
        }}>
        <div className="w-full h-full bg-pink-300 rounded-full animate-pulse" />
      </div>
      {/* Planet 10 */}
      <div className="absolute w-2 h-2 bg-white/30 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transformOrigin: '0 10vw',
          animation: 'orbit5 14s linear infinite reverse'
        }}>
        <div className="w-full h-full bg-white rounded-full animate-pulse" />
      </div>
      </div>
    </div>
  </div>

      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Ne perdez plus un seul prospect
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Avec notre assistant IA, convertissez plus, 24h/24.
        </p>
        
        <button onClick={() => (window.location.href = '')} className="group inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-up delay-400">
          <span>Demander une démo</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;