import React from 'react';
import { Plane, Mountain, MapPin, Compass } from 'lucide-react';
import { travelExperiences, futureGoals } from '../data/mock';

const TravelGoalsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Travel Section */}
        <div className="mb-24">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-emerald-700 font-medium tracking-wide text-sm uppercase mb-3">
              Exploration & Growth
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Travel & Interests
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          </div>

          {/* Travel Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {travelExperiences.map((travel, index) => (
              <div
                key={travel.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={
                      index === 0
                        ? 'https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/2jnii73n_1000011166-01.jpeg'
                        : index === 1
                        ? 'https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/a5a6vkz2_IMG_5761.jpeg'
                        : 'https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/h6y0q2lc_IMG_20251127_204124.jpg'
                    }
                    alt={travel.destination}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-emerald-600" />
                    <span className="text-emerald-700 font-medium text-sm">{travel.destination}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{travel.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Travel Quote */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 italic text-lg max-w-2xl mx-auto">
              "Travel opens your mind to new perspectives and teaches you that the world is vast, beautiful, and full of possibilities."
            </p>
          </div>
        </div>

        {/* Future Goals Section */}
        <div id="goals">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-emerald-700 font-medium tracking-wide text-sm uppercase mb-3">
              Vision & Aspirations
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Future Goals
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          </div>

          {/* Goals Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-emerald-800 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <Compass size={32} className="text-white" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white mb-4">
                    {futureGoals.primaryGoal}
                  </h3>
                  <p className="text-emerald-100 leading-relaxed mb-6">
                    {futureGoals.description}
                  </p>
                  <p className="text-emerald-200 italic border-l-2 border-emerald-400 pl-4">
                    "{futureGoals.vision}"
                  </p>
                </div>

                {/* Right Side - Values */}
                <div className="bg-emerald-900/50 p-8 md:p-12">
                  <h4 className="text-white font-semibold mb-6">Core Values</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {futureGoals.values.map((value, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-2xl p-4 text-center hover:bg-white/20 transition-colors"
                      >
                        <p className="text-white font-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-emerald-200 text-sm">Career Aspiration</p>
                    <p className="text-white text-lg font-semibold">Law & Justice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelGoalsSection;
