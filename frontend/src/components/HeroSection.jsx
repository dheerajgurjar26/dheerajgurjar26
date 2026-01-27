import React from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { personalInfo } from '../data/mock';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-100 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <p className="text-emerald-700 font-medium tracking-wide text-sm uppercase mb-4 animate-fade-in">
              Welcome to my world
            </p>

            {/* Name */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              {personalInfo.fullName}
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personalInfo.tagline}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start text-slate-500 mb-8">
              <MapPin size={18} className="mr-2 text-emerald-600" />
              <span className="text-sm">{personalInfo.location}</span>
            </div>

            {/* Intro Line */}
            <p className="text-slate-700 text-lg italic border-l-4 border-emerald-600 pl-4 mb-10 max-w-lg mx-auto lg:mx-0">
              "{personalInfo.introLine}"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAbout();
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white font-medium rounded-full hover:bg-emerald-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Discover My Story
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-medium rounded-full hover:border-emerald-800 hover:text-emerald-800 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Portrait Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/mj0z7dk0_IMG20251220005251.jpg"
                  alt="Dheeraj Tongar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-100 rounded-full -z-10" />
              
              {/* Badge */}
              <div className="absolute -bottom-2 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-emerald-800 font-semibold text-sm">🏅 District Medalist</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-emerald-600 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
