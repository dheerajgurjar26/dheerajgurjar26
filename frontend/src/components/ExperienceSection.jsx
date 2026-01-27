import React from 'react';
import { Briefcase, Building2, Users, CheckCircle2 } from 'lucide-react';
import { professionalExperience } from '../data/mock';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-700 font-medium tracking-wide text-sm uppercase mb-3">
            Professional Growth
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {professionalExperience.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="bg-emerald-800 p-6 group-hover:bg-emerald-900 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {index === 0 ? (
                      <Building2 size={28} className="text-white" />
                    ) : (
                      <Briefcase size={28} className="text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{exp.company}</h3>
                    <p className="text-emerald-200 text-sm">{exp.role}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-slate-800 font-semibold mb-4 flex items-center gap-2">
                  <Users size={18} className="text-emerald-600" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Business Image */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?w=1200&auto=format&fit=crop&q=80"
              alt="Hot Air Balloon Business"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex items-end">
              <div className="p-8 md:p-12">
                <p className="text-emerald-400 font-medium mb-2">Family Business Involvement</p>
                <h3 className="text-white font-serif text-2xl md:text-3xl font-bold">
                  Building Experience in Adventure Tourism
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
