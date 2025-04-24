
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Search, MapPin, Plane, Hotel, Package, FileText, Users } from "lucide-react";
import { Input } from "@/components/ui/input";

type SearchTab = 'flights' | 'hotels' | 'packages' | 'visa';

const SearchPortal = () => {
  const [activeTab, setActiveTab] = useState<SearchTab>('flights');
  
  // Animation classes for tab transitions
  const getTabContentClass = (tab: SearchTab) => {
    return `transition-all duration-300 ${activeTab === tab ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute pointer-events-none'}`;
  };

  return (
    <div className="p-4 md:p-6">
      {/* Tab navigation */}
      <div className="flex overflow-x-auto space-x-1 mb-6 border-b">
        <div
          className={`search-tab ${activeTab === 'flights' ? 'active' : ''}`}
          onClick={() => setActiveTab('flights')}
        >
          <div className="flex items-center space-x-2">
            <Plane size={18} />
            <span>Flights</span>
          </div>
        </div>
        <div
          className={`search-tab ${activeTab === 'hotels' ? 'active' : ''}`}
          onClick={() => setActiveTab('hotels')}
        >
          <div className="flex items-center space-x-2">
            <Hotel size={18} />
            <span>Hotels</span>
          </div>
        </div>
        <div
          className={`search-tab ${activeTab === 'packages' ? 'active' : ''}`}
          onClick={() => setActiveTab('packages')}
        >
          <div className="flex items-center space-x-2">
            <Package size={18} />
            <span>Packages</span>
          </div>
        </div>
        <div
          className={`search-tab ${activeTab === 'visa' ? 'active' : ''}`}
          onClick={() => setActiveTab('visa')}
        >
          <div className="flex items-center space-x-2">
            <FileText size={18} />
            <span>Visa</span>
          </div>
        </div>
      </div>
      
      {/* Tab content */}
      <div className="relative min-h-[180px]">
        {/* Flights search */}
        <div className={getTabContentClass('flights')}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="City or Airport" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="City or Airport" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Dates</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="Departure - Return" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Passengers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="1 Adult" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Class</label>
              <select className="w-full h-10 pl-3 pr-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-teal hover:bg-teal-light text-white">
                <Search className="mr-2" size={16} />
                Search Flights
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hotels search */}
        <div className={getTabContentClass('hotels')}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="City or Property" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Check-in - Check-out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="Select dates" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="2 Adults, 0 Children" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button className="bg-teal hover:bg-teal-light text-white">
              <Search className="mr-2" size={16} />
              Search Hotels
            </Button>
          </div>
        </div>
        
        {/* Packages search */}
        <div className={getTabContentClass('packages')}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="Where do you want to go?" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Trip Dates</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="Select dates" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Travelers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="2 Adults, 0 Children" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-teal hover:bg-teal-light text-white">
                <Search className="mr-2" size={16} />
                Find Packages
              </Button>
            </div>
          </div>
        </div>
        
        {/* Visa search */}
        <div className={getTabContentClass('visa')}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Nationality</label>
              <select className="w-full h-10 pl-3 pr-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal">
                <option>Select Country</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="Country to visit" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Travel Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input 
                  type="text" 
                  placeholder="When are you traveling?" 
                  className="pl-9 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button className="bg-teal hover:bg-teal-light text-white">
              <Search className="mr-2" size={16} />
              Check Visa Requirements
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPortal;
