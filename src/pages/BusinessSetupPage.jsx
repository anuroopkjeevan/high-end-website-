import React from 'react';
import { SectionHeader, AccordionItem, Icon } from '../components/SharedComponents.jsx';
import { freeZoneOptions, whyChoosePosh, pricingPackages, companyTypes, expertiseStats, faqData } from '../components/Data.js';

const BusinessSetupPage = ({ handleNavClick }) => {
  const safePricingPackages = pricingPackages || [];
  const safeCompanyTypes = companyTypes || [];
  const safeExpertiseStats = expertiseStats || [];
  const safeFaqData = faqData || [];
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleFAQClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
{/* Business Setup Hero */}
<section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-yellow-500 relative overflow-hidden">
  {/* Gold Pattern Overlay */}
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
        Home / Business Set Up
      </p>
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold md:font-extrabold leading-tight text-white mb-6 md:mb-8 tracking-tight">
        Let's be united:{" "}
        <span className="text-yellow-500 block md:inline mt-2 md:mt-0">
          Setup your business in UAE's Freezones
        </span>
      </h1>
      <div className="mt-6 md:mt-8 max-w-4xl mx-auto space-y-4 md:space-y-6">
        <div className="flex items-start gap-3 bg-gray-800/30 p-4 md:p-6 rounded-xl border-l-4 border-yellow-500">
          <Icon 
            path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 flex-shrink-0 mt-1"
          />
          <p className="text-base md:text-lg text-gray-300 leading-relaxed tracking-normal text-left">
            The UAE has become a global business hub, and free zones play a crucial role in attracting foreign investment. Posh Consultants specializes in guiding businesses through the complexities of freezone establishment.
          </p>
        </div>
        <div className="flex items-start gap-3 bg-gray-800/30 p-4 md:p-6 rounded-xl border-l-4 border-yellow-500">
          <Icon 
            path="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 flex-shrink-0 mt-1"
          />
          <p className="text-base md:text-lg text-gray-300 leading-relaxed tracking-normal text-left">
            Let's explore the key features of setting up in Sharjah, Dubai, and Ras Al Khaimah.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Mainland Formation Section */}
      <section id="mainland-formation" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-500">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Business professionals discussing company formation documents in Dubai office"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-yellow-500/10"></div>
            </div>

            <div className="space-y-6">
              <p className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-semibold">
                <Icon 
                  path="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  className="w-4 h-4 inline mr-2"
                />
                TO KNOW MORE ABOUT US
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-4 md:mb-6">
                Tailored Packages for{" "}
                <span className="text-yellow-500">Mainland Company Formation</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify md:text-justify [text-align-last:left]">
                <Icon 
                  path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  className="w-5 h-5 inline mr-2 text-yellow-500"
                />
                With a diverse economic landscape driven by sectors such as trade, tourism, finance, and technology, the UAE provides ample opportunities for local and international businesses to thrive.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify md:text-justify [text-align-last:left]">
                <Icon 
                  path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  className="w-5 h-5 inline mr-2 text-yellow-500"
                />
                Starting an LLC with a Dubai Mainland license, issued by the Department of Economic Development (DED) of Dubai, provides strategic advantages. These include no limitations on office locations, the ability to trade freely within the UAE and internationally, and access to lucrative government contracts. This makes DED company formation in Dubai Mainland a preferred choice for many businesses.
              </p>
              <button
                onClick={() => handleNavClick('contactpage')}
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 border-2 border-yellow-500 mt-6 md:mt-8"
              >
                <Icon path="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" className="w-5 h-5 mr-2" />
                <span className="text-justify md:text-justify [text-align-last:left]">
                  DISCOVER MORE
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Zone Options */}
      <section className="py-16 md:py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10 md:mb-12">
      <p className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-semibold">
        <Icon 
          path="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          className="w-4 h-4 inline mr-2"
        />
        JURISDICTIONS
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mt-2 mb-3 md:mb-4">
        Major UAE{" "}
        <span className="text-yellow-500">Free Zone Options</span>
      </h2>
      <div className="h-1 w-16 md:w-20 bg-yellow-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {freeZoneOptions.map((zone, index) => (
        <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500 hover:shadow-2xl transition duration-300 hover:shadow-yellow-500/20">
          <div className="flex items-center mb-4 md:mb-6">
            <Icon 
              path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              className="w-6 h-6 md:w-8 md:h-8 mr-3 text-yellow-500 flex-shrink-0"
            />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-snug">{zone.title}</h3>
          </div>
          <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed tracking-normal text-justify md:text-left">
            {zone.description}
          </p>
          <button onClick={() => handleNavClick('contactpage')} className="text-yellow-500 font-semibold hover:text-yellow-400 transition flex items-center text-base md:text-lg tracking-normal">
            <Icon path="M14 5l7 7m0 0l-7 7m7-7H3" className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
            Contact for Details
          </button>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-semibold">
              <Icon 
                path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                className="w-4 h-4 inline mr-2"
              />
              OUR SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mt-2 mb-3 md:mb-4">
              Comprehensive Business{" "}
              <span className="text-yellow-500">Setup Solutions</span>
            </h2>
            <div className="h-1 w-16 md:w-20 bg-yellow-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
              <div className="mb-4 md:mb-6">
                <Icon 
                  path="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">Mainland Company Setup</h3>
              <p className="text-gray-600 text-sm md:text-base text-justify md:text-justify [text-align-last:left]">
                Complete mainland business formation with DED licensing for local and international trade.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
              <div className="mb-4 md:mb-6">
                <Icon 
                  path="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">Free Zone Setup</h3>
              <p className="text-gray-600 text-sm md:text-base text-justify md:text-justify [text-align-last:left]">
                Establish your business in Dubai's premier free zones with 100% foreign ownership.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
              <div className="mb-4 md:mb-6">
                <Icon 
                  path="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">Offshore Company</h3>
              <p className="text-gray-600 text-sm md:text-base text-justify md:text-justify [text-align-last:left]">
                International business setup with tax optimization and asset protection benefits.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
              <div className="mb-4 md:mb-6">
                <Icon 
                  path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">License Processing</h3>
              <p className="text-gray-600 text-sm md:text-base text-justify md:text-justify [text-align-last:left]">
                Professional, commercial, and industrial license applications and renewals.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Expertise Stats Section */}
