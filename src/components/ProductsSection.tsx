import { Package, Ship, FileText } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      grade: "Grade 1",
      defects: "≤10",
      moisture: "≤13%",
      screen: "Screen 20↑",
      capacity: "5–10 containers/month",
      description: "Premium export grade",
    },
    {
      grade: "Grade 2",
      defects: "≤25",
      moisture: "≤13%",
      screen: "—",
      capacity: "5–10 containers/month",
      description: "High-quality export",
    },
    {
      grade: "Grade 3",
      defects: "≤45",
      moisture: "—",
      screen: "—",
      capacity: "Industrial export",
      description: "Industrial grade",
    },
    {
      grade: "Grade 4A (EK1)",
      defects: "≤60",
      moisture: "—",
      screen: "—",
      capacity: "20–40 containers/month",
      description: "Mass factory grade",
    },
    {
      grade: "Grade 4B (EK2)",
      defects: "≤80",
      moisture: "—",
      screen: "—",
      capacity: "Available",
      description: "Mass market grade",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Premium Robusta coffee grades to meet diverse international market
            requirements
          </p>
        </div>

        <div className="bg-soft-beige rounded-2xl p-8 md:p-12 mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-accent-green1">
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Grade
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Defects
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Moisture
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Screen
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Capacity
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className="border-b border-accent-green1/20 hover:bg-white/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="font-semibold text-primary-dark">
                        {product.grade}
                      </div>
                      <div className="text-sm text-gray-600">
                        {product.description}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {product.defects}
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {product.moisture}
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {product.screen}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block bg-accent-green1/20 text-accent-green1 px-3 py-1 rounded-full text-sm font-medium">
                        {product.capacity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary-dark rounded-xl p-8 text-white text-center">
            <Package className="w-12 h-12 text-accent-green2 mx-auto mb-4" />
            <h3 className="font-sans text-xl font-bold mb-3">Packaging</h3>
            <p className="text-gray-300">60kg jute bags</p>
            <p className="text-sm text-gray-400 mt-2">
              Export-standard packaging
            </p>
          </div>

          <div className="bg-primary-dark rounded-xl p-8 text-white text-center">
            <Ship className="w-12 h-12 text-accent-green2 mx-auto mb-4" />
            <h3 className="font-sans text-xl font-bold mb-3">
              Port of Loading
            </h3>
            <p className="text-gray-300">Panjang Port</p>
            <p className="text-sm text-gray-400 mt-2">Lampung, Indonesia</p>
          </div>

          <div className="bg-primary-dark rounded-xl p-8 text-white text-center">
            <FileText className="w-12 h-12 text-accent-green2 mx-auto mb-4" />
            <h3 className="font-sans text-xl font-bold mb-3">Documentation</h3>
            <p className="text-gray-300">Full export docs</p>
            <p className="text-sm text-gray-400 mt-2">
              COA, fumigation, inspection
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-accent-green1 hover:bg-accent-green2 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Request FOB Quote
          </button>
        </div>
      </div>
    </section>
  );
}
