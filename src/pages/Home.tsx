
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
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Picture */}
            <div className="mb-8">
              <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-8 border-amber-200 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Ravi Sharma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              </div>
            </div>

            {/* Singer Name */}
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4 font-serif">
              Ravi Sharma
            </h1>
            <h2 className="text-2xl md:text-3xl text-amber-700 mb-6">
              Traditional Bhajan Singer
            </h2>
            <p className="text-lg text-amber-600 max-w-2xl mx-auto leading-relaxed">
              Bringing the divine essence of traditional bhajans to your heart. 
              Experience the spiritual journey through timeless devotional music.
            </p>
          </div>
        </section>

        {/* Upcoming Concert Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-900 text-center mb-12">Upcoming Concert</h3>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200">
              <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-6">
                <h4 className="text-2xl font-semibold mb-2">Divine Melodies - Spiritual Evening</h4>
                <div className="flex flex-wrap gap-4 text-amber-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>December 25, 2024 | 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Spiritual Center, Mumbai</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Join us for an enchanting evening of traditional bhajans and devotional songs. 
                  Experience the divine connection through music that touches the soul and elevates the spirit.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Book Tickets
                  </button>
                  <button className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Performances */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-900 text-center mb-12">Recent Performances</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Temple Festival 2024",
                  location: "Sai Baba Temple, Delhi",
                  image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
                },
                {
                  title: "Devotional Night",
                  location: "Cultural Center, Pune",
                  image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop"
                },
                {
                  title: "Spiritual Gathering",
                  location: "Ashram, Rishikesh",
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                }
              ].map((performance, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-amber-200 hover:shadow-xl transition-shadow">
                  <img 
                    src={performance.image} 
                    alt={performance.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="font-semibold text-amber-900 mb-2">{performance.title}</h4>
                    <p className="text-amber-700 text-sm">{performance.location}</p>
                  </div>
                </div>
              ))}
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
            <div className="mb-4">
              <img 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
                alt="Latest Song"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h4 className="text-xl font-semibold text-amber-900 mb-2">Shree Ram Bhajan</h4>
            <p className="text-gray-600 mb-6">A soulful devotional song dedicated to Lord Rama</p>
            <div className="flex gap-3 justify-center">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Play className="w-4 h-4" />
                YouTube
              </a>
              <a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Play className="w-4 h-4" />
                Spotify
              </a>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Home;
