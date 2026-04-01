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
            alt="Study Medical Courses in India"
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
              👨‍⚕️ Your Path to Medical Excellence
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Management Courses in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                India
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              “Start your journey to build a successful career in management
              with top colleges, expert guidance, and complete admission
              support.”
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

      {/* INTRO SECTION */}
      <section className="relative pt-14 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build Your{" "}
              <span className="text-blue-600"> Management Career</span> in India
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="/image/usa-bg.png"
                alt="Study Medical Courses in India"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="text-3xl font-bold text-blue-600">98%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Students Placed</p>
                  <p className="text-xl font-semibold text-gray-800">15,000+</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Choose Management Studies in India?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  India is one of the most preferred destinations for management
                  education due to its high academic standards, globally
                  recognized degrees, and strong industry exposure. Management
                  programs in India are regulated by bodies like the All India
                  Council for Technical Education and other respective
                  authorities, ensuring quality education and professional
                  standards.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Management courses in India combine theoretical knowledge,
                  practical training, case studies, and real-world corporate
                  exposure, making students industry-ready and capable of
                  handling business challenges effectively.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "High demand across industries",
                  "Strong career growth & salary potential",
                  "Practical exposure through internships & projects",
                  "Opportunities in corporate, startups, and entrepreneurship",
                  "Wide range of specializations",
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

      {/* WHY STUDY MEDICAL IN INDIA */}
      <section
        id="why-medical-india"
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
              <span className="text-blue-600">Management Studies in India</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              India offers world-class management education with globally
              recognized degrees, affordable fees, strong industry exposure, and
              excellent career opportunities.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "High Demand Across Industries",
                desc: "Management professionals are in high demand across various industries including finance, marketing, IT, healthcare, and consulting, offering diverse career opportunities.",
              },
              {
                icon: "💰",
                title: "Strong Career Growth & Salary Potential",
                desc: "Management careers offer excellent growth opportunities with competitive salary packages, performance-based incentives, and leadership roles over time.",
              },
              {
                icon: "🧑‍💼",
                title: "Practical Exposure Through Internships & Projects",
                desc: "Management programs focus on real-world learning through internships, live projects, and case studies, helping students gain hands-on industry experience.",
              },
              {
                icon: "🚀",
                title:
                  "Opportunities in Corporate, Startups & Entrepreneurship",
                desc: "Graduates can explore careers in multinational companies, growing startups, or even start their own business ventures with strong managerial skills.",
              },
              {
                icon: "📚",
                title: "Wide Range of Specializations",
                desc: "Students can choose from various specializations such as Marketing, Finance, Human Resources, Operations, and International Business based on their interests.",
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

      {/* BBA HEADING WITH OVERVIEW */}
      <section className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bachelor of{" "}
              <span className="text-blue-600">
                {" "}
                Business Administration (BBA){" "}
              </span>
            </h1>
            <p className="pt-7">
              BBA (Bachelor of Business Administration) is one of the most
              popular undergraduate degrees in India for students aspiring to
              build a career in management and business. It provides in-depth
              knowledge of subjects like marketing, finance, human resources,
              operations, and business management. The course duration is
              typically 3 years, focusing on building strong business
              fundamentals and leadership skills. Students gain practical
              exposure along with theoretical knowledge to understand and solve
              real-world business challenges effectively.
            </p>
            <p>
              Students develop essential skills such as communication,
              decision-making, and problem-solving through projects, case
              studies, and internships. Admission to BBA programs in India is
              based on merit or entrance exams conducted by universities and
              institutions, many of which are approved by the All India Council
              for Technical Education. It opens doors to various career
              opportunities such as business manager, marketing executive, HR
              professional, financial analyst, or entrepreneur. BBA graduates
              can also pursue higher studies like MBA to specialize in specific
              management fields and enhance their career prospects.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE STRUCTURE SECTION */}
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
              BBA{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Course Structure
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg ">
              The BBA curriculum focuses on core business and management
              subjects to build strong fundamentals
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Principles of Management",
                icon: "📘",
                desc: "Learn the fundamentals of planning, organizing, leading, and controlling business activities.",
              },
              {
                title: "Marketing Management",
                icon: "📊",
                desc: "Understand market strategies, consumer behavior, branding, and product promotion techniques.",
              },
              {
                title: "Financial Accounting",
                icon: "💰",
                desc: "Gain knowledge of financial statements, budgeting, and basic accounting principles.",
              },
              {
                title: "Business Communication",
                icon: "💬",
                desc: "Develop professional communication skills including presentations, reports, and corporate interaction.",
              },
              {
                title: "Human Resource Management",
                icon: "👥",
                desc: "Learn about recruitment, employee management, training, and organizational behavior.",
              },
              {
                title: "Entrepreneurship Development",
                icon: "🚀",
                desc: "Explore business creation, startup strategies, innovation, and entrepreneurial mindset.",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="p-8">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600">{course.desc}</p>
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
              Duration & Eligibility for BBA in India
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the course duration and eligibility requirements for
              pursuing BBA in India
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
                      alt="BBA Duration"
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
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          3 years undergraduate program
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> The course
                        includes practical learning through projects,
                        internships, and case studies
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
                          <p className="text-gray-600">10+2 in any stream</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Minimum Marks
                          </p>
                          <p className="text-gray-600">
                            Minimum 50% marks (varies by college)
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
                            Some universities may conduct entrance exams
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">👤</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Age Limit
                          </p>
                          <p className="text-gray-600">
                            Minimum 17 years (may vary by institution)
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

      {/* CAREER OPPORTUNITIES SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After
              BBA
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore diverse career paths available after completing your BBA
              degree
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Business Development Executive",
                icon: "📈",
                description:
                  "Identify growth opportunities, build client relationships, and drive business expansion.",
              },
              {
                title: "Marketing Executive",
                icon: "📊",
                description:
                  "Plan and execute marketing strategies, manage campaigns, and analyze market trends.",
              },
              {
                title: "HR Executive",
                icon: "👥",
                description:
                  "Handle recruitment, employee engagement, training, and organizational development.",
              },
              {
                title: "Operations Executive",
                icon: "⚙️",
                description:
                  "Manage daily business operations, improve efficiency, and ensure smooth workflow.",
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
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-3">
                    <span className="text-2xl">🎓</span>
                    <span className="font-semibold text-blue-700">
                      Higher Studies
                    </span>
                  </div>
                  <p className="text-lg text-gray-700">
                    After BBA, students often pursue{" "}
                    <span className="font-bold text-blue-600">MBA</span> for
                    higher career growth and specialization.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">🎯</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAMS HEADING WITH OVERVIEW */}
      <section
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
        id="bams"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bachelor of{" "}
              <span className="text-blue-600">Management Studies (BMS )</span>
            </h1>
            <p className="pt-7">
              BMS focuses on modern management principles and business
              strategies, preparing students for leadership roles while
              emphasizing practical skills and real-world business exposure.
            </p>
            <p>
              The course duration is 3 years. Eligibility requires 10+2 (any
              stream) from a recognized board. The program covers Marketing
              Management, Financial Management, Human Resource Management,
              Business Economics, Entrepreneurship, and Organizational Behavior.
              Career opportunities include Business Manager, Marketing
              Executive, HR Manager, Financial Analyst, Entrepreneur, and roles
              in corporate sectors, startups, and multinational companies.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE HIGHLIGHTS SECTION - Updated for BAMS */}
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
              BMS{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Course Highlights
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key subjects and specializations in Business & Management
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Business Law",
                icon: "⚖️",
                description:
                  "Understanding legal aspects of business, contracts, and corporate regulations",
              },
              {
                title: "Strategic Management",
                icon: "📊",
                description:
                  "Planning and executing long-term business strategies for growth",
              },
              {
                title: "Financial Management",
                icon: "💰",
                description:
                  "Managing company finances, investments, and budgeting decisions",
              },
              {
                title: "Organizational Behavior",
                icon: "👥",
                description:
                  "Study of human behavior in organizations to improve productivity",
              },
              {
                title: "Data Analysis",
                icon: "📈",
                description:
                  "Using data and analytics tools for informed business decision-making",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DURATION & ELIGIBILITY SECTION - Updated for BAMS */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Duration & Eligibility for BMS in India
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the complete duration structure and eligibility
              requirements for pursuing BMS in India
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setActiveTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  activeTab === "duration"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                ⏳ Duration
              </button>
              <button
                onClick={() => setActiveTab("eligibility")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  activeTab === "eligibility"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                🎓 Eligibility Criteria
              </button>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="BMS Duration"
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
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          3 years undergraduate program
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> Focuses on
                        business management, practical skills, and industry
                        exposure
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
                            10+2 in any stream from a recognized board
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Admission Criteria
                          </p>
                          <p className="text-gray-600">
                            Merit-based or entrance exam (varies by
                            college/university)
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

      {/* CAREER OPPORTUNITIES SECTION - Updated for BAMS */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After
              BMS
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore diverse career paths available after completing your BMS
              degree
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Management Consultant",
                icon: "💼",
                description:
                  "Advise organizations on improving performance, strategy, and business processes",
              },
              {
                title: "Operations Manager",
                icon: "⚙️",
                description:
                  "Oversee daily business operations, optimize processes, and ensure efficiency",
              },
              {
                title: "Business Analyst",
                icon: "📊",
                description:
                  "Analyze business data, identify trends, and support decision-making processes",
              },
            ].map((career, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
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
                      Further Specialization
                    </span>
                  </div>
                  <p className="text-lg text-gray-700">
                    After BMS, students can pursue higher studies like{" "}
                    <span className="font-bold text-blue-600">MBA</span> to
                    specialize in fields like Marketing, Finance, HR, and
                    Operations.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">📈</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BBM HEADING WITH OVERVIEW */}
      <section
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
        id="bds"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bachelor of{" "}
              <span className="text-blue-600">Business Management (BBM)</span>
            </h1>
            <p className="pt-7">
              BBM focuses on business management fundamentals, leadership
              skills, and organizational strategies, preparing students for
              careers in the corporate and entrepreneurial world.
            </p>
            <p>
              The course duration is 3 years. Eligibility requires 10+2 (any
              stream) from a recognized board. The program covers Business
              Management, Marketing, Finance, Human Resource Management, and
              Entrepreneurship. Career opportunities include Business Manager,
              Marketing Executive, HR Executive, Entrepreneur, and roles in
              corporate sectors and startups.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE HIGHLIGHTS SECTION - Updated for BDS */}
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
              BBM{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Course Highlights
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key subjects and specializations in Business Management
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Business Economics",
                icon: "📊",
                description:
                  "Understanding economic principles and their application in business decision-making",
              },
              {
                title: "Supply Chain Management",
                icon: "🚚",
                description:
                  "Managing the flow of goods, services, and information from origin to consumer",
              },
              {
                title: "Leadership & Team Management",
                icon: "👥",
                description:
                  "Developing leadership qualities and managing teams effectively in organizations",
              },
              {
                title: "International Business",
                icon: "🌍",
                description:
                  "Exploring global trade, cross-border business strategies, and international markets",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DURATION & ELIGIBILITY SECTION - Updated for BDS */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Duration & Eligibility for BBM in India
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the complete duration structure and eligibility
              requirements for pursuing BBM in India
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setActiveTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  activeTab === "duration"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                ⏳ Duration
              </button>
              <button
                onClick={() => setActiveTab("eligibility")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  activeTab === "eligibility"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                🎓 Eligibility Criteria
              </button>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="BBM Duration"
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
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          3 years undergraduate program
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> Focuses on
                        business management, leadership, and practical industry
                        exposure
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
                            10+2 in any stream from a recognized board
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Admission Criteria
                          </p>
                          <p className="text-gray-600">
                            Merit-based or entrance exam (varies by
                            college/university)
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

      {/* CAREER OPPORTUNITIES SECTION - Updated for BBM */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After
              BBM
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore diverse career paths available after completing your BBM
              degree
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Business Development Manager",
                icon: "📈",
                description:
                  "Identify growth opportunities, build client relationships, and expand business operations",
              },
              {
                title: "Entrepreneur",
                icon: "🚀",
                description:
                  "Start and manage your own business venture with innovative ideas and strategies",
              },
              {
                title: "Sales Manager",
                icon: "💼",
                description:
                  "Lead sales teams, develop strategies, and drive revenue growth for organizations",
              },
            ].map((career, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
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
                      Further Specialization
                    </span>
                  </div>
                  <p className="text-lg text-gray-700">
                    After BBM, students can pursue higher studies like{" "}
                    <span className="font-bold text-blue-600">MBA</span> to
                    specialize in fields like Marketing, Finance, HR, and
                    Operations.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">📊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B.Com HEADING WITH OVERVIEW */}
      <section
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
        id="bhms"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bachelor of{" "}
              <span className="text-blue-600"> Commerce (B.Com)</span>
            </h1>
            <p className="pt-7">
              B.Com focuses on commerce, finance, accounting, and business
              principles, preparing students for careers in the financial and
              corporate sectors.
            </p>
            <p>
              The course duration is 3 years. Eligibility requires 10+2
              (preferably Commerce stream) from a recognized board. The program
              covers Financial Accounting, Business Economics, Corporate Law,
              Taxation, and Auditing. Career opportunities include Accountant,
              Financial Analyst, Tax Consultant, Banking Professional, and roles
              in corporate sectors or entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE HIGHLIGHTS SECTION - Updated for BHMS */}
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
              B.Com{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Course Structure
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key subjects and core areas in Commerce & Finance
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Financial Accounting",
                icon: "📊",
                description:
                  "Recording, summarizing, and reporting financial transactions of businesses",
              },
              {
                title: "Corporate Accounting",
                icon: "🏢",
                description:
                  "Accounting practices related to companies, shares, and financial statements",
              },
              {
                title: "Taxation",
                icon: "💰",
                description:
                  "Understanding direct and indirect taxes, tax planning, and compliance",
              },
              {
                title: "Business Law",
                icon: "⚖️",
                description:
                  "Legal aspects of business including contracts, companies, and regulations",
              },
              {
                title: "Economics",
                icon: "📈",
                description:
                  "Study of economic principles and their application in business environments",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DURATION & ELIGIBILITY SECTION - Updated for BHMS */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Duration & Eligibility for B.Com in India
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the complete duration structure and eligibility
              requirements for pursuing B.Com in India.
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
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="BHMS Duration"
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
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          3 years (including internship)
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> Note: Includes
                        practical exposure through projects, internships, and
                        industry-based learning
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
                            ● 10+2 (Commerce preferred but not mandatory)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        {/* <span className="text-2xl">📝</span>   */}
                        {/* <div><p className="font-semibold text-gray-800">Entrance Exam</p><p className="text-gray-600">NEET qualification required</p></div> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES SECTION - Updated for B.Com */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After
              B.Com
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore diverse career paths available after completing your B.Com
              degree
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Accountant",
                icon: "📊",
                description:
                  "Manage financial records, prepare reports, and ensure compliance with financial regulations",
              },
              {
                title: "Financial Analyst",
                icon: "📈",
                description:
                  "Analyze financial data, market trends, and help businesses make investment decisions",
              },
              {
                title: "Banking Professional",
                icon: "🏦",
                description:
                  "Work in banking sector handling customer accounts, loans, and financial services",
              },
              {
                title: "Tax Consultant",
                icon: "💰",
                description:
                  "Provide tax planning, filing, and advisory services to individuals and businesses",
              },
            ].map((career, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
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
                      Further Studies
                    </span>
                  </div>
                  <p className="text-lg text-gray-700">
                    After B.Com, students often pursue professional courses like{" "}
                    <span className="font-bold text-blue-600">
                      CA, CS, CMA, or MBA
                    </span>{" "}
                    for higher career growth.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">📘</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS SECTION - FULL WIDTH NO BLANK SPACES */}
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
                Management Courses in India
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Step-by-step guide to secure your admission in top management
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
                    Apply to Colleges/Universities
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fill application forms for management programs like BBA,
                    MBA, or other business courses.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      💻
                    </div>
                    <div className="text-white text-2xl font-bold">Step 02</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Appear for Entrance Exams (if required)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Appear for exams like CAT, MAT, XAT, or university-level
                    entrance tests depending on the course.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-purple-500 to-purple-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      📊
                    </div>
                    <div className="text-white text-2xl font-bold">Step 03</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Shortlisting & Selection
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Candidates are shortlisted based on entrance exam scores or
                    academic performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-pink-500 to-pink-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      🎤
                    </div>
                    <div className="text-white text-2xl font-bold">Step 04</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Group Discussion / Personal Interview
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Many management colleges conduct GD and PI rounds to assess
                    communication, leadership, and problem-solving skills.
                  </p>
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
                    Admission Confirmation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    After final selection, pay the required fees and complete
                    formalities to confirm your admission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE HIGHLIGHTS SECTION - Updated for BHMS */}
      {/* MANAGEMENT SPECIALIZATIONS SECTION */}
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
              Specializations in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Management Courses
              </span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Students can choose specialization based on their interest
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Marketing",
                icon: "📢",
                description:
                  "Focus on branding, advertising, consumer behavior, and market strategies",
              },
              {
                title: "Finance",
                icon: "💰",
                description:
                  "Learn financial planning, investment analysis, banking, and risk management",
              },
              {
                title: "Human Resource Management",
                icon: "👥",
                description:
                  "Manage recruitment, employee relations, training, and organizational development",
              },
              {
                title: "International Business",
                icon: "🌍",
                description:
                  "Study global trade, cross-border management, and international markets",
              },
              {
                title: "Digital Marketing",
                icon: "📱",
                description:
                  "Explore SEO, social media marketing, online branding, and digital campaigns",
              },
              {
                title: "Entrepreneurship",
                icon: "🚀",
                description:
                  "Develop skills to start and manage your own business or startup",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE SECTION */}
      <section
        className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
        id="fee-structure"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
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
              Understand the approximate fee range for management and commerce
              courses across different institutions in India
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Fee Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Government Colleges */}
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
                    ₹20,000
                  </span>
                  <span className="text-xl text-gray-500"> – </span>
                  <span className="text-4xl font-bold text-blue-600">
                    ₹1,00,000
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
                      <span className="text-blue-500">✓</span> Suitable for
                      budget-friendly education
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Private Colleges */}
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
                  <span className="text-4xl font-bold text-purple-600">
                    ₹1,00,000
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
                      <span className="text-blue-500">✓</span> Better
                      infrastructure & facilities
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Industry exposure
                      & internships
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Placement
                      assistance available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📌</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Important Note
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fees vary depending on the college, city, and course type.
                    Additional costs may include hostel fees, examination fees,
                    and other academic charges. Always check with the college
                    for exact details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Get Fee Details for Specific Colleges →
            </button>
          </div>
        </div>
      </section>

      {/* CAREER SCOPE - STYLE 1: MINIMALIST GRID */}
      <section
        className="py-20 bg-gradient-to-b from-white via-blue-50 to-white"
        id="career-scope"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Career Scope After <br />
              <span className="text-blue-600">Management Studies</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Management graduates are in demand across various industries and
              sectors
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Simple Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Corporate Companies",
                icon: "🏢",
                desc: "Work in multinational companies handling operations, marketing, HR, and management roles",
              },
              {
                title: "Banking & Finance",
                icon: "🏦",
                desc: "Opportunities in banks, financial institutions, investment firms, and insurance companies",
              },
              {
                title: "Startups & Entrepreneurship",
                icon: "🚀",
                desc: "Start your own business or join fast-growing startups in leadership roles",
              },
              {
                title: "Consulting Firms",
                icon: "📊",
                desc: "Provide business strategies, problem-solving, and advisory services to companies",
              },
              {
                title: "E-commerce & Digital Businesses",
                icon: "🛒",
                desc: "Work in online businesses, digital marketing, and product management roles",
              },
              {
                title: "Human Resource & Management Roles",
                icon: "👥",
                desc: "Manage teams, recruitment, employee relations, and organizational growth",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - MANAGEMENT */}
      <section
        className="pt-6 pb-12 bg-gradient-to-b from-white via-blue-50 to-white"
        id="why-choose-us"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Management Admission Guidance"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">📊</span>
                  <div>
                    <p className="font-bold text-gray-800">Trusted by</p>
                    <p className="text-2xl font-bold text-blue-600">10,000+</p>
                    <p className="text-xs text-gray-500">Students</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <span className="text-blue-600 text-sm font-semibold">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for <br />
                <span className="text-blue-600">
                  Management Admission Guidance
                </span>
              </h2>

              <div className="space-y-4">
                {[
                  "Career-focused counselling",
                  "College selection based on your profile",
                  "End-to-end admission support",
                  "Guidance for specializations",
                  "Internship & career guidance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-green-500 text-lg">✔️</div>
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
            {/* FAQ 1 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-blue-500">
                <button className="faq-question w-full text-left p-6">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    What is BBA and why should I choose it?
                  </h3>
                </button>
                <div className="faq-answer p-6 pt-0 text-gray-600">
                  <p>
                    BBA (Bachelor of Business Administration) is a 3-year
                    undergraduate course that builds a strong foundation in
                    business, management, marketing, finance, and
                    entrepreneurship. It is ideal for students who want to build
                    a career in corporate or start their own business.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-blue-500">
                <button className="faq-question w-full text-left p-6">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    What is the duration of BBA and MBA courses?
                  </h3>
                </button>
                <div className="faq-answer p-6 pt-0 text-gray-600">
                  <p>
                    BBA: 3 years undergraduate program.
                    <br />
                    MBA: 2 years postgraduate program. Some institutes also
                    offer integrated BBA+MBA programs of 5 years.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-blue-500">
                <button className="faq-question w-full text-left p-6">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    What is the eligibility criteria for BBA?
                  </h3>
                </button>
                <div className="faq-answer p-6 pt-0 text-gray-600">
                  <p>
                    Students must have completed 10+2 from any stream (Commerce,
                    Science, or Arts) with minimum 45-50% marks. Some colleges
                    may conduct entrance exams or interviews for admission.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-blue-500">
                <button className="faq-question w-full text-left p-6">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    What is the fee structure for BBA and MBA?
                  </h3>
                </button>
                <div className="faq-answer p-6 pt-0 text-gray-600">
                  <p>
                    BBA Fees: ₹50,000 - ₹2,00,000 per year.
                    <br />
                    MBA Fees: ₹2,00,000 - ₹15,00,000 total.
                    <br />
                    Fees vary depending on college, facilities, and placement
                    support. Scholarships and education loans are available.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-blue-500">
                <button className="faq-question w-full text-left p-6">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    What are the career opportunities after management studies?
                  </h3>
                </button>
                <div className="faq-answer p-6 pt-0 text-gray-600">
                  <p>
                    Management graduates can work in corporate companies,
                    banking & finance, startups, consulting firms, e-commerce,
                    marketing, HR, and operations. They can also start their own
                    business or pursue higher studies like MBA.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-blue-500">
                <button className="faq-question w-full text-left p-6">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    How does the BBA/MBA admission process work?
                  </h3>
                </button>
                <div className="faq-answer p-6 pt-0 text-gray-600">
                  <p>
                    The admission process includes: 1) Application form
                    submission, 2) Entrance exam (if required), 3) Personal
                    interview or counseling, 4) Document verification, 5) Fee
                    payment and admission confirmation.
                  </p>
                </div>
              </div>
            </div>
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

      {/* CALL TO ACTION - MANAGEMENT */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Management Career Today!
          </h2>

          {/* Sub Points */}
          <div className="mt-6 space-y-3 text-lg">
            <p>👉 Get expert advice on the best course & colleges</p>
            <p>👉 Choose the right specialization</p>
            <p>👉 Secure your admission with complete support</p>
          </div>

          {/* CTA Box */}
          <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 inline-block shadow-lg">
            <p className="text-xl font-semibold mb-4">
              📲 Book your FREE counselling session now!
            </p>

            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-xl hover:bg-gray-100 transition-all duration-300">
              Book Now →
            </button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}

      {/* <section className="relative py-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 animate-gradient-x"></div> */}

      {/* Background Pattern (Management Style) */}
      {/*   
  <div className="absolute inset-0 opacity-10">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="management-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect x="10" y="10" width="40" height="40" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
          <circle cx="30" cy="30" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#management-pattern)" />
    </svg>
  </div>
  <div className="relative max-w-7xl mx-auto px-6 text-center z-10"> */}

      {/* Badge */}
      {/*     
    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
      <svg className="w-5 h-5 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4l3 2" clipRule="evenodd" />
      </svg>
      <span className="text-white text-sm font-semibold tracking-wide">
        ADMISSIONS OPEN 2026
      </span>
    </div> */}

      {/* Heading */}
      {/*     
    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
      Ready to Build Your
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-300">
        Management Career?
      </span>
    </h2> */}

      {/* Description */}
      {/*     
    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
      Get expert guidance for BBA & MBA admissions, career planning, and leadership skills to succeed in corporate, startups, and global business environments.
    </p> */}

      {/* Buttons */}
      {/* 

    <div className="flex flex-wrap justify-center gap-5">
      <button className="group relative bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        <span className="relative z-10 flex items-center gap-2">
          Apply for BBA / MBA
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      <button className="group relative bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300">
        <span className="flex items-center gap-2">
          Talk to Counselor
        </span>
      </button>
    </div>

  </div>
</section> */}

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
