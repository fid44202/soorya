
import React from 'react';
import Layout from '../components/Layout';
import { Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Videos = () => {
  const channels = [
    {
      name: "Traditional Bhajans",
      videos: [
        {
          id: 1,
          title: "Shree Ram Bhajan - Latest",
          thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch1",
          duration: "5:42"
        },
        {
          id: 2,
          title: "Krishna Devotional Song",
          thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch2",
          duration: "7:15"
        },
        {
          id: 3,
          title: "Hanuman Chalisa",
          thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch3",
          duration: "8:30"
        },
        {
          id: 4,
          title: "Ganga Aarti",
          thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch4",
          duration: "6:20"
        }
      ]
    },
    {
      name: "Live Concerts",
      videos: [
        {
          id: 5,
          title: "Temple Festival Live 2024",
          thumbnail: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch5",
          duration: "45:30"
        },
        {
          id: 6,
          title: "Rishikesh Ashram Concert",
          thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch6",
          duration: "38:15"
        },
        {
          id: 7,
          title: "Diwali Special Performance",
          thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch7",
          duration: "42:00"
        },
        {
          id: 8,
          title: "Cultural Center Evening",
          thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch8",
          duration: "35:45"
        }
      ]
    },
    {
      name: "Music Tutorials",
      videos: [
        {
          id: 9,
          title: "How to Sing Bhajans - Basics",
          thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch9",
          duration: "12:30"
        },
        {
          id: 10,
          title: "Understanding Ragas in Devotional Music",
          thumbnail: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch10",
          duration: "15:20"
        },
        {
          id: 11,
          title: "Breathing Techniques for Singers",
          thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch11",
          duration: "10:45"
        },
        {
          id: 12,
          title: "Sanskrit Pronunciation Guide",
          thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=320&h=180&fit=crop",
          url: "https://youtube.com/watch12",
          duration: "18:00"
        }
      ]
    }
  ];

  const scrollContainer = (containerId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = 320; // Width of one video card
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-900 mb-4">Video Collection</h1>
            <p className="text-lg text-amber-700">Explore devotional music through our video library</p>
          </div>

          {/* Video Channels */}
          {channels.map((channel, channelIndex) => (
            <section key={channelIndex} className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-amber-900">{channel.name}</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => scrollContainer(`channel-${channelIndex}`, 'left')}
                    className="bg-amber-800 hover:bg-amber-900 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollContainer(`channel-${channelIndex}`, 'right')}
                    className="bg-amber-800 hover:bg-amber-900 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div 
                id={`channel-${channelIndex}`}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {channel.videos.map((video) => (
                  <div
                    key={video.id}
                    className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg border border-amber-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white bg-opacity-90 text-amber-800 p-4 rounded-full hover:bg-opacity-100 transition-all">
                          <Play className="w-8 h-8" />
                        </button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-amber-900 mb-3 line-clamp-2">{video.title}</h3>
                      <a 
                        href={video.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Call to Action */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe for More</h2>
              <p className="text-amber-100 mb-6 text-lg">
                Stay updated with the latest devotional music videos and live performances
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://youtube.com/channel/main" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Subscribe on YouTube
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
