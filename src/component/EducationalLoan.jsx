import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaClipboardList,
  FaUniversity,
  FaFileAlt,
  FaPaperPlane,
  FaChartLine,
  FaHandshake,
  FaRocket,
  FaGraduationCap,
  FaRupeeSign,
} from "react-icons/fa";

export default function CombinedPage() {
  // Data for loan assistance
  const deliverables = [
    {
      icon: FaCheckCircle,
      title: "Loan Eligibility Assessment",
      desc: "Evaluation of academic profile, financial background, and identification of suitable loan options.",
    },
    {
      icon: FaClipboardList,
      title: "Loan Options Guidance",
      desc: "Secured vs. unsecured loans, comparison of terms, and repayment structures.",
    },
    {
      icon: FaUniversity,
      title: "Assistance Through Trusted Partners",
      desc: "Connection with leading banks and NBFCs for reliable financing.",
    },
    {
      icon: FaFileAlt,
      title: "Documentation Support",
      desc: "Preparation of income proof, academic records, and document verification.",
    },
    {
      icon: FaPaperPlane,
      title: "Loan Application Support",
      desc: "Step‑by‑step help with applications and error‑free submission.",
    },
    {
      icon: FaChartLine,
      title: "Application Tracking & Follow-Ups",
      desc: "Regular updates and follow‑ups with financial institutions.",
    },
    {
      icon: FaHandshake,
      title: "Approval & Sanction Guidance",
      desc: "Understanding loan sanction letters and next steps.",
    },
    {
      icon: FaRocket,
      title: "Disbursement Support",
      desc: "Coordination for timely fund release to the university.",
    },
  ];

  const reasons = [
    "Structured and guided process",
    "Support through trusted financial partners",
    "Simplified documentation and application",
    "Continuous follow‑ups for faster processing",
  ];

  return (
    <>
      {/* IELTS Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/education bg.jpg"
            className="w-full h-full object-cover scale-110"
            alt="IELTS Preparation"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

        {/* Animated Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/30 blur-3xl rounded-full animate-blob delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
          <div>
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
              🎓 International English Language Testing System
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Education –{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Loan Assistance
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Get hassle-free education loan assistance with trusted financial
              partners. We help you secure funds for tuition fees, living
              expenses, and other study abroad costs with easy guidance and
              quick approval support.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Enroll for Free Demo
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-yellow-400 text-5xl mb-4">★</div>
                <p className="text-white text-lg font-semibold mb-2">
                  Rated 4.7/5
                </p>
                <p className="text-white/70 text-sm">by 10,000+ students</p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-white text-sm">
                    "Best IELTS coaching with excellent faculty support"
                  </p>
                  <p className="text-yellow-300 text-sm mt-2">— Sahil Khanna</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(20px,-30px) scale(1.1); }
          }
          .animate-blob { animation: blob 10s infinite; }
        `}</style>
      </section>

      {/* Education Loan Assistance Section */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <FaGraduationCap />
              <span>Financial Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
              Education Loan Assistance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Finance Your Study Abroad Dream
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              Studying abroad is a big investment, and managing finances can be
              challenging. Our Education Loan Assistance service helps students
              secure the right funding through trusted financial partners,
              making the process smooth and stress‑free. We guide you at every
              step — from understanding loan options to successful application
              and approval.
            </p>
          </div>

          {/* Deliverables Grid */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
              Our Education Loan Deliverables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <item.icon className="text-xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
                <span className="text-blue-700 font-semibold uppercase tracking-wide">
                  Why Choose Us
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Why Choose Our Education Loan Assistance?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCheckCircle className="text-green-500 text-lg" />
                    </div>
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Start Your Loan Process Today
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Get the financial support you need to pursue your study abroad
              goals with confidence. Plan your finances. Secure your loan. Focus
              on your future.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
            >
              <FaRupeeSign />
              Apply for Loan Assistance
              <FaRocket />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
