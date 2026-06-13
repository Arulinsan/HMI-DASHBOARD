import React, { useState } from 'react';
import PengurusKahmiGallery, { placeholderPengurusKahmiRows } from './PengurusKahmiGallery';
import sriBaduga from "../assets/image/sribaduga.jpeg";
import anggotaHmi from "../assets/image/anggota_hmi.jpeg";
import hmiFlag from "../assets/image/HMI_indo.png";
import teaching from "../assets/image/teacher.png";

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
    <div className="flex-1 overflow-y-auto bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <div
        className="relative bg-cover bg-center bg-no-repeat pt-12 sm:pt-16 pb-28 sm:pb-40 px-4 sm:px-8 text-center"
        style={{
          backgroundImage: `url(${sriBaduga})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900/70"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Sistem Database Kader HMI Cabang
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Kelola data kader, komisariat, dan progres kaderisasi
            secara terpusat dalam satu dashboard yang modern,
            cepat, dan mudah digunakan.
          </p>
        </div>
      </div>

      {/* ================= SUMMARY CARD ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-20 mb-8 sm:mb-10">

        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4">

          <div className="py-6 sm:py-8 text-center border-r border-b md:border-b-0 px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600">
              {dashboardStats.total}
            </h2>
            <p className="mt-2 text-gray-500 text-xs sm:text-sm">
              Total Kader Aktif
            </p>
            <p className="text-xs text-green-600 mt-1">
              +{dashboardStats.bulanIni} bulan ini
            </p>
          </div>

          <div className="py-6 sm:py-8 text-center border-b md:border-b-0 md:border-r px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">
              {dashboardStats.lk1}
            </h2>
            <p className="mt-2 text-gray-500 text-xs sm:text-sm">
              LK I
            </p>
          </div>

          <div className="py-6 sm:py-8 text-center border-r px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500">
              {dashboardStats.lk2}
            </h2>
            <p className="mt-2 text-gray-500 text-xs sm:text-sm">
              LK II
            </p>
          </div>

          <div className="py-6 sm:py-8 text-center px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-600">
              {dashboardStats.lk3}
            </h2>
            <p className="mt-2 text-gray-500 text-xs sm:text-sm">
              LK III
            </p>
          </div>

        </div>
      </div>

      {/* ================= FOTO PELANTIKAN ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <img
            src={anggotaHmi}
            alt="Pelantikan Pengurus HMI"
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover"
          />

          <div className="p-5 sm:p-8">

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              Dokumentasi Pelantikan Pengurus HMI Cabang
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-7">
              Dokumentasi kegiatan pelantikan pengurus sebagai bagian
              dari proses kaderisasi, regenerasi kepemimpinan, dan
              penguatan organisasi HMI Cabang. Foto ini menjadi
              representasi aktivitas dan perjalanan organisasi dalam
              membangun kader yang berkualitas.
            </p>

          </div>

        </div>

      </div>

      {/* Section 1: Kelola Data Kader */}
      <div className="bg-[#EAF6F6] py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Kelola Data Kader Lebih Rapi
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-7 mb-6 sm:mb-8">
              Input, edit, dan pantau data kader secara terpusat sehingga administrasi
              organisasi menjadi lebih tertata dan mudah diakses.
            </p>

            {/* list tetap */}
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={hmiFlag}
                alt=""
                className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Pantau Progres Kaderisasi */}
      <div className="bg-blue-100 py-12 sm:py-20 px-4 sm:px-8 mb-8 sm:mb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Pantau Progres Kaderisasi
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-7 mb-6 sm:mb-8">
              Monitoring perjalanan kader mulai dari pelatihan hingga evaluasi secara
              terstruktur dalam satu dashboard.
            </p>

            {/* list tetap */}
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
              <img
                src={teaching}
                alt=""
                className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Data Kader Terbaru */}
      <div id="data-kader-table" className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Header */}
          <div className="flex flex-col gap-4 px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Data Kader Terbaru
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Menampilkan daftar kader berdasarkan filter yang dipilih.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <select
                value={filterKomi}
                onChange={(e) => setFilterKomi(e.target.value)}
                className="h-10 rounded-lg border border-gray-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 w-full sm:w-auto"
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
                className="h-10 rounded-lg border border-gray-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 w-full sm:w-auto"
              >
                <option value="Semua">Semua Status</option>
                <option value="LK1">LK1</option>
                <option value="LK2">LK2</option>
                <option value="LK3">LK3</option>
              </select>

              <button
                onClick={scrollToTable}
                className="h-10 px-4 rounded-lg bg-green-700 text-white text-sm hover:bg-green-800 transition w-full sm:w-auto"
              >
                Lihat Semua
              </button>
            </div>
          </div>

          {/* Table - Desktop */}
          <div className="hidden md:block overflow-x-auto">
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

          {/* Table - Mobile (Card view) */}
          <div className="md:hidden p-4 space-y-3 bg-gray-50">
  {filteredData.map((row) => (
    <div
      key={row.id}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 active:scale-[0.98] transition-transform"
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center font-bold text-white text-lg shadow-sm">
          {row.nama.charAt(0)}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className="font-semibold text-gray-800 text-sm leading-tight">
              {row.nama}
            </p>
            <span
              className={`shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusColor(
                row.status
              )}`}
            >
              {row.status}
            </span>
          </div>

          <p className="text-xs text-gray-500 mt-1">
            {row.komisariat}
          </p>

          <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Angkatan {row.angkatan}</span>
          </div>
        </div>
      </div>
    </div>
  ))}

  {filteredData.length === 0 && (
    <div className="py-12 text-center">
      <p className="text-gray-400 text-sm">
        Tidak ada data yang sesuai filter.
      </p>
    </div>
  )}
</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;