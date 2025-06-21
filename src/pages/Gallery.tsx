
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop",
      title: "Temple Performance",
      description: "Live performance at the annual temple festival"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&h=150&fit=crop",
      title: "Cultural Center Concert",
      description: "Intimate evening of devotional music"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop",
      title: "Rishikesh Ashram",
      description: "Spiritual gathering by the holy Ganges"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=150&h=150&fit=crop",
      title: "Classical Fusion",
      description: "Blending traditional with contemporary"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=150&h=150&fit=crop",
      title: "Diwali Celebration",
      description: "Festival of lights concert"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=150&h=150&fit=crop",
      title: "Recording Session",
      description: "Behind the scenes at the studio"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&sat=-30",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&sat=-30",
      title: "Meditation Session",
      description: "Musical meditation workshop"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&brightness=0.8",
      thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&h=150&fit=crop&brightness=0.8",
      title: "Award Ceremony",
      description: "Receiving lifetime achievement award"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&hue=30",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop&hue=30",
      title: "Teaching Workshop",
      description: "Sharing knowledge with young musicians"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop&sepia=20",
      thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=150&h=150&fit=crop&sepia=20",
      title: "International Tour",
      description: "Performing for diaspora communities"
    }
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToImage = (index: number) => {
    setSelectedImage(index);
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    const thumbnail = document.getElementById(`thumbnail-${index}`);
    if (thumbnailsContainer && thumbnail) {
      const containerWidth = thumbnailsContainer.offsetWidth;
      const thumbnailWidth = thumbnail.offsetWidth;
      const thumbnailLeft = thumbnail.offsetLeft;
      const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
      thumbnailsContainer.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-900 mb-4">Photo Gallery</h1>
            <p className="text-lg text-amber-700">Capturing moments from our musical journey</p>
          </div>

          {/* Main Image Display */}
          <section className="mb-8">
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200">
              <div className="relative">
                <img 
                  src={images[selectedImage].src} 
                  alt={images[selectedImage].title}
                  className={`w-full h-96 md:h-[600px] object-cover transition-transform duration-300 ${
                    isZoomed ? 'scale-110 cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Zoom Icon */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {images.length}
                </div>
              </div>
              
              {/* Image Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-amber-900 mb-2">
                  {images[selectedImage].title}
                </h3>
                <p className="text-amber-700">
                  {images[selectedImage].description}
                </p>
              </div>
            </div>
          </section>

          {/* Thumbnail Strip */}
          <section>
            <div className="relative">
              <div 
                id="thumbnails-container"
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    id={`thumbnail-${index}`}
                    className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                      index === selectedImage
                        ? 'ring-4 ring-amber-500 scale-105'
                        : 'hover:scale-105 hover:ring-2 hover:ring-amber-300'
                    }`}
                    onClick={() => scrollToImage(index)}
                  >
                    <img 
                      src={image.thumbnail} 
                      alt={image.title}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md"
                    />
                    <div className={`mt-2 text-center transition-opacity ${
                      index === selectedImage ? 'opacity-100' : 'opacity-60'
                    }`}>
                      <p className="text-xs text-amber-800 font-medium truncate px-1">
                        {image.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicators */}
              <button
                onClick={() => {
                  const container = document.getElementById('thumbnails-container');
                  if (container) {
                    container.scrollBy({ left: -200, behavior: 'smooth' });
                  }
                }}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-800 hover:bg-amber-900 text-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => {
                  const container = document.getElementById('thumbnails-container');
                  if (container) {
                    container.scrollBy({ left: 200, behavior: 'smooth' });
                  }
                }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-800 hover:bg-amber-900 text-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* Gallery Stats */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold mb-2">500+</h3>
                  <p className="text-amber-100">Concerts Performed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">25+</h3>
                  <p className="text-amber-100">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p className="text-amber-100">Cities Visited</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
