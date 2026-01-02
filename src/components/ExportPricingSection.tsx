import { useTranslation } from "react-i18next";

export default function ExportPricingSection() {
  const { t } = useTranslation();
  const pricing = [
    {
      grade: "Grade 1",
      availability: "150 – 200",
      price: "$5,200 – $5,400",
      remarks: t("export.pricingRemarks.highEnd"),
    },
    {
      grade: "Grade 2",
      availability: "200 – 300",
      price: "$4,900 – $5,100",
      remarks: t("export.pricingRemarks.consistent"),
    },
    {
      grade: "Grade 3",
      availability: "400 – 500",
      price: "$4,500 – $4,700",
      remarks: t("export.pricingRemarks.majorVolume"),
    },
    {
      grade: "Grade 4A",
      availability: "500 – 600",
      price: "$4,200 – $4,400",
      remarks: t("export.pricingRemarks.industrialInstant"),
    },
    {
      grade: "Grade 4B",
      availability: "600 – 700",
      price: "$3,800 – $4,000",
      remarks: t("export.pricingRemarks.massMarket"),
    },
  ];

  return (
    <section id="export" className="py-12 md:py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            {t("export.title")}
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {t("export.subtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[760px] md:min-w-[920px]">
              <thead>
                <tr className="border-b-2 border-accent-green1">
                  <th className="text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                    {t("export.cols.grade")}
                  </th>
                  <th className="text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                    {t("export.cols.availability")}
                  </th>
                  <th className="text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                    {t("export.cols.price")}
                  </th>
                  <th className="text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                    {t("export.cols.remarks")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-accent-green1/20 hover:bg-white/50 transition-colors"
                  >
                    <td className="py-3 px-3 sm:px-4 font-medium text-primary-dark text-xs sm:text-sm md:text-base">
                      {row.grade}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm md:text-base">
                      {row.availability}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm md:text-base whitespace-nowrap">
                      {row.price}
                    </td>
                    <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm">
                      {row.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-sm text-gray-600 mt-6 italic">
              {t("export.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
