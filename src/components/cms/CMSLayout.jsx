import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const CMSLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#0d0d0f] text-white selection:bg-[#7c7adb] selection:text-white">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default CMSLayout;