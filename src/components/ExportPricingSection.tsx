export default function ExportPricingSection() {
  const pricing = [
    {
      grade: "Grade 1",
      availability: "150 – 200",
      price: "$5,200 – $5,400",
      remarks: "High-end premium export quality",
    },
    {
      grade: "Grade 2",
      availability: "200 – 300",
      price: "$4,900 – $5,100",
      remarks: "Consistent production for export",
    },
    {
      grade: "Grade 3",
      availability: "400 – 500",
      price: "$4,500 – $4,700",
      remarks: "Major export volume",
    },
    {
      grade: "Grade 4A",
      availability: "500 – 600",
      price: "$4,200 – $4,400",
      remarks: "For industrial and instant coffee",
    },
    {
      grade: "Grade 4B",
      availability: "600 – 700",
      price: "$3,800 – $4,000",
      remarks: "For mass-market coffee production",
    },
  ];

  return (
    <section id="export" className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Monthly Production & Price Range
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Indicative FOB pricing and monthly availability by grade
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-accent-green1">
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Grade
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Availability (Tons/Month)
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Indicative FOB Price (USD/MT)
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-lg text-primary-dark">
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-accent-green1/20 hover:bg-white/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-primary-dark">
                      {row.grade}
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {row.availability}
                    </td>
                    <td className="py-4 px-4 text-gray-700">{row.price}</td>
                    <td className="py-4 px-4 text-gray-700 text-sm">
                      {row.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-sm text-gray-600 mt-6 italic">
              Prices are indicative and refer to LIFFE market conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
