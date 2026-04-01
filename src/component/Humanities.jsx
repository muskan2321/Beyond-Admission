import { Link } from "react-router-dom";
import { useState } from "react";

export default function Humanities() {
  const [activeTab, setActiveTab] = useState("duration");
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study Humanities Courses in India"
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
              📚 Your Path to Humanities Excellence
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Humanities Courses in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                India
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Explore fields like Psychology, Sociology, Literature, and Political Science with top colleges,
              expert guidance, and complete admission support.
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

      {/* NAVIGATION PILLS SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">

          <a href="#why-humanities" className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
            Why Humanities in India?
          </a>

          <a href="#ba" className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
            BA
          </a>

          <a href="#specializations" className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
            Specializations
          </a>

          <a href="#course-structure" className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
            Course Structure
          </a>

          <a href="#admission-process" className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
            Admission Process
          </a>

          <a href="#fee-structure" className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
            Fee Structure
          </a>

          <a href="#career-scope" className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
            Career Scope
          </a>

          <a href="#why-choose-us" className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md">
            Why Choose Us
          </a>

        </div>
      </div>
      
      {/* intro */}
      <section id="why-humanities" className="relative pt-14 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build Your{" "}
              <span className="text-blue-600"> Humanities Career</span> in India
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="/image/usa-bg.png"
                alt="Study Humanities in India"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Career Scope</p>
                  <p className="text-3xl font-bold text-blue-600">High</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Fields Available</p>
                  <p className="text-xl font-semibold text-gray-800">Multiple</p>
                </div>
              </div>
            </div>

            {/* content */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Choose Humanities in India?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Humanities is a diverse and dynamic field that focuses on understanding human society,
                  culture, behavior, and communication. It is an excellent choice for students interested
                  in psychology, literature, history, sociology, political science, and media.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  With the growing demand for creative thinkers, communicators, and analysts, humanities
                  graduates today have strong career opportunities across multiple industries including
                  education, media, public policy, corporate sectors, and research.
                </p>
              </div>

              {/* points */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Wide range of subjects",
                  "Creative & analytical career paths",
                  "Strong industry demand",
                  "Opportunities in multiple sectors",
                  "Global career scope",
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

              {/* button */}
              <div className="flex justify-center">
                <button className="mt-8 px-20 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDY HUMANITIES IN INDIA */}
      <section
        id="why-humanities-india"
        className="relative pt-4 pb-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 blur-[130px] rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-sky-300/30 blur-[120px] rounded-full animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose <span className="text-blue-600">Humanities in India</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Humanities in India offers diverse career opportunities with a strong focus on creativity,
              critical thinking, and real-world understanding of society, making it a valuable and future-ready field.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Wide Range of Career Options",
                desc: "Humanities opens doors to careers in psychology, media, education, public policy, law, and more across various industries."
              },
              {
                icon: "🧠",
                title: "Ideal for Creative & Analytical Minds",
                desc: "Courses focus on critical thinking, creativity, communication, and problem-solving skills essential for modern careers."
              },
              {
                icon: "📢",
                title: "Growing Industry Demand",
                desc: "There is increasing demand for humanities graduates in media, corporate sectors, NGOs, and government roles."
              },
              {
                icon: "🏛️",
                title: "Strong Base for Competitive Exams",
                desc: "Subjects like history, political science, and sociology provide a strong foundation for UPSC, SSC, and other government exams."
              },
              {
                icon: "🌍",
                title: "Global Career Opportunities",
                desc: "Humanities graduates can work internationally in diverse roles such as research, communication, and social development."
              },
              {
                icon: "🚀",
                title: "Traditional & Modern Career Paths",
                desc: "From teaching and civil services to digital media and content creation, humanities offers both classic and modern career options."
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
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

      {/* BA HEADING WITH OVERVIEW */}
      <section id="ba" className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              BA <span className="text-blue-600">(Bachelor of Arts)</span>
            </h1>

            <p className="pt-7">
              BA is one of the most versatile undergraduate programs focused on understanding human society,
              culture, behavior, and communication. It helps students develop critical thinking, creativity,
              and analytical skills required in various career fields.
            </p>

            <p>
              The course duration is 3 years (6 semesters). Eligibility requires 10+2 in any stream
              (Arts, Commerce, or Science) with minimum marks as per college requirements.
              Admission is usually merit-based, while some universities may conduct entrance exams.
            </p>
          </div>

        </div>
      </section>

      {/* POPULAR BA SPECIALIZATIONS */}
      <section id="specializations" className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
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
              Popular <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">BA Specializations</span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Choose from a wide range of humanities disciplines
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Psychology",
                icon: "🧠",
                subjects: ["Human Behavior", "Mental Processes", "Counseling"],
                career: "Psychologist, Counselor, HR Professional"
              },
              {
                title: "Sociology",
                icon: "🌍",
                subjects: ["Society & Culture", "Social Relationships", "Research"],
                career: "Social Worker, Researcher"
              },
              {
                title: "History",
                icon: "📜",
                subjects: ["Past Events", "Civilizations", "Cultural Studies"],
                career: "Historian, Archivist"
              },
              {
                title: "Political Science",
                icon: "🏛️",
                subjects: ["Government Systems", "Politics", "Public Policy"],
                career: "Civil Services, Policy Analyst"
              },
              {
                title: "English Literature",
                icon: "📚",
                subjects: ["Language", "Literature", "Communication"],
                career: "Content Writer, Editor, Teacher"
              },
              {
                title: "Mass Communication / Journalism",
                icon: "📰",
                subjects: ["Media Studies", "News Reporting", "Communication"],
                career: "Journalist, Media Professional"
              }
            ].map((spec, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
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

      {/* COURSE STRUCTURE SECTION */}
      <section id="course-structure" className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
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
              BA <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Course Structure</span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Core subjects and skills covered in humanities programs
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* 4 CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: "📘",
                title: "Core Subjects",
                subjects: ["Psychology", "Sociology", "History", "Political Science"]
              },
              {
                icon: "🗣️",
                title: "Communication Skills",
                subjects: ["Public Speaking", "Writing Skills", "Presentation Skills"]
              },
              {
                icon: "🧠",
                title: "Critical Thinking",
                subjects: ["Analysis Skills", "Problem Solving", "Logical Reasoning"]
              },
              {
                icon: "🔬",
                title: "Research & Electives",
                subjects: ["Research Methodology", "Case Studies", "Elective Subjects"]
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

                <div className="p-6 text-center">
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-gray-600 text-sm text-left">
                    {item.subjects.map((subject, idx) => (
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

      {/* DURATION & ELIGIBILITY SECTION */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Duration & Eligibility for BA in India
            </h2>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the course duration and eligibility criteria for pursuing BA (Bachelor of Arts) in India
            </p>

            {/* tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setActiveTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "duration"
                  ? "bg-white text-blue-600 shadow-xl scale-105"
                  : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                ⏳ Duration
              </button>

              <button
                onClick={() => setActiveTab("eligibility")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "eligibility"
                  ? "bg-white text-blue-600 shadow-xl scale-105"
                  : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                🎓 Eligibility Criteria
              </button>
            </div>

            {/* content */}
            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">

              {/* DURATION */}
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">

                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="BA Duration"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>

                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      3 Years
                    </div>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">•</span>
                        <span className="text-gray-700">Divided into 6 semesters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">•</span>
                        <span className="text-gray-700">Includes projects, presentations, and optional internships</span>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> Students can choose subjects like Psychology, Sociology, History, Political Science, and more.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ELIGIBILITY */}
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
                          <p className="font-semibold text-gray-800">Educational Qualification</p>
                          <p className="text-gray-600">10+2 in any stream (Arts, Commerce, or Science)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <p className="font-semibold text-gray-800">Minimum Marks</p>
                          <p className="text-gray-600">Minimum marks criteria may vary by college</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">Admission Process</p>
                          <p className="text-gray-600">Merit-based or entrance exams depending on the university</p>
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

      {/* HIGHER STUDIES SECTION */}
      <section className="relative pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">

        {/* background effects */}
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-emerald-400/20 blur-[130px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#16a34a_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* heading */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
              <span className="text-xl">🎓</span>
              <span className="font-semibold text-blue-700">Higher Education</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Explore <span className="text-blue-600">Future Study Options</span>
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Continue your journey after BA with advanced degrees and career-focused options
            </p>
          </div>

          {/* options grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">

            {[
              { name: "MA (Master of Arts)", icon: "🎓" },
              { name: "MBA", icon: "📊" },
              { name: "LLB", icon: "⚖️" },
              { name: "UPSC / SSC Exams", icon: "🏛️" },
              { name: "Banking Exams", icon: "🏦" },
              { name: "Certifications (Digital Marketing, Psychology, etc.)", icon: "📜" }
            ].map((option, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition">
                  {option.icon}
                </div>

                <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition">
                  {option.name}
                </p>
              </div>
            ))}

          </div>

          {/* bottom highlight */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
              🎯 Upgrade Your Career with Higher Studies & Specialization
            </div>
          </div>

        </div>
      </section>

      {/* ADMISSION PROCESS SECTION */}
      <section id="admission-process" className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white">
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
              Admission Process for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BA in India</span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Step-by-step guide to secure admission in humanities programs
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Apply to Colleges/Universities",
                icon: "📝",
                color: "from-blue-500 to-blue-600",
                desc: "Fill application forms for universities or colleges offering BA programs online or offline.",
                detail: "Apply to multiple colleges to increase your chances of admission"
              },
              {
                step: 2,
                title: "Merit-Based Selection / Entrance",
                icon: "📊",
                color: "from-indigo-500 to-indigo-600",
                desc: "Admission is usually based on 12th marks, while some universities conduct entrance exams.",
                detail: "Top universities may have their own entrance tests or cut-offs"
              },
              {
                step: 3,
                title: "Document Verification",
                icon: "📄",
                color: "from-purple-500 to-purple-600",
                desc: "Submit required documents for verification after selection.",
                detail: "Documents: 10th & 12th marksheets, ID proof, passport-size photos"
              },
              {
                step: 4,
                title: "Admission Confirmation",
                icon: "✅",
                color: "from-pink-500 to-pink-600",
                desc: "Pay admission fees and confirm your seat in the selected college.",
                detail: "Ensure deadlines are followed to avoid seat cancellation"
              }
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="flex flex-col md:flex-row">

                  <div className={`md:w-1/4 bg-gradient-to-br ${item.color} p-6 flex items-center justify-center`}>
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

                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">📌 Key Point:</span> {item.detail}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* bottom info */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📅</div>
                <div>
                  <h4 className="font-bold text-gray-800">Application Timeline</h4>
                  <p className="text-sm text-gray-600">Usually starts after 12th results (May–July)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📄</div>
                <div>
                  <h4 className="font-bold text-gray-800">Documents Required</h4>
                  <p className="text-sm text-gray-600">10th & 12th Marksheets, ID Proof, Photos</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="text-3xl">💡</div>
                <div>
                  <h4 className="font-bold text-gray-800">Pro Tip</h4>
                  <p className="text-sm text-gray-600">Apply early and shortlist colleges in advance</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Admission Guidance →
            </button>
          </div>

        </div>
      </section>

      {/* FEE STRUCTURE SECTION */}
      <section id="fee-structure" className="pt-6 pb-8 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <span className="text-blue-600 text-sm font-semibold">💰 Fee Overview</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fee Structure <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                (General Overview)
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Understand the approximate fee range for BA (Humanities) courses in India
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* GOVERNMENT */}
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
                  <span className="text-4xl font-bold text-blue-600">₹10,000</span>
                  <span className="text-xl text-gray-500"> – </span>
                  <span className="text-4xl font-bold text-blue-600">₹50,000</span>
                </div>

                <p className="text-gray-500">per year</p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Highly affordable fees
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Scholarships available
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Category-based concessions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PRIVATE */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>

              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">🏫</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Private Colleges
                </h3>

                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-purple-600">₹50,000</span>
                  <span className="text-xl text-gray-500"> – </span>
                  <span className="text-4xl font-bold text-purple-600">₹2,00,000</span>
                </div>

                <p className="text-gray-500">per year</p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Better infrastructure & facilities
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Wide course options
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Scholarship & loan options
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* NOTE */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📌</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Important Note</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fees vary depending on the college, specialization, and location.
                    Additional costs may include hostel, books, and other facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section id="career-scope" className="pt-10 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After Humanities
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Humanities graduates can explore diverse roles across media, government, education, and corporate sectors
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* 3-3 GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Content Writer / Editor",
                icon: "✍️",
                description: "Create engaging content, manage editorial work, and work with digital media platforms"
              },
              {
                title: "Journalist / Media Professional",
                icon: "📰",
                description: "Work in news channels, media houses, and digital journalism platforms"
              },
              {
                title: "Civil Servant",
                icon: "🏛️",
                description: "Prepare for UPSC, State PCS, and other government exams for administrative roles"
              },
              {
                title: "Teacher / Lecturer",
                icon: "🎓",
                description: "Teach in schools, colleges, or pursue higher studies for academic careers"
              },
              {
                title: "Social Worker / NGO Professional",
                icon: "🤝",
                description: "Work with NGOs and social organizations to bring positive societal change"
              },
              {
                title: "HR & Corporate Roles",
                icon: "💼",
                description: "Work in HR, recruitment, training, and corporate communication roles"
              }
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

      {/* EMERGING CAREER OPTIONS - SINGLE ROW */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          {/* heading */}
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-5 py-2 mb-4 shadow-sm">
              <span className="text-blue-600 text-sm font-semibold">🚀 Emerging Careers</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Emerging <span className="text-blue-600">Career Options</span>
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Explore modern career paths after Humanities
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* single row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {[
              {
                title: "Digital Marketing",
                icon: "📱",
                desc: "SEO, social media & online branding"
              },
              {
                title: "Public Relations",
                icon: "🗣️",
                desc: "Media handling & brand communication"
              },
              {
                title: "UX Writing",
                icon: "✍️",
                desc: "Content for apps & websites"
              },
              {
                title: "Policy Research",
                icon: "📊",
                desc: "Think tanks & policy making"
              },
              {
                title: "International Relations",
                icon: "🌍",
                desc: "Global careers & diplomacy"
              }
            ].map((career, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 hover:-translate-y-2 text-center"
              >

                {/* icon */}
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-blue-100 mb-4 group-hover:scale-110 transition">
                  <span className="text-xl">{career.icon}</span>
                </div>

                {/* title */}
                <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                  {career.title}
                </h3>

                {/* desc */}
                <p className="text-xs text-gray-600">
                  {career.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="pt-12 pb-12 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>

              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Humanities Admission Guidance"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="font-bold text-gray-800">Trusted by</p>
                    <p className="text-2xl font-bold text-blue-600">15,000+</p>
                    <p className="text-xs text-gray-500">Students & Parents</p>
                  </div>
                </div>
              </div>
            </div>

            {/* content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <span className="text-blue-600 text-sm font-semibold">Why Choose Us</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Trusted Partner for <br />
                <span className="text-blue-600">Humanities Admission Guidance</span>
              </h2>

              <p className="text-gray-600 mb-6">
                We provide complete support to help you choose the right humanities course, college, and career path with confidence.
              </p>

              {/* points */}
              <div className="space-y-4">
                {[
                  "Career clarity & stream selection guidance",
                  "College shortlisting based on your goals",
                  "Complete admission assistance",
                  "Guidance for competitive exams & career paths",
                  "Personalized counselling support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Journey →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="pt-6 pb-14 px-6 bg-gradient-to-br from-gray-50 to-indigo-50/30">
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

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* FAQ GRID */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {[
              {
                q: "What is BA and why should I choose it?",
                a: "BA is a versatile degree focusing on humanities subjects like psychology, sociology, and history."
              },
              {
                q: "What is the duration of BA?",
                a: "BA is a 3-year undergraduate program divided into 6 semesters."
              },
              {
                q: "What is the eligibility for BA?",
                a: "Students must have completed 10+2 in any stream."
              },
              {
                q: "What is the fee structure for BA?",
                a: "Government: ₹10k–50k/year | Private: ₹50k–2L/year."
              },
              {
                q: "What career options are available after BA?",
                a: "Content Writer, Journalist, Civil Servant, Teacher, HR, etc."
              },
              {
                q: "How does the BA admission process work?",
                a: "Apply → Merit/Entrance → Verification → Fee Payment."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">

                {/* QUESTION */}
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center"
                >
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {faq.q}
                  </h3>

                  {/* ICON ROTATE */}
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${activeIndex === idx ? "rotate-180 text-blue-600" : "text-gray-400"
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* ANSWER */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${activeIndex === idx ? "max-h-40" : "max-h-0"
                    }`}
                >
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                </div>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full shadow-lg p-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full px-6 py-3">
                <p className="text-white font-semibold">Still have questions?</p>
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

        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 animate-gradient-x"></div>

        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="humanities-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="white" />
                <path d="M30 10 L30 50 M10 30 L50 30" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#humanities-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">

          {/* badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-white text-sm font-semibold tracking-wide">
              LIMITED SEATS AVAILABLE
            </span>
          </div>

          {/* heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Confused about Choosing the Right Humanities Course?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-300">
              Get Expert Guidance
            </span>
          </h2>

          {/* highlights */}
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                📊 Get career clarity based on your interests
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                🎯 Choose the right specialization & college
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                ✅ Secure admission with expert support
              </p>
            </div>

          </div>

          {/* CTA button */}
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

      <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('DOMContentLoaded', function() { const faqQuestions = document.querySelectorAll('.faq-question'); faqQuestions.forEach(question => { question.addEventListener('click', () => { const answer = question.nextElementSibling; const icon = question.querySelector('.faq-icon'); document.querySelectorAll('.faq-answer').forEach(item => { if (item !== answer) { item.style.maxHeight = null; const otherIcon = item.previousElementSibling.querySelector('.faq-icon'); if (otherIcon) otherIcon.style.transform = 'rotate(0deg)'; } }); if (answer.style.maxHeight) { answer.style.maxHeight = null; icon.style.transform = 'rotate(0deg)'; } else { answer.style.maxHeight = answer.scrollHeight + 'px'; icon.style.transform = 'rotate(180deg)'; } }); }); });` }} />

      <style jsx>{`
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 8s ease infinite; }
        .shadow-3xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
      `}</style>
    </div>
  );
}