import { useState } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaAt,
  FaTimes,
  FaPaperPlane,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const FloatingSidebar = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  const items = [
    {
      id: "contact",
      icon: <FaEnvelope />,
      bg: "bg-gradient-to-r from-orange-400 to-orange-500",
      label: "Contact",
      action: "Get in touch",
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      bg: "bg-gradient-to-r from-pink-500 to-purple-500",
      label: "Instagram",
      action: "@beyond_education",
    },
    {
      id: "phone",
      icon: <FaPhoneAlt />,
      bg: "bg-gradient-to-r from-green-500 to-green-600",
      label: "Call Us",
      action: "9522745560",
    },
    {
      id: "whatsapp",
      icon: <FaWhatsapp />,
      bg: "bg-gradient-to-r from-green-400 to-green-500",
      label: "WhatsApp",
      action: "Chat Now",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      bg: "bg-gradient-to-r from-blue-600 to-blue-700",
      label: "LinkedIn",
      action: "Connect",
    },
    {
      id: "email",
      icon: <FaAt />,
      bg: "bg-gradient-to-r from-red-500 to-red-600",
      label: "Email",
      action: "contact@beyond.com",
    },
  ];

  // Get WhatsApp link
  const getWhatsAppLink = () => {
    const phoneNumber = "9522745560";
    const message =
      "Hello! I'm interested in studying abroad. Please guide me.";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  // Get Instagram link
  const getInstagramLink = () => {
    return "https://instagram.com/beyond_education";
  };

  // Get LinkedIn link
  const getLinkedInLink = () => {
    return "https://linkedin.com/company/beyond-education";
  };

  return (
    <>
      {/* Sidebar */}
      {!hideSidebar && (
        <div className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50">
          <div className="flex flex-col items-center gap-1">
            {/* Toggle Button */}
            <button
              onClick={() => setHideSidebar(true)}
              className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-2 sm:p-3 cursor-pointer rounded-t-xl hover:from-gray-900 hover:to-gray-950 transition-all duration-300 group"
              aria-label="Hide sidebar"
            >
              <FaArrowLeft className="text-xs sm:text-sm group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            {/* Icons Wrapper */}
            <div className="bg-white/10 backdrop-blur-md rounded-b-xl overflow-hidden shadow-xl">
              {items.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActivePanel(item.id)}
                  onMouseLeave={() => setActivePanel(null)}
                  onClick={() => {
                    if (item.id === "whatsapp") {
                      window.open(getWhatsAppLink(), "_blank");
                    } else if (item.id === "instagram") {
                      window.open(getInstagramLink(), "_blank");
                    } else if (item.id === "linkedin") {
                      window.open(getLinkedInLink(), "_blank");
                    } else if (item.id === "phone") {
                      window.location.href = "tel:9082508672";
                    } else if (item.id === "email") {
                      window.location.href = "mailto:contact@beyond.com";
                    }
                  }}
                  className={`relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white cursor-pointer transition-all duration-300 ${item.bg} hover:scale-110 hover:rounded-xl group`}
                  aria-label={item.label}
                >
                  <span className="text-sm sm:text-base">{item.icon}</span>

                  {/* Tooltip for desktop */}
                  <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-50 hidden sm:block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Show Button */}
      {hideSidebar && (
        <button
          onClick={() => setHideSidebar(false)}
          className="fixed left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 sm:px-3 py-3 sm:py-4 rounded-r-xl cursor-pointer z-50 shadow-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 group"
          aria-label="Show sidebar"
        >
          <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      )}

      {/* Panels */}
      {activePanel && (
        <div
          className="fixed left-14 sm:left-20 top-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-2xl w-[280px] sm:w-80 z-40 transition-all duration-300 animate-slideIn"
          onMouseEnter={() => setActivePanel(activePanel)}
          onMouseLeave={() => setActivePanel(null)}
        >
          {/* Panel Header */}
          <div
            className={`${items.find((item) => item.id === activePanel)?.bg} p-4 rounded-t-2xl`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <span className="text-xl">
                  {items.find((item) => item.id === activePanel)?.icon}
                </span>
                <h3 className="font-semibold text-white">
                  {items.find((item) => item.id === activePanel)?.label}
                </h3>
              </div>
              <button
                onClick={() => setActivePanel(null)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close panel"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Panel Content */}
          <div className="p-4 sm:p-5 max-h-[80vh] overflow-y-auto">
            {activePanel === "contact" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Write your message..."
                    rows="3"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-2.5 rounded-lg font-semibold text-sm hover:from-orange-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-xs" />
                  Send Message
                </button>
              </form>
            )}

            {activePanel === "instagram" && (
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-4 mb-4">
                  <FaInstagram className="text-4xl text-white mx-auto mb-2" />
                  <p className="text-white text-sm">Follow us on Instagram</p>
                </div>
                <a
                  href={getInstagramLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2.5 rounded-lg font-semibold text-sm hover:from-pink-600 hover:to-purple-600 transition-all duration-200"
                >
                  @beyond_education
                </a>
                <p className="text-xs text-gray-500 mt-3">
                  Get daily updates and inspiration
                </p>
              </div>
            )}

            {activePanel === "phone" && (
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 mb-4">
                  <FaPhoneAlt className="text-4xl text-white mx-auto mb-2" />
                  <p className="text-white text-sm">Call us anytime</p>
                </div>
                <a
                  href="tel:9082508672"
                  className="block bg-gradient-to-r from-green-500 to-green-600 text-white p-2.5 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-200"
                >
                  9522745560
                </a>
                <p className="text-xs text-gray-500 mt-3">
                  Mon-Sat: 10 AM - 7 PM
                </p>
              </div>
            )}

            {activePanel === "whatsapp" && (
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-4 mb-4">
                  <FaWhatsapp className="text-4xl text-white mx-auto mb-2" />
                  <p className="text-white text-sm">Chat with us on WhatsApp</p>
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-green-400 to-green-500 text-white p-2.5 rounded-lg font-semibold text-sm hover:from-green-500 hover:to-green-600 transition-all duration-200"
                >
                  Start Chat →
                </a>
                <p className="text-xs text-gray-500 mt-3">
                  Instant replies within minutes
                </p>
              </div>
            )}

            {activePanel === "linkedin" && (
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 mb-4">
                  <FaLinkedin className="text-4xl text-white mx-auto mb-2" />
                  <p className="text-white text-sm">Connect with us</p>
                </div>
                <a
                  href={getLinkedInLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2.5 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                >
                  Beyond Education
                </a>
                <p className="text-xs text-gray-500 mt-3">
                  Follow for career opportunities
                </p>
              </div>
            )}

            {activePanel === "email" && (
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 mb-4">
                  <FaAt className="text-4xl text-white mx-auto mb-2" />
                  <p className="text-white text-sm">Email us</p>
                </div>
                <a
                  href="mailto:contact@beyond.com"
                  className="block bg-gradient-to-r from-red-500 to-red-600 text-white p-2.5 rounded-lg font-semibold text-sm hover:from-red-600 hover:to-red-700 transition-all duration-200"
                >
                  contact@beyond.com
                </a>
                <p className="text-xs text-gray-500 mt-3">
                  We'll respond within 24 hours
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingSidebar;