<section id="expertise-stats" className="py-16 md:py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <p className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-semibold mb-2">
        <Icon 
          path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          className="w-4 h-4 inline mr-2"
        />
        BUSINESS SETUP IN UAE
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Get Seamless Business Setup in{" "}
        <span className="text-yellow-500">Dubai</span>
      </h2>
      <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full mb-4"></div>
      <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
        <Icon 
          path="M13 10V3L4 14h7v7l9-11h-7z"
          className="w-5 h-5 inline mr-2 text-yellow-500"
        />
        Get seamless business setup in Dubai with tailored guidance. We make company formation in UAE straightforward and efficient.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
      {/* Left Column - Text Content */}
      <div className="lg:text-left text-center lg:text-start">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Business Setup Consultants in{" "}
          <span className="text-yellow-500">Dubai</span>
        </h3>
        <p className="text-base md:text-lg text-gray-300 mb-4">
          <Icon 
            path="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            className="w-5 h-5 inline mr-2 text-yellow-500"
          />
          Posh Consultants is committed to empowering aspiring entrepreneurs with effortless business setup in Dubai, offering personalized guidance to meet their unique requirements.
        </p>
        <p className="text-base md:text-lg text-gray-300 mb-6">
          <Icon 
            path="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            className="w-5 h-5 inline mr-2 text-yellow-500"
          />
          We adopt innovative strategies to simplify and transform the UAE company formation process, leveraging advanced tools and technologies to elevate the client experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-center lg:justify-start">
          <div className="flex items-center text-white justify-center lg:justify-start">
            <Icon 
              path="M5 13l4 4L19 7"
              className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-500 flex-shrink-0"
            />
            <span className="text-sm md:text-base text-left">100% Success Rate</span>
          </div>
          <div className="flex items-center text-white justify-center lg:justify-start">
            <Icon 
              path="M5 13l4 4L19 7"
              className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-500 flex-shrink-0"
            />
            <span className="text-sm md:text-base text-left">Fast Processing</span>
          </div>
          <div className="flex items-center text-white justify-center lg:justify-start">
            <Icon 
              path="M5 13l4 4L19 7"
              className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-500 flex-shrink-0"
            />
            <span className="text-sm md:text-base text-left">Expert Guidance</span>
          </div>
          <div className="flex items-center text-white justify-center lg:justify-start">
            <Icon 
              path="M5 13l4 4L19 7"
              className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-500 flex-shrink-0"
            />
            <span className="text-sm md:text-base text-left">Post-setup Support</span>
          </div>
        </div>
      </div>
      
      {/* Right Column - Stats Progress Bars */}
      <div className="space-y-4 lg:text-left text-center">
        {safeExpertiseStats.map((title, index) => (
          <div key={index} className="lg:text-left">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-base md:text-lg font-semibold text-white flex items-center justify-center lg:justify-start">
                <Icon 
                  path="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-500 inline flex-shrink-0"
                />
                <span className="text-left">{title}</span>
              </h4>
              <span className="text-base md:text-lg font-bold text-yellow-500 ml-2">100%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden shadow-inner">
              <div className="h-2 bg-yellow-500 rounded-full w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section id="pricing" className="py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 md:mb-12">
      <p className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-semibold mb-2">
        <Icon 
          path="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          className="w-4 h-4 inline mr-2"
        />
        TRANSPARENT PRICING
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Choose Your Business{" "}
        <span className="text-yellow-500">Setup Package</span>
      </h2>
      <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
      {safePricingPackages.map((pkg, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition duration-300 hover:border-yellow-500 hover:shadow-yellow-500/20">
          <div className="p-6 md:p-8 h-full flex flex-col">
            <div className="flex items-center mb-4">
              <Icon 
                path={index === 0 ? "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" :
                      index === 1 ? "M7 20l4-16m2 16l4-16M6 9h14M4 15h14" :
                      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}
                className="w-5 h-5 md:w-6 md:h-6 mr-3 text-yellow-500 flex-shrink-0"
              />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{pkg.title}</h3>
            </div>
            <div className="mb-4">
              <span className="text-3xl md:text-4xl font-extrabold text-yellow-500">{pkg.price}</span>
              {pkg.originalPrice && (
                <span className="text-base md:text-lg text-gray-500 line-through ml-2">AED {pkg.originalPrice}</span>
              )}
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              {pkg.features && pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Icon 
                    path="M5 13l4 4L19 7"
                    className="w-4 h-4 md:w-5 md:h-5 mt-0.5 mr-3 text-yellow-500 flex-shrink-0"
                  />
                  <span className="text-gray-700 text-sm md:text-base flex-1">{feature}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => handleNavClick('contactpage')} className="w-full py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition duration-300 border-2 border-yellow-500 flex items-center justify-center mt-auto group">
  <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full mr-3 group-hover:bg-white/30 transition">
    <Icon path="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" className="w-5 h-5 md:w-6 md:h-6" />
  </div>
  <span className="text-lg md:text-xl">Get Started</span>
</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Company Types Section */}
<section id="company-types" className="py-16 md:py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10 md:mb-12">
      <p className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-semibold">
        <Icon 
          path="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          className="w-4 h-4 inline mr-2"
        />
        BUSINESS STRUCTURES
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-white mt-2 mb-3 md:mb-4">
        Types of Companies{" "}
        <span className="text-yellow-500">We Form</span>
      </h2>
      <div className="h-1 w-16 md:w-20 bg-yellow-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {/* <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
        <div className="mb-4 md:mb-6">
          <Icon 
            path="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">Mainland Companies</h3>
        <p className="text-gray-300 text-base md:text-lg text-justify md:text-justify [text-align-last:left]">
          Complete mainland business setup with DED licensing for local and international trade operations.
        </p>
      </div>

      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
        <div className="mb-4 md:mb-6">
          <Icon 
            path="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">Free Zone Companies</h3>
        <p className="text-gray-300 text-base md:text-lg text-justify md:text-justify [text-align-last:left]">
          100% foreign ownership with tax benefits in Dubai's premier free zone locations.
        </p>
      </div>

      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
        <div className="mb-4 md:mb-6">
          <Icon 
            path="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">Offshore Companies</h3>
        <p className="text-gray-300 text-base md:text-lg text-justify md:text-justify [text-align-last:left]">
          International business setup with asset protection and tax optimization benefits.
        </p>
      </div> */}

      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
        <div className="mb-4 md:mb-6">
          <Icon 
            path="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">E-Commerce</h3>
        <p className="text-gray-300 text-base md:text-lg text-justify md:text-justify [text-align-last:left]">
          We specialize in setting up e-commerce companies with comprehensive support and guidance for online retail businesses.
        </p>
      </div>

      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
        <div className="mb-4 md:mb-6">
          <Icon 
            path="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">IT Services</h3>
        <p className="text-gray-300 text-base md:text-lg text-justify md:text-justify [text-align-last:left]">
          We specialize in setting up IT services companies with comprehensive support and guidance for technology solutions.
        </p>
      </div>

      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
        <div className="mb-4 md:mb-6">
          <Icon 
            path="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">General Trading</h3>
        <p className="text-gray-300 text-base md:text-lg text-justify md:text-justify [text-align-last:left]">
          We specialize in setting up general trading companies with comprehensive support and guidance for import/export businesses.
        </p>
      </div>

      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
        <div className="mb-4 md:mb-6">
          <Icon 
            path="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">Accounting & Auditing</h3>
        <p className="text-gray-300 text-base md:text-lg text-justify md:text-justify [text-align-last:left]">
          We specialize in setting up accounting & auditing firms with comprehensive support and guidance for financial services.
        </p>
      </div>

      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
        <div className="mb-4 md:mb-6">
          <Icon 
            path="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">Professional Licenses</h3>
        <p className="text-gray-300 text-base md:text-lg text-justify md:text-justify [text-align-last:left]">
          Professional service licenses for consultants, freelancers, and service-based businesses.
        </p>
      </div>

      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
        <div className="mb-4 md:mb-6">
          <Icon 
            path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">Commercial Licenses</h3>
        <p className="text-gray-300 text-base md:text-lg text-justify md:text-justify [text-align-last:left]">
          Trading and commercial business licenses for retail, wholesale, and distribution companies.
        </p>
      </div>

      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
        <div className="mb-4 md:mb-6">
          <Icon 
            path="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            className="w-10 h-10 md:w-12 md:h-12 text-yellow-500"
          />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">Industrial Licenses</h3>
        <p className="text-gray-300 text-base md:text-lg text-justify md:text-justify [text-align-last:left]">
          Manufacturing and industrial business licenses for production and processing facilities.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Business Zones Section */}
<section id="business-zones" className="py-16 md:py-24 bg-gray-950">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-12 md:mb-20">
      <div className="inline-flex items-center justify-center gap-2 mb-4">
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <p className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-semibold">
          CUSTOMIZED SOLUTIONS
        </p>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
        Tailored Business Setup Services for{" "}
        <span className="text-yellow-500 block md:inline">Entrepreneurs and Enterprises</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
        Your Trusted Business Partner in the UAE, Unleashing Boundless Opportunities for Growth & Innovation
      </p>
      <div className="h-1 w-20 md:w-24 bg-yellow-500 mx-auto mt-8 rounded-full"></div>
    </div>
    
    {/* Cards Grid - Optimized for all devices */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      
      {/* UAE Mainland Card */}
      <div className="group relative bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-800 hover:border-yellow-500 transition-all duration-500 hover:shadow-yellow-500/20 overflow-hidden flex flex-col h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 flex-1 flex flex-col">
          
          {/* Icon Header */}
          <div className="mb-6 md:mb-8">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
              <Icon 
                path="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                className="w-8 h-8 md:w-10 md:h-10 text-yellow-500"
              />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 text-center md:text-left">UAE Mainland</h3>
            <div className="w-12 h-1 bg-yellow-500 rounded-full mx-auto md:mx-0"></div>
          </div>
          
          {/* Features List */}
          <ul className="space-y-3 md:space-y-4 flex-1">
            {[
              { text: 'Local Market Access', desc: 'Direct access to UAE local market' },
              { text: 'DED Licensed', desc: 'Department of Economic Development licensed' },
              { text: 'No Trade Restrictions', desc: 'Freedom to trade across UAE' },
              { text: 'Branch Offices', desc: 'Ability to open multiple branches' },
              { text: 'Govt. Tenders', desc: 'Eligible for government contracts' }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start group/item">
                <div className="flex-shrink-0 mt-1">
                  <Icon 
                    path="M5 13l4 4L19 7"
                    className="w-5 h-5 text-yellow-500 mr-3"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-base md:text-lg font-medium text-white block">{item.text}</span>
                  <span className="text-sm text-gray-400 mt-1 block">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <button className="mt-6 md:mt-8 bg-yellow-500 text-black font-bold py-3 md:py-4 px-6 rounded-xl hover:bg-yellow-600 transition-all duration-300 transform hover:scale-[1.02] w-full text-lg">
            Learn More
          </button>
        </div>
      </div>
      
      {/* UAE Free Zone Card */}
      <div className="group relative bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-800 hover:border-yellow-500 transition-all duration-500 hover:shadow-yellow-500/20 overflow-hidden flex flex-col h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 flex-1 flex flex-col">
          
          {/* Icon Header */}
          <div className="mb-6 md:mb-8">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
              <Icon 
                path="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                className="w-8 h-8 md:w-10 md:h-10 text-yellow-500"
              />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 text-center md:text-left">UAE Free Zone</h3>
            <div className="w-12 h-1 bg-yellow-500 rounded-full mx-auto md:mx-0"></div>
          </div>
          
          {/* Features List */}
          <ul className="space-y-3 md:space-y-4 flex-1">
            {[
              { text: '100% Foreign Ownership', desc: 'Complete business ownership rights' },
              { text: 'Tax Exemptions', desc: 'Zero corporate & personal taxes' },
              { text: 'Custom Duty Benefits', desc: 'Duty-free import/export privileges' },
              { text: 'Easy Repatriation', desc: 'Full profit repatriation allowed' },
              { text: 'Modern Infrastructure', desc: 'World-class facilities & services' }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start group/item">
                <div className="flex-shrink-0 mt-1">
                  <Icon 
                    path="M5 13l4 4L19 7"
                    className="w-5 h-5 text-yellow-500 mr-3"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-base md:text-lg font-medium text-white block">{item.text}</span>
                  <span className="text-sm text-gray-400 mt-1 block">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <button className="mt-6 md:mt-8 bg-yellow-500 text-black font-bold py-3 md:py-4 px-6 rounded-xl hover:bg-yellow-600 transition-all duration-300 transform hover:scale-[1.02] w-full text-lg">
            Learn More
          </button>
        </div>
      </div>
      
      {/* UAE Offshore Card */}
      <div className="group relative bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-800 hover:border-yellow-500 transition-all duration-500 hover:shadow-yellow-500/20 overflow-hidden flex flex-col h-full lg:col-span-1 md:col-span-2 lg:col-span-1">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 flex-1 flex flex-col">
          
          {/* Icon Header */}
          <div className="mb-6 md:mb-8">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
              <Icon 
                path="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                className="w-8 h-8 md:w-10 md:h-10 text-yellow-500"
              />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 text-center md:text-left">UAE Offshore</h3>
            <div className="w-12 h-1 bg-yellow-500 rounded-full mx-auto md:mx-0"></div>
          </div>
          
          {/* Features List */}
          <ul className="space-y-3 md:space-y-4 flex-1">
            {[
              { text: 'Asset Protection', desc: 'Secure international asset holding' },
              { text: 'Tax Optimization', desc: 'Minimize global tax liabilities' },
              { text: 'Privacy & Confidentiality', desc: 'Enhanced business privacy' },
              { text: 'No Physical Office', desc: 'Virtual office setup allowed' },
              { text: 'International Operations', desc: 'Global business expansion' }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start group/item">
                <div className="flex-shrink-0 mt-1">
                  <Icon 
                    path="M5 13l4 4L19 7"
                    className="w-5 h-5 text-yellow-500 mr-3"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-base md:text-lg font-medium text-white block">{item.text}</span>
                  <span className="text-sm text-gray-400 mt-1 block">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <button className="mt-6 md:mt-8 bg-yellow-500 text-black font-bold py-3 md:py-4 px-6 rounded-xl hover:bg-yellow-600 transition-all duration-300 transform hover:scale-[1.02] w-full text-lg">
            Learn More
          </button>
        </div>
      </div>
      
    </div>
    
    {/* Footer Section
    <div className="text-center mt-16 md:mt-24">
      <div className="bg-gradient-to-r from-transparent via-gray-800 to-transparent h-px w-full max-w-3xl mx-auto mb-10"></div>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed px-4">
        Select the ideal business setup solution that perfectly matches your entrepreneurial vision, financial considerations, and operational needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-yellow-500 text-black font-bold py-3 md:py-4 px-8 rounded-xl hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 min-w-[200px] text-lg">
          Compare All Options
        </button>
        <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold py-3 md:py-4 px-8 rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 min-w-[200px] text-lg">
          Get Free Consultation
        </button>
      </div> */}
      {/* <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-yellow-500">15+</div>
          <div className="text-sm text-gray-400">Years Experience</div>
        </div>
        <div className="h-8 w-px bg-gray-700"></div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-yellow-500">1000+</div>
          <div className="text-sm text-gray-400">Companies Formed</div>
        </div>
        <div className="h-8 w-px bg-gray-700"></div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-yellow-500">24/7</div>
          <div className="text-sm text-gray-400">Client Support</div>
        </div>
      </div> */}
    </div>
  {/* </div> */}
</section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-3 md:mb-4">
              Frequently Asked{" "}
              <span className="text-yellow-500">Questions</span>
            </h2>
            <div className="h-1 w-16 md:w-20 bg-yellow-500 mx-auto mt-3 md:mt-4 rounded-full mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg text-gray-600 text-justify md:text-justify [text-align-last:center]">
              <Icon 
                path="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                className="w-5 h-5 inline mr-2 text-yellow-500"
              />
              Find answers to common questions about business setup in the UAE
            </p>
          </div>
          <div className="space-y-4 md:space-y-6">
            {safeFaqData && safeFaqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                question={item.q} 
                answer={item.a} 
                isOpen={activeIndex === index} 
                onClick={() => handleFAQClick(index)} 
              />
            ))}
          </div>
          <div className="text-center mt-10 md:mt-12">
            <button onClick={() => handleNavClick('contactpage')} className="text-yellow-500 font-bold hover:text-yellow-400 transition text-base md:text-lg flex items-center justify-center mx-auto">
              <Icon path="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
              Check More Questions Now
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-white mb-6 md:mb-8 leading-tight">
            <Icon 
              path="M13 10V3L4 14h7v7l9-11h-7z"
              className="w-6 h-6 md:w-8 md:h-8 inline mr-3 md:mr-4 text-yellow-500"
            />
            Ready to Start Your Business in UAE?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto text-justify md:text-justify [text-align-last:center] px-4 md:px-0">
            <Icon 
              path="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              className="w-5 h-5 inline mr-2 text-yellow-500"
            />
            Let Posh Consultants guide you through every step of the business setup process. From company formation to licensing and beyond, we're here to make your entrepreneurial journey seamless.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button 
              onClick={() => handleNavClick('contactpage')}
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 border-2 border-yellow-500"
            >
              <Icon 
                path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <span className="text-base md:text-lg">Schedule Consultation</span>
            </button>
            <button 
              onClick={() => handleNavClick('contactpage')}
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 border-2 border-yellow-500 text-white font-bold rounded-xl shadow-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
            >
              <Icon 
                path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <span className="text-base md:text-lg">Call Us Now</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessSetupPage;