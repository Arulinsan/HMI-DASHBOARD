import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Building,
  MessageCircle,
  Send,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    inquiryType: "price_quote",
  });

  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    | { type: "success"; message: string }
    | { type: "error"; message: string }
    | null
  >(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as
      | string
      | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
      | string
      | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
      | string
      | undefined;
    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: "error",
        message:
          "Email service belum dikonfigurasi. Isi VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, dan VITE_EMAILJS_PUBLIC_KEY di file .env.",
      });
      return;
    }

    setIsSending(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          company: formData.company,
          from_email: formData.email,
          phone: formData.phone,
          country: formData.country,
          inquiry_type: formData.inquiryType,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Pesan berhasil dikirim. Tim kami akan menghubungi Anda.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        inquiryType: "price_quote",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Gagal mengirim pesan. Coba lagi atau hubungi via WhatsApp. " + error,
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Building,
      title: "Headquarters",
      details: ["Bandar Lampung", "Lampung, Indonesia"],
    },
    {
      icon: MapPin,
      title: "Marketing Office",
      details: ["Menara Karya", "Jakarta, Indonesia"],
    },
    {
      icon: MapPin,
      title: "Warehouse",
      details: ["Bandar Lampung", "Near Panjang Port"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@almpexports.com", "sales@almpexports.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+62 812 8945 8368", "WhatsApp Available"],
    },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/6281289458368", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get in touch with our international sales team for quotations,
            partnerships, or inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition"
                    placeholder="Your Country"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="price_quote">Price Quote</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="sample_request">Sample Request</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-accent-green1 hover:bg-accent-green2 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{isSending ? "Sending..." : "Send Message"}</span>
              </button>

              {submitStatus && (
                <p
                  className={
                    submitStatus.type === "success"
                      ? "text-sm text-green-700"
                      : "text-sm text-red-700"
                  }
                  aria-live="polite"
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>

          <div>
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-accent-green1/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-accent-green1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-dark mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 mb-8"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp International Sales</span>
            </button>

            <div className="bg-soft-beige rounded-xl p-6">
              <h4 className="font-semibold text-primary-dark mb-3">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">08:00 - 17:00 WIB</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">09:00 - 13:00 WIB</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 h-96 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2 text-accent-green1" />
            <p>Google Maps Embed</p>
            <p className="text-sm">Bandar Lampung, Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
