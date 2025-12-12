import React, { useState } from 'react';
import { Shield, Users,Handshake, Target, Award, Star, CheckCircle, Lock, UserCheck, EyeOff,Compass, AccordionItem } from '../components/SharedComponents.jsx';
import { businessBuySellFAQ } from '../components/Data.js';

const BusinessBuySellPage = ({ handleNavClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFAQClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const safeBusinessFAQ = businessBuySellFAQ || [];

  return (
    <>
{/* Hero Section */}
<section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-yellow-500 relative overflow-hidden">
    {/* Yellow Pattern Overlay */}
    <div className="absolute inset-0 opacity-5 z-0" 
         style={{
             backgroundImage: `radial-gradient(circle at 20% 80%, #e8be69 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #e8be69 0%, transparent 50%),
                              radial-gradient(circle at 40% 40%, #e8be69 0%, transparent 50%)`
         }}>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
            {/* Breadcrumb */}
            <p className="text-yellow-500 text-sm md:text-lg font-medium mb-6 md:mb-4 tracking-normal">
                Home / Business Buy & Sell
            </p>
            
            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold md:font-extrabold leading-tight text-white mb-6 md:mb-8 tracking-tight">
                BUSINESS{" "}
                <span className="text-yellow-500 block md:inline mt-2 md:mt-0">
                    BUYING & SELLING SERVICES
                </span>
                <span className="block mt-2 md:mt-0">IN THE UAE</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto tracking-normal leading-relaxed">
                Transparent, Professional & Fully Confidential
            </p>
            
            {/* Description */}
            <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed tracking-normal text-justify">
                    At POSH Consultants, we help clients buy and sell businesses across the UAE with complete clarity, trust, and honesty. Whether you are looking to acquire a business that fits your goals or sell your existing company, we manage every stage of the process with precision and care.
                </p>
            </div>
        </div>
    </div>
</section>

{/* For Buyers Section */}

<section className="py-16 md:py-20 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-10 md:mb-12">
      {/* FIXED: Using proper search icon for business buyers */}
      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-5 md:mb-6 shadow-lg">
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-3 md:mb-4 tracking-tight">
        For Business <span className="text-yellow-600 tracking-tight">Buyers</span>
      </h2>
      <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 md:px-0 leading-relaxed tracking-normal">
        Finding the perfect business that aligns with your vision and goals
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Content - Better Text Alignment */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
          {/* Description with proper alignment */}
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 tracking-normal text-justify md:text-left">
            We take time to understand your requirements your sector preferences, budget, expectations, experience, and long-term goals. Based on that, we find businesses that <span className="font-semibold text-yellow-700">truly match</span> what you're looking for.
          </p>

          <div className="space-y-6">
            {/* Services Header with proper icon */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="tracking-tight text-left flex-1">
                Our Buyer Services
              </span>
            </h3>

            {/* Services Grid - Using proper SVG icons instead of component references */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {[
                // Using SVG paths directly
                { 
                  icon: "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z", 
                  text: "Understand your needs and expectations" 
                },
                { 
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", 
                  text: "Present suitable business opportunities across the UAE" 
                },
                { 
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", 
                  text: "Share detailed business information & financials" 
                },
                { 
                  icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 
                  text: "Guide negotiations and assist with deal finalization" 
                },
                { 
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", 
                  text: "Manage all legal and documentation processes" 
                },
                { 
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", 
                  text: "Provide post-handover assistance if required" 
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors duration-200">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700 leading-tight tracking-normal text-left flex-1">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button with proper alignment */}
            <button 
  onClick={() => handleNavClick('contactpage')}
  className="w-full mt-6 md:mt-8 inline-flex items-center justify-center gap-3 
             px-6 md:px-8 py-3 md:py-4 
             bg-gradient-to-r from-yellow-500 to-yellow-600 
             text-white text-base md:text-lg font-bold 
             rounded-xl shadow-lg hover:shadow-xl 
             hover:from-yellow-600 hover:to-yellow-700 
             transition-all duration-300 group tracking-normal"
>
  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>

  <span className="text-left tracking-normal">
    Find Your Perfect Business Match
  </span>
</button>

          </div>
        </div>
      </div>

      {/* Image - Proper sizing */}
      <div className="relative">
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="Business buyer analyzing opportunities"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* For Sellers Section */}
{/* For Sellers Section */}
<section className="py-16 md:py-20 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* Section Header */}
    <div className="text-center mb-10 md:mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-900 to-black rounded-2xl mb-5 md:mb-6 shadow-lg">
        <Handshake className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-3 md:mb-4 tracking-tight">
        For Business <span className="text-gray-900 tracking-tight">Sellers</span>
      </h2>
      <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 md:px-0 leading-relaxed tracking-normal">
        Maximizing your business value and connecting with qualified buyers
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

      {/* Image */}
      <div className="relative order-2 lg:order-1">
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="Business seller presenting company value"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 order-1 lg:order-2">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">

          {/* Description */}
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 tracking-normal text-justify md:text-left">
            We collect every important detail about your business financials, operations, assets, liabilities, contracts, performance, and more and present it professionally to the <span className="font-semibold text-gray-900">right buyers or investors</span>.
          </p>

          <div className="space-y-6">

            {/* Services Header */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="tracking-tight text-left flex-1">
                Our Seller Services
              </span>
            </h3>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {[
                { icon: Star, text: "Business valuation and pricing strategy" },
                { icon: Award, text: "Financial documentation preparation" },
                { icon: Compass, text: "Marketing to qualified buyer network" },
                { icon: Handshake, text: "Negotiation support and deal structuring" },
                { icon: Shield, text: "Legal documentation and transfer processes" },
                { icon: Star, text: "Post-sale transition assistance" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
                  </div>
                  <span className="text-sm md:text-base text-gray-700 leading-tight tracking-normal text-left flex-1">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA BUTTON WITH CONSISTENT ICON */}
            <div className="flex justify-center">
            <button 
  onClick={() => handleNavClick('contactpage')}
  className="flex items-center justify-center gap-3 
             px-6 md:px-8 py-3 md:py-4 
             bg-gradient-to-r from-gray-900 to-black 
             text-white text-base md:text-lg font-bold 
             rounded-xl shadow-lg 
             hover:shadow-xl hover:from-black hover:to-gray-800 
             transition-all duration-300"
>
  {/* Growth Icon using same pattern as list items */}
  <svg 
    className="w-5 h-5 md:w-6 md:h-6" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>

  <span className="tracking-normal whitespace-nowrap">
    Maximize Your Business Value
  </span>
</button>
</div>


          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        {/* Confidentiality Section */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>
            
            {/* Yellow Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 z-0"
                 style={{
                     backgroundImage: `radial-gradient(circle at 30% 70%, #e8be69 0%, transparent 40%),
                                      radial-gradient(circle at 70% 30%, #e8be69 0%, transparent 40%)`
                 }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500 rounded-full mb-8">
                        <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
                        Confidentiality at <span className="text-yellow-500">Every Step</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                        Business transactions require privacy and discretion.
                    </p>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                        Your trust is our priority, and we operate with the highest level of privacy throughout the process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                    {[
                        {
                            icon: UserCheck,
                            title: "Verified Buyers Only",
                            description: "Your business details are shared only with verified, serious buyers"
                        },
                        {
                            icon: Shield,
                            title: "Identity Protection",
                            description: "Identity and sensitive information remain protected"
                        },
                        {
                            icon: Lock,
                            title: "Secure Data Handling",
                            description: "Internal data, financials, and key documents are handled securely"
                        },
                        {
                            icon: EyeOff,
                            title: "Private Negotiations",
                            description: "Discussions and negotiations are kept completely confidential"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-800 p-10 rounded-2xl shadow-xl border-t-4 border-yellow-500 hover:shadow-2xl transition duration-300 hover:shadow-yellow-500/20 text-center group hover:transform hover:translate-y-[-5px]">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                                <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

               {/* Why Choose POSH Consultants */}
<div className="bg-black p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border-2 border-yellow-500">
    <div className="text-center mb-8 md:mb-12">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 md:mb-6">
            Why Clients Choose <span className="text-yellow-500">POSH Consultants</span>
        </h3>
        <p className="text-base md:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto px-2 md:px-0">
            We stand out through our commitment to excellence and client satisfaction
        </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {[
            "Transparent, honest, and trust-based approach",
            "Balanced support to both buyers and sellers",
            "Deep understanding of business valuations and opportunities",
            "Complete end-to-end transaction support",
            "Strict confidentiality and professional handling",
            "Clear communication with no hidden steps"
        ].map((item, index) => (
            <div key={index} className="flex items-start bg-gray-800/50 p-4 md:p-5 rounded-lg hover:bg-gray-800 transition duration-300 group">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mt-1 mr-3 md:mr-4 flex-shrink-0 group-hover:scale-110 transition duration-300" />
                <span className="text-white text-sm md:text-base lg:text-lg group-hover:text-yellow-100 transition duration-300">{item}</span>
            </div>
        ))}
    </div>
</div>

            </div>
        </section>

  {/* Beyond the Deal Section */}
<section className="py-16 md:py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 md:space-y-10">
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-6 md:mb-8">
                        Beyond the <span className="text-yellow-500">Deal</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-yellow-500 font-bold mb-4 md:mb-6">
                        Support That Continues Even After the Handover
                    </p>
                    <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed text-justify md:text-justify [text-align-last:left]">
                        Our relationship doesn't end once the papers are signed. Whether it's operational guidance, transition planning, or coordination with government authorities, we make sure the post-handover phase is just as smooth.
                    </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {[
                        {
                            title: "Operational Guidance",
                            description: "Expert advice to ensure smooth business operations post-acquisition"
                        },
                        {
                            title: "Transition Planning",
                            description: "Strategic planning for seamless ownership and management transitions"
                        },
                        {
                            title: "Government Coordination",
                            description: "Assistance with regulatory compliance and government authority coordination"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-yellow-50 p-6 md:p-8 rounded-xl border-l-4 border-yellow-500 hover:shadow-lg transition duration-300">
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                                {item.title}
                            </h4>
                            <p className="text-gray-700 text-sm md:text-base text-justify md:text-justify [text-align-last:left]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA Section */}
<div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 md:mb-8">
        <Handshake className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
    </div>
    
    <h3 className="text-2xl md:text-3xl font-bold md:font-extrabold text-white mb-4 md:mb-6">
        Let's Move Your Business Journey Forward
    </h3>
    
    <p className="text-yellow-100 text-base md:text-lg mb-6 md:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-2 md:px-0">
        Whether you're looking to buy a business, sell your company, or simply explore options, POSH Consultants is here to make the process seamless, transparent, and reliable from start to finish.
    </p>
    
    <div className="space-y-4 md:space-y-5 max-w-lg mx-auto">
        <button 
            onClick={() => handleNavClick('contactpage')}
            className="w-full flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-yellow-600 text-base md:text-lg font-bold rounded-xl shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-[1.02] border-2 border-white"
        >
            {/* <Target className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> */}
            <span className="text-center whitespace-nowrap">
                Start Your Business Transaction
            </span>
        </button>
{/*         
        <button 
            onClick={() => handleNavClick('contactpage')}
            className="w-full flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-transparent text-white text-base md:text-lg font-bold rounded-xl shadow-lg hover:bg-white/10 transition duration-300 transform hover:scale-[1.02] border-2 border-white"
        >
            <Award className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            <span className="text-center whitespace-nowrap">
                Get Free Business Valuation
            </span>
        </button> */}
    </div>
</div>
        </div>
    </div>
</section>
        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
    Business Buy & Sell FAQs
  </h2>
</div>
            <div className="space-y-6">
              {safeBusinessFAQ.map((item, index) => (
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

export default BusinessBuySellPage;