export default function QualitySection() {
  const qualitySteps = [
    {
      number: "01",
      title: "Selective Harvesting",
      description: "Selectively picking ripe red cherries",
    },
    {
      number: "02",
      title: "Drying to 13%",
      description: "Reducing moisture to 13% using dryers",
    },
    {
      number: "03",
      title: "Sorting & Grading",
      description: "Sorting beans according to buyer requirements",
    },
    {
      number: "04",
      title: "Quality Control",
      description: "Consistent inspection throughout sorting",
    },
    {
      number: "05",
      title: "Packaging (60kg Jute)",
      description: "Packed in 60 kg jute bags",
    },
    {
      number: "06",
      title: "Export Readiness",
      description: "Fumigation & inspection",
    },
  ];

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Quality Assurance Process
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A standardized process to ensure export consistency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {qualitySteps.slice(0, 5).map((step, index) => (
            <div key={index} className="pt-2">
              <div className="text-sm font-semibold text-primary-dark">
                {step.number}
              </div>
              <div className="w-20 h-0.5 bg-accent-green1 mt-2 mb-4"></div>
              <h3 className="font-sans text-2xl font-bold text-primary-dark mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-accent-green1">
          <div className="text-sm font-semibold text-primary-dark">
            {qualitySteps[5].number}
          </div>
          <div className="w-20 h-0.5 bg-accent-green1 mt-2 mb-4"></div>
          <h3 className="font-sans text-2xl font-bold text-primary-dark mb-2">
            {qualitySteps[5].title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {qualitySteps[5].description}
          </p>
        </div>
      </div>
    </section>
  );
}
