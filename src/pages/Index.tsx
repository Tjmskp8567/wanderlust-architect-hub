
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import TrendingDestinations from '@/components/home/TrendingDestinations';
import VendorShowcase from '@/components/home/VendorShowcase';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TrendingDestinations />
        <VendorShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
