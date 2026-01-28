import React from 'react';
import { Heart, ArrowUp, Instagram, Youtube, Facebook, Camera } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        return Instagram;
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">{personalInfo.fullName}</h3>
            <p className="text-emerald-400 text-sm mb-4">Dheeru | Dheeru Tongar | Dheeraj Gurjar | Dheeru Gurjar</p>
            <p className="text-slate-400 leading-relaxed mb-6">
              {personalInfo.tagline}
            </p>
            <p className="text-slate-500 text-sm">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Education', 'Achievements', 'Experience', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Follow Dheeraj Tongar</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = getSocialIcon(social.platform);
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-800 transition-colors"
                    aria-label={`${personalInfo.fullName} on ${social.platform}`}
                    title={`Follow Dheeraj Tongar on ${social.platform}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="text-slate-500 text-xs mt-4">
              Connect with Dheeraj Tongar (Dheeru) on social media
            </p>
          </div>
        </div>
      </div>

      {/* SEO Footer Text */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <p className="text-slate-600 text-xs text-center">
            Official website of Dheeraj Tongar | Also known as Dheeru, Dheeru Tongar, Dheeraj Gurjar, Dheeru Gurjar | Student & Business Executive from Dholpur, Rajasthan | District Wushu Medalist | Aspiring Lawyer
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} {personalInfo.fullName} (Dheeru). Made with <Heart size={14} className="text-red-500" /> in India
            </p>
            
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
