import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SustainabilitySection() {
  const { t } = useTranslation();
  const commitments = t("sustainability.commitmentItems", {
    returnObjects: true,
  }) as string[];

  const developmentPlan = t("sustainability.planItems", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="sustainability" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block bg-accent-green2/10 p-4 rounded-full mb-4">
            <Leaf className="w-12 h-12 text-accent-green1" />
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            {t("sustainability.title")}
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {t("sustainability.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-soft-beige rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6">
              {t("sustainability.commitments")}
            </h3>
            <ul className="space-y-3 text-gray-700">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-green1 mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-soft-beige rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6">
              {t("sustainability.plan")}
            </h3>
            <ul className="space-y-3 text-gray-700">
              {developmentPlan.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-green1 mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
