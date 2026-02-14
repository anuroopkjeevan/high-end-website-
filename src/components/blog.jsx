import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  ChevronRight,
  Sparkles,
  BookOpen,
  TrendingUp,
  BarChart3,
  Globe,
  Zap,
  Smartphone,
  Layout,
  Code,
  ShoppingCart,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  Eye,
  MessageCircle,
  Share2,
  Bookmark,
  Heart,
  Award,
  Target,
  Rocket,
  PenTool,
  Filter
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

const Blog = ({ handleNavClick, Logo }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
  };

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
            <BookOpen className="w-3.5 h-3.5 text-[#7c7adb]" />
            <span className="text-[#7c7adb] text-xs font-mono tracking-widest uppercase font-bold">
              Insights & Ideas
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-[-0.02em] mb-8 uppercase"
          >
            The Adverra<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
              Blog
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-light tracking-wide"
          >
            Deep dives into digital marketing, growth strategies, and the future of brand building.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div variants={fadeInUp} className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-[#1e1e24] border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7c7adb] focus:ring-1 focus:ring-[#7c7adb] transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* --- Categories Filter --- */}
      <section className="py-8 bg-[#0d0d0f] sticky top-20 z-40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="w-4 h-4 text-[#7c7adb] mr-2" />
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-[#7c7adb] text-white' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- Featured Post --- */}
      {selectedCategory === 'All' && searchQuery === '' && (
        <section className="py-16 lg:py-20 container mx-auto px-6">
          <FeaturedPost post={featuredPost} handleNavClick={handleNavClick} />
        </section>
      )}

      {/* --- Blog Grid --- */}
      <section className="py-16 lg:py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="wait">
            {filteredPosts.slice(0, visiblePosts).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <div className="text-center mt-16">
            <button
              onClick={loadMore}
              className="group px-8 py-4 bg-transparent border-2 border-[#7c7adb] text-white font-bold text-lg rounded-[20px] overflow-hidden transition-all duration-500 hover:bg-[#7c7adb] hover:scale-105 active:scale-95 inline-flex items-center gap-3"
            >
              LOAD MORE ARTICLES <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter</p>
          </motion.div>
        )}
      </section>

      {/* --- Newsletter Section --- */}
      <section className="py-28 lg:py-32 bg-[#0d0d0f] relative rounded-t-[4rem] rounded-b-[4rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c7adb]/10 to-[#4e4c85]/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjQsMTIyLDIxOSwwLjIpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Sparkles className="w-12 h-12 text-[#7c7adb] mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 uppercase">
              Never Miss an<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
                Insight
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light">
              Get the latest strategies, case studies, and industry trends delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-[#1e1e24] border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7c7adb] focus:ring-1 focus:ring-[#7c7adb] transition-all"
              />
              <button
                onClick={() => handleNavClick('contactpage')}
                className="group px-8 py-4 bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_10px_30px_rgba(124,122,219,0.3)] flex items-center justify-center gap-2"
              >
                SUBSCRIBE <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Popular Topics --- */}
      <section className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-black mb-4 uppercase">
            Popular <span className="text-[#7c7adb]">Topics</span>
          </h2>
          <p className="text-gray-500">Explore our most read categories</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {topics.map((topic, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedCategory(topic.name)}
              className="group p-6 rounded-2xl bg-[#1e1e24] border border-white/5 hover:border-[#7c7adb]/30 transition-all duration-300 text-center"
            >
              <topic.icon className="w-6 h-6 text-[#7c7adb] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-bold uppercase tracking-wider text-white">{topic.name}</p>
              <p className="text-[10px] text-gray-500 mt-1">{topic.count} articles</p>
            </motion.button>
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

// --- Featured Post Component ---
const FeaturedPost = ({ post, handleNavClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative group cursor-pointer"
    onClick={() => handleNavClick('blogpost', post.id)}
  >
    <div className="grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-r from-[#1e1e24] to-[#1a1a20] rounded-[3rem] overflow-hidden border border-white/5 p-2">
      <div className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent z-10" />
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-2 bg-[#7c7adb] rounded-full text-xs font-bold text-white uppercase tracking-wider">
            Featured
          </span>
        </div>
      </div>
      
      <div className="p-8 lg:p-12">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {post.readTime}
          </span>
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tight">
          {post.title}
        </h3>
        
        <p className="text-gray-400 text-lg mb-6 font-light">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c7adb] to-[#a3a1f7] p-[2px]">
              <div className="w-full h-full rounded-full bg-[#1e1e24] flex items-center justify-center">
                <span className="text-white font-bold text-sm">{post.author.charAt(0)}</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-white">{post.author}</p>
              <p className="text-xs text-gray-500">{post.authorRole}</p>
            </div>
          </div>
          
          <button className="group/btn w-14 h-14 rounded-full bg-[#7c7adb]/10 hover:bg-[#7c7adb] transition-all duration-300 flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-[#7c7adb] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Blog Card Component ---
const BlogCard = ({ post, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group cursor-pointer"
  >
    <div className="bg-[#1e1e24] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#7c7adb]/30 transition-all duration-500 h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#7c7adb]/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
            {post.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#7c7adb] transition-colors">
            <Bookmark className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-black mb-3 text-white uppercase tracking-tight group-hover:text-[#7c7adb] transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 font-light line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-[10px] font-bold text-gray-600 uppercase tracking-wider bg-white/5 px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
          {post.tags.length > 2 && (
            <span className="text-[10px] font-bold text-gray-600">+{post.tags.length - 2}</span>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7c7adb] to-[#a3a1f7] p-[1px]">
              <div className="w-full h-full rounded-full bg-[#1e1e24] flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">{post.author.charAt(0)}</span>
              </div>
            </div>
            <span className="text-xs font-bold text-white">{post.author}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Eye className="w-3 h-3" /> {post.views}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Heart className="w-3 h-3" /> {post.likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  </motion.article>
);

// --- Data ---
const featuredPost = {
  id: 'featured-1',
  title: 'The Future of Digital Marketing: AI, Privacy, and Personalization',
  excerpt: 'How forward-thinking brands are navigating the post-cookie era with first-party data and machine learning.',
  image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop',
  category: 'Trends',
  date: 'Mar 15, 2025',
  readTime: '8 min read',
  author: 'Alex Rivera',
  authorRole: 'Chief Strategy Officer',
  tags: ['AI', 'Privacy', 'Data', 'Trends'],
  views: '2.4k',
  likes: 342
};

const blogPosts = [
  {
    id: 1,
    title: 'SEO in 2025: Why Entity Authority Matters More Than Backlinks',
    excerpt: 'Google\'s shift to semantic search means it\'s time to rethink your entire SEO strategy. Here\'s what works now.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    category: 'SEO',
    date: 'Mar 10, 2025',
    readTime: '6 min read',
    author: 'Sarah Chen',
    authorRole: 'SEO Director',
    tags: ['SEO', 'Google', 'Entity', 'Ranking'],
    views: '1.8k',
    likes: 234
  },
  {
    id: 2,
    title: 'From 0 to 7 Figures: A D2C Brand\'s Journey with Performance Marketing',
    excerpt: 'Case study: How a supplement brand scaled to $10M+ in revenue using our full-funnel approach.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop',
    category: 'Case Study',
    date: 'Mar 5, 2025',
    readTime: '10 min read',
    author: 'Marcus Webb',
    authorRole: 'Performance Marketing Lead',
    tags: ['D2C', 'Scaling', 'Meta Ads', 'Google Ads'],
    views: '3.2k',
    likes: 456
  },
  {
    id: 3,
    title: 'Odoo vs. Salesforce: Choosing the Right CRM for Your Business',
    excerpt: 'A comprehensive comparison of features, pricing, and scalability for growing companies.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    category: 'CRM',
    date: 'Feb 28, 2025',
    readTime: '7 min read',
    author: 'Priya Patel',
    authorRole: 'CRM Specialist',
    tags: ['Odoo', 'Salesforce', 'CRM', 'Comparison'],
    views: '1.2k',
    likes: 167
  },
  {
    id: 4,
    title: 'Headless Commerce: Is It Right for Your Brand?',
    excerpt: 'The pros and cons of decoupled architectures and when to make the leap from traditional platforms.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop',
    category: 'E-commerce',
    date: 'Feb 20, 2025',
    readTime: '9 min read',
    author: 'David Kim',
    authorRole: 'Technical Director',
    tags: ['Headless', 'Shopify', 'E-commerce', 'Architecture'],
    views: '2.1k',
    likes: 289
  },
  {
    id: 5,
    title: 'LinkedIn Ads for B2B: A Data-Driven Playbook',
    excerpt: 'How we generated $12M in pipeline for a SaaS client using hyper-targeted LinkedIn campaigns.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    category: 'Paid Media',
    date: 'Feb 15, 2025',
    readTime: '8 min read',
    author: 'James Wilson',
    authorRole: 'B2B Strategist',
    tags: ['LinkedIn', 'B2B', 'SaaS', 'Lead Gen'],
    views: '1.5k',
    likes: 198
  },
  {
    id: 6,
    title: 'The Psychology of Color in Luxury Branding',
    excerpt: 'How premium brands use color psychology to signal status and command higher prices.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop',
    category: 'Branding',
    date: 'Feb 10, 2025',
    readTime: '5 min read',
    author: 'Elena Rossi',
    authorRole: 'Creative Director',
    tags: ['Luxury', 'Branding', 'Psychology', 'Design'],
    views: '3.8k',
    likes: 567
  },
  {
    id: 7,
    title: 'Mobile App ASO: Ranking in 2025',
    excerpt: 'App Store Optimization strategies that drive organic downloads in an increasingly crowded market.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    category: 'Mobile',
    date: 'Feb 5, 2025',
    readTime: '6 min read',
    author: 'Michael Chang',
    authorRole: 'Mobile Lead',
    tags: ['ASO', 'App Store', 'iOS', 'Android'],
    views: '900',
    likes: 123
  },
  {
    id: 8,
    title: 'Zero-Party Data: Building Trust While Personalizing',
    excerpt: 'How leading brands are collecting data directly from customers to fuel personalization without privacy concerns.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop',
    category: 'Data',
    date: 'Jan 28, 2025',
    readTime: '7 min read',
    author: 'Olivia Martinez',
    authorRole: 'Data Strategist',
    tags: ['Privacy', 'Data', 'Personalization', 'GDPR'],
    views: '1.1k',
    likes: 145
  },
  {
    id: 9,
    title: 'The ROI of UX: Why Good Design is a Growth Driver',
    excerpt: 'Quantifying the business impact of user experience improvements on conversion and retention.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    category: 'UX',
    date: 'Jan 20, 2025',
    readTime: '8 min read',
    author: 'Thomas Wright',
    authorRole: 'UX Director',
    tags: ['UX', 'Design', 'Conversion', 'ROI'],
    views: '2.3k',
    likes: 312
  }
];

const topics = [
  { name: 'SEO', icon: BarChart3, count: 12 },
  { name: 'Paid Media', icon: Zap, count: 8 },
  { name: 'E-commerce', icon: ShoppingCart, count: 15 },
  { name: 'CRM', icon: Target, count: 6 },
  { name: 'Analytics', icon: TrendingUp, count: 9 },
  { name: 'Mobile', icon: Smartphone, count: 7 }
];

export default Blog;