import React from 'react';
import { Button } from "@/components/ui/button";
import { User, Settings } from "lucide-react";
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex space-x-4">
          <Link to="/signup">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;