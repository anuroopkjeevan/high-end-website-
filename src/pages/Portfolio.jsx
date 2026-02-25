import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Filter, Image as ImageIcon, Instagram, Linkedin, Facebook } from "lucide-react";
import { cmsApi } from "../services/api";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fallbackCreatives = [
  {
    id: 1,
    title: "Luxury Campaign Poster",
    category: "Luxury",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=max",
    link_url: "",
    tile: "large",
  },
  {
    id: 2,
    title: "D2C Product Launch",
    category: "E-commerce",
    image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=max",
    link_url: "",
    tile: "large",
  },
  {
    id: 3,
    title: "Festival Offer Creative",
    category: "Seasonal",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=max",
    link_url: "",
    tile: "large",
  },
  {
    id: 4,
    title: "Real Estate Lead Poster",
    category: "Real Estate",
    image_url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=max",
    link_url: "",
    tile: "large",
  },
  {
    id: 5,
    title: "Restaurant Social Ad",
    category: "Food",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=max",
    link_url: "",
    tile: "large",
  },
  {
    id: 6,
    title: "Brand Awareness Poster",
    category: "Branding",
    image_url: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1400&auto=format&fit=max",
    link_url: "",
    tile: "large",
  },
];

const tileClassMap = {
  large: "md:col-span-6 lg:col-span-3",
  wide: "md:col-span-12 lg:col-span-6",
};

const Portfolio = ({ handleNavClick }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [creativeItems, setCreativeItems] = useState(fallbackCreatives);
  const phoneNumber = "917560807374";
  const whatsappMessage = "Hello! I want to start a campaign for my brand.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const loadCreatives = async () => {
      try {
        const data = await cmsApi.getPublicCreatives();
        if (Array.isArray(data) && data.length > 0) {
          setCreativeItems(data);
        } else {
          setCreativeItems(fallbackCreatives);
        }
      } catch {
        setCreativeItems(fallbackCreatives);
      }
    };

    loadCreatives();
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(creativeItems.map((item) => item.category).filter(Boolean)))],
    [creativeItems]
  );

  const filteredCreatives = useMemo(() => {
    if (activeFilter === "All") return creativeItems;
    return creativeItems.filter((item) => item.category === activeFilter);
  }, [activeFilter, creativeItems]);

  return (
    <div className="min-h-screen bg-[#121214] text-white font-sans selection:bg-[#7c7adb] selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#7c7adb]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#4e4c85]/10 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'60\' height=\'60\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 60 0 L 0 0 0 60\' fill=\'none\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'0.3\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 container mx-auto px-6">
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
            <ImageIcon className="w-3.5 h-3.5 text-[#7c7adb]" />
            <span className="text-[#7c7adb] text-xs font-mono tracking-widest uppercase font-bold">
              Poster Portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-[-0.02em] mb-8 uppercase"
          >
            Creative Work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
              We Ship
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light tracking-wide"
          >
            A selection of poster creatives built for performance campaigns, product launches, and brand awareness.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-8 bg-[#0d0d0f] sticky top-20 z-40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="w-4 h-4 text-[#7c7adb] mr-1" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#7c7adb] text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
          <AnimatePresence>
            {filteredCreatives.map((item, index) => (
              <motion.article
                key={item.id || `${item.image_url}-${index}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`group ${tileClassMap[item.tile] || tileClassMap.large}`}
              >
                <div className="bg-[#1e1e24] rounded-2xl overflow-hidden border border-white/5 hover:border-[#7c7adb]/30 transition-all duration-500 h-full flex flex-col">
                  <div className="relative aspect-[4/3] bg-[#0f0f11]">
                    {item.link_url ? (
                      <a href={item.link_url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img
                          src={item.image_url}
                          alt={item.title || "Portfolio creative"}
                          className="w-full h-full object-contain p-2"
                        />
                      </a>
                    ) : (
                      <img
                        src={item.image_url}
                        alt={item.title || "Portfolio creative"}
                        className="w-full h-full object-contain p-2"
                      />
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight">
            Need Creatives That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
              Actually Convert?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 font-light">
            We can design campaign-ready posters tailored to your audience and channels.
          </p>
          <button
            onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
            className="group px-10 py-5 bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] text-white font-bold text-lg rounded-[20px] transition-all duration-500 hover:scale-105 shadow-[0_10px_30px_rgba(124,122,219,0.3)] inline-flex items-center gap-3"
          >
            Start Your Campaign
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </motion.div>
      </section>

       <footer className="bg-[#1e1e24] text-white pt-24 pb-12 rounded-t-[4rem] border-t border-white/5">
             <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-20 mb-20">
                 <div>
                   <h2 className="text-6xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
                     LET'S BUILD <br/><span className="text-[#7c7adb]">TOGETHER.</span>
                   </h2>
                   <button 
                     onClick={() => window.location.href = `tel:${phoneNumber}`}
                     className="bg-white text-black px-10 py-5 rounded-[1.5rem] font-black text-lg hover:bg-[#7c7adb] hover:text-white transition-all flex items-center gap-2"
                   >
                     Get In Touch <ArrowRight />
                   </button>
                 </div>
     
                 <div className="grid sm:grid-cols-2 gap-12">
                   <div className="space-y-4">
                     <p className="font-black uppercase text-xs tracking-widest text-[#7c7adb]">Contact</p>
                     <p className="font-bold text-lg">info@adverrahub.com</p>
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

export default Portfolio;
