"use client";

import { Diamond, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';


export function Header() {
   return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Diamond className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">JobPortal</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Find Jobs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Find Talents</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Testimonials</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden md:flex text-gray-600 hover:text-gray-900"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Create Job              
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}