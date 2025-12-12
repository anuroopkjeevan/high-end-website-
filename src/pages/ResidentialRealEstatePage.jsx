import React, { useState } from 'react';
import { Shield, Users, Handshake, Target, Award, Star, CheckCircle, Lock, UserCheck, EyeOff, Icon, AccordionItem } from '../components/SharedComponents.jsx';
import { residentialRealEstateFAQ } from '../components/Data.js';

const ResidentialRealEstatePage = ({ handleNavClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFAQClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const safeResidentialFAQ = residentialRealEstateFAQ || [];

  return (
    <>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 z-0" 
             style={{
                 backgroundImage: `radial-gradient(circle at 20% 80%, #e8be69 0%, transparent 50%),
                                  radial-gradient(circle at 80% 20%, #e8be69 0%, transparent 50%),
                                  radial-gradient(circle at 40% 40%, #e8be69 0%, transparent 50%)`
             }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
                <p className="text-yellow-500 text-sm md:text-lg font-medium mb-6 md:mb-4">
                    Home / Residential Real Estate
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold md:font-extrabold leading-tight text-white mb-6 md:mb-8">
                    Buy or Sell{" "}
                    <span className="text-yellow-500 block md:inline mt-2 md:mt-0">
                        Residential Property
                    </span>
                    <span className="block mt-2 md:mt-0">in the UAE</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                    Off-Plan, Ready, and Everything in Between
                </p>
                <div className="max-w-4xl mx-auto">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify">
                        At POSH Consultants, we help clients navigate the UAE's residential real estate market with complete clarity and transparency. Whether you're exploring off-plan opportunities or looking to buy or sell a ready property, we guide you through every step with honesty, expertise, and a commitment to finding what's truly right for you.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Off-Plan Properties Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image - Updated to a proper off-plan property image */}
                <div className="relative">
                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                            alt="Luxury off-plan residential apartments in UAE"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                            OFF-PLAN
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-6">
                            Off-Plan Properties with{" "}
                            <span className="text-yellow-500">Excellent Potential</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 text-justify">
                            Off-plan projects in the UAE offer excellent potential — from flexible payment plans to attractive long-term returns. We help you understand each project thoroughly and choose options that align with your lifestyle or investment goals.
                        </p>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-3">
                                <div className="w-9 h-9 md:w-10 md:h-10 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <span className="text-justify flex-1">
                                    What We Do for Off-Plan Clients
                                </span>
                            </h3>

                            <div className="space-y-3 md:space-y-4">
                                {[
                                    "Present off-plan options from top developers that match your needs",
                                    "Compare units, layouts, amenities, handover dates, and payment plans",
                                    "Help you understand potential ROI, future appreciation, and location value",
                                    "Highlight differences between marketing hype and real, practical benefits",
                                    "Support you throughout the booking, paperwork, and developer process"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 md:w-7 md:h-7 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                                        </div>
                                        <span className="text-sm md:text-base text-gray-700 flex-1">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-base md:text-lg text-gray-700 italic mt-4 text-justify">
                                Our approach ensures you can confidently choose the right off-plan project with full understanding of every detail.
                            </p>

                            <button
                                onClick={() => handleNavClick('contactpage')}
                                className="w-full mt-6 md:mt-8 flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
                            >
                                <span className="whitespace-nowrap">Start Your Business Transaction</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Content */}
                <div className="space-y-6 order-2 lg:order-1">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-6 leading-tight">
                            Buying{" "}
                            <span className="text-yellow-500">Ready Properties</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                            Whether you're looking for an apartment, townhouse, villa, penthouse, or any ready-to-move option, we take time to understand your exact requirements and present properties that fit.
                        </p>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-start gap-3">
                                <div className="w-9 h-9 md:w-10 md:h-10 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                    <Icon 
                                        path="M5 13l4 4L19 7" 
                                        className="w-5 h-5 md:w-6 md:h-6 text-white" 
                                    />
                                </div>
                                <span className="leading-relaxed">
                                    We help you by:
                                </span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {[
                                    { 
                                        iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", 
                                        text: "Understanding your purpose, budget, and lifestyle" 
                                    },
                                    { 
                                        iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", 
                                        text: "Shortlisting suitable properties across the UAE" 
                                    },
                                    { 
                                        iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", 
                                        text: "Explaining the pros and cons of each option" 
                                    },
                                    { 
                                        iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", 
                                        text: "Arranging viewings and guiding negotiations" 
                                    },
                                    { 
                                        iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", 
                                        text: "Handling documentation and transfer processes" 
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors duration-200">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <Icon 
                                                path={item.iconPath} 
                                                className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" 
                                            />
                                        </div>
                                        <span className="text-sm md:text-base text-gray-700 leading-relaxed flex-1">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-base md:text-lg text-gray-700 font-semibold mt-4">
                                You get clear, straightforward support from start to finish.
                            </p>

                            <button
                                onClick={() => handleNavClick('contactpage')}
                                className="w-full mt-6 md:mt-8 inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 group"
                            >
                                <Icon 
                                    path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" 
                                />
                                <span className="flex-1 text-left">
                                    Find Your Dream Home
                                </span>
                                <Icon 
                                    path="M9 5l7 7-7 7" 
                                    className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" 
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="relative order-1 lg:order-2">
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                            alt="Luxury ready property in UAE"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Selling Properties Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image */}
                <div className="relative">
                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80"
                            alt="Selling property in UAE"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-6 leading-tight">
                            Selling Your{" "}
                            <span className="text-yellow-500">Property</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                            For sellers, we gather all details about your property and present it professionally to the right audience.
                        </p>

                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-start gap-3">
                                <div className="w-9 h-9 md:w-10 md:h-10 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                    <Icon 
                                        path="M5 13l4 4L19 7" 
                                        className="w-5 h-5 md:w-6 md:h-6 text-white" 
                                    />
                                </div>
                                <span className="leading-relaxed">
                                    We ensure:
                                </span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {[
                                    { 
                                        iconPath: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 2H4v4h12V6z M3 14v-2h14v2a2 2 0 01-2 2H5a2 2 0 01-2-2z", 
                                        text: "Accurate market evaluation" 
                                    },
                                    { 
                                        iconPath: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z", 
                                        text: "Proper documentation and profiling" 
                                    },
                                    { 
                                        iconPath: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z", 
                                        text: "Targeted marketing to reach serious buyers" 
                                    },
                                    { 
                                        iconPath: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", 
                                        text: "Transparent negotiation" 
                                    },
                                    { 
                                        iconPath: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", 
                                        text: "Smooth closing and transfer" 
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors duration-200">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <Icon 
                                                path={item.iconPath} 
                                                className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" 
                                            />
                                        </div>
                                        <span className="text-sm md:text-base text-gray-700 leading-relaxed flex-1">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-base md:text-lg text-gray-700 font-semibold mt-4">
                                Our priority is achieving the best value for your property while keeping the process simple and stress-free.
                            </p>

                            <button
                                onClick={() => handleNavClick('contactpage')}
                                className="w-full mt-6 md:mt-8 inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 group"
                            >
                                <Icon 
                                    path="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" 
                                />
                                <span className="flex-1 text-left">
                                    Sell Your Property
                                </span>
                                <Icon 
                                    path="M9 5l7 7-7 7" 
                                    className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" 
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Transactions Section */}
      <section className="py-16 md:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>
        
        <div className="absolute inset-0 opacity-5 z-0"
             style={{
                 backgroundImage: `radial-gradient(circle at 30% 70%, #e8be69 0%, transparent 40%),
                                  radial-gradient(circle at 70% 30%, #e8be69 0%, transparent 40%)`
             }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-white mb-3 md:mb-4">
                    Transactions Between{" "}
                    <span className="text-yellow-500">Buyers & Sellers</span>
                </h2>
                <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2 md:px-0 text-justify">
                    When we work directly with a buyer and seller, we act as a trusted, neutral partner to both sides.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
                {[
                    {
                        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                        title: "Complete Transparency",
                        description: "Full disclosure and honest communication throughout the process"
                    },
                    {
                        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
                        title: "Fair Communication",
                        description: "Balanced negotiations that respect both parties' interests"
                    },
                    {
                        icon: "M9 12l2 2 4-4",
                        title: "Balanced Negotiations",
                        description: "Fair approach that benefits both buyer and seller"
                    },
                    {
                        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                        title: "Accurate Documentation",
                        description: "Proper handling of all legal documents and transfer processes"
                    },
                    {
                        icon: "M13 10V3L4 14h7v7l9-11h-7z",
                        title: "Seamless Process",
                        description: "Smooth experience for both clients from start to finish"
                    }
                ].map((item, index) => (
                    <div key={index} className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500 text-center">
                        <Icon path={item.icon} className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                        <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto text-justify px-4 md:px-0">
                    We make sure every step is clearly understood by everyone involved.
                </p>
            </div>
        </div>
      </section>

      {/* Why POSH Consultants Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-3 md:mb-4">
                    Why Choose{" "}
                    <span className="text-yellow-500">POSH Consultants</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 md:px-0 text-justify">
                    We don't just help you buy or sell property — we help you make the right decision.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                    {
                        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                        title: "Transparent & Honest",
                        description: "Complete transparency and honesty from start to finish with no hidden agendas."
                    },
                    {
                        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                        title: "Client-Focused",
                        description: "Simple, client-focused communication with your best interests at heart."
                    },
                    {
                        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                        title: "Market Expertise",
                        description: "Deep understanding of the UAE real estate market and emerging opportunities."
                    },
                    {
                        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                        title: "Knowledge-Based",
                        description: "Knowledge-based comparisons and advice, not sales pressure tactics."
                    },
                    {
                        icon: "M13 10V3L4 14h7v7l9-11h-7z",
                        title: "End-to-End Support",
                        description: "Complete support through the entire transaction process and beyond."
                    },
                    {
                        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                        title: "Long-Term Focus",
                        description: "Solutions designed for long-term satisfaction, not quick deals."
                    }
                ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200">
                        <Icon path={item.icon} className="w-8 h-8 text-yellow-500 mb-4" />
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10 md:mt-12">
                <button 
                    onClick={() => handleNavClick('contactpage')}
                    className="inline-flex items-center justify-center gap-3 px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-base md:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 group"
                >
                    <span className="text-justify">
                        Contact Our Real Estate Team
                    </span>
                </button>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold md:font-extrabold text-gray-900 mb-4 md:mb-8">Residential Real Estate FAQs</h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            {safeResidentialFAQ.map((item, index) => (
              <AccordionItem 
                key={index} 
                question={item.q} 
                answer={item.a} 
                isOpen={activeIndex === index} 
                onClick={() => handleFAQClick(index)} 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResidentialRealEstatePage;