
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const Concerts = () => {
  const [showUpcomingModal, setShowUpcomingModal] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState(null);

  useEffect(() => {
    // Show upcoming concert modal on page load
    const timer = setTimeout(() => {
      setShowUpcomingModal(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const upcomingConcert = {
    title: "Divine Melodies - Spiritual Evening",
    date: "December 25, 2024",
    time: "7:00 PM",
    location: "Spiritual Center, Mumbai",
    venue: "Main Auditorium",
    capacity: "500 seats",
    description: "Join us for an enchanting evening of traditional bhajans and devotional songs. Experience the divine connection through music that touches the soul and elevates the spirit.",
    ticketLink: "https://tickets.example.com"
  };

  const pastConcerts = [
    {
      id: 1,
      title: "Temple Festival 2024",
      date: "November 15, 2024",
      location: "Sai Baba Temple, Delhi",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "A magnificent evening of devotional music celebrating the temple's annual festival. Over 800 devotees joined in the spiritual celebration.",
      highlights: ["Traditional bhajans", "Community singing", "Sacred mantras"],
      recordings: ["https://youtube.com/watch1"]
    },
    {
      id: 2,
      title: "Devotional Night - Pune",
      date: "October 20, 2024",
      location: "Cultural Center, Pune",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      description: "An intimate gathering focusing on the devotional songs of great saints and poets. The evening featured stories behind each composition.",
      highlights: ["Saint compositions", "Musical storytelling", "Interactive session"],
      recordings: ["https://youtube.com/watch2"]
    },
    {
      id: 3,
      title: "Spiritual Gathering - Rishikesh",
      date: "September 5, 2024",
      location: "Ashram, Rishikesh",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "A serene musical meditation session by the holy Ganges. The natural acoustics of the location added divine essence to the performance.",
      highlights: ["Meditation music", "Nature's acoustics", "Riverside performance"],
      recordings: ["https://youtube.com/watch3"]
    },
    {
      id: 4,
      title: "Classical Fusion Concert",
      date: "August 12, 2024",
      location: "Music Academy, Chennai",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=300&fit=crop",
      description: "A unique blend of classical ragas with traditional bhajans, showcasing the versatility of devotional music.",
      highlights: ["Raga exploration", "Classical fusion", "Musical innovation"],
      recordings: ["https://youtube.com/watch4"]
    },
    {
      id: 5,
      title: "Diwali Special Concert",
      date: "October 31, 2023",
      location: "Convention Center, Jaipur",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
      description: "A grand Diwali celebration featuring festive bhajans and songs of light conquering darkness.",
      highlights: ["Festival songs", "Light celebrations", "Community joy"],
      recordings: ["https://youtube.com/watch5"]
    },
    {
      id: 6,
      title: "Monsoon Ragas",
      date: "July 25, 2023",
      location: "Heritage Hotel, Udaipur",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Celebrating the monsoon season with ragas that capture the essence of rain and renewal.",
      highlights: ["Monsoon ragas", "Seasonal celebration", "Nature's symphony"],
      recordings: ["https://youtube.com/watch6"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-900 mb-4">Concerts & Performances</h1>
            <p className="text-lg text-amber-700">Experience the divine through live musical performances</p>
          </div>

          {/* Upcoming Concert Banner */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white rounded-xl p-8 shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Next Concert</h2>
                <h3 className="text-2xl mb-4">{upcomingConcert.title}</h3>
                <div className="flex flex-wrap justify-center gap-6 mb-6 text-amber-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{upcomingConcert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{upcomingConcert.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{upcomingConcert.location}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowUpcomingModal(true)}
                  className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                >
                  View Details & Book Tickets
                </button>
              </div>
            </div>
          </section>

          {/* Past Concerts */}
          <section>
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Past Performances</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastConcerts.map((concert) => (
                <div 
                  key={concert.id}
                  className="bg-white rounded-lg shadow-lg border border-amber-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  onClick={() => setSelectedConcert(concert)}
                >
                  <img 
                    src={concert.image} 
                    alt={concert.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">{concert.title}</h3>
                    <div className="flex items-center gap-2 text-amber-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{concert.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-700 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{concert.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-3">{concert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Concert Modal */}
          <Modal 
            isOpen={showUpcomingModal} 
            onClose={() => setShowUpcomingModal(false)}
            title="Upcoming Concert"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">{upcomingConcert.title}</h3>
              
              <div className="space-y-3 mb-6 text-left">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-700" />
                  <span><strong>Date:</strong> {upcomingConcert.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-700" />
                  <span><strong>Time:</strong> {upcomingConcert.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-700" />
                  <span><strong>Location:</strong> {upcomingConcert.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-amber-700" />
                  <span><strong>Capacity:</strong> {upcomingConcert.capacity}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{upcomingConcert.description}</p>
              
              <div className="flex gap-3 justify-center">
                <a 
                  href={upcomingConcert.ticketLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Book Tickets
                </a>
              </div>
            </div>
          </Modal>

          {/* Concert Detail Modal */}
          {selectedConcert && (
            <Modal 
              isOpen={!!selectedConcert} 
              onClose={() => setSelectedConcert(null)}
              title={selectedConcert.title}
            >
              <div>
                <img 
                  src={selectedConcert.image} 
                  alt={selectedConcert.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-amber-700">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedConcert.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-700">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedConcert.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{selectedConcert.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedConcert.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                {selectedConcert.recordings.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Recordings:</h4>
                    <div className="flex gap-2">
                      {selectedConcert.recordings.map((recording, index) => (
                        <a 
                          key={index}
                          href={recording} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm flex items-center gap-2 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Watch Recording
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Modal>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Concerts;
