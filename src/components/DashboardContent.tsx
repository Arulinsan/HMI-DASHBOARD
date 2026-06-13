import React, { useState } from 'react';
import PengurusKahmiGallery, { placeholderPengurusKahmiRows } from './PengurusKahmiGallery';

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

  const getStatusColor = (status:string) => {
    switch (status) {
      case "LK1":
        return "bg-sky-100 text-sky-700";
      case "LK2":
        return "bg-amber-100 text-amber-700";
      case "LK3":
        return "bg-emerald-100 text-emerald-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#008000] to-green-500 pt-10 pb-36 px-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10 w-full max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sistem Database Kader HMI Cabang
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Kelola data kader, komisariat, dan progres kaderisasi dalam satu dashboard.
          </p>
          <div className="mt-8 space-y-4 w-full max-w-4xl mx-auto">
            <div className="border-2 border-dashed border-white/30 rounded-xl py-8 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm">
              <span className="text-white/90 font-medium text-sm mb-1">Area Foto Pengurus & KAHMI</span>
              <span className="text-white/60 text-xs">(Akan ditambahkan menyusul)</span>
            </div>
            <div className="border-2 border-dashed border-white/30 rounded-xl py-8 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm">
              <span className="text-white/90 font-medium text-sm mb-1">Area Banner & Profil Cabang</span>
              <span className="text-white/60 text-xs">(Akan ditambahkan menyusul)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards overlapping the hero background */}
      <div className="px-6 sm:px-8 -mt-16 mb-6 relative z-20 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 py-10 flex justify-around text-center divide-x divide-gray-100 w-full">
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

      {/* Pengurus & KAHMI Gallery */}
      <div className="px-6 sm:px-8 mb-10 relative z-10 max-w-6xl mx-auto">
        <PengurusKahmiGallery
          rows={placeholderPengurusKahmiRows}
          subtitle="Kenali Pengurus dan Anggota KAHMI HMI Cabang — Mendukung pengelolaan organisasi yang solid dan terstruktur."
        />
      </div>

      {/* Section 1: Kelola Data Kader */}
      <div className="bg-[#EAF6F6] py-16 px-8 mb-4">
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
      <div className="bg-[#F5EDFF] py-16 px-8 mb-8">
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
      
      <div id="data-kader-table" className="max-w-7xl mx-auto px-6 pb-16">
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 py-5 border-b border-gray-100">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Data Kader Terbaru
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Menampilkan daftar kader berdasarkan filter yang dipilih.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <select
          value={filterKomi}
          onChange={(e) => setFilterKomi(e.target.value)}
          className="h-10 rounded-lg border border-gray-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="Semua">Semua Komisariat</option>
          <option value="Komisariat Teknik">Teknik</option>
          <option value="Komisariat FISIP">FISIP</option>
          <option value="Komisariat FKIP">FKIP</option>
          <option value="Komisariat Hukum">Hukum</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="h-10 rounded-lg border border-gray-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="Semua">Semua Status</option>
          <option value="LK1">LK1</option>
          <option value="LK2">LK2</option>
          <option value="LK3">LK3</option>
        </select>

        <button
          onClick={scrollToTable}
          className="h-10 px-4 rounded-lg bg-green-700 text-white text-sm hover:bg-green-800 transition"
        >
          Lihat Semua
        </button>
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 text-left text-xs uppercase tracking-wider text-gray-500">
            <th className="px-6 py-4">Nama</th>
            <th className="px-6 py-4">Komisariat</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Angkatan</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((row) => (
            <tr
              key={row.id}
              className="border-t border-gray-100 hover:bg-gray-50 transition"
            >
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-semibold text-green-700">
                    {row.nama.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      {row.nama}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-6 py-5 text-gray-600">
                {row.komisariat}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                    row.status
                  )}`}
                >
                  {row.status}
                </span>
              </td>

              <td className="px-6 py-5 text-gray-600">
                {row.angkatan}
              </td>
            </tr>
          ))}

          {filteredData.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="py-12 text-center text-gray-400"
              >
                Tidak ada data yang sesuai filter.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
  );
};

export default DashboardContent;
