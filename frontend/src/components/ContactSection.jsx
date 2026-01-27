import React from 'react';
import { Instagram, Youtube, Facebook, Camera, Mail, MapPin, Heart } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/mock';

const ContactSection = () => {
  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return Instagram;
      case 'youtube':
        return Youtube;
      case 'facebook':
        return Facebook;
      case 'snapchat':
        return Camera;
      default:
        return Mail;
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-700 font-medium tracking-wide text-sm uppercase mb-3">
            Let's Connect
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            I'd love to connect with like-minded individuals. Feel free to reach out through any of my social platforms.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {socialLinks.map((social) => {
            const Icon = getSocialIcon(social.platform);
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors">
                  <Icon size={24} className="text-slate-600 group-hover:text-emerald-700 transition-colors" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-1">{social.platform}</h4>
                <p className="text-slate-500 text-sm">{social.handle}</p>
              </a>
            );
          })}
        </div>

        {/* Contact Info Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-emerald-800 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin size={28} className="text-white" />
            </div>
            <h3 className="text-white font-serif text-2xl font-bold mb-4">
              Based in {personalInfo.location}
            </h3>
            <p className="text-emerald-100 mb-6">
              Open to connecting with professionals, mentors, and fellow students who share a passion for growth and excellence.
            </p>
            <div className="inline-flex items-center gap-2 text-emerald-200">
              <Heart size={18} />
              <span>Looking forward to hearing from you</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
