import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const STORAGE_KEY = "almp_lang";

type SupportedLang = "en" | "id";

const getInitialLanguage = (): SupportedLang => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "id") return saved;

  const browser = (navigator.language || "en").toLowerCase();
  return browser.startsWith("id") ? "id" : "en";
};

export const setLanguage = async (lng: SupportedLang) => {
  localStorage.setItem(STORAGE_KEY, lng);
  await i18n.changeLanguage(lng);
};

export const getLanguage = (): SupportedLang => {
  const lng = i18n.language;
  return lng === "id" ? "id" : "en";
};

const resources = {
  en: {
    translation: {
      common: {
        language: "Language",
      },
      nav: {
        home: "Home",
        about: "About",
        products: "Products",
        production: "Production",
        products_capacity: "Production Capacity",
        supplyChain: "Supply Chain",
        quality: "Quality",
        exportInfo: "Export Info",
        sustainability: "Sustainability",
        partnership: "Partnership",
        contact: "Contact",
      },
      hero: {
        pill: "Corporate International Export – Robusta Coffee Lampung",
        headline: "Indonesia’s Leading Robusta Coffee Exporter",
        subHeadline: "Lampung Origin, Export Grade 1–6",
        subline:
          "Processing capacity 20–40 containers/month and export capability up to 230 containers/month (by grade), sourced from 300+ partnered farmers across Sumatra.",
        supplyChain: "Rantai Pasok",
        highlights: {
          facility: "production facility",
          drying: "drying capacity",
          sorting: "sorting & grading system",
          expansion: "Active global expansion",
          expansionCountries:
            "Saudi Arabia, UAE, Egypt, Malaysia, Belgium, Armenia, Ecuador",
        },
        cta: {
          download: "Download Catalogue",
          requestPrice: "Request Price",
          whatsapp: "WhatsApp International Sales",
          viewProducts: "View Products",
        },
        catalogue: {
          title: "ALMP Exports – Lampung Robusta Coffee Catalogue",
          productsLabel: "Products",
          packagingLabel: "Packaging",
          exportPortLabel: "Export Port",
          contactLabel: "Contact",
          lines: {
            grade1:
              "Grade 1 | Max defects ≤10 | Moisture ≤13% | Screen 20 up | Capacity 5–10 containers/month",
            grade2:
              "Grade 2 | Max defects ≤25 | Moisture ≤13% | Screen 18–20 | Capacity 5–10 containers/month",
            grade3:
              "Grade 3 | Max defects ≤45 | Moisture ≤13% | Screen 17–19 | For industrial export",
            grade4a:
              "Grade 4A | Defects ≤60 | Moisture ≤13% | Screen 16–18 | Capacity 20–40 containers/month",
            grade4b:
              "Grade 4B | Defects ≤80 | Moisture ≤13% | Screen 15–17 | Mass-market coffee",
            grade5: "Grade 5 | Max defects ≤120 | Moisture ≤13% | Screen 15–17",
            grade6: "Grade 6 | Max defects ≤150 | Moisture ≤13% | Screen 15–17",
          },
          productsValue: "Lampung Robusta Grade 1–6",
          packagingValue: "60 kg jute bags",
          exportPortValue: "Panjang Port – Bandar Lampung, Indonesia",
          contactValue: "WhatsApp International Sales +62 812-8945-8368",
        },
      },
      about: {
        title: "About Us",
        subtitle:
          "A legacy of excellence in Robusta coffee export, serving global markets since 1976",
        storyTitle: "Our Story",
        storyP1:
          "PT Andan Laju Mitra Persada (ALMP) is a private company based in Bandar Lampung, Indonesia, specializing in agricultural commodity trading, particularly Robusta coffee.",
        storyP2:
          "ALMP focuses on international export of Lampung Robusta, developing sustainable supply chains and long-term partnerships with farmer groups.",
        storyP3:
          "Founded on the foundation of trust, integrity, and hard work, ALMP is committed to empowering local farmers, improving post-harvest quality, and bridging Indonesian coffee to global markets.",
        storyP4:
          "The company traces its roots back to 1976 as a family business in West Lampung. In 2017, it was officially incorporated as PT Andan Laju Mitra Persada under the Notarial Deed of Dr. Prima Rangkupi, S.H., M.H., M.Kn.",
        hq: "Headquarters",
        marketing: "Marketing Office",
        missionVisionTitle: "Mission & Vision",
        mission: "Our Mission",
        vision: "Our Vision",
        missionItems: [
          "Developing available resources to provide useful and sustainable added value",
          "Maintaining trust and providing the best and solution oriented services for business partners and the company’s business network",
          "Forming trustworthy, resilient and growing HR (Human Resources) in a good working environment and atmosphere for employees and the company",
          "Innovating and contributing well and nobly to the preservation of nature and human civilization",
        ],
        visionText:
          "To become a superior, reliable and trusted global trading company and to create a sustainable, innovative and positively contributing business",
        coreTitle: "Core Business Activities",
        core: {
          trading: "Trading & Export Robusta",
          farmer: "Farmer partnership",
          distribution: "Global distribution",
          collaboration: "Export collaboration",
        },
        facilitiesTitle: "Our Facilities",
        facilities: {
          area: "Production facility area",
          drying: "Drying capacity",
          warehouse: "Storage warehouse capacity",
          sorting: "Sorting & grading",
        },
      },
      products: {
        title: "Lampung Robusta Coffee Products",
        subtitle:
          "Lampung Robusta coffee beans (Grade 1–6) technical specifications",
        cols: {
          grade: "Grade",
          type: "Type",
          defects: "Max Defects",
          moisture: "Moisture (%)",
          screen: "Screen Size",
          description: "Description",
        },
        packaging: "Packaging",
        exportPort: "Export Port",
        values: {
          juteBags: "60 kg jute bags",
          exportPort: "Panjang Port – Bandar Lampung, Indonesia",
        },
        types: {
          premium: "Premium Robusta",
          commercial: "Commercial Robusta",
        },
        descriptions: {
          premiumCapacity: "Premium grade. Capacity: 5–10 containers/month",
          industrial: "For industrial export",
          capacity2040: "Capacity: 20–40 containers/month",
          massMarket: "Mass-market coffee",
          grade5: "Quality note: Max defects 120 | Screen 15–17",
          grade6: "Quality note: Max defects 150 | Screen 15–17",
        },
      },
      production: {
        title: "Production Capacity",
        supplyTitle: "Supply Chain & Traceability",
        table: {
          component: "Component",
          capacity: "Capacity / Specification",
          remarks: "Remarks",
        },
        farmersLabel: "smallholder farmers",
        implements: "To maintain consistent quality, ALMP implements:",
        sop: "All products are dried, sorted, and packaged in ALMP’s main facility following standardized operational procedures to ensure export consistency.",
        partnerParagraph:
          "ALMP partners with more than <strong>300 smallholder farmers</strong> across <strong>West Lampung</strong>, <strong>Tanggamus</strong>, <strong>Bengkulu</strong>, <strong>South Sumatra</strong>, <strong>Jambi</strong>, and <strong>Way Kanan</strong>.",
        capacityRows: {
          facilityArea: {
            component: "Production Facility Area",
            remarks: "Located in Bandar Lampung, near Panjang Port",
          },
          drying: {
            component: "Drying Capacity",
            remarks: "Natural drying & mechanical dryers",
          },
          sorting: {
            component: "Sorting & Grading System",
            remarks: "Mechanical",
          },
          warehouse: {
            component: "Storage Warehouse Capacity",
            remarks: "Warehouse capacity for export stock",
          },
          processing: {
            component: "Processing Capacity",
            remarks: "Monthly processing throughput",
          },
        },
        monthlyByGrade: {
          title: "Monthly Export Capacity by Grade",
          table: {
            grade: "Grade",
            capacity: "Capacity (Containers/Month)",
          },
          items: [
            { grade: "Grade 1 (G1)", capacity: "30–50" },
            { grade: "Grade 2 (G2)", capacity: "100–120" },
            { grade: "Grade 3 (G3)", capacity: "140–150" },
            { grade: "Grade 4A (G4A)", capacity: "170–180" },
            { grade: "Grade 4B (G4B)", capacity: "180–200" },
            { grade: "Grade 5 (G5)", capacity: "200–210" },
            { grade: "Grade 6 (G6)", capacity: "200–230" },
          ],
        },
        valueNetwork: {
          items: [
            {
              title: "Farmer Training",
              description: "Post-harvest and drying techniques",
            },
            {
              title: "Quality Verification",
              description: "Moisture and defect control systems",
            },
            {
              title: "Sustainable Farming",
              description: "Environmentally friendly practices",
            },
            {
              title: "Traceability System",
              description: "From farmer groups to export shipment.",
            },
          ],
        },
      },
      quality: {
        title: "Quality Assurance",
        subtitle: "A standardized process to ensure export consistency",
        steps: [
          {
            number: "01",
            title: "Selective Harvesting",
            description: "Selectively picking ripe red cherries",
          },
          {
            number: "02",
            title: "Drying to 13%",
            description: "Reducing moisture to 13% using dryers",
          },
          {
            number: "03",
            title: "Sorting & Grading",
            description: "Sorting beans according to buyer requirements",
          },
          {
            number: "04",
            title: "Quality Control",
            description: "Consistent inspection throughout sorting",
          },
          {
            number: "05",
            title: "Packaging (60kg Jute)",
            description: "Packed in 60 kg jute bags",
          },
          {
            number: "06",
            title: "Export Readiness",
            description: "Fumigation & inspection",
          },
        ],
      },
      export: {
        title: "Monthly Production & Price Range",
        subtitle: "Indicative FOB pricing and monthly availability by grade",
        note: "Prices are indicative and refer to LIFFE market conditions.",
        cols: {
          grade: "Grade",
          availability: "Availability (Tons/Month)",
          price: "Indicative FOB Price (USD/MT)",
          remarks: "Remarks",
        },
        pricingRemarks: {
          highEnd: "High-end premium export quality",
          consistent: "Consistent production for export",
          majorVolume: "Major export volume",
          industrialInstant: "For industrial and instant coffee",
          massMarket: "For mass-market coffee production",
        },
      },
      sustainability: {
        title: "Sustainability Commitment",
        subtitle: "Commitments and development plan",
        commitments: "Sustainability Commitments",
        plan: "Development Plan (2025–2026)",
        commitmentItems: [
          "Supporting local farmers through fair trade pricing.",
          "Encouraging eco-friendly farming practices",
          "Implementing zero-waste coffee processing",
          "Empowering local communities through training and mentorship.",
          "Upholding transparency and integrity in all operations.",
        ],
        planItems: [
          "Market expansion to Malaysia, Saudi Arabia, Egypt, Europe, and Africa",
          "Establishment of Nusantara Coffee Export Division (Jakarta marketing office).",
          "Strategic collaboration with international marketing partners",
          "Export system digitalization and online documentation.",
          "Preparation for sustainability certifications (Rainforest Alliance)",
        ],
      },
      partnership: {
        title: "International Partnership",
        subtitle: "Partnership opportunities and current expansion targets",
        cta: "Become a Partner",
        models: [
          {
            title: "International Sales Agent",
            description:
              "Represent ALMP in your country with exclusive distribution rights and comprehensive support.",
            benefits: [
              "Exclusive territory rights",
              "Marketing materials",
              "Competitive commission structure",
            ],
          },
          {
            title: "Country Representative",
            description:
              "Become our official representative and build a strong presence in your market.",
            benefits: [
              "Brand authorization",
              "Priority pricing",
              "Joint marketing campaigns",
            ],
          },
          {
            title: "Joint Promotion Programs",
            description:
              "Collaborate on market development initiatives and promotional activities.",
            benefits: [
              "Co-marketing support",
              "Market intelligence",
              "Flexible terms",
            ],
          },
        ],
        expansionTitle: "Expansion Markets 2025–2027",
        expansionMarkets: [
          { region: "Middle East", countries: "Saudi Arabia, UAE, Egypt" },
          {
            region: "Southeast Asia",
            countries: "Malaysia, Singapore, Thailand",
          },
          {
            region: "Europe",
            countries: "Netherlands, Germany, Italy, Belgium",
          },
          { region: "Eurasia", countries: "Armenia" },
          { region: "South America", countries: "Ecuador" },
          { region: "Africa", countries: "South Africa, Kenya, Morocco" },
        ],
        why: {
          title: "Why Partner with ALMP?",
          metrics: {
            years: "Years Experience",
            tonPerDay: "Ton/Day",
            containersPerMonth: "Containers/Month",
            partnerFarmers: "Partner Farmers",
          },
          blurb:
            "We offer reliable supply, consistent quality, competitive pricing, and dedicated support to help you succeed in your market. Join our growing network of international partners.",
        },
      },
      contact: {
        title: "Contact",
        subtitle:
          "Get in touch with our international sales team for quotations, partnerships, or inquiries",
        infoTitle: "Contact Information",
        warehouse: "Warehouse",
        formTitle: "Send Us a Message",
        fields: {
          fullName: "Full Name",
          company: "Company",
          email: "Email",
          phone: "Phone",
          country: "Country",
          inquiryType: "Inquiry Type",
          message: "Message",
        },
        placeholders: {
          fullName: "John Doe",
          company: "Your Company",
          email: "john@company.com",
          phone: "+1 234 567 8900",
          country: "Your Country",
          message: "Please provide details about your inquiry...",
        },
        inquiry: {
          priceQuote: "Price Quote",
          partnership: "Partnership Opportunity",
          sampleRequest: "Sample Request",
          general: "General Inquiry",
        },
        submit: {
          sending: "Sending...",
          sendMessage: "Send Message",
        },
        status: {
          emailNotConfigured:
            "Email service is not configured. Fill VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.",
          success: "Message sent successfully. Our team will contact you.",
          failurePrefix:
            "Failed to send message. Please try again or contact via WhatsApp. ",
        },
        details: {
          nearPort: "Near Panjang Port",
          whatsappAvailable: "WhatsApp Available",
        },
        waCta: "WhatsApp International Sales",
        businessHours: "Business Hours",
        days: {
          monFri: "Monday - Friday",
          sat: "Saturday",
          sun: "Sunday",
          closed: "Closed",
        },
        map: {
          embed: "Google Maps Embed",
        },
      },
      footer: {
        tagline: "Premium Robusta Coffee",
        about:
          "Indonesia’s leading Robusta coffee exporter, delivering premium Lampung origin beans to global markets since 1976.",
        headings: {
          quickLinks: "Quick Links",
          resources: "Resources",
          legalEntity: "Legal Entity",
        },
        legal: {
          established: "Established as PT in 2017",
          notary: "Legal Notary:",
          exportLicensed: "Export Licensed",
          certified: "Certified",
          rightsReserved: "All rights reserved.",
          privacyPolicy: "Privacy Policy",
          termsOfService: "Terms of Service",
          exportTerms: "Export Terms",
        },
      },
    },
  },
  id: {
    translation: {
      common: {
        language: "Bahasa",
      },
      nav: {
        home: "Beranda",
        about: "Tentang Kami",
        products: "Produk",
        production: "Produksi",
        quality: "Kualitas",
        exportInfo: "Informasi Ekspor",
        sustainability: "Keberlanjutan",
        partnership: "Kemitraan",
        contact: "Kontak",
      },
      hero: {
        pill: "Ekspor Korporat Internasional – Kopi Robusta Lampung",
        headline: "Eksportir Kopi Robusta Terkemuka Indonesia",
        subHeadline: "Asal Lampung, Grade Ekspor 1–6",
        subline:
          "Kapasitas proses 20–40 kontainer/bulan dan kemampuan ekspor hingga 230 kontainer/bulan (berdasarkan grade), bersumber dari 300+ petani mitra di Sumatra.",
        highlights: {
          facility: "fasilitas produksi",
          drying: "kapasitas pengeringan",
          sorting: "sistem sortasi & grading",
          expansion: "Ekspansi global aktif",
          expansionCountries:
            "Saudi Arabia, UAE, Mesir, Malaysia, Belgia, Armenia, Ekuador",
        },
        cta: {
          download: "Unduh Katalog",
          requestPrice: "Minta Penawaran Harga",
          whatsapp: "WhatsApp Penjualan Internasional",
          viewProducts: "Lihat Produk",
        },
        catalogue: {
          title: "ALMP Exports – Katalog Kopi Robusta Lampung",
          productsLabel: "Produk",
          packagingLabel: "Kemasan",
          exportPortLabel: "Pelabuhan Muat",
          contactLabel: "Kontak",
          lines: {
            grade1:
              "Grade 1 | Defect maks. ≤10 | Kadar air ≤13% | Screen 20 up | Kapasitas 5–10 kontainer/bulan",
            grade2:
              "Grade 2 | Defect maks. ≤25 | Kadar air ≤13% | Screen 18–20 | Kapasitas 5–10 kontainer/bulan",
            grade3:
              "Grade 3 | Defect maks. ≤45 | Kadar air ≤13% | Screen 17–19 | Untuk kebutuhan ekspor industri",
            grade4a:
              "Grade 4A | Defect ≤60 | Kadar air ≤13% | Screen 16–18 | Kapasitas 20–40 kontainer/bulan",
            grade4b:
              "Grade 4B | Defect ≤80 | Kadar air ≤13% | Screen 15–17 | Untuk kebutuhan pasar massal",
            grade5:
              "Grade 5 | Defect maks. ≤120 | Kadar air ≤13% | Screen 15–17",
            grade6:
              "Grade 6 | Defect maks. ≤150 | Kadar air ≤13% | Screen 15–17",
          },
          productsValue: "Robusta Lampung Grade 1–6",
          packagingValue: "Karung goni 60 kg",
          exportPortValue: "Panjang Port – Bandar Lampung, Indonesia",
          contactValue: "WhatsApp Penjualan Internasional +62 812-8945-8368",
        },
      },
      about: {
        title: "Tentang Kami",
        subtitle:
          "Pengalaman panjang ekspor Robusta, melayani pasar global sejak 1976",
        storyTitle: "Profil Perusahaan",
        storyP1:
          "PT Andan Laju Mitra Persada (ALMP) adalah perusahaan swasta yang berbasis di Bandar Lampung, Indonesia, bergerak di perdagangan komoditas pertanian khususnya kopi Robusta.",
        storyP2:
          "ALMP berfokus pada ekspor internasional Robusta Lampung, membangun rantai pasok berkelanjutan serta kemitraan jangka panjang dengan kelompok tani.",
        storyP3:
          "Berlandaskan kepercayaan, integritas, dan kerja keras, ALMP berkomitmen memberdayakan petani lokal, meningkatkan kualitas pascapanen, dan menjembatani kopi Indonesia ke pasar global.",
        storyP4:
          "Berawal dari bisnis keluarga sejak 1976 di Lampung Barat. Pada 2017, ALMP resmi berbadan hukum PT berdasarkan Akta Notaris Dr. Prima Rangkupi, S.H., M.H., M.Kn.",
        hq: "Kantor Pusat",
        marketing: "Kantor Pemasaran",
        missionVisionTitle: "Visi & Misi",
        mission: "Misi",
        vision: "Visi",
        missionItems: [
          "Mengembangkan sumber daya yang tersedia untuk memberikan nilai tambah yang bermanfaat dan berkelanjutan",
          "Menjaga kepercayaan serta memberikan layanan terbaik dan berorientasi solusi bagi mitra bisnis dan jaringan usaha perusahaan",
          "Membentuk SDM yang tepercaya, tangguh, dan terus berkembang dalam lingkungan kerja yang baik untuk karyawan dan perusahaan",
          "Berinovasi dan berkontribusi secara positif untuk pelestarian alam serta peradaban manusia",
        ],
        visionText:
          "Menjadi perusahaan perdagangan global yang unggul, andal, dan tepercaya serta menciptakan bisnis yang berkelanjutan, inovatif, dan berkontribusi positif",
        coreTitle: "Kegiatan Inti",
        core: {
          trading: "Perdagangan & Ekspor Robusta",
          farmer: "Kemitraan petani",
          distribution: "Distribusi global",
          collaboration: "Kolaborasi ekspor",
        },
        facilitiesTitle: "Fasilitas",
        facilities: {
          area: "Luas fasilitas produksi",
          drying: "Kapasitas pengeringan",
          warehouse: "Kapasitas gudang",
          sorting: "Sortasi & grading",
        },
      },
      products: {
        title: "Produk Kopi Robusta Lampung",
        subtitle: "Spesifikasi teknis Robusta Lampung (Grade 1–6)",
        cols: {
          grade: "Grade",
          type: "Tipe",
          defects: "Defect Maks.",
          moisture: "Kadar Air (%)",
          screen: "Ukuran Screen",
          description: "Keterangan",
        },
        packaging: "Kemasan",
        exportPort: "Pelabuhan Muat",
        values: {
          juteBags: "Karung goni 60 kg",
          exportPort: "Panjang Port – Bandar Lampung, Indonesia",
        },
        types: {
          premium: "Robusta Premium",
          commercial: "Robusta Komersial",
        },
        descriptions: {
          premiumCapacity: "Kualitas premium. Kapasitas: 5–10 kontainer/bulan",
          industrial: "Untuk kebutuhan ekspor industri",
          capacity2040: "Kapasitas: 20–40 kontainer/bulan",
          massMarket: "Untuk kebutuhan pasar massal",
          grade5: "Catatan kualitas: Defect maks. 120 | Screen 15–17",
          grade6: "Catatan kualitas: Defect maks. 150 | Screen 15–17",
        },
      },
      production: {
        title: "Kapasitas Produksi",
        supplyTitle: "Rantai Pasok & Ketertelusuran",
        table: {
          component: "Komponen",
          capacity: "Kapasitas / Spesifikasi",
          remarks: "Keterangan",
        },
        farmersLabel: "petani kecil",
        implements: "Untuk menjaga kualitas yang konsisten, ALMP menerapkan:",
        sop: "Semua produk dikeringkan, disortir, dan dikemas di fasilitas utama ALMP mengikuti SOP terstandar untuk memastikan konsistensi ekspor.",
        partnerParagraph:
          "ALMP bermitra dengan lebih dari <strong>300 petani kecil</strong> di wilayah <strong>Lampung Barat</strong>, <strong>Tanggamus</strong>, <strong>Bengkulu</strong>, <strong>Sumatera Selatan</strong>, <strong>Jambi</strong>, dan <strong>Way Kanan</strong>.",
        capacityRows: {
          facilityArea: {
            component: "Luas Fasilitas Produksi",
            remarks: "Berlokasi di Bandar Lampung, dekat Panjang Port",
          },
          drying: {
            component: "Kapasitas Pengeringan",
            remarks: "Pengeringan natural & pengering mekanis",
          },
          sorting: {
            component: "Sistem sortasi & grading",
            remarks: "Mekanis",
          },
          warehouse: {
            component: "Kapasitas Gudang",
            remarks: "Kapasitas gudang untuk stok ekspor",
          },
          processing: {
            component: "Kapasitas Proses",
            remarks: "Kapasitas proses per bulan",
          },
        },
        monthlyByGrade: {
          title: "Kapasitas Ekspor Bulanan per Grade",
          table: {
            grade: "Grade",
            capacity: "Kapasitas (Kontainer/Bulan)",
          },
          items: [
            { grade: "Grade 1 (G1)", capacity: "30–50" },
            { grade: "Grade 2 (G2)", capacity: "100–120" },
            { grade: "Grade 3 (G3)", capacity: "140–150" },
            { grade: "Grade 4A (G4A)", capacity: "170–180" },
            { grade: "Grade 4B (G4B)", capacity: "180–200" },
            { grade: "Grade 5 (G5)", capacity: "200–210" },
            { grade: "Grade 6 (G6)", capacity: "200–230" },
          ],
        },
        valueNetwork: {
          items: [
            {
              title: "Pelatihan Petani",
              description: "Teknik pascapanen dan pengeringan",
            },
            {
              title: "Verifikasi Kualitas",
              description: "Sistem kontrol kadar air dan defect",
            },
            {
              title: "Pertanian Berkelanjutan",
              description: "Praktik ramah lingkungan",
            },
            {
              title: "Sistem Ketertelusuran",
              description: "Dari kelompok tani hingga pengiriman ekspor.",
            },
          ],
        },
      },
      quality: {
        title: "Jaminan Kualitas",
        subtitle: "Proses terstandar untuk konsistensi ekspor",
        steps: [
          {
            number: "01",
            title: "Panen Selektif",
            description: "Pemetikan selektif buah kopi merah matang",
          },
          {
            number: "02",
            title: "Pengeringan hingga 13%",
            description:
              "Menurunkan kadar air hingga 13% menggunakan pengering",
          },
          {
            number: "03",
            title: "Sortasi & Grading",
            description: "Penyortiran biji sesuai persyaratan pembeli",
          },
          {
            number: "04",
            title: "Kendali Mutu",
            description: "Inspeksi konsisten selama proses sortasi",
          },
          {
            number: "05",
            title: "Pengemasan (Karung Goni 60 kg)",
            description: "Dikemas dalam karung goni 60 kg",
          },
          {
            number: "06",
            title: "Kesiapan Ekspor",
            description: "Fumigasi & inspeksi",
          },
        ],
      },
      export: {
        title: "Produksi Bulanan & Rentang Harga",
        subtitle: "Harga FOB indikatif dan ketersediaan bulanan per grade",
        note: "Harga bersifat indikatif dan mengacu pada kondisi pasar LIFFE.",
        cols: {
          grade: "Grade",
          availability: "Ketersediaan (Ton/Bulan)",
          price: "Harga FOB Indikatif (USD/MT)",
          remarks: "Keterangan",
        },
        pricingRemarks: {
          highEnd: "Kualitas ekspor premium (high-end)",
          consistent: "Produksi stabil untuk ekspor",
          majorVolume: "Volume ekspor utama",
          industrialInstant: "Untuk industri dan kopi instan",
          massMarket: "Untuk produksi kopi pasar massal",
        },
      },
      sustainability: {
        title: "Komitmen Keberlanjutan",
        subtitle: "Komitmen dan rencana pengembangan",
        commitments: "Komitmen Keberlanjutan",
        plan: "Rencana Pengembangan (2025–2026)",
        commitmentItems: [
          "Mendukung petani lokal melalui skema harga yang adil (fair trade).",
          "Mendorong praktik budidaya yang ramah lingkungan.",
          "Menerapkan pengolahan kopi minim limbah (zero-waste).",
          "Memberdayakan komunitas lokal melalui pelatihan dan pendampingan.",
          "Menjunjung transparansi dan integritas dalam seluruh operasional.",
        ],
        planItems: [
          "Ekspansi pasar ke Malaysia, Saudi Arabia, Mesir, Eropa, dan Afrika.",
          "Pembentukan Divisi Ekspor Kopi Nusantara (kantor pemasaran Jakarta).",
          "Kolaborasi strategis dengan mitra pemasaran internasional.",
          "Digitalisasi sistem ekspor dan dokumentasi daring.",
          "Persiapan sertifikasi keberlanjutan (Rainforest Alliance).",
        ],
      },
      partnership: {
        title: "Kemitraan Internasional",
        subtitle: "Peluang kemitraan dan target ekspansi saat ini",
        cta: "Menjadi Mitra",
        models: [
          {
            title: "Agen Penjualan Internasional",
            description:
              "Mewakili ALMP di negara Anda dengan hak distribusi eksklusif serta dukungan menyeluruh.",
            benefits: [
              "Hak wilayah eksklusif",
              "Materi pemasaran",
              "Skema komisi yang kompetitif",
            ],
          },
          {
            title: "Perwakilan Negara",
            description:
              "Menjadi perwakilan resmi kami dan membangun kehadiran yang kuat di pasar Anda.",
            benefits: [
              "Otorisasi merek",
              "Prioritas harga",
              "Kampanye pemasaran bersama",
            ],
          },
          {
            title: "Program Promosi Bersama",
            description:
              "Berkolaborasi dalam inisiatif pengembangan pasar dan aktivitas promosi.",
            benefits: [
              "Dukungan co-marketing",
              "Wawasan pasar",
              "Ketentuan yang fleksibel",
            ],
          },
        ],
        expansionTitle: "Target Ekspansi Pasar 2025–2027",
        expansionMarkets: [
          { region: "Timur Tengah", countries: "Saudi Arabia, UAE, Mesir" },
          {
            region: "Asia Tenggara",
            countries: "Malaysia, Singapore, Thailand",
          },
          { region: "Eropa", countries: "Netherlands, Germany, Italy, Belgia" },
          { region: "Eurasia", countries: "Armenia" },
          { region: "Amerika Selatan", countries: "Ekuador" },
          { region: "Afrika", countries: "South Africa, Kenya, Morocco" },
        ],
        why: {
          title: "Mengapa Bermitra dengan ALMP?",
          metrics: {
            years: "Tahun Pengalaman",
            tonPerDay: "Ton/Hari",
            containersPerMonth: "Kontainer/Bulan",
            partnerFarmers: "Petani Mitra",
          },
          blurb:
            "Kami menawarkan pasokan yang andal, kualitas yang konsisten, harga yang kompetitif, serta dukungan khusus untuk membantu Anda berkembang di pasar. Bergabunglah dengan jaringan mitra internasional kami yang terus bertumbuh.",
        },
      },
      contact: {
        title: "Kontak",
        subtitle:
          "Silakan menghubungi tim penjualan internasional kami untuk permintaan penawaran harga, kemitraan, atau pertanyaan",
        infoTitle: "Informasi Kontak",
        warehouse: "Gudang",
        formTitle: "Kirim Pesan",
        fields: {
          fullName: "Nama Lengkap",
          company: "Perusahaan",
          email: "Email",
          phone: "Telepon",
          country: "Negara",
          inquiryType: "Jenis Pertanyaan",
          message: "Pesan",
        },
        placeholders: {
          fullName: "John Doe",
          company: "Nama Perusahaan",
          email: "john@company.com",
          phone: "+62 812 3456 7890",
          country: "Negara Anda",
          message: "Mohon sampaikan kebutuhan Anda secara rinci...",
        },
        inquiry: {
          priceQuote: "Minta Penawaran Harga",
          partnership: "Peluang Kemitraan",
          sampleRequest: "Permintaan Sampel",
          general: "Pertanyaan Umum",
        },
        submit: {
          sending: "Mengirim...",
          sendMessage: "Kirim Pesan",
        },
        status: {
          emailNotConfigured:
            "Layanan email belum dikonfigurasi. Isi VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, dan VITE_EMAILJS_PUBLIC_KEY di file .env.",
          success: "Pesan berhasil dikirim. Tim kami akan menghubungi Anda.",
          failurePrefix:
            "Gagal mengirim pesan. Coba lagi atau hubungi via WhatsApp. ",
        },
        details: {
          nearPort: "Dekat Pelabuhan Panjang",
          whatsappAvailable: "Tersedia WhatsApp",
        },
        waCta: "WhatsApp Penjualan Internasional",
        businessHours: "Jam Kerja",
        days: {
          monFri: "Senin - Jumat",
          sat: "Sabtu",
          sun: "Minggu",
          closed: "Libur",
        },
        map: {
          embed: "Sematan Google Maps",
        },
      },
      footer: {
        tagline: "Kopi Robusta Premium",
        about:
          "Eksportir kopi Robusta terkemuka Indonesia, menghadirkan biji kopi premium asal Lampung ke pasar global sejak 1976.",
        headings: {
          quickLinks: "Tautan Cepat",
          resources: "Informasi",
          legalEntity: "Badan Hukum",
        },
        legal: {
          established: "Resmi berbadan hukum PT sejak 2017",
          notary: "Notaris:",
          exportLicensed: "Berizin Ekspor",
          certified: "Tersertifikasi",
          rightsReserved: "Hak cipta dilindungi undang-undang.",
          privacyPolicy: "Kebijakan Privasi",
          termsOfService: "Ketentuan Layanan",
          exportTerms: "Ketentuan Ekspor",
        },
      },
    },
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
