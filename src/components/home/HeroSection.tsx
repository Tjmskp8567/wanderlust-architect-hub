
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import SearchPortal from './SearchPortal';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
    
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true);
        });
      }
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video background with parallax effect */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-teal/20 flex items-center justify-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
      )}
      
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        className={`hero-video transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-traveling-through-a-tropical-resort-4235-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Discover Your Perfect <br className="hidden md:block" />
            <span className="text-orange">Travel Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Connect with top local vendors worldwide to create unforgettable journeys tailored just for you
          </p>
          
          {/* Search portal component */}
          <div className="w-full max-w-5xl mx-auto mt-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <SearchPortal />
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6" style={{ animationDelay: '0.5s' }}>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Popular Destinations
            </Button>
            <Button className="bg-orange hover:bg-orange-light text-white">
              How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
