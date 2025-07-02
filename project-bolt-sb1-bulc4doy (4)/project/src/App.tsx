import React from 'react';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import PartnersSlider from './components/PartnersSlider';
import TechSteps from './components/TechSteps';
import Results from './components/Results';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Hero from './components/Hero';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white relative">
       <Header/>
      <Hero/>     
        <VideoSection />
        <PartnersSlider />
        <TechSteps />
        <Results />
        <Testimonials/>
        <Pricing />
        <Footer />
        <AudioPlayer />
      </div>
  );
}

export default App;