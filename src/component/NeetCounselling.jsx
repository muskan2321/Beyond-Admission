import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NEETCounselling() {
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
            alt="NEET Counselling"
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
              🩺 Expert Guidance for Medical Aspirants
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              NEET Counselling –{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Your Pathway to Top Medical Colleges
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Get personalized guidance for NEET counselling from expert
              counsellors to secure admission in MBBS, BDS, and other medical
              programs.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Book Free Consultation
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
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

      {/* WHAT IS NEET COUNSELLING? SECTION */}
      <section className="relative pt-14 pb-6 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What is <span className="text-blue-600">NEET Counselling?</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Expert guidance to help you navigate the complex process of
              medical admission.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                alt="NEET Counselling"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="text-3xl font-bold text-blue-600">96%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Medical Colleges</p>
                  <p className="text-xl font-semibold text-gray-800">500+</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Your Gateway to Medical Education
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The National Eligibility cum Entrance Test (NEET) is the
                  gateway for admission into MBBS, BDS, and other medical
                  programs in India and abroad. The counseling process can be
                  complex, with multiple rounds, quotas, and documentation
                  requirements.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our NEET Counseling service helps students and parents
                  navigate this process with clarity and confidence — ensuring
                  the best possible admission based on rank, score, and
                  preferences.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our comprehensive counselling services include:
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "🎓 Rank & Score Analysis",
                  "🏥 College & Course Guidance",
                  "📋 AIQ & State Counseling Support",
                  "✍️ Choice Filling Assistance",
                  "💰 Counseling Strategy Planning",
                  "📄 Document Preparation Support",
                  "🎯 Seat Allotment Guidance",
                  "🏛️ Admission & Reporting Support",
                  "🌍 MBBS Abroad Counseling",
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

      {/* OUR NEET COUNSELING DELIVERABLES SECTION */}
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
              Our NEET Counseling{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Deliverables
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A comprehensive step-by-step approach to guide you through your
              medical admission journey
            </p>
          </div>

          {/* Row 1 - First 3 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      1. Rank & Score Analysis
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      We start with a detailed evaluation of your NEET
                      performance.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Analysis
                        of NEET score and All India Rank
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Understanding admission possibilities
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Identifying realistic college options
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Strategy
                        based on current year trends
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      2. College & Course Guidance
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      Choosing the right college is critical for your future.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        for MBBS, BDS, and other medical courses
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Information on Government, Private, Deemed universities
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Insights
                        on fees, infrastructure, and opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      3. All India & State Counseling Guidance
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      We guide you through all counseling processes.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Support
                        for AIQ and State quota counseling
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Step-by-step explanation of process
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Important
                        dates and deadlines tracking
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Next 3 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">✍️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      4. Choice Filling & Locking Assistance
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      A crucial step that directly impacts your seat allotment.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        on college preference order
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Strategic
                        choice filling assistance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Maximizing
                        chances of better seat allotment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      5. Counseling Strategy & Planning
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      We create a clear roadmap for every round.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Round-wise
                        strategy planning
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Backup
                        planning for multiple scenarios
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Upgrade
                        and exit strategy guidance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">📂</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      6. Document Preparation Support
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      Accurate documentation is essential for smooth admission.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        on NEET scorecard, academic certificates
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Verification checklist
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Ensuring
                        all documents are ready and correct
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 - Next 3 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      7. Seat Allotment Guidance
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      We help you understand and act on your allotment.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        after seat allotment results
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Options
                        available (accept, upgrade, participate next round)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Support in
                        decision making
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      8. Admission & Reporting Support
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      Final steps are handled with complete clarity.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        on admission confirmation process
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Support
                        for reporting to allotted college
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Checklist
                        for joining formalities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      9. MBBS Abroad Counseling
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      For students exploring options beyond India.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        for MBBS abroad options
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Country
                        and university selection support
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Basic
                        eligibility and process guidance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4 - Full Width Card */}
          <div className="mb-8">
            <div className="group bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100">
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-3xl">🤝</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      10. Continuous Support Throughout Counseling
                    </h3>
                    <p className="text-gray-600 text-base mb-3">
                      We stay with you till final admission confirmation.
                    </p>
                    <ul className="grid md:grid-cols-3 gap-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Regular
                        updates and alerts
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Real-time
                        support during counseling rounds
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Assistance
                        until seat confirmation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS SECTION */}
      <section className="pt-6 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Simple <span className="text-blue-600">4-Step Process</span>
          </h2>
          <p className="text-gray-600 text-lg mb-16">
            Your journey to studying abroad starts here
          </p>

          {/* STEPS */}
          <div className="flex flex-wrap justify-center items-center gap-6 relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -z-10"></div>

            {[
              {
                step: "1",
                title: "Free Consultation",
                desc: "Discuss your goals and aspirations",
              },
              {
                step: "2",
                title: "Profile Evaluation",
                desc: "Analyze academic background & strengths",
              },
              {
                step: "3",
                title: "University Selection",
                desc: "Curated list of best-fit universities",
              },
              {
                step: "4",
                title: "Application Support",
                desc: "End-to-end admission & visa help",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center relative">
                {/* NUMBER */}
                <div className="absolute -top-6 text-red-500 font-bold text-lg">
                  {item.step}
                </div>

                {/* CIRCLE */}
                <div className="w-36 h-36 bg-gray-700 text-white rounded-full flex flex-col justify-center items-center shadow-xl hover:scale-105 transition">
                  <h3 className="text-sm font-semibold text-center px-3">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-gray-200 mt-2 px-3 text-center leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR NEET COUNSELING SECTION */}
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
                NEET Counseling
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Proven strategies and personalized guidance to help you secure
              admission in top medical colleges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-blue-100 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-2xl">📐</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Structured & Strategic Counseling Approach
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Our proven methodology takes you through each stage of the
                  counseling process systematically.
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
                    <span className="text-white text-2xl">👤</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Personalized Guidance Based on Rank & Goals
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  We analyze your NEET rank and career goals to create a
                  personalized roadmap.
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
                    <span className="text-white text-2xl">🌍</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Support for Both India & Abroad Options
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Guidance for medical education in India as well as MBBS abroad
                  options.
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
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  End-to-End Assistance Throughout the Process
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  From rank analysis to final seat confirmation, we're with you
                  every step of the way.
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
                  <span className="text-gray-500 text-sm">
                    (10,000+ reviews)
                  </span>
                </div>
                <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏅</span>
                  <span className="text-gray-700">
                    Top Rated NEET Counseling Provider
                  </span>
                </div>
                <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  <span className="text-gray-700">96% Success Rate</span>
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
                  Find answers to the most common questions about our NEET
                  counseling services.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: "What is NEET counseling and how can it help me?",
                    a: "NEET counseling is the process of seat allocation for medical colleges based on your NEET rank. Our expert counselors help you navigate this complex process with personalized guidance on college selection, choice filling, document preparation, and more to ensure you get the best possible seat.",
                  },
                  {
                    q: "When should I start my NEET counseling process?",
                    a: "We recommend starting the counseling process as soon as your NEET results are declared. Early preparation helps in better college selection and choice filling strategy. However, we can assist at any stage of the counseling rounds.",
                  },
                  {
                    q: "Do you help with both AIQ and state quota counseling?",
                    a: "Yes, absolutely! We provide comprehensive support for both All India Quota (AIQ) counseling and State quota counseling. Our experts guide you through the different processes, important dates, and strategic choice filling for each round.",
                  },
                  {
                    q: "Can you help with MBBS abroad options?",
                    a: "Yes, we offer complete guidance for MBBS abroad for students exploring options beyond India. We help with country selection, university shortlisting, eligibility criteria, and process guidance for medical education abroad.",
                  },
                  {
                    q: "What makes your NEET counseling different from others?",
                    a: "Our NEET counseling stands out due to our structured strategic approach, personalized guidance based on your rank, support for both India and abroad options, and end-to-end assistance throughout the entire counseling process with 96% success rate.",
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
                  alt="FAQ - Student Consulting"
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
            Start Your Medical Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert guidance and secure your seat in the best medical
            college.
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
            Your dream medical college is just a conversation away.
          </p>
        </div>
      </section>
    </div>
  );
}
