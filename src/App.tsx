import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {activeTab === 'dashboard' ? (
          <DashboardContent />
        ) : (
          <div className="p-8">
            <h1 className="text-2xl font-bold">Data Kader</h1>
            <p className="mt-4 text-gray-500">Halaman ini sedang dalam pengembangan.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
