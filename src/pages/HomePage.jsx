import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader, ExpertiseSection, AccordionItem } from '../components/SharedComponents.jsx';
import { coreServices, expertiseStats, pricingPackages, companyTypes, faqData, homePageFAQ } from '../components/Data.js';

// === Premium Animation Components ===
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Always update visibility on intersection change
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '50px 0px 50px 0px' // Increased margin for smoother transitions
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 800, 
  yOffset = 30, 
  className = "",
  direction = "up",
  threshold = 0.1,
  triggerOnce = false
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible, hasBeenVisible]);

  const shouldAnimate = triggerOnce ? hasBeenVisible : isVisible;

  const getTransform = () => {
    const baseTransform = shouldAnimate ? 'translateY(0) translateX(0)' : '';
    if (!shouldAnimate) {
      switch (direction) {
        case 'up': return `translateY(${yOffset}px)`;
        case 'down': return `translateY(-${yOffset}px)`;
        case 'left': return `translateX(${yOffset}px)`;
        case 'right': return `translateX(-${yOffset}px)`;
        case 'scale': return 'scale(0.9)';
        default: return `translateY(${yOffset}px)`;
      }
    }
    return baseTransform;
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transform: getTransform(),
        opacity: shouldAnimate ? 1 : 0,
        transitionDelay: shouldAnimate ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`,
        transitionProperty: 'transform, opacity',
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {children}
    </div>
  );
};

const StaggerChildren = ({ 
  children, 
  staggerDelay = 100, 
  className = "",
  direction = "up",
  threshold = 0.1
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          delay: index * staggerDelay,
          direction,
          threshold
        })
      )}
    </div>
  );
};

const ParallaxSection = ({ children, speed = 0.5, className = "" }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current;
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate parallax effect
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`
      }}
    >
      {children}
    </div>
  );
};


