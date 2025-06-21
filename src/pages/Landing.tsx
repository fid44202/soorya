
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Youtube, X } from 'lucide-react';

const Landing = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after a brief delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterSite = () => {
    setShowPopup(false);
    navigate('/home');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/0a78ca87-7c19-457f-944d-376c75b03a6a.png')`,
        }}
      >
        {/* Purple overlay to match the design */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-purple-800/60 to-indigo-900/70"></div>
        
        {/* Decorative tree silhouettes overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

      {/* Header with Logo and Social Icons */}
      <header className="relative z-10 flex justify-between items-center p-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center border-4 border-yellow-300 shadow-lg">
            <span className="text-purple-900 font-bold text-xl">S</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Sooryagayathri</h1>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
             className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
             className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
             className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Next Concert Info */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="bg-black/70 backdrop-blur-sm text-white p-6 rounded-lg border-2 border-orange-500 shadow-2xl">
          <h3 className="text-orange-500 text-lg font-bold mb-2">Next Concert</h3>
          <p className="text-xl font-semibold">21 Jun 2025, 7:00 PM</p>
          <p className="text-gray-300">Upcoming Event, Virtual Event</p>
        </div>
      </div>

      {/* Enter Site Button */}
      <div className="absolute bottom-8 right-8 z-10">
        <button 
          onClick={() => setShowPopup(true)}
          className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
        >
          ▷ Enter Site
        </button>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-900 transition-colors bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Latest Release</h3>
              <p className="text-gray-600 mb-6">Ambigaa Naa Ninna Nambide | Purandara Dasa | Sooryagayathri</p>
              
              {/* New Image for Popup */}
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/bbfaf0bb-fbac-407e-8892-d25b22ff55cb.png"
                  alt="Ambigaa - Latest Release"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={handleEnterSite}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  ▷ Enter Site
                </button>
                
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Click to Listen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
