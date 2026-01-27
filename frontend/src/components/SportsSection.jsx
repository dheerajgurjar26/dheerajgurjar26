import React from 'react';
import { Trophy, Target, Medal, Flame } from 'lucide-react';
import { sportsAchievements } from '../data/mock';

const SportsSection = () => {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-700 font-medium tracking-wide text-sm uppercase mb-3">
            Discipline & Excellence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Sports & Achievements
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Sports have taught me discipline, mental strength, and the importance of never giving up.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {sportsAchievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`relative group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div
                className={`h-full bg-slate-50 rounded-3xl p-8 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-200 ${
                  index === 0 ? 'flex flex-col justify-between' : ''
                }`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                    {index === 0 ? (
                      <Medal size={28} className="text-emerald-700" />
                    ) : index === 1 ? (
                      <Trophy size={28} className="text-emerald-700" />
                    ) : (
                      <Target size={28} className="text-emerald-700" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      {achievement.sport}
                    </span>
                    <span className="text-sm text-slate-500">{achievement.year}</span>
                  </div>
                  <h3 className={`font-serif font-bold text-slate-800 mb-3 ${
                    index === 0 ? 'text-3xl' : 'text-xl'
                  }`}>
                    {achievement.achievement}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Featured Badge for Main Achievement */}
                {index === 0 && (
                  <div className="mt-8 flex items-center gap-2 text-emerald-700">
                    <Flame size={20} />
                    <span className="font-medium">Featured Achievement</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sports Image */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <img
            src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/764iaqh4_IMG_20250926_222822%20%281%29.jpg"
            alt="Gym Training - Fitness"
            className="w-full h-64 md:h-80 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-lg">
              <h3 className="text-white font-serif text-3xl md:text-4xl font-bold mb-4">
                Discipline & Fitness
              </h3>
              <p className="text-slate-200">
                Physical fitness is the foundation of mental strength. Consistent training builds character, discipline, and resilience that extends beyond the gym.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
