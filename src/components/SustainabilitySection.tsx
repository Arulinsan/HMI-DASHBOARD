import { Leaf, Heart, Recycle, Users, Eye, Handshake } from "lucide-react";

export default function SustainabilitySection() {
  const initiatives = [
    {
      icon: Handshake,
      title: "Fair Trade Pricing",
      description:
        "We ensure farmers receive fair compensation for their harvest, supporting sustainable livelihoods and quality production.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Farming",
      description:
        "Promoting sustainable agricultural practices that protect soil health, biodiversity, and natural resources.",
    },
    {
      icon: Recycle,
      title: "Zero-Waste Processing",
      description:
        "Implementing waste reduction strategies and recycling programs throughout our production facilities.",
    },
    {
      icon: Heart,
      title: "Community Development",
      description:
        "Investing in local communities through education, infrastructure, and healthcare initiatives.",
    },
    {
      icon: Eye,
      title: "Transparency & Integrity",
      description:
        "Maintaining complete transparency in our supply chain with full traceability and ethical business practices.",
    },
    {
      icon: Users,
      title: "Farmer Empowerment",
      description:
        "Providing training, resources, and support to help farmers improve quality and productivity.",
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-green2/10 p-4 rounded-full mb-4">
            <Leaf className="w-12 h-12 text-accent-green1" />
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Sustainability Commitment
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Building a sustainable coffee industry through ethical practices,
            environmental stewardship, and community empowerment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div
                key={index}
                className="bg-soft-beige rounded-xl p-8 hover:bg-accent-green2/10 transition-all group"
              >
                <div className="bg-accent-green1 w-16 h-16 rounded-full flex items-center justify-center mb-5 group-hover:bg-accent-green2 transition-colors">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-sans text-xl font-bold text-primary-dark mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-accent-green1 to-accent-green2 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-sans text-3xl md:text-4xl font-bold mb-6">
              Our Environmental Promise
            </h3>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              We are committed to reducing our environmental footprint while
              improving the quality of life for our farming partners. Every
              decision we make considers its impact on people, planet, and
              prosperity.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-4xl font-bold mb-2 font-sans">300+</div>
                <div className="text-sm text-white/80">Farmers Supported</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-4xl font-bold mb-2 font-sans">100%</div>
                <div className="text-sm text-white/80">
                  Traceable Supply Chain
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-4xl font-bold mb-2 font-sans">Zero</div>
                <div className="text-sm text-white/80">
                  Waste Processing Goal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
