
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Search, MapPin, Plane, Hotel, Package, FileText, 
  User, Menu, X 
} from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold ${scrolled ? 'text-teal' : 'text-white'}`}>
            WanderHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/marketplace" className={`flex items-center space-x-1 ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-teal transition-colors`}>
            <MapPin size={18} />
            <span>Destinations</span>
          </Link>
          <Link to="/flights" className={`flex items-center space-x-1 ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-teal transition-colors`}>
            <Plane size={18} />
            <span>Flights</span>
          </Link>
          <Link to="/hotels" className={`flex items-center space-x-1 ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-teal transition-colors`}>
            <Hotel size={18} />
            <span>Hotels</span>
          </Link>
          <Link to="/packages" className={`flex items-center space-x-1 ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-teal transition-colors`}>
            <Package size={18} />
            <span>Packages</span>
          </Link>
          <Link to="/visa" className={`flex items-center space-x-1 ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-teal transition-colors`}>
            <FileText size={18} />
            <span>Visa</span>
          </Link>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="sm" className={scrolled ? 'text-gray-800' : 'text-white'}>
            <Search size={18} />
          </Button>
          <Button variant="outline" size="sm" className={`rounded-full ${scrolled ? 'border-teal text-teal' : 'border-white text-white'} hover:bg-teal hover:text-white`}>
            Become a Vendor
          </Button>
          <Button variant="ghost" size="sm" className={`rounded-full ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            <User size={18} />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <nav className="container mx-auto py-4 flex flex-col space-y-4">
            <Link to="/marketplace" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
              <MapPin size={18} className="text-teal" />
              <span>Destinations</span>
            </Link>
            <Link to="/flights" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
              <Plane size={18} className="text-teal" />
              <span>Flights</span>
            </Link>
            <Link to="/hotels" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
              <Hotel size={18} className="text-teal" />
              <span>Hotels</span>
            </Link>
            <Link to="/packages" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
              <Package size={18} className="text-teal" />
              <span>Packages</span>
            </Link>
            <Link to="/visa" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
              <FileText size={18} className="text-teal" />
              <span>Visa</span>
            </Link>
            <hr />
            <Button className="bg-teal hover:bg-teal-light text-white">
              Become a Vendor
            </Button>
            <Button variant="outline" className="border-teal text-teal">
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
