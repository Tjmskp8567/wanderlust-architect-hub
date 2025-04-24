
import React from 'react';
import { Heart, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface HotelProps {
  hotel: {
    id: number;
    name: string;
    location: string;
    price: number;
    rating: number;
    image: string;
    amenities: string[];
    isFavorite?: boolean;
  };
  viewMode: 'grid' | 'list';
  onToggleFavorite: () => void;
}

const HotelCard: React.FC<HotelProps> = ({ hotel, viewMode, onToggleFavorite }) => {
  const isGrid = viewMode === 'grid';

  if (isGrid) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img 
            src={hotel.image} 
            alt={hotel.name} 
            className="h-52 w-full object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 rounded-full hover:bg-white"
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite();
            }}
          >
            <Heart 
              className={`${hotel.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
              size={20} 
            />
          </Button>
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold">{hotel.name}</h3>
            <div className="flex items-center bg-orange/10 text-orange px-2 py-1 rounded-full">
              <Star className="fill-orange text-orange mr-1" size={16} />
              <span className="text-sm font-medium">{hotel.rating}</span>
            </div>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin size={14} className="mr-1" />
            <span>{hotel.location}</span>
          </div>
        </CardHeader>
        
        <CardContent className="pb-3">
          <div className="flex flex-wrap gap-1 mb-4">
            {hotel.amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="outline" className="bg-muted/50">
                {amenity}
              </Badge>
            ))}
            {hotel.amenities.length > 3 && (
              <Badge variant="outline" className="bg-muted/50">
                +{hotel.amenities.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between items-center border-t pt-4">
          <div>
            <p className="text-xl font-bold">${hotel.price}</p>
            <p className="text-xs text-muted-foreground">per night</p>
          </div>
          <Button className="bg-teal hover:bg-teal-light">View Details</Button>
        </CardFooter>
      </Card>
    );
  } else {
    // List view
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-1/3">
            <img 
              src={hotel.image} 
              alt={hotel.name} 
              className="h-48 md:h-full w-full object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 rounded-full hover:bg-white"
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite();
              }}
            >
              <Heart 
                className={`${hotel.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                size={20} 
              />
            </Button>
          </div>
          
          <div className="flex flex-col md:w-2/3">
            <div className="p-4 flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{hotel.name}</h3>
                <div className="flex items-center bg-orange/10 text-orange px-2 py-1 rounded-full">
                  <Star className="fill-orange text-orange mr-1" size={16} />
                  <span className="text-sm font-medium">{hotel.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center text-muted-foreground text-sm mb-3">
                <MapPin size={14} className="mr-1" />
                <span>{hotel.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {hotel.amenities.map((amenity, index) => (
                  <Badge key={index} variant="outline" className="bg-muted/50">
                    {amenity}
                  </Badge>
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm">
                Perfect for couples and families, this hotel offers stunning views
                and excellent service.
              </p>
            </div>
            
            <div className="border-t p-4 flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold">${hotel.price}</p>
                <p className="text-xs text-muted-foreground">per night</p>
              </div>
              <Button className="bg-teal hover:bg-teal-light">View Details</Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
};

export default HotelCard;
