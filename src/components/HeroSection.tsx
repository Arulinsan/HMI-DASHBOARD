import {
  FileText,
  TrendingUp,
  Download,
  MessageCircle,
  DollarSign,
} from "lucide-react";
import heroBg from "../assets/image/bijikopi.webp";

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6281289458368", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleDownloadCatalogue = () => {
    const content =
      "ALMP Exports – Lampung Robusta Coffee Catalogue\n" +
      "\n" +
      "Products: Lampung Robusta Grade 1–6\n" +
      "Packaging: 60 kg jute bags\n" +
      "Export Port: Panjang Port – Lampung\n" +
      "\n" +
      "Grade 1 | Max defects ≤10 | Moisture ≤13% | Screen 20 up | Capacity 5–10 containers/month\n" +
      "Grade 2 | Max defects ≤25 | Moisture ≤13% | Screen 18–20 | Capacity 5–10 containers/month\n" +
      "Grade 3 | Max defects ≤45 | Moisture ≤13% | Screen 17–19 | For industrial export\n" +
      "Grade 4A (EK1) | Defects ≤60 | Moisture ≤13% | Screen 16–18 | Capacity 20–40 containers/month\n" +
      "Grade 4B (EK2) | Defects ≤80 | Moisture ≤13% | Screen 15–17 | Mass-market coffee\n" +
      "Grade 5 | Specification available upon request\n" +
      "Grade 6 | Specification available upon request\n" +
      "\n" +
      "Contact: WhatsApp International Sales +62 812-8945-8368\n";

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ALMP-Catalogue.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="relative pt-56 pb-44 overflow-hidden ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-accent-green1/20 border border-accent-green1 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-accent-green2" />
              <span className="text-accent-green2 text-sm font-medium">
                Corporate International Export – Robusta Coffee Lampung
              </span>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Indonesia’s Leading Robusta Coffee Exporter
              <span className="block text-accent-green2">
                Lampung Origin, Export Grade 1–6
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Export capacity up to 20–40 containers/month, sourced from 300+
              partnered farmers across Sumatra.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-200 mb-10">
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                <span className="font-semibold text-white">2,000 m²</span>{" "}
                production facility
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                <span className="font-semibold text-white">
                  1,500 tons/month
                </span>{" "}
                drying capacity
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                <span className="font-semibold text-white">
                  1,000 tons/month
                </span>{" "}
                sorting & grading
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                Export Port:{" "}
                <span className="font-semibold text-white">
                  Panjang Port – Lampung
                </span>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                Products:{" "}
                <span className="font-semibold text-white">
                  Lampung Robusta G1–G6
                </span>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                Active global expansion:{" "}
                <span className="font-semibold text-white">
                  Saudi, UAE, Egypt, Malaysia
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleDownloadCatalogue}
                className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-primary-dark px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download Catalogue</span>
              </button>

              <button
                onClick={() => scrollToSection("export")}
                className="flex items-center space-x-2 bg-accent-green1 hover:bg-accent-green2 text-white px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <DollarSign className="w-5 h-5" />
                <span>Request Price</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp International Sales</span>
              </button>

              <button
                onClick={() => scrollToSection("products")}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/15 text-white border border-white/10 px-6 py-4 rounded-lg font-semibold transition-all"
              >
                <FileText className="w-5 h-5" />
                <span>View Products</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t "></div>
    </section>
  );
}
