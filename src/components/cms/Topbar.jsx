import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Topbar = ({ toggleSidebar }) => {
  const { user } = useAuth();
  const displayName = user?.full_name || user?.username || 'Admin User';
  const roleLabel = user?.role ? user.role.toUpperCase() : 'STAFF';

  return (
    <header className="h-20 bg-[#0d0d0f]/80 backdrop-blur-xl border-b border-white/[0.05] px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-6">
        <button onClick={toggleSidebar} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
          <Menu className="w-6 h-6 text-gray-400" />
        </button>
        <div className="hidden md:flex items-center bg-[#121214] border border-white/[0.05] rounded-full px-4 py-2 group focus-within:border-[#7c7adb]/50 transition-all">
          <Search className="w-4 h-4 text-gray-500 group-focus-within:text-[#7c7adb]" />
          <input 
            type="text" 
            placeholder="Search system..." 
            className="bg-transparent border-none focus:ring-0 text-xs ml-2 w-64 text-white placeholder-gray-600"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 relative hover:bg-white/5 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#7c7adb] rounded-full border-2 border-[#0d0d0f]"></span>
        </button>
        <div className="h-8 w-[1px] bg-white/10 mx-2" />
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="text-right">
            <p className="text-xs font-black uppercase tracking-tight">{displayName}</p>
            <p className="text-[10px] text-[#7c7adb] font-mono">{roleLabel}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#1e1e24] border border-white/10 flex items-center justify-center group-hover:border-[#7c7adb]/50 transition-all">
            <User className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
