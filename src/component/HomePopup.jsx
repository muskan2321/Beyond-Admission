import { useState, useEffect, useRef } from "react";
import {
  FaUserGraduate,
  FaWhatsapp,
  FaTimes,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaBookOpen,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePopup({ isOpen, onClose }) {
  const showPopup = isOpen;
  const [isClosing, setIsClosing] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // NEW STATES
  const [category, setCategory] = useState("");
  const [programs, setPrograms] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Function to show popup
  const showPopupWithDelay = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Show popup after a short delay to avoid immediate reappearance
    timeoutRef.current = setTimeout(() => {
      if (!isClosing) {
        setShowPopup(true);
      }
    }, 500);
  };

  // Function to start the interval
  const startInterval = () => {
    // Clear existing interval if any
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set new interval to show popup every 30 seconds
    intervalRef.current = setInterval(() => {
      // Only show popup if it's not already visible and not in closing state
      if (!showPopup && !isClosing) {
        setShowPopup(true);
      }
    }, 30000); // 30 seconds
  };

  // Initial popup after 1 second
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    // Start the 30-second interval
    startInterval();

    return () => {
      clearTimeout(initialTimer);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Reset interval when popup closes (to ensure consistent timing)
  useEffect(() => {
    if (!showPopup && !isClosing) {
      // Restart interval to reset timing
      startInterval();
    }
  }, [showPopup]);

  const handleClose = () => {
    // Set closing state to prevent immediate reopening
    setIsClosing(true);

    // Close the popup
    onClose();

    // Reset closing state after a short delay
    setTimeout(() => {
      setIsClosing(false);
    }, 1000);
  };

  // Dynamic options
  useEffect(() => {
    if (category === "mbbs") {
      setPrograms([
        "MBBS in Georgia",
        "MBBS in Russia",
        "MBBS in Uzbekistan",
        "MBBS in Kazakhstan",
        "MBBS in Kyrgyzstan",
        "MBBS in Nepal",
      ]);
    } else if (category === "abroad") {
      setPrograms(["Admission Counselling", "GRE", "GMAT", "SAT", "IELTS"]);
    } else if (category === "india") {
      setPrograms(["Neet Counselling", "UG", "PG", "MBA"]);
    } else {
      setPrograms([]);
    }
  }, [category]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const selectedProgram = document.getElementById("program").value;
    console.log("Form submitted:", {
      ...formData,
      category,
      program: selectedProgram,
    });

    // Close popup after submission
    handleClose();

    // You can also send data to your backend here
    // Example:
    // fetch('/api/submit-form', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ...formData, category, program: selectedProgram })
    // });
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          /> */}

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-md z-[100000]"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto scrollbar-hide">
              {/* Timer Indicator - Shows popup will reappear */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
                <div className="bg-black/50 backdrop-blur-sm text-white text-[8px] sm:text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Offers available
                </div>
              </div>

              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-700 to-blue-700 p-4 sm:p-5 md:p-6 text-white text-center">
                <FaUserGraduate className="text-3xl sm:text-4xl mx-auto mb-2 sm:mb-3" />
                <h2 className="text-xl sm:text-2xl font-bold">
                  Free Expert Counselling
                </h2>
                <p className="text-xs sm:text-sm text-indigo-100 mt-1 px-2">
                  Personalised guidance for your study abroad journey
                </p>
              </div>

              {/* Close Button - Responsive positioning */}
              <button
                onClick={handleClose}
                className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-200 z-20"
              >
                <FaTimes className="text-xs sm:text-sm" />
              </button>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4"
              >
                {/* Name Input */}
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-xl pl-8 sm:pl-9 md:pl-10 pr-3 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Full Name"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-xl pl-8 sm:pl-9 md:pl-10 pr-3 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-xl pl-8 sm:pl-9 md:pl-10 pr-3 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Email Address"
                    required
                  />
                </div>

                {/* Category Select */}
                <div className="relative">
                  <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm" />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl pl-8 sm:pl-9 md:pl-10 pr-3 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer"
                    required
                  >
                    <option value="">Interested In</option>
                    <option value="abroad">Study Abroad</option>
                    <option value="mbbs">MBBS Abroad</option>
                    <option value="india">Study in India</option>
                  </select>
                </div>

                {/* Dynamic Program Select */}
                <div className="relative">
                  <FaBookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm" />
                  <select
                    id="program"
                    className="w-full border border-gray-300 rounded-xl pl-8 sm:pl-9 md:pl-10 pr-3 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer"
                    disabled={!category}
                    required
                  >
                    <option value="">Select Program</option>
                    {programs.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Request Free Consultation
                </button>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919522745560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaWhatsapp className="text-base sm:text-lg" />
                  Chat on WhatsApp
                </a>

                {/* Security Note */}
                <p className="text-[10px] sm:text-xs text-center text-gray-400 mt-2">
                  🔒 Your details are secure. No spam, guaranteed.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
