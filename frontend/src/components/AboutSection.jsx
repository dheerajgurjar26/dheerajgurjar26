import React from 'react';
import { Calendar, MapPin, User, Flag } from 'lucide-react';
import { personalInfo } from '../data/mock';

const AboutSection = () => {
  const infoItems = [
    { icon: User, label: 'Full Name', value: personalInfo.fullName },
    { icon: Calendar, label: 'Date of Birth', value: personalInfo.dateOfBirth },
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Flag, label: 'Nationality', value: personalInfo.nationality },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-700 font-medium tracking-wide text-sm uppercase mb-3">
            Get to Know Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div>
            <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
              {personalInfo.aboutDescription}
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 hover:bg-emerald-50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <item.icon size={24} className="text-emerald-700" />
                </div>
                <p className="text-slate-500 text-sm mb-1">{item.label}</p>
                <p className="text-slate-800 font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Age Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-emerald-50 px-8 py-4 rounded-full">
            <span className="text-4xl font-serif font-bold text-emerald-800">{personalInfo.age}</span>
            <div className="text-left">
              <p className="text-slate-500 text-sm">of age</p>
              <p className="text-slate-700 font-medium">Young & Ambitious</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
