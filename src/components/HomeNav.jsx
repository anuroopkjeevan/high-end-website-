import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

const HomeNav = ({ handleNavClick, Logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (target) => {
    handleNavClick(target);
    closeMenu();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl bg-[#121214]/70 border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <button
            onClick={() => handleNavigation("home")}
            className="flex items-center focus:outline-none flex-shrink-0 z-20 hover:opacity-80 transition-opacity"
          >
            <img
              src={Logo}
              alt="Adverra Hub Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">

            <button
              onClick={() => handleNavigation("home")}
              className={`font-bold text-xs uppercase tracking-widest transition-colors ${
                isActive("/") ? "text-[#7c7adb]" : "text-gray-400 hover:text-white"
              }`}>
              Home
            </button>

            <button
              onClick={() => handleNavigation("about")}
              className={`font-bold text-xs uppercase tracking-widest transition-colors ${
                isActive("/about") ? "text-[#7c7adb]" : "text-gray-400 hover:text-white"
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNavigation("services")}
              className={`font-bold text-xs uppercase tracking-widest transition-colors ${
                isActive("/services") ? "text-[#7c7adb]" : "text-gray-400 hover:text-white"
              }`}
            >
              Services
            </button>

            {/* BLOG LINK - ADDED */}
            <button
              onClick={() => handleNavigation("blog")}
              className={`font-bold text-xs uppercase tracking-widest transition-colors ${
                isActive("/blog") ? "text-[#7c7adb]" : "text-gray-400 hover:text-white"
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => window.location.href = "tel:7560807374"}
              className="px-6 py-2.5 rounded-full border border-[#7c7adb]/40 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#7c7adb] transition-all duration-300 shadow-[0_0_20px_rgba(124,122,219,0.1)]"
            >
              Let's Talk
            </button>

          </div>

          {/* MOBILE HEADER BUTTONS */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => handleNavigation("contactpage")}
              className="px-4 py-2 rounded-full border border-[#7c7adb]/40 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#7c7adb] transition-all duration-300"
            >
              Let's Talk
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90] md:hidden"
              onClick={closeMenu}
            />

            {/* SLIDE PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-[#1e1e24] border-l border-white/5 z-[95] md:hidden pt-24 px-8"
            >
              <div className="flex flex-col gap-8">

                <button
                  onClick={() => handleNavigation("home")}
                  className="text-left text-2xl font-black text-white hover:text-[#7c7adb] transition-colors uppercase tracking-tighter"
                >
                  Home
                </button>

                <button
                  onClick={() => handleNavigation("about")}
                  className="text-left text-2xl font-black text-white hover:text-[#7c7adb] transition-colors uppercase tracking-tighter"
                >
                  About
                </button>

                <button
                  onClick={() => handleNavigation("services")}
                  className="text-left text-2xl font-black text-white hover:text-[#7c7adb] transition-colors uppercase tracking-tighter"
                >
                  Services
                </button>

                {/* BLOG LINK - ADDED TO MOBILE MENU */}
                <button
                  onClick={() => handleNavigation("blog")}
                  className="text-left text-2xl font-black text-white hover:text-[#7c7adb] transition-colors uppercase tracking-tighter"
                >
                  Blog
                </button>

                <button
                  onClick={() => handleNavigation("work")}
                  className="text-left text-2xl font-black text-white hover:text-[#7c7adb] transition-colors uppercase tracking-tighter"
                >
                  Work
                </button>
{/* 
        

                {/* SOCIALS - UPDATED WITH CORRECT LINKS */}
                <div className="border-t border-white/10 pt-8 mt-4">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-6">
                    <a 
                      href="https://www.instagram.com/adverra_hub/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#7c7adb] transition-colors"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/adverrahub" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#7c7adb] transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61578278429066" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#7c7adb] transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeNav;