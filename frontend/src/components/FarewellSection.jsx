import React, { useState } from 'react';
import { Calendar, MapPin, GraduationCap, Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';

const farewellPhotos = [
  {
    id: 1,
    image: "https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/il9va2k5_IMG-20260130-WA0164.jpg",
    alt: "Dheeraj Tongar Class 12th Farewell Celebration"
  },
  {
    id: 2,
    image: "https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/ems80kgj_IMG_20260130_081848.jpg",
    alt: "Dheeraj Tongar School Farewell Day"
  },
  {
    id: 3,
    image: "https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/ot7udf51_IMG-20260130-WA0168.jpg",
    alt: "Dheeraj Tongar with Classmates Farewell"
  },
  {
    id: 4,
    image: "https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/hkhpspac_IMG-20260130-WA0074.jpg",
    alt: "Dheeraj Tongar Vanasthali School Farewell 2026"
  }
];

const FarewellSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo, index) => {
    setSelectedImage(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % farewellPhotos.length
      : (currentIndex - 1 + farewellPhotos.length) % farewellPhotos.length;
    setCurrentIndex(newIndex);
    setSelectedImage(farewellPhotos[newIndex]);
  };

  return (
    <section id="farewell" className="py-24 lg:py-32 bg-gradient-to-b from-amber-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap size={18} />
            <span>A New Beginning</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Class 12th Farewell
          </h2>
          <p className="text-xl text-amber-700 font-medium italic">
            — A Memorable Chapter —
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mt-6" />
        </div>

        {/* Event Details Card */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-amber-100">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-6">
              <h3 className="text-white text-xl font-semibold text-center">Event Details</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Date */}
                <div className="text-center p-4 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Calendar size={28} className="text-amber-600" />
                  </div>
                  <p className="text-slate-500 text-sm mb-1">Date</p>
                  <p className="text-slate-800 font-bold text-lg">29 January 2026</p>
                </div>

                {/* Venue */}
                <div className="text-center p-4 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <MapPin size={28} className="text-amber-600" />
                  </div>
                  <p className="text-slate-500 text-sm mb-1">Venue</p>
                  <p className="text-slate-800 font-bold text-lg">Singhara Palace</p>
                  <p className="text-slate-600 text-sm">Dholpur, Rajasthan</p>
                </div>

                {/* School */}
                <div className="text-center p-4 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <GraduationCap size={28} className="text-amber-600" />
                  </div>
                  <p className="text-slate-500 text-sm mb-1">School</p>
                  <p className="text-slate-800 font-bold text-lg leading-tight">Vanasthali Shiksha Niketan</p>
                  <p className="text-slate-600 text-sm">Senior Secondary School</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {farewellPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(photo, index)}
                className={`group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className={`${index === 0 ? 'h-full min-h-[300px] lg:min-h-[500px]' : 'h-48 md:h-64'}`}>
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">Class 12th Farewell 2026</p>
                  </div>
                </div>
                {/* Corner Badge for Main Photo */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Emotional Text Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-amber-100">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Heart size={32} className="text-amber-600" />
              </div>
            </div>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p className="text-center">
                <span className="text-amber-700 font-semibold">29 January 2026</span> will always remain a special day in my life.
              </p>
              
              <p className="text-center">
                It marked the celebration of memories, friendships, and growth built over years of school life.
              </p>
              
              <p className="text-center">
                The farewell was not just an event, but a moment of <span className="text-amber-700 font-medium">gratitude</span>, <span className="text-amber-700 font-medium">reflection</span>, and <span className="text-amber-700 font-medium">new beginnings</span>.
              </p>
              
              <p className="text-center">
                Standing alongside my teachers and classmates, I felt proud of the journey and hopeful for the future ahead.
              </p>
              
              <p className="text-center font-medium text-slate-700 border-t border-amber-200 pt-6 mt-6">
                This day symbolizes the end of one chapter and the beginning of many <span className="text-amber-700">responsibilities</span>, <span className="text-amber-700">dreams</span>, and <span className="text-amber-700">ambitions</span>.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 text-center">
              <p className="font-serif text-2xl text-slate-800 italic">Dheeraj Tongar</p>
              <p className="text-slate-500 text-sm mt-1">Class of 2026</p>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 md:left-8 text-white hover:text-amber-400 transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>

            <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[85vh]">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-amber-400 text-sm font-medium">Class 12th Farewell</p>
                <p className="text-white font-medium mt-1">29 January 2026 • Singhara Palace, Dholpur</p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 md:right-8 text-white hover:text-amber-400 transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FarewellSection;
