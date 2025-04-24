
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PackageFilters = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [durationRange, setDurationRange] = useState([3, 14]);

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
              defaultValue={[500, 5000]}
              max={10000}
              step={100}
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
          
          {/* Duration */}
          <div>
            <h3 className="font-medium mb-2">Duration (days)</h3>
            <Slider
              defaultValue={[3, 14]}
              max={30}
              step={1}
              value={durationRange}
              onValueChange={(value) => setDurationRange(value as [number, number])}
              className="mb-2"
            />
            <div className="flex justify-between text-sm">
              <span>{durationRange[0]} days</span>
              <span>{durationRange[1]} days</span>
            </div>
          </div>
          
          <Separator />
          
          {/* Package Type */}
          <div>
            <h3 className="font-medium mb-3">Package Type</h3>
            <div className="space-y-3">
              {[
                "All-Inclusive", "Group Tours", "Independent Tours", 
                "Family Packages", "Honeymoon", "Adventure", "Cruise"
              ].map((type, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox id={`type-${i}`} />
                  <Label htmlFor={`type-${i}`}>{type}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Accommodation */}
          <div>
            <h3 className="font-medium mb-3">Accommodation</h3>
            <RadioGroup defaultValue="any">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="any" id="any-hotel" />
                <Label htmlFor="any-hotel">Any</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3-star" id="3-star" />
                <Label htmlFor="3-star">3 Star & Above</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4-star" id="4-star" />
                <Label htmlFor="4-star">4 Star & Above</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="5-star" id="5-star" />
                <Label htmlFor="5-star">5 Star Only</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Separator />
          
          {/* Activities */}
          <div>
            <h3 className="font-medium mb-3">Activities Included</h3>
            <div className="space-y-3">
              {[
                "Sightseeing", "Guided Tours", "Adventure Activities", 
                "Cultural Experiences", "Wildlife Viewing", "Beach Time"
              ].map((activity, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox id={`activity-${i}`} />
                  <Label htmlFor={`activity-${i}`}>{activity}</Label>
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

export default PackageFilters;
