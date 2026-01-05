import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/image/logo.png";
export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: "nav.about", id: "about" },
    { key: "nav.products", id: "products" },
    { key: "nav.quality", id: "quality" },
    { key: "nav.exportInfo", id: "export" },
  ] as const;

  const resources = [
    { key: "nav.sustainability", id: "sustainability" },
    { key: "nav.partnership", id: "partnership" },
    { key: "nav.contact", id: "contact" },
  ] as const;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="ALMP Exports logo"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                loading="eager"
                decoding="async"
              />
              <div>
                <h3 className="font-sans text-xl font-bold">ALMP Exports</h3>
                <p className="text-accent-green2 text-xs">
                  {t("footer.tagline")}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t("footer.about")}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-accent-green2" />
                <span>Menara Karya, Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 text-accent-green2" />
                <span>coffeenusantara08@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4 text-accent-green2" />
                <span>+62 857-0413-5213</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-lg font-bold mb-4">
              {t("footer.headings.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-accent-green2 transition-colors text-sm"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-lg font-bold mb-4">
              {t("footer.headings.resources")}
            </h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-accent-green2 transition-colors text-sm"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-lg font-bold mb-4">
              {t("footer.headings.legalEntity")}
            </h4>
            <div className="text-sm text-gray-400 space-y-3">
              <div>
                <p className="font-semibold text-white mb-1">
                  PT Andan Laju Mitra Persada
                </p>
                <p className="text-xs">{t("footer.legal.established")}</p>
              </div>
              <div>
                <p className="text-xs">{t("footer.legal.notary")}</p>
                <p className="text-xs">Dr. Prima Rangkupi, SH, MH, M.Kn</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-accent-green1/20 text-accent-green2 px-3 py-1 rounded text-xs">
                  {t("footer.legal.exportLicensed")}
                </span>
                <span className="bg-accent-green1/20 text-accent-green2 px-3 py-1 rounded text-xs">
                  {t("footer.legal.certified")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} PT Andan Laju Mitra Persada{" "}
              {t("footer.legal.rightsReserved")}
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-gray-400">
              <button className="hover:text-accent-green2 transition-colors">
                {t("footer.legal.privacyPolicy")}
              </button>
              <button className="hover:text-accent-green2 transition-colors">
                {t("footer.legal.termsOfService")}
              </button>
              <button className="hover:text-accent-green2 transition-colors">
                {t("footer.legal.exportTerms")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
