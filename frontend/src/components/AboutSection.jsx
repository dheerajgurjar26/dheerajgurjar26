import React from 'react';
import { MapPin, User, Flag, Briefcase, Scale } from 'lucide-react';
import { personalInfo } from '../data/mock';

const AboutSection = () => {
  const infoItems = [
    { icon: User, label: 'Full Name', value: personalInfo.fullName },
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Flag, label: 'Nationality', value: personalInfo.nationality },
    { icon: Briefcase, label: 'Role', value: 'Operations & Business Executive' },
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
            About Dheeraj Tongar
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          {/* Also Known As - SEO */}
          <p className="mt-4 text-slate-500 text-sm">
            Also known as: <span className="text-emerald-700 font-medium">Dheeru</span> • <span className="text-emerald-700 font-medium">Dheeraj Gurjar</span> • <span className="text-emerald-700 font-medium">Dheeru Tongar</span> • <span className="text-emerald-700 font-medium">Dheeru Gurjar</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* About Text - Larger */}
          <div className="lg:col-span-3">
            <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line mb-8">
              {personalInfo.aboutDescription}
            </p>
            {/* Signature */}
            <div className="border-t border-slate-200 pt-6 mt-6">
              <p className="font-serif text-xl text-slate-800 italic">— Dheeraj Tongar</p>
            </div>
          </div>

          {/* Info Cards - Compact */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-5 hover:bg-emerald-50 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                  <item.icon size={20} className="text-emerald-700" />
                </div>
                <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                <p className="text-slate-800 font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Aspiration Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-emerald-50 px-8 py-4 rounded-full">
            <Scale size={28} className="text-emerald-700" />
            <div className="text-left">
              <p className="text-slate-500 text-sm">Aspiration</p>
              <p className="text-slate-800 font-semibold">Career in Law & Judiciary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
