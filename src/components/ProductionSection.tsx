import { Users } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export default function ProductionSection() {
  const { t, i18n } = useTranslation();
  const isId = i18n.resolvedLanguage === "id";
  const productionCapacity = [
    {
      component: t("production.capacityRows.facilityArea.component"),
      capacity: "20,000 m²",
      remarks: t("production.capacityRows.facilityArea.remarks"),
    },
    {
      component: t("production.capacityRows.drying.component"),
      capacity: isId ? "234 kontainer per bulan" : "234 containers per month",
      remarks: t("production.capacityRows.drying.remarks"),
    },
    {
      component: t("production.capacityRows.warehouse.component"),
      capacity: "7,600 tons",
      remarks: t("production.capacityRows.warehouse.remarks"),
    },
    {
      component: t("production.capacityRows.sorting.component"),
      capacity: isId ? "Mekanis" : "Mechanical",
      remarks: t("production.capacityRows.sorting.remarks"),
    },
    {
      component: t("production.capacityRows.processing.component"),
      capacity: isId
        ? "20–40 kontainer per bulan"
        : "20–40 containers per month",
      remarks: t("production.capacityRows.processing.remarks"),
    },
  ];

  const monthlyByGrade = t("production.monthlyByGrade.items", {
    returnObjects: true,
  }) as Array<{ grade: string; capacity: string }>;

  const valueNetworkItems = t("production.valueNetwork.items", {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;

  const farmerRegions =
    i18n.resolvedLanguage === "id"
      ? [
          "Lampung Barat",
          "Tanggamus",
          "Bengkulu",
          "Sumatera Selatan",
          "Jambi",
          "Way Kanan",
        ]
      : [
          "West Lampung",
          "Tanggamus",
          "Bengkulu",
          "South Sumatra",
          "Jambi",
          "Way Kanan",
        ];

  return (
    <>
      <section
        id="production-capacity"
        className="py-12 md:py-20 bg-soft-beige"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-12">
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              {t("production.title")}
            </h2>
            <div className="w-24 h-1 bg-accent-green1 mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="border-b-2 border-accent-green1">
                    <th className="w-[40%] text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                      {t("production.table.component")}
                    </th>
                    <th className="w-[25%] text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                      {t("production.table.capacity")}
                    </th>
                    <th className="w-[35%] text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                      {t("production.table.remarks")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productionCapacity.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-accent-green1/20 hover:bg-white/50 transition-colors"
                    >
                      <td className="py-3 px-3 sm:px-4 font-medium text-primary-dark text-xs sm:text-sm md:text-base break-words">
                        {row.component}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm md:text-base whitespace-normal break-words">
                        {row.capacity}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm break-words">
                        {row.remarks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg overflow-x-auto -mx-4 sm:mx-0">
              <h3 className="font-sans text-xl font-bold text-primary-dark mb-4">
                {t("production.monthlyByGrade.title")}
              </h3>
              <table className="w-full table-fixed">
                <thead>
                  <tr className="border-b-2 border-accent-green1">
                    <th className="w-[55%] text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                      {t("production.monthlyByGrade.table.grade")}
                    </th>
                    <th className="w-[45%] text-left py-3 px-3 sm:px-4 font-sans text-xs sm:text-sm md:text-lg text-primary-dark">
                      {t("production.monthlyByGrade.table.capacity")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyByGrade.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-accent-green1/20 hover:bg-white/50 transition-colors"
                    >
                      <td className="py-3 px-3 sm:px-4 font-medium text-primary-dark text-xs sm:text-sm md:text-base break-words">
                        {row.grade}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700 text-xs sm:text-sm md:text-base whitespace-nowrap">
                        {row.capacity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="supply-chain" className="py-12 md:py-20 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-12">
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              {t("production.supplyTitle")}
            </h2>
            <div className="w-24 h-1 bg-accent-green1 mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-5 sm:p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="w-9 h-9 sm:w-10 sm:h-10 text-accent-green1" />
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-accent-green2 font-sans">
                      300+
                    </div>
                    <div className="text-gray-600">
                      {t("production.farmersLabel")}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <Trans i18nKey="production.partnerParagraph" />
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-6">
                  {farmerRegions.map((region) => (
                    <div
                      key={region}
                      className="bg-soft-beige rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm text-primary-dark border border-accent-green1/10"
                    >
                      {region}
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mt-4">
                  {t("production.implements")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 sm:gap-6">
                {valueNetworkItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-accent-green1/10"
                  >
                    <h3 className="font-sans text-lg font-bold text-primary-dark mb-2">
                      {item.title}:
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-700 mt-6">{t("production.sop")}</p>
        </div>
      </section>
    </>
  );
}
