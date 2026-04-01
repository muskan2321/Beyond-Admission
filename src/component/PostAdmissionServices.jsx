import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PostAdmissionServices() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white font-[Inter]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/education bg.jpg"
            className="w-full h-full object-cover scale-110"
            alt="Post Admission Services"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

        {/* Animated Blobs - Responsive sizes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-500/30 blur-3xl rounded-full animate-blob"></div>
          <div className="absolute bottom-10 right-5 md:bottom-10 md:right-10 w-56 h-56 md:w-80 md:h-80 bg-indigo-500/30 blur-3xl rounded-full animate-blob delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
          <div className="text-center md:text-left">
            <div className="inline-block mb-4 md:mb-6 px-4 py-1.5 md:px-5 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm border border-white/20">
              ✈️ Complete Support for Your Journey Abroad
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Post Admission Services –{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Your Smooth Transition to Studying Abroad
              </span>
            </h1>

            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-xl mx-auto md:mx-0">
              Getting admission is just the beginning. Managing everything after
              admission — from accommodation to travel and finances — can be
              overwhelming. Our Post Admission Services ensure a smooth
              transition for students by providing complete support for all
              essential requirements before you travel abroad.
            </p>

            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <button className="px-6 py-2.5 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition text-sm md:text-base">
                  Book Free Consultation
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-6 py-2.5 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition text-sm md:text-base">
                  Talk to an Expert
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

      {/* WHAT IS POST ADMISSION SERVICES? SECTION */}
      <section className="relative pt-14 pb-6 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What are{" "}
              <span className="text-blue-600">Post Admission Services?</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Complete support to help you transition smoothly from admission to
              departure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                alt="Post Admission Services"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Students Supported</p>
                  <p className="text-3xl font-bold text-blue-600">5000+</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Countries Covered</p>
                  <p className="text-xl font-semibold text-gray-800">20+</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Your Complete Support System
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Getting admission is just the beginning. Managing everything
                  after admission — from accommodation to travel and finances —
                  can be overwhelming. Our Post Admission Services ensure a
                  smooth transition for students by providing complete support
                  for all essential requirements before you travel abroad.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  From health insurance and accommodation to forex, banking, and
                  travel assistance, we help you prepare for every aspect of
                  your journey abroad.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our comprehensive post admission services include:
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "🩺 Overseas Health Insurance",
                  "💱 Forex & Currency Exchange",
                  "🏠 Accommodation Assistance",
                  "🏦 International Bank Account",
                  "📱 SIM Card & Connectivity",
                  "✈️ Flight Ticket Booking",
                  "💰 Money Transfer Assistance",
                  "📋 Pre-Departure Guidance",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition rounded-xl p-4 text-sm font-medium text-gray-800"
                  >
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Link to="/contact">
                  <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
                    Book Free Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-40px) translateX(20px);
            }
            100% {
              transform: translateY(0px) translateX(0px);
            }
          }
          .animate-float {
            animation: float 14s ease-in-out infinite;
          }
          .delay-2000 {
            animation-delay: 2s;
          }
          .delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* OUR POST ADMISSION DELIVERABLES SECTION */}
      <section className="pt-6 pb-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <span>📋</span> What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Post Admission{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Deliverables
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive support to ensure a smooth transition from admission
              to departure
            </p>
          </div>

          {/* Row 1 - First 4 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Item 1 - Overseas Health Insurance Assistance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                    <span className="text-white text-2xl">🩺</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    1. Overseas Health Insurance Assistance
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    We help you secure the right health insurance as required by
                    universities and visa guidelines.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-xs text-left w-full">
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Guidance on selecting suitable insurance plans
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Support with university-approved insurance options
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Assistance with policy selection and documentation
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Ensuring compliance with country-specific requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 2 - Forex & Currency Exchange Assistance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                    <span className="text-white text-2xl">💱</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    2. Forex & Currency Exchange Assistance
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    Managing foreign currency is crucial before departure.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-xs text-left w-full">
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Guidance on forex options: Forex cards, Currency exchange
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Assistance through trusted forex partners
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Support for competitive exchange rates
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Guidance on safe and convenient transactions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 3 - Accommodation Assistance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                    <span className="text-white text-2xl">🏠</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    3. Accommodation Assistance
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    Finding the right place to stay is one of the biggest
                    concerns for students.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-xs text-left w-full">
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Guidance on university accommodation & private housing
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Assistance in shortlisting safe and affordable options
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Support with booking process
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Pre-departure accommodation planning
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 4 - International Bank Account Assistance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                    <span className="text-white text-2xl">🏦</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    4. International Bank Account Assistance
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    We help you set up your financial system for smooth
                    transactions abroad.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-xs text-left w-full">
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Guidance on opening international/student bank accounts
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Support with required documentation
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Assistance in understanding banking processes
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Pre-arrival or post-arrival account setup guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Next 4 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Item 5 - SIM Card & Connectivity Support */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                    <span className="text-white text-2xl">📱</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    5. SIM Card & Connectivity Support
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    Stay connected from the moment you land.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-xs text-left w-full">
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Guidance on international/student SIM cards
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Assistance with activation process
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Options for affordable data and calling plans
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Ensuring connectivity upon arrival
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 6 - Flight Ticket Booking Assistance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                    <span className="text-white text-2xl">✈️</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    6. Flight Ticket Booking Assistance
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    We help you plan your travel conveniently and
                    cost-effectively.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-xs text-left w-full">
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Guidance on booking international flights
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Support in selecting best routes and timings
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Assistance with student fare options
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Travel planning as per university reporting dates
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 7 - Money Transfer Assistance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    7. Money Transfer Assistance
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    Transferring funds internationally needs to be secure and
                    efficient.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-xs text-left w-full">
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Guidance on international money transfer options
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Support through trusted transfer partners
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Assistance in fee payment transfers
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Ensuring safe and timely transactions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 8 - Pre-Departure Guidance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                    <span className="text-white text-2xl">📋</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    8. Pre-Departure Guidance
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    We prepare you for your journey abroad.
                  </p>
                  <ul className="space-y-1 text-gray-600 text-xs text-left w-full">
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Checklist of important documents
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Travel preparation guidance
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Tips for living abroad
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5 text-xs">✓</span>{" "}
                      Basic orientation for students
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR POST ADMISSION SERVICES SECTION */}
      <section className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <span>🏆</span> Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Post Admission Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete support to ensure a smooth transition from admission to
              departure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-blue-100 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-2xl">🏠</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Complete Support Under One Roof
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  All your post-admission needs are handled by a single trusted
                  team.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-blue-200 rounded-full group-hover:bg-blue-500 transition"></div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-indigo-100 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Trusted Partner Network
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Access to reliable partners for insurance, forex,
                  accommodation, and banking.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-indigo-200 rounded-full group-hover:bg-indigo-500 transition"></div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-purple-100 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-2xl">📋</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Simplified Process
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Easy and hassle-free process for students and parents to
                  manage all requirements.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-purple-200 rounded-full group-hover:bg-purple-500 transition"></div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-green-100 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-2xl">✈️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Smooth Transition
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Ensuring a seamless journey from admission to departure with
                  end-to-end support.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-green-200 rounded-full group-hover:bg-green-500 transition"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-2xl">★★★★★</span>
                  <span className="text-gray-700 font-semibold">4.9/5</span>
                  <span className="text-gray-500 text-sm">(5000+ reviews)</span>
                </div>
                <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏅</span>
                  <span className="text-gray-700">
                    Top Rated Post Admission Services
                  </span>
                </div>
                <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  <span className="text-gray-700">
                    5000+ Students Supported
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-lg">
                  <span>❓</span> Frequently Asked Questions
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Got Questions?{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    We've Got Answers
                  </span>
                </h2>
                <p className="text-gray-600">
                  Find answers to the most common questions about our post
                  admission services.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: "What are post admission services?",
                    a: "Post admission services are comprehensive support services that help students manage everything after securing admission — from health insurance, accommodation, forex, banking, travel arrangements, and pre-departure guidance. We ensure a smooth transition from admission to departure.",
                  },
                  {
                    q: "When should I start using post admission services?",
                    a: "We recommend starting as soon as you receive your admission confirmation and visa approval. This gives you ample time to arrange accommodation, forex, insurance, and travel plans without last-minute stress.",
                  },
                  {
                    q: "Do you help with accommodation near the university?",
                    a: "Yes, we provide complete accommodation assistance including guidance on university housing and private accommodation options. We help you shortlist safe, affordable, and convenient options near your university.",
                  },
                  {
                    q: "Can you help with forex and international money transfer?",
                    a: "Yes, we offer guidance on forex cards, currency exchange, and international money transfers through trusted partners. We help ensure you get competitive rates and safe transactions.",
                  },
                  {
                    q: "What makes your post admission services different?",
                    a: "Our post admission services stand out because we provide complete support under one roof with a trusted partner network. We simplify the entire process for students and parents, ensuring a smooth and hassle-free transition from admission to departure.",
                  },
                ].map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex justify-between items-center px-6 py-4 text-left cursor-pointer"
                      >
                        <span className="font-semibold text-gray-800 pr-4">
                          {item.q}
                        </span>
                        <span
                          className={`text-xl font-bold text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                      >
                        <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">💬</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">
                      Still have questions?
                    </p>
                    <p className="text-gray-600 text-sm">
                      Our team is here to help you
                    </p>
                  </div>
                  <Link to="/contact">
                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=800&h=1000&fit=crop"
                  alt="FAQ - Student Support"
                  className="w-full h-100 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-lg">💬</span>
                    </div>
                    <div>
                      <p className="font-semibold">Get expert guidance</p>
                      <p className="text-sm text-white/80">
                        Book a free consultation today
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-full shadow-xl p-3 animate-pulse">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">❓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Your Journey Abroad with Confidence
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get complete support for all your post-admission needs — from
            insurance to travel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105">
                Book Free Consultation
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white/20 border border-white/40 hover:bg-white/30 font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105">
                Talk to an Expert
              </button>
            </Link>
          </div>
          <p className="mt-8 text-blue-100 text-lg">
            Your smooth transition to studying abroad starts here.
          </p>
        </div>
      </section>
    </div>
  );
}
