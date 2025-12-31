import { Users } from "lucide-react";

export default function ProductionSection() {
  const productionCapacity = [
    {
      component: "Production Facility Area",
      capacity: "± 2,000 m²",
      remarks: "Located in Bandar Lampung, near Panjang Port",
    },
    {
      component: "Drying Capacity",
      capacity: "± 1,500 tons/month",
      remarks: "Natural drying & mechanical dryers",
    },
    {
      component: "Sorting & Grading Units",
      capacity: "± 1,000 tons/month",
      remarks: "Mechanical and manual sorting",
    },
    {
      component: "Storage Warehouse Capacity",
      capacity: "± 600 tons",
      remarks: "Humidity-controlled facility",
    },
    {
      component: "Average Export Capacity",
      capacity: "20–30 containers/month",
      remarks: "320 bags (60 kg) per container",
    },
    {
      component: "Expansion Potential",
      capacity: "Up to 3,000 tons/month",
      remarks: "Through farmer partnership expansion",
    },
  ];

  const valueNetworkItems = [
    {
      title: "Farmer Training",
      description: "Post-harvest and drying techniques",
    },
    {
      title: "Quality Verification",
      description: "Moisture and defect control systems",
    },
    {
      title: "Sustainable Farming",
      description: "Environmentally friendly practices",
    },
    {
      title: "Traceability System",
      description: "From farmer groups to export shipment.",
    },
  ];

  const farmerRegions = [
    "West Lampung",
    "Tanggamus",
    "Bengkulu",
    "South Sumatra",
    "Jambi",
    "Way Kanan",
  ];

  return (
    <section className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Production Capacity
            </h2>
            <div className="w-24 h-1 bg-accent-green1 mb-6"></div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-accent-green1">
                    <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                      Component
                    </th>
                    <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                      Capacity / Specification
                    </th>
                    <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                      Remarks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productionCapacity.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-accent-green1/20 hover:bg-white/50 transition-colors"
                    >
                      <td className="py-4 px-4 font-medium text-primary-dark">
                        {row.component}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {row.capacity}
                      </td>
                      <td className="py-4 px-4 text-gray-700 text-sm">
                        {row.remarks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Supply Chain & Value Network
            </h2>
            <div className="w-24 h-1 bg-accent-green1 mb-6"></div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <Users className="w-10 h-10 text-accent-green1" />
                <div>
                  <div className="text-4xl font-bold text-accent-green2 font-sans">
                    300+
                  </div>
                  <div className="text-gray-600">smallholder farmers</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                ALMP partners with more than{" "}
                <strong>300 smallholder farmers</strong> across{" "}
                <strong>West Lampung</strong>, <strong>Tanggamus</strong>,{" "}
                <strong>Bengkulu</strong>, <strong>South Sumatra</strong>,{" "}
                <strong>Jambi</strong>, and <strong>Way Kanan</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                {farmerRegions.map((region) => (
                  <div
                    key={region}
                    className="bg-soft-beige rounded-lg px-4 py-2 text-sm text-primary-dark border border-accent-green1/10"
                  >
                    {region}
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                To maintain consistent quality, ALMP implements:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {valueNetworkItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-accent-green1/10"
                >
                  <h3 className="font-sans text-lg font-bold text-primary-dark mb-2">
                    {item.title}:
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700">
              All products are dried, sorted, and packaged in ALMP’s main
              facility following{" "}
              <strong>standardized operational procedures</strong> to ensure
              export consistency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
