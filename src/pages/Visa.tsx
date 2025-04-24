
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FileCheck, Calendar, Clock, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const visaTypes = [
  {
    title: "Tourist Visa",
    description: "For leisure travelers visiting for tourism purposes",
    processingTime: "7-15 business days",
    validity: "Up to 90 days",
    icon: Calendar
  },
  {
    title: "Business Visa",
    description: "For business-related travel including meetings and conferences",
    processingTime: "10-20 business days",
    validity: "Up to 180 days",
    icon: FileCheck
  },
  {
    title: "Student Visa",
    description: "For those enrolled in educational institutions abroad",
    processingTime: "20-30 business days",
    validity: "Course duration",
    icon: Clock
  }
];

const popularDestinations = [
  {
    country: "United States",
    visaTypes: ["Tourist", "Business", "Student"],
    processingTime: "10-60 days",
    fees: "$160 - $350"
  },
  {
    country: "United Kingdom",
    visaTypes: ["Tourist", "Business", "Student"],
    processingTime: "15-30 days",
    fees: "£95 - £363"
  },
  {
    country: "Schengen Area",
    visaTypes: ["Tourist", "Business"],
    processingTime: "10-15 days",
    fees: "€80 - €120"
  },
  {
    country: "Australia",
    visaTypes: ["Tourist", "Business", "Student"],
    processingTime: "15-30 days",
    fees: "AUD140 - AUD620"
  },
  {
    country: "Canada",
    visaTypes: ["Tourist", "Business", "Student"],
    processingTime: "14-30 days",
    fees: "CAD100 - CAD235"
  },
  {
    country: "Japan",
    visaTypes: ["Tourist", "Business", "Student"],
    processingTime: "5-10 days",
    fees: "¥3,000 - ¥6,000"
  }
];

const visaRequirements = [
  "Valid passport with at least 6 months validity",
  "Completed visa application form",
  "Recent passport-sized photographs",
  "Proof of accommodation",
  "Proof of sufficient funds",
  "Travel itinerary/flight reservations",
  "Travel insurance",
  "Proof of employment/enrollment"
];

const Visa = () => {
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
            <h1 className="text-4xl font-bold mb-4">Visa Services</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Fast, reliable visa processing services for over 100 countries around the world
            </p>
            
            {/* Visa search */}
            <div className="max-w-2xl mx-auto flex">
              <Select>
                <SelectTrigger className="rounded-r-none border-r-0 min-w-[180px]">
                  <SelectValue placeholder="Your nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="eu">European Union</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="rounded-none border-r-0 min-w-[180px]">
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="eu">European Union</SelectItem>
                  <SelectItem value="jp">Japan</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-orange hover:bg-orange-light text-white rounded-l-none">
                <Search size={18} className="mr-2" />
                Check Requirements
              </Button>
            </div>
          </div>
        </div>

        {/* Visa Types */}
        <div className="container mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Visa Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive visa processing services for all major visa types to help make your travel seamless
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaTypes.map((visa, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <visa.icon className="text-teal" size={24} />
                  </div>
                  <CardTitle className="text-xl">{visa.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{visa.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing Time:</span>
                      <span className="font-medium">{visa.processingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Validity:</span>
                      <span className="font-medium">{visa.validity}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-teal border-teal hover:bg-teal hover:text-white">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="bg-muted py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A simple, streamlined process to get your visa with minimal hassle
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Complete Application",
                  description: "Fill out our user-friendly online application form with your travel details."
                },
                {
                  step: "2",
                  title: "Submit Documents",
                  description: "Upload all required documents according to your destination country's requirements."
                },
                {
                  step: "3",
                  title: "Pay Fees",
                  description: "Make a secure payment for visa processing and service fees."
                },
                {
                  step: "4",
                  title: "Receive Visa",
                  description: "We'll process your application and deliver your visa via email or courier."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg p-6 h-full hover:shadow-md transition-shadow">
                    <div className="bg-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ChevronRight size={24} className="text-teal" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="container mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visa information for the most frequently visited countries
            </p>
          </div>
          
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="info">Visa Information</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Country</TableHead>
                      <TableHead>Visa Types</TableHead>
                      <TableHead>Processing Time</TableHead>
                      <TableHead>Fees</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {popularDestinations.map((destination, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{destination.country}</TableCell>
                        <TableCell>{destination.visaTypes.join(", ")}</TableCell>
                        <TableCell>{destination.processingTime}</TableCell>
                        <TableCell>{destination.fees}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" className="text-teal border-teal hover:bg-teal hover:text-white">
                            Apply Now
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="requirements">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-4">General Visa Requirements</h3>
                  <p className="text-muted-foreground mb-6">
                    While requirements vary by country, most visa applications require the following documents:
                  </p>
                  <ul className="space-y-3">
                    {visaRequirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-teal/10 p-1 rounded-full mr-3 mt-1">
                          <FileCheck size={16} className="text-teal" />
                        </div>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-muted p-4 rounded-md mt-6">
                    <p className="text-sm">
                      <strong>Note:</strong> Specific requirements may vary by country and visa type. Always check the latest requirements for your destination.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA Section */}
        <div className="bg-teal text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply for Your Visa?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our expert team will guide you through every step of the visa application process
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-teal hover:bg-gray-100">
                Start Application
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Speak to a Consultant
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Visa;
