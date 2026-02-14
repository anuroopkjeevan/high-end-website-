import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Zap,
  Globe,
  Layout,
  BarChart3,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  PenTool,
  Code,
  ShoppingCart,
  Mail,
  Instagram,
  Linkedin,
  Facebook, // Changed from Twitter to Facebook
  ChevronRight,
  Sparkles,
  Rocket,
  Shield,
  Clock,
  DollarSign,
  Activity,
  CheckCircle,
  Award,
  Database,
  Cloud,
  Settings,
  Briefcase,
  Star,
  Hexagon,
  Cpu,
  Layers,
  GitBranch,
  Workflow,
  ZapOff,
  RefreshCw,
  Box,
  Server,
  Globe2,
  Palette,
  ShoppingBag,
  Store,
  Share2,
  Smartphone as SmartphoneIcon,
  Laptop,
  Users as UsersIcon,
  Building,
  TrendingUp as TrendingUpIcon,
  BarChart,
  PieChart,
  LineChart,
  Filter,
  Mail as MailIcon,
  MessageCircle,
  Phone as PhoneIcon,
  CheckSquare,
  Calendar,
  UserCheck,
  Settings as SettingsIcon,
  Download,
  Upload,
  HardDrive,
  Shield as ShieldIcon
} from "lucide-react";

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

