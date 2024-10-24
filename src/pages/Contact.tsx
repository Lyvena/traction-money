import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Mail className="h-6 w-6" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-gray-600">
              We'd love to hear from you! Get in touch with us at:
            </p>
            <a 
              href="mailto:info@lyvena.xyz"
              className="text-xl font-medium text-primary hover:underline block"
            >
              info@lyvena.xyz
            </a>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;