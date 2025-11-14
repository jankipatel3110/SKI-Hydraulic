import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const navIcons: { [key: string]: React.ReactNode } = {
  Home: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>,
  About: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
  Products: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>,
  Contact: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>,
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const useDarkText = isScrolled || (!isScrolled && isHomePage);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2.5 group">
                <div className="w-10 h-10 flex items-center justify-center">
                    <svg className={`w-8 h-8 transition-colors duration-300 ${useDarkText ? 'text-gray-800' : 'text-white'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 4.00001C17 4.00001 12 4.00001 10 6.00001C8 8.00001 8 11 8 11C8 11 8 14 10 16C12 18 17 18 17 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5"/>
                      <path d="M7 20C7 20 12 20 14 18C16 16 16 13 16 13C16 13 16 10 14 8.00001C12 6.00001 7 6.00001 7 6.00001" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-0.5"/>
                    </svg>
                </div>
                <span className={`font-aldrich text-xl font-bold tracking-wider transition-colors duration-300 ${useDarkText ? 'text-gray-800' : 'text-white'}`}>
                  SKI HYDRAULIC
                </span>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `
                    relative group px-4 py-2 text-sm font-semibold transition-colors duration-300
                    ${isActive ? (useDarkText ? 'text-cyan-600' : 'text-cyan-400') : (useDarkText ? 'text-gray-600 hover:text-cyan-600' : 'text-gray-200 hover:text-white')}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute bottom-1 left-0 h-[2px] w-full transition-transform duration-300 origin-left
                        ${useDarkText ? 'bg-cyan-500' : 'bg-cyan-400'}
                        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                        `}
                      ></span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
            
            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center">
                <Link to="/contact" className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-600 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
                    <span>Get Quote</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12"></path></svg>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`z-[60] relative w-8 h-8 flex flex-col items-center justify-center transition-colors duration-300 ${useDarkText ? 'text-gray-800' : 'text-white'}`}
                aria-label="Toggle menu"
              >
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Panel */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white/90 backdrop-blur-xl shadow-2xl z-50 transition-transform duration-300 ease-in-out lg:hidden flex flex-col border-l border-gray-200 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-5 border-b border-gray-200 h-16 lg:h-20 flex items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2.5">
             <div className="w-10 h-10 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 4.00001C17 4.00001 12 4.00001 10 6.00001C8 8.00001 8 11 8 11C8 11 8 14 10 16C12 18 17 18 17 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 20C7 20 12 20 14 18C16 16 16 13 16 13C16 13 16 10 14 8.00001C12 6.00001 7 6.00001 7 6.00001" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
             <span className="font-aldrich text-xl font-bold tracking-wider text-gray-800">SKI HYDRAULIC</span>
          </Link>
        </div>
        
        <nav className="flex-grow p-4">
            <ul className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
                <li key={link.name}>
                <NavLink
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => `flex items-center gap-4 w-full p-3 rounded-lg text-base font-medium transition-all duration-300 ${isActive ? 'bg-cyan-50 text-cyan-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}`}
                >
                    {({ isActive }) => (
                      <>
                        <div className={isActive ? 'text-cyan-600' : 'text-gray-500'}>{navIcons[link.name]}</div>
                        <span>{link.name}</span>
                      </>
                    )}
                </NavLink>
                </li>
            ))}
            </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
            <div className="flex flex-col">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-center gap-2 w-full text-center px-5 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all duration-300">
                  <span>Get Quote</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12"></path></svg>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;