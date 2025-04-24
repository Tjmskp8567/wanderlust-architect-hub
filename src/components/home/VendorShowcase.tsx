
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";

interface Vendor {
  id: number;
  name: string;
  specialty: string;
  location: string;
  logo: string;
  rating: number;
  featured: boolean;
  reviewCount: number;
}

const vendors: Vendor[] = [
  {
    id: 1,
    name: "Mountain Explorers",
    specialty: "Adventure Tours",
    location: "Switzerland",
    logo: "https://images.unsplash.com/photo-1581873372796-635b67ca2008?q=80&w=120",
    rating: 4.9,
    featured: true,
    reviewCount: 248
  },
  {
    id: 2,
    name: "Azure Waters",
    specialty: "Boat Tours",
    location: "Maldives",
    logo: "https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?q=80&w=120",
    rating: 4.8,
    featured: true,
    reviewCount: 186
  },
  {
    id: 3,
    name: "Urban Ventures",
    specialty: "City Experiences",
    location: "France",
    logo: "https://images.unsplash.com/photo-1509041322357-8a3f9757a475?q=80&w=120",
    rating: 4.7,
    featured: false,
    reviewCount: 152
  },
  {
    id: 4,
    name: "Serengeti Safari",
    specialty: "Wildlife Tours",
    location: "Tanzania",
    logo: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=120",
    rating: 4.9,
    featured: true,
    reviewCount: 214
  },
  {
    id: 5,
    name: "Island Hoppers",
    specialty: "Beach Retreats",
    location: "Thailand",
    logo: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=120",
    rating: 4.6,
    featured: false,
    reviewCount: 178
  },
  {
    id: 6,
    name: "Historic Journeys",
    specialty: "Cultural Tours",
    location: "Italy",
    logo: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=120",
    rating: 4.8,
    featured: false,
    reviewCount: 192
  }
];

const VendorShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean[]>(vendors.map(() => true));
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const handleImageLoad = (index: number) => {
    const newIsLoading = [...isLoading];
    newIsLoading[index] = false;
    setIsLoading(newIsLoading);
  };

  const nextSlide = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / vendors.length;
      carouselRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
      setActiveIndex(prev => (prev + 1) % vendors.length);
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / vendors.length;
      carouselRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      setActiveIndex(prev => (prev - 1 + vendors.length) % vendors.length);
    }
  };
  
  // Set up auto-scrolling carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Vendors</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Connect with our top-rated local travel experts for unique experiences
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md text-gray-800 hover:bg-teal hover:text-white transition-colors"
            aria-label="Previous vendor"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md text-gray-800 hover:bg-teal hover:text-white transition-colors"
            aria-label="Next vendor"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-6"
            style={{ scrollbarWidth: 'none' }}
          >
            {vendors.map((vendor, index) => (
              <div 
                key={vendor.id} 
                className="snap-center flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl shadow-md p-6 transform transition-transform hover:scale-105">
                  <div className="flex items-start mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-100">
                      {isLoading[index] && (
                        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        </div>
                      )}
                      <img 
                        src={vendor.logo} 
                        alt={vendor.name} 
                        className={`w-full h-full object-cover ${isLoading[index] ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => handleImageLoad(index)}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">{vendor.name}</h3>
                          <p className="text-sm text-gray-600">{vendor.specialty}</p>
                        </div>
                        {vendor.featured && (
                          <span className="bg-orange text-white text-xs px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <MapPin size={14} className="text-gray-500 mr-1" />
                      <span className="text-gray-600">{vendor.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                      </span>
                      <span className="text-gray-500 text-xs ml-1">({vendor.reviewCount})</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" className="w-full border-teal text-teal hover:bg-teal hover:text-white">
                      View Services
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {vendors.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-teal' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorShowcase;
