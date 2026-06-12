import React, { useState } from 'react';

// Mock Data
const initialData = [
  { id: 1, nama: 'Ahmad Budi', komisariat: 'Komisariat Teknik', status: 'LK1', angkatan: '2023' },
  { id: 2, nama: 'Siti Aisyah', komisariat: 'Komisariat FISIP', status: 'LK1', angkatan: '2024' },
  { id: 3, nama: 'Reza Rahadian', komisariat: 'Komisariat FKIP', status: 'LK2', angkatan: '2022' },
  { id: 4, nama: 'Nurul Hidayah', komisariat: 'Komisariat Teknik', status: 'LK1', angkatan: '2024' },
  { id: 5, nama: 'Fajar Kurniawan', komisariat: 'Komisariat Hukum', status: 'LK3', angkatan: '2021' },
];

const dashboardStats = {
  total: 120,
  lk1: 70,
  lk2: 30,
  lk3: 20,
  bulanIni: 5,
};

const DashboardContent: React.FC = () => {
  const [data] = useState(initialData);
  const [filterKomi, setFilterKomi] = useState('Semua');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = data.filter(d => {
    const matchKomi = filterKomi === 'Semua' || d.komisariat === filterKomi;
    const matchStatus = filterStatus === 'Semua' || d.status === filterStatus;
    return matchKomi && matchStatus;
  });

  const scrollToTable = () => {
    document.getElementById('data-kader-table')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LK1': return 'bg-blue-100 text-blue-800';
      case 'LK2': return 'bg-yellow-100 text-yellow-800';
      case 'LK3': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#008000] to-green-500 pt-12 pb-40 px-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10 w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sistem Database Kader HMI Cabang
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Kelola data kader, komisariat, dan progres kaderisasi dalam satu dashboard.
          </p>
          <div className="mt-8 w-full max-w-4xl mx-auto border-2 border-dashed border-white/30 rounded-xl py-8 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm">
            <span className="text-white/90 font-medium text-sm mb-1">Area Foto Pengurus & KAHMI</span>
            <span className="text-white/60 text-xs">(Akan ditambahkan menyusul)</span>
          </div>
        </div>
      </div>

      {/* Summary Cards overlapping the hero background */}
      <div className="px-8 -mt-20 mb-12 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-8 py-10 flex justify-around text-center divide-x divide-gray-100 max-w-5xl mx-auto">
          <div className="px-4 w-1/4">
            <p className="text-5xl font-bold text-[#008000] mb-2">{dashboardStats.total}</p>
            <p className="text-gray-500 text-sm font-medium">Total Kader Aktif</p>
            <p className="text-[#008000] text-xs font-medium mt-1">+{dashboardStats.bulanIni} bulan ini</p>
          </div>
          <div className="px-4 w-1/4">
            <p className="text-5xl font-bold text-blue-500 mb-2">{dashboardStats.lk1}</p>
            <p className="text-gray-500 text-sm font-medium">LK1</p>
          </div>
          <div className="px-4 w-1/4">
            <p className="text-5xl font-bold text-yellow-500 mb-2">{dashboardStats.lk2}</p>
            <p className="text-gray-500 text-sm font-medium">LK2</p>
          </div>
          <div className="px-4 w-1/4">
            <p className="text-5xl font-bold text-green-600 mb-2">{dashboardStats.lk3}</p>
            <p className="text-gray-500 text-sm font-medium">LK3</p>
          </div>
        </div>
      </div>

      {/* Section 1: Kelola Data Kader */}
      <div className="bg-[#EAF6F6] py-16 px-8 mb-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Kelola Data Kader Lebih Rapi</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Input, edit, dan pantau data kader secara terpusat dan real-time.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Tambah dan edit data kader</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Filter berdasarkan komisariat</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Data mudah dicari</p>
              </li>
            </ul>
            <div className="flex gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#41429B] hover:bg-[#343580] text-white font-medium py-2 px-6 rounded-md text-sm transition-colors"
              >
                + Tambah Kader
              </button>
              <button
                onClick={scrollToTable}
                className="border border-gray-400 text-gray-700 hover:bg-gray-50 font-medium py-2 px-6 rounded-md text-sm transition-colors bg-white"
              >
                Lihat Data Kader
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            {/* Placeholder graphic */}
            <div className="w-full max-w-sm h-64 bg-[#00A3FF] rounded-xl shadow-lg relative flex overflow-hidden">
              <div className="w-1/3 bg-[#0CAFFF] h-full flex flex-col gap-4 items-center justify-center p-4">
                <div className="w-8 h-8 rounded-full bg-white opacity-50"></div>
                <div className="w-8 h-8 rounded-full bg-white opacity-50"></div>
                <div className="w-8 h-8 rounded-full bg-white opacity-50"></div>
              </div>
              <div className="flex-1 bg-white/10 h-full p-4 flex flex-col justify-center gap-4">
                <div className="w-full h-12 bg-white rounded shadow-sm"></div>
                <div className="w-full h-24 bg-white rounded shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Pantau Progres Kaderisasi */}
      <div className="bg-[#F5EDFF] py-16 px-8 mb-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pantau Progres Kaderisasi</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Lihat perkembangan kader dari LK1 hingga LK3.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Status kaderisasi</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Distribusi per komisariat</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Rekap evaluasi cabang</p>
              </li>
            </ul>
            <div className="flex gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#41429B] hover:bg-[#343580] text-white font-medium py-2 px-6 rounded-md text-sm transition-colors"
              >
                + Tambah Kader
              </button>
              <button
                onClick={scrollToTable}
                className="border border-gray-400 text-gray-700 hover:bg-gray-50 font-medium py-2 px-6 rounded-md text-sm transition-colors bg-white"
              >
                Lihat Data Kader
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
             {/* Placeholder graphic */}
             <div className="w-full max-w-sm h-64 bg-[#B07BFF] rounded-xl shadow-lg relative p-4 flex flex-col justify-center gap-4">
                <div className="w-full flex gap-4">
                  <div className="w-1/2 h-24 bg-white rounded shadow-sm"></div>
                  <div className="w-1/2 h-24 bg-white rounded shadow-sm"></div>
                </div>
                <div className="w-full h-16 bg-white/20 rounded border border-white/30 backdrop-blur-sm"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Data Kader Terbaru */}
      <div id="data-kader-table" className="px-8 pb-16 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#008000] hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow transition-colors"
          >
            + Tambah Kader
          </button>
          
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-sm text-gray-500">Filter:</span>
            <select
              className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#008000]"
              value={filterKomi}
              onChange={(e) => setFilterKomi(e.target.value)}
            >
              <option value="Semua">Semua Komisariat</option>
              <option value="Komisariat Teknik">Teknik</option>
              <option value="Komisariat FISIP">FISIP</option>
              <option value="Komisariat FKIP">FKIP</option>
              <option value="Komisariat Hukum">Hukum</option>
            </select>
            <select
              className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#008000]"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="Semua">Semua Status</option>
              <option value="LK1">LK1</option>
              <option value="LK2">LK2</option>
              <option value="LK3">LK3</option>
            </select>
          </div>
        </div>

        {/* Data Preview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-bold text-gray-800">Data Kader Terbaru</h2>
            <button
              onClick={scrollToTable}
              className="text-sm text-[#008000] hover:underline font-medium"
            >
              Lihat Semua
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-6 py-3">Nama</th>
                  <th className="px-6 py-3">Komisariat</th>
                  <th className="px-6 py-3">Status Kaderisasi</th>
                  <th className="px-6 py-3">Angkatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-800">{row.nama}</td>
                    <td className="px-6 py-4 text-gray-600">{row.komisariat}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{row.angkatan}</td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                      Tidak ada data yang sesuai filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Tambah Kader (MVP) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-gray-800">Tambah Kader Baru</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                &times;
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#008000]" placeholder="Masukkan nama" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Komisariat</label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#008000]">
                  <option>Pilih Komisariat</option>
                  <option>Teknik</option>
                  <option>FISIP</option>
                  <option>FKIP</option>
                  <option>Hukum</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status Kaderisasi</label>
                  <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#008000]">
                    <option>LK1</option>
                    <option>LK2</option>
                    <option>LK3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Indikator Khusus</label>
                  <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#008000]">
                    <option value="-">- Tidak Ada -</option>
                    <option value="LKK">LKK</option>
                    <option value="SC">SC</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-2">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-[#008000] text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
