import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Home className="w-16 h-16 mx-auto mb-8 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to AI-PGF</h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering the future of AI through decentralized funding and collaboration
          </p>
          <Link to="/signup">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;