import {
  MapPin,
  Target,
  Eye,
  ContainerIcon,
  HandshakeIcon,
  Globe2,
  MapIcon,
} from "lucide-react";

export default function AboutSection() {
  const coreBusiness = [
    {
      icon: ContainerIcon,
      label: "Trading & Export Robusta",
    },
    {
      icon: HandshakeIcon,
      label: "Farmer partnership",
    },
    {
      icon: MapIcon,
      label: "Global distribution",
    },
    {
      icon: Globe2,
      label: "Export collaboration",
    },
  ];

  const facilityData = [
    { label: "Production facility area", value: "2,000 m²" },
    { label: "Drying capacity", value: "1,500 tons/month" },
    {
      label: "Storage warehouse capacity",
      value: "600 tons (humidity-controlled)",
    },
    { label: "Sorting & grading", value: "Mechanical + manual" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            About Us
          </h2>

          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A legacy of excellence in Robusta coffee export, serving global
            markets since 1976
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6 flex items-center">
              <Target className="w-6 h-6 text-accent-green1 mr-3" />
              Our Story
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p>
                PT Andan Laju Mitra Persada (ALMP) is a private company based in
                Bandar Lampung, Indonesia, specializing in agricultural
                commodity trading, particularly Robusta coffee
              </p>
              <p>
                ALMP focuses on international export of Lampung Robusta,
                developing sustainable supply chains and long-term partnerships
                with farmer groups.
              </p>
              <p>
                Founded on the foundation of trust, integrity, and hard work,
                ALMP is committed to empowering local farmers, improving
                post-harvest quality, and bridging Indonesian coffee to global
                markets
              </p>
              <p>
                The company traces its roots back to 1976, when it was
                established as a family business by Mr. Hasni in West Lampung.
                In 2017, it was officially incorporated as PT Andan Laju Mitra
                Persada under the Notarial Deed of Dr. Prima Rangkupi, S.H.,
                M.H., M.Kn.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-accent-green1 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary-dark">
                    Headquarters
                  </p>
                  <p className="text-gray-600 text-sm">
                    Bandar Lampung, Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-green1 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary-dark">
                    Marketing Office
                  </p>
                  <p className="text-gray-600 text-sm">Menara Karya, Jakarta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6 flex items-center">
              <Eye className="w-6 h-6 text-accent-green1 mr-3" />
              Mission & Vision
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-accent-green1 mb-3">
                  Our Mission
                </h4>
                <p className="text-gray-700 leading-relaxed text-justify mb-3">
                  1. Developing available resources to provide useful and
                  sustainable added value
                </p>
                <p className="text-gray-700 leading-relaxed text-justify mb-3">
                  2. Maintaining trust and providing the best and solution
                  oriented services for business partners and the company’s
                  business network
                </p>
                <p className="text-gray-700 leading-relaxed text-justify mb-3">
                  3. Forming trustworthy, resilient and growing HR (Human
                  Resources) in a good working environment and atmosphere for
                  employees and the company.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  4. Innovating and contributing well and nobly to the
                  preservation of nature and human civilization
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-accent-green1 mb-3">
                  Our Vision
                </h4>
                <p className="text-gray-700 leading-relaxed text-justify">
                  To become a superior, reliable and trusted global trading
                  company and to create a sustainable, innovative and positively
                  contributing business
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-sans text-3xl font-bold text-primary-dark mb-8 text-center">
            Core Business Activities
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {coreBusiness.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 text-accent-green1 mx-auto mb-8" />

                  <p className="text-gray-600 font-normal">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-sans text-3xl font-bold text-primary-dark mb-8 text-center">
            Our Facilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilityData.map((item, index) => (
              <div
                key={index}
                className="bg-soft-beige rounded-xl p-6 shadow-lg"
              >
                <div className="text-sm text-gray-600 mb-2">{item.label}</div>
                <div className="font-sans text-xl font-bold text-primary-dark">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
