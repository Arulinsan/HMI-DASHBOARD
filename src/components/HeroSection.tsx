import { FileText, TrendingUp } from "lucide-react";
import heroBg from "../assets/image/bijikopi.webp";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-56 pb-44 overflow-hidden ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-accent-green1/20 border border-accent-green1 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-accent-green2" />
              <span className="text-accent-green2 text-sm font-medium">
                Indonesia's Leading Robusta Exporter
              </span>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Robusta Coffee
              <span className="block text-accent-green2">Lampung Origin</span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Export Grade 1–6 Robusta Coffee
            </p>

            <p className="text-gray-400 mb-12 leading-">
              Export capacity{" "}
              <strong className="text-white">20–40 containers/month</strong>,
              sourced from 300+ partnered farmers across Sumatra. Shipped via {}
              <strong className="text-accent-green2">
                Panjang Port – Lampung
              </strong>
              .
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-primary-dark px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                <FileText className="w-5 h-5" />
                <span>View Catalog</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t "></div>
    </section>
  );
}
