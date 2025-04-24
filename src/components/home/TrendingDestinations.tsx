import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  featured?: boolean;
  rating: number;
  priceRange: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800",
    featured: true,
    rating: 4.9,
    priceRange: "$$$"
  },
  {
    id: 2,
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
    rating: 4.8,
    priceRange: "$$$"
  },
  {
    id: 3,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
    rating: 4.7,
    priceRange: "$$"
  },
  {
    id: 4,
    name: "Barcelona",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=800",
    rating: 4.7,
    priceRange: "$$"
  },
  {
    id: 5,
    name: "Marrakech",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?q=80&w=800",
    rating: 4.6,
    priceRange: "$$"
  }
];

const TrendingDestinations = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [tiltValues, setTiltValues] = useState<{x: number, y: number}[]>(
    destinations.map(() => ({ x: 0, y: 0 }))
  );

  // Handle mouse movement for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 15;
    const tiltY = (centerX - x) / 15;
    
    const newTiltValues = [...tiltValues];
    newTiltValues[index] = { x: tiltX, y: tiltY };
    setTiltValues(newTiltValues);
  };

  // Reset tilt when mouse leaves
  const handleMouseLeave = (index: number) => {
    const newTiltValues = [...tiltValues];
    newTiltValues[index] = { x: 0, y: 0 };
    setTiltValues(newTiltValues);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trending Destinations</h2>
            <p className="text-gray-600 mt-2">Explore the most popular places travelers are visiting right now</p>
          </div>
          <Button variant="ghost" className="text-teal hover:text-teal-light flex items-center gap-2">
            View All <ArrowRight size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured destination (larger) */}
          <div 
            ref={el => cardRefs.current[0] = el}
            className="bento-card md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto"
            onMouseMove={(e) => handleMouseMove(e, 0)}
            onMouseLeave={() => handleMouseLeave(0)}
            style={{
              transform: `perspective(1000px) rotateX(${tiltValues[0].x}deg) rotateY(${tiltValues[0].y}deg)`
            }}
          >
            <img 
              src={destinations[0].image} 
              alt={destinations[0].name} 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="bento-card-content">
              <div className="bg-orange text-white text-sm font-medium px-2 py-1 rounded-full inline-block mb-2">
                Featured
              </div>
              <h3 className="text-2xl font-bold">{destinations[0].name}</h3>
              <div className="flex justify-between items-center">
                <span>{destinations[0].country}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{destinations[0].rating}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other destinations */}
          {destinations.slice(1).map((destination, index) => (
            <div 
              key={destination.id}
              ref={el => cardRefs.current[index + 1] = el}
              className="bento-card aspect-square"
              onMouseMove={(e) => handleMouseMove(e, index + 1)}
              onMouseLeave={() => handleMouseLeave(index + 1)}
              style={{
                transform: `perspective(1000px) rotateX(${tiltValues[index + 1].x}deg) rotateY(${tiltValues[index + 1].y}deg)`
              }}
            >
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="bento-card-content">
                <h3 className="text-xl font-bold">{destination.name}</h3>
                <div className="flex justify-between items-center">
                  <span>{destination.country}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{destination.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
