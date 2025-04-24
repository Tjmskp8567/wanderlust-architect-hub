
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import FlightCard from '@/components/flights/FlightCard';
import FlightFilters from '@/components/flights/FlightFilters';

interface FlightType {
  id: number;
  airline: string;
  airlineLogo: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: string;
  arrivalAirport: string;
  duration: string;
  price: number;
  stops: number;
}

const Flights = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [flights, setFlights] = useState<FlightType[]>([]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlights([
        {
          id: 1,
          airline: "Sky Airways",
          airlineLogo: "https://via.placeholder.com/50",
          departureTime: "08:15",
          arrivalTime: "10:45",
          departureAirport: "JFK",
          arrivalAirport: "LAX",
          duration: "5h 30m",
          price: 320,
          stops: 0
        },
        {
          id: 2,
          airline: "Global Air",
          airlineLogo: "https://via.placeholder.com/50",
          departureTime: "12:30",
          arrivalTime: "15:45",
          departureAirport: "JFK",
          arrivalAirport: "LAX",
          duration: "5h 15m",
          price: 280,
          stops: 1
        },
        {
          id: 3,
          airline: "BlueStar",
          airlineLogo: "https://via.placeholder.com/50",
          departureTime: "16:20",
          arrivalTime: "22:15",
          departureAirport: "JFK",
          arrivalAirport: "LAX",
          duration: "5h 55m",
          price: 245,
          stops: 0
        },
        {
          id: 4,
          airline: "Coast Airlines",
          airlineLogo: "https://via.placeholder.com/50",
          departureTime: "19:40",
          arrivalTime: "01:30",
          departureAirport: "JFK",
          arrivalAirport: "LAX",
          duration: "5h 50m",
          price: 310,
          stops: 1
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
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">Find Your Perfect Flight</h1>
            <p className="text-xl max-w-2xl mx-auto text-center mb-8">
              Compare prices and find the best deals on flights worldwide
            </p>
            
            {/* Flight search form */}
            <Card className="bg-white/95 backdrop-blur-sm mx-auto max-w-5xl">
              <CardHeader className="pb-2">
                <Tabs defaultValue="roundtrip" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="roundtrip">Round Trip</TabsTrigger>
                    <TabsTrigger value="oneway">One Way</TabsTrigger>
                    <TabsTrigger value="multicity">Multi-City</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                    <Input placeholder="Departure Airport" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                    <Input placeholder="Arrival Airport" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                    <div className="relative">
                      <Input placeholder="Select date" />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                    <div className="relative">
                      <Input placeholder="Select date" />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="1 Adult" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Adult</SelectItem>
                        <SelectItem value="2">2 Adults</SelectItem>
                        <SelectItem value="3">3 Adults</SelectItem>
                        <SelectItem value="4">4 Adults</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cabin Class</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Economy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="premium">Premium Economy</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="first">First Class</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2 flex items-end">
                    <Button className="w-full bg-orange hover:bg-orange-light text-white">
                      Search Flights
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters sidebar */}
            <div className="w-full md:w-1/4">
              <FlightFilters />
            </div>

            {/* Flight results */}
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Available Flights</h2>
                <Select defaultValue="price">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="duration">Duration: Shortest</SelectItem>
                    <SelectItem value="departure">Departure: Earliest</SelectItem>
                    <SelectItem value="arrival">Arrival: Earliest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {isLoading ? (
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <div className="flex justify-between">
                          <Skeleton className="h-10 w-24" />
                          <div className="space-y-2">
                            <Skeleton className="h-6 w-32" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                          <div className="space-y-2">
                            <Skeleton className="h-6 w-32" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                          <Skeleton className="h-10 w-28" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {flights.map((flight) => (
                    <FlightCard key={flight.id} flight={flight} />
                  ))}
                  
                  <div className="flex justify-center mt-8">
                    <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
                      Load More Results
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Flights;
