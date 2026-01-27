import React from 'react';
import { GraduationCap, BookOpen, Award, Building } from 'lucide-react';
import { education } from '../data/mock';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-700 font-medium tracking-wide text-sm uppercase mb-3">
            Academic Background
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Education
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3">
              {/* Left - Icon Section */}
              <div className="bg-emerald-800 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap size={40} className="text-white" />
                </div>
                <p className="text-emerald-100 text-sm">Currently Pursuing</p>
                <p className="text-white font-bold text-2xl">{education.currentClass}</p>
              </div>

              {/* Right - Details Section */}
              <div className="md:col-span-2 p-8 lg:p-12">
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">
                  {education.school}
                </h3>
                <p className="text-emerald-700 font-medium mb-6">{education.location}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen size={20} className="text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Stream</p>
                      <p className="text-slate-800 font-medium">{education.stream}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Board</p>
                      <p className="text-slate-800 font-medium">RBSE</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                  {education.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
