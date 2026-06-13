import React, { useState } from "react";
import logoHmi from "../assets/image/LOGO-HMI.webp";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen = false, onClose }) => {
  const [isKomiOpen, setIsKomiOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Overlay untuk mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <img src={logoHmi} alt="Logo HMI" className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-[#008000]">HMI Cabang</h1>
          </div>
          {/* Tombol close khusus mobile */}
          <button
            onClick={onClose}
            className="md:hidden text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          <button
            onClick={() => handleTabClick("dashboard")}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activeTab === "dashboard"
                ? "bg-green-50 text-[#008000]"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => handleTabClick("data")}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activeTab === "data"
                ? "bg-green-50 text-[#008000]"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Data Kader
          </button>

          {/* Dropdown Komisariat */}
          <div>
            <button
              onClick={() => setIsKomiOpen(!isKomiOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
            >
              <span>Komisariat</span>
              <span className="text-xs">{isKomiOpen ? "▼" : "▶"}</span>
            </button>

            {isKomiOpen && (
              <div className="pl-6 mt-1 space-y-1">
                {["Teknik", "Ekonomi", "Hukum", "Keguruan"].map((komi) => (
                  <button
                    key={komi}
                    onClick={() => handleTabClick(`komi-${komi.toLowerCase()}`)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === `komi-${komi.toLowerCase()}`
                        ? "bg-green-50 text-[#008000]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    - {komi}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleTabClick("tambah")}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activeTab === "tambah"
                ? "bg-green-50 text-[#008000]"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Tambah Kader <span className="ml-2 text-xs opacity-50"></span>
          </button>
        </nav>

        {/* Footer / Tentang */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => handleTabClick("tentang")}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activeTab === "tentang"
                ? "bg-green-50 text-[#008000]"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Tentang
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;