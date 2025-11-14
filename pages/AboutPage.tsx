

import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { LEADERSHIP_TEAM, MANUFACTURING_FACILITIES, QUALITY_PROCESS_STEPS, WHY_CHOOSE_US_DATA } from '../constants';

const journeyData = [
    { year: 2005, event: "Founded SKI HYDRAULIC", description: "Began our journey with a vision for quality and precision in hydraulic manufacturing." },
    { year: 2010, event: "Expanded into New Markets", description: "Broadened our reach, serving a wider range of clients across the nation." },
    { year: 2015, event: "Introduced Advanced Machinery", description: "Upgraded our facility with state-of-the-art CNC machines to enhance precision." },
    { year: 2020, event: "Automated Manufacturing Process", description: "Implemented automation to increase efficiency and maintain consistent quality." },
    { year: 2025, event: "Leading Innovation", description: "Pioneering new solutions in hydraulic components, setting industry benchmarks." },
];

const industriesData = [
    { 
        name: "Agriculture", 
        images: [
            "https://picsum.photos/seed/agriculture-new-1/600/400",
            "https://picsum.photos/seed/agriculture-new-2/600/400",
            "https://picsum.photos/seed/agriculture-new-3/600/400"
        ] 
    },
    { 
        name: "Industrial", 
        images: [
            "https://picsum.photos/seed/industrial-new-1/600/400",
            "https://picsum.photos/seed/industrial-new-2/600/400",
            "https://picsum.photos/seed/industrial-new-3/600/400"
        ] 
    },
];

interface Industry {
  name: string;
  images: string[];
}

