import { useTranslation } from "react-i18next";

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
      grade: "Grade 4A (EK1)",
      type: t("products.types.commercial"),
      defects: "≤ 60",
      moisture: "≤ 13",
      screen: "16–18",
      description: t("products.descriptions.capacity2040"),
    },
    {
      grade: "Grade 4B (EK2)",
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

        <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-12 mb-8 md:mb-10 shadow-lg">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[760px] md:min-w-[900px]">
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

        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <span className="font-semibold text-primary-dark">
              {t("products.packaging")}:
            </span>
            {t("products.values.juteBags")}
          </p>
          <p>
            <span className="font-semibold text-primary-dark">
              {t("products.exportPort")}:
            </span>{" "}
            {t("products.values.exportPort")}
          </p>
        </div>
      </div>
    </section>
  );
}
