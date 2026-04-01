import { Link } from "react-router-dom";
import { useState } from "react";

export default function Engineering() {
  const [activeTab, setActiveTab] = useState("duration");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study Engineering Courses in India"
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
              🔧 Your Path to Engineering Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Engineering Courses in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                India
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Start your journey to become a top engineer with leading colleges,
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
          <a
            href="#why-engineering"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Why Engineering in India?
          </a>
          <a
            href="#btech"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            B.Tech
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

      {/* intro */}
      <section
        id="why-engineering"
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
              <span className="text-blue-600"> Engineering Career</span> in
              India
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="/image/usa-bg.png"
                alt="Study Engineering in India"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Placement Rate</p>
                  <p className="text-3xl font-bold text-blue-600">95%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Students Placed</p>
                  <p className="text-xl font-semibold text-gray-800">20,000+</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Choose Engineering in India?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Engineering is one of the most sought-after career paths in
                  India, offering excellent career opportunities, high earning
                  potential, and global exposure. With a strong focus on
                  innovation, technology, and practical application, engineering
                  programs in India prepare students for real-world challenges.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  India is home to some of the top engineering institutions and
                  provides a wide range of specializations across emerging and
                  traditional fields.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Wide range of specializations",
                  "Strong placement opportunities",
                  "Industry-oriented curriculum",
                  "Affordable education compared to abroad",
                  "High demand in India & globally",
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

      {/* WHY STUDY ENGINEERING IN INDIA */}
      <section
        id="why-engineering-india"
        className="relative pt-4 pb-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 blur-[130px] rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-sky-300/30 blur-[120px] rounded-full animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose{" "}
              <span className="text-blue-600">Engineering in India</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              India offers high-quality engineering education with diverse
              specializations, strong placement opportunities, and affordable
              tuition fees, making it a top choice for students.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Wide Range of Specializations",
                desc: "Engineering in India offers various branches like Computer Science, Mechanical, Civil, AI, Data Science, and more to match different career interests.",
              },
              {
                icon: "💼",
                title: "Strong Placement Opportunities",
                desc: "Top colleges provide excellent campus placements with leading companies offering attractive salary packages and career growth.",
              },
              {
                icon: "⚙️",
                title: "Industry-Oriented Curriculum",
                desc: "Courses are designed with practical learning, internships, and real-world projects to prepare students for industry demands.",
              },
              {
                icon: "💰",
                title: "Affordable Education",
                desc: "Compared to studying abroad, engineering in India is cost-effective while still maintaining high academic standards.",
              },
              {
                icon: "🌍",
                title: "High Global Demand",
                desc: "Indian engineers are highly valued worldwide, with opportunities in IT, core industries, and multinational companies.",
              },
              {
                icon: "🚀",
                title: "Innovation & Startup Opportunities",
                desc: "India's growing startup ecosystem encourages students to innovate, build startups, and explore entrepreneurial paths.",
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

      {/* B.TECH HEADING WITH OVERVIEW */}
      <section
        id="btech"
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              B.Tech{" "}
              <span className="text-blue-600">(Bachelor of Technology)</span>
            </h1>
            <p className="pt-7">
              B.Tech is a professional undergraduate degree focused on technical
              knowledge, problem-solving skills, and innovation. It equips
              students with both theoretical understanding and hands-on
              experience.
            </p>
            <p>
              The course duration is 4 years (8 semesters). Eligibility requires
              10+2 with Physics, Chemistry, and Mathematics (PCM) with minimum
              50-75% marks (varies by college). Admission is based on entrance
              exams such as JEE Main, JEE Advanced (for IITs), and state-level
              entrance exams.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR B.TECH SPECIALIZATIONS */}
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
                B.Tech Specializations
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Choose from a wide range of engineering disciplines
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Computer Science Engineering (CSE)",
                icon: "💻",
                subjects: ["Programming", "AI & Data Science", "Cybersecurity"],
                career: "Software Developer, Data Scientist",
              },
              {
                title: "Mechanical Engineering",
                icon: "⚙️",
                subjects: ["Machine Design", "Manufacturing", "Thermodynamics"],
                career: "Mechanical Engineer, Production Engineer",
              },
              {
                title: "Civil Engineering",
                icon: "🏗️",
                subjects: [
                  "Infrastructure",
                  "Construction",
                  "Structural Design",
                ],
                career: "Civil Engineer, Site Engineer",
              },
              {
                title: "Electrical Engineering",
                icon: "⚡",
                subjects: ["Power Systems", "Electronics", "Circuits"],
                career: "Electrical Engineer, Power Engineer",
              },
              {
                title: "Electronics & Communication (ECE)",
                icon: "📡",
                subjects: ["Communication Systems", "Embedded Systems", "VLSI"],
                career: "Electronics Engineer, Network Engineer",
              },
              {
                title: "Information Technology (IT)",
                icon: "🖥️",
                subjects: ["Software Systems", "Networking", "Databases"],
                career: "IT Analyst, System Engineer",
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

      {/* COURSE STRUCTURE SECTION */}
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
              B.Tech{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Course Structure
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Year-wise learning progression in engineering
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                year: "1st Year",
                icon: "📚",
                title: "Basic Sciences & Fundamentals",
                subjects: [
                  "Physics",
                  "Chemistry",
                  "Mathematics",
                  "Engineering Mechanics",
                ],
              },
              {
                year: "2nd Year",
                icon: "⚙️",
                title: "Core Engineering Subjects",
                subjects: [
                  "Core Specialization Subjects",
                  "Lab Practices",
                  "Workshop Training",
                ],
              },
              {
                year: "3rd Year",
                icon: "🔧",
                title: "Advanced Subjects + Internship",
                subjects: [
                  "Advanced Specialization",
                  "Industrial Internship",
                  "Mini Projects",
                ],
              },
              {
                year: "4th Year",
                icon: "🎓",
                title: "Specialization + Major Project",
                subjects: [
                  "Elective Courses",
                  "Major Project",
                  "Industry Training",
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

      {/* DURATION & ELIGIBILITY SECTION */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Duration & Eligibility for B.Tech in India
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the complete duration structure and eligibility
              requirements for pursuing B.Tech in India
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
                      alt="B.Tech Duration"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      4 Years
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">8 semesters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          Mandatory internship/training in 3rd year
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> Many colleges
                        offer industry-integrated programs with additional
                        training
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
                            10+2 with Physics, Chemistry, Mathematics (PCM)
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
                            Minimum 50-75% marks (varies by college)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Entrance Exams
                          </p>
                          <p className="text-gray-600">
                            JEE Main | JEE Advanced (for IITs) | State-level
                            entrance exams
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
              <span className="font-semibold text-blue-700">
                Higher Education
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Explore{" "}
              <span className="text-blue-600">Future Study Options</span>
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Upgrade your career with advanced degrees and specialized
              certifications
            </p>
          </div>

          {/* options grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "M.Tech", icon: "⚙️" },
              { name: "MBA", icon: "📊" },
              { name: "MS (Abroad)", icon: "🌍" },
              { name: "AI & ML", icon: "🤖" },
              { name: "Data Science", icon: "📈" },
              { name: "Cloud Computing", icon: "☁️" },
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
              🎯 Boost Your Career with Higher Studies & Specialization
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS SECTION */}
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
                Engineering in India
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Step-by-step guide to secure your seat in top engineering colleges
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Appear for Entrance Exams",
                icon: "📝",
                color: "from-blue-500 to-blue-600",
                desc: "Appear for JEE Main, JEE Advanced, or state-level entrance exams based on your target colleges.",
                detail:
                  "JEE Main: January & April sessions | State exams: Varies by state",
              },
              {
                step: 2,
                title: "Participate in Counselling",
                icon: "💻",
                color: "from-indigo-500 to-indigo-600",
                desc: "Register for counselling conducted by JoSAA (for IITs/NITs) or respective state authorities.",
                detail:
                  "JoSAA counselling: 6 rounds | State counselling: Varies by state",
              },
              {
                step: 3,
                title: "Choose College & Branch",
                icon: "🏛️",
                color: "from-purple-500 to-purple-600",
                desc: "Fill your college and branch preferences based on your rank and category.",
                detail:
                  "Option to modify preferences during each counselling round",
              },
              {
                step: 4,
                title: "Seat Allotment & Verification",
                icon: "✅",
                color: "from-pink-500 to-pink-600",
                desc: "Seat is allotted based on merit. Report to the allotted college for document verification.",
                detail:
                  "Documents: 10th & 12th marksheets, JEE scorecard, category certificate",
              },
              {
                step: 5,
                title: "Fee Payment & Confirmation",
                icon: "💰",
                color: "from-rose-500 to-rose-600",
                desc: "Pay the admission fees and complete formalities to confirm your seat.",
                detail: "Fees vary by college type: Government vs Private",
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

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📅</div>
                <div>
                  <h4 className="font-bold text-gray-800">Important Dates</h4>
                  <p className="text-sm text-gray-600">
                    JEE Main: Jan/April | JEE Advanced: May/June
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
                    10th & 12th Marksheets, JEE Scorecard, Category Certificate
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
                    Research colleges and branches before counselling begins
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Expert Admission Guidance →
            </button>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE SECTION */}
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
              Understand the approximate fee range for engineering courses
              across different types of institutions
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
                      <span className="text-blue-500">✓</span> Scholarship
                      opportunities available
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Reserved category
                      concessions
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
                    ₹1,50,000
                  </span>
                  <span className="text-xl text-gray-500"> – </span>
                  <span className="text-4xl font-bold text-purple-600">
                    ₹5,00,000
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
                      <span className="text-blue-500">✓</span> Modern labs &
                      facilities
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

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📌</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Important Note
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fees vary based on college type, specialization, and
                    category. Additional charges may include hostel, library,
                    and other miscellaneous fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES & TOP RECRUITERS */}
      <section
        id="career-scope"
        className="pt-10 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After
              Engineering
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Engineering graduates can explore diverse roles across industries
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* 3-3 GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Software Engineer",
                icon: "💻",
                description:
                  "Develop applications, manage systems, and create innovative software solutions",
              },
              {
                title: "Mechanical/Civil Engineer",
                icon: "⚙️",
                description:
                  "Work in manufacturing, construction, infrastructure, and core industries",
              },
              {
                title: "Data Analyst",
                icon: "📊",
                description:
                  "Analyze data, create insights, and drive business decisions",
              },
              {
                title: "Product Manager",
                icon: "📦",
                description:
                  "Lead product development, strategy, and cross-functional teams",
              },
              {
                title: "Government Engineer",
                icon: "🏛️",
                description:
                  "Secure PSU jobs via GATE or state engineering services",
              },
              {
                title: "Entrepreneur",
                icon: "🚀",
                description: "Start your own tech venture or engineering firm",
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
      <section className="relative pt-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* background effects */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] bg-indigo-400/20 blur-[130px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* heading */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
              <span className="text-xl">🏢</span>
              <span className="font-semibold text-blue-700">
                Top Recruiters
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Companies Hiring{" "}
              <span className="text-blue-600">Engineering Graduates</span>
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Get placed in leading MNCs, tech giants, and core engineering
              companies
            </p>
          </div>

          {/* recruiters grid */}
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
                name: "ISRO",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Space_Research_Organisation_Logo.svg",
              },
              {
                name: "DRDO",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/DRDO_logo.png",
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

          {/* bottom highlight */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
              🚀 100+ Companies Recruit Engineering Graduates Every Year
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
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
                alt="Engineering Admission Guidance"
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
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <span className="text-blue-600 text-sm font-semibold">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Trusted Partner for <br />
                <span className="text-blue-600">
                  Engineering Admission Guidance
                </span>
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive support to help you navigate the
                complex engineering admission process with ease.
              </p>
              <div className="space-y-4">
                {[
                  "College & branch selection based on rank",
                  "Guidance for JEE counselling",
                  "Personalized career roadmap",
                  "Admission assistance in top colleges",
                  "Post-admission support",
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
        id="faq"
        className="pt-6 pb-14 px-6 bg-gradient-to-br from-gray-50 to-indigo-50/30"
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
                q: "What is JEE Main and why is it important?",
                a: "JEE Main is the primary entrance exam for admission to NITs, IIITs, and other centrally funded technical institutions. It is also the qualifying exam for JEE Advanced (for IITs).",
              },
              {
                q: "What is the total duration of B.Tech?",
                a: "B.Tech is a 4-year undergraduate program divided into 8 semesters.",
              },
              {
                q: "What is the eligibility criteria for B.Tech?",
                a: "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics (PCM) with minimum 50-75% marks.",
              },
              {
                q: "What is the fee structure for engineering colleges?",
                a: "Government colleges: ₹50,000-2,00,000/year. Private colleges: ₹1,50,000-5,00,000/year.",
              },
              {
                q: "What are the career opportunities after B.Tech?",
                a: "Software Engineer, Mechanical/Civil Engineer, Data Analyst, Product Manager, Government Engineer, and more.",
              },
              {
                q: "How does the engineering admission counselling process work?",
                a: "Qualify JEE Main, participate in JoSAA/State counselling, choose college & branch, seat allotment, document verification, fee payment.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="border-l-4 border-blue-500">
                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="faq-question w-full text-left p-6 flex justify-between items-center"
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

                    {/* ICON */}
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
                    className={`faq-answer overflow-hidden transition-all duration-300 ${
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
            Confused about Engineering Colleges & Branch Selection?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-300">
              Get Expert Guidance
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                📊 Get expert counselling based on your rank
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                🎯 Choose the best specialization for your career
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                ✅ Secure admission in top colleges
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
