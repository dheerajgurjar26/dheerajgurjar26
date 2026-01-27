import React from 'react';
import { Heart, Quote, Sparkles } from 'lucide-react';
import { personalJourney } from '../data/mock';

const JourneySection = () => {
  return (
    <section id="journey" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-700 font-medium tracking-wide text-sm uppercase mb-3">
            My Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Personal Journey
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Start Badge */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-emerald-100 rounded-full px-6 py-3 flex items-center gap-3">
              <Sparkles size={20} className="text-emerald-700" />
              <span className="text-emerald-800 font-semibold">
                Journey began at age {personalJourney.startAge}
              </span>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
            
            <div className="relative">
              {/* Title with Icon */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <Heart size={24} className="text-emerald-700" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-800">
                  {personalJourney.title}
                </h3>
              </div>

              {/* Story Text */}
              <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line mb-10">
                {personalJourney.story}
              </p>

              {/* Quote */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <Quote size={32} className="text-emerald-600 mb-4" />
                <blockquote className="font-serif text-xl md:text-2xl text-slate-700 italic leading-relaxed">
                  {personalJourney.quote}
                </blockquote>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {['Resilience', 'Self-Respect', 'Forward Movement'].map((value, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 text-center hover:bg-emerald-50 transition-colors"
              >
                <p className="text-slate-800 font-semibold">{value}</p>
                <p className="text-slate-500 text-sm mt-1">Core Value</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
