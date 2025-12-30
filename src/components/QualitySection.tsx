import {
  CheckCircle2,
  Droplets,
  ScanLine,
  ShieldCheck,
  Package,
  Plane,
} from "lucide-react";

export default function QualitySection() {
  const qualitySteps = [
    {
      icon: CheckCircle2,
      number: "01",
      title: "Selective Harvesting",
      description:
        "Only ripe cherries are picked to ensure optimal flavor and quality",
    },
    {
      icon: Droplets,
      number: "02",
      title: "Precision Drying",
      description:
        "Controlled drying process to achieve optimal 13% moisture content",
    },
    {
      icon: ScanLine,
      number: "03",
      title: "Sorting & Grading",
      description:
        "Combined mechanical and manual sorting for consistent quality",
    },
    {
      icon: ShieldCheck,
      number: "04",
      title: "Quality Control",
      description: "Rigorous testing and inspection at multiple checkpoints",
    },
    {
      icon: Package,
      number: "05",
      title: "Export Packaging",
      description: "60kg jute bags prepared to international export standards",
    },
    {
      icon: Plane,
      number: "06",
      title: "Export Readiness",
      description: "Fumigation, final inspection, and documentation completed",
    },
  ];

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Quality Assurance
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our comprehensive 6-step quality process ensures every bean meets
            international export standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {qualitySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-soft-beige rounded-xl p-8 hover:shadow-xl transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 text-8xl font-bold text-accent-green1/5 font-sans -mr-4 -mt-2">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="bg-accent-green1 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-green2 transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-bold text-accent-green1 mb-2">
                    STEP {step.number}
                  </div>
                  <h3 className="font-sans text-xl font-bold text-primary-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-primary-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-sans text-3xl font-bold mb-6">
                Commitment to Excellence
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every batch of coffee undergoes rigorous quality control
                measures throughout the processing chain. Our combination of
                modern technology and traditional expertise ensures consistent
                quality in every shipment.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We maintain full documentation and traceability for all our
                products, providing our international partners with complete
                confidence in their supply chain.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 border border-accent-green1/30">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-8 h-8 text-accent-green2" />
                  <div>
                    <div className="font-bold">ISO Standards</div>
                    <div className="text-sm text-gray-300">
                      International quality certification
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-accent-green1/30">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-8 h-8 text-accent-green2" />
                  <div>
                    <div className="font-bold">Quality Testing</div>
                    <div className="text-sm text-gray-300">
                      Laboratory-verified samples
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-accent-green1/30">
                <div className="flex items-center space-x-3">
                  <ScanLine className="w-8 h-8 text-accent-green2" />
                  <div>
                    <div className="font-bold">Full Traceability</div>
                    <div className="text-sm text-gray-300">
                      Farm to container tracking
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
