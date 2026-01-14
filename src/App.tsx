import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ProductionSection from "./components/ProductionSection";
import QualitySection from "./components/QualitySection";
import ExportPricingSection from "./components/ExportPricingSection";
import SustainabilitySection from "./components/SustainabilitySection";
import PartnershipSection from "./components/PartnershipSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProductionSection />
      <QualitySection />
      <ExportPricingSection />
      <SustainabilitySection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
      <SpeedInsights 
        route="/"
        debug={false}
      />
    </div>
  );
}

export default App;
