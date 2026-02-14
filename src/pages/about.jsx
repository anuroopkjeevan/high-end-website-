import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Target, 
  Users, 
  Rocket, 
  Award, 
  Heart, 
  Zap,
  BarChart3,
  Globe,
  Instagram,
  Linkedin,
  Facebook, // Changed from Twitter to Facebook
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Shield,
  TrendingUp
} from 'lucide-react';

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

const About = ({ handleNavClick, Logo }) => {
  return (
    <div className="min-h-screen bg-[#121214] text-white font-sans selection:bg-[#7c7adb] selection:text-white overflow-x-hidden">
      
      {/* --- Premium Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#7c7adb]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#4e4c85]/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]"
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'60\' height=\'60\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 60 0 L 0 0 0 60\' fill=\'none\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'0.3\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")' }} />
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
              About Adverra Hub
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-[-0.02em] mb-8 uppercase"
          >
            We Don't Just<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
              Engineer Growth
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-light tracking-wide"
          >
            A collective of digital architects, SEO strategists, and creative technologists 
            obsessed with one thing: making your brand impossible to ignore.
          </motion.p>
        </motion.div>
      </section>

      {/* --- Stats Section - Premium Minimal --- */}
      <section className="py-20 bg-[#0d0d0f] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {[
                { number: "25+", label: "Enterprise Clients", icon: Users },
                { number: "98%", label: "Client Retention", icon: Heart },
                { number: "240%", label: "Avg. Traffic Growth", icon: TrendingUp }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7c7adb]/10 to-[#a3a1f7]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-8 h-8 text-[#7c7adb]" />
                  </div>
                  <p className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Story Section - Enhanced --- */}
      <section className="py-28 lg:py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-[#7c7adb]" />
              <span className="text-[#7c7adb] font-black text-sm tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-8 uppercase tracking-tight">
              Born From A<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
                Rebellious Idea
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
              <p>
                In 2019, we noticed something broken in the digital marketing world. 
                Agencies were selling smoke and mirrors—vanity metrics, keyword stuffing, 
                and hollow promises. We founded Adverra Hub to do the opposite.
              </p>
              <p>
                We believe in data over ego. Substance over flash. Long-term dominance 
                over short-term hacks. Today, we're a lean team of 15+ specialists serving 
                25+ brands across retail, tech, and luxury sectors.
              </p>
              <div className="relative">
                <p className="text-white text-xl font-medium italic pl-8 py-4 relative">
                  <span className="absolute left-0 top-0 text-6xl text-[#7c7adb]/30">"</span>
                  We don't just manage campaigns—we architect digital ecosystems that 
                  generate sustainable, scalable growth.
                  <span className="absolute bottom-0 right-0 text-6xl text-[#7c7adb]/30">"</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#1e1e24] p-4 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7c7adb]/20 via-transparent to-[#a3a1f7]/20 opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" 
                alt="Team Collaboration" 
                className="rounded-[2rem] w-full h-auto object-cover"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-[#1e1e24]/90 backdrop-blur-xl border border-[#7c7adb]/30 p-6 rounded-[2rem] shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#7c7adb] to-[#a3a1f7] rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Established</p>
                  <p className="font-black text-3xl text-white">2019</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Values Section - Premium Cards --- */}
      <section className="py-28 lg:py-32 bg-[#0d0d0f] relative rounded-t-[4rem] rounded-b-[4rem]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#7c7adb] font-black text-sm tracking-[0.3em] uppercase mb-6 block">
              Our DNA
            </span>
            <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase">
              Principles We<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
                Never Compromise
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Target,
                title: "Data-First",
                desc: "Every decision backed by cold, hard numbers—not gut feelings."
              },
              {
                icon: Zap,
                title: "Velocity",
                desc: "We move fast, adapt faster, and never settle for 'good enough.'"
              },
              {
                icon: Users,
                title: "Partnership",
                desc: "Your growth is our growth. We win together or not at all."
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Radical transparency. No hidden fees, no inflated metrics."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group p-8 lg:p-10 rounded-[2rem] bg-[#1e1e24] border border-white/5 
                         hover:border-[#7c7adb]/30 transition-all duration-700 
                         hover:shadow-[0_20px_40px_rgba(124,122,219,0.1)]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#7c7adb]/10 to-[#a3a1f7]/10 
                              rounded-[1.2rem] flex items-center justify-center mb-6 
                              group-hover:scale-110 transition-all duration-500
                              group-hover:bg-gradient-to-br group-hover:from-[#7c7adb] group-hover:to-[#a3a1f7]">
                  <value.icon className="w-8 h-8 text-[#7c7adb] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter">
                  {value.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section - Premium Minimal --- */}
      <section className="py-28 lg:py-32 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#7c7adb]" />
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/60">
              Let's work together
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black mb-8 uppercase leading-[1.1] tracking-[-0.02em]">
            Ready To Write Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
              Growth Story?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg lg:text-xl mb-12 font-light max-w-2xl mx-auto">
            Join 25+ premium brands that trusted us with their digital destiny.
          </p>
          
          <button 
            onClick={() => handleNavClick('contactpage')}
            className="group relative px-10 py-5 bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] 
                     text-white font-bold text-lg rounded-[20px] overflow-hidden 
                     transition-all duration-500 hover:scale-105 
                     shadow-[0_10px_30px_rgba(124,122,219,0.3)] 
                     hover:shadow-[0_20px_40px_rgba(124,122,219,0.4)]
                     active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
          </button>
        </motion.div>
      </section>

      {/* --- Premium Footer --- */}
      <footer className="bg-[#1e1e24] text-white pt-24 pb-12 rounded-t-[4rem] border-t border-white/[0.02] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#7c7adb]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 mb-20">
            <div>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
                LET'S BUILD<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
                  TOGETHER.
                </span>
              </h2>
              <button 
                onClick={() => handleNavClick('contactpage')}
                className="group bg-white text-black px-10 py-5 rounded-[1.5rem] font-bold text-lg 
                         hover:bg-gradient-to-r hover:from-[#7c7adb] hover:to-[#a3a1f7] 
                         hover:text-white transition-all duration-500 flex items-center gap-3 
                         shadow-2xl hover:scale-105"
              >
                Get In Touch 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="font-black uppercase text-xs tracking-[0.2em] text-[#7c7adb]">
                  Contact
                </p>
                <div className="space-y-3">
                  <p className="font-medium text-lg text-white/80 hover:text-white transition-colors cursor-pointer">
                    info@averrahub.com
                  </p>
                  <p className="font-medium text-lg text-white/80 hover:text-white transition-colors cursor-pointer">
                    +91 7560807374
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="font-black uppercase text-xs tracking-[0.2em] text-[#7c7adb]">
                  Studio
                </p>
                <p className="font-medium text-lg text-gray-400">
                  Wayanad & Calicut
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.02] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/20">
              © 2025 ADVERRA HUB. DESIGNED FOR GROWTH.
            </p>
            <div className="flex gap-8">
              <a 
                href="https://www.instagram.com/adverra_hub/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group cursor-pointer hover:text-[#7c7adb] transition-colors"
              >
                <Instagram className="w-4 h-4 text-white/30 group-hover:text-[#7c7adb] transition-all duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/company/adverrahub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group cursor-pointer hover:text-[#7c7adb] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white/30 group-hover:text-[#7c7adb] transition-all duration-300" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61578278429066" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group cursor-pointer hover:text-[#7c7adb] transition-colors"
              >
                <Facebook className="w-4 h-4 text-white/30 group-hover:text-[#7c7adb] transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;