import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from './ui/button';
import { User, Home, Mail } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
            <Link to="/signup">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;