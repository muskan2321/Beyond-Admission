import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function StudyCanada() {
  const [tab, setTab] = useState("academic");
  const steps = [
    {
      title: "Profile Evaluation",
      detail:
        "Analyze academic background, skills, and career goals to suggest best-fit universities.",
    },
    {
      title: "Prepare Exams",
      detail:
        "Prepare for IELTS, TOEFL, GRE or GMAT based on your target universities.",
    },
    {
      title: "Shortlist University",
      detail:
        "Select universities based on ranking, budget, course, and job opportunities.",
    },
    {
      title: "Writing Process (CV, LOR, SOP, Essays)",
      detail:
        "Create strong documents including SOP, LOR, CV, and essays for application.",
    },
    {
      title: "Applying",
      detail: "Submit applications on portals and track deadlines carefully.",
    },
    {
      title: "Offer Letter",
      detail: "Receive and compare offers to choose the best university.",
    },
    {
      title: "Visa & Loan",
      detail: "Apply for visa and arrange finances or education loan.",
    },
    {
      title: "Pre-Departure Services",
      detail:
        "Guidance for accommodation, forex, flight booking, and insurance.",
    },
    {
      title: "Application Requirement",
      detail:
        "Ensure documents like transcripts, passport, scores, and financial proof are ready.",
    },
  ];

  return (
    <div className="bg-white font-[Inter]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study in Canada"
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
              🎓 Your Global Education Partner
            </div>

            <h1 className="text-12xl md:text-7xl font-bold text-white leading-tight">
              Study UG in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Ireland
              </span>
            </h1>

            {/*  FIXED TEXT */}
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              World-class universities & global career opportunities
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Apply Now
                </button>
              </Link>

              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                {" "}
                Free Counselling
              </button>
            </div>

           
          </div>
        </div>

        {/*  FIXED STYLE */}
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
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4">
        <a
          href="#why-Canada"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why UG In Ireland?
        </a>

        <a
          href="#Popular Courses"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Popular Courses
        </a>

        <a
          href="#Top Universities"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Top Universities
        </a>

        <a
          href="#intakes"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Intakes
        </a>

        <a
          href="#fees"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Fees & Expenses
        </a>

        <a
          href="#eligibility"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Eligibility
        </a>

        <a
          href="#scholarships"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Scholarships
        </a>

        <a
          href="#jobs"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Jobs
        </a>

        <a
          href="#visa"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Visa
        </a>
      </div>
      {/* INTRO SECTION */}
      <section className="relative pt-12 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Animated Background Lights */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>

        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>

        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Study UG in <span className="text-blue-600">Ireland</span> for
              Indian Students
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              "Discover top-ranked universities, excellent career prospects, and
              a high quality of life in Ireland—your gateway to a successful
              global future."{" "}
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>

              <img
                src="/image/usa-bg.png"
                alt="Study in Canada"
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

            {/* Content Section */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Choose UG In Ireland?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  "Ireland is one of the most preferred destinations for Indian
                  students pursuing undergraduate (UG) programs due to its
                  high-quality education system, globally recognized
                  universities, and strong industry connections.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  With a diverse and growing international student community,
                  Ireland offers a safe and welcoming environment along with
                  practical learning, early career exposure, and excellent
                  post-study work opportunities, helping students build a strong
                  foundation for their future careers."
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "🎓 Globally recognized degrees",
                  "💼 Strong job opportunities (especially in tech & business)",
                  "🌍 English-speaking country in Europe",
                  "🎯 Post-study work visa options",
                  "🤝 Presence of global companies",
                  // "Pathway to Permanent Residency (PR)",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-yellow-500 hover:bg-blue-100 transition rounded-xl p-3 text-m font-medium text-black"
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

        {/* Animation */}
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
      {/* WHY STUDY Canada */}
      <section
        id="why-Canada"
        className="relative pt-4 pb-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        {/* Animated background lights */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 blur-[130px] rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-sky-300/30 blur-[120px] rounded-full animate-float delay-4000"></div>

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Study UG in <span className="text-blue-600">Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              "Ireland is a preferred destination for undergraduate (UG) studies
              due to its high-quality education system, diverse course options,
              and student-friendly environment."
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  🎓
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Career-Focused Education
                </h3>

                <p className="mt-3 text-gray-600">
                  Ireland’s undergraduate programs emphasize practical learning,
                  industry exposure, and skill development to prepare students
                  for global careers.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  🌍
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  European Exposure & Culture
                </h3>

                <p className="mt-3 text-gray-600">
                  Studying in Ireland offers access to a multicultural
                  environment and exposure to Europe’s education system, helping
                  students build a global perspective.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  💼
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Work While Studying
                </h3>

                <p className="mt-3 text-gray-600">
                  International students in Ireland can work part-time during
                  studies, gaining valuable experience and supporting their
                  living expenses.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  🚀
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Post-Study Work Opportunities
                </h3>

                <p className="mt-3 text-gray-600">
                  Ireland offers post-study work visa options, allowing
                  graduates to gain international work experience and explore
                  career opportunities after completing their degree.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animation */}
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

      {/* POPULAR COURSES */}
      <section
        id="popular-courses"
        className="pt-4 pb-16 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-6">
            Popular UG Courses in Ireland
          </h2>

          <p className="text-center text-gray-600 mb-16">
            Explore in-demand undergraduate programs in Ireland that offer
            strong career prospects and global opportunities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Computer Science",
                img: "/image/Engineering & Technology.webp",
                icon: "💻",
                salary: "High Demand Career",
                duration: "3-4 Years",
                courses: [
                  "Software Development",
                  "Artificial Intelligence",
                  "Cyber Security",
                  "Web & App Development",
                ],
              },
              {
                title: "Business & Management",
                img: "/image/Business & Management.avif",
                icon: "💼",
                salary: "Strong Career Growth",
                duration: "3-4 Years",
                courses: [
                  "Marketing",
                  "Human Resource Management",
                  "International Business",
                  "Entrepreneurship",
                ],
              },
              {
                title: "Data Analytics",
                img: "/image/Engineering & Technology.webp",
                icon: "📊",
                salary: "High Paying Field",
                duration: "3-4 Years",
                courses: [
                  "Data Analysis",
                  "Machine Learning",
                  "Statistics",
                  "Data Visualization",
                ],
              },
              {
                title: "Finance",
                img: "/image/Business & Management.avif",
                icon: "💰",
                salary: "Global Opportunities",
                duration: "3-4 Years",
                courses: [
                  "Financial Management",
                  "Investment Banking",
                  "Corporate Finance",
                  "Risk Management",
                ],
              },
              {
                title: "Life Sciences",
                img: "/image/Engineering & Technology.webp",
                icon: "🧬",
                salary: "Growing Industry",
                duration: "3-4 Years",
                courses: [
                  "Biotechnology",
                  "Pharmaceutical Science",
                  "Microbiology",
                  "Human Biology",
                ],
              },
              {
                title: "Engineering",
                img: "/image/Undergraduate Programs.webp",
                icon: "⚙️",
                salary: "High Demand Sector",
                duration: "3-4 Years",
                courses: [
                  "Mechanical Engineering",
                  "Civil Engineering",
                  "Electrical Engineering",
                  "Computer Engineering",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <span className="absolute top-3 left-3 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {item.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span>{item.icon}</span>
                    {item.title}
                  </h3>

                  <p className="text-sm text-green-600 font-semibold mb-4">
                    {item.salary}
                  </p>

                  <ul className="space-y-2 text-gray-600 text-sm">
                    {item.courses.map((course, index) => (
                      <li
                        key={index}
                        className="hover:text-blue-600 transition"
                      >
                        ● {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP UNIVERSITIES */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* background glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes for UG in <span className="text-blue-600">Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Irish universities mainly offer two intakes for undergraduate (UG)
              programs.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* September Intake */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-blue-700 mb-6 flex items-center gap-2">
                  📅 September Intake (Main)
                </h4>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✔ Applications Open: Nov – Feb</li>
                  <li>✔ Deadlines: Feb – May</li>
                  <li>✔ Offer Letters: Mar – Jun</li>
                  <li>✔ Classes Begin: Sep</li>
                </ul>

                <div className="mt-5 text-xs text-gray-600 bg-blue-50 px-4 py-3 rounded-xl">
                  👉 Recommended preparation start:{" "}
                  <b>10–12 months before intake</b>
                </div>
              </div>

              {/* January Intake */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-indigo-700 mb-6 flex items-center gap-2">
                  🌱 January Intake (Limited)
                </h4>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✔ Applications Open: Jul – Sep</li>
                  <li>✔ Deadlines: Sep – Oct</li>
                  <li>✔ Offer Letters: Oct – Nov</li>
                  <li>✔ Classes Begin: Jan</li>
                </ul>

                <div className="mt-5 text-xs text-gray-600 bg-indigo-50 px-4 py-3 rounded-xl">
                  👉 Recommended preparation start:{" "}
                  <b>6–8 months before intake</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20 pb-20">
        {/* Floating particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="absolute block w-2 h-2 bg-blue-400 opacity-30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${6 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></span>
          ))}
        </div>

        {/* Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Journey to Study in Ireland
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Follow this step-by-step roadmap to successfully apply for
              undergraduate (UG) programs in Ireland and build a strong global
              career.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 h-full transform -translate-x-1/2"></div>

            {[
              {
                title: "Explore Courses & Universities",
                detail:
                  "Research top Irish universities, UG courses, tuition fees, and career outcomes to select the best-fit program.",
              },
              {
                title: "Check Eligibility & Build Profile",
                detail:
                  "Ensure you meet academic requirements (65%–85%) and prepare SOP and supporting documents.",
              },
              {
                title: "Take English Proficiency Test",
                detail:
                  "Appear for IELTS or equivalent exams and achieve the required score (6.0–6.5).",
              },
              {
                title: "Submit Applications",
                detail:
                  "Apply through university portals or the CAO system before deadlines, mainly for the September intake.",
              },
              {
                title: "Receive Offer & Confirm Admission",
                detail:
                  "Accept your offer letter and pay the required deposit to secure your admission.",
              },
              {
                title: "Apply for Student Visa",
                detail:
                  "Apply for an Ireland student visa (Stamp 2) with financial proof and required documents.",
              },
              {
                title: "Prepare for Departure",
                detail:
                  "Arrange accommodation, book flights, and get ready for your journey to Ireland.",
              },
              {
                title: "Arrive & Begin Studies",
                detail:
                  "Attend orientation, settle in, and begin your academic journey in Ireland.",
              },
            ].map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex items-center mb-14 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content Box */}
                  <div className="w-1/2 px-4">
                    <div
                      className={`rounded-2xl px-6 py-5 text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl
              ${index % 3 === 0 ? "bg-blue-400" : index % 3 === 1 ? "bg-blue-600" : "bg-blue-800"}`}
                    >
                      {/* Title */}
                      <h4 className="font-semibold text-sm">{step.title}</h4>

                      {/* Detail */}
                      <p className="text-xs opacity-90 mt-2 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  {/* Step Circle */}
                  <div className="relative z-10 group">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-full 
                border-4 border-blue-400 bg-white font-bold text-blue-600 shadow-md
                transition duration-300 group-hover:scale-110"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-full bg-blue-400 opacity-30 blur-xl 
                scale-150 z-[-1] animate-pulse"
                    ></div>
                  </div>

                  {/* Empty side */}
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animation */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* eligibility */}
      <section
        id="eligibility"
        className="pt-0 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Container */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold">
              Eligibility Criteria for UG in Ireland
            </h2>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              To apply for undergraduate (UG) programs in Ireland, students must
              meet the following requirements:
            </p>

            {/* Tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setTab("academic")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "academic"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                🎓 Academic Requirements
              </button>

              <button
                onClick={() => setTab("entrance")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "entrance"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                📝 Entrance Exams
              </button>

              <button
                onClick={() => setTab("english")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "english"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                🌎 English Proficiency
              </button>

              <button
                onClick={() => setTab("documents")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "documents"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                📄 Required Documents
              </button>
            </div>

            {/* Content Card */}
            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {tab === "academic" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    src="/image/academic-qualification.jpg"
                    className="rounded-2xl shadow-lg w-full h-60 object-cover"
                  />

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Academic Requirements
                    </h3>

                    <ul className="mt-4 space-y-3">
                      <li>● Completion of 12th grade</li>
                      <li>● Minimum 65% – 85%</li>
                    </ul>
                  </div>
                </div>
              )}

              {tab === "entrance" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Entrance Exams
                  </h3>

                  <ul className="mt-4 space-y-3">
                    <li>● No SAT required</li>
                  </ul>
                </div>
              )}

              {tab === "english" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    English Proficiency
                  </h3>

                  <ul className="mt-4 space-y-3">
                    <li>● IELTS: 6.0 – 6.5</li>
                  </ul>
                </div>
              )}

              {tab === "documents" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Required Documents
                  </h3>

                  <ul className="mt-4 space-y-3">
                    <li>● SOP / Personal Statement</li>
                    <li>● Academic Transcripts</li>
                    <li>● IELTS Score</li>
                    <li>● Letters of Recommendation (if required)</li>
                    <li>● Passport Copy</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* COST */}
      <section
        id="fees"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        {/* Animated Background Lights */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cost of Studying UG in{" "}
              <span className="text-blue-600">Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Understanding the cost of undergraduate (UG) studies in Ireland
              helps students plan their finances effectively.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12">
            {/* Tuition Fees */}
            <div className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 blur-sm"></div>

              <div className="relative bg-white/90 rounded-3xl p-8 z-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 group-hover:text-blue-600 transition">
                  Tuition Fees
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-xl"></div>

                    <h4 className="text-lg font-semibold text-gray-900">
                      UG Programs
                    </h4>

                    <p className="mt-3 text-blue-600 font-bold text-2xl">
                      €10,000 – €25,000
                    </p>

                    <p className="text-gray-500 text-sm mt-1">per year</p>
                  </div>

                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 rounded-t-xl"></div>

                    <h4 className="text-lg font-semibold text-gray-900">
                      Total Cost
                    </h4>

                    <p className="mt-3 text-indigo-600 font-bold text-2xl">
                      ₹18 – ₹35 Lakhs
                    </p>

                    <p className="text-gray-500 text-sm mt-1">per year</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Living Expenses */}
            <div className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-indigo-200 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 opacity-0 group-hover:opacity-100 blur-sm"></div>

              <div className="relative bg-white/90 rounded-3xl p-8 z-10">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                  Living Expenses
                </h3>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  Students typically spend around €10,000 – €12,000 per year on
                  accommodation, food, transportation, and personal expenses.
                </p>

                <div className="mt-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200 blur-xl opacity-60 rounded-xl"></div>

                  <div className="relative bg-white rounded-xl p-6 text-center shadow-lg">
                    <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      €10,000 – €12,000
                    </p>

                    <p className="text-gray-500 mt-1">per year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-40px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .animate-float {
            animation: float 14s ease-in-out infinite;
          }

          .delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </section>

      {/* Cost of Living in Canada */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Cost of Living for UG in{" "}
              <span className="text-blue-600">Ireland</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Estimated monthly and yearly expenses for international students
              pursuing undergraduate (UG) studies in Ireland.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/40 backdrop-blur-xl">
            {/* Header */}
            <div className="grid md:grid-cols-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-semibold text-lg">
              <div className="p-5">Expense Category</div>
              <div className="p-5">Estimated Cost</div>
              <div className="p-5">Details</div>
            </div>

            {/* Rows */}
            {[
              {
                title: "Tuition Fees (UG Programs)",
                cost: "€10,000 – €25,000 per year",
                extra: [
                  "Varies by university and course",
                  "Higher for business & engineering programs",
                ],
              },
              {
                title: "Student Accommodation",
                cost: "€400 – €900 per month",
                extra: [
                  "On-campus or private housing",
                  "Dublin is more expensive than other cities",
                ],
              },
              {
                title: "Food & Dining",
                cost: "€200 – €350 per month",
                extra: [
                  "Cooking at home reduces cost",
                  "Eating out increases expenses",
                ],
              },
              {
                title: "Groceries & Daily Needs",
                cost: "€150 – €300 per month",
                extra: [
                  "Depends on lifestyle",
                  "Includes essentials and shopping",
                ],
              },
              {
                title: "Mobile & Internet",
                cost: "€20 – €40 per month",
                extra: ["Student plans available", "Depends on provider"],
              },
              {
                title: "Transportation",
                cost: "€80 – €120 per month",
                extra: [
                  "Public transport (bus, tram, train)",
                  "Student discounts available",
                ],
              },
              {
                title: "Health Insurance",
                cost: "€500 – €1,000 per year",
                extra: [
                  "Mandatory for international students",
                  "Cost depends on coverage plan",
                ],
              },
              {
                title: "Utilities & Bills",
                cost: "€100 – €200 per month",
                extra: [
                  "Electricity, heating, water, internet",
                  "Shared accommodation reduces cost",
                ],
              },
              {
                title: "Total Living Cost",
                cost: "€10,000 – €12,000 per year",
                extra: [
                  "Excludes tuition fees",
                  "May vary based on lifestyle and city",
                ],
              },
              {
                title: "Overall Cost (Tuition + Living)",
                cost: "₹18 – ₹35 Lakhs per year",
                extra: [
                  "Approximate cost for Indian students",
                  "Varies by exchange rate and lifestyle",
                ],
              },
            ].map((row, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-3 items-center bg-white/80 backdrop-blur-md border-t border-white/50 
          hover:bg-white hover:shadow-xl hover:scale-[1.01] transition duration-300"
              >
                {/* Expense */}
                <div className="p-5 font-semibold text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {row.title}
                </div>

                {/* Cost */}
                <div className="p-5 whitespace-pre-line">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-xl font-semibold text-sm shadow-sm">
                    {row.cost}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 text-gray-700 text-sm">
                  <ul className="space-y-1">
                    {row.extra.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="text-blue-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* background glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Application Timeline for UG in{" "}
              <span className="text-blue-600">Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Follow this roadmap to ensure a smooth undergraduate application
              process in Irish universities.{" "}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* 12 Months Before */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-blue-700 mb-6 flex items-center gap-2">
                  ⏳ 12 Months Before
                </h4>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✔ Start IELTS preparation</li>
                </ul>
              </div>

              {/* 8–10 Months Before */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-indigo-700 mb-6 flex items-center gap-2">
                  📝 8–10 Months Before
                </h4>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✔ Apply to universities</li>
                </ul>
              </div>

              {/* 6–8 Months Before */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-blue-600 mb-6 flex items-center gap-2">
                  📄 6–8 Months Before
                </h4>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✔ Receive offer</li>
                </ul>
              </div>

              {/* 3–5 Months Before */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-indigo-600 mb-6 flex items-center gap-2">
                  🛂 3–5 Months Before
                </h4>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✔ Visa application</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Types of UG Degrees in Ireland
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            "Explore the popular undergraduate degree options available for
            students in Ireland."
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 h-full transform -translate-x-1/2"></div>

          {[
            {
              title: "Bachelor of Science (BSc)",
              detail:
                "Focuses on scientific and technical disciplines such as Physics, Chemistry, Biology, and Computer Science offered by universities in Ireland.",
            },
            {
              title: "Bachelor of Arts (BA)",
              detail:
                "Covers humanities, social sciences, languages, and creative fields, providing a broad-based education in Ireland.",
            },
            {
              title: "Bachelor of Engineering (BEng)",
              detail:
                "Specialized program in various engineering fields including Mechanical, Electrical, and Civil Engineering in Ireland.",
            },
            {
              title: "Bachelor of Business Studies (BBS)",
              detail:
                "Prepares students for careers in business, management, finance, marketing, and entrepreneurship in Ireland.",
            },
          ].map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex items-center mb-14 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content Box */}
                <div className="w-1/2 px-4">
                  <div
                    className={`rounded-2xl px-6 py-5 text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl
              ${index % 3 === 0 ? "bg-blue-400" : index % 3 === 1 ? "bg-blue-600" : "bg-blue-800"}`}
                  >
                    {/* Title */}
                    <h4 className="font-semibold text-sm">{step.title}</h4>

                    {/* Detail */}
                    <p className="text-xs opacity-90 mt-2 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Step Circle */}
                <div className="relative z-10 group">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full 
                border-4 border-blue-400 bg-white font-bold text-blue-600 shadow-md
                transition duration-300 group-hover:scale-110"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-full bg-blue-400 opacity-30 blur-xl 
                scale-150 z-[-1] animate-pulse"
                  ></div>
                </div>

                {/* Empty side */}
                <div className="w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* scholarships */}
      <section
        id="scholarships"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Scholarships for Indian Students UG in
              <span className="text-blue-600"> Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              "Various scholarships are available to financially support
              international students pursuing undergraduate (UG) studies in
              Ireland."{" "}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {[
              {
                icon: "🏛️",
                title: "Government of Ireland Scholarships",
                details:
                  "Provided by the Government of Ireland to support international undergraduate (UG) students with tuition fees and other expenses.",
              },
              {
                icon: "🎓",
                title: "University-specific Scholarships",
                details:
                  "Offered by Irish universities to UG students based on academic merit, extracurricular activities, and leadership qualities.",
              },
              {
                icon: "🏆",
                title: "Merit-based Scholarships",
                details:
                  "Awarded to undergraduate (UG) students based on academic excellence, high school performance, and overall achievements.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition duration-300 hover:scale-[1.02]"
              >
                <div className="bg-white rounded-3xl p-10 h-full shadow-xl overflow-hidden relative">
                  {/* hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
bg-gradient-to-br from-blue-100/40 via-indigo-100/20 to-purple-100/30"
                  ></div>

                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 mx-auto mb-5 flex items-center justify-center 
bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-2xl shadow-lg 
group-hover:scale-110 transition"
                    >
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>

                    {/* Content */}
                    <div className="mt-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-20 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>

            <div className="relative z-10">
              <p className="text-lg max-w-3xl mx-auto">
                "Scholarships can significantly reduce the cost of undergraduate
                (UG) studies in Ireland and help students focus on their
                academic journey."
              </p>
            </div>
          </div>
        </div>

        {/* Animation */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-40px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .animate-float {
            animation: float 14s ease-in-out infinite;
          }

          .delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </section>

      {/* jobs */}
      <section
        id="jobs"
        className="relative pt-10 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Job Opportunities & Salary After UG in
              <span className="text-blue-600"> Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              "Ireland offers strong career opportunities for international
              students after completing their undergraduate (UG) studies."
            </p>
          </div>

          {/* Recruiters Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10">
              Top Recruiters for UG Graduates
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center justify-center max-w-3xl mx-auto">
              {[
                { name: "Google", logo: "/image/google.png" },
                { name: "Meta", logo: "/image/meta.png" },
                { name: "Apple", logo: "/image/apple.png" },
                { name: "Amazon", logo: "/image/amazon.png" },
              ].map((company, i) => (
                <div
                  key={i}
                  className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center hover:-translate-y-2"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-10 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Salary Section */}
          <div className="mt-20 flex justify-center">
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-2xl max-w-xl w-full">
              <div className="bg-white rounded-3xl p-10 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Average Salary After UG
                </h3>

                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  €28,000 – €45,000/year
                </p>

                <p className="text-gray-500 mt-2">per year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Opportunities */}
      <section
        id="jobs"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Work Opportunities During & After Study UG in
              <span className="text-blue-600"> Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              "International undergraduate (UG) students in Ireland can work
              part-time during their studies and explore post-study work
              opportunities after graduation."{" "}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            {/* During Study */}
            <div className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 hover:scale-[1.02] transition duration-300">
              <div className="bg-white rounded-3xl p-10 shadow-xl h-full relative overflow-hidden">
                {/* hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
bg-gradient-to-br from-blue-100/40 via-indigo-100/20 to-sky-100/30"
                ></div>

                <div className="relative z-10">
                  {/* icon */}
                  <div
                    className="w-16 h-16 mb-6 flex items-center justify-center 
bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl text-2xl shadow-lg 
group-hover:scale-110 transition"
                  >
                    💼
                  </div>

                  {/* title */}
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    During Study
                  </h3>

                  {/* divider */}
                  <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

                  {/* content */}
                  <p className="mt-6 text-gray-600 leading-relaxed">
                    Students can work{" "}
                    <span className="font-semibold">
                      20 hours per week part-time
                    </span>{" "}
                    during their UG studies in Ireland.
                  </p>
                </div>
              </div>
            </div>

            {/* After Graduation */}
            <div className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 hover:scale-[1.02] transition duration-300">
              <div className="bg-white rounded-3xl p-10 shadow-xl h-full relative overflow-hidden">
                {/* hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
bg-gradient-to-br from-indigo-100/40 via-blue-100/20 to-purple-100/30"
                ></div>

                <div className="relative z-10">
                  {/* icon */}
                  <div
                    className="w-16 h-16 mb-6 flex items-center justify-center 
bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl text-2xl shadow-lg 
group-hover:scale-110 transition"
                  >
                    🚀
                  </div>

                  {/* title */}
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                    After Graduation
                  </h3>

                  {/* divider */}
                  <div className="mt-3 w-12 h-1 bg-indigo-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

                  {/* content */}
                  <p className="mt-6 text-gray-600 leading-relaxed">
                    After completing UG, students may be eligible for a{" "}
                    <span className="font-semibold">
                      1–2 years post-study work visa
                    </span>{" "}
                    in Ireland.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            {/* line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 opacity-40"></div>

            {/* animated progress line */}
            <div className="hidden md:block absolute top-8 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-progress"></div>

            <div className="grid md:grid-cols-4 gap-10 text-center relative z-10">
              {[
                {
                  icon: "🎓",
                  title: "Study in Ireland",
                },
                {
                  icon: "💼",
                  title: "20 Hours/Week Part-time",
                },
                {
                  icon: "🚀",
                  title: "1–2 Years Post-Study Work Visa",
                },
                {
                  icon: "🌟",
                  title: "Career Growth Opportunities",
                },
              ].map((step, i) => (
                <div key={i} className="group relative">
                  {/* step circle */}
                  <div
                    className="w-16 h-16 mx-auto flex items-center justify-center 
bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
rounded-full text-2xl shadow-xl 
group-hover:scale-110 transition duration-300"
                  >
                    {step.icon}
                  </div>

                  {/* pulse ring */}
                  <div
                    className="absolute inset-0 w-16 h-16 mx-auto rounded-full 
border-2 border-blue-400 opacity-40 animate-ping"
                  ></div>

                  {/* title */}
                  <p className="mt-4 text-sm font-semibold text-gray-700">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation */}
        <style>{`
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-40px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    .animate-float {
      animation: float 14s ease-in-out infinite;
    }

    .delay-2000 {
      animation-delay: 2s;
    }
  `}</style>

        <style>{`
    @keyframes progress {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }

    .animate-progress {
      animation: progress 4s ease-in-out forwards;
    }
  `}</style>
      </section>

      {/* visa */}
      <section
        id="visa"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Student Visa for UG in{" "}
              <span className="text-blue-600">Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Students require an Irish Study Visa to pursue undergraduate (UG)
              studies in Ireland.
            </p>
          </div>

          {/* Timeline Line */}
          <div className="relative mt-20">
            {/* base line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-[3px] bg-blue-200"></div>

            {/* animated line */}
            <div className="hidden lg:block absolute top-8 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 animate-progress"></div>

            {/* Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {[
                "Receive admission letter",
                "Pay tuition fees (partial/full)",
                "Apply for visa online",
                "Submit documents",
                "Visa decision",
              ].map((step, i) => (
                <div
                  key={i}
                  className="group relative p-6 bg-white/80 backdrop-blur-lg rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center"
                >
                  {/* step circle */}
                  <div
                    className="w-14 h-14 mx-auto flex items-center justify-center 
bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-lg font-bold shadow-lg 
group-hover:scale-110 transition"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* pulse ring */}
                  <div className="absolute inset-0 w-14 h-14 mx-auto rounded-full border-2 border-blue-400 opacity-30 animate-ping"></div>

                  {/* text */}
                  <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-20 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>

            <div className="relative z-10">
              <p className="text-lg max-w-3xl mx-auto">
                "Proper documentation and timely application increase the
                chances of UG visa approval in Ireland."
              </p>
            </div>
          </div>
        </div>

        {/* Animation */}
        <style>{`
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-40px); }
      100% { transform: translateY(0px); }
    }

    .animate-float {
      animation: float 14s ease-in-out infinite;
    }

    .delay-2000 {
      animation-delay: 2s;
    }

    @keyframes progress {
      0% { width: 0%; }
      100% { width: 100%; }
    }

    .animate-progress {
      animation: progress 4s ease-in-out forwards;
    }
  `}</style>
      </section>

      {/* Why Choose Us for UG in Ireland? */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/*  Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/40 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/40 blur-[150px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose Us for{" "}
              <span className="text-blue-600">UG in Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Beyond Admission provides expert guidance to help students
              successfully pursue undergraduate (UG) studies in Ireland.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16 relative">
            {/*  Center Line Glow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>

            {[
              { icon: "🎯", title: "University Shortlisting" },
              { icon: "📝", title: "SOP Assistance" },
              { icon: "📚", title: "IELTS Coaching" },
              { icon: "📄", title: "Application Support" },
              { icon: "💰", title: "Financial Guidance" },
              { icon: "✈️", title: "Visa Assistance" },
            ].map((step, i) => (
              <div
                key={i}
                className="relative mb-12 grid grid-cols-2 items-center"
              >
                {/* LEFT SIDE */}
                {i % 2 === 0 ? (
                  <div className="flex justify-end pr-8">
                    <div className="group w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600">
                      {/*  Glass Card */}
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl flex items-center gap-3 transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        {/*  Icon */}
                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md group-hover:rotate-6 transition duration-300">
                          {step.icon}
                        </div>

                        <p className="text-sm font-medium text-gray-800">
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {/* RIGHT SIDE */}
                {i % 2 !== 0 ? (
                  <div className="flex justify-start pl-8">
                    <div className="group w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600">
                      {/* Glass Card */}
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl flex items-center gap-3 transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        {/* Icon */}
                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-md group-hover:rotate-6 transition duration-300">
                          {step.icon}
                        </div>

                        <p className="text-sm font-medium text-gray-800">
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg border-2 border-white"></div>
              </div>
            ))}
          </div>

          {/* 🔥 Bottom Highlight */}
          <div className="mt-20 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-10 text-center shadow-xl overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>

            <div className="relative z-10">
              <p className="text-lg max-w-2xl mx-auto">
                "Our experienced counsellors guide students at every step of the
                undergraduate (UG) admission process in Ireland."
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 Animation */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-30px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .animate-float {
            animation: float 12s ease-in-out infinite;
          }

          .delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </section>
      {/* FAQ */}

      {/* PREMIER FAQ SECTION - GERMANY MS */}
      <section
        id="faqs"
        className="py-24 bg-[#fcfdfe] relative overflow-hidden"
      >
        {/* Abstract Decorative Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Side: Branding & CTA */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-12 bg-blue-600"></div>
                  <span className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase">
                    Support Hub
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                  Got Questions? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    We've Got Answers.
                  </span>
                </h2>

                <p className="text-slate-500 text-lg font-medium mb-12 leading-relaxed max-w-md">
                  Everything you need to know about undergraduate education in
                  Ireland, simplified to help you make the right move.
                </p>

                {/* Floating Consultant Card */}
                <div className="relative group p-[1px] rounded-[2.5rem] bg-gradient-to-br from-blue-200 to-transparent shadow-2xl shadow-blue-100/50">
                  <div className="relative z-10 bg-white rounded-[2.4rem] p-8 overflow-hidden">
                    {/* Background Accent */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative z-10">
                      <h4 className="font-bold text-slate-900 text-xl mb-3">
                        Still confused?
                      </h4>
                      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                        Our senior consultants can help you with{" "}
                        <b>University Shortlisting</b> and <b>APS processing</b>
                        .
                      </p>
                      <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                        Book Free Consultation
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Enhanced Interactive Accordion */}
            <div className="lg:col-span-7 space-y-6">
              {[
                {
                  q: "Is Ireland good for Indian students?",
                  a: "Yes, especially for tech and business fields",
                },
                {
                  q: "Is IELTS mandatory?",
                  a: "Yes, in most cases.",
                },
                {
                  q: "Can I work while studying?",
                  a: "Yes, 20 hours/week",
                },
                // {
                //   q: "Can I work while studying?",
                //   a: "Yes! International students can work for **120 full days or 240 half days** per year. This is usually enough to cover your monthly living expenses.",
                // },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 overflow-hidden open:ring-1 open:ring-blue-100"
                >
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <div className="flex items-center gap-6">
                      <span className="text-sm font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                        0{i + 1}
                      </span>
                      <span className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight pr-4">
                        {faq.q}
                      </span>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 group-open:rotate-45 group-open:bg-blue-600">
                        <svg
                          className="w-6 h-6 text-slate-400 group-hover:text-white group-open:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="p-7 bg-slate-50 rounded-[1.5rem] border border-slate-100 text-slate-600 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          summary::-webkit-details-marker {
            display: none;
          }
          details[open] summary ~ * {
            animation: reveal 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          @keyframes reveal {
            0% {
              opacity: 0;
              transform: translateY(-15px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="relative pt-6 pb-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/image/Canada-bg.png"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Glow Effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Book Free Study Abroad Consultation
            </h2>

            <p className="mt-6 text-lg opacity-90">
              If you are planning to pursue undergraduate (UG) studies in
              Ireland, our expert counsellors can guide you through the entire
              admission and visa process.
            </p>

            <p className="mt-4 text-lg opacity-90">
              Fill out the consultation form to receive personalized guidance
              for undergraduate (UG) studies in Ireland, including universities,
              courses, scholarships, and visa procedures.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex justify-center gap-6 flex-wrap">
              <Link
                to="/contact"
                className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 inline-block"
              >
                Apply Now
              </Link>

              <button className="px-10 py-4 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-700 hover:scale-105 transition duration-300">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
