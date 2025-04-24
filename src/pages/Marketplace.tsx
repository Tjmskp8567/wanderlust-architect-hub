
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, MapPin, Filter, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Marketplace = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Banner */}
        <div className="bg-teal text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Discover Travel Experiences</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Browse and compare services from our network of trusted local travel vendors
            </p>
            
            {/* Search bar */}
            <div className="mt-8 max-w-2xl mx-auto flex">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Where do you want to go?" 
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
        
        {/* Placeholder for Marketplace content */}
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Destinations</h2>
            <div className="flex space-x-2">
              <Button variant="outline" className="border-gray-300 flex items-center">
                <Filter size={18} className="mr-2" />
                Filters
              </Button>
              <Button variant="outline" className="border-gray-300">
                <List size={18} />
              </Button>
            </div>
          </div>
          
          {/* Placeholder for actual marketplace - will be replaced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-52 bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
              Load More
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
