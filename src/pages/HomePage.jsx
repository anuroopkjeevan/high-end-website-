import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart3, 
  Globe, 
  Zap, 
  Search, 
  Smartphone, 
  Layout, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Facebook, // Changed from Twitter to Facebook
  Users,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Award,
  Code,
  PenTool
} from 'lucide-react'

import boska from '../assets/boska.png';
import jaza from '../assets/jaza.png';
import jockey from '../assets/JOCKEY LOGO .png';
import bata from '../assets/bata.png';
import poshrealestate from '../assets/Posh_RealEstate Logo.png';
import posh from '../assets/poshconsultants.png';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- Updated Sub-Component: Colorful Client Logo Ticker ---
const LogoTicker = () => {
  const clientLogos = [
    { name: "Client 1", url: poshrealestate },
    { name: "Client 2", url: boska },
    { name: "Client 6", url: posh },
    { name: "Client 3", url: jaza },
    { name: "Client 4", url: jockey },
    { name: "Client 5", url: bata },
  ];

  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="py-12 bg-[#121214] overflow-hidden border-y border-white/5 relative">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div 
          className="flex flex-none gap-20 pr-20 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.url} 
              alt={logo.name} 
              className="h-12 w-auto opacity-90 hover:opacity-100 transition-all duration-300 object-contain" 
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Home = ({ handleNavClick, Logo }) => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#121214] text-white font-sans selection:bg-[#7c7adb] selection:text-white overflow-x-hidden">
      
{/* --- Hero Section --- */}
<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6">
  <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#7c7adb]/10 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4e4c85]/15 rounded-full blur-[100px] pointer-events-none" />

  <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="order-1"
    >
      <motion.div variants={fadeInUp} className="inline-block px-4 py-1 mb-6 rounded-full border border-[#7c7adb]/20 bg-[#7c7adb]/5 text-[#7c7adb] text-xs font-mono tracking-widest uppercase font-bold">
        Digital Excellence
      </motion.div>
      <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 uppercase">
        Scale Your <br />
        Business with <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
          Digital Mastery
        </span>
      </motion.h1>
      <motion.p variants={fadeInUp} className="text-gray-400 text-lg lg:text-xl max-w-lg mb-8 leading-relaxed font-medium">
        We drive digital growth through performance marketing and strategic development.
      </motion.p>
      
      {/* Desktop CTA and Stats - Hidden on mobile */}
      <motion.div variants={fadeInUp} className="hidden lg:flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => handleNavClick('contactpage')}
          className="group relative px-8 py-4 bg-[#7c7adb] text-white font-bold text-lg rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(124,122,219,0.2)]"
        >
          <a href="tel:7560807374" className="group relative inline-flex items-center">
            <span className="relative z-10 flex items-center gap-2">
              BOOK A CALL
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </button>
        <div className="flex items-center gap-6 px-4">
          <div className="text-center">
            <p className="text-2xl font-black text-[#7c7adb]">25+</p>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Clients</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-black text-[#7c7adb]">98%</p>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Success</p>
          </div>
        </div>
      </motion.div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative order-2"
    >
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#1e1e24] p-3 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop" 
          alt="Performance marketing analytics dashboard with charts and metrics" 
          className="rounded-[2rem] w-full h-auto object-cover transition-opacity duration-500"
        />
        <div className="absolute -bottom-6 -left-6 bg-[#1e1e24] border border-[#7c7adb]/30 p-5 rounded-[2rem] shadow-2xl flex items-center gap-3">
        </div>
      </div>
    </motion.div>

    {/* Mobile CTA and Stats - Shows only on mobile, positioned after image */}
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-6 lg:hidden order-3 mt-4"
    >
      <button 
        onClick={() => handleNavClick('contactpage')}
        className="group relative w-full px-8 py-5 bg-[#7c7adb] text-white font-bold text-lg rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-98 shadow-[0_10px_30px_rgba(124,122,219,0.2)]"
      >
        <a href="tel:7560807374" className="group relative inline-flex items-center justify-center w-full">
          <span className="relative z-10 flex items-center gap-3">
            BOOK A CALL
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </button>
      
      <div className="flex items-center justify-center gap-8 px-4 py-4 bg-[#1e1e24]/50 rounded-2xl border border-white/5">
        <div className="text-center">
          <p className="text-3xl font-black text-[#7c7adb]">25+</p>
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Clients</p>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div className="text-center">
          <p className="text-3xl font-black text-[#7c7adb]">98%</p>
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Success</p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* --- Client Logo Ticker Section --- */}
      <LogoTicker />

      {/* --- About Us Brief Section --- */}
      <section className="py-24 bg-[#121214] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7c7adb]/5 via-transparent to-[#4e4c85]/5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center gap-2 mb-6">
              <Users className="w-4 h-4 text-[#7c7adb]" />
              <span className="text-[#7c7adb] text-xs font-mono tracking-widest uppercase font-bold">About Adverra Hub</span>
            </motion.div>
            
            <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 uppercase leading-tight">
              We Don't Just Build Campaigns.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
                We Engineer Digital Dominance.
              </span>
            </motion.h3>
            
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
              Founded in 2019, we're a lean team of 15+ strategists, engineers, and creatives 
              obsessed with data-driven growth. We partner with 25+ brands across retail, tech, 
              and luxury sectors—delivering measurable results, not empty promises.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="mt-10">
              <button 
                onClick={() => handleNavClick('about')}
                className="group inline-flex items-center gap-2 text-[#7c7adb] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
              >
                Learn More About Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Services Section with Expandable Cards --- */}
      <section className="py-32 bg-[#0d0d0f] relative rounded-t-[4rem]">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
              Our <span className="text-[#7c7adb]">Services</span>
            </h2>
            <p className="text-gray-500 max-w-2xl text-lg font-medium">
              Click on any service to explore detailed capabilities and deliverables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                index={index}
                isExpanded={expandedService === index}
                onToggle={() => toggleService(index)}
                handleNavClick={handleNavClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Portfolio Section --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl font-black mb-3 uppercase tracking-tighter">Selected <span className="text-[#7c7adb]">Projects</span></h2>
            <p className="text-gray-500 font-medium">Results that speak louder than words.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#7c7adb] font-bold hover:gap-4 transition-all">
            View All <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((proj, idx) => (
              <PortfolioCard key={idx} {...proj} />
            ))}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#1e1e24] text-white pt-24 pb-12 rounded-t-[4rem] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 mb-20">
            <div>
              <h2 className="text-6xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
                LET'S BUILD <br/><span className="text-[#7c7adb]">TOGETHER.</span>
              </h2>
              <button 
                onClick={() => handleNavClick('contactpage')}
                className="bg-white text-black px-10 py-5 rounded-[1.5rem] font-black text-lg hover:bg-[#7c7adb] hover:text-white transition-all flex items-center gap-2"
              >
                Get In Touch <ArrowRight />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="font-black uppercase text-xs tracking-widest text-[#7c7adb]">Contact</p>
                <p className="font-bold text-lg">adverrahub@gmail.com</p>
                <p className="font-bold text-lg">+91 7306771387</p>
              </div>
              <div className="space-y-4">
                <p className="font-black uppercase text-xs tracking-widest text-[#7c7adb]">Office</p>
                <p className="font-bold text-lg text-gray-400">Wayanad & Calicut, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
             <p className="text-[10px] font-bold tracking-[0.2em]">© 2025 ADVERRA HUB. DESIGNED FOR GROWTH.</p>
             <div className="flex gap-6">
                <a 
                  href="https://www.instagram.com/adverra_hub/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#7c7adb] transition-colors cursor-pointer"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/adverrahub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#7c7adb] transition-colors cursor-pointer"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61578278429066" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#7c7adb] transition-colors cursor-pointer"
                >
                  <Facebook size={18} />
                </a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Enhanced Service Card with Expandable Details ---
const ServiceCard = ({ icon: Icon, title, desc, details, index, isExpanded, onToggle, handleNavClick }) => {
  
  // Expanded content for each service
  const expandedContent = {
    "SEO": {
      fullDescription: "Our SEO service goes beyond keywords. We architect comprehensive search dominance strategies that build sustainable authority and drive qualified traffic.",
      process: ["Deep technical audit", "Competitor gap analysis", "Content strategy development", "Authority link acquisition", "Continuous performance optimization"],
      outcomes: ["50-200% organic traffic growth", "Top 3 rankings for key terms", "15%+ conversion rate improvement", "Sustainable long-term authority"],
      technologies: ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "Looker Studio"]
    },
    "Performance Marketing": {
      fullDescription: "We engineer ROI-positive campaigns across Google, Meta, and LinkedIn with surgical precision. Every dollar is optimized for maximum return.",
      process: ["Audience intelligence", "Creative strategy & testing", "Conversion tracking setup", "Bid optimization", "Cross-channel attribution"],
      outcomes: ["2-5x ROAS improvement", "30%+ CPA reduction", "Scalable acquisition channels", "Full-funnel visibility"],
      technologies: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Klaviyo", "Triple Whale"]
    },
    "Digital Marketing": {
      fullDescription: "We build communities that convert—not just follower counts. Strategic content and engagement systems that turn audiences into advocates.",
      process: ["Audience analysis", "Content pillar development", "Community management systems", "Influencer partnerships", "Viral growth engineering"],
      outcomes: ["200%+ engagement rate increase", "Community-driven revenue", "Brand advocacy programs", "Crisis-ready reputation"],
      technologies: ["Later", "Sprout Social", "Brandwatch", "TikTok Creative Center", "Spark Ads"]
    },
    "Development": {
      fullDescription: "High-performance digital architecture that combines stunning design with conversion optimization. Built for speed, SEO, and user experience.",
      process: ["UX research & wireframing", "Visual design", "Development", "Performance optimization", "Conversion rate optimization"],
      outcomes: ["40-80% faster load times", "25%+ conversion lift", "Mobile-optimized experience", "SEO-optimized structure"],
      technologies: ["React", "Vite", "Webflow", "Shopify Plus", "Framer"]
    },
    "App Development": {
      fullDescription: "Dominate the most personal screen. Comprehensive mobile marketing strategies from ASO to SMS and push notifications.",
      process: ["App store optimization", "Mobile ad campaigns", "SMS/MMS strategy", "Push notification flows", "Mobile attribution"],
      outcomes: ["40%+ organic app installs", "25%+ push engagement", "SMS revenue channel", "Mobile-first customer experience"],
      technologies: ["App Store Connect", "Google Play Console", "Braze", "Attentive", "Branch"]
    },
    "Analytics": {
      fullDescription: "Turn raw data into actionable business intelligence. Custom dashboards, attribution modeling, and predictive insights.",
      process: ["Audit current tracking", "GA4 implementation", "Custom event tracking", "Dashboard creation", "Predictive modeling"],
      outcomes: ["Single source of truth", "ROI by channel visibility", "Customer journey clarity", "Data-driven decision culture"],
      technologies: ["Google Analytics 4", "Looker Studio", "Mixpanel", "Amplitude", "Snowflake"]
    }
  };

  const content = expandedContent[title] || {
    fullDescription: desc,
    process: details,
    outcomes: ["Measurable ROI", "Scalable growth", "Competitive advantage", "Long-term sustainability"],
    technologies: ["Industry tools", "Custom solutions", "Analytics", "Optimization"]
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group p-8 rounded-[2rem] bg-[#1e1e24] border transition-all duration-500 shadow-xl cursor-pointer
        ${isExpanded 
          ? 'border-[#7c7adb] shadow-[0_20px_60px_rgba(124,122,219,0.2)]' 
          : 'border-white/5 hover:border-[#7c7adb]/50'
        }`}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center transition-all duration-500
          ${isExpanded 
            ? 'bg-[#7c7adb]' 
            : 'bg-[#7c7adb]/20 group-hover:bg-[#7c7adb]'
          }`}
        >
          <Icon className={`w-7 h-7 transition-colors duration-500
            ${isExpanded ? 'text-white' : 'text-[#7c7adb] group-hover:text-white'}
          `} />
        </div>
        
        <div className="flex items-center gap-1 text-[#7c7adb]">
          <span className="text-xs font-bold uppercase tracking-wider">
            {isExpanded ? 'Close' : 'Expand'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </div>
      
      <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tighter">{title}</h3>
      
      {/* Default State - Only shows when NOT expanded */}
      {!isExpanded && (
        <div>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed font-medium">{desc}</p>
          <ul className="space-y-3">
            {details.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7c7adb]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Expanded State - Only shows when isExpanded is true */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="pt-4 space-y-6"
        >
          {/* Full Description */}
          <p className="text-gray-300 text-sm leading-relaxed font-medium">
            {content.fullDescription}
          </p>
          
          {/* Process Section */}
          <div>
            <h4 className="text-xs font-black text-[#7c7adb] uppercase tracking-widest mb-3 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> Our Process
            </h4>
            <ul className="space-y-2">
              {content.process.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                  <CheckCircle className="w-3.5 h-3.5 text-[#7c7adb] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Outcomes Section */}
          <div>
            <h4 className="text-xs font-black text-[#7c7adb] uppercase tracking-widest mb-3 flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5" /> Key Outcomes
            </h4>
            <ul className="space-y-2">
              {content.outcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                  <Award className="w-3.5 h-3.5 text-[#7c7adb] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies Section */}
          <div>
            <h4 className="text-xs font-black text-[#7c7adb] uppercase tracking-widest mb-3 flex items-center gap-2">
              <Code className="w-3.5 h-3.5" /> Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {content.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#121214] rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleNavClick('contactpage');
              }}
              className="w-full px-4 py-3 bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:gap-3 transition-all"
            >
              Discuss Your {title} Strategy <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const PortfolioCard = ({ category, title, desc, image }) => (
    <motion.div 
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] cursor-pointer bg-[#1e1e24]"
    >
        <div className="absolute inset-0 bg-[#121214] opacity-20 group-hover:opacity-0 transition-opacity z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80 z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
        
        <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
            <span className="px-3 py-1 bg-[#7c7adb]/30 backdrop-blur-md rounded-full text-[10px] font-bold text-white mb-4 inline-block uppercase tracking-widest">
                {category}
            </span>
            <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{title}</h3>
            <p className="text-gray-400 text-sm font-medium">{desc}</p>
        </div>
    </motion.div>
);

// --- Data ---
const services = [
  { icon: Search, title: "SEO", desc: "Dominate search rankings with technical SEO mastery.", details: ["Technical SEO", "Content Strategy", "Authority Building"] },
  { icon: Zap, title: "Performance Marketing", desc: "ROI-driven campaigns across all digital channels.", details: ["Paid Search", "Paid Social", "Conversion Optimization"] },
  { icon: Globe, title: "Digital Marketing", desc: "Comprehensive growth strategies that scale.", details: ["Social Media", "Content Marketing", "Brand Strategy"] },
  { icon: Layout, title: "Development", desc: "High-performance web and software solutions.", details: ["Web Development", "E-commerce", "Custom Solutions"] },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile excellence.", details: ["iOS/Android", "Cross-Platform", "App Store Optimization"] },
  { icon: BarChart3, title: "Analytics", desc: "Data-driven insights for smarter decisions.", details: ["Dashboards", "Event Tracking", "BI Reports"] }
];

const projects = [
  { category: "Retail", title: "Fashion Hub", desc: "Digital transformation for leading fashion retailer", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000" },
  { category: "Tech", title: "Scale AI", desc: "Performance marketing for AI startup", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000" },
  { category: "Luxury", title: "Resort Co.", desc: "App development for luxury hospitality", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000" }
];

export default Home;