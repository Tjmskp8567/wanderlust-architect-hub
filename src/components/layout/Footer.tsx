
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">WanderHub</h3>
            <p className="text-gray-300 mb-6">
              Connecting travelers with local experts for authentic experiences worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-orange transition-colors">Home</Link></li>
              <li><Link to="/marketplace" className="text-gray-300 hover:text-orange transition-colors">Destinations</Link></li>
              <li><Link to="/flights" className="text-gray-300 hover:text-orange transition-colors">Flights</Link></li>
              <li><Link to="/hotels" className="text-gray-300 hover:text-orange transition-colors">Hotels</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-orange transition-colors">Packages</Link></li>
              <li><Link to="/visa" className="text-gray-300 hover:text-orange transition-colors">Visa Services</Link></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-orange transition-colors">About Us</Link></li>
              <li><Link to="/vendors" className="text-gray-300 hover:text-orange transition-colors">Become a Vendor</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-orange transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-orange transition-colors">Travel Blog</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-orange transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-orange transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-orange" />
                <span className="text-gray-300">123 Travel Street, Adventure City, AC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-orange" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-orange transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-orange" />
                <a href="mailto:info@wanderhub.com" className="text-gray-300 hover:text-orange transition-colors">info@wanderhub.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WanderHub. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-400 hover:text-orange transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-orange transition-colors">Privacy</Link>
            <Link to="/faq" className="text-gray-400 hover:text-orange transition-colors">FAQ</Link>
            <Link to="/help" className="text-gray-400 hover:text-orange transition-colors">Help Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
