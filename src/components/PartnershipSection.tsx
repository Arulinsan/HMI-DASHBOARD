import { Globe, Award, TrendingUp, Users } from "lucide-react";

export default function PartnershipSection() {
  const partnershipModels = [
    {
      icon: Users,
      title: "International Sales Agent",
      description:
        "Represent ALMP in your country with exclusive distribution rights and comprehensive support.",
      benefits: [
        "Exclusive territory rights",
        "Marketing materials",
        "Competitive commission structure",
      ],
    },
    {
      icon: Award,
      title: "Country Representative",
      description:
        "Become our official representative and build a strong presence in your market.",
      benefits: [
        "Brand authorization",
        "Priority pricing",
        "Joint marketing campaigns",
      ],
    },
    {
      icon: TrendingUp,
      title: "Joint Promotion Programs",
      description:
        "Collaborate on market development initiatives and promotional activities.",
      benefits: [
        "Co-marketing support",
        "Market intelligence",
        "Flexible terms",
      ],
    },
  ];

  const expansionMarkets = [
    { region: "Middle East", countries: "Saudi Arabia, UAE, Egypt" },
    { region: "Southeast Asia", countries: "Malaysia, Singapore, Thailand" },
    { region: "Europe", countries: "Netherlands, Germany, Italy" },
    { region: "Africa", countries: "South Africa, Kenya, Morocco" },
  ];

  return (
    <section id="partnership" className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-green1/10 p-4 rounded-full mb-4">
            <Globe className="w-12 h-12 text-accent-green1" />
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            International Partnership
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join us in bringing premium Lampung Robusta coffee to markets
            worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {partnershipModels.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-accent-green1 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-sans text-xl font-bold text-primary-dark mb-3">
                  {model.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <span className="text-accent-green1 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-primary-dark rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="font-sans text-3xl font-bold mb-8 text-center">
            Expansion Markets 2025–2027
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expansionMarkets.map((market, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-lg p-6 border border-accent-green1/30"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="w-6 h-6 text-accent-green2" />
                  <h4 className="font-bold text-lg">{market.region}</h4>
                </div>
                <p className="text-gray-300 text-sm">{market.countries}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent-green1 to-accent-green2 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-sans text-3xl font-bold mb-6">
              Why Partner with ALMP?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2 font-sans">48</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 font-sans">40</div>
                <div className="text-sm text-white/80">Containers/Month</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 font-sans">300+</div>
                <div className="text-sm text-white/80">Partner Farmers</div>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed mb-8">
              We offer reliable supply, consistent quality, competitive pricing,
              and dedicated support to help you succeed in your market. Join our
              growing network of international partners.
            </p>
            <button className="bg-white text-accent-green1 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
