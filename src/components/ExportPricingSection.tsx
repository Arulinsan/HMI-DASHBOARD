import { useState } from "react";
import { ChevronDown, DollarSign, TrendingUp, AlertCircle } from "lucide-react";

export default function ExportPricingSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const pricing = [
    {
      grade: "Grade 1",
      price: "$5,200 – $5,400",
      description: "Premium export grade",
    },
    {
      grade: "Grade 2",
      price: "$4,900 – $5,100",
      description: "High-quality export",
    },
    {
      grade: "Grade 3",
      price: "$4,500 – $4,700",
      description: "Industrial grade",
    },
    {
      grade: "Grade 4A (EK1)",
      price: "$4,200 – $4,400",
      description: "Mass factory grade",
    },
    {
      grade: "Grade 4B (EK2)",
      price: "$3,800 – $4,000",
      description: "Mass market grade",
    },
  ];

  return (
    <section id="export" className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Export Information & Pricing
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Competitive FOB pricing for international buyers with transparent
            terms
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-accent-green1 p-3 rounded-full">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-sans text-2xl font-bold text-primary-dark">
                    FOB Price List
                  </h3>
                  <p className="text-gray-600">
                    Click to view indicative pricing
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-accent-green1 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {isExpanded && (
              <div className="border-t border-gray-200 p-8 bg-soft-beige/30">
                <div className="space-y-4 mb-6">
                  {pricing.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-5 flex items-center justify-between hover:shadow-md transition-shadow"
                    >
                      <div>
                        <div className="font-bold text-lg text-primary-dark">
                          {item.grade}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.description}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent-green1 font-sans">
                          {item.price}
                        </div>
                        <div className="text-xs text-gray-500">per ton FOB</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-900">
                    <strong>Important Note:</strong> Prices are indicative and
                    subject to change based on LIFFE market conditions, order
                    volume, and specifications. Contact us for current
                    quotations and contract terms.
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-primary-dark rounded-xl p-8 text-white">
              <TrendingUp className="w-10 h-10 text-accent-green2 mb-4" />
              <h3 className="font-sans text-xl font-bold mb-3">
                Market-Linked Pricing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our pricing reflects international market conditions while
                maintaining competitive rates for long-term partnerships.
              </p>
            </div>

            <div className="bg-accent-green1 rounded-xl p-8 text-white">
              <DollarSign className="w-10 h-10 text-white mb-4" />
              <h3 className="font-sans text-xl font-bold mb-3">
                Flexible Terms
              </h3>
              <p className="text-white/90 leading-relaxed">
                We offer flexible payment terms and contract structures to meet
                diverse buyer requirements and facilitate smooth transactions.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-accent-green1 hover:bg-accent-green2 text-white px-12 py-5 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
              Request Current Price Quote
            </button>
            <p className="text-gray-600 mt-4 text-sm">
              Get personalized pricing for your specific requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
