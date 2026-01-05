import { useTranslation } from "react-i18next";
import ImageCarousel from "./ImageCarousel";

import g1 from "../assets/image/G1.png";
import g2 from "../assets/image/G2.png";
import g3 from "../assets/image/G3.png";
import g4 from "../assets/image/G4.png";
import g5 from "../assets/image/G5.png";
import g6 from "../assets/image/G6.png";

export default function ProductsSection() {
  const { t } = useTranslation();
  const products = [
    {
      grade: "Grade 1",
      type: t("products.types.premium"),
      defects: "≤ 10",
      moisture: "≤ 13",
      screen: "Up 20",
      description: t("products.descriptions.premiumCapacity"),
    },
    {
      grade: "Grade 2",
      type: t("products.types.premium"),
      defects: "≤ 25",
      moisture: "≤ 13",
      screen: "18–20",
      description: t("products.descriptions.premiumCapacity"),
    },
    {
      grade: "Grade 3",
      type: t("products.types.commercial"),
      defects: "≤ 45",
      moisture: "≤ 13",
      screen: "17–19",
      description: t("products.descriptions.industrial"),
    },
    {
      grade: "Grade 4A",
      type: t("products.types.commercial"),
      defects: "≤ 60",
      moisture: "≤ 13",
      screen: "16–18",
      description: t("products.descriptions.capacity2040"),
    },
    {
      grade: "Grade 4B",
      type: t("products.types.commercial"),
      defects: "≤ 80",
      moisture: "≤ 13",
      screen: "15–17",
      description: t("products.descriptions.massMarket"),
    },
    {
      grade: "Grade 5",
      type: t("products.types.commercial"),
      defects: "≤ 120",
      moisture: "≤ 13",
      screen: "15–17",
      description: t("products.descriptions.grade5"),
    },
    {
      grade: "Grade 6",
      type: t("products.types.commercial"),
      defects: "≤ 150",
      moisture: "≤ 13",
      screen: "15–17",
      description: t("products.descriptions.grade6"),
    },
  ];

  return (
    <section id="products" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            {t("products.title")}
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 mb-10 md:mb-12">
          <div className="lg:col-span-3">
            <ImageCarousel
              items={[
                {
                  src: g1,
                  alt: "Grade 1 (G1)",
                  caption: "Grade 1 (G1)",
                },
                {
                  src: g2,
                  alt: "Grade 2 (G2)",
                  caption: "Grade 2 (G2)",
                },
                {
                  src: g3,
                  alt: "Grade 3 (G3)",
                  caption: "Grade 3 (G3)",
                },
                {
                  src: g4,
                  alt: "Grade 4 (G4)",
                  caption: "Grade 4 (G4)",
                },
                {
                  src: g5,
                  alt: "Grade 5 (G5)",
                  caption: "Grade 5 (G5)",
                },
                {
                  src: g6,
                  alt: "Grade 6 (G6)",
                  caption: "Grade 6 (G6)",
                },
              ]}
            />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-soft-beige rounded-2xl p-5 sm:p-6 border border-accent-green1/10">
              <div className="space-y-4 text-sm sm:text-base text-gray-700">
                <div>
                  <div className="font-semibold text-primary-dark">
                    {t("products.packaging")}
                  </div>
                  <div className="mt-1">{t("products.values.juteBags")}</div>
                </div>

                <div className="h-px bg-accent-green1/20" />

                <div>
                  <div className="font-semibold text-primary-dark">
                    {t("products.exportPort")}
                  </div>
                  <div className="mt-1">{t("products.values.exportPort")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-10 shadow-lg">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[700px] md:min-w-[900px]">
              <thead>
                <tr className="border-b-2 border-accent-green1">
                  <th className="text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                    {t("products.cols.grade")}
                  </th>
                  <th className="text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                    {t("products.cols.type")}
                  </th>
                  <th className="text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                    {t("products.cols.defects")}
                  </th>
                  <th className="text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                    {t("products.cols.moisture")}
                  </th>
                  <th className="text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                    {t("products.cols.screen")}
                  </th>
                  <th className="text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                    {t("products.cols.description")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className="border-b border-accent-green1/20 hover:bg-white/50 transition-colors"
                  >
                    <td className="py-3 px-3 sm:px-4 font-semibold text-primary-dark text-xs sm:text-sm md:text-base">
                      {product.grade}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm md:text-base">
                      {product.type}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm md:text-base">
                      {product.defects}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm md:text-base">
                      {product.moisture}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm md:text-base">
                      {product.screen}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
                      {product.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
