
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
      background: 'linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 15%, #f2e4a6 30%, #deb887 45%, #d2b48c 60%, #c19a6b 75%, #b8860b 90%, #cd853f 100%)',
    }}>
      {/* Enhanced textured paper background overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 50% 10%, rgba(210, 180, 140, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 20% 80%, rgba(222, 184, 135, 0.1) 0%, transparent 45%),
          radial-gradient(circle at 80% 20%, rgba(205, 133, 63, 0.12) 0%, transparent 55%),
          linear-gradient(45deg, rgba(139, 69, 19, 0.05) 0%, transparent 30%),
          linear-gradient(-45deg, rgba(160, 82, 45, 0.08) 0%, transparent 35%)
        `,
        backgroundSize: '150px 150px, 200px 200px, 180px 180px, 120px 120px, 160px 160px, 300px 300px, 250px 250px',
        backgroundPosition: '0 0, 100px 100px, 50px 200px, 200px 50px, 150px 150px, 0 0, 100px 0'
      }}></div>

      {/* Paper texture effect */}
      <div className="absolute inset-0 opacity-25" style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(139, 69, 19, 0.02) 2px,
            rgba(139, 69, 19, 0.02) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(160, 82, 45, 0.02) 2px,
            rgba(160, 82, 45, 0.02) 4px
          )
        `
      }}></div>

      {/* Floral border decorations */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        {/* Top border floral pattern */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-amber-800/10 to-transparent">
          <svg className="absolute top-2 left-8 w-16 h-16 text-amber-800" viewBox="0 0 100 100">
            <path d="M50 10c-8 8-16 16-8 24 8-8 16-16 8-24z" fill="currentColor" opacity="0.6"/>
            <path d="M30 20c-6 6-12 12-6 18 6-6 12-12 6-18z" fill="currentColor" opacity="0.4"/>
            <path d="M70 20c6 6 12 12 6 18-6-6-12-12-6-18z" fill="currentColor" opacity="0.4"/>
          </svg>
          <svg className="absolute top-2 right-8 w-16 h-16 text-amber-800" viewBox="0 0 100 100">
            <path d="M50 10c-8 8-16 16-8 24 8-8 16-16 8-24z" fill="currentColor" opacity="0.6"/>
            <path d="M30 20c-6 6-12 12-6 18 6-6 12-12 6-18z" fill="currentColor" opacity="0.4"/>
            <path d="M70 20c6 6 12 12 6 18-6-6-12-12-6-18z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>

        {/* Corner floral decorations */}
        <div className="absolute top-8 right-8 opacity-15">
          <svg width="150" height="150" viewBox="0 0 150 150" className="text-amber-800">
            <path d="M75 30c-25 0-45 20-45 45s20 45 45 45c15-15 25-25 25-45s-15-35-25-45z" fill="currentColor" opacity="0.2"/>
            <path d="M95 40c15 15 25 25 15 35-15-15-25-25-15-35z" fill="currentColor" opacity="0.4"/>
            <path d="M55 40c-15 15-25 25-15 35 15-15 25-25 15-35z" fill="currentColor" opacity="0.4"/>
            <circle cx="75" cy="75" r="8" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        <div className="absolute bottom-8 left-8 opacity-15">
          <svg width="150" height="150" viewBox="0 0 150 150" className="text-amber-800">
            <path d="M75 30c-25 0-45 20-45 45s20 45 45 45c15-15 25-25 25-45s-15-35-25-45z" fill="currentColor" opacity="0.2"/>
            <path d="M95 40c15 15 25 25 15 35-15-15-25-25-15-35z" fill="currentColor" opacity="0.4"/>
            <path d="M55 40c-15 15-25 25-15 35 15-15 25-25 15-35z" fill="currentColor" opacity="0.4"/>
            <circle cx="75" cy="75" r="8" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        {/* Music note decorative patterns */}
        <div className="absolute top-20 left-16 transform -rotate-12">
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="text-amber-800">
            <path d="M8 52c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM24 4v40M24 4c6 0 12 2 12 8" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute top-32 right-20 transform rotate-15">
          <svg width="35" height="50" viewBox="0 0 35 50" fill="none" className="text-orange-800">
            <circle cx="8" cy="42" r="6" fill="currentColor"/>
            <rect x="14" y="8" width="2" height="34" fill="currentColor"/>
            <path d="M16 8c4 0 8 1 8 5" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        <div className="absolute bottom-32 left-12 transform rotate-12">
          <svg width="50" height="80" viewBox="0 0 50 80" fill="none" className="text-yellow-800">
            <path d="M20 20c-8 0-12 8-12 16s4 16 12 16c4 0 8-2 8-6s-2-6-4-6c-2 0-4 2-4 4M20 20V8c0-4 4-8 8-8s8 4 8 8-4 8-8 8M20 52v16c0 4-2 8-6 8s-6-4-6-8 2-8 6-8" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>

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
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-amber-900/20 to-orange-900/20 backdrop-blur-sm border-b-2 border-amber-800/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-amber-900 to-orange-900 text-white p-3 rounded-xl shadow-xl">
                <Music className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-amber-900 font-serif">Sooryagayathri</h1>
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
                 className="bg-gradient-to-r from-amber-900 to-orange-900 text-white p-2.5 rounded-full hover:from-amber-800 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gradient-to-r from-amber-900 to-orange-900 text-white p-2.5 rounded-full hover:from-amber-800 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gradient-to-r from-amber-900 to-orange-900 text-white p-2.5 rounded-full hover:from-amber-800 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
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
                    ? 'bg-gradient-to-r from-amber-900 to-orange-900 text-white'
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
              <p className="text-amber-100 font-medium">&copy; 2024 Sooryagayathri. All rights reserved.</p>
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
