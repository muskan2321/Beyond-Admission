import { Link } from "react-router-dom";
import { useState } from "react";

export default function PgEngineering() {
  const [activeTab, setActiveTab] = useState("duration");
  const [activeFeeTab, setActiveFeeTab] = useState("mtech");

  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };


  return (
    <div className="bg-white">
      {/* 1.HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study PG Engineering Courses in India"
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
              🎓 Your Path to Advanced Engineering Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              PG Engineering Courses in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                India
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              (M.Tech / ME / MS) — Specialize, Research, and Elevate Your
              Engineering Career with India's Top Institutes.
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
          .animate-blob { animation: blob 10s infinite; }
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .delay-2000 { animation-delay: 2s; }
          .delay-4000 { animation-delay: 4s; }
        `}</style>
      </section>

      {/* 2.NAVIGATION PILLS SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#why-pg-engineering"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Why PG Engineering?
          </a>
          <a
            href="#mtech"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            M.Tech
          </a>
          <a
            href="#specializations"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Specializations
          </a>
          <a
            href="#course-structure"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Course Structure
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
        </div>
      </div>

      {/*3. WHY PG ENGINEERING IN INDIA */}
      <section
        id="why-pg-engineering"
        className="relative pt-14 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Pursue{" "}
              <span className="text-blue-600"> PG Engineering in India</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Deepen your technical expertise, specialize in emerging domains,
              and unlock leadership roles in industry and research.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="/image/usa-bg.png"
                alt="PG Engineering in India"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Avg. Stipend (GATE)</p>
                  <p className="text-3xl font-bold text-blue-600">₹12,400</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Research Scope</p>
                  <p className="text-xl font-semibold text-gray-800">
                    IITs, IISc, NITs
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Pursue PG Engineering in India?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Postgraduate Engineering programs in India are designed for
                  students who want to deepen their technical expertise,
                  specialize in a particular domain, and enhance career
                  opportunities. Programs like M.Tech focus on advanced
                  concepts, research, and industry applications, making
                  graduates highly valuable in both corporate and research
                  sectors.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Specialization in advanced technical fields",
                  "Better job roles & higher salary packages",
                  "Opportunities in research & development",
                  "Eligibility for teaching & academic roles",
                  "Strong demand in core & emerging industries",
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
      </section>

      {/*4. M.TECH OVERVIEW SECTION */}
      <section
        id="mtech"
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              M.Tech{" "}
              <span className="text-blue-600">(Master of Technology)</span>
            </h1>
            <p className="pt-7 text-gray-600">
              M.Tech is the most popular postgraduate engineering degree,
              focusing on advanced technical knowledge, research, and practical
              applications in a specific field.
            </p>
            <p className="text-gray-600">
              The course duration is 2 years (4 semesters). Eligibility requires
              a B.Tech / BE degree in a relevant field with minimum 50–60%
              marks, and a valid GATE score for most institutes.
            </p>
          </div>
        </div>
      </section>

      {/* 5.POPULAR M.TECH SPECIALIZATIONS */}
      <section
        id="specializations"
        className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
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
              Popular{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                M.Tech Specializations
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Choose from a wide range of advanced engineering disciplines
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Computer Science & Engineering",
                icon: "💻",
                subjects: ["AI", "Machine Learning", "Data Science"],
                career: "Software Engineer, AI Engineer, Research Scientist",
              },
              {
                title: "Mechanical Engineering",
                icon: "⚙️",
                subjects: ["Design", "Manufacturing", "Thermal Engineering"],
                career: "Design Engineer, Production Manager",
              },
              {
                title: "Civil Engineering",
                icon: "🏗️",
                subjects: ["Structural", "Geotechnical", "Transportation"],
                career: "Structural Engineer, Project Manager",
              },
              {
                title: "Electrical Engineering",
                icon: "⚡",
                subjects: ["Power Systems", "Control Systems"],
                career: "Power Engineer, Electrical Consultant",
              },
              {
                title: "Electronics & Communication",
                icon: "📡",
                subjects: ["VLSI", "Embedded Systems", "Communication"],
                career: "Embedded Engineer, Telecom Engineer",
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
        </div>
      </section>

      {/* 6. COURSE STRUCTURE SECTION */}
      <section
        id="course-structure"
        className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
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
              PG Engineering{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Course Structure
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Year-wise learning progression in M.Tech / ME / MS
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                year: "1st Year",
                icon: "📚",
                title: "Advanced Core Subjects & Lab Work",
                subjects: [
                  "Advanced Specialization Courses",
                  "Research Methodology",
                  "Laboratory Practices",
                ],
              },
              {
                year: "2nd Year",
                icon: "🔬",
                title: "Research Work & Dissertation",
                subjects: [
                  "Thesis / Major Project",
                  "Seminar & Publications",
                  "Industry Collaboration (Optional)",
                ],
              },
            ].map((year, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="p-6 text-center">
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition duration-300">
                    {year.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    {year.year}
                  </h3>
                  <h4 className="font-bold text-gray-800 mb-3">{year.title}</h4>
                  <ul className="space-y-2 text-gray-600 text-sm text-left">
                    {year.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DURATION & ELIGIBILITY SECTION */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Duration & Eligibility for PG Engineering in India
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the complete duration structure and eligibility
              requirements for M.Tech, ME, and MS programs
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
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="PG Engineering Duration"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      2 Years
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">4 semesters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          Thesis / Major Project in final year
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> MS programs may
                        extend to 2.5–3 years depending on research requirements
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "eligibility" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Eligibility Criteria
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
                            B.Tech / BE degree in a relevant field
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Minimum Marks
                          </p>
                          <p className="text-gray-600">
                            Minimum 50–60% marks (varies by institute)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Entrance Exam
                          </p>
                          <p className="text-gray-600">
                            GATE (Graduate Aptitude Test in Engineering) is
                            mandatory for most IITs, NITs, and centrally funded
                            institutes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. OTHER PG PROGRAMS: ME & MS */}
      <section className="relative pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
              <span className="text-xl">🎓</span>
              <span className="font-semibold text-blue-700">
                Other PG Programs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              ME & <span className="text-blue-600">MS Programs</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Explore alternative postgraduate engineering degrees
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                ME (Master of Engineering)
              </h3>
              <p className="text-gray-600 mb-4">
                Similar to M.Tech but more theory-oriented, offered by some
                universities. Duration: 2 years.
              </p>
            </div>
            <div className="group bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🔬
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                MS (Master of Science in Engineering)
              </h3>
              <p className="text-gray-600 mb-4">
                Focused on research and specialization, often preferred for
                students planning PhD or research careers. Duration: 2–3 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ADMISSION PROCESS SECTION */}
      <section
        id="admission-process"
        className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
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
                PG Engineering in India
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Step-by-step guide to secure your seat in top institutes (IITs,
              NITs, etc.)
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Appear for GATE Exam",
                icon: "📝",
                color: "from-blue-500 to-blue-600",
                desc: "GATE (Graduate Aptitude Test in Engineering) is the primary entrance exam for M.Tech admissions.",
                detail:
                  "GATE is typically conducted in February. Score valid for 3 years.",
              },
              {
                step: 2,
                title: "Apply to Institutes",
                icon: "💻",
                color: "from-indigo-500 to-indigo-600",
                desc: "Apply to IITs, NITs, IIITs, and other universities based on GATE score.",
                detail:
                  "IITs have individual application portals; NITs/CFTIs use CCMT counselling.",
              },
              {
                step: 3,
                title: "Participate in Counselling",
                icon: "🏛️",
                color: "from-purple-500 to-purple-600",
                desc: "Register for CCMT (for NITs) or institute-specific counselling.",
                detail:
                  "Multiple rounds of seat allotment based on GATE rank and preferences.",
              },
              {
                step: 4,
                title: "Seat Allotment & Document Verification",
                icon: "✅",
                color: "from-pink-500 to-pink-600",
                desc: "Seat is allotted based on merit. Report to the allotted institute for document verification.",
                detail:
                  "Documents: GATE scorecard, B.Tech marksheets, degree certificate, category certificate.",
              },
              {
                step: 5,
                title: "Fee Payment & Confirmation",
                icon: "💰",
                color: "from-rose-500 to-rose-600",
                desc: "Pay the admission fees and complete formalities to confirm your seat.",
                detail: "Fees vary by institute type (IITs, NITs, Private).",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`md:w-1/4 bg-gradient-to-br ${item.color} p-6 flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                        {item.icon}
                      </div>
                      <div className="text-white text-2xl font-bold">
                        Step 0{item.step}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/4 p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div
                      className={`bg-${item.color.split("-")[1]}-50 rounded-lg p-4 border-l-4 border-${item.color.split("-")[1]}-500`}
                    >
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">📌 Key Point:</span>{" "}
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Expert Admission Guidance →
            </button>
          </div>
        </div>
      </section>

      {/* 10. FEE STRUCTURE SECTION */}
      <section
        id="fee-structure"
        className="pt-6 pb-8 bg-gradient-to-b from-white via-blue-50 to-white"
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
              Understand the approximate fee range for M.Tech / ME / MS courses
              across different types of institutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveFeeTab("mtech")}
              className={`px-6 py-2 rounded-full font-semibold transition ${activeFeeTab === "mtech" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              M.Tech / ME
            </button>
            <button
              onClick={() => setActiveFeeTab("ms")}
              className={`px-6 py-2 rounded-full font-semibold transition ${activeFeeTab === "ms" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              MS Programs
            </button>
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
                    ₹2,00,000
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
                      <span className="text-blue-500">✓</span> GATE-qualified
                      students get stipend
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Scholarships
                      available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">🏥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Private Colleges
                </h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-purple-600">
                    ₹1,00,000
                  </span>
                  <span className="text-xl text-gray-500"> – </span>
                  <span className="text-4xl font-bold text-purple-600">
                    ₹4,00,000
                  </span>
                </div>
                <p className="text-gray-500">per year</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Modern labs &
                      facilities
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Industry
                      collaboration
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Scholarship &
                      loan options
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {activeFeeTab === "mtech" && (
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💰</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">
                      Stipend for GATE-qualified Students
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      GATE-qualified M.Tech students in IITs, NITs, and other
                      centrally funded institutes receive a monthly stipend of
                      approximately ₹12,400.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 11. CAREER OPPORTUNITIES & TOP RECRUITERS */}
      <section
        id="career-scope"
        className="pt-10 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After
              PG Engineering
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              M.Tech / ME / MS graduates can explore diverse roles across
              industries
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Senior Engineer / Specialist",
                icon: "👨‍💻",
                description:
                  "Lead technical teams, design complex systems, and drive innovation",
              },
              {
                title: "Research & Development (R&D)",
                icon: "🔬",
                description:
                  "Work in corporate R&D labs or government research organizations",
              },
              {
                title: "Public Sector Units (PSUs)",
                icon: "🏛️",
                description:
                  "Secure jobs in BHEL, ONGC, NTPC, IOCL, and other PSUs through GATE score",
              },
              {
                title: "Teaching / Academia",
                icon: "📚",
                description:
                  "Become a lecturer or professor after completing PhD",
              },
              {
                title: "Tech & Product Companies",
                icon: "📱",
                description:
                  "Join top tech firms, product-based companies, and MNCs",
              },
              {
                title: "PhD & Research",
                icon: "🎓",
                description: "Pursue doctoral studies in India or abroad",
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
        </div>
      </section>

      {/* 12. TOP RECRUITERS SECTION */}
      <section className="relative pt-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
              <span className="text-xl">🏢</span>
              <span className="font-semibold text-blue-700">
                Top Recruiters
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Companies Hiring{" "}
              <span className="text-blue-600">PG Engineering Graduates</span>
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Get placed in leading MNCs, core engineering companies, and PSUs
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              {
                name: "TCS",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tata_Consultancy_Services_Logo.svg",
              },
              {
                name: "Infosys",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
              },
              {
                name: "Wipro",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
              },
              {
                name: "Microsoft",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
              },
              {
                name: "Google",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              },
              {
                name: "Amazon",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              },
              {
                name: "L&T",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Larsen_%26_Toubro_logo.svg",
              },
              {
                name: "BHEL",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/BHEL_logo.svg",
              },
              {
                name: "ONGC",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/53/ONGC_Logo.svg",
              },
              {
                name: "ISRO",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Space_Research_Organisation_Logo.svg",
              },
            ].map((company, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
              >
                <div className="h-12 flex items-center mb-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full object-contain grayscale group-hover:grayscale-0 transition duration-300"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition">
                  {company.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
              🚀 Top Companies & PSUs Recruit M.Tech Graduates Every Year
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHY CHOOSE US SECTION */}
      <section
        id="why-choose-us"
        className="pt-12 pb-12 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="PG Engineering Admission Guidance"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="font-bold text-gray-800">Trusted by</p>
                    <p className="text-2xl font-bold text-blue-600">10,000+</p>
                    <p className="text-xs text-gray-500">PG Aspirants</p>
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
                  PG Engineering Admission Guidance
                </span>
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive support to help you navigate the
                complex PG engineering admission process with ease.
              </p>
              <div className="space-y-4">
                {[
                  "GATE-based college selection guidance",
                  "Specialization counselling for M.Tech/ME/MS",
                  "College shortlisting (IITs, NITs, Private)",
                  "Admission assistance & document support",
                  "Career roadmap planning for research/industry",
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

      {/* 14.FAQ SECTION */}
      <section
      id="faq"
      className="pt-6 pb-14 px-6 bg-gradient-to-br from-gray-50 to-indigo-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Got Questions?
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-3">
              We've Got Answers
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              q: "What is the importance of GATE for M.Tech admission?",
              a: "GATE is the primary entrance exam for admission to IITs, NITs, and other centrally funded institutes.",
            },
            {
              q: "What is the total duration of M.Tech?",
              a: "M.Tech is a 2-year postgraduate program divided into 4 semesters.",
            },
            {
              q: "What is the eligibility criteria for M.Tech?",
              a: "Candidates must have a B.Tech / BE degree with valid GATE score.",
            },
            {
              q: "What is the fee structure for PG engineering?",
              a: "Government: ₹50k–2L/year, Private: ₹1L–4L/year.",
            },
            {
              q: "What are the career opportunities after M.Tech?",
              a: "Senior Engineer, R&D, PSU, Teaching, PhD.",
            },
            {
              q: "How does the admission counselling process work?",
              a: "GATE → Apply → CCMT → Seat allotment → Fee payment.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="border-l-4 border-blue-500">
                {/* BUTTON */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex justify-between items-center"
                >
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {faq.q}
                  </h3>

                  {/* ICON ROTATE */}
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
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

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* 15. CTA SECTION */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
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
            Confused about M.Tech Colleges & Specialization?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-300">
              Get Expert Guidance
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                📊 Get expert counselling based on your GATE score
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                🎯 Choose the right specialization for your career
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                ✅ Secure admission in top engineering colleges
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
          __html: `document.addEventListener('DOMContentLoaded', function() { const faqQuestions = document.querySelectorAll('.faq-question'); faqQuestions.forEach(question => { question.addEventListener('click', () => { const answer = question.nextElementSibling; const icon = question.querySelector('.faq-icon'); document.querySelectorAll('.faq-answer').forEach(item => { if (item !== answer) { item.style.maxHeight = null; const otherIcon = item.previousElementSibling.querySelector('.faq-icon'); if (otherIcon) otherIcon.style.transform = 'rotate(0deg)'; } }); if (answer.style.maxHeight) { answer.style.maxHeight = null; icon.style.transform = 'rotate(0deg)'; } else { answer.style.maxHeight = answer.scrollHeight + 'px'; icon.style.transform = 'rotate(180deg)'; } }); }); });`,
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
