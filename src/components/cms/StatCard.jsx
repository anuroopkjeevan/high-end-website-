import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, trend, trendValue, color = "#7c7adb" }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative overflow-hidden bg-[#121214] border border-white/[0.05] p-7 rounded-[2rem] group transition-all duration-500 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
    >
      {/* --- Ambient Glow Background --- */}
      <div 
        className="absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
        style={{ backgroundColor: color }}
      />

      <div className="flex justify-between items-start mb-6">
        {/* Icon Container */}
        <div 
          className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] group-hover:scale-110 transition-transform duration-500"
          style={{ color: color }}
        >
          <Icon className="w-6 h-6" />
        </div>

        {/* Trend Indicator */}
        {trend && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold font-mono ${
            trend === 'up' ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'
          }`}>
            {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {trendValue}
          </div>
        )}
      </div>

      {/* Label & Value */}
      <div className="relative z-10">
        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
          {label}
        </p>
        <h3 className="text-3xl font-black tracking-tighter text-white">
          {value}
        </h3>
      </div>
      
      {/* Decorative Progress Bar (Subtle) */}
      <div className="mt-6 h-[2px] w-full bg-white/[0.02] rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full opacity-30"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

export default StatCard;