const FloatingElement = ({ children, className = "", intensity = 1 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * intensity;
      const y = (e.clientY / window.innerHeight - 0.5) * intensity;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return (
    <div
      className={className}
      style={{
        transform: `translate(${position.x * 20}px, ${position.y * 20}px)`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
};

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
    </div>
  );
};

const MagneticButton = ({ children, className = "", onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Font Awesome Icons with UNIFORM SIZES
const BusinessSetupIcon = ({ className = 'w-8 h-8 text-3xl', ...props }) => (
  <i className={`fas fa-building text-yellow-500 ${className}`} {...props} />
);

const CorporateServicesIcon = ({ className = 'w-8 h-8 text-3xl', ...props }) => (
  <i className={`fas fa-users-gear text-yellow-500 ${className}`} {...props} />
);

const AdvisoryIcon = ({ className = 'w-8 h-8 text-3xl', ...props }) => (
  <i className={`fas fa-chart-line text-yellow-500 ${className}`} {...props} />
);

const GoldenVisaIcon = ({ className = 'w-8 h-8 text-3xl', ...props }) => (
  <i className={`fas fa-passport text-yellow-500 ${className}`} {...props} />
);

const PackageIcon = ({ className = 'w-12 h-12 text-4xl', ...props }) => (
  <i className={`fas fa-box-open text-yellow-500 ${className}`} {...props} />
);

const CompanyTypesIcon = ({ className = 'w-12 h-12 text-4xl', ...props }) => (
  <i className={`fas fa-layer-group text-yellow-500 ${className}`} {...props} />
);

const FAQIcon = ({ className = 'w-20 h-20 text-5xl', ...props }) => (
  <i className={`fas fa-question-circle text-yellow-500 ${className}`} {...props} />
);

const ServicesHeaderIcon = ({ className = 'w-16 h-16 text-5xl', ...props }) => (
  <i className={`fas fa-briefcase text-yellow-500 ${className}`} {...props} />
);

const BusinessTradingIcon = ({ className = 'w-16 h-16 text-5xl', ...props }) => (
  <i className={`fas fa-handshake text-yellow-500 ${className}`} {...props} />
);

const CheckGlyph = ({ className = 'w-5 h-5', ...props }) => (
  <i className={`fas fa-check text-yellow-500 ${className}`} {...props} />
);

// Map service titles to the appropriate icon components
const serviceTitleToIconMap = {
    'Business Setup in UAE': BusinessSetupIcon,
    'Corporate Services': CorporateServicesIcon,
    'Advisory and Consulting': AdvisoryIcon,
    'UAE Golden Visa': GoldenVisaIcon,
};

const getServiceIcon = (title) => serviceTitleToIconMap[title] || BusinessSetupIcon;
const serviceIcons = (coreServices || []).map(svc => ({
    ...svc,
    IconComponent: getServiceIcon(svc.title)
}));

const HomePage = ({ handleNavClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const safeCoreServices = serviceIcons || [];
  const safeFaqData = faqData || [];
  const safeHomePageFAQ = homePageFAQ || [];

  const handleFAQClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen bg-gray-900 border-b border-yellow-500 relative overflow-hidden flex items-center overflow-x-hidden">
        <GradientBackground />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/4 right-20 w-6 h-6 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/4 w-5 h-5 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Background Image */}
        <div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed z-0"

          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 w-full">
          <ScrollReveal direction="down" threshold={0.3}>
            <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4 text-sm sm:text-base">
              <i className="fas fa-star text-yellow-500 text-lg mr-2"></i>
              Elevating Business Excellence in the UAE
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200} threshold={0.3}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white">
              Seamless <span className="text-yellow-500">Business Solutions</span> Crafted for Visionaries
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={400} threshold={0.3}>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
              <i className="fas fa-shield-alt text-yellow-500 mr-2 text-xl"></i>
              From business setup to buying & selling - Experience world-class business services with Posh Consultants
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600} threshold={0.3}>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto sm:max-w-none px-4">
              <MagneticButton 
                onClick={() => handleNavClick('businesssetup')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-yellow-500 text-white text-sm sm:text-base font-bold rounded-xl shadow-2xl hover:bg-yellow-400 transition-colors duration-300 border-2 border-yellow-500 hover:shadow-yellow-500/50 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-building text-base"></i>
                  <span className="text-xs sm:text-sm md:text-base">Real Estate</span>
                </span>
                <div className="absolute inset-0 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </MagneticButton>
              
              <MagneticButton 
                onClick={() => handleNavClick('contactpage')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-transparent text-white text-sm sm:text-base font-bold rounded-xl shadow-2xl hover:bg-yellow-500 hover:text-white transition-colors duration-300 border-2 border-yellow-500 hover:shadow-yellow-500/50 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-handshake text-base"></i>
                  <span className="text-xs sm:text-sm md:text-base">Buy/Sell Business</span>
                </span>
                <div className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer group"
          onClick={() => smoothScroll('business-trading')}
        >
          <div className="flex flex-col items-center text-yellow-500">
            <span className="text-xs sm:text-sm mb-2 group-hover:text-yellow-400 transition-colors">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center group-hover:border-yellow-400 transition-colors">
              <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-bounce group-hover:bg-yellow-400 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Business Trading Section */}
      <section id="business-trading" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden overflow-x-hidden">
        <GradientBackground />
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="down" threshold={0.2}>
            <div className="text-center mb-8 sm:mb-12">
              <FloatingElement intensity={0.5}>
        <div className="flex justify-center mb-3 sm:mb-4">
  {/* <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500 rounded-full">

  </div> */}
  <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500/20 rounded-full mb-3 sm:mb-4">
  {/* <i className="fas fa-briefcase text-yellow-500 text-3xl"></i> */}
  <BusinessTradingIcon className="text-yellow-500 text-3xl" />
</div>
</div>

              </FloatingElement>
              <p className="text-yellow-500 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">
                <i className="fas fa-star mr-2"></i>
                PREMIUM BUSINESS SERVICES
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mt-2">
                <span className="text-yellow-500 whitespace-nowrap">Business Buying & Selling</span> Services
              </h2>
              <div className="h-1 w-16 sm:w-20 md:w-32 bg-yellow-500 mx-auto mt-3 sm:mt-4 md:mt-6 rounded-full"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 sm:mt-6 md:mt-8 max-w-4xl mx-auto leading-relaxed px-4">
                <i className="fas fa-shield-alt text-yellow-500 text-xl mr-2"></i>
                Transparent, Professional & Fully Confidential business transactions across the UAE. 
                Your trusted partner for successful business acquisitions and sales.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren staggerDelay={150} direction="up" threshold={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {/* For Buyers */}
              <ScrollReveal direction="left" threshold={0.1}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border-2 border-yellow-500 hover:shadow-yellow-500/20 transition-all duration-300 group hover:scale-[1.02]">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500 rounded-full mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-search-dollar text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">For Buyers</h3>
                    <p className="text-yellow-500 text-xs sm:text-sm font-semibold">Find Your Perfect Business Match</p>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 text-center leading-relaxed">
                    We take time to understand your requirements — your sector preferences, budget, expectations, experience, and long-term goals.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Understand your needs and expectations",
                      "Present suitable business opportunities",
                      "Share detailed business information",
                      "Guide negotiations and finalize deals",
                      "Manage legal and transfer processes"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start bg-gray-800/50 p-2 sm:p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group-hover:translate-x-2">
                        <CheckGlyph className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-gray-200 text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <MagneticButton 
                    onClick={() => handleNavClick('contactpage')}
                    className="w-full mt-4 sm:mt-6 py-2 sm:py-3 bg-yellow-500 text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-yellow-400 transition-colors duration-300 border-2 border-yellow-500 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <i className="fas fa-briefcase text-base"></i>
                      Find Businesses
                      <i className="fas fa-arrow-right text-base"></i>
                    </span>
                    <div className="absolute inset-0 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </MagneticButton>
                </div>
              </ScrollReveal>

              {/* For Sellers */}
              <ScrollReveal direction="right" threshold={0.1}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border-2 border-yellow-500 hover:shadow-yellow-500/20 transition-all duration-300 group hover:scale-[1.02]">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500 rounded-full mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-chart-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">For Sellers</h3>
                    <p className="text-yellow-500 text-xs sm:text-sm font-semibold">Maximize Your Business Value</p>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 text-center leading-relaxed">
                    We collect every important detail about your business and present it professionally to the right buyers or investors.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Study your business thoroughly",
                      "Prepare complete business profile",
                      "Connect with qualified buyers",
                      "Handle negotiations for best value",
                      "Manage documentation and legal processes"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start bg-gray-800/50 p-2 sm:p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group-hover:translate-x-2">
                        <CheckGlyph className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-gray-200 text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <MagneticButton 
                    onClick={() => handleNavClick('contactpage')}
                    className="w-full mt-4 sm:mt-6 py-2 sm:py-3 bg-transparent text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-yellow-500 hover:text-white transition-colors duration-300 border-2 border-yellow-500 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <i className="fas fa-dollar-sign text-base"></i>
                      Sell Business
                      <i className="fas fa-arrow-right text-base"></i>
                    </span>
                    <div className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>
          </StaggerChildren>

          <ScrollReveal direction="scale" threshold={0.1}>
          <div className="bg-black p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border-2 border-yellow-500 hover:shadow-yellow-500/30 transition-shadow duration-300">
  <div className="text-center text-white">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
      Confidentiality at Every Step
    </h3>
    <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed tracking-normal">
      Business transactions require privacy and discretion.
    </p>
    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed tracking-normal">
      Your trust is our priority, and we operate with the highest level of privacy throughout the process.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {[
        { 
          icon: 'user-check', 
          title: 'Verified Buyers Only', 
          desc: 'Your business details are shared only with verified, serious buyers' 
        },
        { 
          icon: 'shield-alt', 
          title: 'Identity Protection', 
          desc: 'Identity and sensitive information remain protected' 
        },
        { 
          icon: 'lock', 
          title: 'Secure Data Handling', 
          desc: 'Internal data, financials, and key documents are handled securely' 
        },
        { 
          icon: 'eye-slash',  // Changed from 'comments-slash'
          title: 'Private Negotiations', 
          desc: 'Discussions and negotiations are kept completely confidential' 
        }
      ].map((item, index) => (
        <ScrollReveal key={index} direction="up" delay={index * 100} threshold={0.1}>
          <div className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-yellow-500 rounded-full mb-2 sm:mb-3 md:mb-4 group-hover:rotate-12 transition-transform duration-300">
              <i className={`fas fa-${item.icon} text-white text-2xl`}></i>
            </div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 tracking-tight">{item.title}</h4>
            <p className="text-white/90 text-xs sm:text-sm md:text-base tracking-normal">{item.desc}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
</div>
</ScrollReveal>        </div>
      </section>

        {/* Real Estate Services Section */}
        <section id="real-estate" className="py-16 sm:py-20 md:py-24 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down" threshold={0.2}>
            <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-3 sm:mb-4">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500/10 rounded-full mb-3 sm:mb-4">
  <i className="fas fa-building text-yellow-500 text-4xl"></i>
</div>

</div>

              <p className="text-yellow-500 uppercase tracking-widest text-xs sm:text-sm font-semibold">PROPERTY SOLUTIONS</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
                UAE <span className="text-yellow-500">Real Estate</span> Services
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
              <p className="text-base sm:text-lg text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto">
                <i className="fas fa-map-marker-alt text-yellow-500 text-xl mr-2"></i>
                Complete real estate solutions for both residential and commercial properties across the UAE
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren staggerDelay={150} direction="up" threshold={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Residential Real Estate */}
              <ScrollReveal direction="left" threshold={0.1}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 hover:border-yellow-500 transition-all duration-300 group hover:scale-[1.02]">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-home text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Residential Real Estate</h3>
                    <p className="text-yellow-500 text-sm sm:text-base font-semibold">Homes & Apartments</p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-center group">
                      <i className="fas fa-check text-yellow-500 text-xl mr-3 group-hover:scale-110 transition-transform"></i>
                      <span className="text-gray-700 text-sm sm:text-base">Off-plan & Ready Properties</span>
                    </div>
                    <div className="flex items-center group">
                      <i className="fas fa-check text-yellow-500 text-xl mr-3 group-hover:scale-110 transition-transform"></i>
                      <span className="text-gray-700 text-sm sm:text-base">Apartments, Villas & Townhouses</span>
                    </div>
                    <div className="flex items-center group">
                      <i className="fas fa-check text-yellow-500 text-xl mr-3 group-hover:scale-110 transition-transform"></i>
                      <span className="text-gray-700 text-sm sm:text-base">Investment Opportunities</span>
                    </div>
                    <div className="flex items-center group">
                      <i className="fas fa-check text-yellow-500 text-xl mr-3 group-hover:scale-110 transition-transform"></i>
                      <span className="text-gray-700 text-sm sm:text-base">Property Management</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 text-center leading-relaxed">
                    Find your perfect home or investment property with our comprehensive residential real estate services.
                  </p>

                  <MagneticButton 
                    onClick={() => handleNavClick('residentialrealestate')}
                    className="w-full py-3 sm:py-4 bg-yellow-500 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-yellow-400 transition-colors duration-300 border-2 border-yellow-500 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <i className="fas fa-search text-base"></i>
                      Explore Residential Properties
                      <i className="fas fa-arrow-right text-base"></i>
                    </span>
                    <div className="absolute inset-0 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </MagneticButton>
                </div>
              </ScrollReveal>

              {/* Commercial Real Estate */}
              <ScrollReveal direction="right" threshold={0.1}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 hover:border-yellow-500 transition-all duration-300 group hover:scale-[1.02]">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-warehouse text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Commercial Real Estate</h3>
                    <p className="text-yellow-500 text-sm sm:text-base font-semibold">Business Properties</p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-center group">
                      <i className="fas fa-check text-yellow-500 text-xl mr-3 group-hover:scale-110 transition-transform"></i>
                      <span className="text-gray-700 text-sm sm:text-base">Warehouses & Industrial</span>
                    </div>
                    <div className="flex items-center group">
                      <i className="fas fa-check text-yellow-500 text-xl mr-3 group-hover:scale-110 transition-transform"></i>
                      <span className="text-gray-700 text-sm sm:text-base">Office Spaces & Showrooms</span>
                    </div>
                    <div className="flex items-center group">
                      <i className="fas fa-check text-yellow-500 text-xl mr-3 group-hover:scale-110 transition-transform"></i>
                      <span className="text-gray-700 text-sm sm:text-base">Commercial Land & Plots</span>
                    </div>
                    <div className="flex items-center group">
                      <i className="fas fa-check text-yellow-500 text-xl mr-3 group-hover:scale-110 transition-transform"></i>
                      <span className="text-gray-700 text-sm sm:text-base">Mixed-Use Developments</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 text-center leading-relaxed">
                    Professional guidance for high-value commercial property decisions and business expansion.
                  </p>

                  <MagneticButton 
                    onClick={() => handleNavClick('commercialrealestate')}
                    className="w-full py-3 sm:py-4 bg-transparent text-gray-900 font-semibold text-sm sm:text-base rounded-lg hover:bg-yellow-500 hover:text-white transition-colors duration-300 border-2 border-yellow-500 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <i className="fas fa-chart-line text-base"></i>
                      Explore Commercial Properties
                      <i className="fas fa-arrow-right text-base"></i>
                    </span>
                    <div className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>
          </StaggerChildren>
        </div>
      </section>
      <section id="services" className="py-16 sm:py-20 md:py-24 bg-white overflow-x-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <ScrollReveal direction="down" threshold={0.2}>
      <div className="text-center mb-8 sm:mb-12">
      <div className="flex justify-center mb-3 sm:mb-4">
      <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500/20 rounded-full mb-3 sm:mb-4">
  <i className="fas fa-briefcase text-yellow-500 text-3xl"></i>
</div>


</div>

        <p className="text-yellow-500 uppercase tracking-widest text-xs sm:text-sm font-semibold">WHAT WE DO</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
          Our Comprehensive <span className="text-yellow-500">Services</span>
        </h2>
        <div className="h-1 w-16 sm:w-20 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </div>
    </ScrollReveal>

    <StaggerChildren staggerDelay={100} direction="up" threshold={0.1}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

        {safeCoreServices.map((service, index) => {
          const IconComp = service.IconComponent;

          return (
            <ScrollReveal key={index} direction="up" threshold={0.1}>
              <div className="w-full h-full flex flex-col bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-yellow-500 transition-all duration-300 group hover:scale-[1.02] hover:shadow-yellow-500/20">

                {/* Icon */}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComp className="w-12 h-12 text-4xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description (forces equal card height) */}
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Button sits at bottom for all cards */}
                <div className="mt-auto pt-4">
                  <button
                    onClick={() =>
                      handleNavClick(
                        service.title === "Business Setup in UAE"
                          ? "businesssetup"
                          : "contactpage"
                      )
                    }
                    className="text-yellow-500 font-semibold hover:text-yellow-400 transition flex items-center text-sm group"
                  >
                    Learn More
                    <i className="fas fa-arrow-right ml-2 text-base group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>

              </div>
            </ScrollReveal>
          );
        })}

      </div>
    </StaggerChildren>

  </div>
</section>

      {/* Golden Visa Section */}
      <section id="golden-visa" className="py-16 sm:py-20 md:py-24 bg-gray-50 overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down" threshold={0.2}>
            <div className="text-center">
              <p className="text-yellow-500 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">LONG TERM RESIDENCY</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
                UAE <span className="text-yellow-500">Golden Visa</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                <i className="fas fa-passport text-yellow-500 text-xl mr-2"></i>
                The UAE Golden Visa is a long-term residence visa that enables foreign talents to live, work, or study in the UAE while enjoying exclusive benefits.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerChildren staggerDelay={80} direction="up" threshold={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
              <div className="space-y-3 sm:space-y-4">
                {[
                  "10-year renewable residence visa",
                  "Sponsorship for family members",
                  "Ability to stay outside UAE for more than 6 months",
                  "Sponsorship of domestic helpers"
                ].map((item, index) => (
                  <ScrollReveal key={index} direction="left" threshold={0.1}>
                    <div className="flex items-start group hover:transform hover:translate-x-2 transition-transform duration-300 bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
                      <CheckGlyph className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 text-sm sm:text-base group-hover:text-gray-900 transition-colors">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  "No need for a sponsor",
                  "Residency for Family Members Without Age Limits",
                  "Freedom to Work Without Employer Sponsorship",
                  "Easy entry and exit from UAE"
                ].map((item, index) => (
                  <ScrollReveal key={index} direction="right" threshold={0.1}>
                    <div className="flex items-start group hover:transform hover:translate-x-2 transition-transform duration-300 bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
                      <CheckGlyph className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 text-sm sm:text-base group-hover:text-gray-900 transition-colors">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </StaggerChildren>

          <ScrollReveal direction="scale" threshold={0.2}>
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                Whether you're an investor, entrepreneur, specialized talent, or outstanding student, we guide you through the entire Golden Visa application process with expert consultation and documentation support.
              </p>
              
              <MagneticButton
                onClick={() => handleNavClick('goldenvisa')}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-yellow-500 text-white text-sm sm:text-base md:text-lg font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition-colors duration-300 border-2 border-yellow-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fas fa-passport text-base"></i>
                  APPLY FOR GOLDEN VISA
                  <i className="fas fa-arrow-right text-base group-hover:translate-x-1 transition-transform"></i>
                </span>
                <div className="absolute inset-0 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

     {/* Home Page FAQ Section */}
<section id="faq" className="py-24 bg-gray-50 overflow-x-hidden">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollReveal direction="down" threshold={0.2}>
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <FAQIcon className="w-20 h-20 md:w-24 md:h-24 text-5xl" />
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight uppercase">
          Frequently Asked <span className="text-yellow-500">Questions</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          <i className="fas fa-comments text-yellow-500 text-2xl mr-2"></i>
          Quick answers to our most common questions
        </p>
      </div>
    </ScrollReveal>

    <StaggerChildren staggerDelay={100} direction="up" threshold={0.1}>
      <div className="space-y-4">
        {safeHomePageFAQ.map((item, index) => (
          <ScrollReveal key={index} direction="up" threshold={0.1}>
            <AccordionItem 
              question={item.q} 
              answer={item.a} 
              isOpen={activeIndex === index} 
              onClick={() => handleFAQClick(index)} 
            />
          </ScrollReveal>
        ))}
      </div>
    </StaggerChildren>

    <ScrollReveal direction="up" threshold={0.2}>
      <div className="text-center mt-12">
        <MagneticButton
          onClick={() => handleNavClick('contactpage')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-[1.02] border-2 border-yellow-500"
        >
          <i className="fas fa-comments text-xl"></i>
          Still Have Questions? Contact Us
          <i className="fas fa-arrow-right text-xl ml-2"></i>
        </MagneticButton>
      </div>
    </ScrollReveal>
  </div>
</section>
    </div>
  );
};

export default HomePage;