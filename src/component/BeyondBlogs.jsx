import React, { useState } from "react";
import {
  FaUserGraduate,
  FaCheckCircle,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaGlobe,
  FaMoneyBillWave,
  FaHandshake,
  FaChartLine,
  FaComments,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaBookOpen,
  FaRocket,
  FaShieldAlt,
  FaUniversity,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function BeyondBlogs() {
  const [activeTab, setActiveTab] = useState("students");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const stats = [
    { number: "100%", label: "Personalized Guidance", icon: FaUserGraduate },
    { number: "1-on-1", label: "Expert Counselling", icon: FaUsers },
    { number: "End-to-End", label: "Admission Support", icon: FaHandshake },
    { number: "24/7", label: "Student Assistance", icon: FaComments },
  ];

  const services = [
    {
      icon: FaUserGraduate,
      title: "Personalized Career Guidance",
      desc: "1-on-1 sessions to understand your strengths and career aspirations",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Expert Counsellors",
      desc: "Industry professionals with years of experience in education",
    },
    {
      icon: FaGlobe,
      title: "Global University Network",
      desc: "Access to 500+ universities across India and abroad",
    },
    {
      icon: FaMoneyBillWave,
      title: "Scholarship Assistance",
      desc: "Help you find and apply for relevant scholarships",
    },
    {
      icon: FaHandshake,
      title: "End-to-End Support",
      desc: "From application to visa, we're with you every step",
    },
    {
      icon: FaComments,
      title: "24/7 Query Resolution",
      desc: "Round-the-clock support for all your questions",
    },
    {
      icon: FaBookOpen,
      title: "SOP & LOR Guidance",
      desc: "Expert help with Statement of Purpose and Letters of Recommendation",
    },
    {
      icon: FaRocket,
      title: "Career Roadmap",
      desc: "Customized career path planning for long-term success",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Book Consultation",
      desc: "Schedule a free session with our expert counsellors",
      icon: "📅",
    },
    {
      step: "02",
      title: "Profile Analysis",
      desc: "We analyze your academic profile and career goals",
      icon: "📊",
    },
    {
      step: "03",
      title: "University Selection",
      desc: "Get personalized university and course recommendations",
      icon: "🎓",
    },
    {
      step: "04",
      title: "Application Support",
      desc: "Complete guidance through application process",
      icon: "📝",
    },
    {
      step: "05",
      title: "Interview Preparation",
      desc: "Mock interviews and preparation sessions",
      icon: "💬",
    },
    {
      step: "06",
      title: "Admission Confirmation",
      desc: "Finalize admission and pre-departure guidance",
      icon: "✅",
    },
  ];

  const faqs = [
    {
      q: "Is the counselling session free?",
      a: "Yes, your first consultation session is completely free. We believe in providing value before you commit.",
    },
    {
      q: "How long does the admission process take?",
      a: "The process typically takes 2-4 weeks depending on the university and course requirements. For international admissions, it may take 4-8 weeks.",
    },
    {
      q: "Do you help with scholarships?",
      a: "Yes, we provide complete guidance on available scholarships and help with application process. We've helped students secure over ₹50 crores in scholarships.",
    },
    {
      q: "Can I get help for studying abroad?",
      a: "Absolutely! We have experts for both domestic and international university admissions across 20+ countries.",
    },
    {
      q: "Do you offer visa assistance?",
      a: "Yes, we provide comprehensive visa guidance including documentation, interview preparation, and pre-departure support.",
    },
    {
      q: "What documents do I need to prepare?",
      a: "We provide a detailed checklist of documents required for applications, including academic transcripts, SOP, LOR, test scores, and more.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* HERO SECTION - Responsive */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/education bg.jpg"
            className="w-full h-full object-cover scale-110"
            alt="Beyond Blogs - Expert Education Guidance"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

        {/* Animated Blobs - Responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-500/30 blur-3xl rounded-full animate-blob"></div>
          <div className="absolute bottom-10 right-5 md:bottom-10 md:right-10 w-56 h-56 md:w-80 md:h-80 bg-indigo-500/30 blur-3xl rounded-full animate-blob delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
          <div className="text-center md:text-left">
            <div className="inline-block mb-4 md:mb-6 px-4 py-1.5 md:px-5 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm border border-white/20">
              🎓 Your Future Starts Here
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Beyond Blogs –{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Your Gateway to Global Education
              </span>
            </h1>

            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-xl mx-auto md:mx-0">
              Get expert guidance to choose the right university and course
              based on your profile. Transform your career dreams into reality.
            </p>

            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <button className="px-6 py-2.5 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition text-sm md:text-base">
                  Book Free Consultation
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 py-2.5 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition text-sm md:text-base">
                  Explore Programs
                </button>
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(20px,-30px) scale(1.1); }
          }
          .animate-blob { animation: blob 10s infinite; }
        `}</style>
      </section>

      {/* STATS SECTION - Responsive */}
      <div className="relative z-20 max-w-7xl mx-auto -mt-12 md:-mt-20 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <stat.icon className="text-2xl md:text-4xl text-blue-600 mx-auto mb-2 md:mb-3" />
              <div className="text-xl md:text-3xl font-bold text-gray-800">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE OUR COUNSELLING SECTION - Responsive */}
      <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-3 py-1 md:px-4 md:py-1 bg-blue-100 text-blue-600 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Why Choose Us?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Your Trusted Partner in{" "}
              <span className="text-blue-600">Education Journey</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
              We understand that choosing the right course and university is one
              of the most important decisions of your life. Our expert
              counsellors are here to guide you every step of the way.
            </p>

            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <FaCheckCircle className="text-green-500 text-base md:text-xl mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">
                  Personalized career guidance based on your strengths and
                  interests
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FaCheckCircle className="text-green-500 text-base md:text-xl mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">
                  Top university selection support with detailed comparisons
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FaCheckCircle className="text-green-500 text-base md:text-xl mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">
                  End-to-end admission process help including SOP and LOR
                  assistance
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FaCheckCircle className="text-green-500 text-base md:text-xl mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">
                  1-on-1 expert consultation with experienced counsellors
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FaCheckCircle className="text-green-500 text-base md:text-xl mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">
                  Scholarship guidance and financial aid assistance
                </span>
              </li>
            </ul>

            <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
              <Link to="/contact">
                <button className="px-5 py-2.5 md:px-6 md:py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition flex items-center gap-2 text-sm md:text-base">
                  Apply Now <FaArrowRight className="text-xs md:text-sm" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-5 py-2.5 md:px-6 md:py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition text-sm md:text-base">
                  Talk to Expert
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 md:mt-0">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl md:rounded-3xl blur-2xl opacity-20"></div>
            <img
              src="/image/admission-1.jpg"
              alt="admission"
              className="relative rounded-xl md:rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-lg md:rounded-xl shadow-lg p-2 md:p-4">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 text-xs md:text-sm"
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm font-semibold">
                  4.9/5 Rating
                </span>
              </div>
              <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                From 10,000+ students
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION - Responsive */}
      <div className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block px-3 py-1 md:px-4 md:py-1 bg-blue-100 text-blue-600 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Our Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
              What We <span className="text-blue-600">Offer</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
              Comprehensive support to help you achieve your educational goals
            </p>
            <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto rounded-full mt-3 md:mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition group"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-blue-600 transition">
                  <service.icon className="text-lg md:text-2xl text-blue-600 group-hover:text-white transition" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-800 mb-1 md:mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROCESS SECTION - Responsive */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Simple 6-step process to get you started on your dream career
            </p>
            <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto rounded-full mt-3 md:mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1 md:mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ SECTION - Responsive */}
      <div className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block px-3 py-1 md:px-4 md:py-1 bg-blue-100 text-blue-600 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              ❓ Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
              Got Questions?{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                We've Got Answers
              </span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-3 md:p-5 flex justify-between items-center hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-gray-800 text-sm md:text-base pr-2">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-4 h-4 md:w-5 md:h-5 text-gray-400 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                  >
                    <div className="p-3 md:p-5 pt-0 text-gray-600 text-xs md:text-sm border-t border-gray-100">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 md:mt-8 p-4 md:p-5 bg-blue-50 rounded-lg md:rounded-xl border border-blue-100">
            <div className="flex items-center gap-3 md:gap-4 flex-wrap">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaComments className="text-blue-600 text-base md:text-xl" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium text-sm md:text-base">
                  Still have questions?
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  Our team is here to help you
                </p>
              </div>
              <Link to="/contact">
                <button className="px-4 py-1.5 md:px-5 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition text-xs md:text-sm">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION - Responsive */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8">
            Get expert guidance and unlock your dream career today
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link to="/contact">
              <button className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition transform hover:-translate-y-1 text-sm md:text-base">
                Book Free Consultation
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-6 py-2.5 md:px-8 md:py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition text-sm md:text-base">
                Call Now
              </button>
            </Link>
          </div>
          <p className="mt-6 md:mt-8 text-blue-100 text-xs md:text-sm">
            *Limited slots available for free consultation. Book now!
          </p>
        </div>
      </div>
    </div>
  );
}

export default BeyondBlogs;
