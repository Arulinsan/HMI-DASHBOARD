import { Globe, Award, TrendingUp, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PartnershipSection() {
  const { t } = useTranslation();
  const partnershipModels = t("partnership.models", {
    returnObjects: true,
  }) as Array<{ title: string; description: string; benefits: string[] }>;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const openPartnershipForm = (
    inquiryType: "international_sales" | "international_distributor"
  ) => {
    window.dispatchEvent(
      new CustomEvent<{ inquiryType: string }>("almp:set-inquiry-type", {
        detail: { inquiryType },
      })
    );
    scrollToSection("contact");
  };

  const modelIcons = [Users, Award, TrendingUp] as const;

  const expansionMarkets = t("partnership.expansionMarkets", {
    returnObjects: true,
  }) as Array<{ region: string; countries: string }>;

  return (
    <section id="partnership" className="py-12 md:py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block bg-accent-green1/10 p-4 rounded-full mb-4">
            <Globe className="w-12 h-12 text-accent-green1" />
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            {t("partnership.title")}
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {t("partnership.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
          {partnershipModels.map((model, index) => {
            const Icon = modelIcons[index] ?? Users;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-accent-green1 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-sans text-xl font-bold text-primary-dark mb-3">
                  {model.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <span className="text-accent-green1 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-primary-dark rounded-2xl p-6 sm:p-8 md:p-12 text-white mb-10 md:mb-12">
          <h3 className="font-sans text-3xl font-bold mb-8 text-center">
            {t("partnership.expansionTitle")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expansionMarkets.map((market, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-lg p-6 border border-accent-green1/30"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="w-6 h-6 text-accent-green2" />
                  <h4 className="font-bold text-lg">{market.region}</h4>
                </div>
                <p className="text-gray-300 text-sm">{market.countries}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent-green1 to-accent-green2 rounded-2xl p-6 sm:p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-sans text-3xl font-bold mb-6">
              {t("partnership.why.title")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2 font-sans">48</div>
                <div className="text-sm text-white/80">
                  {t("partnership.why.metrics.years")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 font-sans">150</div>
                <div className="text-sm text-white/80">
                  {t("partnership.why.metrics.tonPerDay")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 font-sans">230</div>
                <div className="text-sm text-white/80">
                  {t("partnership.why.metrics.containersPerMonth")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 font-sans">300+</div>
                <div className="text-sm text-white/80">
                  {t("partnership.why.metrics.partnerFarmers")}
                </div>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed mb-8">
              {t("partnership.why.blurb")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => openPartnershipForm("international_sales")}
                className="bg-white text-accent-green1 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                {t("partnership.ctaInternationalSales")}
              </button>
              <button
                onClick={() => openPartnershipForm("international_distributor")}
                className="bg-white/10 text-white border border-white/40 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/15 transition-all transform hover:scale-105 shadow-lg"
              >
                {t("partnership.ctaInternationalDistributor")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
