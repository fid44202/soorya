
import React, { useState, useEffect } from 'react';

const AutoChangingImages = () => {
  const images = [
    "/lovable-uploads/b9e7668c-03e4-4749-bc64-f33816656eb9.png",
    "/lovable-uploads/e07b392f-545d-4441-a8fa-126d1ac5cdcb.png",
    "/lovable-uploads/a8f2cc7f-4fdf-4fa2-95fa-ed791b5ee806.png",
    "/lovable-uploads/d39be2d9-4b7a-44b6-8780-535f51594ea7.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-300/50">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
        </div>
      ))}
      
      {/* Image indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoChangingImages;
