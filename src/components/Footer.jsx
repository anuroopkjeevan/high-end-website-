import React from 'react';
import { Icon } from './SharedComponents.jsx';
import { footerServices } from './Data.js';
import logoImage from '../assets/posh_logo_cropped.png';

const Footer = ({ handleNavClick, contactDetails }) => {
    return (
        <footer className="bg-gray-900 border-t border-gray-700 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10 mb-8">
                    
                    {/* Column 1: Company Overview & Mission with Logo */}
                    <div>
                        <button 
                            onClick={() => handleNavClick('home')} 
                            className="focus:outline-none mb-4"
                        >
                            <img
                                src={logoImage}
                                alt="Posh Consultants - Business Setup in UAE"
                                className="h-12 w-auto"
                                onError={(e) => {
                                    // Fallback to text if logo doesn't load
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            {/* Fallback text logo - hidden by default, shows if image fails to load */}
                            <span className="text-3xl font-extrabold text-yellow-500 tracking-wide hidden">
                                POSH<span className="text-white">Consultants</span>
                            </span>
                        </button>
                        <p className="text-gray-400 text-sm mb-4">
                            POSH Consultants makes the process of buying or selling a business smooth and stress-free, offering expert guidance, transparent communication, and complete support from start to finish. We also provide reliable residential and commercial real estate services backed by strong market insight and honest advice. Additionally, our team ensures a seamless and compliant UAE business setup experience, handling documentation and approvals with precision and care.
                        </p>
                        <div className="flex space-x-3">
                            {/* YouTube - Golden/Yellow color */}
                            <a href="https://www.youtube.com/@PoshConsultants" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition transform hover:scale-110 duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.268-4.356 2.62-4.385 8.816.029 6.195.488 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.267 4.356-2.621 4.385-8.816-.029-6.195-.488-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a>
                            
                            {/* LinkedIn - Golden/Yellow color */}
                            <a href="https://www.linkedin.com/company/posh-consultants/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition transform hover:scale-110 duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            
                            {/* Facebook - Golden/Yellow color */}
                            <a href="https://www.facebook.com/poshconsultantsdxb" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition transform hover:scale-110 duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            
                            {/* Instagram - Golden/Yellow color */}
                            <a href="https://www.instagram.com/poshconsultantsdxb/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition transform hover:scale-110 duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center">
                            <Icon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" className="w-5 h-5 mr-2 text-yellow-500" />
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {footerServices.map((service, index) => (
                                <li key={index}>
                                    <button 
                                        onClick={() => handleNavClick('businesssetup')} 
                                        className="text-gray-400 hover:text-yellow-500 transition text-sm focus:outline-none flex items-center group"
                                    >
                                        <Icon path="M9 5l7 7-7 7" className="w-3 h-3 mr-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {service}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: UAE Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center">
                            <Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" className="w-5 h-5 mr-2 text-yellow-500" />
                            UAE Office
                        </h3>
                        <div className="space-y-3 text-gray-400">
                            <p className="flex items-start text-sm">
                                <Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" className="w-4 h-4 mr-2 text-yellow-500 mt-0.5 flex-shrink-0" />
                                {contactDetails.uae.addressDetail}
                            </p>
                            <p className="flex items-center text-sm hover:text-yellow-500 transition duration-300">
                                <Icon path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" className="w-4 h-4 mr-2 text-yellow-500 flex-shrink-0" />
                                <a href={`tel:${contactDetails.uae.phone}`} className="tracking-wide">+971 56 57 47 444</a>
                            </p>
                            <p className="flex items-center text-sm hover:text-yellow-500 transition duration-300">
                                <Icon path="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="w-4 h-4 mr-2 text-yellow-500 flex-shrink-0" />
                                <a href={`mailto:${contactDetails.uae.email}`}>{contactDetails.uae.email}</a>
                            </p>
                        </div>
                    </div>

                    {/* Column 4: India Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center">
                            <Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" className="w-5 h-5 mr-2 text-yellow-500" />
                            India Office
                        </h3>
                        <div className="space-y-3 text-gray-400">
                            <p className="flex items-start text-sm">
                                <Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" className="w-4 h-4 mr-2 text-yellow-500 mt-0.5 flex-shrink-0" />
                                {contactDetails.india.addressDetail}
                            </p>
                            <p className="flex items-center text-sm hover:text-yellow-500 transition duration-300">
                                <Icon path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" className="w-4 h-4 mr-2 text-yellow-500 flex-shrink-0" />
                                <a href={`tel:${contactDetails.india.phone1}`}>{contactDetails.india.phone1}</a>
                            </p>
                            <p className="flex items-center text-sm hover:text-yellow-500 transition duration-300">
                                <Icon path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" className="w-4 h-4 mr-2 text-yellow-500 flex-shrink-0" />
                                <a href={`tel:${contactDetails.india.phone2}`}>{contactDetails.india.phone2}</a>
                            </p>
                            <p className="flex items-center text-sm hover:text-yellow-500 transition duration-300">
                                <Icon path="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="w-4 h-4 mr-2 text-yellow-500 flex-shrink-0" />
                                <a href={`mailto:${contactDetails.uae.email}`}>{contactDetails.uae.email}</a>
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom Line */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p className="flex items-center">
                        <Icon path="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" className="w-4 h-4 mr-2 text-yellow-500" />
                        &copy; 2024 Posh Consultants. All rights reserved.
                    </p>
                    <a href="#" className="hover:text-yellow-500 transition duration-300 mt-2 md:mt-0 flex items-center">
                        <Icon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" className="w-4 h-4 mr-2 text-yellow-500" />
                        Privacy & Cookie Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;