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
            alt="Study PG Management Courses in India"
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
              💼 Your Path to Business Leadership
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              PG Management Courses in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                India
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Build your career in corporate leadership with MBA & PGDM
              programs. Specialize in your chosen field and become a business
              leader.
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
            href="#why-pg-management"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Why PG Management in India?
          </a>
          <a
            href="#mba"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            MBA
          </a>
          <a
            href="#pgdm"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            PGDM
          </a>
          <a
            href="#mcom"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            M.Com
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
            Fee Structure & ROI
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

      {/* INTRO SECTION - PG MANAGEMENT OVERVIEW */}
      <section
        id="why-pg-management"
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
              <span className="text-blue-600"> Business Leadership</span> in
              India
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="/image/usa-bg.png"
                alt="Study PG Management Courses in India"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Placement Rate</p>
                  <p className="text-3xl font-bold text-blue-600">95%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Students Placed</p>
                  <p className="text-xl font-semibold text-gray-800">25,000+</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Postgraduate Management courses in India are among the most
                  popular choices for graduates aiming to build high-growth
                  careers in corporate leadership, entrepreneurship, and
                  business strategy.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Programs like MBA equip students with advanced business
                  knowledge, leadership skills, and industry exposure, making
                  them highly employable across sectors.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "High salary potential & career growth",
                  "Opportunities in top companies & MNCs",
                  "Industry-oriented curriculum",
                  "Strong networking opportunities",
                  "Diverse specializations to choose from",
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

      {/* WHY STUDY PG MANAGEMENT IN INDIA */}
      <section
        id="why-pg-management-india"
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
              <span className="text-blue-600">PG Management in India?</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              India offers world-class management education with diverse
              specializations, strong placement opportunities, and excellent ROI
              from top B-schools.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "High salary potential & career growth",
                desc: "MBA graduates command significantly higher salaries with excellent growth prospects in leadership roles.",
              },
              {
                icon: "🏢",
                title: "Opportunities in top companies & MNCs",
                desc: "Get placed in leading MNCs, consulting firms, and Fortune 500 companies with prestigious roles.",
              },
              {
                icon: "📚",
                title: "Industry-oriented curriculum",
                desc: "Courses designed with practical learning, case studies, and real-world projects to prepare students for industry demands.",
              },
              {
                icon: "🤝",
                title: "Strong networking opportunities",
                desc: "Connect with industry leaders, alumni networks, and peer groups that boost career growth.",
              },
              {
                icon: "🎯",
                title: "Diverse specializations to choose from",
                desc: "Choose from Marketing, Finance, HR, Operations, Business Analytics, and more to match your career goals.",
              },
              {
                icon: "🚀",
                title: "Entrepreneurship & startup ecosystem",
                desc: "India's thriving startup ecosystem offers immense opportunities for MBA graduates to launch their own ventures or join high-growth startups.",
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

      {/* MBA HEADING WITH OVERVIEW */}
      <section
        id="mba"
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              MBA{" "}
              <span className="text-blue-600">
                (Master of Business Administration)
              </span>
            </h1>
            <p className="pt-7">
              MBA is the most sought-after PG management degree, focusing on
              business leadership, strategic thinking, and practical
              decision-making.
            </p>
            <p>
              The course duration is 2 years (Full-Time) or 1 year (Executive
              MBA for working professionals). Admission is based on entrance
              exams like CAT, XAT, MAT, CMAT followed by GD/PI rounds.
            </p>
          </div>
        </div>
      </section>

      {/* MBA COURSE HIGHLIGHTS SECTION */}
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
              MBA{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Popular Specializations
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Choose from a wide range of management disciplines
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Marketing",
                icon: "📢",
                subjects: [
                  "Brand Management",
                  "Advertising",
                  "Digital Marketing",
                ],
                career: "Marketing Manager, Brand Manager",
              },
              {
                title: "Finance",
                icon: "💰",
                subjects: ["Investment", "Banking", "Financial Planning"],
                career: "Financial Analyst, Investment Banker",
              },
              {
                title: "Human Resource (HR)",
                icon: "👥",
                subjects: [
                  "Talent Management",
                  "Recruitment",
                  "Employee Relations",
                ],
                career: "HR Manager, Talent Acquisition Specialist",
              },
              {
                title: "Operations",
                icon: "⚙️",
                subjects: ["Supply Chain", "Logistics", "Production"],
                career: "Operations Manager",
              },
              {
                title: "International Business",
                icon: "🌍",
                subjects: ["Global Trade", "Export-Import", "Foreign Markets"],
                career: "International Business Manager",
              },
              {
                title: "Business Analytics",
                icon: "📊",
                subjects: [
                  "Data Analytics",
                  "Predictive Modeling",
                  "Decision Making",
                ],
                career: "Data Analyst, Business Analyst",
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

          {/* Course Structure Box */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📚</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">
                    Course Structure
                  </h4>
                  <p className="text-gray-600">Year-wise Learning:</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                      1st Year: Core subjects (Marketing, Finance, HR,
                      Operations)
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                      2nd Year: Specialization + electives + internships
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DURATION, ELIGIBILITY & CAREER OPPORTUNITIES SECTION - MBA */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              MBA Program Details
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the duration, eligibility criteria, and career
              opportunities after completing MBA
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
                      alt="MBA Duration"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          2 Years
                        </div>
                        <p className="text-gray-700 font-medium">
                          Full-Time MBA
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Regular program for fresh graduates
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                        <div className="text-3xl font-bold text-purple-600 mb-1">
                          1 Year
                        </div>
                        <p className="text-gray-700 font-medium">
                          Executive MBA
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          For working professionals with experience
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> Includes core
                        subjects, specializations, internships, and capstone
                        projects
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "eligibility" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Eligibility Criteria for MBA
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
                            Graduation in any stream (minimum 50% marks)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Entrance Exams
                          </p>
                          <p className="text-gray-600">
                            CAT | XAT | MAT | CMAT | GMAT
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">💬</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Selection Process
                          </p>
                          <p className="text-gray-600">
                            Group Discussion (GD) & Personal Interview (PI) in
                            top colleges
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">👤</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Work Experience
                          </p>
                          <p className="text-gray-600">
                            Preferred for Executive MBA (2-5 years)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-800">
                      <span className="font-bold">📌 Important:</span> Top
                      B-schools require CAT/XAT scores with 85+ percentile for
                      admission
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "career" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Career Opportunities After MBA
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Management Roles in Corporates",
                        icon: "💼",
                        desc: "Lead teams and drive business growth in top companies",
                        color: "from-blue-50 to-blue-100",
                        iconBg: "bg-blue-100",
                      },
                      {
                        title: "Consulting Firms",
                        icon: "📊",
                        desc: "Work with McKinsey, BCG, Deloitte, and other top consulting firms",
                        color: "from-indigo-50 to-indigo-100",
                        iconBg: "bg-indigo-100",
                      },
                      {
                        title: "Banking & Financial Services",
                        icon: "🏦",
                        desc: "Build career in investment banking, wealth management, and corporate finance",
                        color: "from-purple-50 to-purple-100",
                        iconBg: "bg-purple-100",
                      },
                      {
                        title: "Startups & Entrepreneurship",
                        icon: "🚀",
                        desc: "Launch your own venture or join fast-growing startups",
                        color: "from-orange-50 to-orange-100",
                        iconBg: "bg-orange-100",
                      },
                      {
                        title: "E-commerce & Tech Companies",
                        icon: "🛒",
                        desc: "Drive business strategy in Amazon, Flipkart, Google, and Microsoft",
                        color: "from-green-50 to-green-100",
                        iconBg: "bg-green-100",
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
                      <span className="font-bold">💡 Pro Tip:</span> Average
                      starting salary: ₹4 LPA – ₹20+ LPA. Higher ROI from top
                      institutes with strong career growth in 3–5 years.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* COURSE STRUCTURE SECTION */}
      <section className="pt-3 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
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
              MBA
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Course Structure
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Year-wise learning progression in management programs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 1st Year Card */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-8 text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                  📘
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">
                  1st Year
                </h3>
                <h4 className="font-bold text-gray-800 text-lg mb-4">
                  Core Subjects
                </h4>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {["Marketing", "Finance", "HR", "Operations"].map(
                    (subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ),
                  )}
                </div>
                <ul className="space-y-2 text-gray-600 text-sm text-left max-w-xs mx-auto">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Business Communication & Ethics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Organizational Behavior
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Managerial Economics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Quantitative Techniques
                  </li>
                </ul>
              </div>
            </div>

            {/* 2nd Year Card */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="p-8 text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-indigo-600 mb-3">
                  2nd Year
                </h3>
                <h4 className="font-bold text-gray-800 text-lg mb-4">
                  Specialization + Electives + Internships
                </h4>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {[
                    "Marketing",
                    "Finance",
                    "HR",
                    "Operations",
                    "Analytics",
                    "IB",
                  ].map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-gray-600 text-sm text-left max-w-xs mx-auto">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    Specialization Electives
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    Industry Internship
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    Capstone Project
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    Leadership & Strategy
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Key Highlights
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    • Industry visits and guest lectures from corporate leaders
                    <br />
                    • Summer internships between 1st and 2nd year
                    <br />
                    • Live projects and case study competitions
                    <br />• Placement preparation and soft skills training
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Download Detailed Curriculum →
            </button>
          </div>
        </div>
      </section>

      {/* PGDM HEADING WITH OVERVIEW */}
      <section
        id="pgdm"
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              PGDM{" "}
              <span className="text-indigo-600">
                (Post Graduate Diploma in Management)
              </span>
            </h1>
            <p className="pt-7">
              PGDM is equivalent to MBA and offered by autonomous institutes. It
              focuses on industry-oriented learning with a practical approach to
              management education.
            </p>
            <p>
              The course duration is 2 years. PGDM programs are AICTE approved
              and highly valued by recruiters for their contemporary curriculum
              and industry relevance.
            </p>
          </div>
        </div>
      </section>

      {/* PGDM COURSE HIGHLIGHTS SECTION */}
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
              PGDM{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Program Details
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key features and career scope of PGDM programs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-5xl mb-4">⏳</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Duration
              </h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">
                2 Years
              </div>
              <p className="text-gray-600">
                Full-time program with industry exposure
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Career Scope
              </h3>
              <p className="text-gray-600">
                Similar to MBA with strong industry focus
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="px-3 py-1 bg-indigo-50 rounded-full text-sm">
                  Corporate Roles
                </span>
                <span className="px-3 py-1 bg-indigo-50 rounded-full text-sm">
                  Consulting
                </span>
                <span className="px-3 py-1 bg-indigo-50 rounded-full text-sm">
                  Entrepreneurship
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">
                    Key Difference from MBA
                  </h4>
                  <p className="text-gray-600">
                    PGDM is offered by autonomous institutes (like IIMs, XLRI)
                    and focuses on practical, industry-oriented learning. It is
                    AICTE approved and highly valued by recruiters for its
                    contemporary curriculum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M.COM HEADING WITH OVERVIEW */}
      <section
        id="mcom"
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              M.Com{" "}
              <span className="text-purple-600">(Master of Commerce)</span>
            </h1>
            <p className="pt-7">
              M.Com is focused on advanced accounting, finance, and commerce. It
              provides in-depth knowledge of financial management, corporate
              accounting, and business regulations.
            </p>
            <p>
              The course duration is 2 years. It's ideal for students aiming for
              careers in accounting, taxation, banking, and finance sectors.
            </p>
          </div>
        </div>
      </section>

      {/* M.COM COURSE HIGHLIGHTS SECTION */}
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
              M.Com{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Program Details
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key features and career opportunities in Master of Commerce
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Duration Card */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">⏳</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Duration
                </h3>
                <div className="text-5xl font-bold text-purple-600 mb-4">
                  2 Years
                </div>
                <p className="text-gray-500">Full-time postgraduate program</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-purple-500">✓</span> 4 semesters
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-purple-500">✓</span> Specialization
                      options available
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Opportunities Card */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Career Opportunities
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Accountant",
                    "Financial Analyst",
                    "Tax Consultant",
                    "Auditor",
                    "Lecturer",
                    "Banking Professional",
                  ].map((career, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200"
                    >
                      {career}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Average Starting Salary: ₹3-8 LPA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Higher Education Options */}
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-500 shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">
                    Higher Education Options
                  </h4>
                  <p className="text-gray-600">
                    After M.Com, students can pursue:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["PhD", "MBA", "CA", "CMA", "CS"].map((option, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Explore M.Com Programs →
            </button>
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS SECTION - PG MANAGEMENT */}
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
                PG Management Courses in India
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Step-by-step guide to secure your seat in top B-schools
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
                    Appear for Entrance Exams
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Appear for national-level entrance exams like CAT, XAT, MAT,
                    CMAT, or GMAT. Secure the required percentile based on your
                    target B-schools.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-blue-600">
                        📌 Popular Exams:
                      </span>{" "}
                      CAT (Nov) | XAT (Jan) | MAT (Feb/May/Sep/Dec) | CMAT
                      (April)
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
                    Apply to Colleges
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Apply to your preferred B-schools based on your entrance
                    exam scores. Top colleges have separate application forms
                    and deadlines.
                  </p>
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-indigo-600">
                        📌 Key Point:
                      </span>{" "}
                      Shortlisting based on entrance exam scores and academic
                      profile
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
                      💬
                    </div>
                    <div className="text-white text-2xl font-bold">Step 03</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    GD & PI Rounds
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Shortlisted candidates participate in Group Discussion (GD)
                    and Personal Interview (PI) rounds. This evaluates
                    communication skills, subject knowledge, and overall
                    personality.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-purple-600">
                        📌 Preparation:
                      </span>{" "}
                      Current affairs, business news, and mock interviews are
                      essential
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
                    Final Selection & Admission
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Final selection is based on entrance exam score, academic
                    profile, work experience, and GD/PI performance. Complete
                    admission formalities and secure your seat.
                  </p>
                  <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-pink-600">
                        📌 Weightage:
                      </span>{" "}
                      Entrance Score: 40-60% | GD/PI: 20-40% | Academics: 10-20%
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
                    CAT: Nov | XAT: Jan | MAT: Feb/May/Sep/Dec
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
                    Entrance Scorecard, Graduation Marksheets, Work Experience
                    Certificate (if applicable)
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
                    Start GD/PI preparation early; stay updated on business news
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

      {/* FEE STRUCTURE & ROI SECTION */}
      <section
        className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
        id="fee-structure"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <span className="text-blue-600 text-sm font-semibold">
                💰 Fee & ROI Overview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fee Structure & <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Return on Investment (ROI)
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Understand the approximate fee range and expected returns for PG
              management courses
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
                    ₹5,00,000
                  </span>
                </div>
                <p className="text-gray-500">total course fee</p>
                <div className="mt-4 p-3 bg-blue-50 rounded-xl">
                  <p className="text-sm font-semibold text-blue-700">
                    Average Starting Salary: ₹4-8 LPA
                  </p>
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
                    ₹5,00,000
                  </span>
                  <span className="text-xl text-gray-500"> – </span>
                  <span className="text-4xl font-bold text-purple-600">
                    ₹25,00,000
                  </span>
                </div>
                <p className="text-gray-500">total course fee</p>
                <div className="mt-4 p-3 bg-purple-50 rounded-xl">
                  <p className="text-sm font-semibold text-purple-700">
                    Average Starting Salary: ₹6-20+ LPA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📈</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    ROI Highlights
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    • Average starting salary: ₹4 LPA – ₹20+ LPA
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    • Higher ROI from top institutes (IIMs, XLRI, SPJIMR, etc.)
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    • Strong career growth in 3–5 years with 2-3x salary
                    increase
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
              Management
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              After completing MBA, PGDM, or M.Com, students can explore diverse
              career paths
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Management Roles in Corporates",
                icon: "💼",
                description:
                  "Lead teams and drive business growth in top companies across industries",
              },
              {
                title: "Consulting Firms",
                icon: "📊",
                description:
                  "Work with McKinsey, BCG, Deloitte, and other top consulting firms",
              },
              {
                title: "Banking & Financial Services",
                icon: "🏦",
                description:
                  "Build career in investment banking, wealth management, and corporate finance",
              },
              {
                title: "Startups & Entrepreneurship",
                icon: "🚀",
                description:
                  "Launch your own venture or join fast-growing startups",
              },
              {
                title: "E-commerce & Tech Companies",
                icon: "🛒",
                description:
                  "Drive business strategy in Amazon, Flipkart, Google, and Microsoft",
              },
              {
                title: "FMCG & Retail",
                icon: "🏪",
                description:
                  "Work with top FMCG brands in marketing, sales, and operations roles",
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

      {/* TOP RECRUITERS SECTION */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] bg-indigo-400/20 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/20 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
              <span className="text-xl">🏢</span>
              <span className="font-semibold text-blue-700">
                Top Recruiters
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Companies Hiring{" "}
              <span className="text-blue-600">PG Management Graduates</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Join the ranks of successful graduates placed in India's most
              prestigious organizations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Simple Bullet Points Layout */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
              <div className="space-y-6">
                {[
                  {
                    icon: "📊",
                    title: "Consulting Firms",
                    companies:
                      "Deloitte, EY, KPMG, PwC, McKinsey & Company, BCG, Bain & Company",
                  },
                  {
                    icon: "💻",
                    title: "IT Companies",
                    companies:
                      "Infosys, TCS, Accenture, Wipro, Tech Mahindra, HCL Technologies",
                  },
                  {
                    icon: "🏦",
                    title: "Banks & Financial Institutions",
                    companies:
                      "HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, Goldman Sachs, Morgan Stanley",
                  },
                  {
                    icon: "🛒",
                    title: "FMCG & E-commerce Companies",
                    companies:
                      "Amazon, Flipkart, Hindustan Unilever, Nestlé, P&G, ITC, Zomato, Swiggy",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 hover:bg-blue-50 transition rounded-xl"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.companies}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg">
                <p className="text-sm font-medium">
                  🎯 500+ Companies Recruit PG Management Graduates Every Year
                </p>
              </div>
            </div>
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
                alt="PG Management Admission Guidance"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="font-bold text-gray-800">Trusted by</p>
                    <p className="text-2xl font-bold text-blue-600">10,000+</p>
                    <p className="text-xs text-gray-500">
                      Students & Professionals
                    </p>
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
                  PG Management Admission Guidance
                </span>
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive support to help you navigate the
                complex B-school admission process with ease.
              </p>

              <div className="space-y-4">
                {[
                  "Profile evaluation & career mapping",
                  "College shortlisting (based on score & budget)",
                  "GD/PI preparation support",
                  "Admission assistance in top B-schools",
                  "End-to-end counselling support",
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
                q: "What is the difference between MBA and PGDM?",
                a: "MBA is a degree offered by universities affiliated with UGC, while PGDM is a diploma offered by autonomous institutes approved by AICTE. Both are equivalent for industry jobs, with PGDM often having a more contemporary curriculum.",
              },
              {
                q: "What are the top entrance exams for MBA in India?",
                a: "CAT (IIMs), XAT (XLRI), MAT, CMAT, GMAT, and state-level exams like MAH CET, TANCET, etc.",
              },
              {
                q: "What is the eligibility criteria for MBA?",
                a: "Graduation in any stream with minimum 50% marks (45% for reserved categories). Final year students can also apply.",
              },
              {
                q: "What is the average fee for MBA in India?",
                a: "Government colleges: ₹50,000-5,00,000 total | Private colleges: ₹5,00,000-25,00,000 total",
              },
              {
                q: "What are the career opportunities after MBA?",
                a: "Management roles in corporates, consulting, banking, FMCG, e-commerce, startups, and entrepreneurship.",
              },
              {
                q: "What is the average starting salary after MBA?",
                a: "₹4-20 LPA depending on college, specialization, and prior experience. Top IIMs offer ₹25-35 LPA.",
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
            Planning to pursue MBA but confused about colleges & exams?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-300">
              Get Expert Guidance
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                📊 Get expert guidance based on your profile & goals
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                🎯 Shortlist the best colleges within your budget
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                ✅ Maximize your chances of admission
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
