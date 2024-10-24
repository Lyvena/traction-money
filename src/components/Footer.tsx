import React from 'react';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center text-gray-600 text-sm">
          <Copyright className="h-4 w-4 mr-1" />
          <a 
            href="https://lyvena.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Lyvena.
          </a>
          <span className="ml-1">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;