const Services = ({ handleNavClick, Logo }) => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <div className="min-h-screen bg-[#121214] text-white font-sans selection:bg-[#7c7adb] selection:text-white overflow-x-hidden">
      
      {/* --- Premium Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#7c7adb]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#4e4c85]/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'60\' height=\'60\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 60 0 L 0 0 0 60\' fill=\'none\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'0.3\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#7c7adb]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4e4c85]/15 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div 
            variants={fadeInUp} 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#7c7adb]/20 bg-[#7c7adb]/5 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7c7adb]" />
            <span className="text-[#7c7adb] text-xs font-mono tracking-widest uppercase font-bold">
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-[-0.02em] mb-8 uppercase"
          >
            Digital Services<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
              That Actually Deliver
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-light tracking-wide"
          >
            We don't do "one-size-fits-all." Every strategy is engineered for your specific goals, market, and competition.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <button 
              onClick={() => handleNavClick('contactpage')}
              className="group relative px-10 py-5 bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] text-white font-bold text-lg rounded-[20px] overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_10px_30px_rgba(124,122,219,0.2)] hover:shadow-[0_20px_40px_rgba(124,122,219,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                DISCUSS YOUR PROJECT <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Main Services Grid --- */}
      <section className="py-20 bg-[#0d0d0f] relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mainServices.map((service, index) => (
              <ServiceDetailCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Web & App Development Excellence Section (NEW) --- */}
      <section className="py-28 lg:py-32 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c7adb]/10 border border-[#7c7adb]/20 backdrop-blur-sm mb-6">
              <Code className="w-3.5 h-3.5 text-[#7c7adb]" />
              <span className="text-[#7c7adb] text-xs font-mono tracking-widest uppercase font-bold">
                Engineering Excellence
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 uppercase tracking-tight">
              Web & App <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">Development</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
              We don't just build websites—we architect high-performance digital experiences that drive conversions, scale effortlessly, and dominate search.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#1e1e24] p-3 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7c7adb]/20 via-transparent to-[#a3a1f7]/20" />
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2940&auto=format&fit=crop" 
                  alt="Web Development" 
                  className="rounded-[2rem] w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#1e1e24] border border-[#7c7adb]/30 p-4 rounded-2xl shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#7c7adb] to-[#a3a1f7] rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Success Rate</p>
                    <p className="font-black text-xl text-white">98%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-black mb-6 uppercase tracking-tight">
                50+ <span className="text-[#7c7adb]">Successful</span> Web & App Projects
              </h3>
              
              <div className="space-y-6">
                {developmentSuccess.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#7c7adb]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7c7adb] transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-[#7c7adb] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* E-Commerce & Shopify Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 lg:p-12 rounded-[3rem] bg-gradient-to-br from-[#1e1e24] to-[#1a1a20] border border-white/5"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7c7adb]/10 border border-[#7c7adb]/20 mb-6">
                  <ShoppingCart className="w-3.5 h-3.5 text-[#7c7adb]" />
                  <span className="text-[#7c7adb] text-xs font-mono tracking-widest uppercase font-bold">E-Commerce Specialists</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black mb-6 uppercase tracking-tight">
                  Shopify & Custom <span className="text-[#7c7adb]">Store Builds</span>
                </h3>
                
                <p className="text-gray-400 text-lg mb-8 font-light">
                  From headless Shopify Plus architectures to fully custom e-commerce platforms. We build stores that convert visitors into loyal customers.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {ecommerceFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#7c7adb]" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-[#7c7adb]/20 border-2 border-[#1e1e24] flex items-center justify-center">
                        <span className="text-xs font-bold text-[#7c7adb]">Shopify</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#a3a1f7]/20 border-2 border-[#1e1e24] flex items-center justify-center">
                        <span className="text-xs font-bold text-[#a3a1f7]">Woo</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#7c7adb]/20 border-2 border-[#1e1e24] flex items-center justify-center">
                        <span className="text-xs font-bold text-[#7c7adb]">Magento</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c7adb] to-[#a3a1f7] border-2 border-[#1e1e24] flex items-center justify-center">
                        <span className="text-xs font-bold text-white">Custom</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">Plus headless & PWA solutions</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#121214] p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop" 
                    alt="E-commerce Development" 
                    className="rounded-[1.5rem] w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-[#7c7adb] px-4 py-2 rounded-full shadow-2xl">
                  <span className="text-white text-xs font-bold tracking-wider">+47% Avg. Conversion</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Odoo & CRM Specialization Section (NEW) --- */}
      <section className="py-28 lg:py-32 bg-[#0d0d0f] relative rounded-t-[4rem] rounded-b-[4rem]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c7adb]/10 border border-[#7c7adb]/20 backdrop-blur-sm mb-6">
                <Database className="w-3.5 h-3.5 text-[#7c7adb]" />
                <span className="text-[#7c7adb] text-xs font-mono tracking-widest uppercase font-bold">
                  ERP & CRM Specialists
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight">
                Odoo & Custom <span className="text-[#7c7adb]">CRM Solutions</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 font-light">
                We're certified Odoo partners and CRM customization specialists. From implementation to custom module development, we transform your business operations.
              </p>
              
              <div className="space-y-6 mb-10">
                {odooExpertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#7c7adb]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#7c7adb]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {odooTech.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-[#121214] rounded-full text-xs font-bold text-gray-400 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#1e1e24] p-4 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7c7adb]/10 via-transparent to-[#a3a1f7]/10" />
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop" 
                  alt="Odoo CRM Development" 
                  className="rounded-[2rem] w-full h-auto object-cover"
                />
                
                {/* Odoo Logo Overlay */}
                <div className="absolute top-6 left-6 bg-[#121214]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="text-white font-bold text-sm">Odoo</span>
                  <span className="text-[#7c7adb] ml-2 text-xs">Certified Partner</span>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-[#7c7adb]/90 backdrop-blur-md px-4 py-2 rounded-full">
                  <span className="text-white text-xs font-bold">12+ Implementations</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[#1e1e24] border border-[#7c7adb]/30 p-4 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#7c7adb]/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-4 h-4 text-[#7c7adb]" />
                  </div>
                  <span className="text-sm font-bold text-white">Custom Module Dev</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Lead Management & App Development (NEW) --- */}
      <section className="py-28 lg:py-32 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#1e1e24] p-3 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop" 
                  alt="Lead Management App" 
                  className="rounded-[2rem] w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#7c7adb] to-[#a3a1f7] p-4 rounded-2xl shadow-2xl">
                <SmartphoneIcon className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c7adb]/10 border border-[#7c7adb]/20 backdrop-blur-sm mb-6">
                <UsersIcon className="w-3.5 h-3.5 text-[#7c7adb]" />
                <span className="text-[#7c7adb] text-xs font-mono tracking-widest uppercase font-bold">
                  Lead Management Specialists
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight">
                Custom Lead & CRM <span className="text-[#7c7adb]">App Development</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 font-light">
                End-to-end lead management solutions built from scratch. Custom CRM apps, lead tracking systems, and sales automation platforms tailored to your exact workflow.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                {leadManagementFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7c7adb] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-[#1e1e24] p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7c7adb]/20 to-[#a3a1f7]/20 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-[#7c7adb]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Case Study</p>
                    <p className="font-bold text-white">150% increase in lead conversion</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Built a custom lead management app for a financial services client that automated follow-ups, scored leads in real-time, and integrated with their existing CRM.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Industry Specialization (Enhanced) --- */}
      <section className="py-28 lg:py-32 bg-[#1e1e24] relative rounded-t-[4rem] rounded-b-[4rem]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#7c7adb] font-black text-sm tracking-[0.3em] uppercase mb-6 block">
              Industry Specialization
            </span>
            <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase">
              We Speak Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
                Industry's Language
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              Deep domain expertise across sectors. We don't just know marketing—we know your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveIndustry(index)}
                  className={`flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 cursor-pointer
                    ${activeIndustry === index 
                      ? 'bg-gradient-to-r from-[#7c7adb]/20 to-transparent border border-[#7c7adb]/30' 
                      : 'hover:bg-white/5'
                    }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300
                    ${activeIndustry === index 
                      ? 'bg-[#7c7adb]' 
                      : 'bg-[#7c7adb]/10 group-hover:bg-[#7c7adb]'
                    }`}>
                    <industry.icon className={`w-7 h-7 transition-colors duration-300
                      ${activeIndustry === index ? 'text-white' : 'text-[#7c7adb]'}
                    `} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-black text-white text-xl uppercase tracking-tight">{industry.name}</h4>
                      <span className="text-[#7c7adb] text-xs font-bold">{industry.projects}+ projects</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{industry.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {industry.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#121214] p-8 lg:p-10 rounded-[2rem] border border-white/5 sticky top-28"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7c7adb] to-[#a3a1f7] rounded-2xl flex items-center justify-center">
                  {industryDetails[activeIndustry].icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Industry Deep Dive</p>
                  <h3 className="text-2xl font-black text-white">{industries[activeIndustry].name}</h3>
                </div>
              </div>
              
              <p className="text-gray-300 text-base mb-6 font-light leading-relaxed">
                {industryDetails[activeIndustry].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xs font-black text-[#7c7adb] uppercase tracking-widest">Success Stories</h4>
                {industryDetails[activeIndustry].successStories.map((story, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-[#7c7adb] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm font-bold">{story.client}</p>
                      <p className="text-gray-500 text-xs">{story.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-28 lg:py-32 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#7c7adb] font-black text-sm tracking-[0.3em] uppercase mb-6 block">
            Our Process
          </span>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">Engineer Growth</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            A systematic approach that transforms uncertainty into predictable, scalable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-7xl font-black text-[#7c7adb]/10 absolute -top-6 left-0 group-hover:text-[#7c7adb]/20 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="relative z-10 pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7c7adb]/10 to-[#a3a1f7]/10 rounded-[1.2rem] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-8 h-8 text-[#7c7adb]" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {index < process.length - 1 && (
                <ChevronRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-[#7c7adb]/30 group-hover:text-[#7c7adb]/50 transition-colors" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Pricing Philosophy --- */}
      <section className="py-28 lg:py-32 bg-[#0d0d0f] relative rounded-t-[4rem] rounded-b-[4rem]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#1e1e24] p-4 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop" 
                  alt="ROI Focused" 
                  className="rounded-[2rem] w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-[#7c7adb] font-black text-sm tracking-[0.3em] uppercase mb-6 block">
                ROI-First Approach
              </span>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tight">
                No Retainers. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
                  Just Results.
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 font-light">
                We don't believe in billing you for "effort." We bill for impact. Every strategy is tied to measurable business outcomes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#7c7adb]/10 flex items-center justify-center">
                      <Sparkles className="w-2.5 h-2.5 text-[#7c7adb]" />
                    </div>
                    <p className="text-white/80 text-xs font-bold uppercase tracking-wider">{benefit}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleNavClick('contactpage')}
                className="group px-8 py-4 bg-transparent border-2 border-[#7c7adb] text-white font-bold text-lg rounded-[20px] overflow-hidden transition-all duration-500 hover:bg-[#7c7adb] hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                CALCULATE YOUR ROI <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c7adb] to-[#4e4c85] opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-8" />
            <h2 className="text-5xl lg:text-7xl font-black mb-8 uppercase text-white">
              Ready to <span className="text-[#121214]">Dominate?</span>
            </h2>
            <p className="text-white/90 text-xl mb-12 font-light max-w-2xl mx-auto">
              Stop guessing. Start growing. Get a custom strategy tailored to your business goals.
            </p>
            <button 
              onClick={() => handleNavClick('contactpage')}
              className="group relative px-12 py-6 bg-[#121214] text-white font-bold text-xl rounded-[20px] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                CLAIM YOUR FREE AUDIT <Rocket className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- Premium Footer --- */}
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
                <p className="font-bold text-lg">info@averrahub.com</p>
                <p className="font-bold text-lg">+91 7560807374</p>
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

// --- Service Detail Card ---
const ServiceDetailCard = ({ icon: Icon, title, desc, features, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="group p-8 lg:p-10 rounded-[2rem] bg-[#1e1e24] border border-white/5 hover:border-[#7c7adb]/30 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(124,122,219,0.1)]"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-[#7c7adb]/10 to-[#a3a1f7]/10 rounded-[1.2rem] flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#7c7adb] group-hover:to-[#a3a1f7] transition-all duration-500 group-hover:scale-110">
      <Icon className="w-8 h-8 text-[#7c7adb] group-hover:text-white transition-colors duration-500" />
    </div>
    <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tighter">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">{desc}</p>
    <ul className="space-y-2">
      {features.slice(0, 4).map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
          <CheckCircle className="w-3.5 h-3.5 text-[#7c7adb] flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

// --- Data ---
const mainServices = [
  {
    icon: Search,
    title: "SEO",
    desc: "Dominate search results with technical excellence and authority.",
    features: ["Technical SEO Audits", "Keyword Strategy", "Link Building", "Local SEO", "E-commerce SEO"]
  },
  {
    icon: Zap,
    title: "Paid Media",
    desc: "ROI-positive campaigns across Google, Meta, and LinkedIn.",
    features: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting", "Shopping Campaigns"]
  },
  {
    icon: Globe,
    title: "Social Media",
    desc: "Build communities that convert, not just followers.",
    features: ["Content Strategy", "Community Management", "Influencer Marketing", "Viral Growth", "Analytics"]
  },
  {
    icon: Layout,
    title: "Web Design",
    desc: "High-performance digital experiences that drive action.",
    features: ["UX/UI Design", "E-commerce", "React/Vite", "WordPress", "Webflow"]
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Turn data into decisions with custom dashboards.",
    features: ["GA4 Setup", "Looker Studio", "Event Tracking", "Conversion Funnels", "BI Reports"]
  },
  {
    icon: Smartphone,
    title: "Mobile Marketing",
    desc: "Capture attention on the devices your customers use most.",
    features: ["App Store Optimization", "SMS Marketing", "Mobile Ads", "App Analytics", "Push Notifications"]
  }
];

const developmentSuccess = [
  {
    icon: Globe2,
    title: "Custom Web Applications",
    desc: "Scalable, secure, and high-performance web apps built with React, Node.js, and modern architectures."
  },
  {
    icon: SmartphoneIcon,
    title: "iOS & Android App Development",
    desc: "Native and cross-platform mobile applications with exceptional UX and performance."
  },
  {
    icon: ShoppingBag,
    title: "Shopify Plus & Custom E-commerce",
    desc: "Headless commerce, custom storefronts, and enterprise-level e-commerce solutions."
  },
  {
    icon: Store,
    title: "Custom Store Builds",
    desc: "Bespoke e-commerce platforms tailored to unique business models and requirements."
  }
];

const ecommerceFeatures = [
  "Shopify Plus", 
  "Headless CMS", 
  "PWA", 
  "Custom Checkout",
  "Inventory Sync", 
  "Multi-currency"
];

const odooExpertise = [
  {
    icon: Database,
    title: "Odoo Implementation",
    desc: "End-to-end Odoo ERP implementation for sales, inventory, accounting, and manufacturing."
  },
  {
    icon: Settings,
    title: "Custom Module Development",
    desc: "Bespoke Odoo modules tailored to your unique business processes."
  },
  {
    icon: Users,
    title: "CRM Customization",
    desc: "Custom CRM solutions built on Odoo and other platforms with advanced lead scoring."
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    desc: "Automate repetitive tasks and streamline workflows across your organization."
  }
];

const odooTech = [
  "Odoo Community", 
  "Odoo Enterprise", 
  "Python", 
  "PostgreSQL", 
  "XML", 
  "JavaScript", 
  "REST APIs", 
  "Third-party Integrations"
];

const leadManagementFeatures = [
  "Custom CRM Development",
  "Lead Scoring Algorithms",
  "Automated Follow-ups",
  "Email & SMS Integration",
  "Sales Pipeline Management",
  "Real-time Analytics",
  "Mobile CRM Apps",
  "Third-party API Integration"
];

const industries = [
  { 
    name: "E-Commerce & Retail", 
    desc: "D2C brands, marketplaces, omnichannel retailers",
    icon: ShoppingCart,
    projects: "25+",
    tags: ["Shopify", "Magento", "WooCommerce", "Headless"]
  },
  { 
    name: "SaaS & Tech", 
    desc: "B2B software, mobile apps, tech platforms",
    icon: Cloud,
    projects: "18+",
    tags: ["React", "Node.js", "AWS", "Python"]
  },
  { 
    name: "Luxury & Lifestyle", 
    desc: "Premium brands, hospitality, real estate",
    icon: PenTool,
    projects: "15+",
    tags: ["Webflow", "Custom CMS", "High-end UX"]
  },
  { 
    name: "Financial Services", 
    desc: "Fintech, wealth management, insurance",
    icon: DollarSign,
    projects: "12+",
    tags: ["CRM", "Lead Mgmt", "Compliance", "Security"]
  }
];

const industryDetails = [
  {
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    description: "We've helped D2C brands and enterprise retailers scale from 6 to 8 figures through custom e-commerce solutions, SEO dominance, and high-ROI paid media. Our expertise spans Shopify Plus, Magento, WooCommerce, and fully custom headless architectures.",
    successStories: [
      { client: "Luxury Fashion Brand", result: "320% increase in online revenue in 12 months" },
      { client: "D2C Supplement Company", result: "4.5x ROAS with custom Shopify store" },
      { client: "Multi-brand Retailer", result: "150% organic traffic growth, 40% conversion lift" }
    ]
  },
  {
    icon: <Cloud className="w-8 h-8 text-white" />,
    description: "From early-stage startups to established SaaS platforms, we build acquisition engines that deliver qualified leads at scale. Our B2B expertise includes LinkedIn advertising, content marketing, and custom CRM integrations that shorten sales cycles.",
    successStories: [
      { client: "Enterprise SaaS Platform", result: "200% increase in SQLs, 35% lower CPA" },
      { client: "Mobile App Startup", result: "500K+ downloads in first 6 months" },
      { client: "B2B Software Company", result: "$12M pipeline generated in 12 months" }
    ]
  },
  {
    icon: <PenTool className="w-8 h-8 text-white" />,
    description: "We specialize in ultra-premium digital experiences for luxury brands, boutique hotels, and high-end real estate. Every pixel is crafted to reflect exclusivity and convert discerning customers. Our work balances stunning design with performance optimization.",
    successStories: [
      { client: "Luxury Resort Chain", result: "70% increase in direct bookings" },
      { client: "High-end Real Estate Developer", result: "45+ qualified leads from single campaign" },
      { client: "Premium Watch Brand", result: "3x increase in average order value" }
    ]
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    description: "Financial services demand precision, compliance, and trust. We've built custom CRM and lead management systems for wealth management firms, insurance brokers, and fintech startups. Our solutions automate compliance while accelerating customer acquisition.",
    successStories: [
      { client: "Wealth Management Firm", result: "150% increase in lead conversion" },
      { client: "Insurance Brokerage", result: "Automated 80% of follow-up tasks" },
      { client: "Fintech Startup", result: "45% reduction in customer acquisition cost" }
    ]
  }
];

const process = [
  {
    icon: Target,
    title: "Discovery",
    desc: "We analyze your market, competitors, and current performance to identify opportunities."
  },
  {
    icon: Code,
    title: "Strategy",
    desc: "Custom roadmap engineered for your specific goals with clear milestones and KPIs."
  },
  {
    icon: Rocket,
    title: "Execution",
    desc: "Precision implementation with continuous optimization and agile methodology."
  },
  {
    icon: Activity,
    title: "Scale",
    desc: "Amplify what works and explore new opportunities for exponential growth."
  }
];

const benefits = [
  "Performance-based pricing",
  "No long-term contracts",
  "Transparent reporting",
  "Dedicated strategist",
  "Weekly check-ins",
  "Full data ownership"
];

export default Services;