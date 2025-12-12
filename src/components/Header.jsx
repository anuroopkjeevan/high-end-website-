// Header.jsx
import React, { useState, useEffect } from 'react';
import { Icon } from './SharedComponents.jsx';
import Logo from '../assets/posh_logo_cropped.png';
import { navItems } from './Data.js'; // Import nav items

const Header = ({ page, handleNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const localHandleNavClick = (targetPage) => {
    setIsMenuOpen(false);
    handleNavClick(targetPage);
  };

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1280;
      setIsDesktop(desktop);
      if (desktop && isMenuOpen) setIsMenuOpen(false);

      const header = document.querySelector('header');
      if (header) setHeaderHeight(header.offsetHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && !isDesktop) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen, isDesktop]);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-2xl relative bg-black">
        {/* Background overlays */}
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black/80 z-0" />

        <div className="w-full mx-auto relative z-10">
          {/* Top Bar */}
          <div className="hidden md:block bg-black/90 text-white py-2 px-4 sm:px-6 lg:px-8 backdrop-blur-sm border-b border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm space-y-1 sm:space-y-0">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
                <span className="flex items-center text-gray-300 text-xs sm:text-sm whitespace-nowrap">
                  <span className="text-yellow-400 mr-1">®</span>
                  Office 310, Sarah Building, Al Garhoud, Dubai
                </span>
                <span className="hidden xl:flex items-center text-gray-300 text-xs sm:text-sm whitespace-nowrap">
                  <Icon path="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-400 flex-shrink-0" />
                  admin@poshconsultants.com
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="hidden lg:flex items-center space-x-2">
                  {/* Social icons */}
                  {/* <a href="#" className="text-yellow-400 hover:text-white transition duration-300 transform hover:scale-110">
                    <Icon path="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a> */}
                  <a href="https://www.facebook.com/poshconsultantsdxb" className="text-yellow-400 hover:text-white transition duration-300 transform hover:scale-110">
                    <Icon path="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.129 22 16.99 22 12z" className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
                <span className="text-yellow-400 font-semibold text-xs sm:text-sm whitespace-nowrap">© Posh Consultants</span>
              </div>
            </div>
          </div>

          {/* Main nav */}
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20 relative">
              {/* Logo */}
              <button onClick={() => localHandleNavClick('home')} className="flex items-center focus:outline-none flex-shrink-0 z-20">
  <img src={Logo} alt="POSH Consultants Logo" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
</button>

              {/* Desktop nav */}
              <nav className="hidden xl:flex items-center justify-center flex-1 mx-4">
                <div className="flex items-center justify-center space-x-4 2xl:space-x-8">
                  {navItems.map(item => (
                    <button
                      key={item.name}
                      onClick={() => localHandleNavClick(item.page)}
                      className={`text-sm 2xl:text-base font-medium px-3 py-2 rounded-lg transition duration-300 focus:outline-none whitespace-nowrap ${page === item.page ? 'text-yellow-400 font-bold bg-yellow-400/10' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-2 sm:p-3 rounded-lg text-white hover:text-yellow-400 hover:bg-gray-800/50 transition duration-300 focus:outline-none border border-gray-700/50 backdrop-blur-sm flex-shrink-0 z-40"
                aria-label="Toggle menu"
              >
                <Icon path={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {!isDesktop && isMenuOpen && (
        <>
          <div className="xl:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40" onClick={() => setIsMenuOpen(false)} />
          <div
            className="xl:hidden fixed left-0 right-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto"
            style={{ top: `${headerHeight}px`, height: `calc(100vh - ${headerHeight}px)` }}
          >
            <div className="px-4 pt-4 pb-6 space-y-3 h-full flex flex-col">
              <div className="flex-1 overflow-y-auto">
                {navItems.map(item => (
                  <button
                    key={item.name}
                    onClick={() => localHandleNavClick(item.page)}
                    className={`block w-full text-left px-4 py-4 rounded-lg text-base font-semibold transition duration-300 border-l-4 min-h-[52px] flex items-center mb-2 ${page === item.page ? 'bg-yellow-500/20 text-yellow-400 border-yellow-400' : 'text-gray-300 hover:bg-gray-800/50 hover:text-white border-transparent'}`}
                  >
                    {item.name}
                  </button>
                ))}

                {/* Mobile contact info */}
                <div className="py-4 border-t border-gray-800 mt-4">
                  <div className="space-y-3 text-gray-300">
                    <p className="flex items-start text-sm leading-relaxed">
                      <span className="text-yellow-400 mr-2 mt-0.5 flex-shrink-0">®</span>
                      <span>Office 310, Sarah Building, Al Garhoud, Dubai, UAE</span>
                    </p>
                    <p className="flex items-center text-sm">
                      <Icon path="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" className="w-4 h-4 mr-2 text-yellow-400 flex-shrink-0" />
                      admin@poshconsultants.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social icons bottom */}
              <div className="flex justify-center space-x-6 py-4 border-t border-gray-800 mt-auto">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300 transform hover:scale-110 p-2">
                  <Icon path="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300 transform hover:scale-110 p-2">
                  <Icon path="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.129 22 16.99 22 12z" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
