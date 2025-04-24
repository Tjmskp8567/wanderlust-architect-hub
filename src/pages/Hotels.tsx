
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, MapPin, Filter, Grid2X2, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import HotelCard from '@/components/hotels/HotelCard';
import HotelFilters from '@/components/hotels/HotelFilters';
import { Skeleton } from "@/components/ui/skeleton";

interface HotelType {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
  isFavorite?: boolean;
}

const Hotels = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hotels, setHotels] = useState<HotelType[]>([]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setHotels([
        {
          id: 1,
          name: "Seaside Resort & Spa",
          location: "Maldives",
          price: 450,
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
          amenities: ["Pool", "Spa", "Restaurant", "Beach Access", "Free WiFi"]
        },
        {
          id: 2,
          name: "Mountain View Lodge",
          location: "Switzerland",
          price: 320,
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800",
          amenities: ["Hiking", "Restaurant", "Sauna", "Mountain Views"]
        },
        {
          id: 3,
          name: "City Center Suites",
          location: "New York",
          price: 280,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800",
          amenities: ["Restaurant", "Gym", "Business Center", "Free WiFi"]
        },
        {
          id: 4,
          name: "Desert Oasis Resort",
          location: "Dubai",
          price: 550,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800",
          amenities: ["Pool", "Spa", "Restaurant", "Desert Tours", "Free WiFi"]
        },
        {
          id: 5,
          name: "Tropical Paradise Hotel",
          location: "Bali",
          price: 280,
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800",
          amenities: ["Pool", "Spa", "Restaurant", "Beach Access", "Yoga Classes"]
        },
        {
          id: 6,
          name: "Historic City Inn",
          location: "Rome",
          price: 220,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=800",
          amenities: ["Restaurant", "City Tours", "Free WiFi", "Historic Building"]
        }
      ]);
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (hotelId: number) => {
    setHotels(hotels.map(hotel => 
      hotel.id === hotelId ? { ...hotel, isFavorite: !hotel.isFavorite } : hotel
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Banner */}
        <div className="bg-teal text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Stay</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our curated selection of hotels, resorts and accommodations worldwide
            </p>
            
            {/* Search bar */}
            <div className="mt-8 max-w-2xl mx-auto flex">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Where are you going?" 
                  className="pl-10 py-6 rounded-l-lg rounded-r-none border-r-0"
                />
              </div>
              <Button className="bg-orange hover:bg-orange-light text-white rounded-l-none">
                <Search size={18} className="mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-8 px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All Hotels</TabsTrigger>
                <TabsTrigger value="luxury">Luxury</TabsTrigger>
                <TabsTrigger value="budget">Budget-Friendly</TabsTrigger>
                <TabsTrigger value="boutique">Boutique</TabsTrigger>
              </TabsList>
              
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gray-300 flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filters
                </Button>
                <div className="flex border rounded-md">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={viewMode === 'grid' ? 'bg-muted' : ''}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid2X2 size={18} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className={viewMode === 'list' ? 'bg-muted' : ''}
                    onClick={() => setViewMode('list')}
                  >
                    <List size={18} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Filters sidebar */}
              <div className="w-full md:w-1/4">
                <HotelFilters />
              </div>

              {/* Hotels grid */}
              <div className="w-full md:w-3/4">
                <TabsContent value="all" className="mt-0">
                  {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                          <Skeleton className="h-52 w-full" />
                          <div className="p-4">
                            <Skeleton className="h-6 w-2/3 mb-2" />
                            <Skeleton className="h-4 w-1/2 mb-4" />
                            <div className="flex justify-between">
                              <Skeleton className="h-4 w-1/4" />
                              <Skeleton className="h-4 w-1/4" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`
                      ${viewMode === 'grid' 
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                        : 'flex flex-col gap-4'
                      }
                    `}>
                      {hotels.map((hotel) => (
                        <HotelCard 
                          key={hotel.id}
                          hotel={hotel}
                          viewMode={viewMode}
                          onToggleFavorite={() => toggleFavorite(hotel.id)}
                        />
                      ))}
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="luxury">
                  <div className="text-center py-12">
                    <p>Luxury hotel listings will appear here.</p>
                  </div>
                </TabsContent>
                <TabsContent value="budget">
                  <div className="text-center py-12">
                    <p>Budget-friendly hotel listings will appear here.</p>
                  </div>
                </TabsContent>
                <TabsContent value="boutique">
                  <div className="text-center py-12">
                    <p>Boutique hotel listings will appear here.</p>
                  </div>
                </TabsContent>

                {!isLoading && (
                  <div className="flex justify-center mt-8">
                    <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
                      Load More
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hotels;
