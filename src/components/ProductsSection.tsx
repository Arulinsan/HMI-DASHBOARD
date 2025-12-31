export default function ProductsSection() {
  const products = [
    {
      grade: "Grade 1",
      type: "Premium Robusta",
      defects: "≤ 10",
      moisture: "≤ 13",
      screen: "Up 20",
      description: "Premium grade. Capacity: 5–10 containers/month",
    },
    {
      grade: "Grade 2",
      type: "Premium Robusta",
      defects: "≤ 25",
      moisture: "≤ 13",
      screen: "18–20",
      description: "Premium grade. Capacity: 5–10 containers/month",
    },
    {
      grade: "Grade 3",
      type: "Commercial Robusta",
      defects: "≤ 45",
      moisture: "≤ 13",
      screen: "17–19",
      description: "For industrial export",
    },
    {
      grade: "Grade 4A (EK1)",
      type: "Commercial Robusta",
      defects: "≤ 60",
      moisture: "≤ 13",
      screen: "16–18",
      description: "Capacity: 20–40 containers/month",
    },
    {
      grade: "Grade 4B (EK2)",
      type: "Commercial Robusta",
      defects: "≤ 80",
      moisture: "≤ 13",
      screen: "15–17",
      description: "Mass-market coffee",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Lampung Robusta Coffee Products
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Lampung Robusta coffee beans (Grade 1–6) technical specifications
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 mb-10 shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-accent-green1">
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Grade
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Type
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Max Defects
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Moisture (%)
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Screen Size
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className="border-b border-accent-green1/20 hover:bg-white/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold text-primary-dark">
                      {product.grade}
                    </td>
                    <td className="py-4 px-4 text-gray-700">{product.type}</td>
                    <td className="py-4 px-4 text-gray-700">
                      {product.defects}
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {product.moisture}
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {product.screen}
                    </td>
                    <td className="py-4 px-4 text-gray-700 text-sm leading-relaxed">
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
            <span className="font-semibold text-primary-dark">Packaging:</span>{" "}
            60 kg Jute Bags
          </p>
          <p>
            <span className="font-semibold text-primary-dark">
              Export Port:
            </span>{" "}
            Panjang Port – Bandar Lampung, Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}
