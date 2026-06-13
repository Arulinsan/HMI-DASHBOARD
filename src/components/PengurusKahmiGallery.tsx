import React from 'react';
import { User } from 'lucide-react';

export interface AnggotaPengurus {
  id: number;
  nama: string;
  jabatan: string;
  foto?: string;
}

interface PengurusKahmiGalleryProps {
  rows: AnggotaPengurus[][];
  subtitle?: string;
}

const GALLERY_ROW_SIZES = [8, 7, 5] as const;

const MemberAvatar: React.FC<{ member: AnggotaPengurus }> = ({ member }) => (
  <div className="flex flex-col items-center gap-1.5 w-[56px] sm:w-[64px] md:w-[72px] shrink-0">
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-200 flex items-center justify-center shrink-0">
      {member.foto ? (
        <img
          src={member.foto}
          alt={member.nama}
          className="w-full h-full object-cover"
        />
      ) : (
        <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" strokeWidth={1.5} />
      )}
    </div>
    <div className="text-center w-full">
      <p className="text-[10px] sm:text-[11px] font-medium text-gray-700 truncate leading-tight">
        {member.nama}
      </p>
      <p className="text-[9px] sm:text-[10px] text-gray-400 truncate leading-tight">
        {member.jabatan}
      </p>
    </div>
  </div>
);

const PengurusKahmiGallery: React.FC<PengurusKahmiGalleryProps> = ({
  rows,
  subtitle = 'Kenali Pengurus dan Anggota KAHMI HMI Cabang — foto akan ditambahkan menyusul.',
}) => (
  <div className="w-full bg-white rounded-xl shadow-lg px-5 sm:px-8 py-6 sm:py-7">
    <p className="text-center text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6 leading-relaxed max-w-3xl mx-auto">
      {subtitle}
    </p>
    <div className="overflow-x-auto pb-1 -mx-1 px-1">
      <div className="flex flex-col items-center gap-y-5 sm:gap-y-6 min-w-max sm:min-w-0 w-full sm:w-auto mx-auto">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="flex flex-nowrap justify-center items-start gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10"
            aria-label={`Baris ${rowIdx + 1}, ${row.length} anggota`}
          >
            {row.map((member) => (
              <MemberAvatar key={member.id} member={member} />
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const placeholderPengurusKahmiRows: AnggotaPengurus[][] = [
  // Baris 1 — 8 pengurus
  [
    { id: 1, nama: 'Pengurus 1', jabatan: 'Ketua' },
    { id: 2, nama: 'Pengurus 2', jabatan: 'Wakil Ketua' },
    { id: 3, nama: 'Pengurus 3', jabatan: 'Sekretaris' },
    { id: 4, nama: 'Pengurus 4', jabatan: 'Bendahara' },
    { id: 5, nama: 'Pengurus 5', jabatan: 'Bidang Kaderisasi' },
    { id: 6, nama: 'Pengurus 6', jabatan: 'Bidang Organisasi' },
    { id: 7, nama: 'Pengurus 7', jabatan: 'Bidang Humas' },
    { id: 8, nama: 'Pengurus 8', jabatan: 'Bidang Advokasi' },
  ],
  // Baris 2 — 7 KAHMI
  [
    { id: 9, nama: 'KAHMI 1', jabatan: 'Anggota' },
    { id: 10, nama: 'KAHMI 2', jabatan: 'Anggota' },
    { id: 11, nama: 'KAHMI 3', jabatan: 'Anggota' },
    { id: 12, nama: 'KAHMI 4', jabatan: 'Anggota' },
    { id: 13, nama: 'KAHMI 5', jabatan: 'Anggota' },
    { id: 14, nama: 'KAHMI 6', jabatan: 'Anggota' },
    { id: 15, nama: 'KAHMI 7', jabatan: 'Anggota' },
  ],
  // Baris 3 — 5 KAHMI
  [
    { id: 16, nama: 'KAHMI 8', jabatan: 'Anggota' },
    { id: 17, nama: 'KAHMI 9', jabatan: 'Anggota' },
    { id: 18, nama: 'KAHMI 10', jabatan: 'Anggota' },
    { id: 19, nama: 'KAHMI 11', jabatan: 'Anggota' },
    { id: 20, nama: 'KAHMI 12', jabatan: 'Anggota' },
  ],
];

export { GALLERY_ROW_SIZES };

export default PengurusKahmiGallery;
