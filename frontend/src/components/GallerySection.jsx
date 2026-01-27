import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { galleryImages } from '../data/mock';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % filteredImages.length
        : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-700 font-medium tracking-wide text-sm uppercase mb-3">
            Visual Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Photo Gallery
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
        </div>

        {/* Important Notice */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Info size={20} className="text-emerald-700" />
            </div>
            <div>
              <h4 className="text-emerald-800 font-semibold mb-2">Photo Guidelines</h4>
              <p className="text-emerald-700 text-sm leading-relaxed">
                For authenticity and professionalism, please use clear, high-quality, well-lit
                photographs with a natural background. Professional or formal attire is recommended
                for profile images.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'h-full min-h-[300px] md:min-h-[500px]' : 'h-48 md:h-64'}`}>
                <img
                  src={image.image}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-emerald-400 text-sm font-medium">{image.category}</span>
                  <p className="text-white font-medium mt-1">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Camera size={18} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-emerald-400 transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 md:left-8 text-white hover:text-emerald-400 transition-colors"
            >
              <ChevronLeft size={40} />
            </button>

            <div onClick={(e) => e.stopPropagation()} className="max-w-4xl max-h-[80vh]">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="text-emerald-400 text-sm font-medium">{selectedImage.category}</span>
                <p className="text-white font-medium mt-1">{selectedImage.alt}</p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 md:right-8 text-white hover:text-emerald-400 transition-colors"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
