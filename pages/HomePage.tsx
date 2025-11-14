

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
    PRODUCTS, 
    TESTIMONIALS, 
    INDUSTRIES, 
    QUALITY_STATS, 
    CERTIFICATIONS, 
    QUALITY_PROCESS_STEPS,
    HERO_IMAGES,
    PARTNER_LOGOS,
    COMPANY_STATS,
    CONTACT_INFO
} from '../constants';
import AnimatedCounter from '../components/AnimatedCounter';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard, { Product } from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const SectionTitle: React.FC<{ subtitle: string; children: React.ReactNode }> = ({ subtitle, children }) => (
    <AnimatedSection className="text-center mb-12">
        <span className="text-sm font-semibold text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">{children}</h2>
        <div className="w-20 h-1 bg-cyan-600 mx-auto mt-4"></div>
    </AnimatedSection>
);

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0].id);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const selectedIndustry = INDUSTRIES.find(ind => ind.id === activeIndustry) || INDUSTRIES[0];

    const handleViewDetails = (product: Product) => {
      setSelectedProduct(product);
    };

    const handleCloseModal = () => {
      setSelectedProduct(null);
    };

    const TestimonialCard: React.FC<(typeof TESTIMONIALS)[0]> = ({ quote, name, title, rating, logo }) => (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-[calc(100vw-4rem)] sm:w-[420px] flex flex-col shrink-0">
            <div className="flex items-center justify-between mb-4">
                <img src={logo} alt={`${title}'s logo`} className="h-10 object-contain max-w-[150px]" />
                <div className="flex">
                    {[...Array(rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                </div>
            </div>
            <p className="text-gray-600 italic text-base flex-grow">"{quote}"</p>
            <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-bold text-gray-800 text-lg">{name}</p>
                <p className="text-sm text-gray-500">{title}</p>
            </div>
        </div>
    );

    const firstRowTestimonials = TESTIMONIALS.slice(0, 4);
    const secondRowTestimonials = TESTIMONIALS.slice(3, 7);

    return (
        <div className="bg-white text-gray-800">

            {/* Hero Section */}
            <section className="relative bg-[#F8F9FA] pt-32 pb-20 lg:pt-40 lg:pb-24">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <div className="text-center lg:text-left">
                        <div className="mb-4">
                            <div className="inline-block p-3 bg-cyan-100/70 rounded-full">
                                <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100/80 text-cyan-700 font-semibold text-sm rounded-full mb-4 shadow-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            20+ Years of Excellence
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                            Precision Engineered<br />
                            <span className="text-cyan-600">Hydraulic Components</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                            Leading manufacturer of premium hydraulic components for agriculture, automotive, and industrial sectors. Experience the SKI HYDRAULIC difference with uncompromising quality and engineering excellence.
                        </p>
                        
                        <div className="mt-8 grid grid-cols-3 gap-8 text-left max-w-md mx-auto lg:mx-0">
                            <div>
                                <p className="text-4xl font-bold text-cyan-600"><AnimatedCounter end={20} />+</p>
                                <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-cyan-600"><AnimatedCounter end={500} />+</p>
                                <p className="text-sm text-gray-500 font-medium">Happy Clients</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-cyan-600"><AnimatedCounter end={99} />%</p>
                                <p className="text-sm text-gray-500 font-medium">Quality Rate</p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Link to="/products" className="group flex items-center justify-center gap-2 px-7 py-3 bg-cyan-500 text-white text-base font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-600 transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/30">
                                Explore Products →
                            </Link>
                            <Link to="/contact" className="group flex items-center justify-center px-7 py-3 bg-white text-gray-700 text-base font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 transform hover:-translate-y-0.5 shadow-md border border-gray-200 hover:border-gray-300">
                                Get Quote
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-full h-[500px] lg:h-[550px] group">
                        <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden">
                            {HERO_IMAGES.map((src, index) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt={`State-of-the-art manufacturing facility ${index + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                                />
                            ))}

                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <div className="bg-gray-900/60 backdrop-blur-md p-4 rounded-xl text-white flex items-center gap-4">
                                    <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-white/50">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">State-of-the-Art Manufacturing</h3>
                                        <p className="text-sm text-gray-300">Advanced production facilities ensuring precision and quality.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute bottom-6 right-6 flex items-center space-x-2.5 z-10">
                            {HERO_IMAGES.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`rounded-full transition-all duration-300 ${currentSlide === index ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/75'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Partners/Clients Marquee */}
            <section className="py-12 bg-gray-50/70 border-y border-gray-200/80 overflow-hidden">
                <div className="group">
                    <div className="flex space-x-16 marquee">
                        {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
                            <img key={index} src={logo} alt={`Partner logo ${index % PARTNER_LOGOS.length + 1}`} className="h-8 object-contain" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Precision Engineered Components Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <SectionTitle subtitle="Our Products">Precision Engineered Components</SectionTitle>
                    <AnimatedSection>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {PRODUCTS.slice(0, 3).map(product => (
                                <ProductCard key={product.name} product={product} onViewDetails={handleViewDetails} />
                            ))}
                        </div>
                    </AnimatedSection>
                    <div className="text-center mt-12">
                        <Link to="/products" className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-cyan-600 font-bold rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white border-2 border-cyan-500 shadow-md">
                            View All Products
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-20 bg-subtle-pattern-light">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-12">
                        <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                            <svg className="inline-block w-4 h-4 mr-2 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h5m-5 4h5"></path></svg>
                            Industries We Serve
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Hydraulic Solutions Across Sectors</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            From agriculture to automotive, our precision-engineered hydraulic components power diverse industries with reliability and performance.
                        </p>
                    </AnimatedSection>
                    
                    <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column: Industry Selector */}
                        <div className="lg:col-span-5 space-y-4">
                            {INDUSTRIES.map(industry => {
                                const isActive = activeIndustry === industry.id;
                                return (
                                    <div
                                        key={industry.id}
                                        onClick={() => setActiveIndustry(industry.id)}
                                        className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                                            isActive 
                                            ? 'bg-white shadow-lg border-2 border-cyan-400' 
                                            : 'bg-white shadow-sm border border-gray-200 hover:border-gray-300 hover:shadow-md'
                                        }`}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-start gap-5">
                                                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                                                    isActive ? 'bg-cyan-500 text-white' : 'bg-cyan-100 text-cyan-600'
                                                }`}>
                                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={industry.icon} />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-800">{industry.name}</h3>
                                                    <p className="text-sm text-gray-600 mt-1">{industry.description}</p>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0 text-cyan-500">
                                                {isActive ? (
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                                ) : (
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                                )}
                                            </div>
                                        </div>
                                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-40 pt-4' : 'max-h-0'}`}>
                                            <div className="flex flex-wrap gap-2">
                                                {industry.tags.map(tag => (
                                                    <span key={tag} className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Column: Industry Details */}
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                                <div className="relative">
                                    <img 
                                        src={selectedIndustry.image} 
                                        alt={selectedIndustry.name} 
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                                        <p className="text-2xl font-bold text-cyan-600">{selectedIndustry.projectsCompleted}+</p>
                                        <p className="text-sm text-gray-600 font-medium">Projects Completed</p>
                                    </div>
                                     <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-md flex items-center justify-center bg-cyan-500 text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={selectedIndustry.icon} />
                                            </svg>
                                        </div>
                                        <span className="font-bold text-gray-800">{selectedIndustry.name}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-6 text-gray-800">Key Products for {selectedIndustry.name}</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                        {selectedIndustry.keyProducts.map(product => (
                                            <div key={product} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <span className="text-gray-700">{product}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                                        <p className="font-semibold text-cyan-600 text-lg">
                                            <span className="font-bold">{selectedIndustry.satisfiedClients}+</span> satisfied clients
                                        </p>
                                        <Link to="/products" className="group flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white text-base font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-600 transform hover:scale-105 shadow-md shadow-cyan-500/30">
                                            <span>View Solutions</span>
                                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Uncompromising Quality Standards */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <SectionTitle subtitle="Our Promise">Uncompromising Quality Standards</SectionTitle>
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {QUALITY_STATS.map(stat => (
                                <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center transition-all duration-300 hover:shadow-cyan-500/10 hover:-translate-y-1.5">
                                    <div className="bg-cyan-100 text-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon}></path></svg>
                                    </div>
                                    <p className="text-4xl font-bold text-gray-800">
                                        <AnimatedCounter end={stat.value} />{stat.label === 'Years Experience' ? '+' : '%'}
                                    </p>
                                    <p className="text-gray-500 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="relative">
                                <img 
                                    src="https://picsum.photos/seed/quality-check/800/600" 
                                    alt="Quality Control Process" 
                                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                                />
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500 rounded-full z-10 flex items-center justify-center text-white shadow-lg">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Our Quality Control Process</h3>
                                <p className="text-gray-600 mb-6">
                                    We follow a multi-stage quality control process to ensure every product meets our stringent standards of excellence.
                                </p>
                                <div className="space-y-4">
                                    {QUALITY_PROCESS_STEPS.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all">
                                            <div className="bg-cyan-100 text-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                                                    {item.points.map((point, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50/70 overflow-hidden">
                <SectionTitle subtitle="Client Feedback">What Our Partners Say</SectionTitle>
                <div className="space-y-8">
                    <div className="flex gap-8 group">
                        <div className="flex gap-8 marquee">
                            {firstRowTestimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
                            {firstRowTestimonials.map((testimonial, index) => <TestimonialCard key={`dup1-${index}`} {...testimonial} />)}
                        </div>
                    </div>
                    <div className="flex gap-8 group">
                         <div className="flex gap-8 marquee-reverse">
                            {secondRowTestimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
                            {secondRowTestimonials.map((testimonial, index) => <TestimonialCard key={`dup2-${index}`} {...testimonial} />)}
                        </div>
                    </div>
                </div>
            </section>
            
             {/* Call to Action */}
            <section
              className="relative py-20 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556139943-4bd5623282a2')" }}
            >
              <div className="absolute inset-0 bg-cyan-800/80 backdrop-blur-sm"></div>
              <div className="container mx-auto px-6 relative z-10 text-center text-white">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Hydraulic Systems?</h2>
                    <p className="max-w-3xl mx-auto mb-8 text-cyan-100">
                        Partner with SKI HYDRAULIC for reliable, high-performance components tailored to your needs. Contact our experts today for a personalized consultation and quote.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-cyan-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span>Request a Quote</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                </AnimatedSection>
              </div>
            </section>

            <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        </div>
    );
};

export default HomePage;