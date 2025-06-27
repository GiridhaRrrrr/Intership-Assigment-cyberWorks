"use client";

import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCreateJobClick?: () => void;
}

export function Header({ onCreateJobClick }: HeaderProps) {
  return (
    <div className="bg-white pt-6 pb-2">
      <div className="container mx-auto px-48">
        <header className="bg-white rounded-3xl shadow-md border border-gray-100">
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform rotate-45">
                <div className="w-5 h-5 bg-white rounded-lg transform -rotate-45"></div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-900 font-semibold transition-colors">Home</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Find Jobs</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Find Talents</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">About us</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Testimonials</a>
            </nav>

            {/* Right side button */}
            <div className="flex items-center">
              <Button 
                onClick={onCreateJobClick}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 font-medium"
              >
                Create Jobs              
              </Button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}