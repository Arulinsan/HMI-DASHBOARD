import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../i18n";
import logo from "../assets/image/logo.png";

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { key: "nav.home", id: "home" },
    { key: "nav.about", id: "about" },
    { key: "nav.products", id: "products" },
    { key: "nav.products_capacity", id: "production-capacity" },
    { key: "nav.supplyChain", id: "supply-chain" },
    { key: "nav.quality", id: "quality" },
    { key: "nav.exportInfo", id: "export" },
    { key: "nav.sustainability", id: "sustainability" },
    { key: "nav.partnership", id: "partnership" },
    { key: "nav.contact", id: "contact" },
  ] as const;

  const activeLang = i18n.resolvedLanguage === "id" ? "id" : "en";
  const toggleLanguage = () => {
    void setLanguage(activeLang === "en" ? "id" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary-dark shadow-lg" : "bg-primary-dark/95"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="ALMP Exports logo"
              className="w-40 h-40 sm:w-20 sm:h-20 object-contain"
              loading="eager"
              decoding="async"
            />
            <div>
              <h1 className="text-white font-sans text-lg sm:text-xl font-bold">
                ALMP Exports
              </h1>
              <p className="text-accent-green2 text-xs">
                {t("footer.tagline")}
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-accent-green2 transition-colors text-sm font-medium whitespace-nowrap"
              >
                {t(link.key)}
              </button>
            ))}

            <div className="flex items-center pl-2 border-l border-white/15">
              <button
                type="button"
                onClick={toggleLanguage}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors bg-white text-primary-dark border-white"
                aria-label={t("common.language")}
                title={t("common.language")}
              >
                {activeLang.toUpperCase()}
              </button>
            </div>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-accent-green1/20">
          <div className="px-4 py-4 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="text-xs text-white/70">
                {t("common.language")}
              </div>
              <button
                type="button"
                onClick={toggleLanguage}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors bg-white text-primary-dark border-white"
                aria-label={t("common.language")}
              >
                {activeLang.toUpperCase()}
              </button>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-white hover:text-accent-green2 py-2 transition-colors"
              >
                {t(link.key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
