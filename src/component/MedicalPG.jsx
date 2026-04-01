import { Link } from "react-router-dom";
import { useState } from "react";

export default function BDS() {
  const [tab, setTab] = useState("overview");
  const [activeTab, setActiveTab] = useState("duration");

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study PG Medical Courses in India"
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
          {/* LEFT */}
          <div>
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
              👨‍⚕️ Your Path to Medical Specialization
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              PG Medical Courses in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                India
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Advance your medical career with MD, MS, or PG Diploma programs.
              Specialize in your chosen field and become an expert.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Apply Now
                </button>
              </Link>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition">
                Free Counselling
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(20px,-30px) scale(1.1); }
          }
          .animate-blob {
            animation: blob 10s infinite;
          }
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .delay-2000 { animation-delay: 2s; }
          .delay-4000 { animation-delay: 4s; }
        `}</style>
      </section>

      {/* NAVIGATION PILLS SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#why-pg-medical"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Why PG Medical in India?
          </a>
          <a
            href="#md"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            MD
          </a>
          <a
            href="#ms"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            MS
          </a>
          <a
            href="#pg-diploma"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            PG Diploma
          </a>
          <a
            href="#admission-process"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Admission Process
          </a>
          <a
            href="#fee-structure"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Fee Structure
          </a>
          <a
            href="#career-scope"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Career Scope
          </a>
          <a
            href="#why-choose-us"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Why Choose Us
          </a>
          <a
            href="#faq"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            FAQs
          </a>
        </div>
      </div>

      {/* INTRO SECTION - PG MEDICAL OVERVIEW */}
      <section
        id="why-pg-medical"
        className="relative pt-14 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build Your{" "}
              <span className="text-blue-600"> Medical Specialization</span> in
              India
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="/image/usa-bg.png"
                alt="Study PG Medical Courses in India"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="text-3xl font-bold text-blue-600">95%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Doctors Placed</p>
                  <p className="text-xl font-semibold text-gray-800">8,000+</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Postgraduate (PG) medical education in India is the next step
                  after MBBS for students who want to specialize in a particular
                  field of medicine. These programs provide advanced clinical
                  training, in-depth subject knowledge, and hands-on experience
                  in hospitals.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  PG medical courses in India are regulated by the National
                  Medical Commission (NMC) and are highly competitive due to
                  limited seats and high demand.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Specialization in your chosen medical field",
                  "Higher earning potential",
                  "Better career opportunities in India & abroad",
                  "Opportunity to work in top hospitals",
                  "Academic & research growth",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-yellow-500 hover:bg-blue-100 transition rounded-xl p-3 text-sm font-medium text-black"
                  >
                    <span className="text-black font-bold">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="mt-8 px-20 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
                  Start Your Journey
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

      {/* WHY STUDY PG MEDICAL IN INDIA */}
      <section
        id="why-pg-medical-india"
        className="relative pt-4 pb-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 blur-[130px] rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-sky-300/30 blur-[120px] rounded-full animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Pursue{" "}
              <span className="text-blue-600">PG Medical in India?</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              India offers high-quality postgraduate medical education with
              diverse specializations, top hospitals, and affordable tuition
              fees at government institutions.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍⚕️",
                title: "Specialization in your chosen medical field",
                desc: "PG Medical programs allow you to dive deep into your chosen specialty like Cardiology, Neurology, Pediatrics, Surgery, and more.",
              },
              {
                icon: "💰",
                title: "Higher earning potential",
                desc: "Specialist doctors command significantly higher salaries compared to general practitioners, with excellent growth prospects.",
              },
              {
                icon: "🌍",
                title: "Better career opportunities in India & abroad",
                desc: "Indian PG medical degrees are recognized globally, opening doors to practice in top hospitals worldwide.",
              },
              {
                icon: "🏥",
                title: "Opportunity to work in top hospitals",
                desc: "Work in premier institutions like AIIMS, PGIMER, and top private hospitals as a specialist consultant.",
              },
              {
                icon: "📚",
                title: "Academic & research growth",
                desc: "Contribute to medical research, publish papers, and pursue academic careers as medical college faculty.",
              },
              {
                icon: "⭐",
                title: "Super-specialization pathway",
                desc: "PG Medical is the gateway to super-specializations like DM and MCh, leading to highly sought-after expert roles.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES OF PG MEDICAL COURSES HEADING */}
      <section className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Types of <span className="text-blue-600">PG Medical Courses</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>
        </div>
      </section>

      {/* MD HEADING WITH OVERVIEW */}
      <section
        id="md"
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              MD <span className="text-blue-600">(Doctor of Medicine)</span>
            </h1>
            <p className="pt-7">
              MD is a postgraduate degree focused on non-surgical
              specializations in medicine. It provides advanced clinical
              training, in-depth subject knowledge, and hands-on experience in
              hospitals.
            </p>
            <p>
              The course duration is 3 years. Admission is based on NEET-PG
              qualification. MD graduates can work as specialist doctors,
              consultant physicians, or pursue academic careers as medical
              professors.
            </p>
          </div>
        </div>
      </section>

      {/* MD COURSE HIGHLIGHTS SECTION */}
      <section className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              MD{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Course Highlights
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key subjects and specializations in Doctor of Medicine
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "General Medicine",
                icon: "🩺",
                subjects: [
                  "Internal Medicine",
                  "Clinical Diagnosis",
                  "Patient Care",
                ],
                career: "Physician, Consultant",
              },
              {
                title: "Pediatrics",
                icon: "👶",
                subjects: [
                  "Child Health",
                  "Neonatology",
                  "Growth & Development",
                ],
                career: "Pediatrician",
              },
              {
                title: "Dermatology",
                icon: "🧴",
                subjects: ["Skin Diseases", "Cosmetology", "Venereology"],
                career: "Dermatologist",
              },
              {
                title: "Radiology",
                icon: "📊",
                subjects: ["Medical Imaging", "Ultrasound", "CT/MRI"],
                career: "Radiologist",
              },
              {
                title: "Anesthesiology",
                icon: "💉",
                subjects: [
                  "Pain Management",
                  "Critical Care",
                  "Operation Theatre",
                ],
                career: "Anesthesiologist",
              },
              {
                title: "Psychiatry",
                icon: "🧠",
                subjects: ["Mental Health", "Psychology", "Counseling"],
                career: "Psychiatrist",
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="p-6">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {spec.title}
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm mb-3">
                    {spec.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-blue-600 font-medium mt-2">
                    Career: {spec.career}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Career Opportunities Box for MD */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">👨‍⚕️</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">
                    Career Opportunities After MD
                  </h4>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {[
                      "Specialist Doctor",
                      "Consultant Physician",
                      "Medical Professor (after further qualification)",
                    ].map((career, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DURATION, ELIGIBILITY & CAREER OPPORTUNITIES SECTION - MD */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              MD Program Details
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the duration, eligibility criteria, and career
              opportunities after completing MD (Doctor of Medicine)
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setActiveTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "duration" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                ⏳ Duration
              </button>
              <button
                onClick={() => setActiveTab("eligibility")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "eligibility" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                🎓 Eligibility Criteria
              </button>
              <button
                onClick={() => setActiveTab("career")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "career" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                💼 Career Opportunities
              </button>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="MD Duration"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>
                    <div className="text-5xl font-bold text-blue-600 mb-4">
                      3 Years
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          Full-time postgraduate program
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          6 semesters of academic & clinical training
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          Hands-on clinical rotations & research component
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> Includes
                        theoretical learning, clinical postings, and
                        dissertation work
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "eligibility" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Eligibility Criteria for MD
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📚</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Educational Qualification
                          </p>
                          <p className="text-gray-600">
                            MBBS degree from a recognized institution
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">🏥</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Internship
                          </p>
                          <p className="text-gray-600">
                            Completion of compulsory rotating internship
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📋</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Medical Registration
                          </p>
                          <p className="text-gray-600">
                            Registration with Medical Council of India/State
                            Medical Council
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Entrance Exam
                          </p>
                          <p className="text-gray-600">
                            Qualification in NEET-PG (National Eligibility cum
                            Entrance Test for PG)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-800">
                      <span className="font-bold">📌 Important:</span> NEET-PG
                      is the mandatory entrance examination for admission to MD
                      courses in India.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "career" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Career Opportunities After MD
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Specialist Doctor",
                        icon: "👨‍⚕️",
                        desc: "Work as a specialist in multi-specialty hospitals and healthcare centers",
                        color: "from-blue-50 to-blue-100",
                        iconBg: "bg-blue-100",
                      },
                      {
                        title: "Consultant Physician",
                        icon: "🩺",
                        desc: "Provide expert medical consultation in government or private healthcare settings",
                        color: "from-indigo-50 to-indigo-100",
                        iconBg: "bg-indigo-100",
                      },
                      {
                        title: "Medical Professor",
                        icon: "📚",
                        desc: "Teach and mentor future doctors in medical colleges (after further qualification)",
                        color: "from-purple-50 to-purple-100",
                        iconBg: "bg-purple-100",
                      },
                    ].map((career, idx) => (
                      <div
                        key={idx}
                        className={`bg-gradient-to-br ${career.color} rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
                      >
                        <div
                          className={`w-16 h-16 ${career.iconBg} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}
                        >
                          {career.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          {career.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{career.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <p className="text-sm text-blue-800">
                      <span className="font-bold">💡 Pro Tip:</span> After MD,
                      doctors can also pursue DM (Doctorate of Medicine) for
                      super-specialization in fields like Cardiology, Neurology,
                      etc.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MS HEADING WITH OVERVIEW */}
      <section
        id="ms"
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              MS <span className="text-indigo-600">(Master of Surgery)</span>
            </h1>
            <p className="pt-7">
              MS is a postgraduate degree focused on surgical specializations.
              It provides advanced surgical training, hands-on operating room
              experience, and expertise in surgical procedures.
            </p>
            <p>
              The course duration is 3 years. Admission is based on NEET-PG
              qualification. MS graduates can work as surgeons, surgical
              specialists, or hospital consultants.
            </p>
          </div>
        </div>
      </section>

      {/* MS COURSE HIGHLIGHTS SECTION */}
      <section className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-12 h-0.5 bg-indigo-500 rounded-full"></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <div className="w-12 h-0.5 bg-indigo-500 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              MS{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Course Highlights
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key subjects and specializations in Master of Surgery
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "General Surgery",
                icon: "🔪",
                subjects: [
                  "Surgical Techniques",
                  "Laparoscopic Surgery",
                  "Trauma Care",
                ],
                career: "General Surgeon",
              },
              {
                title: "Orthopedics",
                icon: "🦴",
                subjects: [
                  "Bone Surgery",
                  "Joint Replacement",
                  "Sports Medicine",
                ],
                career: "Orthopedic Surgeon",
              },
              {
                title: "ENT",
                icon: "👂",
                subjects: ["Ear Surgery", "Nose Surgery", "Throat Surgery"],
                career: "ENT Specialist",
              },
              {
                title: "Ophthalmology",
                icon: "👁️",
                subjects: ["Eye Surgery", "Cataract", "Glaucoma"],
                career: "Ophthalmologist",
              },
              {
                title: "Obstetrics & Gynecology",
                icon: "🤰",
                subjects: ["Pregnancy Care", "Delivery", "Women's Health"],
                career: "Gynecologist",
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="p-6">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {spec.title}
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm mb-3">
                    {spec.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-indigo-600 font-medium mt-2">
                    Career: {spec.career}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Career Opportunities Box for MS */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔪</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">
                    Career Opportunities After MS
                  </h4>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {[
                      "Surgeon",
                      "Surgical Specialist",
                      "Hospital Consultant",
                    ].map((career, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DURATION, ELIGIBILITY & CAREER OPPORTUNITIES SECTION - MS */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              MS Program Details
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the duration, eligibility criteria, and career
              opportunities after completing MS (Master of Surgery)
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setActiveTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "duration" ? "bg-white text-indigo-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                ⏳ Duration
              </button>
              <button
                onClick={() => setActiveTab("eligibility")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "eligibility" ? "bg-white text-indigo-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                🎓 Eligibility Criteria
              </button>
              <button
                onClick={() => setActiveTab("career")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "career" ? "bg-white text-indigo-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                💼 Career Opportunities
              </button>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="MS Duration"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>
                    <div className="text-5xl font-bold text-indigo-600 mb-4">
                      3 Years
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          Full-time postgraduate surgical program
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          6 semesters of academic & surgical training
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          Hands-on surgical rotations & OT experience
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-indigo-50 rounded-xl">
                      <p className="text-sm text-indigo-800">
                        <span className="font-bold">Note:</span> Includes
                        theoretical learning, surgical postings, and
                        dissertation work
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "eligibility" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Eligibility Criteria for MS
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📚</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Educational Qualification
                          </p>
                          <p className="text-gray-600">
                            MBBS degree from a recognized institution
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">🏥</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Internship
                          </p>
                          <p className="text-gray-600">
                            Completion of compulsory rotating internship
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📋</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Medical Registration
                          </p>
                          <p className="text-gray-600">
                            Registration with Medical Council of India/State
                            Medical Council
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Entrance Exam
                          </p>
                          <p className="text-gray-600">
                            Qualification in NEET-PG (National Eligibility cum
                            Entrance Test for PG)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-indigo-50 rounded-xl">
                    <p className="text-sm text-indigo-800">
                      <span className="font-bold">📌 Important:</span> NEET-PG
                      is the mandatory entrance examination for admission to MS
                      courses in India.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "career" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Career Opportunities After MS
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Surgeon",
                        icon: "🔪",
                        desc: "Perform surgical procedures in multi-specialty hospitals and healthcare centers",
                        color: "from-indigo-50 to-indigo-100",
                        iconBg: "bg-indigo-100",
                      },
                      {
                        title: "Surgical Specialist",
                        icon: "🏥",
                        desc: "Specialize in specific surgical fields like Orthopedics, ENT, Ophthalmology, etc.",
                        color: "from-purple-50 to-purple-100",
                        iconBg: "bg-purple-100",
                      },
                      {
                        title: "Hospital Consultant",
                        icon: "👨‍⚕️",
                        desc: "Provide expert surgical consultation in government or private healthcare settings",
                        color: "from-blue-50 to-blue-100",
                        iconBg: "bg-blue-100",
                      },
                    ].map((career, idx) => (
                      <div
                        key={idx}
                        className={`bg-gradient-to-br ${career.color} rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
                      >
                        <div
                          className={`w-16 h-16 ${career.iconBg} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}
                        >
                          {career.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          {career.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{career.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <p className="text-sm text-blue-800">
                      <span className="font-bold">💡 Pro Tip:</span> After MS,
                      surgeons can further pursue MCh (Master of Chirurgiae) for
                      super-specialization in fields like Cardiothoracic
                      Surgery, Neurosurgery, etc.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PG DIPLOMA HEADING WITH OVERVIEW */}
      <section
        id="pg-diploma"
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              PG Diploma <span className="text-purple-600">Courses</span>
            </h1>
            <p className="pt-7">
              PG Diploma courses are shorter-duration programs focused on
              specific medical fields. They provide specialized training in
              particular areas of medicine.
            </p>
            <p>
              The course duration is 1 to 2 years. Admission is based on NEET-PG
              qualification. PG Diploma graduates can work as specialist
              practitioners or in hospital roles.
            </p>
          </div>
        </div>
      </section>

      {/* PG DIPLOMA COURSE HIGHLIGHTS SECTION */}
      <section className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-12 h-0.5 bg-purple-500 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="w-12 h-0.5 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              PG Diploma{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Course Highlights
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key specializations in PG Diploma programs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Diploma in Child Health (DCH)",
                icon: "👶",
                subjects: ["Pediatric Care", "Child Nutrition", "Vaccination"],
                career: "Child Specialist",
              },
              {
                title: "Diploma in Anesthesia (DA)",
                icon: "💉",
                subjects: [
                  "Anesthesia Techniques",
                  "Pain Management",
                  "Critical Care",
                ],
                career: "Anesthesiologist",
              },
              {
                title: "Diploma in Gynecology & Obstetrics (DGO)",
                icon: "🤰",
                subjects: ["Women's Health", "Pregnancy Care", "Delivery"],
                career: "Gynecologist",
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {spec.title}
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm mb-3 text-left">
                    {spec.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-purple-600 font-medium mt-2">
                    Career: {spec.career}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Career Opportunities Box for PG Diploma */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📜</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">
                    Career Opportunities After PG Diploma
                  </h4>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {["Specialist Practitioner", "Hospital Roles"].map(
                      (career, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm"
                        >
                          {career}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DURATION, ELIGIBILITY & CAREER OPPORTUNITIES SECTION - PG DIPLOMA */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-blue-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              PG Diploma Program Details
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the duration, eligibility criteria, and career
              opportunities after completing PG Diploma courses
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setActiveTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "duration" ? "bg-white text-purple-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                ⏳ Duration
              </button>
              <button
                onClick={() => setActiveTab("eligibility")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "eligibility" ? "bg-white text-purple-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                🎓 Eligibility Criteria
              </button>
              <button
                onClick={() => setActiveTab("career")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "career" ? "bg-white text-purple-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                💼 Career Opportunities
              </button>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="PG Diploma Duration"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>
                    <div className="text-5xl font-bold text-purple-600 mb-4">
                      1 to 2 Years
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          Short-term specialized postgraduate program
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          Focused training in specific medical fields
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          Practical clinical exposure & hands-on training
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                      <p className="text-sm text-purple-800">
                        <span className="font-bold">Note:</span> Duration varies
                        by specialization - DCH, DA, DGO are 2-year programs
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "eligibility" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Eligibility Criteria for PG Diploma
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📚</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Educational Qualification
                          </p>
                          <p className="text-gray-600">
                            MBBS degree from a recognized institution
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">🏥</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Internship
                          </p>
                          <p className="text-gray-600">
                            Completion of compulsory rotating internship
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📋</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Medical Registration
                          </p>
                          <p className="text-gray-600">
                            Registration with Medical Council of India/State
                            Medical Council
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Entrance Exam
                          </p>
                          <p className="text-gray-600">
                            Qualification in NEET-PG (National Eligibility cum
                            Entrance Test for PG)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                    <p className="text-sm text-purple-800">
                      <span className="font-bold">📌 Important:</span> NEET-PG
                      is the mandatory entrance examination for admission to PG
                      Diploma courses in India.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "career" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Career Opportunities After PG Diploma
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {[
                      {
                        title: "Specialist Practitioner",
                        icon: "👨‍⚕️",
                        desc: "Practice as a specialist in your chosen field like Child Health, Anesthesia, or Gynecology",
                        color: "from-purple-50 to-purple-100",
                        iconBg: "bg-purple-100",
                      },
                      {
                        title: "Hospital Roles",
                        icon: "🏥",
                        desc: "Work in multi-specialty hospitals, nursing homes, and healthcare centers",
                        color: "from-blue-50 to-blue-100",
                        iconBg: "bg-blue-100",
                      },
                    ].map((career, idx) => (
                      <div
                        key={idx}
                        className={`bg-gradient-to-br ${career.color} rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
                      >
                        <div
                          className={`w-16 h-16 ${career.iconBg} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}
                        >
                          {career.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          {career.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{career.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <p className="text-sm text-blue-800">
                      <span className="font-bold">💡 Pro Tip:</span> PG Diploma
                      holders can later pursue DNB or MD/MS programs for further
                      career advancement and specialization.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS SECTION - PG MEDICAL */}
      <section
        className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
        id="admission-process"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Admission Process for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PG Medical Courses in India
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Step-by-step guide to secure your seat in top MD/MS/PG Diploma
              colleges
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-blue-500 to-blue-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      📝
                    </div>
                    <div className="text-white text-2xl font-bold">Step 01</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Appear for NEET-PG Exam
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Appear and qualify for the National Eligibility cum Entrance
                    Test for Postgraduate (NEET-PG) conducted by NBE. Secure the
                    required cutoff marks based on your category.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-blue-600">
                        📌 Minimum qualifying percentile:
                      </span>{" "}
                      General - 50th, SC/ST/OBC - 40th, PwD - 45th
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      🎯
                    </div>
                    <div className="text-white text-2xl font-bold">Step 02</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Obtain All India Rank (AIR)
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Based on your NEET-PG score, you will receive an All India
                    Rank (AIR). This rank determines your eligibility for
                    counselling and seat allocation.
                  </p>
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-indigo-600">
                        📌 Rank validity:
                      </span>{" "}
                      NEET-PG scores are valid for the current academic year
                      only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-purple-500 to-purple-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      💻
                    </div>
                    <div className="text-white text-2xl font-bold">Step 03</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Participate in Counselling
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Register for counselling conducted by MCC (Medical
                    Counselling Committee) for AIQ seats or respective state
                    authorities for state quota seats.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-purple-600">
                        📌 Counselling types:
                      </span>{" "}
                      All India Quota (AIQ) | State Quota
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-pink-500 to-pink-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      🏛️
                    </div>
                    <div className="text-white text-2xl font-bold">Step 04</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Choose Specialization & College
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Fill your specialization and college preferences based on
                    your NEET-PG rank, category, and seat availability. Choose
                    from government, deemed, or private medical colleges.
                  </p>
                  <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-pink-600">
                        📌 Key Point:
                      </span>{" "}
                      Option to modify preferences during each counselling round
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-rose-500 to-rose-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      ✅
                    </div>
                    <div className="text-white text-2xl font-bold">Step 05</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Seat Allotment & Admission Confirmation
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Seat is allotted based on merit and preferences. Report to
                    the allotted college for document verification, pay fees,
                    and confirm your admission.
                  </p>
                  <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-rose-600">
                        📌 Required documents:
                      </span>{" "}
                      NEET-PG scorecard, MBBS degree, internship completion
                      certificate, medical registration certificate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Grid - Full Width */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📅</div>
                <div>
                  <h4 className="font-bold text-gray-800">Important Dates</h4>
                  <p className="text-sm text-gray-600">
                    NEET-PG: March | Counselling: May-July
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📄</div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Documents Required
                  </h4>
                  <p className="text-sm text-gray-600">
                    NEET-PG Scorecard, MBBS Degree, Internship Certificate,
                    Medical Registration
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="text-3xl">💡</div>
                <div>
                  <h4 className="font-bold text-gray-800">Pro Tip</h4>
                  <p className="text-sm text-gray-600">
                    Research specializations and colleges before counselling
                    begins
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Expert Admission Guidance →
            </button>
          </div>
        </div>
      </section>

      {/* SEAT DISTRIBUTION SECTION */}
      <section className="pt-12 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
              <span className="text-xl">🎯</span>
              <span className="font-semibold text-blue-700">
                Seat Distribution
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              PG Medical <span className="text-blue-600">Seat Allocation</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Understand how seats are distributed across different quotas for
              MD/MS/PG Diploma admissions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* AIQ Card */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">🇮🇳</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  All India Quota (AIQ)
                </h3>
                <div className="text-5xl font-bold text-blue-600 mb-4">50%</div>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-blue-500">✓</span> Centralized
                    counselling by MCC
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-blue-500">✓</span> Open to all Indian
                    citizens
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-blue-500">✓</span> Includes all states
                    & union territories
                  </li>
                </ul>
              </div>
            </div>

            {/* State Quota Card */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  State Quota
                </h3>
                <div className="text-5xl font-bold text-indigo-600 mb-4">
                  50%
                </div>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-indigo-500">✓</span> State-level
                    counselling
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-indigo-500">✓</span>{" "}
                    Domicile/residency requirement
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-indigo-500">✓</span> Conducted by
                    respective state authorities
                  </li>
                </ul>
              </div>
            </div>

            {/* Private & Deemed Quota Card */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">🏥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Private & Deemed Universities
                </h3>
                <div className="text-5xl font-bold text-purple-600 mb-4">
                  Separate Quotas
                </div>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-purple-500">✓</span> Management quota
                    seats
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-purple-500">✓</span> NRI quota
                    available
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-purple-500">✓</span> Institute-level
                    counselling
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info Box */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📌</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Important Note
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Seat distribution may vary slightly between states and
                    institutions. Some states have additional reservations for
                    rural candidates, in-service candidates, or specific
                    categories. Check with the respective counselling authority
                    for exact distribution details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Check Seat Availability →
            </button>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE SECTION */}
      <section
        className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
        id="fee-structure"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <span className="text-blue-600 text-sm font-semibold">
                💰 Fee Overview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fee Structure <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                (General Overview)
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Understand the approximate fee range for PG medical courses across
              different types of institutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Government Colleges
                </h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    ₹50,000
                  </span>
                  <span className="text-xl text-gray-500"> – </span>
                  <span className="text-4xl font-bold text-blue-600">
                    ₹3,00,000
                  </span>
                </div>
                <p className="text-gray-500">per year</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Affordable fee
                      structure
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Scholarship
                      opportunities available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">🏥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Private Colleges
                </h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-purple-600">
                    ₹10,00,000
                  </span>
                  <span className="text-xl text-gray-500"> – </span>
                  <span className="text-4xl font-bold text-purple-600">
                    ₹50,00,000
                  </span>
                </div>
                <p className="text-gray-500">per year</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> World-class
                      infrastructure
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Modern facilities
                      & equipment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📌</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Important Note
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fees vary significantly by specialization & institution.
                    Additional charges may include hostel fees, examination
                    fees, and other miscellaneous expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER SCOPE SECTION */}
      <section
        className="py-20 bg-gradient-to-b from-white via-blue-50 to-white"
        id="career-scope"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Scope</span> After PG
              Medical
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              After completing MD/MS or Diploma, doctors can explore diverse
              career paths
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Work as Specialists in hospitals",
                icon: "🏥",
                description:
                  "Join multi-specialty hospitals as specialist doctors in your field",
              },
              {
                title: "Start private practice or clinics",
                icon: "⚕️",
                description:
                  "Establish your own clinic or partner with existing healthcare facilities",
              },
              {
                title: "Join medical colleges as faculty",
                icon: "📚",
                description:
                  "Teach and mentor future doctors in medical colleges",
              },
              {
                title: "Work in research & healthcare organizations",
                icon: "🔬",
                description:
                  "Contribute to medical research and healthcare innovations",
              },
              {
                title: "Explore opportunities abroad",
                icon: "🌍",
                description:
                  "Practice medicine internationally with recognized qualifications",
              },
              {
                title: "Healthcare Administration",
                icon: "📊",
                description:
                  "Lead hospital departments, manage healthcare facilities, and drive policy decisions",
              },
            ].map((career, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {career.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {career.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {career.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-3">
                    <span className="text-2xl">🎓</span>
                    <span className="font-semibold text-blue-700">
                      Super-Specialization Options
                    </span>
                  </div>
                  <p className="text-lg text-gray-700">
                    After MD/MS, students can further pursue{" "}
                    <span className="font-bold text-blue-600">
                      DM (Doctorate of Medicine)
                    </span>{" "}
                    or{" "}
                    <span className="font-bold text-blue-600">
                      MCh (Master of Chirurgiae)
                    </span>
                  </p>
                  <p className="text-gray-600 mt-2">
                    These lead to super-specialist roles with very high demand.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPER-SPECIALIZATION OPTIONS SECTION */}
      <section className="relative pt-16 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-400/20 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-20 -left-40 w-[600px] h-[600px] bg-blue-400/20 blur-[130px] rounded-full animate-float delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-yellow-300/20 blur-[120px] rounded-full animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
              <span className="text-xl">⭐</span>
              <span className="font-semibold text-emerald-700">
                Advance Your Career
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Super-Specialization{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Options
              </span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              After MD/MS, take the next step in your medical career with
              advanced super-specialization programs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* DM Card */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    🩺
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">DM</h3>
                    <p className="text-emerald-600 font-semibold">
                      Doctorate of Medicine
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  DM is a super-specialization program for medical graduates who
                  have completed MD. It focuses on advanced clinical training in
                  specific medical specialties.
                </p>

                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-xl">
                      ✓
                    </span>
                    <p className="text-gray-600">
                      Duration: <span className="font-semibold">3 years</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-xl">
                      ✓
                    </span>
                    <p className="text-gray-600">
                      Eligibility: MD degree in relevant specialty
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-xl">
                      ✓
                    </span>
                    <p className="text-gray-600">
                      Popular Specializations: Cardiology, Neurology,
                      Gastroenterology, Nephrology, Endocrinology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MCh Card */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    🔪
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">MCh</h3>
                    <p className="text-blue-600 font-semibold">
                      Master of Chirurgiae
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  MCh is a super-specialization program for surgical graduates
                  who have completed MS. It provides advanced surgical training
                  in specialized surgical fields.
                </p>

                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-xl">✓</span>
                    <p className="text-gray-600">
                      Duration: <span className="font-semibold">3 years</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-xl">✓</span>
                    <p className="text-gray-600">
                      Eligibility: MS degree in relevant surgical specialty
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-xl">✓</span>
                    <p className="text-gray-600">
                      Popular Specializations: Cardiothoracic Surgery,
                      Neurosurgery, Plastic Surgery, Urology, Pediatric Surgery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Impact Box */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-3">
                    <span className="text-2xl">🚀</span>
                    <span className="font-semibold text-purple-700">
                      Career Impact
                    </span>
                  </div>
                  <p className="text-lg text-gray-700">
                    DM and MCh programs lead to{" "}
                    <span className="font-bold text-purple-600">
                      super-specialist roles
                    </span>{" "}
                    with:
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                      🏆 Very High Demand
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                      💰 Top Salary Packages
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                      🏥 Prestigious Positions
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                      🌍 Global Recognition
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Entrance Info */}
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📝</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Entrance Examination
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Admission to DM/MCh programs is through{" "}
                    <span className="font-semibold">
                      NEET-SS (National Eligibility cum Entrance Test for Super
                      Speciality)
                    </span>
                    . The exam is conducted annually by NBE for admission to
                    super-specialization courses in medical colleges across
                    India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span>🎓</span>
              Explore Super-Specialization Options
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section
        className="pt-6 pb-12 bg-gradient-to-b from-white via-blue-50 to-white"
        id="why-choose-us"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="PG Medical Admission Guidance"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="font-bold text-gray-800">Trusted by</p>
                    <p className="text-2xl font-bold text-blue-600">8,000+</p>
                    <p className="text-xs text-gray-500">Doctors & Students</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <span className="text-blue-600 text-sm font-semibold">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Trusted Partner for <br />
                <span className="text-blue-600">
                  PG Medical Admission Guidance
                </span>
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive support to help you navigate the
                complex PG medical admission process with ease.
              </p>

              <div className="space-y-4">
                {[
                  "NEET-PG rank-based counselling",
                  "Specialization selection guidance",
                  "College shortlisting (Govt. & Private)",
                  "Complete counselling support (AIQ & State)",
                  "Transparent process & expert guidance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Journey →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        className="pt-6 pb-14 px-6 bg-gradient-to-br from-gray-50 to-indigo-50/30"
        id="faq"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Got Questions?
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-3">
                We've Got Answers
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "What is NEET-PG and why is it important?",
                a: "NEET-PG is the mandatory entrance examination for admission to MD/MS/PG Diploma courses in India. It is conducted by NBE and is the single gateway for all PG medical seats in India.",
              },
              {
                q: "What is the total duration of MD/MS and PG Diploma?",
                a: "MD/MS: 3 years | PG Diploma: 1 to 2 years",
              },
              {
                q: "What is the eligibility criteria for PG Medical courses?",
                a: "Candidates must have MBBS degree from a recognized institution, completed internship, and qualified NEET-PG.",
              },
              {
                q: "What is the fee structure for PG Medical colleges?",
                a: "Government colleges: ₹50,000-3,00,000/year | Private colleges: ₹10,00,000-50,00,000/year",
              },
              {
                q: "What are the career opportunities after PG Medical?",
                a: "Specialist Doctor, Consultant Physician, Surgeon, Medical Professor, Research Roles, and opportunities abroad.",
              },
              {
                q: "What is the seat distribution for PG Medical admissions?",
                a: "50% All India Quota (AIQ) | 50% State Quota | Separate quotas for private & deemed universities.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="border-l-4 border-blue-500">
                  <button
                    className="faq-question w-full text-left p-6 flex justify-between items-center"
                    onClick={(e) => {
                      const button = e.currentTarget;
                      const answer = button.nextElementSibling;
                      const icon = button.querySelector(".faq-icon");

                      // Close other open FAQs
                      document
                        .querySelectorAll(".faq-answer")
                        .forEach((item) => {
                          if (item !== answer && item.style.maxHeight) {
                            item.style.maxHeight = null;
                            const otherIcon =
                              item.previousElementSibling?.querySelector(
                                ".faq-icon",
                              );
                            if (otherIcon)
                              otherIcon.style.transform = "rotate(0deg)";
                          }
                        });

                      // Toggle current FAQ
                      if (answer.style.maxHeight) {
                        answer.style.maxHeight = null;
                        icon.style.transform = "rotate(0deg)";
                      } else {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                        icon.style.transform = "rotate(180deg)";
                      }
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-lg">
                          {faq.q}
                        </h3>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 transform transition-transform duration-300 faq-icon"
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
                  <div className="faq-answer max-h-0 overflow-hidden transition-all duration-300">
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full shadow-lg p-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full px-6 py-3">
                <p className="text-white font-semibold">
                  Still have questions?
                </p>
              </div>
              <button className="px-6 py-3 text-gray-700 font-semibold hover:text-blue-600 transition-colors">
                Contact Our Experts →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="medical-pattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="2" fill="white" />
                <path
                  d="M30 10 L30 50 M10 30 L50 30"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#medical-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <svg
              className="w-5 h-5 text-white animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white text-sm font-semibold tracking-wide">
              LIMITED SEATS AVAILABLE
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Confused about PG Medical Admissions & Specialization?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-300">
              Get Expert Guidance
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                📊 Get expert guidance based on your NEET-PG rank
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                🎯 Choose the right specialization for your future
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                ✅ Secure your seat in top medical colleges
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="group relative bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Book your FREE counselling session today!
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const faqQuestions = document.querySelectorAll('.faq-question');
              faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                  const answer = question.nextElementSibling;
                  const icon = question.querySelector('.faq-icon');
                  document.querySelectorAll('.faq-answer').forEach(item => {
                    if (item !== answer) {
                      item.style.maxHeight = null;
                      const otherIcon = item.previousElementSibling.querySelector('.faq-icon');
                      if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                  });
                  if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    icon.style.transform = 'rotate(0deg)';
                  } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.style.transform = 'rotate(180deg)';
                  }
                });
              });
            });
          `,
        }}
      />

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
