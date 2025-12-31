import { Leaf } from "lucide-react";

export default function SustainabilitySection() {
  const commitments = [
    "Supporting local farmers through fair trade pricing.",
    "Encouraging eco-friendly farming practices",
    "Implementing zero-waste coffee processing",
    "Empowering local communities through training and mentorship.",
    "Upholding transparency and integrity in all operations.",
  ];

  const developmentPlan = [
    "Market expansion to Malaysia, Saudi Arabia, Egypt, Europe, and Africa",
    "Establishment of Nusantara Coffee Export Division (Jakarta marketing office).",
    "Strategic collaboration with international marketing partners",
    "Export system digitalization and online documentation.",
    "Preparation for sustainability certifications (Rainforest Alliance)",
  ];

  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-green2/10 p-4 rounded-full mb-4">
            <Leaf className="w-12 h-12 text-accent-green1" />
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Sustainability Commitment & Development Plan
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Key commitments and development priorities for 2025–2026
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-soft-beige rounded-2xl p-8 md:p-10">
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6">
              Sustainability Commitments
            </h3>
            <ul className="space-y-3 text-gray-700">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-green1 mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-soft-beige rounded-2xl p-8 md:p-10">
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6">
              Development Plan (2025–2026)
            </h3>
            <ul className="space-y-3 text-gray-700">
              {developmentPlan.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-green1 mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
