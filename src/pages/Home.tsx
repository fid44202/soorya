
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import { Play, Calendar, MapPin } from 'lucide-react';

const Home = () => {
  const [showLatestRelease, setShowLatestRelease] = useState(false);

  useEffect(() => {
    // Show latest release modal on page load
    const timer = setTimeout(() => {
      setShowLatestRelease(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold text-amber-900 font-serif leading-tight">
                    Traditional<br />
                    <span className="text-orange-800">Bhajan Singer</span>
                  </h1>
                  
                  <div className="max-w-md">
                    <p className="text-lg text-amber-800 leading-relaxed mb-6">
                      This is Tapas sings latest songs from his Itihya parag tarani yaid sultani prakaa arka
                      tondiogi out hos sistogi of tandes olan ganunter clockbesa cruutars.
                    </p>
                    
                    <p className="text-base text-amber-700 leading-relaxed mb-8">
                      Digi-we pensii tonneer clavista Doland Lana hod drkle
                      binigs stagis yosi Det-015 baroiri gaouti.
                    </p>
                  </div>
                  
                  <button className="bg-gradient-to-r from-amber-800 to-orange-800 hover:from-amber-900 hover:to-orange-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Ragar Ulbas
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative mx-auto w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-200 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                    alt="Ravi Sharma"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
                </div>
                
                {/* Decorative music notes around image */}
                <div className="absolute -top-4 -right-4 opacity-30">
                  <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-800">
                    <circle cx="15" cy="45" r="8" fill="currentColor"/>
                    <rect x="23" y="15" width="3" height="30" fill="currentColor"/>
                    <path d="M26 15c8 0 16 2 16 10" stroke="currentColor" strokeWidth="3" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Performances Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-100/40 to-orange-100/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Divine echoed behind a magh, be saint a contact traced a closed is clonel left end end poblana at ante ille langa.",
                  image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
                },
                {
                  title: "Dikce echoed behind a magh, be saint a contact traced a closed is clonel left end end poblana at ante ille langa.",
                  image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop"
                },
                {
                  title: "Dikce bibest behind a magh, be saint a contact traced a closed is clonel left end end poblana at ante ille langa.",
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                }
              ].map((performance, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={performance.image} 
                      alt={`Performance ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <p className="text-amber-800 text-sm leading-relaxed">{performance.title}</p>
                    <button className="mt-4 bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                      Listen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Concert Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-amber-900 text-center mb-12 font-serif">Upcoming Concert</h3>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-3 border-amber-200">
              <div className="bg-gradient-to-r from-amber-800 via-orange-800 to-yellow-800 text-white p-8">
                <h4 className="text-3xl font-bold mb-4 font-serif">Divine Melodies - Spiritual Evening</h4>
                <div className="flex flex-wrap gap-6 text-amber-100">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    <span className="text-lg font-medium">December 25, 2024 | 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    <span className="text-lg font-medium">Spiritual Center, Mumbai</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Join us for an enchanting evening of traditional bhajans and devotional songs. 
                  Experience the divine connection through music that touches the soul and elevates the spirit.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-amber-800 to-orange-800 hover:from-amber-900 hover:to-orange-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Book Tickets
                  </button>
                  <button className="border-3 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Release Modal */}
        <Modal 
          isOpen={showLatestRelease} 
          onClose={() => setShowLatestRelease(false)}
          title="Latest Release"
        >
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/d98b3a9d-a9a6-4c07-9c11-94b070503c8b.png"
                alt="Ambigaa Naa Ninna Nambide | Purandara Dasa | Sooryagayathri"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <h4 className="text-2xl font-bold text-amber-900 mb-2 font-serif">Ambigaa</h4>
            <p className="text-lg text-amber-800 mb-2 font-medium">Sooryagayathri</p>
            <p className="text-gray-600 mb-6">Ambigaa Naa Ninna Nambide | Purandara Dasa | Sooryagayathri</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                <Play className="w-5 h-5" />
                YouTube
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                <Play className="w-5 h-5" />
                Click to Listen
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Home;
