import React from 'react';
import { Target, Compass, Award, Icon } from '../components/SharedComponents.jsx';

const AboutPage = ({ handleNavClick }) => (
    <>
   {/* About Hero */}
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
                Home / About
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-white mb-6 md:mb-8">
                YOUR TRUSTED PARTNER FOR{" "}
                <span className="text-yellow-500 block md:inline mt-2 md:mt-0">
                    BUSINESS BUYING & SELLING IN UAE
                </span>
            </h1>
            <div className="mt-6 md:mt-8 max-w-4xl mx-auto space-y-4">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    At POSH Consultants, we believe every major investment decision—whether acquiring a business, expanding a portfolio, entering the real estate market, setting up a company, or pursuing long-term residency—should be supported by clarity, expertise, and unwavering trust. Built on professionalism, transparency, and deep UAE market understanding, we serve as a strategic partner for clients who want the confidence of making the right decisions, the right way.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Our core strength lies in guiding investors through the process of buying and selling businesses. We offer structured, discreet, and insight-driven support, helping investors identify the right opportunities, evaluate real value, and execute transactions with accuracy and confidence.
                </p>
            </div>
        </div>
    </div>
</section>

        {/* Mission/Vision/Value Section */}
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Expert Guidance for Every Step of the Way
                        </h2>
                        
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify md:text-left">
                            In the real estate sector, we assist investors across commercial and residential markets, ensuring they access strong opportunities, reliable advice, and professional guidance that protects their interests and maximizes returns.
                        </p>
                        
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify md:text-left">
                            For entrepreneurs, we simplify the UAE business setup process—with a compliant, streamlined, and end-to-end approach that removes confusion and provides clarity. And for individuals seeking long-term residency, we offer guided Golden Visa assistance with precise documentation support and expert direction through the official process.
                        </p>

                        {/* Our Core Services */}
                        <div className="mt-6 md:mt-8">
                            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Core Services:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start space-x-3">
                                    <Icon path="M9 12l2 2 4-4" className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">Business Buying & Selling</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Icon path="M9 12l2 2 4-4" className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Commercial Real Estate</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Icon path="M9 12l2 2 4-4" className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Residential Real Estate</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Icon path="M9 12l2 2 4-4" className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Golden Visa Services</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Icon path="M9 12l2 2 4-4" className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Business Setup & Company Formation</span>
                                </div>
                            </div>
                        </div>

                        {/* 3 Pillars */}
                        <div className="grid grid-cols-3 gap-4 mt-6 md:mt-8">
                            <div className="p-4 rounded-xl border border-gray-200 bg-white hover:border-yellow-500 transition duration-300 shadow-lg text-center">
                                <Target className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                                <p className="font-bold text-xl text-gray-900">01</p>
                                <p className="text-sm text-gray-600">Our Commitment</p>
                            </div>
                            <div className="p-4 rounded-xl border border-gray-200 bg-white hover:border-yellow-500 transition duration-300 shadow-lg text-center">
                                <Compass className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                                <p className="font-bold text-xl text-gray-900">02</p>
                                <p className="text-sm text-gray-600">Client-Centric</p>
                            </div>
                            <div className="p-4 rounded-xl border border-gray-200 bg-white hover:border-yellow-500 transition duration-300 shadow-lg text-center">
                                <Award className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                                <p className="font-bold text-xl text-gray-900">03</p>
                                <p className="text-sm text-gray-600">Ethics & Compliance</p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-500">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1470&q=80"
                            alt="Real estate consultation"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* 3 C's */}
        <section className="py-16 md:py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Our <span className="text-yellow-500">3 C's</span>
                    </h2>
                    <div className="h-1 w-16 bg-yellow-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
                        What sets POSH Consultants apart is our relationship-first approach. We don't offer generic solutions—we listen, understand, and tailor our guidance to each client's goals. Every interaction is handled with care, discretion, and professionalism, ensuring you gain a partner who is genuinely invested in your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500">
                        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-3">Commitment</h3>
                        <p className="text-gray-300 leading-relaxed">
                            We are dedicated to delivering exceptional results in <strong className="text-yellow-400">business buying & selling</strong>, real estate transactions, Golden Visa processing, and <strong className="text-yellow-400">Business setup services</strong> with full transparency and professionalism.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500">
                        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-3">Client-Centric</h3>
                        <p className="text-gray-300 leading-relaxed">
                            We understand your goals and provide personalized solutions—from <strong className="text-yellow-400">business acquisitions</strong> and property investments to visa support—ensuring a smooth and stress-free experience.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500">
                        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-3">Compliance & Ethics</h3>
                        <p className="text-gray-300 leading-relaxed">
                            We strictly follow UAE <strong className="text-yellow-400">business regulations</strong>, real estate laws, Golden Visa policies, and setup procedures, ensuring full trust, legality, and accountability.
                        </p>
                    </div>
                </div>
                
                <div className="text-center mt-12">
                    <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
                        With POSH Consultants, your future decisions are supported by expertise you can trust.
                    </p>
                    <button 
                        onClick={() => handleNavClick('contactpage')} 
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl shadow-lg border-2 border-yellow-500 hover:from-yellow-600 hover:to-yellow-700">
                        <Icon path="M9 5l7 7-7 7" className="w-5 h-5 mr-2" />
                        Contact Our Team
                    </button>
                </div>
            </div>
        </section>
    </>
);

export default AboutPage;