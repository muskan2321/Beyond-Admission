import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdmissionCounselling() {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div className="bg-white font-[Inter]">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/education bg.jpg"
            className="w-full h-full object-cover scale-110"
            alt="Admission Counselling"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>

        {/* Animated Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-5 md:left-10 w-40 md:w-72 h-40 md:h-72 bg-blue-500/30 blur-3xl rounded-full animate-blob"></div>
          <div className="absolute bottom-5 md:bottom-10 right-5 md:right-10 w-52 md:w-80 h-52 md:h-80 bg-indigo-500/30 blur-3xl rounded-full animate-blob delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-block mb-4 md:mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs sm:text-sm border border-white/20">
              🎓 Expert Guidance for Your Global Education
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug md:leading-tight">
              Admission Counselling –{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Your Pathway to Top Universities
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-xl mx-auto md:mx-0">
              Get personalized guidance from expert counsellors to navigate your
              study abroad journey, from university selection to visa approval.
            </p>

            {/* Buttons */}
            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Book Free Consultation
                </button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animation */}
        <style>{`
    @keyframes blob {
      0%, 100% { transform: translate(0,0) scale(1); }
      50% { transform: translate(20px,-30px) scale(1.1); }
    }
    .animate-blob { animation: blob 10s infinite; }
  `}</style>
      </section>

      {/* WHAT IS ADMISSION COUNSELLING? SECTION */}
      <section className="relative pt-14 pb-6 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What is{" "}
              <span className="text-blue-600">Admission Counselling?</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Expert guidance to help you navigate the complex process of
              studying abroad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                alt="Admission Counselling"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="text-3xl font-bold text-blue-600">95%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Partner Universities</p>
                  <p className="text-xl font-semibold text-gray-800">200+</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Your Gateway to Global Education
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Admission counselling is a professional guidance service that
                  helps students navigate the complex process of applying to
                  universities abroad. Our expert counsellors provide
                  personalized support to help you make informed decisions about
                  your academic future.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  From university selection and application assistance to visa
                  guidance and pre-departure support, we ensure you have
                  everything you need for a successful study abroad journey.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our comprehensive counselling services include:
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "🎓 University Selection & Shortlisting",
                  "📝 Application & Essay Assistance",
                  "📄 Statement of Purpose (SOP) Guidance",
                  "✍️ Letter of Recommendation (LOR) Support",
                  "💰 Scholarship & Financial Aid Guidance",
                  "🎤 Interview Preparation",
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

      {/* OUR ADMISSION COUNSELING DELIVERABLES SECTION */}
      <section className="pt-6 pb-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <span>📋</span> What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Admission Counseling{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Deliverables
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A comprehensive step-by-step approach to guide you through your
              study abroad journey
            </p>
          </div>

          {/* Row 1 - First 3 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Item 1 - Profile Evaluation & Career Mapping */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      1. Profile Evaluation & Career Mapping
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      We begin with a detailed understanding of your profile to
                      create a strong foundation.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Evaluation
                        of academic background and performance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Understanding career goals and future plans
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Identification of strengths and improvement areas
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Mapping
                        suitable courses based on your interests
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 - Course & Country Selection Guidance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      2. Course & Country Selection Guidance
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      Selecting the right destination is critical for long-term
                      success.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        for top study destinations: USA, UK, Canada, Australia,
                        Europe
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Selection
                        of courses aligned with career opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Insights
                        into job prospects and future scope
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 - University Shortlisting Strategy */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      3. University Shortlisting Strategy
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      We create a well-balanced list of universities to maximize
                      your chances.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Shortlisting based on academic profile, test scores,
                        budget
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Categorization into Safe, Moderate, Ambitious options
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Strategic
                        planning to ensure higher success rate
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Next 3 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Item 4 - Application Planning & Timeline Management */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      4. Application Planning & Timeline Management
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      A structured plan ensures you never miss important
                      deadlines.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Step-by-step application roadmap
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Timeline
                        planning for each university
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Prioritization of applications & regular deadline
                        tracking
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 5 - Application Form Assistance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      5. Application Form Assistance
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      We help you complete your applications accurately and
                      effectively.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        for filling university application forms
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Support
                        with uploading documents
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Ensuring
                        all details are correctly filled & avoiding common
                        errors
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 6 - Document Preparation Support */}
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
                      Strong documentation plays a key role in securing
                      admissions.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        on required documents: Transcripts, Resume/CV, Test
                        scores
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Ensuring
                        proper formatting and presentation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Checklist-based document verification
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 - Next 3 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Item 7 - SOP & LOR Guidance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">✍️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      7. SOP & LOR Guidance (Integrated Support)
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      We guide you in creating impactful application documents.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Direction
                        for writing a strong Statement of Purpose
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        for Letters of Recommendation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Aligning
                        documents with your profile and goals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 8 - Application Submission & Tracking */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">📤</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      8. Application Submission & Tracking
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      We ensure your applications are submitted smoothly and
                      tracked properly.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Final
                        review before submission
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Submission
                        support for all universities
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Tracking
                        application status & updates on offers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 9 - Offer Letter Guidance */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 flex-shrink-0">
                    <span className="text-white text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      9. Offer Letter Guidance
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      Once you receive offers, we help you make the right
                      decision.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>{" "}
                        Understanding offer letters
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Comparing
                        universities and programs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Guidance
                        on acceptance process
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
                      10. Continuous Support & Follow-Up
                    </h3>
                    <p className="text-gray-600 text-base mb-3">
                      Our support doesn't stop at application submission. We're
                      with you until you reach your destination.
                    </p>
                    <ul className="grid md:grid-cols-3 gap-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Regular
                        follow-ups with students
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Updates on
                        application progress
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> Assistance
                        until final admission confirmation
                      </li>
                    </ul>
                  </div>
                </div>
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
        `}</style>
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

      {/* WHY OUR ADMISSION COUNSELING WORKS SECTION */}
      <section className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <span>🏆</span> Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Admission Counseling
              </span>{" "}
              Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Proven strategies and personalized guidance to help you secure
              admission to your dream university
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Structured Approach */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-blue-100 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-2xl">📐</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Structured & Step-by-Step Approach
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Our proven methodology takes you through each stage of the
                  admission process systematically, ensuring no detail is
                  missed.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-blue-200 rounded-full group-hover:bg-blue-500 transition"></div>
                </div>
              </div>
            </div>

            {/* Card 2 - Profile-Based Guidance */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-indigo-100 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-2xl">👤</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Focus on Profile-Based Guidance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  We analyze your unique strengths, academic background, and
                  career goals to create a personalized roadmap.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-indigo-200 rounded-full group-hover:bg-indigo-500 transition"></div>
                </div>
              </div>
            </div>

            {/* Card 3 - Clear Strategy */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-purple-100 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Clear Strategy to Improve Admission Chances
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Get actionable insights and strategic recommendations to
                  strengthen your application and stand out.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-purple-200 rounded-full group-hover:bg-purple-500 transition"></div>
                </div>
              </div>
            </div>

            {/* Card 4 - Continuous Support */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-green-100 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Continuous Support Throughout the Journey
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  From initial consultation to visa approval and beyond, our
                  team stays with you every step of the way.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-green-200 rounded-full group-hover:bg-green-500 transition"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-2xl">★★★★★</span>
                  <span className="text-gray-700 font-semibold">4.9/5</span>
                  <span className="text-gray-500 text-sm">
                    (15,000+ reviews)
                  </span>
                </div>
                <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏅</span>
                  <span className="text-gray-700">
                    Top Rated Admission Counseling Provider
                  </span>
                </div>
                <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  <span className="text-gray-700">95% Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Free Consultation
            </button>
          </div> */}
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
        `}</style>
      </section>

      {/* FAQ SECTION - Left Content, Right Image */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - FAQ CONTENT */}
            <div>
              {/* Section Header */}
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
                  Find answers to the most common questions about our admission
                  counseling services.
                </p>
              </div>

              {/* FAQ Accordion - Single Open at a Time */}
              <div className="space-y-4">
                {[
                  {
                    q: "What is admission counseling and how can it help me?",
                    a: "Admission counseling is a professional guidance service that helps students navigate the complex process of applying to universities abroad. Our expert counselors provide personalized support in university selection, application preparation, essay writing, scholarship guidance, visa assistance, and more. We help you make informed decisions and increase your chances of getting into your dream university.",
                  },
                  {
                    q: "When should I start my admission counseling process?",
                    a: "We recommend starting the admission counseling process at least 12-18 months before your intended intake. This gives you ample time for test preparation, university research, application drafting, and scholarship applications. However, we can help at any stage of your journey, even if you're starting closer to deadlines.",
                  },
                  {
                    q: "Do you help with scholarship applications and financial aid?",
                    a: "Yes, absolutely! Our counselors provide comprehensive support for scholarship applications and financial aid. We help identify relevant scholarships, guide you through application requirements, assist with essay writing, and help you present your profile in the best possible light to maximize your chances of receiving financial support.",
                  },
                  {
                    q: "Can you help with visa applications and interview preparation?",
                    a: "Yes, we offer complete visa counseling services including document preparation, visa application guidance, and mock interview sessions. Our experienced counselors will prepare you for visa interviews with tips, strategies, and practice sessions to ensure you feel confident and prepared.",
                  },
                  {
                    q: "What makes your admission counseling different from others?",
                    a: "Our admission counseling stands out due to our structured step-by-step approach, focus on profile-based guidance, clear strategies to improve admission chances, and continuous support throughout your journey. With 30+ years of experience, 5000+ successful students, and 200+ partner universities, we have the expertise and network to help you achieve your study abroad dreams.",
                  },
                ].map((item, index) => {
                  const [openIndex, setOpenIndex] = React.useState(null);
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

              {/* Contact Support */}
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

            {/* RIGHT SIDE - IMAGE */}
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

              {/* Floating Badge */}
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
            Start Your Study Abroad Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert guidance and turn your dream of studying abroad into
            reality.
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
            Your dream university is just a conversation away.
          </p>
        </div>
      </section>
    </div>
  );
}
