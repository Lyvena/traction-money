import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Brain, Sparkles, ChartBar, Users, Info } from 'lucide-react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

const Landing = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Analysis",
      description: "Leverage advanced AI algorithms for project evaluation and funding decisions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Decentralized Collaboration",
      description: "Connect with AI researchers and developers worldwide"
    },
    {
      icon: <ChartBar className="h-8 w-8" />,
      title: "Performance Metrics",
      description: "Track project progress and funding allocation in real-time"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Brain className="w-20 h-20 mx-auto mb-8 text-primary" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to AI-PGF</h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering the future of AI through decentralized funding and collaboration
          </p>
          <Link to="/signup">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700">
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </Link>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;