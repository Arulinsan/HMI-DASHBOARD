import React, { useState } from 'react';

// Mock Data
const initialData = [
  { id: 1, nama: 'Ahmad Budi', komisariat: 'Komisariat Teknik', status: 'LK1', indikator: '-' },
  { id: 2, nama: 'Siti Aisyah', komisariat: 'Komisariat FISIP', status: 'LK1', indikator: 'LKK' },
  { id: 3, nama: 'Reza Rahadian', komisariat: 'Komisariat FKIP', status: 'LK2', indikator: 'SC' },
  { id: 4, nama: 'Nurul Hidayah', komisariat: 'Komisariat Teknik', status: 'LK1', indikator: 'LKK' },
  { id: 5, nama: 'Fajar Kurniawan', komisariat: 'Komisariat Hukum', status: 'LK3', indikator: 'SC' },
];

const dashboardStats = {
  total: 120,
  lk1: 70,
  lk2: 30,
  lk3: 20,
};

const DashboardContent: React.FC = () => {
  const [data] = useState(initialData);
  const [filterKomi, setFilterKomi] = useState('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = filterKomi === 'Semua' 
    ? data 
    : data.filter(d => d.komisariat === filterKomi);

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
      {/* Topbar / Hero Section Promo (Foto Pengurus/KAHMI Placeholder) */}
      <div className="bg-gradient-to-r from-[#008000] to-green-500 pt-12 pb-40 px-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Decorative elements representing photo placeholder area */}
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10 w-full max-w-4xl border-2 border-dashed border-white/40 rounded-xl py-12 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm">
          <span className="text-white font-semibold text-lg mb-2">Area Foto Pengurus & KAHMI</span>
          <span className="text-white/80 text-sm">(Akan ditambahkan menyusul)</span>
        </div>
      </div>

      {/* Summary Cards overlapping the hero background */}
      <div className="px-8 -mt-20 mb-12 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-8 py-10 flex justify-around text-center divide-x divide-gray-100 max-w-5xl mx-auto">
          <div className="px-4 w-1/4">
            <p className="text-5xl font-bold text-[#008000] mb-2">{dashboardStats.total}</p>
            <p className="text-gray-500 text-sm font-medium">Total Kader</p>
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

      {/* Section 1: Lorem Ipsum Central Block (Like the Marketplace logos section) */}
      <div className="px-8 mb-16 max-w-5xl mx-auto text-center">
        <h2 className="text-gray-600 mb-8 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mendukung 20+ fitur pengelolaan.</h2>
        <div className="flex flex-wrap justify-center gap-6 opacity-30 grayscale pointer-events-none">
          {/* Placeholder for logos to match the visual vibe */}
          <div className="h-8 w-24 bg-gray-400 rounded"></div>
          <div className="h-8 w-24 bg-gray-400 rounded"></div>
          <div className="h-8 w-24 bg-gray-400 rounded"></div>
          <div className="h-8 w-24 bg-gray-400 rounded"></div>
          <div className="h-8 w-24 bg-gray-400 rounded"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-12 max-w-2xl mx-auto">
          Lorem Ipsum Dolor Sit Amet Menyediakan Solusi Pengelolaan Kader Hanya dengan Satu Sistem!
        </h2>
      </div>

      {/* Section 2: Split Layout (Right Illustration) */}
      <div className="bg-[#EAF6F6] py-16 px-8 mb-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pengelolaan Data Kader</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Scrape dan Salin Massal Produk dan Perluas Bisnis ke e-Commerce Berbeda dengan Satu Klik.</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">AI yang Membantu Edit Massal Informasi Produk dan Meningkatkan Penjualan.</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Sinkronisasi dan Pengelolaan Informasi Produk Antara Marketplace dan Toko Secara Real Time.</p>
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="bg-[#41429B] hover:bg-[#343580] text-white font-medium py-2 px-6 rounded-md text-sm transition-colors">
                Daftar Gratis
              </button>
              <button className="border border-gray-400 text-gray-700 hover:bg-gray-50 font-medium py-2 px-6 rounded-md text-sm transition-colors bg-white">
                Ajukan Demo
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            {/* Placeholder graphic to match the blue right box */}
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

      {/* Section 3: Split Layout (Left Illustration) */}
      <div className="bg-[#F5EDFF] py-16 px-8 mb-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pengelolaan dan Proses Data</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Permudah Proses dan Cetak Label Pengiriman Massal, Efisiensi Penyelesaian Pesanan Meningkat 60%.</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Template Kustomisasi Label Pengiriman, Label Produk dan Invoice (Tampilkan Logo, Kode QR dan Lainnya).</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                <p className="text-sm text-gray-700">Pantau Pesanan Pengembalian COD, Mencegah Paket Hilang dan Percepat Proses Pengembalian Stok.</p>
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="bg-[#41429B] hover:bg-[#343580] text-white font-medium py-2 px-6 rounded-md text-sm transition-colors">
                Daftar Gratis
              </button>
              <button className="border border-gray-400 text-gray-700 hover:bg-gray-50 font-medium py-2 px-6 rounded-md text-sm transition-colors bg-white">
                Ajukan Demo
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
             {/* Placeholder graphic to match the purple left box */}
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

      {/* Keep the Dashboard Table at the bottom as per original specs */}
      <div className="px-8 pb-16 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#008000] hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow transition-colors"
          >
            + Tambah Kader
          </button>
          
          <div className="flex items-center space-x-2">
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
          </div>
        </div>

        {/* Data Preview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-bold text-gray-800">Preview Data Kader</h2>
            <button className="text-sm text-[#008000] hover:underline font-medium">
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
                  <th className="px-6 py-3">Indikator Khusus</th>
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
                    <td className="px-6 py-4">
                      {row.indikator !== '-' ? (
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          row.indikator === 'LKK' 
                            ? 'bg-pink-100 text-pink-700' 
                            : 'bg-indigo-100 text-indigo-700'
                        }`}>
                          {row.indikator}
                        </span>
                      ) : (
                        <span className="text-gray-400 font-medium">-</span>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                      Tidak ada data untuk komisariat ini.
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
