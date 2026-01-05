import {
  FileText,
  TrendingUp,
  Download,
  MessageCircle,
  DollarSign,
} from "lucide-react";
import heroBg from "../assets/image/bijikopi.webp";
import companyProfilePdf from "../assets/PROPOSAL-TEKNIS-and-KAPASITAS-PRODUKSI _7.pdf";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isId = i18n.resolvedLanguage === "id";
  const instagramUrl =
    (import.meta.env.VITE_INSTAGRAM_URL as string | undefined) ||
    "https://instagram.com/almp_1976/";

  const handleWhatsApp = () => {
    window.open("https://wa.me/6285704135213", "_blank");
  };

  const handleInstagram = () => {
    window.open(instagramUrl, "_blank");
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
    const a = document.createElement("a");
    a.href = companyProfilePdf;
    a.download = "PROPOSAL-TEKNIS-and-KAPASITAS-PRODUKSI _7.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 md:pt-44 lg:pt-48 pb-20 sm:pb-24 md:pb-36 lg:pb-36 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-accent-green1/20 border border-accent-green1 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-accent-green2" />
              <span className="text-accent-green2 text-sm font-medium">
                {t("hero.pill")}
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t("hero.headline")}
              <span className="block text-accent-green2">
                {t("hero.subHeadline")}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-5 leading-relaxed">
              {t("hero.subline")}
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200 mb-8 sm:mb-10">
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                <span className="font-semibold text-white">20,000 m²</span>{" "}
                {t("hero.highlights.facility")}
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                <span className="font-semibold text-white">
                  {isId
                    ? "234 kontainer per bulan"
                    : "234 containers per month"}
                </span>{" "}
                {t("hero.highlights.drying")}
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                <span className="font-semibold text-white">
                  {isId ? "Mekanis" : "Mechanical"}
                </span>{" "}
                {t("hero.highlights.sorting")}
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                {t("products.exportPort")}:{" "}
                <span className="font-semibold text-white">
                  {t("products.values.exportPort")}
                </span>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                {t("nav.products")}:{" "}
                <span className="font-semibold text-white">
                  Sumatera Robusta G1–G6
                </span>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                {t("hero.highlights.expansion")}:{" "}
                <span className="font-semibold text-white">
                  {t("hero.highlights.expansionCountries")}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t("hero.cta.whatsapp")}</span>
              </button>

              <button
                onClick={handleInstagram}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-accent-green1 hover:bg-accent-green2 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <DollarSign className="w-5 h-5" />
                <span>{t("hero.cta.requestPrice")}</span>
              </button>
              <button
                onClick={handleDownloadCatalogue}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-primary-dark px-5 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>{t("hero.cta.download")}</span>
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/15 text-white border border-white/10 px-5 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all"
              >
                <FileText className="w-5 h-5" />
                <span>{t("hero.cta.viewProducts")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t "></div>
    </section>
  );
}
