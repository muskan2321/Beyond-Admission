import {
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
import api from "../api/axios"; //  API IMPORT

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SUBMIT FUNCTION =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/contact", formData);

      alert("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 text-center pt-36 pb-36 px-6 overflow-hidden">
        <div className="relative max-w-5xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A2F66]">
            Let’s Connect With Us
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We’re here to help you — reach out for guidance, support, or
            inquiries.
          </p>

          <div className="flex justify-center items-center gap-2 text-[#0A2F66] font-semibold">
            <span className="flex items-center gap-2 hover:text-indigo-600 cursor-pointer transition">
              Home <FaChevronRight />
            </span>
            <span className="text-gray-600">Contact</span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="bg-gray-50 py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* CONTACT FORM */}

          <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-12 border border-white/40">
            <h2 className="text-3xl font-bold mb-10 text-gray-800">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition shadow-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition shadow-sm"
              />

              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition shadow-sm"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition shadow-sm"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}

          <div className="space-y-8">
            {[
              {
                icon: <FaPhoneAlt />,
                title: "Call Us",
                value: "+91 98765 43210",
                bg: "bg-blue-100",
                color: "text-blue-600",
              },
              {
                icon: <FaEnvelope />,
                title: "Email Us",
                value: "info@yourwebsite.com",
                bg: "bg-indigo-100",
                color: "text-indigo-600",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Visit Us",
                value: "123 Education Street, Bhopal, India",
                bg: "bg-purple-100",
                color: "text-purple-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
              >
                <div
                  className={`${item.bg} p-5 rounded-full ${item.color} text-xl`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
