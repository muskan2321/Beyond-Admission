import { useState, useEffect } from "react";
import { FaUserGraduate, FaWhatsapp } from "react-icons/fa";

export default function HomePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-5 text-white text-center">
              <FaUserGraduate className="text-3xl mx-auto mb-2" />
              <h2 className="text-xl font-bold">Get Free Counselling</h2>
              <p className="text-sm opacity-90">
                Talk to our admission experts
              </p>
            </div>

            {/* Close */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-white text-lg"
            >
              ✕
            </button>

            {/* Form */}
            <div className="p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Country Dropdown */}
              {/* <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Select Study Country</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
                <option>Ireland</option>
              </select> */}

              {/* Course Dropdown */}
              <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Select Course</option>
                <option>MBA</option>
                <option>Engineering</option>
                <option>Medical</option>
                <option>Management</option>
              </select>

              {/* Submit */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Submit
              </button>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
