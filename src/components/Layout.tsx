
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
    <div className="min-h-screen relative overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, #f4e4bc 0%, #e8d5b7 25%, #f0e68c 50%, #deb887 75%, #d2b48c 100%)',
    }}>
      {/* Textured paper background overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(210, 180, 140, 0.1) 0%, transparent 50%)
        `,
        backgroundSize: '100px 100px, 150px 150px, 120px 120px'
      }}></div>

      {/* Music note decorative patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        {/* Top left music notes */}
        <div className="absolute top-20 left-16 transform -rotate-12">
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="text-amber-800">
            <path d="M8 52c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM24 4v40M24 4c6 0 12 2 12 8" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Top right music notes */}
        <div className="absolute top-32 right-20 transform rotate-15">
          <svg width="35" height="50" viewBox="0 0 35 50" fill="none" className="text-orange-800">
            <circle cx="8" cy="42" r="6" fill="currentColor"/>
            <rect x="14" y="8" width="2" height="34" fill="currentColor"/>
            <path d="M16 8c4 0 8 1 8 5" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        {/* Bottom left treble clef */}
        <div className="absolute bottom-32 left-12 transform rotate-12">
          <svg width="50" height="80" viewBox="0 0 50 80" fill="none" className="text-yellow-800">
            <path d="M20 20c-8 0-12 8-12 16s4 16 12 16c4 0 8-2 8-6s-2-6-4-6c-2 0-4 2-4 4M20 20V8c0-4 4-8 8-8s8 4 8 8-4 8-8 8M20 52v16c0 4-2 8-6 8s-6-4-6-8 2-8 6-8" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        {/* Bottom right musical notes */}
        <div className="absolute bottom-20 right-16 transform -rotate-8">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-amber-900">
            <circle cx="8" cy="32" r="4" fill="currentColor"/>
            <circle cx="28" cy="28" r="4" fill="currentColor"/>
            <circle cx="48" cy="24" r="4" fill="currentColor"/>
            <rect x="12" y="12" width="1.5" height="20" fill="currentColor"/>
            <rect x="32" y="8" width="1.5" height="20" fill="currentColor"/>
            <rect x="52" y="4" width="1.5" height="20" fill="currentColor"/>
            <path d="M13.5 12c8 0 16-2 20-4M33.5 8c8 0 16-2 20-4" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>

        {/* Center decorative music symbols */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 rotate-45 opacity-10">
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-orange-900">
            <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M25 25l30 30M55 25l-30 30" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Floral corner decorations inspired by reference */}
        <div className="absolute top-8 right-8 opacity-15">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-amber-800">
            <path d="M60 20c-20 0-40 20-40 40s20 40 40 40c10-10 20-20 20-40s-10-30-20-40z" fill="currentColor" opacity="0.3"/>
            <path d="M80 30c10 10 20 20 10 30-10-10-20-20-10-30z" fill="currentColor" opacity="0.5"/>
            <path d="M40 30c-10 10-20 20-10 30 10-10 20-20 10-30z" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-amber-200/60 to-orange-200/60 backdrop-blur-sm border-b-2 border-amber-300 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-3 rounded-xl shadow-lg">
                <Music className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-amber-900 font-serif">Ravi Sharma</h1>
                <p className="text-sm text-amber-800 font-medium">Traditional Bhajan Singer</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-bold transition-all duration-300 hover:text-amber-900 hover:scale-105 ${
                    location.pathname === item.path
                      ? 'text-amber-900 border-b-3 border-amber-900 pb-1'
                      : 'text-amber-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-2.5 rounded-full hover:from-amber-900 hover:to-orange-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-2.5 rounded-full hover:from-amber-900 hover:to-orange-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-2.5 rounded-full hover:from-amber-900 hover:to-orange-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-wrap gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-amber-800 to-orange-800 text-white'
                    : 'bg-amber-200/80 text-amber-900 hover:bg-amber-300/80'
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
      <footer className="relative z-10 bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900 text-white mt-16 border-t-4 border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-amber-100 font-medium">&copy; 2024 Ravi Sharma. All rights reserved.</p>
              <p className="text-sm text-amber-200">Traditional Devotional Music & Spiritual Journey</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-amber-200 hover:text-white transition-all duration-300 transform hover:scale-125">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-amber-200 hover:text-white transition-all duration-300 transform hover:scale-125">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="text-amber-200 hover:text-white transition-all duration-300 transform hover:scale-125">
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
