import {
  MapPin,
  Target,
  Eye,
  ContainerIcon,
  HandshakeIcon,
  Globe2,
  MapIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const isId = i18n.resolvedLanguage === "id";
  const coreBusiness = [
    {
      icon: ContainerIcon,
      label: t("about.core.trading"),
    },
    {
      icon: HandshakeIcon,
      label: t("about.core.farmer"),
    },
    {
      icon: MapIcon,
      label: t("about.core.distribution"),
    },
    {
      icon: Globe2,
      label: t("about.core.collaboration"),
    },
  ];

  const facilityData = [
    { label: t("about.facilities.area"), value: "20,000 m²" },
    {
      label: t("about.facilities.drying"),
      value: isId ? "234 kontainer/bulan" : "234 containers/month",
    },
    {
      label: t("about.facilities.warehouse"),
      value: "7,600 tons",
    },
    {
      label: t("about.facilities.sorting"),
      value: isId ? "Mekanis" : "Mechanical",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            {t("about.title")}
          </h2>

          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg">
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6 flex items-center">
              <Target className="w-6 h-6 text-accent-green1 mr-3" />
              {t("about.storyTitle")}
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p>{t("about.storyP1")}</p>
              <p>{t("about.storyP2")}</p>
              <p>{t("about.storyP3")}</p>
              <p>{t("about.storyP4")}</p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-accent-green1 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary-dark">
                    {t("about.hq")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Bandar Lampung, Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-green1 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary-dark">
                    {t("about.marketing")}
                  </p>
                  <p className="text-gray-600 text-sm">Menara Karya, Jakarta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg">
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6 flex items-center">
              <Eye className="w-6 h-6 text-accent-green1 mr-3" />
              {t("about.missionVisionTitle")}
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-accent-green1 mb-3">
                  {t("about.mission")}
                </h4>
                {(t("about.missionItems", { returnObjects: true }) as string[])
                  .slice(0, 4)
                  .map((item, idx) => (
                    <p
                      key={idx}
                      className={`text-gray-700 leading-relaxed text-justify ${
                        idx < 3 ? "mb-3" : ""
                      }`}
                    >
                      {idx + 1}. {item}
                    </p>
                  ))}
              </div>
              <div>
                <h4 className="font-semibold text-lg text-accent-green1 mb-3">
                  {t("about.vision")}
                </h4>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {t("about.visionText")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-sans text-3xl font-bold text-primary-dark mb-8 text-center">
            {t("about.coreTitle")}
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {coreBusiness.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 text-accent-green1 mx-auto mb-8" />

                  <p className="text-gray-600 font-normal">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="font-sans text-3xl font-bold text-primary-dark mb-8 text-center">
            {t("about.facilitiesTitle")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilityData.map((item, index) => (
              <div
                key={index}
                className="bg-soft-beige rounded-xl p-5 sm:p-6 shadow-lg"
              >
                <div className="text-sm text-gray-600 mb-2">{item.label}</div>
                <div className="font-sans text-xl font-bold text-primary-dark">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
