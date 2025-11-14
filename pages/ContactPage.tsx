

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONTACT_INFO, PRODUCTS, SOCIAL_LINKS, FAQS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        productInterest: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState('');
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    useEffect(() => {
        if (location.state?.productName) {
            setFormData(prev => ({ ...prev, productInterest: location.state.productName }));
        }
    }, [location.state]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormStatus('Thank you for your inquiry! We will get back to you soon.');
        setFormData({
            firstName: '', lastName: '', email: '', mobile: '', productInterest: '', message: ''
        });
        setTimeout(() => setFormStatus(''), 5000);
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const InfoBlock: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
      <div className="flex items-start gap-4">
        <div className="bg-cyan-500/20 text-cyan-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <div className="text-gray-400 text-sm">{children}</div>
        </div>
      </div>
    );

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section
              className="relative h-[70vh] flex items-center justify-center text-white bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1575032313657-db212262bfeb')" }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider glowing-text">Contact Us</h1>
                <p className="mt-2 text-lg text-gray-300">We're here to help. Reach out to us for any inquiries or support.</p>
              </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="grid grid-cols-1 lg:grid-cols-3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                        {/* Left Column: Contact Details */}
                        <div
                          className="relative text-white p-8 lg:p-12 col-span-1 bg-cover bg-center"
                          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6')" }}
                        >
                            <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
                                <p className="text-gray-300 mb-8">
                                    Have a question or need a custom quote? Our team is ready to assist you.
                                </p>
                                <div className="space-y-6">
                                    <InfoBlock icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>} title="Our Address">
                                        {CONTACT_INFO.address}
                                    </InfoBlock>
                                    <InfoBlock icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>} title="Call Us">
                                        <a href={`tel:${CONTACT_INFO.phone1}`} className="hover:text-cyan-400 transition-colors">{CONTACT_INFO.phone1}</a><br/>
                                        <a href={`tel:${CONTACT_INFO.phone2}`} className="hover:text-cyan-400 transition-colors">{CONTACT_INFO.phone2}</a>
                                    </InfoBlock>
                                    <InfoBlock icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>} title="Email Us">
                                        <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cyan-400 transition-colors">{CONTACT_INFO.email}</a>
                                    </InfoBlock>
                                </div>
                                 <div className="mt-10 pt-8 border-t border-white/10">
                                    <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        {SOCIAL_LINKS.map(link => (
                                            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d={link.icon}/></svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Column: Inquiry Form */}
                        <div className="p-8 lg:p-12 col-span-1 lg:col-span-2">
                             <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                             <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                                </div>
                                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                                <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                                <select name="productInterest" value={formData.productInterest} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none">
                                    <option value="">Select Product Interest (Optional)</option>
                                    {PRODUCTS.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                                </select>
                                <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                                <div>
                                    <button type="submit" className="w-full py-3 px-6 bg-cyan-500 text-white font-semibold rounded-lg shadow-md shadow-cyan-500/20 hover:bg-cyan-600 transform hover:-translate-y-0.5 transition-all duration-300">
                                        Submit Inquiry
                                    </button>
                                </div>
                                {formStatus && <p className="text-center text-green-600 mt-4 text-sm font-medium">{formStatus}</p>}
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-2">Find quick answers to common questions about our products and services.</p>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="max-w-4xl mx-auto space-y-4">
                            {FAQS.map((faq, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex justify-between items-center text-left p-5 font-semibold text-gray-800 focus:outline-none hover:bg-gray-50/50 transition-colors"
                                        aria-expanded={openFaq === index}
                                    >
                                        <span>{faq.question}</span>
                                        <svg
                                            className={`w-5 h-5 transform transition-transform duration-300 text-cyan-500 ${openFaq === index ? 'rotate-180' : ''}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="px-5 pb-5 pt-2 text-gray-600 border-t border-gray-100">
                                            <p className="leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-gray-800">Find Us Here</h2>
                         <p className="text-gray-600 max-w-2xl mx-auto mt-2">Visit our manufacturing unit located in the industrial heart of Gujarat.</p>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-96 lg:h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.684725301825!2d70.78018867529141!3d22.252061079723657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca232143099b%3A0x6154696a09045b78!2sSKI%20HYDRAULIC!5e0!3m2!1sen!2sin!4v1700473917805!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;