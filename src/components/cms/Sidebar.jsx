import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, FileText, Settings, LogOut, Shield, ImagePlus } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Page Manager', icon: FileText, path: '/admin/pages' },
    { name: 'Creatives', icon: ImagePlus, path: '/admin/creatives' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  const handleLogout = async () => {
    await logout();
    navigate('/admin');
  };

  return (
    <motion.aside 
      initial={false}
      animate={{ width: isOpen ? '280px' : '0px', opacity: isOpen ? 1 : 0 }}
      className="bg-[#121214] border-r border-white/[0.05] flex flex-col overflow-hidden whitespace-nowrap sticky top-0 h-screen z-50"
    >
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-[#7c7adb] to-[#a3a1f7] rounded-xl flex items-center justify-center shadow-lg shadow-[#7c7adb]/20">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-black uppercase tracking-tighter">Adverra <span className="text-[#7c7adb]">Hub</span></span>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.name} to={item.path}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                  isActive 
                  ? 'bg-[#7c7adb]/10 text-[#7c7adb] border border-[#7c7adb]/20 shadow-[0_0_20px_rgba(124,122,219,0.1)]' 
                  : 'text-gray-500 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-[#7c7adb]' : ''}`} />
                <span className="text-sm font-bold uppercase tracking-widest">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-white/[0.05]">
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 px-4 py-3 text-gray-500 hover:text-red-400 transition-colors w-full group"
        >
          <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-[0.2em]">Exit System</span>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
