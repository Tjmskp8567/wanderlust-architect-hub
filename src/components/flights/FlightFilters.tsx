
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FlightFilters = () => {
  const [priceRange, setPriceRange] = useState([50, 2000]);
  const [durationRange, setDurationRange] = useState([1, 24]);

  const airlines = [
    "Sky Airways", "Global Air", "BlueStar", "Coast Airlines",
    "Northern Flights", "Solar Express", "Eagle Airlines"
  ];

  const stopOptions = [
    { label: "Non-stop", value: "0" },
    { label: "1 Stop", value: "1" },
    { label: "2+ Stops", value: "2" }
  ];

  const departureWindows = [
    { label: "Early Morning (12AM - 6AM)", value: "early" },
    { label: "Morning (6AM - 12PM)", value: "morning" },
    { label: "Afternoon (12PM - 6PM)", value: "afternoon" },
    { label: "Evening (6PM - 12AM)", value: "evening" }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-2">Price Range</h3>
            <Slider
              defaultValue={[50, 2000]}
              max={3000}
              step={50}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="mb-2"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          
          <Separator />
          
          {/* Flight Duration */}
          <div>
            <h3 className="font-medium mb-2">Flight Duration (hours)</h3>
            <Slider
              defaultValue={[1, 24]}
              max={36}
              step={1}
              value={durationRange}
              onValueChange={(value) => setDurationRange(value as [number, number])}
              className="mb-2"
            />
            <div className="flex justify-between text-sm">
              <span>{durationRange[0]}h</span>
              <span>{durationRange[1]}h</span>
            </div>
          </div>
          
          <Separator />
          
          {/* Stops */}
          <div>
            <h3 className="font-medium mb-3">Stops</h3>
            <div className="space-y-3">
              {stopOptions.map((option, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox id={`stop-${i}`} />
                  <Label htmlFor={`stop-${i}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Airlines */}
          <div>
            <h3 className="font-medium mb-3">Airlines</h3>
            <div className="space-y-3">
              {airlines.map((airline, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox id={`airline-${i}`} />
                  <Label htmlFor={`airline-${i}`}>{airline}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Departure Time */}
          <div>
            <h3 className="font-medium mb-3">Departure Time</h3>
            <div className="space-y-3">
              {departureWindows.map((window, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox id={`depart-${i}`} />
                  <Label htmlFor={`depart-${i}`}>{window.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 pt-4">
            <Button className="w-full bg-teal hover:bg-teal-light">Apply Filters</Button>
            <Button variant="outline" className="w-full">Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlightFilters;
