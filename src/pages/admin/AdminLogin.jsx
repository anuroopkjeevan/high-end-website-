// src/pages/admin/AdminLogin.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Mail, 
  Lock, 
  Shield, 
  ArrowRight,
  Sparkles,
  Eye,
  EyeOff,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

// Animation Variants
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

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await login(username, password);
      
      if (result.success) {
        navigate('/admin/dashboard');
      } else {
        setError(result.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121214] text-white font-sans selection:bg-[#7c7adb] selection:text-white overflow-x-hidden flex items-center justify-center">
      
      {/* Premium Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#7c7adb]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#4e4c85]/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]"
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'60\' height=\'60\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 60 0 L 0 0 0 60\' fill=\'none\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'0.3\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="bg-[#1e1e24] rounded-[2.5rem] border border-white/[0.05] p-8 lg:p-10 shadow-2xl backdrop-blur-xl"
        >
          {/* Logo & Header */}
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#7c7adb] to-[#a3a1f7] rounded-[1.2rem] flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
            </div>
            
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-[#7c7adb]/20 bg-[#7c7adb]/5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#7c7adb]" />
              <span className="text-[#7c7adb] text-xs font-mono tracking-widest uppercase font-bold">
                CMS Access
              </span>
            </motion.div>
            
            <h2 className="text-3xl lg:text-4xl font-black mb-2 uppercase tracking-tight">
              Welcome Back
            </h2>
            <p className="text-gray-400 text-sm font-light">
              Login with your Django admin/staff credentials
            </p>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </motion.div>
          )}

          {/* Login Form */}
          <motion.form 
            variants={fadeInUp}
            onSubmit={handleLogin}
            className="space-y-5"
          >
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">
                Username or Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#7c7adb] transition-colors duration-300" />
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-[#0d0d0f] border border-white/[0.05] rounded-xl 
                           text-white placeholder-gray-600 font-light
                           focus:outline-none focus:border-[#7c7adb]/30 focus:ring-2 focus:ring-[#7c7adb]/10
                           transition-all duration-300"
                  placeholder="admin or admin@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#7c7adb] transition-colors duration-300" />
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-[#0d0d0f] border border-white/[0.05] rounded-xl 
                           text-white placeholder-gray-600 font-light
                           focus:outline-none focus:border-[#7c7adb]/30 focus:ring-2 focus:ring-[#7c7adb]/10
                           transition-all duration-300"
                  placeholder="••••••••"
                  required
                  minLength={1}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#7c7adb] transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm py-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input 
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border rounded-md transition-all duration-300 flex items-center justify-center
                                  ${rememberMe 
                                    ? 'bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] border-[#7c7adb]' 
                                    : 'border-white/10 bg-white/5 group-hover:border-white/20'}`}>
                    {rememberMe && <ChevronRight className="w-3 h-3 text-white rotate-45" />}
                  </div>
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  Remember me
                </span>
              </label>
              
              <span className="text-gray-500 text-xs">Staff users only</span>
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="group relative w-full mt-6 px-8 py-4 bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] 
                       text-white font-bold text-lg rounded-xl overflow-hidden 
                       transition-all duration-500 hover:scale-[1.02] 
                       shadow-[0_10px_30px_rgba(124,122,219,0.3)] 
                       hover:shadow-[0_20px_40px_rgba(124,122,219,0.4)]
                       active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isLoading ? (
                  <>Logging in...</>
                ) : (
                  <>
                    Access Dashboard
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
            </button>
          </motion.form>

          {/* Access Instructions */}
          <motion.div 
            variants={fadeInUp}
            className="mt-8 p-4 bg-[#7c7adb]/5 border border-[#7c7adb]/10 rounded-xl"
          >
            <p className="text-xs text-gray-400 text-center">
              <span className="text-[#7c7adb] font-bold">NOTE:</span> Only users with Django
              {' '}<span className="text-[#7c7adb] font-mono">is_staff=True</span>{' '}
              can access the CMS.
            </p>
          </motion.div>

          {/* Footer Note */}
          <motion.div 
            variants={fadeInUp}
            className="mt-8 text-center border-t border-white/[0.02] pt-6"
          >
            <p className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold">
              Powered by{' '}
              <span className="bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] bg-clip-text text-transparent font-black">
                Django & React
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
