
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const HotelFilters = () => {
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [showMore, setShowMore] = useState<{[key: string]: boolean}>({
    amenities: false,
    propertyType: false
  });
  const [starRating, setStarRating] = useState<number[]>([]);

  const toggleStarRating = (rating: number) => {
    if (starRating.includes(rating)) {
      setStarRating(starRating.filter(r => r !== rating));
    } else {
      setStarRating([...starRating, rating]);
    }
  };

  const toggleShowMore = (section: string) => {
    setShowMore({
      ...showMore,
      [section]: !showMore[section]
    });
  };

  const amenities = [
    "Free WiFi", "Pool", "Spa", "Fitness Center", "Restaurant", 
    "Room Service", "Bar", "Parking", "Air Conditioning", "Beach Access"
  ];

  const propertyTypes = [
    "Hotel", "Resort", "Villa", "Apartment", "Hostel", 
    "Guesthouse", "B&B", "Cabin", "Boutique Hotel"
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
              defaultValue={[50, 500]}
              max={1000}
              step={10}
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
          
          {/* Star Rating */}
          <div>
            <h3 className="font-medium mb-3">Star Rating</h3>
            <div className="flex flex-wrap gap-2">
              {[5, 4, 3, 2, 1].map(rating => (
                <Badge
                  key={rating}
                  variant={starRating.includes(rating) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    starRating.includes(rating) 
                      ? 'bg-teal hover:bg-teal-light' 
                      : 'hover:bg-muted'
                  }`}
                  onClick={() => toggleStarRating(rating)}
                >
                  {rating} <Star className="ml-1 w-3 h-3 fill-current" />
                </Badge>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Amenities */}
          <Collapsible>
            <div>
              <h3 className="font-medium mb-3">Amenities</h3>
              <div className="space-y-3">
                {amenities.slice(0, showMore.amenities ? undefined : 5).map((amenity, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox id={`amenity-${i}`} />
                    <Label htmlFor={`amenity-${i}`}>{amenity}</Label>
                  </div>
                ))}
              </div>
              
              {amenities.length > 5 && (
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="p-0 mt-2 h-auto text-teal"
                    onClick={() => toggleShowMore('amenities')}
                  >
                    {showMore.amenities ? 'Show Less' : 'Show More'}
                  </Button>
                </CollapsibleTrigger>
              )}
            </div>
          </Collapsible>
          
          <Separator />
          
          {/* Property Type */}
          <Collapsible>
            <div>
              <h3 className="font-medium mb-3">Property Type</h3>
              <div className="space-y-3">
                {propertyTypes.slice(0, showMore.propertyType ? undefined : 5).map((type, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox id={`type-${i}`} />
                    <Label htmlFor={`type-${i}`}>{type}</Label>
                  </div>
                ))}
              </div>
              
              {propertyTypes.length > 5 && (
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost"
                    className="p-0 mt-2 h-auto text-teal"
                    onClick={() => toggleShowMore('propertyType')}
                  >
                    {showMore.propertyType ? 'Show Less' : 'Show More'}
                  </Button>
                </CollapsibleTrigger>
              )}
            </div>
          </Collapsible>
          
          <Separator />
          
          {/* Special Options */}
          <div className="space-y-3">
            <h3 className="font-medium mb-3">Special Options</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="free-cancel">Free cancellation</Label>
              <Switch id="free-cancel" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="breakfast">Breakfast included</Label>
              <Switch id="breakfast" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="deals">Special deals</Label>
              <Switch id="deals" />
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

export default HotelFilters;
