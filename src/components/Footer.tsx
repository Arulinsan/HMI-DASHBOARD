import { Coffee, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Quality', id: 'quality' },
    { name: 'Export Info', id: 'export' },
  ];

  const resources = [
    { name: 'Sustainability', id: 'sustainability' },
    { name: 'Partnership', id: 'partnership' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Coffee className="w-8 h-8 text-accent-green2" />
              <div>
                <h3 className="font-serif text-xl font-bold">ALMP Exports</h3>
                <p className="text-accent-green2 text-xs">Premium Robusta Coffee</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Indonesia's leading Robusta coffee exporter, delivering premium Lampung origin beans to global markets since 1976.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-accent-green2" />
                <span>Bandar Lampung, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 text-accent-green2" />
                <span>info@almpexports.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4 text-accent-green2" />
                <span>+62 XXX XXXX XXXX</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-accent-green2 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-accent-green2 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Legal Entity</h4>
            <div className="text-sm text-gray-400 space-y-3">
              <div>
                <p className="font-semibold text-white mb-1">PT ALMP</p>
                <p className="text-xs">Established as PT in 2017</p>
              </div>
              <div>
                <p className="text-xs">Legal Notary:</p>
                <p className="text-xs">Dr. Prima Rangkupi, SH, MH, M.Kn</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-accent-green1/20 text-accent-green2 px-3 py-1 rounded text-xs">
                  Export Licensed
                </span>
                <span className="bg-accent-green1/20 text-accent-green2 px-3 py-1 rounded text-xs">
                  Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} PT ALMP. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-accent-green2 transition-colors">Privacy Policy</button>
              <button className="hover:text-accent-green2 transition-colors">Terms of Service</button>
              <button className="hover:text-accent-green2 transition-colors">Export Terms</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
