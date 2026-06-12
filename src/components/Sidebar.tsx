import React from "react";
import logoHmi from "../assets/image/LOGO-HMI.webp";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200 space-x-2">
        <img src={logoHmi} alt="Logo HMI" className="h-10 w-auto" />
        <h1 className="text-xl font-bold text-[#008000]">HMI Cabang</h1>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activeTab === "dashboard"
              ? "bg-green-50 text-[#008000]"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab("data")}
          className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activeTab === "data"
              ? "bg-green-50 text-[#008000]"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Data Kader
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
