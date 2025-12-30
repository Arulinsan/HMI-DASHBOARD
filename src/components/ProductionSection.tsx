import { Container, TrendingUp, Users, MapPin } from "lucide-react";

export default function ProductionSection() {
  const regions = [
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

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <Container className="w-10 h-10 text-accent-green1" />
                  <div>
                    <div className="text-3xl font-bold text-accent-green2 font-sans">
                      20–30
                    </div>
                    <div className="text-gray-600">Containers per month</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Monthly export capacity with consistent quality standards
                </p>
              </div>

              <div className="bg-primary-dark rounded-xl p-6 text-white">
                <h3 className="font-sans text-xl font-bold mb-4">
                  Container Calculation
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p className="flex justify-between">
                    <span>Bags per container:</span>
                    <span className="font-semibold text-accent-green2">
                      320 bags
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Weight per bag:</span>
                    <span className="font-semibold text-accent-green2">
                      60 kg
                    </span>
                  </p>
                  <div className="border-t border-accent-green1/30 pt-2 mt-2">
                    <p className="flex justify-between text-white font-bold">
                      <span>Total per container:</span>
                      <span className="text-accent-green2">19,200 kg</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <TrendingUp className="w-10 h-10 text-accent-green1" />
                  <div>
                    <div className="text-3xl font-bold text-accent-green2 font-sans">
                      3,000
                    </div>
                    <div className="text-gray-600">
                      Tons expansion potential
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Scalable capacity through our extensive farmer network
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Supply Chain & Traceability
            </h2>
            <div className="w-24 h-1 bg-accent-green1 mb-6"></div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <Users className="w-10 h-10 text-accent-green1" />
                <div>
                  <div className="text-4xl font-bold text-accent-green2 font-sans">
                    300+
                  </div>
                  <div className="text-gray-600">Partner Farmers</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work directly with over 300 farmers across key
                Robusta-growing regions in Sumatra, ensuring quality from farm
                to export.
              </p>
            </div>

            <div className="bg-primary-dark rounded-xl p-8 text-white mb-6">
              <h3 className="font-sans text-xl font-bold mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-accent-green2" />
                Source Regions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {regions.map((region, index) => (
                  <div
                    key={index}
                    className="bg-white/10 border border-accent-green1/30 rounded-lg px-4 py-2 text-sm"
                  >
                    {region}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent-green1 rounded-xl p-8 text-white">
              <h3 className="font-sans text-xl font-bold mb-4">
                Our Commitments
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent-green2 mr-2">✓</span>
                  <span>Post-harvest training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green2 mr-2">✓</span>
                  <span>Advanced moisture-control systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green2 mr-2">✓</span>
                  <span>Eco-friendly farming practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green2 mr-2">✓</span>
                  <span>Full traceability to farmer groups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
