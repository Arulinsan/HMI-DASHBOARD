import { useTranslation } from "react-i18next";

export default function QualitySection() {
  const { t } = useTranslation();
  const qualitySteps = t("quality.steps", {
    returnObjects: true,
  }) as Array<{ number: string; title: string; description: string }>;

  return (
    <section id="quality" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            {t("quality.title")}
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {t("quality.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-10">
          {qualitySteps.slice(0, 5).map((step, index) => (
            <div key={index} className="pt-2">
              <div className="text-sm font-semibold text-primary-dark">
                {step.number}
              </div>
              <div className="w-20 h-0.5 bg-accent-green1 mt-2 mb-4"></div>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-primary-dark mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-accent-green1">
          <div className="text-sm font-semibold text-primary-dark">
            {qualitySteps[5].number}
          </div>
          <div className="w-20 h-0.5 bg-accent-green1 mt-2 mb-4"></div>
          <h3 className="font-sans text-xl sm:text-2xl font-bold text-primary-dark mb-2">
            {qualitySteps[5].title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {qualitySteps[5].description}
          </p>
        </div>
      </div>
    </section>
  );
}
