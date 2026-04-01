import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomePopup from "./HomePopup";

export default function IELTS() {
  const [activeTab, setActiveTab] = useState("online");
  const [openIndex, setOpenIndex] = useState(null);
    const [active, setActive] = useState("concept");
        const toggle = (key) => {
          setActive(active === key ? null : key);
      };
   const reviews = [
     {
       text: "Best IELTS coaching with excellent faculty support. The trainers focus on each module—Reading, Writing, Listening, and Speaking—and provide personalized feedback which really helped me improve my overall band score.",
       name: "Sahil Khanna",
     },
     {
       text: "Great study material and amazing doubt support. The practice tests are very close to the actual IELTS exam pattern, and the mentors guide you at every step of your preparation.",
       name: "Riya Sharma",
     },
     {
       text: "Helped me improve my score significantly. The speaking sessions and writing evaluations were especially helpful in boosting my confidence and accuracy.",
       name: "Aman Verma",
     },
     {
       text: "Highly recommended for serious aspirants. The structured course, expert faculty, and continuous performance tracking make IELTS preparation smooth and effective.",
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
              IELTS Exam –{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Complete Guide & Preparation
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Achieve your target score with structured learning, expert
              faculty, and proven strategies for study abroad, work, and
              immigration.
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

      {/* WHAT IS IELTS? SECTION */}
      <section className="relative pt-12 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What is the <span className="text-blue-600">IELTS Exam?</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Your gateway to study abroad, work opportunities, and immigration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
                alt="IELTS Exam"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Band Score Range</p>
                  <p className="text-3xl font-bold text-blue-600">0–9</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Score Validity</p>
                  <p className="text-xl font-semibold text-gray-800">2 Years</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  International English Language Testing System
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The International English Language Testing System (IELTS) is a
                  globally recognized English proficiency test conducted by
                  British Council and IDP Education. It is required for study
                  abroad, work opportunities, and immigration purposes.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  IELTS is a globally accepted English proficiency test for
                  academic and professional use, recognized by 11,500+
                  organizations in 140+ countries. The test duration is 2 hours
                  and 45 minutes.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  The IELTS evaluates your ability in:
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "🎧 Listening",
                  "📖 Reading",
                  "✍️ Writing",
                  "🗣️ Speaking",
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
                {/* ✅ BUTTON UPDATED */}
                <button
                  onClick={() => setShowPopup(true)}
                  className="mt-8 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
                >
                  Start Your IELTS Preparation
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
      {/* ✅ POPUP CONNECT */}
      <HomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* EXAM PATTERN & SYLLABUS SECTION - Combined */}
      <section className="pt-4 pb-10 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Exam Pattern Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              IELTS Exam Pattern
            </h2>
            <p className="text-gray-600">
              The IELTS Exam tests you in 4 key areas of the English language
            </p>
          </div>

          {/* Pattern Table */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr className="bg-yellow-500">
                  <th className="border p-4 font-bold">Section Name</th>
                  <th className="border p-4 font-bold">Duration</th>
                  <th className="border p-4 font-bold">No. of Questions</th>
                </tr>
              </thead>
              <tbody className="text-black-700">
                <tr>
                  <td className="border p-4 font-bold">Listening</td>
                  <td className="border p-4">30 minutes</td>
                  <td className="border p-4">40 MCQs</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-4 font-bold">Reading</td>
                  <td className="border p-4">60 minutes</td>
                  <td className="border p-4">40 MCQs</td>
                </tr>
                <tr>
                  <td className="border p-4 font-bold">Writing</td>
                  <td className="border p-4">60 minutes</td>
                  <td className="border p-4">40 MCQs</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-4 font-bold">Speaking</td>
                  <td className="border p-4">11-14 minutes</td>
                  <td className="border p-4">3 parts</td>
                </tr>
                <tr className="bg-gray-100 font-bold">
                  <td className="border p-4">Total</td>
                  <td className="border p-4">2 hours 45 minutes</td>
                  <td className="border p-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Syllabus Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              IELTS Exam Syllabus
            </h2>
            <p className="text-gray-600 text-center mb-10">
              The four sections of the IELTS exam include:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-yellow-200 rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">🎧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Listening
                </h3>
                <p className="text-black-600 text-sm font-bold">30 minutes</p>
                <p className="text-gray-500 text-sm mt-2">
                  You will listen to four recordings of native English speakers
                  and answer the questions based on those recordings.
                </p>
              </div>

              <div className="bg-yellow-200 rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-indigo-600 text-xl">📖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Reading
                </h3>
                <p className="text-black-600 text-sm font-bold">60 minutes</p>
                <p className="text-gray-500 text-sm mt-2">
                  Reading skills including gist, main idea, details, logic,
                  skimming and discerning the writer's attitude and intentions
                  are assessed.
                </p>
              </div>

              <div className="bg-yellow-200 rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Writing
                </h3>
                <p className="text-black-600 text-sm font-bold">60 minutes</p>
                <p className="text-gray-500 text-sm mt-2">
                  You are required to complete two IELTS writing tasks on topics
                  of general interest based on the module you have chosen.
                </p>
              </div>

              <div className="bg-yellow-200 rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">🗣️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Speaking
                </h3>
                <p className="text-black-600 text-sm font-bold">
                  11-14 minutes
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  The IELTS Speaking section is recorded and conducted in three
                  parts and is used to assess your spoken English skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IELTS SCORE SECTION */}
      <section className="pt-8 pb-10 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            IELTS <span className="text-blue-600">Score & Validity</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-yellow-200 rounded-2xl p-8 shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-2">0–9</div>
              <p className="text-gray-600">Band Score Range</p>
            </div>
            <div className="bg-yellow-200 rounded-2xl p-8 shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-2">6.5+</div>
              <p className="text-gray-600">Good Universities</p>
            </div>
            <div className="bg-yellow-200 rounded-2xl p-8 shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-2">7+</div>
              <p className="text-gray-600">Top Universities</p>
            </div>
          </div>
          <div className="mt-8 inline-block bg-blue-50 rounded-full px-6 py-3">
            <p className="text-gray-700">
              📅 Score Validity: <span className="font-bold">2 Years</span>
            </p>
          </div>
        </div>
      </section>

      {/* IELTS PREP PROGRAMS - NEW SECTION (2 Cards) */}
      <section className="pt-10 pb-12 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your{" "}
              <span className="text-blue-600">IELTS Prep Program</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Start your journey with the right program tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Starter Kit Card */}
            <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 hover:from-blue-500 hover:to-indigo-600 transition-all duration-300">
              <div className="bg-yellow-200 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-white/95">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black-900">
                    IELTS Starter Kit
                  </h3>
                  <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                    Kickstart
                  </span>
                </div>
                <p className="text-black-600 mb-6">
                  Kickstart your IELTS prep with the essentials.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> 1 full-length mock
                    test
                  </li>
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> 1 paper-based test
                  </li>
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> 1 Speaking
                    evaluation
                  </li>
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> 1 Writing
                    evaluation
                  </li>
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> 27 concept videos
                  </li>
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> Program validity: 6
                    months
                  </li>
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> Complimentary
                    university shortlisting
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
                  Know More
                </button>
              </div>
            </div>

            {/* Master Kit Card */}
            <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 hover:from-blue-500 hover:to-indigo-600 transition-all duration-300">
              <div className="bg-yellow-200 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-white/95">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black-900">
                    IELTS Master Kit
                  </h3>
                  <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">
                    Comprehensive
                  </span>
                </div>
                <p className="text-black-600 mb-6">
                  Comprehensive IELTS prep program for maximum results.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> Pre-IELTS module: 2
                    mock tests + 5 tests each for Reading, Writing, Listening
                    and Speaking
                  </li>
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> 5 full-length mock
                    tests
                  </li>
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> 80 module-wise
                    tests (25 each for Reading, Writing and Listening, 5 for
                    Speaking)
                  </li>
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> 40 item-wise tests
                  </li>
                  <li className="flex items-center gap-2 text-black-700">
                    <span className="text-blue-600">✓</span> Up to 4 simulated,
                    1-on-1 in-person Speaking sessions at your nearest Jamboree
                    centre
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IELTS EXAM TYPES */}
      <section className="pt-12 pb-12 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-6 text-gray-800">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              <span className="text-blue-600">IELTS</span> Exam Types
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>

          {/* IELTS Academic */}
          <div className="mb-12 bg-yellow-200 rounded-2xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold text-black-900 mb-4 border-l-4 border-blue-600 pl-3">
              IELTS Academic
            </h3>

            <p className="mb-4 leading-7 text-black-600">
              IELTS test designed for working professionals or students who want
              to pursue higher education at universities or institutes abroad.
            </p>

            <p className="mb-4 leading-7 text-black-600">
              IELTS Academic test gauges the test taker's English proficiency
              for an academic setting such as a university or training institute
              and evaluates your readiness for the same. You may also take IELTS
              Academic for professional registration purposes.
            </p>

            <p className="leading-7 text-black-600">
              The Reading and Writing sections of IELTS Academic differ from
              IELTS General in terms of both format (especially the Writing
              section) and difficulty.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-10"></div>

          {/* IELTS General */}
          <div className="mb-12 bg-yellow-200 rounded-2xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold text-black-900 mb-4 border-l-4 border-blue-600 pl-3">
              IELTS General
            </h3>

            <p className="mb-4 leading-7 text-black-600">
              IELTS test designed for individuals applying for a visa to migrate
              for work experience, training programs, or secondary education.
            </p>

            <p className="mb-4 leading-7 text-black-600">
              IELTS General Training is suitable if you plan to move to an
              English-speaking country for work, immigration, or to pursue
              studies below degree level (including school, college, or
              vocational programs).
            </p>

            <p className="leading-7 text-black-600">
              It evaluates your English proficiency in everyday situations. The
              test includes four sections — Reading, Writing, Listening, and
              Speaking. Listening and Speaking remain the same as IELTS Academic
              in format and difficulty. The total duration is 2 hours and 45
              minutes.
            </p>
          </div>
        </div>
      </section>

      {/* 5.IELTS Online Live Training Features */}
      <section className="pt-10 pb-14 bg-gradient-to-br from-gray-100 to-gray-200 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
              TALK TO A IELTS EXPERT
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            IELTS Online <span className="text-blue-600">Live Training</span>{" "}
            Features
          </h2>

          {/* Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* ✅ LEFT IMAGE (Enhanced UI) */}
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full bg-yellow-300 rounded-2xl"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                  alt="GMAT Preparation"
                  className="w-full h-[320px] md:h-[380px] object-cover"
                />
              </div>
            </div>

            {/* ✅ RIGHT CONTENT (CARD ACCORDION) */}
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
                  <h3 className="font-semibold text-lg">
                    IELTS Prep Resources
                  </h3>
                </div>

                {active === "concept" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>✓ 16 hours of focused IELTS classroom training</li>
                    <li>✓ Simplified IELTS study material- 1 book</li>
                    <li>✓ IELTS-like testing portal for efficient practice</li>
                    <li>
                      ✓ Unlimited doubt-clearing sessions for full clarity
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
                  <h3 className="font-semibold text-lg">
                    IELTS Practice Tests
                  </h3>
                </div>

                {active === "speed" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>✓ 20 IELTS Reading practice tests with 40 passages</li>
                    <li>✓ 20 IELTS Listening practice tests</li>
                    <li>✓ 20 IELTS Speaking practice tests</li>
                    <li>✓ Writing practice 20 IELTS Writing practice tests</li>
                    <li>
                      ✓ 15 full-length IELTS mock tests for actual exam practice
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
                  <h3 className="font-semibold text-lg">IELTS Assist</h3>
                </div>

                {active === "extra" && (
                  <ul className="mt-4 ml-12 space-y-2 text-gray-700 text-sm">
                    <li>
                      ✓ Weekend and weekday IELTS batches for your convenience
                    </li>
                    <li>
                      ✓ 3 month IELTS course validity for you to revisit the
                      test prep
                    </li>
                    <li>
                      ✓ Access to pre-recorded IELTS classes when you miss a
                      session
                    </li>
                    <li>
                      ✓ 1-on-1 test evaluation & mentor feedback for every test
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE IELTS PREPARATION SECTION */}
      <section className="pb-14 pt-4 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <span>🏆</span> Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                IELTS Preparation
              </span>
              ?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by thousands of students worldwide for over three decades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-yellow-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                  <span className="text-white text-xl">📐</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Structured Approach
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Concept + Practice + Evaluation ensures comprehensive
                  preparation.
                </p>
              </div>
            </div>

            <div className="group relative ">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-yellow-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-indigo-100">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                  <span className="text-white text-xl">📈</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Performance Improvement
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Strong focus on test performance improvement with targeted
                  strategies.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-yellow-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-purple-100">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                  <span className="text-white text-xl">💻</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Real Exam Simulation
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Real exam simulation for better confidence and authentic
                  practice.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-yellow-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-green-100">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 mb-4">
                  <span className="text-white text-xl">✍️</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Personalized Feedback
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Personalized feedback and evaluation to accelerate your
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AFTER IELTS SECTION */}
      {/* <section className="pb-10 pt-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">The Roadmap</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">What Happens <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">After the IELTS?</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">Achieving your score is just the beginning. We guide you through every milestone of your journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-blue-100 -z-0"></div>
            {[
              { title: "Profile Assessment & Building", step: "01", desc: "Analyzing your strengths to build a stellar profile." },
              { title: "Program & Country Options", step: "02", desc: "Finding the perfect fit for your career goals." },
              { title: "University Shortlisting", step: "03", desc: "Selecting top-tier institutions within your reach." },
              { title: "Essay / SOP / LOR Help", step: "04", desc: "Crafting narratives that impress admissions committees." },
              { title: "Interview Training", step: "05", desc: "Mock sessions to ace your final university interview." },
              { title: "Scholarship Support", step: "06", desc: "Maximizing your chances for financial aid and grants." },
            ].map((item, i) => (
              <div key={i} className="group bg-white/70 backdrop-blur-md border border-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] hover:-translate-y-3 transition-all duration-500 relative z-10 overflow-hidden">
                <span className="absolute -right-2 -bottom-4 text-8xl font-black text-gray-100 group-hover:text-blue-50 transition-colors duration-500 select-none">{item.step}</span>
                <div className="relative z-10 text-left">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold mb-6 shadow-lg shadow-blue-200 group-hover:rotate-[10deg] transition-transform">{item.step}</div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <div className="group relative p-[2px] rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 w-full md:w-[450px] shadow-2xl shadow-blue-200 transition-transform hover:scale-[1.02]">
              <div className="bg-white rounded-[1.9rem] p-10 h-full w-full flex flex-col items-center">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">Final Milestone</span>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Post-admission Services</h3>
                <p className="text-gray-500 text-center text-sm">Visa assistance, housing, and pre-departure briefings.</p>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <span className="relative bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl flex items-center gap-3 transition-all active:scale-95">Get Free Admission Guidance
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </button>
          </div>
        </div>
      </section> */}

      {/* FAQ SECTION - UPDATED */}
      <section className="py-20 bg-[#c3c6d6]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            IELTS Prep FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How do I register for the IELTS™?",
                a: "You can register for the IELTS online or by visiting an IDP center. For detailed information, visit the official website or contact support for assistance.",
              },
              {
                q: "How many times in a year is the IELTS™ exam conducted?",
                a: "IELTS is conducted multiple times throughout the year on specific dates. The exact schedule may vary by city, and you can check the full timetable on the official IELTS website.",
              },
              {
                q: "How many times can I take the IELTS™?",
                a: "You can take the IELTS as many times as you wish. However, it is recommended not to attempt it too frequently, as multiple attempts in a short period may impact your overall profile.",
              },
              {
                q: "What is the validity of the IELTS™ exam?",
                a: "IELTS scores are valid for 2 years from the date of the test.",
              },
              {
                q: "How can I send my IELTS score to colleges?",
                a: "You can request up to five Test Report Forms (TRFs) to be sent to institutions within one month of your test. Electronic submissions are usually free, while courier delivery may involve additional charges. Requests beyond five TRFs may incur extra fees.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-md">
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
            Start Your IELTS Preparation Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose the right program and begin your journey toward study abroad,
            work, or immigration.
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
            Build your score. Achieve your global dream.
          </p>
        </div>
      </section>

      {/*  POPUP CONNECT */}
      <HomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}