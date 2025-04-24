import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Filter, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import PackageCard from '@/components/packages/PackageCard';
import PackageFilters from '@/components/packages/PackageFilters';

interface PackageType {
  id: number;
  title: string;
  location: string;
  description: string;
  duration: string;
  price: number;
  ratings: number;
  reviews: number;
  image: string;
}

const Packages = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [packages, setPackages] = useState<PackageType[]>([]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setPackages([
        {
          id: 1,
          title: "Tropical Paradise Getaway",
          location: "Bali, Indonesia",
          description: "Explore beautiful beaches, lush rice terraces, and immerse yourself in Balinese culture.",
          duration: "7 Days / 6 Nights",
          price: 1299,
          ratings: 4.8,
          reviews: 124,
          image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800"
        },
        {
          id: 2,
          title: "European Adventure",
          location: "Paris - Rome - Barcelona",
          description: "Visit iconic landmarks in three of Europe's most beautiful cities in one unforgettable trip.",
          duration: "10 Days / 9 Nights",
          price: 2199,
          ratings: 4.7,
          reviews: 98,
          image: "https://images.unsplash.com/photo-1499856871958-5b9357976b82?q=80&w=800"
        },
        {
          id: 3,
          title: "Alpine Ski Retreat",
          location: "Swiss Alps",
          description: "Hit the slopes in the magnificent Swiss Alps with this all-inclusive ski package.",
          duration: "5 Days / 4 Nights",
          price: 1599,
          ratings: 4.9,
          reviews: 87,
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800"
        },
        {
          id: 4,
          title: "Safari Adventure",
          location: "Kenya",
          description: "Experience the wildlife of Africa with guided safaris in Kenya's best national parks.",
          duration: "8 Days / 7 Nights",
          price: 2599,
          ratings: 4.9,
          reviews: 65,
          image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800"
        },
        {
          id: 5,
          title: "Cultural Japan",
          location: "Tokyo - Kyoto - Osaka",
          description: "Discover the perfect blend of ancient traditions and modern innovations in Japan.",
          duration: "9 Days / 8 Nights",
          price: 2299,
          ratings: 4.8,
          reviews: 112,
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800"
        },
        {
          id: 6,
          title: "Caribbean Cruise",
          location: "Multiple Islands",
          description: "Sail the crystal blue waters of the Caribbean and visit multiple tropical islands.",
          duration: "7 Days / 6 Nights",
          price: 1799,
          ratings: 4.6,
          reviews: 143,
          image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=800"
        }
      ]);
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Banner */}
        <div className="bg-teal text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Travel Package</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Discover our curated selection of all-inclusive packages for your next adventure
            </p>
            
            {/* Package search */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Destination</label>
                  <div className="relative">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="asia">Asia</SelectItem>
                        <SelectItem value="africa">Africa</SelectItem>
                        <SelectItem value="namerica">North America</SelectItem>
                        <SelectItem value="samerica">South America</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Travel Dates</label>
                  <div className="relative">
                    <Button variant="outline" className="w-full justify-start text-gray-500">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Select dates</span>
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Travelers</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="2 Adults" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Adult</SelectItem>
                      <SelectItem value="2">2 Adults</SelectItem>
                      <SelectItem value="2-1">2 Adults, 1 Child</SelectItem>
                      <SelectItem value="2-2">2 Adults, 2 Children</SelectItem>
                      <SelectItem value="group">Group (5+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full bg-orange hover:bg-orange-light">
                <Search size={18} className="mr-2" />
                Find Packages
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-8 px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All Packages</TabsTrigger>
                <TabsTrigger value="beach">Beach Getaways</TabsTrigger>
                <TabsTrigger value="adventure">Adventure</TabsTrigger>
                <TabsTrigger value="city">City Breaks</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
              </TabsList>
              
              <div className="flex">
                <Button variant="outline" className="border-gray-300 flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Filters sidebar */}
              <div className="w-full md:w-1/4">
                <PackageFilters />
              </div>

              {/* Package results */}
              <div className="w-full md:w-3/4">
                <TabsContent value="all" className="mt-0">
                  {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                          <Skeleton className="h-52 w-full" />
                          <div className="p-4">
                            <Skeleton className="h-6 w-3/4 mb-2" />
                            <Skeleton className="h-4 w-1/2 mb-2" />
                            <Skeleton className="h-4 w-full mb-4" />
                            <div className="flex justify-between">
                              <Skeleton className="h-6 w-1/4" />
                              <Skeleton className="h-10 w-1/4" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {packages.map((pkg) => (
                        <PackageCard key={pkg.id} package={pkg} />
                      ))}
                    </div>
                  )}
                  
                  {!isLoading && (
                    <div className="flex justify-center mt-8">
                      <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
                        Load More
                      </Button>
                    </div>
                  )}
                </TabsContent>
                
                {/* Other tabs content (placeholder) */}
                {['beach', 'adventure', 'city', 'family'].map(tab => (
                  <TabsContent key={tab} value={tab}>
                    <div className="text-center py-12">
                      <p>{tab.charAt(0).toUpperCase() + tab.slice(1)} packages will appear here.</p>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Packages;
