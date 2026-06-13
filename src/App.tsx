import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
<div className="flex h-screen overflow-hidden">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header mobile dengan tombol hamburger */}
        <header className="md:hidden h-14 flex items-center px-4 border-b border-gray-200 bg-white">
          <button
            className="p-2 text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <span className="ml-2 font-bold text-[#008000]">HMI Cabang</span>
        </header>

        <DashboardContent />
      </div>
    </div>
  );
}

export default App;
