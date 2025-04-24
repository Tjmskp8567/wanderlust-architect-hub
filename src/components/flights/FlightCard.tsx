
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FlightProps {
  flight: {
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
  };
}

const FlightCard: React.FC<FlightProps> = ({ flight }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Airline */}
          <div className="flex flex-col items-center md:items-start space-y-1 min-w-[100px]">
            <img 
              src={flight.airlineLogo} 
              alt={flight.airline} 
              className="h-8 w-auto" 
            />
            <span className="text-sm text-muted-foreground">{flight.airline}</span>
          </div>
          
          {/* Flight times */}
          <div className="flex flex-col items-center space-y-1">
            <span className="text-2xl font-bold">{flight.departureTime}</span>
            <span className="text-sm text-muted-foreground">{flight.departureAirport}</span>
          </div>
          
          {/* Flight duration and stops */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-full flex items-center">
              <div className="h-[1px] flex-grow bg-gray-300"></div>
              <div className="mx-2">
                <Badge variant={flight.stops === 0 ? "outline" : "default"} className={flight.stops === 0 ? "border-teal text-teal" : "bg-orange"}>
                  {flight.stops === 0 ? 'Direct' : `${flight.stops} Stop`}
                </Badge>
              </div>
              <div className="h-[1px] flex-grow bg-gray-300"></div>
            </div>
            <span className="text-xs text-muted-foreground mt-1">{flight.duration}</span>
          </div>
          
          {/* Arrival time */}
          <div className="flex flex-col items-center space-y-1">
            <span className="text-2xl font-bold">{flight.arrivalTime}</span>
            <span className="text-sm text-muted-foreground">{flight.arrivalAirport}</span>
          </div>
          
          {/* Price and button */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <span className="text-2xl font-bold text-teal">${flight.price}</span>
            <Button className="bg-teal hover:bg-teal-light">Select</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/30 py-2 px-6">
        <div className="w-full flex justify-between items-center text-xs text-muted-foreground">
          <span>Baggage included</span>
          <span>In-flight entertainment</span>
          <span>Free meal</span>
          <Button variant="link" className="text-xs p-0 h-auto text-teal">View Details</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FlightCard;
