import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import HomePopup from "./HomePopup";
import GREResultsSlider from "./GREResultsSlider.jsx";

export default function GMAT() {
  const [activeTab, setActiveTab] = useState("online");
  const [openIndex, setOpenIndex] = useState(null);
  const [active, setActive] = useState("concept");
  const toggle = (key) => {
    setActive(active === key ? null : key);
  };

   const reviews = [
     {
       text: "Best GRE coaching with excellent faculty support. The teaching methods are very structured and helped me understand even the toughest concepts easily.",
       name: "Sahil Khanna",
     },
     {
       text: "Great study material and amazing doubt support. The personalized guidance and regular feedback sessions made my preparation much more effective.",
       name: "Riya Sharma",
     },
     {
       text: "Helped me improve my score significantly. The mock tests, analytics, and strategy sessions were extremely helpful in improving my performance.",
       name: "Aman Verma",
     },
     {
       text: "Highly recommended for serious aspirants. The overall learning experience, faculty support, and resources are top-notch.",
       name: "Neha Gupta",
     },
   ];

   const settings = {
     dots: true,
     infinite: true,
     autoplay: true,
     speed: 600,
     autoplaySpeed: 3000,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
  };
  const [popupType, setPopupType] = useState(null);
   const getHeading = () => {
    if (popupType === "quiz")
      return "Sign up to take the GRE Quiz";
    if (popupType === "syllabus")
      return "Sign up to download GRE Syllabus";
    if (popupType === "test")
      return "Sign up to take the GRE Sample Test";
  };

  const getButtonText = () => {
    if (popupType === "quiz") return "Start Quiz";
    if (popupType === "syllabus") return "Download Syllabus";
    if (popupType === "test") return "Start Test";
  };
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-white font-[Inter]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=900&fit=crop"
            className="w-full h-full object-cover scale-110"
            alt="GRE Preparation"
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
              🎓 Graduate Record Examination
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              GRE Exam –{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Complete Guide & Preparation
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Achieve your target score in GRE with structured learning, expert
              faculty, and proven strategies.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/*  UPDATED BUTTON */}
              <button
                onClick={() => setShowPopup(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition"
              >
                Enroll for Free Demo
              </button>

              {/*  UPDATED BUTTON */}
              <button
                onClick={() => setShowPopup(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition"
              >
                Talk to an Expert
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Slider {...settings}>
              {reviews.map((item, i) => (
                <div key={i}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="mt-6 pt-6 border-t border-white/20">
                        <p className="text-white text-lg">"{item.text}"</p>
                        <p className="text-yellow-300 text-sm mt-2">
                          — {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
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
      {/*  POPUP CONNECT */}
      <HomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <GREResultsSlider />

      {/* WHAT IS GRE SECTION */}
      <section className="relative pt-7 pb-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What is the <span className="text-blue-600">GRE Exam?</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              “The GRE (Graduate Record Examination), conducted by the
              Educational Testing Service, is a widely recognized test required
              for admission to Master’s, MBA, and PhD programs at top
              universities worldwide.”
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
                alt="GMAT Exam"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Score Range</p>
                  <p className="text-3xl font-bold text-blue-600">205–805</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Score Validity</p>
                  <p className="text-xl font-semibold text-gray-800">5 Years</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Graduate Record Examination (GRE)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The Graduate Record Examination (GRE) is an internationally
                  recognized test conducted by the Educational Testing Service
                  (ETS) for admission into Master’s, MBA, and PhD programs
                  worldwide.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  The GRE tests your skills in:
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3">
                {[
                  "📊 Reading & Critical Thinking",
                  "📖 Math & Problem Solving ",
                  "📈 Analytical Essay Writing",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-yellow-500 hover:bg-blue-100 transition rounded-xl p-4 text-base font-medium text-gray-800"
                  >
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                {/*  BUTTON UPDATED */}
                <button
                  onClick={() => setShowPopup(true)}
                  className="mt-8 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
                >
                  Start Your GRE Preparation
                </button>
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
      {/*  POPUP CONNECT */}
      <HomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* EXAM PATTERN TABLE SECTION */}
      <section className="pt-7 pb-10 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              GRE - Exam Pattern
            </h2>
            <p className="text-gray-600">
              The GRE exam is structured to evaluate verbal, quantitative, and
              analytical skills.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr className="bg-yellow-500">
                  <th className="border p-4 font-bold">GRE Sections</th>
                  <th className="border p-4 font-bold">No. of Questions</th>
                  <th className="border p-4 font-bold">Details</th>
                  <th className="border p-4 font-bold">Time</th>
                </tr>
              </thead>

              <tbody className="text-black-700">
                {/* Quant */}
                <tr>
                  <td className="border p-4 font-bold">
                    Quantitative Reasoning
                  </td>
                  <td className="border p-4">2 Sections</td>
                  <td className="border p-4">
                    Arithmetic, Algebra, Data Interpretation <br />
                    Score Range: 130–170
                  </td>
                  <td className="border p-4">47 minutes</td>
                </tr>

                {/* Verbal */}
                <tr className="bg-gray-50">
                  <td className="border p-4 font-bold">Verbal Reasoning</td>
                  <td className="border p-4">2 Sections</td>
                  <td className="border p-4">
                    Reading, Vocabulary, Logical Reasoning <br />
                    Score Range: 130–170
                  </td>
                  <td className="border p-4">41 minutes</td>
                </tr>

                {/* AWA */}
                <tr>
                  <td className="border p-4 font-bold">Analytical Writing</td>
                  <td className="border p-4">1 Task</td>
                  <td className="border p-4">
                    Essay Writing <br />
                    Score Range: 0–6
                  </td>
                  <td className="border p-4">30 minutes</td>
                </tr>

                {/* Total */}
                <tr className="bg-gray-100 font-bold">
                  <td className="border p-4">Total</td>
                  <td className="border p-4">5 Sections</td>
                  <td className="border p-4">-</td>
                  <td className="border p-4">~1 hr 58 min</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SCORE TABLE */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              GRE - Score & Validity
            </h2>
            <p className="text-gray-600 mb-6">
              Here is an overview of GRE scoring and validity details:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-left">
                <thead className="bg-gray-100">
                  <tr className="bg-yellow-500">
                    <th className="border p-4 font-bold">Category</th>
                    <th className="border p-4 font-bold">Details</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  <tr>
                    <td className="border p-4 font-bold">Total Score Range</td>
                    <td className="border p-4">260 – 340</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="border p-4 font-bold">Competitive Score</td>
                    <td className="border p-4">
                      300+ (Good), 320+ (Top Universities)
                    </td>
                  </tr>

                  <tr className="bg-gray-100 font-bold">
                    <td className="border p-4 font-bold">Score Validity</td>
                    <td className="border p-4">5 Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* WHY GMAT SECTION */}
      <section className="pb-14 pt-4 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why is the <span className="text-blue-600">GRE Important?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The GRE is a standardized test that helps universities assess
              students from different academic backgrounds on a common scale.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            {[
              {
                icon: "📊",
                title: "Uniform Evaluation System",
                desc: "GRE scores provide a common benchmark, making it easier for universities to compare applicants from diverse education systems worldwide.",
              },
              {
                icon: "🌍",
                title: "Global Recognition",
                desc: "Accepted by top universities in the USA, UK, and many other countries for postgraduate and doctoral programs.",
              },
              {
                icon: "💰",
                title: "Better Scholarship Opportunities",
                desc: "A high GRE score can increase your chances of getting scholarships and financial assistance.",
              },
              {
                icon: "📈",
                title: "Strengthens Your Application",
                desc: "Helps improve your overall profile, especially if your academic grades are not very strong",
              },
              {
                icon: "🎓",
                title: "Required for Higher Studies",
                desc: "Essential for admission into Master’s and PhD programs across multiple fields.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 hover:from-blue-500 hover:to-indigo-600 transition-all duration-300"
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-white">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl mb-4 shadow-md group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-xl">
              <div className="rounded-2xl p-6 text-white flex flex-col justify-between h-full">
                <div>
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">
                    Start Your GRE Journey
                  </h3>
                  <p className="text-sm opacity-90">
                    Get expert guidance and boost your score with the right
                    strategy.
                  </p>
                </div>

                <button
                  onClick={() => setShowPopup(true)}
                  className="mt-6 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* 5.GRE Online Live Training Features */}
      <section className="pt-10 pb-14 bg-gradient-to-br from-gray-100 to-gray-200 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
              TALK TO A GRE EXPERT
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            GRE Online <span className="text-blue-600">Live Training</span>{" "}
            Features
          </h2>

          {/* Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full bg-yellow-300 rounded-2xl"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                  alt="GRE Preparation"
                  className="w-full h-[320px] md:h-[380px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT (CARD ACCORDION) */}
            <div className="space-y-6">
              {/* Concept Building */}
              <div
                onClick={() => toggle("concept")}
                className={`p-5 rounded-2xl cursor-pointer transition border 
      ${
        active === "concept"
          ? "bg-white shadow-xl border-green-400"
          : "bg-white/70 backdrop-blur hover:shadow-md"
      }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-full">📊</div>
                  <h3 className="font-semibold text-lg">Concept Building</h3>
                </div>

                {active === "concept" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>
                      ✓ 60 hours GRE classroom training and topic-wise concept
                      building
                    </li>
                    <li>✓ Study material with Verbal & Quantitative books</li>
                    <li>
                      ✓ 100+ hours of free sessions on GRE basics, question
                      discussion, admissions information, exam strategies
                    </li>
                    <li>
                      ✓ Verbal and quant refresher sessions before GRE exam date
                    </li>
                    <li>
                      ✓ Unlimited scheduled doubt clearing sessions with the GRE
                      tutor online from 7 AM to midnight on all working days
                    </li>
                  </ul>
                )}
              </div>

              {/* Speed & Accuracy */}
              <div
                onClick={() => toggle("speed")}
                className={`p-5 rounded-2xl cursor-pointer transition border 
      ${
        active === "speed"
          ? "bg-white shadow-xl border-purple-400"
          : "bg-white/70 backdrop-blur hover:shadow-md"
      }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-3 rounded-full">🎯</div>
                  <h3 className="font-semibold text-lg">Speed & Accuracy</h3>
                </div>

                {active === "speed" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>✓ Topic-wise and section-wise GRE practice tests</li>
                    <li>
                      ✓ Online testing portal with full-length GRE practice
                      tests
                    </li>
                    <li>
                      ✓ 1-on-1 test discussion, feedback and analysis with
                      faculty
                    </li>
                    <li>
                      ✓ 3000+ practice questions and their detailed explanations
                    </li>
                  </ul>
                )}
              </div>

              {/* Complimentary Features */}
              <div
                onClick={() => toggle("extra")}
                className={`p-5 rounded-2xl cursor-pointer transition border 
      ${
        active === "extra"
          ? "bg-white shadow-xl border-pink-400"
          : "bg-white/70 backdrop-blur hover:shadow-md"
      }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 p-3 rounded-full">🧩</div>
                  <h3 className="font-semibold text-lg">
                    Complimentary Features
                  </h3>
                </div>

                {active === "extra" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>
                      ✓ GRE study plan customised to your target score and exam
                      date
                    </li>
                    <li>
                      ✓ 1 year course validity with the option of repeating
                      classes within the validity
                    </li>
                    <li>
                      ✓ TOEFL/IELTS preparation classes with complete study
                      material and full-length tests
                    </li>
                    <li>
                      ✓ Access to exclusive information sessions & webinars with
                      top universities
                    </li>
                    <li>
                      ✓ Access to GRE alumni community and post-class mentor
                      support
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.GRE Online Self-Paced Training Features */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-yellow-100 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
              TALK TO A GRE EXPERT
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            GRE Online{" "}
            <span className="text-blue-600">Self-Paced Training</span> Features
          </h2>

          {/* Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT (CARD ACCORDION) */}
            <div className="space-y-6">
              {/* CARD 1 */}
              <div
                onClick={() => toggle("concept")}
                className={`p-5 rounded-2xl cursor-pointer transition border 
        ${
          active === "concept"
            ? "bg-white shadow-xl border-yellow-400"
            : "bg-white/60 backdrop-blur-md hover:shadow-lg"
        }`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-xl">
                    📊
                  </div>
                  <h3 className="font-semibold text-lg">Concept Building</h3>
                </div>

                {active === "concept" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>✓ 30+ hours of topic-wise Pre-recorded HD videos</li>
                    <li>✓ GRE study material on portal</li>
                    <li>✓ 100+ hours free sessions & strategies</li>
                    <li>✓ Doubt clearing sessions with faculty</li>
                  </ul>
                )}
              </div>

              {/* CARD 2 */}
              <div
                onClick={() => toggle("speed")}
                className={`p-5 rounded-2xl cursor-pointer transition border 
        ${
          active === "speed"
            ? "bg-white shadow-xl border-purple-400"
            : "bg-white/60 backdrop-blur-md hover:shadow-lg"
        }`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full text-xl">
                    🎯
                  </div>
                  <h3 className="font-semibold text-lg">Speed & Accuracy</h3>
                </div>

                {active === "speed" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>✓ Topic-wise practice tests</li>
                    <li>✓ Full-length GRE mock tests</li>
                    <li>✓ 1-on-1 feedback sessions</li>
                    <li>✓ 3000+ practice questions</li>
                  </ul>
                )}
              </div>

              {/* CARD 3 */}
              <div
                onClick={() => toggle("extra")}
                className={`p-5 rounded-2xl cursor-pointer transition border 
        ${
          active === "extra"
            ? "bg-white shadow-xl border-pink-400"
            : "bg-white/60 backdrop-blur-md hover:shadow-lg"
        }`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-full text-xl">🧩</div>
                  <h3 className="font-semibold text-lg">
                    Complimentary Features
                  </h3>
                </div>

                {active === "extra" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>✓ Personalized study plan</li>
                    <li>✓ 6-month course validity</li>
                    <li>✓ TOEFL/IELTS support</li>
                    <li>✓ Alumni & mentor support</li>
                  </ul>
                )}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-yellow-300 rounded-2xl"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                  alt="GRE"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.GRE Private Tutoring Features */}
      <section className="pt-10 pb-14 bg-gradient-to-br from-gray-100 to-gray-200 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
              TALK TO A GRE EXPERT
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            GRE <span className="text-blue-600">Private Tutoring</span> Features
          </h2>

          {/* Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full bg-yellow-300 rounded-2xl"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                  alt="GRE Preparation"
                  className="w-full h-[320px] md:h-[380px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-6">
              {/* Concept Building */}
              <div
                onClick={() => toggle("concept")}
                className={`p-5 rounded-2xl cursor-pointer transition border 
      ${
        active === "concept"
          ? "bg-white shadow-xl border-green-400"
          : "bg-white/70 backdrop-blur hover:shadow-md"
      }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-full">📊</div>
                  <h3 className="font-semibold text-lg">Concept Building</h3>
                </div>

                {active === "concept" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>
                      ✓ 1-on-1 GRE Private tutoring: topic-wise concept
                      building, doubt clearing, test analysis
                    </li>
                    <li>
                      ✓ Study material with 3 books - 2 Quantitative and 1
                      Verbal
                    </li>
                    <li>
                      ✓ 100+ hours of free webinar sessions on GRE basics,
                      question discussion, admissions information, exam
                      strategies
                    </li>
                    <li>
                      ✓ Verbal and quant refresher sessions before GRE exam date
                    </li>
                  </ul>
                )}
              </div>

              {/* Speed & Accuracy */}
              <div
                onClick={() => toggle("speed")}
                className={`p-5 rounded-2xl cursor-pointer transition border 
      ${
        active === "speed"
          ? "bg-white shadow-xl border-purple-400"
          : "bg-white/70 backdrop-blur hover:shadow-md"
      }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-3 rounded-full">🎯</div>
                  <h3 className="font-semibold text-lg">Speed & Accuracy</h3>
                </div>

                {active === "speed" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>✓ Topic-wise and section-wise GRE practice tests</li>
                    <li>
                      ✓ Online testing portal with full-length GRE practice
                      tests
                    </li>
                    <li>
                      ✓ Official ETS GRE practice pack with 2 full-length tests
                    </li>
                    <li>
                      ✓ Additional group webinars for test discussion, feedback
                      and analysis with faculty
                    </li>
                    <li>
                      ✓ 3000+ practice questions and their detailed explanations
                    </li>
                  </ul>
                )}
              </div>

              {/* Complimentary Features */}
              <div
                onClick={() => toggle("extra")}
                className={`p-5 rounded-2xl cursor-pointer transition border 
      ${
        active === "extra"
          ? "bg-white shadow-xl border-pink-400"
          : "bg-white/70 backdrop-blur hover:shadow-md"
      }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 p-3 rounded-full">🧩</div>
                  <h3 className="font-semibold text-lg">
                    Complimentary Features
                  </h3>
                </div>

                {active === "extra" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>
                      ✓ GRE study plan customised to your target score and exam
                      date
                    </li>
                    <li>✓ 3-month course validity</li>
                    <li>
                      ✓ Complimentary TOEFL/IELTS group classes with complete
                      study material and full-length tests
                    </li>
                    <li>
                      ✓ Access to exclusive information sessions & webinars with
                      top universities
                    </li>
                    <li>
                      ✓ Access to GRE alumni community and post-class mentor
                      support
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GMAT COMPARISON */}
      <section className="pt-7 pb-10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            GRE Prep Modes Comparison
          </h2>

          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full border border-gray-300 rounded-2xl overflow-hidden">
              {/* HEADER */}
              <thead className="bg-gray-200 text-black text-sm">
                <tr className="text-center">
                  <th className="p-5 text-left font-semibold">GRE Prep Mode</th>

                  <th className="p-5">
                    <div className="flex flex-col items-center gap-1">
                      <span>🎥</span>
                      <span>Video Lessons</span>
                    </div>
                  </th>

                  <th className="p-5">
                    <div className="flex flex-col items-center gap-1">
                      <span>📚</span>
                      <span>Study Resources</span>
                    </div>
                  </th>

                  <th className="p-5">
                    <div className="flex flex-col items-center gap-1">
                      <span>📝</span>
                      <span>Practice Tests</span>
                    </div>
                  </th>

                  <th className="p-5">
                    <div className="flex flex-col items-center gap-1">
                      <span>❓</span>
                      <span>Doubt Support</span>
                    </div>
                  </th>

                  <th className="p-5">
                    <div className="flex flex-col items-center gap-1">
                      <span>🎬</span>
                      <span>Webinars Access</span>
                    </div>
                  </th>

                  <th className="p-5">
                    <div className="flex flex-col items-center gap-1">
                      <span>👨‍🏫</span>
                      <span>Expert Guidance</span>
                    </div>
                  </th>

                  <th className="p-5">
                    <div className="flex flex-col items-center gap-1">
                      <span>📌</span>
                      <span>Validity</span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody className="text-black text-sm text-center">
                {/* LIVE ONLINE */}
                <tr className="bg-blue-50 border-t">
                  <td className="p-5 text-left">
                    <span className="text-blue-600 font-medium">
                      Live Online Training
                    </span>
                    <br />
                    <span className="text-gray-700">48 hours + recordings</span>
                  </td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>Unlimited</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>1 year</td>
                </tr>

                {/* SELF PACED */}
                <tr className="bg-blue-100 border-t">
                  <td className="p-5 text-left">
                    <span className="text-blue-600 font-medium">
                      Self-Paced Program
                    </span>
                    <br />
                    <span className="text-gray-700 text-xs">
                      48 hrs (recorded HD videos)
                    </span>
                  </td>
                  <td>✔</td>
                  <td>Online Access</td>
                  <td>✖</td>
                  <td>Limited (5 hrs)</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>2 / 6 months</td>
                </tr>

                {/* PRIVATE */}
                <tr className="bg-blue-50 border-t">
                  <td className="p-5 text-left">
                    <span className="text-blue-600 font-medium">
                      Private Tutoring
                    </span>
                    <br />
                    <span className="text-gray-700">Customized Plan</span>
                  </td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>Dedicated Support</td>
                  <td>✖</td>
                  <td>✔</td>
                  <td className="text-xs px-3">
                    40 hrs classes + 6 months access
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE  GMAT PREPARATION SECTION - With Glowing Hover Effects */}
      <section className="pb-10 pt-6 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
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
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                GRE
              </span>{" "}
              Preparation with Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by thousands of aspirants preparing for global graduate
              programs
            </p>
          </div>

          {/* Main Features Grid - Light Cards with Glowing Hover Effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Experience */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Years of Proven Excellence{" "}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With decades of experience in test preparation, we understand
                  what it takes to achieve a high GRE score and secure admission
                  to top universities.
                </p>
                <div className="mt-4 flex items-center text-blue-600 text-sm">
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 - Structured Approach */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-indigo-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-xl">📐</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Smart Learning Framework{" "}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our approach focuses on building strong fundamentals,
                  consistent practice, and exam-focused .:{" "}
                  <span className="font-semibold text-indigo-600">
                    strategies for + better results
                  </span>{" "}
                  ensures comprehensive preparation.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Foundation
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                    Practice
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    Performance Strategy
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 - Experienced Faculty */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <span className="text-white text-xl">👨‍🏫</span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900">
                    Expert Mentors{" "}
                  </h4>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Get trained by highly experienced GRE instructors who
                  specialize in guiding students toward top scores.{" "}
                </p>

                <div className="mt-4 flex items-center text-blue-600 text-sm">
                  <span className="font-medium">Personalized guidance</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
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
                    (10,000+ reviews)
                  </span>
                </div>
                <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏅</span>
                  <span className="text-gray-700">
                    Top Rated GRE Prep Provider
                  </span>
                </div>
                <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  <span className="text-gray-700">Average Score: 700+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AFTER GMAT SECTION */}
      <section className="pb-10 pt-6 bg-slate-50 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          {/* Header Section */}
          <div className="mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
              The Roadmap
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              What Happens{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                After the GRE?
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Your GRE score is just the first step. We support you throughout
              your entire study abroad journey—from planning to placement.
            </p>
          </div>

          {/* STEP CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-blue-100 -z-0"></div>

            {[
              {
                title: "Profile Evaluation & Enhancement",
                step: "01",
                desc: "We assess your academic background and help you build a strong profile aligned with top universities.",
              },
              {
                title: "Course & Country Selection",
                step: "02",
                desc: "Explore the best-fit programs and countries based on your career goals and preferences.",
              },
              {
                title: "University Selection Strategy",
                step: "03",
                desc: "Shortlist universities where your GRE score and profile have the highest chances of success.",
              },
              {
                title: "SOP, Essays & LOR Assistance",
                step: "04",
                desc: "Create compelling application documents that highlight your strengths and stand out to admissions teams.",
              },
              {
                title: "Interview Preparation",
                step: "05",
                desc: "Practice with mock interviews and expert tips to confidently clear university interviews.",
              },
              {
                title: "Financial Aid & Scholarships",
                step: "06",
                desc: "Get guidance on scholarships, assistantships, and funding opportunities to reduce your expenses.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur-md border border-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] hover:-translate-y-3 transition-all duration-500 relative z-10 overflow-hidden"
              >
                <span className="absolute -right-2 -bottom-4 text-8xl font-black text-gray-100 group-hover:text-blue-50 transition-colors duration-500 select-none">
                  {item.step}
                </span>

                <div className="relative z-10 text-left">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold mb-6 shadow-lg shadow-blue-200 group-hover:rotate-[10deg] transition-transform">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final Step */}
          <div className="mt-12 flex justify-center">
            <div className="group relative p-[2px] rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 w-full md:w-[450px] shadow-2xl shadow-blue-200 transition-transform hover:scale-[1.02]">
              <div className="bg-white rounded-[1.9rem] p-10 h-full w-full flex flex-col items-center">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">
                  Final Milestone
                </span>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Pre-Departure & Visa Support
                </h3>
                <p className="text-gray-500 text-center text-sm">
                  Complete assistance with visa applications, accommodation, and
                  pre-departure guidance.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20">
            <button
              onClick={() => setShowPopup(true)}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              <span className="relative bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl flex items-center gap-3 transition-all active:scale-95">
                Get Free GRE Admission Guidance
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      <HomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* 10.Free GMAT Prep Resources */}
      <section className="pb-10 pt-6 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12 text-gray-800">
            Free <span className="text-blue-500">GMAT</span> Prep Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#dfeae3] rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow mb-6">
                <span className="text-yellow-500 text-2xl">📄</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                GRE Quiz
              </h3>

              <p className="text-gray-600 mb-6">
                Take this short GRE quiz to test your GRE online prep
              </p>

              <button
                onClick={() => setPopupType("quiz")}
                className="bg-yellow-500 text-white px-6 py-3 rounded-full w-full font-medium hover:bg-yellow-600 transition"
              >
                Take GRE Quiz
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#dfeae3] rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow mb-6">
                <span className="text-green-500 text-2xl">📊</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                GRE Syllabus Download
              </h3>

              <p className="text-gray-600 mb-6">
                Download the GRE syllabus now and get a head start on your GRE
                test prep
              </p>

              <button
                onClick={() => setPopupType("syllabus")}
                className="bg-yellow-500 text-white px-6 py-3 rounded-full w-full font-medium hover:bg-yellow-600 transition"
              >
                Download GRE Syllabus
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#dfeae3] rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow mb-6">
                <span className="text-yellow-500 text-2xl">📄</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                GRE Sample Test
              </h3>

              <p className="text-gray-600 mb-6">
                Find out how GRE-ready you are with this GRE sample test online
              </p>

              <button
                onClick={() => setPopupType("test")}
                className="bg-yellow-500 text-white px-6 py-3 rounded-full w-full font-medium hover:bg-yellow-600 transition"
              >
                Take GRE Test
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 COMMON POPUP */}
      {popupType && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md relative shadow-xl">
            {/* Close */}
            <button
              onClick={() => setPopupType(null)}
              className="absolute top-3 right-3 text-gray-500 text-xl"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-lg font-semibold mb-4 text-center">
              {getHeading()}
            </h2>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (popupType === "quiz") {
                  navigate("/gre-quiz"); //
                }
                if (popupType === "test") {
                  navigate("/gre-test");
                }

                if (popupType === "syllabus") {
                  const link = document.createElement("a");
                  link.href = "/files/gre-syllabus.pdf";
                  link.download = "GRE-Syllabus.pdf";
                  link.click();
                } else {
                  alert("Redirect to GRE Quiz/Test 🚀");
                }

                setPopupType(null);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email Id"
                required
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Your City"
                className="w-full border p-3 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
              >
                {getButtonText()}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#c3c6d6]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            GRE Prep FAQs
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is the GRE?",
                a: "GRE is a standardised test used by top universities across the USA  and some other countries to test applicants for their academic readiness of a graduate program.",
              },
              {
                q: "Why take the GRE exams?",
                a: "The GRE exam score is a requirement for admission to graduate programs of several top universities across the world. With the right GRE preparation, a good GRE score gives you an edge over other applicants in the application pool.",
              },
              {
                q: "What are the types of GRE exams?",
                a: "ETS conducts two types of GRE exams - The GRE General Test, which is used as the primary criteria for your admission into any master’s program. And the GRE Subject Tests, which are taken by students choosing to specialise in Chemistry, Mathematics, Physics, and Psychology.",
              },
              {
                q: "Who can take the GRE?",
                a: "Anyone can take the GRE. ETS has specified no age limit or minimum qualification to take the GRE. In total honesty, there will be a range of eligibility criteria set by the universities that accept GRE scores. ",
              },
              {
                q: "What is the GRE exam fee in India?",
                a: "The GRE exam fee in India is priced at INR 22550.",
              },
              {
                q: "When can you take the GRE exam?",
                a: "There are no specific dates announced for the GRE, you can practically take the test whenever you feel your GRE prep is on point. There is also no lifetime limit on the number of times you can take the GRE exam, but you can only take five attempts within any continuous rolling 12-month period.",
              },
              {
                q: "Can you retake the GRE exam?",
                a: "If you have to retake the GRE exam due to any reason, you will have to wait for a minimum of 21 days before you can take your next attempt. This is just ETS's way of saying that you should take some time to really outdo your last GRE score with a more robust GRE prep, and we agree!",
              },
              {
                q: "Can you reschedule GRE exam?",
                a: "Yes, ETS allows you to reschedule your GRE exam. Here is a step-by-step guide to rescheduling the GRE exam - How To Reschedule GRE Exam at Home? (jamboreeindia.com).",
              },
              {
                q: "What is the format of the GRE exam?",
                a: "No, there is no negative marking for an incorrect answer, however you will lose points on leaving a question unanswered.",
              },
              {
                q: "How is the GRE exam scored?",
                a: "The highest possible score on the GRE is 340, and the Quantitative and Verbal Sections make up for 170 points each. The Analytical Writing Section, however, is scored on an independent scale where you can get a score from 0 to 6, with 6 being the highest and 0 being the lowest..",
              },
              {
                q: "What online GRE coaching/preparation option are available?",
                a: "If you are opting for online GRE preparation, you can choose from one of the best GRE online coaching options and enrol in a GRE course online that teaches you through live classes. Sign up for an online GRE preparation demo class here.",
              },
              {
                q: "How much time do you need for your GRE prep?",
                a: "Depending on an individual student’s schedule and time dedication, GRE prep can take anywhere from 2-6 months. You can opt for GRE preparation online or training in GRE coaching centres. For more personalised insights on your GRE prep, get in touch with our counsellor. Book a free expert session now!.",
              },
              {
                q: "What does the AWA section on the GRE test you on?",
                a: "GRE’s Analytical Writing section doesn’t assess specific content knowledge rather, it tests your analytical writing skills through different tasks. These writing tasks test your ability to articulate and evaluate complex ideas while simultaneously judging your ability to sustain a focused and coherent discussion.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-md">
                {/* QUESTION */}
                <div
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center px-6 py-4 cursor-pointer"
                >
                  <p className="font-medium text-gray-800">{item.q}</p>

                  <span className="text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* ANSWER */}
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-6">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Your GRE Preparation Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose the right program and take the first step toward your dream
            university abroad.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* ✅ UPDATED BUTTON */}
            <button
              onClick={() => setShowPopup(true)}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              Enroll for Free Demo Class
            </button>

            {/* ✅ UPDATED BUTTON */}
            <button
              onClick={() => setShowPopup(true)}
              className="bg-white/20 border border-white/40 hover:bg-white/30 font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Talk to an Expert
            </button>
          </div>

          <p className="mt-8 text-blue-100 text-lg">
            Score higher. Apply smarter. Get admitted.
          </p>
        </div>
      </section>

      {/*  POPUP CONNECT */}
      <HomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}
