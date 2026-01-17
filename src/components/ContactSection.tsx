import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Building,
  MessageCircle,
  Send,
} from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    inquiryType: "price_quote",
  });

  useEffect(() => {
    const onSetInquiryType = (event: Event) => {
      const custom = event as CustomEvent<{ inquiryType?: string }>;
      const inquiryType = custom.detail?.inquiryType;
      if (!inquiryType) return;

      setFormData((prev) => ({
        ...prev,
        inquiryType,
      }));
    };

    window.addEventListener(
      "almp:set-inquiry-type",
      onSetInquiryType as EventListener,
    );

    return () => {
      window.removeEventListener(
        "almp:set-inquiry-type",
        onSetInquiryType as EventListener,
      );
    };
  }, []);

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
        message: t("contact.status.emailNotConfigured"),
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
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: t("contact.status.success"),
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
        message: t("contact.status.failurePrefix") + String(error),
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Building,
      title: t("about.hq"),
      details: ["Bandar Lampung", "Sumatera, Indonesia"],
    },
    {
      icon: MapPin,
      title: t("about.marketing"),
      details: ["Menara Karya", "Jakarta, Indonesia"],
    },
    {
      icon: MapPin,
      title: t("contact.warehouse"),
      details: ["Bandar Lampung", t("contact.details.nearPort")],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["coffeenusantara08@gmail.com", ""],
    },
    {
      icon: Phone,
      title: t("contact.fields.phone"),
      details: ["+62 812-8945-8368", t("contact.details.whatsappAvailable")],
    },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/6281289458368", "_blank");
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            {t("contact.title")}
          </h2>
          <div className="w-24 h-1 bg-accent-green1 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-sans text-2xl font-bold text-primary-dark mb-6">
              {t("contact.formTitle")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.fields.fullName")} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition"
                    placeholder={t("contact.placeholders.fullName")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.fields.company")} *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition"
                    placeholder={t("contact.placeholders.company")}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.fields.email")} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition"
                    placeholder={t("contact.placeholders.email")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.fields.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition"
                    placeholder={t("contact.placeholders.phone")}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.fields.country")} *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition"
                    placeholder={t("contact.placeholders.country")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.fields.inquiryType")} *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="price_quote">
                      {t("contact.inquiry.priceQuote")}
                    </option>
                    <option value="international_sales">
                      {t("contact.inquiry.internationalSales")}
                    </option>
                    <option value="international_distributor">
                      {t("contact.inquiry.internationalDistributor")}
                    </option>
                    <option value="partnership">
                      {t("contact.inquiry.partnership")}
                    </option>
                    <option value="sample_request">
                      {t("contact.inquiry.sampleRequest")}
                    </option>
                    <option value="general">
                      {t("contact.inquiry.general")}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.fields.message")} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green1 focus:border-transparent outline-none transition resize-none"
                  placeholder={t("contact.placeholders.message")}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-accent-green1 hover:bg-accent-green2 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>
                  {isSending
                    ? t("contact.submit.sending")
                    : t("contact.submit.sendMessage")}
                </span>
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
              {t("contact.infoTitle")}
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
              <span>{t("contact.waCta")}</span>
            </button>

            <div className="bg-soft-beige rounded-xl p-6">
              <h4 className="font-semibold text-primary-dark mb-3">
                {t("contact.businessHours")}
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex justify-between">
                  <span>{t("contact.days.monFri")}:</span>
                  <span className="font-medium">08:00 - 17:00 WIB</span>
                </p>
                <p className="flex justify-between">
                  <span>{t("contact.days.sat")}:</span>
                  <span className="font-medium">09:00 - 13:00 WIB</span>
                </p>
                <p className="flex justify-between">
                  <span>{t("contact.days.sun")}:</span>
                  <span className="font-medium">
                    {t("contact.days.closed")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl h-72 sm:h-96 overflow-hidden">
          <iframe
            title={t("contact.map.embed")}
            src="https://www.google.com/maps?q=Menara%20Karya,%20Kuningan,%20Kuningan%20Tim.,%20Kecamatan%20Setiabudi,%20Kota%20Jakarta%20Selatan,%20Daerah%20Khusus%20Ibukota%20Jakarta&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