const IndustryCard: React.FC<{ industry: Industry }> = ({ industry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (industry.images && industry.images.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % industry.images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(intervalId);
    }
  }, [industry.images]);

  return (
    <div className="relative rounded-2xl overflow-hidden group shadow-lg h-80">
      {industry.images.map((imageSrc, index) => (
        <img
          key={index}
          src={imageSrc}
          alt={`${industry.name} industry ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 transition-all duration-300 group-hover:from-black/80">
        <h3 className="text-2xl font-bold text-white transform group-hover:-translate-y-1 transition-transform duration-300">{industry.name}</h3>
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase glowing-text">Who We Are & What We Do?</h1>
          <p className="mt-2 text-lg md:text-xl text-gray-300">Precision. Performance. Perfection.</p>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16">From a humble beginning in 2005 to an industry leader, our story is one of relentless pursuit of excellence.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative">
              {/* Vertical timeline bar */}
              <div className="absolute h-full w-0.5 bg-cyan-200 left-5 md:left-1/2 md:transform md:-translate-x-1/2"></div>
              
              {/* Timeline items container */}
              <div className="space-y-12 md:space-y-16">
                {journeyData.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Marker */}
                    <div className="absolute top-0 left-5 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center ring-8 ring-gray-50">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                      <div className="md:w-1/2"></div> {/* This is a spacer */}
                      <div className="md:w-1/2">
                        <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                            <p className="font-bold text-lg text-cyan-700">{item.year}</p>
                            <h4 className="font-semibold text-gray-800 mt-1">{item.event}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership Excellence Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2 text-gray-800">
              Leadership <span className="text-cyan-600">Excellence</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">Experienced leaders driving innovation and growth in hydraulic engineering.</p>
          </AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {LEADERSHIP_TEAM.map((leader, index) => (
                <AnimatedSection key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 p-6 text-center transition-all duration-300 group-hover:shadow-cyan-500/20 group-hover:-translate-y-2 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative inline-block mx-auto mb-4">
                          <div className="w-36 h-36 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 to-blue-500">
                              <img src={leader.image} alt={leader.name} className="w-full h-full object-cover rounded-full border-4 border-white" />
                          </div>
                      </div>

                      {/* Name and Title */}
                      <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                      <p className="text-cyan-600 font-semibold mb-3">{leader.title}</p>
                      
                      {/* Social Icons */}
                      <div className="flex items-center justify-center gap-3 mb-4">
                          <a href={leader.socials.email} className="w-9 h-9 flex items-center justify-center bg-gray-100 text-gray-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow" aria-label={`Email ${leader.name}`}>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                          </a>
                          <a href={leader.socials.phone} className="w-9 h-9 flex items-center justify-center bg-gray-100 text-gray-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow" aria-label={`Call ${leader.name}`}>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                          </a>
                          <a href={leader.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-gray-100 text-gray-500 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow" aria-label={`LinkedIn profile of ${leader.name}`}>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                          </a>
                      </div>
                      
                      {/* Bio */}
                      <p className="text-gray-600 text-sm mb-6 flex-grow">{leader.bio}</p>

                      {/* Skills */}
                      <div className="border-t border-gray-200 pt-5 mt-auto">
                          <h4 className="font-semibold text-sm text-gray-500 mb-3 text-left">Core Skills</h4>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                              {leader.skills.map(skill => (
                                  <div key={skill} className="flex items-center gap-2 text-sm text-gray-700 text-left">
                                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                      <span>{skill}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2 text-gray-800">
              Our <span className="text-cyan-600">Core Principles</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Guiding our commitment to quality, innovation, and customer satisfaction.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Mission Card */}
            <AnimatedSection>
              <div className="bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col border border-gray-200 hover:-translate-y-1.5 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path><circle cx="12" cy="12" r="1"></circle></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 mb-6">To deliver hydraulic excellence through precision engineering, powering progress, and building lasting partnerships.</p>
                <ul className="space-y-3 text-gray-700 flex-grow">
                  <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span>Deliver hydraulic excellence with unwavering <strong className="font-semibold text-gray-900">precision and trust</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span>Engineer components that <strong className="font-semibold text-gray-900">power industrial progress</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span>Build <strong className="font-semibold text-gray-900">lasting customer relationships</strong> through reliability.</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            {/* Vision Card */}
            <AnimatedSection>
              <div className="bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col border border-gray-200 hover:-translate-y-1.5 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 mb-6">To be the globally recognized leader in hydraulic solutions, defined by innovation, quality, and industry-leading standards.</p>
                <ul className="space-y-3 text-gray-700 flex-grow">
                  <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span>Become the most <strong className="font-semibold text-gray-900">trusted hydraulic brand</strong> worldwide.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span>Lead the industry through unparalleled <strong className="font-semibold text-gray-900">innovation and quality</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span>Set new <strong className="font-semibold text-gray-900">benchmarks and standards</strong> in hydraulic manufacturing.</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute hidden lg:block top-1/4 left-8 opacity-50 text-gray-300">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        </div>
         <div className="absolute hidden lg:block top-3/4 left-8 opacity-50 text-gray-300">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        </div>
        <div className="absolute hidden lg:block top-1/4 right-8 opacity-50 text-gray-300">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>
        <div className="absolute hidden lg:block top-3/4 right-8 opacity-50 text-gray-300">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>

        <div className="container mx-auto px-6">
            <AnimatedSection className="text-center">
                <h2 className="text-4xl font-bold mb-2 text-gray-800">
                    Manufacturing <span className="text-cyan-600">Excellence</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-16">State-of-the-art facilities and advanced technologies for precision manufacturing.</p>
            </AnimatedSection>

            <div className="space-y-16">
                {MANUFACTURING_FACILITIES.map((facility, index) => (
                    <AnimatedSection key={facility.title}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className={` ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <img src={facility.image} alt={facility.title} className="rounded-2xl shadow-xl w-full h-96 object-cover" />
                            </div>
                            <div className={` ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-cyan-100 text-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={facility.icon}></path></svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">{facility.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-6">{facility.description}</p>
                                    <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg mb-6">
                                        {facility.specs.map(spec => (
                                            <div key={spec.label}>
                                                <p className="text-sm text-gray-500">{spec.label}</p>
                                                <p className="font-semibold text-cyan-600">{spec.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <ul className="space-y-3 text-gray-700">
                                        {facility.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </section>

      {/* Quality Processes Section */}
        <section className="py-20 bg-gray-50/70">
            <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-2 text-gray-800">
                Our Commitment to <span className="text-cyan-600">Quality</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto mt-4">
                A step-by-step look at our rigorous quality control process, ensuring every component meets the highest standards of excellence.
                </p>
            </AnimatedSection>
            
            <div className="space-y-16 lg:space-y-24">
                {QUALITY_PROCESS_STEPS.map((process, index) => (
                <AnimatedSection key={index}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Image */}
                    <div className={`relative group ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="absolute -inset-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl transform transition-transform duration-500 group-hover:rotate-[-5deg] group-hover:scale-105 hidden lg:block"></div>
                        <img src={process.image} alt={process.title} className="relative rounded-2xl shadow-xl w-full h-auto object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/10 rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="bg-cyan-500 text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                                <span className="text-2xl font-bold">{`0${index + 1}`}</span>
                            </div>
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{process.title}</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6 text-base leading-relaxed">{process.description}</p>
                        
                        <div className="space-y-4">
                            {process.points.map((point, i) => (
                                <div key={i} className="flex items-start">
                                <div className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </AnimatedSection>
                ))}
            </div>
            
            <div className="mt-20">
                <div className="flex items-center justify-center">
                    <div className="flex-grow h-px bg-cyan-200 max-w-sm"></div>
                    <svg className="w-8 h-8 text-cyan-500 mx-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    <div className="flex-grow h-px bg-cyan-200 max-w-sm"></div>
                </div>
            </div>
            </div>
        </section>

      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50/70">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2 text-gray-800">
              The SKI HYDRAULIC <span className="text-cyan-600">Advantage</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Our core values and unwavering commitment to quality set us apart from the competition.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US_DATA.map((item) => (
              <AnimatedSection key={item.title}>
                <div className="bg-white p-6 rounded-2xl h-full transition-all duration-300 border border-gray-100 hover:border-cyan-200 hover:shadow-xl hover:-translate-y-1.5">
                  <div className="flex items-start gap-5">
                    <div className="bg-cyan-100 text-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 mt-1 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Industries We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">Our components are trusted by a diverse range of industries for their reliability and performance.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industriesData.map(industry => (
              <AnimatedSection key={industry.name}>
                <IndustryCard industry={industry} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
