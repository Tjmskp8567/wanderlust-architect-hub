
import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface PackageProps {
  package: {
    id: number;
    title: string;
    location: string;
    description: string;
    duration: string;
    price: number;
    ratings: number;
    reviews: number;
    image: string;
  };
}

const PackageCard: React.FC<PackageProps> = ({ package: pkg }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={pkg.image} 
          alt={pkg.title}
          className="h-52 w-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 rounded-full hover:bg-white"
          >
            <Heart className="text-gray-600" size={18} />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-xl font-bold">{pkg.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{pkg.location}</p>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{pkg.description}</p>
        
        <div className="flex items-center space-x-1 mb-3">
          <Clock size={16} className="text-teal" />
          <span className="text-sm">{pkg.duration}</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <Star size={16} className="text-orange fill-orange" />
          <span className="text-sm font-medium">{pkg.ratings}</span>
          <span className="text-sm text-muted-foreground">({pkg.reviews} reviews)</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center border-t p-4">
        <div>
          <p className="text-xl font-bold text-teal">${pkg.price}</p>
          <p className="text-xs text-muted-foreground">per person</p>
        </div>
        <Button className="bg-teal hover:bg-teal-light">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
