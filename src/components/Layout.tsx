
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Music } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'HOME', path: '/' },
    { name: 'PROFILE', path: '/profile' },
    { name: 'CONCERTS', path: '/concerts' },
    { name: 'VIDEOS', path: '/videos' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'PRESS', path: '/press' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-x-hidden">
      {/* Decorative floral patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-800 rounded-full opacity-20 transform rotate-45" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-orange-800 rounded-full opacity-20 transform -rotate-12" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-yellow-800 rounded-full opacity-20 transform rotate-90" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-amber-800 text-white p-2 rounded-lg">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-900">Ravi Sharma</h1>
                <p className="text-sm text-amber-700">Traditional Bhajan Singer</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-amber-800 ${
                    location.pathname === item.path
                      ? 'text-amber-800 border-b-2 border-amber-800'
                      : 'text-amber-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-amber-800 text-white p-2 rounded-full hover:bg-amber-900 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="bg-amber-800 text-white p-2 rounded-full hover:bg-amber-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="bg-amber-800 text-white p-2 rounded-full hover:bg-amber-900 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-wrap gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-amber-800 text-white'
                    : 'bg-amber-200 text-amber-800 hover:bg-amber-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-amber-900 to-orange-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-amber-100">&copy; 2024 Ravi Sharma. All rights reserved.</p>
              <p className="text-sm text-amber-200">Traditional Devotional Music</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-amber-100 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-amber-100 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="text-amber-100 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
