import React from 'react';
import { Users, CheckCircle2 } from 'lucide-react';
import { professionalExperience } from '../data/mock';

const companyLogos = [
  "https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/3uk8jtcp_IMG_20251231_090250009.png",
  "https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/6c7xxfci_IMG_20250614_095423.jpg"
];

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
              {/* Header with Logo */}
              <div className="bg-slate-800 p-6 group-hover:bg-slate-900 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                    <img 
                      src={companyLogos[index]} 
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{exp.company}</h3>
                    <p className="text-emerald-400 text-sm font-medium">{exp.role}</p>
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

        {/* Company Logos Banner */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <p className="text-center text-slate-500 text-sm uppercase tracking-wide mb-6">Family Business Ventures</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 flex items-center justify-center">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/3uk8jtcp_IMG_20251231_090250009.png"
                    alt="Aura Adventure Junction LLP"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="mt-3 text-slate-700 font-medium text-sm text-center">Aura Adventure Junction LLP</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 flex items-center justify-center">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/6c7xxfci_IMG_20250614_095423.jpg"
                    alt="Bella Hot Air Balloon Rides"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="mt-3 text-slate-700 font-medium text-sm text-center">Bella Hot Air Balloon Rides</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Photo Gallery */}
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 rounded-2xl overflow-hidden h-64">
              <img 
                src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/kw1wsqf8_IMG_20260126_213502.jpg"
                alt="Aerial View - Adventure Park with Hot Air Balloon"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-64">
              <img 
                src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/bujfa1k6_IMG_20260126_212456.jpg"
                alt="Hot Air Balloon in Flight"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48">
              <img 
                src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/yqgvg8y4_IMG_20260126_212408.jpg"
                alt="Aura Adventure Junction Park"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48">
              <img 
                src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/utov1ruw_IMG_20260126_211513.jpg"
                alt="Customers at Bella Hot Air Balloon"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48">
              <img 
                src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/xzmdsju3_IMG_20260126_211500.jpg"
                alt="Adventure Activities Ground"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Father - Business Leadership */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-emerald-800 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Photo */}
              <div className="h-80 md:h-auto">
                <img 
                  src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/e8vuwwos_IMG-20210109-WA0017-1.jpg"
                  alt="Mr. Rajesh Singh - Operating Hot Air Balloon"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="text-emerald-300 text-sm font-medium uppercase tracking-wide mb-2">Business Leadership</p>
                <h3 className="text-white font-serif text-2xl md:text-3xl font-bold mb-4">
                  Mr. Rajesh Singh
                </h3>
                <p className="text-emerald-100 text-lg mb-2">Partner & Owner</p>
                <p className="text-emerald-200 mb-6">Aura Adventure Junction LLP</p>
                <p className="text-emerald-100/80 leading-relaxed">
                  Under the visionary leadership of my father, our family business has grown into a trusted name in adventure tourism. His dedication and entrepreneurial spirit continue to inspire my own professional journey.
                </p>
              </div>
            </div>
          </div>
          
          {/* Father's Photo Gallery */}
          <div className="mt-6 grid grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden h-24">
              <img 
                src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/pvegtrnv_IMG_20231208_141003.jpg"
                alt="Mr. Rajesh Singh - Travel"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-24">
              <img 
                src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/mi9p2sjb_IMG20240903130728.jpg"
                alt="Mr. Rajesh Singh"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-24">
              <img 
                src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/jk9jthq6_IMG_20240925_200524.jpg"
                alt="Mr. Rajesh Singh - Office"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-24">
              <img 
                src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/y0pymda4_IMG_20210305_182317.jpg"
                alt="Mr. Rajesh Singh"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <p className="text-center text-slate-600 mt-8 max-w-2xl mx-auto">
            Building experience in adventure tourism through hands-on involvement in family business operations.
          </p>
        </div>

        {/* Younger Brother Section */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Main Photo */}
              <div className="md:col-span-2 h-72 md:h-auto">
                <img 
                  src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/vwzq8btg_IMG_20260128_035650.jpg"
                  alt="Prashant Tongar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="md:col-span-3 p-8 flex flex-col justify-center">
                <p className="text-emerald-600 text-sm font-medium uppercase tracking-wide mb-2">Family</p>
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">
                  Prashant Tongar
                </h3>
                <p className="text-slate-600 mb-4">Younger Brother</p>
                <p className="text-slate-500 leading-relaxed mb-6">
                  My younger brother and constant companion in life's journey. Together we share adventures, dreams, and the values instilled by our family.
                </p>
                {/* Brother's Photo Gallery */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg overflow-hidden h-20">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/bxpwbasn_IMG_20260128_035627.jpg"
                      alt="Prashant Tongar"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden h-20">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/z87yh159_IMG_20260128_035638.jpg"
                      alt="Prashant Tongar"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden h-20">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_tongar-profile/artifacts/fm4umxir_IMG_20260128_035702.jpg"
                      alt="Prashant Tongar"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
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

export default ExperienceSection;
