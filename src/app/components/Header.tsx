import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-400 flex items-center justify-center">
              <Heart className="size-5 text-white fill-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              HerWellness
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#tracker" className="text-gray-700 hover:text-purple-600 transition-colors">Health Tracker</a>
            <a href="#community" className="text-gray-700 hover:text-purple-600 transition-colors">Community</a>
            <a href="#resources" className="text-gray-700 hover:text-purple-600 transition-colors">Resources</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <a href="#features" className="block text-gray-700 hover:text-purple-600">Features</a>
            <a href="#tracker" className="block text-gray-700 hover:text-purple-600">Health Tracker</a>
            <a href="#community" className="block text-gray-700 hover:text-purple-600">Community</a>
            <a href="#resources" className="block text-gray-700 hover:text-purple-600">Resources</a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
