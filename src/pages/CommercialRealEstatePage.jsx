import React, { useState } from 'react';
import { Shield, Users, Handshake, Target, Award, Star, CheckCircle, Lock, UserCheck, EyeOff, Icon, AccordionItem } from '../components/SharedComponents.jsx';
import { commercialRealEstateFAQ } from '../components/Data.js';

const CommercialRealEstatePage = ({ handleNavClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFAQClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const safeCommercialFAQ = commercialRealEstateFAQ || [];

  return (
    <>
 {/* Hero Section */}
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
            <p className="text-yellow-500 text-sm md:text-lg font-medium mb-6 md:mb-4 tracking-normal">
                Home / Commercial Real Estate
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold md:font-extrabold leading-tight text-white mb-6 md:mb-8 tracking-tight">
                Buy or Sell{" "}
                <span className="text-yellow-500 block md:inline mt-2 md:mt-0">
                    Warehouse, Land & Commercial Real Estate
                </span>
                <span className="block mt-2 md:mt-0">in the UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto tracking-normal leading-relaxed">
                Professional Guidance for High-Value Property Decisions
            </p>
            <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed tracking-normal text-justify">
                    POSH Consultants assists clients with buying and selling commercial-ready properties, offering transparent advice and complete transaction management for high-value real estate deals.
                </p>
            </div>
        </div>
    </div>
</section>
{/* Property Types Section */}
<section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-3 md:mb-4">
                What We Help You{" "}
                <span className="text-yellow-500">Buy or Sell</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 md:px-0 text-justify md:text-justify [text-align-last:center]">
                Comprehensive commercial real estate solutions for all your business needs.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
                {
                    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                    title: "Residential Land",
                    description: "Prime residential land parcels for development projects and investment opportunities."
                },
                {
                    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                    title: "Commercial Land",
                    description: "Strategic commercial land for office buildings, retail centers, and mixed-use developments."
                },
                {
                    // Option 1: Terrain/Plot (Most Common for Land)
                    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",                                        title: "Industrial Land",
                    description: "Industrial zones and manufacturing facilities with optimal logistics and accessibility."
                },
                {
                    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
                    title: "Warehouses",
                    description: "Modern warehouse facilities with storage solutions and distribution capabilities."
                },
                {
                    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                    title: "Showrooms & Retail",
                    description: "Prime retail spaces and showrooms in high-traffic commercial areas."
                },
                {
                    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                    title: "Commercial Buildings",
                    description: "Office towers and commercial complexes for corporate headquarters and businesses."
                },
                {
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                    title: "Mixed-use Plots",
                    description: "Development plots for integrated residential, commercial, and retail projects."
                }
            ].map((item, index) => (
                <div key={index} className={`bg-white p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500 hover:shadow-2xl transition duration-300 hover:shadow-yellow-500/20 ${index === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                    <Icon path={item.icon} className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
</section>
        {/* For Buyers Section */}
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-6">
                        For{" "}
                        <span className="text-yellow-500">Buyers</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 text-justify md:text-justify [text-align-last:left]">
                        We understand your business goals, investment expectations, operational requirements, and budget. Based on this, we present the most suitable land parcels, warehouses, or commercial units.
                    </p>

                    <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-9 h-9 md:w-10 md:h-10 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <span className="text-justify md:text-justify [text-align-last:left] flex-1">
                                We Compare:
                            </span>
                        </h3>

                        <div className="space-y-3 md:space-y-4">
                            {[
                                "Location advantages and accessibility",
                                "Zoning regulations and development potential",
                                "ROI potential and investment returns",
                                "Future development possibilities in the area",
                                "Infrastructure and utility availability"
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

                        <p className="text-base md:text-lg text-gray-700 italic mt-4 text-justify md:text-justify [text-align-last:left]">
                            Based on this, we present the most suitable land parcels, warehouses, or commercial units — comparing location advantages, zoning, ROI potential, accessibility, and future development possibilities.
                        </p>

                        <button
                            onClick={() => handleNavClick('contactpage')}
                            className="w-full mt-6 md:mt-8 flex items-center justify-between px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 flex-1">
                                <Icon path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                                <span className="text-left whitespace-nowrap">
                                    Find Commercial Properties
                                </span>
                            </div>
                            <span className="flex-shrink-0 ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="relative">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
                        alt="Commercial property buyers in UAE"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
            </div>
        </div>
    </div>
</section>

        {/* For Sellers Section */}
        <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image */}
                   <div className="relative order-2 lg:order-1">
  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
    <img
      src="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1373&q=80"
      alt="Modern glass office tower in a UAE business district"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
  </div>
</div>
                    {/* Content */}
                    <div className="space-y-6 order-1 lg:order-2">
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-6">
                                For{" "}
                                <span className="text-yellow-500">Sellers</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 text-justify md:text-justify [text-align-last:left]">
                                We gather detailed information about your property, position it correctly in the market, and connect you with qualified and serious buyers.
                            </p>

                            <div className="space-y-6">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-3">
                                    <div className="w-9 h-9 md:w-10 md:h-10 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                    </div>
                                    <span className="text-justify md:text-justify [text-align-last:left] flex-1">
                                        Our Approach Ensures:
                                    </span>
                                </h3>

                                <div className="space-y-3 md:space-y-4">
                                    {[
                                        "Accurate market positioning and valuation",
                                        "Targeted marketing to reach serious investors",
                                        "Professional presentation to qualified buyers",
                                        "Smooth negotiation process with transparent communication",
                                        "Strong closing price that reflects true market value"
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

                                <p className="text-base md:text-lg text-gray-700 italic mt-4 text-justify md:text-justify [text-align-last:left]">
                                    Our approach ensures a smooth negotiation, transparent communication, and a strong closing price.
                                </p>

                                <button
    onClick={() => handleNavClick('contactpage')}
    className="w-full mt-6 md:mt-8 flex items-center justify-between px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 group"
>
    <div className="flex items-center gap-3 flex-1">
        <Icon path="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
        <span className="text-left whitespace-nowrap">
            Sell Commercial Property
        </span>
    </div>
    <span className="flex-shrink-0 ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Clients Trust Us Section */}
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
                        Why Clients{" "}
                        <span className="text-yellow-500">Trust Us</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2 md:px-0 text-justify md:text-justify [text-align-last:center]">
                        In a market filled with pressure tactics and unclear communication, POSH Consultants stands out by staying true to our values.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                            title: "Clean & Honest",
                            description: "Clean, honest, and straightforward guidance with no hidden agendas"
                        },
                        {
                            icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                            title: "Market Expertise",
                            description: "Strong understanding of market dynamics and investment trends"
                        },
                        {
                            icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                            title: "Clear Analysis",
                            description: "Clear explanation of pros, cons, risks, and opportunities"
                        },
                        {
                            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                            title: "Due Diligence",
                            description: "Deep due-diligence mindset and thorough property verification"
                        },
                        {
                            icon: "M13 10V3L4 14h7v7l9-11h-7z",
                            title: "End-to-End Support",
                            description: "Complete transaction management from start to finish"
                        },
                        {
                            icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                            title: "Client-First",
                            description: "A client-first approach in every decision and recommendation"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500 text-center">
                            <Icon path={item.icon} className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                            <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      {/* Process Management Section */}
<section className="py-16 md:py-20 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-3 md:mb-4">
                Complete{" "}
                <span className="text-yellow-500">Process Management</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 md:px-0 text-justify md:text-justify [text-align-last:center]">
                We assist with documentation, legal checks, agreements, NOCs, inspections, and all the steps involved in commercial or land transactions — giving you a seamless, worry-free experience.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
            {[
                {
                    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                    title: "Documentation",
                    description: "Complete handling of all legal documents and paperwork requirements."
                },
                {
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    title: "Legal Checks",
                    description: "Thorough due diligence and legal verification of all property documents."
                },
                {
                    icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
                    title: "Agreements",
                    description: "Professional drafting and review of sales and purchase agreements."
                },
                {
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    title: "NOCs & Approvals",
                    description: "Managing all necessary no-objection certificates and government approvals."
                }
            ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500 hover:shadow-2xl transition duration-300 hover:shadow-yellow-500/20">
                    <Icon path={item.icon} className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-lg md:text-xl font-bold text-yellow-500 mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
            ))}
        </div>


        {/* <button
                                    onClick={() => handleNavClick('contactpage')}
                                    className="w-full mt-6 md:mt-8 inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 group"
                                >
                                    <span className="text-left flex-1 text-justify md:text-justify [text-align-last:left]">
                                     Discuss Your Commercial Project
                                    </span>
                                </button> */}
    </div>
</section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>
            
            <div className="absolute inset-0 opacity-5 z-0"
                 style={{
                     backgroundImage: `radial-gradient(circle at 20% 80%, #e8be69 0%, transparent 50%),
                                      radial-gradient(circle at 80% 20%, #e8be69 0%, transparent 50%)`
                 }}>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-white mb-6">
                    Honest Advice. Real Transparency.{" "}
                    <span className="text-yellow-500">Genuine Care.</span>
                </h2>
                <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto text-justify md:text-justify [text-align-last:center] px-4 md:px-0">
                    In a market filled with pressure tactics and unclear communication, POSH Consultants stands out by staying true to our values: honesty, clarity, and trust.
                </p>
                
                <div className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border border-yellow-500/20 mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-yellow-500 mb-6">What you can expect from us:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        {[
                            "Fully transparent communication",
                            "No hidden agendas",
                            "Clear comparisons and genuine advice",
                            "Support before, during, and after the transaction",
                            "A client-first approach in every decision",
                            "Solutions for long-term satisfaction, not quick deals"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                                </div>
                                <span className="text-gray-300 text-sm md:text-base">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto text-justify md:text-justify [text-align-last:center] px-4 md:px-0">
                    We don't just help you buy or sell property — we help you make the right decision.
                </p>

                {/* <button 
                    onClick={() => handleNavClick('contactpage')}
                    className="inline-flex items-center justify-center gap-3 px-6 md:px-12 py-3 md:py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-base md:text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 group"
                >
                    <Target className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-justify md:text-justify [text-align-last:left]">
                        Start Your Commercial Real Estate Journey
                    </span>
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button> */}
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold md:font-extrabold text-gray-900 mb-4 md:mb-8">Commercial Real Estate FAQs</h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              {safeCommercialFAQ.map((item, index) => (
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

export default CommercialRealEstatePage;