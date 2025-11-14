import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS, PRODUCTS } from '../constants';

// Helper to get unique product categories
const productCategories = [...new Set(PRODUCTS.map(p => p.category))];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0A0F1A] text-white pt-20 pb-8 overflow-hidden">
      {/* Animated Circle Objects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute w-72 h-72 bg-cyan-500/5 rounded-full" 
          style={{ 
            top: '15%', 
            left: '10%', 
            animation: 'subtle-drift 55s linear infinite alternate' 
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 bg-cyan-500/5 rounded-full" 
          style={{ 
            bottom: '10%', 
            right: '15%', 
            animation: 'subtle-drift 65s linear infinite alternate-reverse' 
          }}
        ></div>
        <div 
          className="absolute w-32 h-32 bg-cyan-500/5 rounded-full" 
          style={{ 
            top: '50%', 
            right: '30%', 
            animation: 'subtle-drift 75s linear infinite alternate' 
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 pb-16 border-b border-white/10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Stay Updated</h2>
            <p className="text-gray-400">Subscribe to our newsletter for the latest product updates and industry news.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow w-full px-5 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              aria-label="Email for newsletter"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-md shadow-cyan-500/20"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Socials */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="bg-cyan-500 w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
                <div className="flex flex-col space-y-1 items-center justify-center">
                  <div className="w-5 h-[3px] bg-white transform -skew-x-12"></div>
                  <div className="w-5 h-[3px] bg-white transform -skew-x-12"></div>
                  <div className="w-5 h-[3px] bg-white transform -skew-x-12"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-white">SKI HYDRAULIC</span>
                <span className="text-xs text-gray-400 -mt-1">Manufacturing Excellence</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Precision-engineered hydraulic components for demanding industrial applications.
            </p>
            <div className="flex space-x-4 pt-2">
              {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d={link.icon}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {productCategories.map(category => (
                <li key={category}>
                  <Link to="/products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>{CONTACT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>{CONTACT_INFO.phone1}</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cyan-400 transition-colors">{CONTACT_INFO.email}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SKI HYDRAULIC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;