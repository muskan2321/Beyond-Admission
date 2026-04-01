import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MBAUSA() {
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
            alt="Study in MBA in USA"
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
              Study MBA in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                USA
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
          href="#why-MBA in USA"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why MBA In USA?
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
              Study MBA in <span className="text-blue-600">USA</span> for Indian
              Students
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Discover world-class education, global career opportunities and a
              life-changing experience.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>

              <img
                src="/image/usa-bg.png"
                alt="Study in MBA in USA"
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
                  Why Choose MBA In USA?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  The United States is the global hub for business education,
                  offering some of the world’s top-ranked MBA programs with
                  strong industry connections and leadership-focused learning.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  For Indian students, pursuing an MBA in the USA provides
                  international exposure, high ROI, and access to global career
                  opportunities.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Globally recognized universities",
                  "Strong career opportunities & high ROI",
                  "Research-focused education",
                  "Flexible course structure",
                  "Networking with global professionals",
                  "Globally recognized degree",
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
      {/* WHY STUDY MBA in USAA */}
      <section
        id="why-MBA in USA"
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
              Why Study MBA in <span className="text-blue-600">USA</span>
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              For Indian students, pursuing an MBA in the USA provides
              international exposure, high ROI, and access to global career
              opportunities.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Globally Recognized MBA Degrees
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Strong Placement Opportunities & High Salaries
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Focus on Leadership, Networking & Practical Learning
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Access to Global Alumni Network
                </h3>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="relative z-10">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Exposure to Top Companies and Startups
                </h3>
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
        id="Popular Courses"
        className="pt-4 pb-16 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-6">
            Popular MBA Specializations
          </h2>

          <p className="text-center text-gray-600 mb-16">
            Choosing the right specialization is crucial for career growth.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Finance",
                img: "/image/Business & Management.avif",
                icon: "📊",
                duration: "1-2 Years",
                courses: [
                  "Investment Banking",
                  "Corporate Finance",
                  "Financial Analysis",
                  "Risk Management",
                ],
              },
              {
                title: "Marketing",
                img: "/image/Business & Management.avif",
                icon: "📈",
                duration: "1-2 Years",
                courses: [
                  "Digital Marketing",
                  "Brand Management",
                  "Market Research",
                  "Consumer Behavior",
                ],
              },
              {
                title: "Business Analytics",
                img: "/image/Engineering & Technology.webp",
                icon: "💻",
                duration: "1-2 Years",
                courses: [
                  "Data Analysis",
                  "Predictive Modeling",
                  "Business Intelligence",
                  "Big Data",
                ],
              },
              {
                title: "Human Resource Management",
                img: "/image/Business & Management.avif",
                icon: "🤝",
                duration: "1-2 Years",
                courses: [
                  "Talent Management",
                  "Organizational Behavior",
                  "Recruitment Strategies",
                  "Employee Relations",
                ],
              },
              {
                title: "Entrepreneurship & International Business",
                img: "/image/Business & Management.avif",
                icon: "🚀",
                duration: "1-2 Years",
                courses: [
                  "Startup Development",
                  "Business Planning",
                  "Global Strategy",
                  "International Trade",
                ],
              },
              {
                title: "Operations & Supply Chain",
                img: "/image/Engineering & Technology.webp",
                icon: "⚙️",
                duration: "1-2 Years",
                courses: [
                  "Logistics Management",
                  "Supply Chain Strategy",
                  "Operations Planning",
                  "Procurement",
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

      {/* TOP MBA UNIVERSITIES */}
      <section
        id="Top Universities"
        className="pt-0 pb-28 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-green-300/30 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Top Universities for{" "}
              <span className="bg-blue-600  bg-clip-text text-transparent">
                MBA in USA
              </span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              The USA is home to the world’s most prestigious business schools.
              Explore top programs and tuition fees.
            </p>
          </div>

          {/* Table */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 shadow-2xl">
            <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80">
              {/* Header */}
              <div className="grid grid-cols-4 bg-blue-600 text-white font-semibold text-lg">
                <div className="p-6">University</div>
                <div className="p-6 text-center">UG</div>
                <div className="p-6 text-center">MS</div>
                <div className="p-6 text-center">MBA</div>
              </div>

              {/* Rows */}
              {[
                {
                  name: "Harvard Business School",
                  ug: "₹45L – ₹55L / year",
                  ms: "₹40L – ₹60L / year",
                  mba: "₹65L – ₹80L / year",
                },
                {
                  name: "Stanford Graduate School of Business",
                  ug: "₹45L – ₹55L / year",
                  ms: "₹50L – ₹65L / year",
                  mba: "₹70L – ₹1Cr / year",
                },
                {
                  name: "Wharton (U-Pennsylvania)",
                  ug: "₹48L – ₹58L / year",
                  ms: "₹45L – ₹65L / year",
                  mba: "₹75L – ₹90L / year",
                },
                {
                  name: "MIT Sloan School of Management",
                  ug: "₹45L – ₹55L / year",
                  ms: "₹50L – ₹70L / year",
                  mba: "₹65L – ₹80L / year",
                },
                {
                  name: "Chicago Booth School of Business",
                  ug: "₹42L – ₹52L / year",
                  ms: "₹45L – ₹60L / year",
                  mba: "₹65L – ₹78L / year",
                },
                {
                  name: "Columbia Business School",
                  ug: "₹45L – ₹55L / year",
                  ms: "₹48L – ₹65L / year",
                  mba: "₹70L – ₹85L / year",
                },
                {
                  name: "NYU Stern School of Business",
                  ug: "₹40L – ₹50L / year",
                  ms: "₹42L – ₹60L / year",
                  mba: "₹62L – ₹75L / year",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-4 items-center border-t border-gray-100 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition duration-300 group"
                >
                  {/* University */}
                  <div className="p-6 font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {row.name}
                  </div>

                  {/* UG */}
                  <div className="p-6 text-center">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-600">
                      {row.ug}
                    </span>
                  </div>

                  {/* MS */}
                  <div className="p-6 text-center">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-600">
                      {row.ms}
                    </span>
                  </div>

                  {/* MBA */}
                  <div className="p-6 text-center">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-700">
                      {row.mba}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* PREMIUM MBA PROGRAMS - FLOATING LAYERED DESIGN */}
      <section
        id="MBA-Types"
        className="pt-24 pb-32 bg-[#F9FBFF] relative overflow-hidden"
      >
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Types of <span className="text-blue-600">MBA Programs</span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg font-medium">
              Find the perfect fit for your career trajectory.
            </p>
          </div>

          {/* New Highlighted Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* 1. Full-Time MBA - The Hero Card */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-[3rem] bg-slate-900 p-1 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] shadow-2xl">
              <div className="relative h-full bg-slate-900 rounded-[2.8rem] p-10 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[0.99]">
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-blue-500/50">
                      Top Choice
                    </span>
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                      Global Recognition
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mt-8 mb-4 tracking-tight">
                    Full-Time MBA
                  </h3>
                  <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                    The ultimate career catalyst. Immerse yourself in a
                    high-intensity environment with exclusive networking and
                    100% internship support.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-12 relative z-10">
                  <div className="flex gap-4">
                    <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-blue-400 font-bold text-sm">
                      1–2 Years
                    </div>
                    <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-emerald-400 font-bold text-sm">
                      On-Campus
                    </div>
                  </div>
                  <button className="h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform shadow-xl shadow-blue-600/40">
                    →
                  </button>
                </div>

                {/* Visual Accent */}
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full"></div>
              </div>
            </div>

            {/* 2. Online MBA - Sleek Modern Card */}
            <div className="md:col-span-4 group relative bg-white border-2 border-slate-100 rounded-[3rem] p-10 shadow-xl hover:shadow-blue-200/50 hover:border-blue-500 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-12 transition-transform shadow-inner">
                  💻
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Online MBA
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Prestige without borders. Access top-tier curriculum from
                  anywhere with zero travel costs.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-black text-slate-400 tracking-widest uppercase">
                  Self-Paced
                </span>
                <span className="text-blue-600 font-bold">Enroll Now</span>
              </div>
            </div>

            {/* 3. Part-Time MBA - Glass Highlight */}
            <div className="md:col-span-6 group bg-emerald-50/50 border-2 border-emerald-100 rounded-[3rem] p-8 hover:bg-white hover:border-emerald-500 transition-all duration-500 flex items-center gap-8 shadow-lg">
              <div className="shrink-0 w-20 h-20 bg-emerald-500 text-white rounded-3xl flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                💼
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Part-Time MBA
                </h3>
                <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                  Engineered for the corporate athlete. Scale your career while
                  maintaining your professional momentum.
                </p>
              </div>
            </div>

            {/* 4. Executive MBA - Glass Highlight */}
            <div className="md:col-span-6 group bg-indigo-50/50 border-2 border-indigo-100 rounded-[3rem] p-8 hover:bg-white hover:border-indigo-500 transition-all duration-500 flex items-center gap-8 shadow-lg">
              <div className="shrink-0 w-20 h-20 bg-indigo-600 text-white rounded-3xl flex items-center justify-center text-3xl shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Executive MBA
                </h3>
                <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                  Strategic leadership for the elite. Focused on high-level
                  decision making and global networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MBA INTAKES & PROCESS */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes for <span className="text-blue-600">MBA in USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Most business schools in the USA offer two primary admission
              windows. The Fall intake is the most preferred for MBA candidates.
            </p>
          </div>

          {/* Intake Cards */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Fall Intake */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl"></div>
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                    🍂 Fall Intake (Primary)
                  </h4>
                  <span className="bg-blue-100 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    Aug / Sep Start
                  </span>
                </div>

                <ul className="space-y-4 text-gray-700 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500 font-bold">✔</span>
                    <span>
                      <b>Round 1 Deadlines:</b> Sep – Oct 2026
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500 font-bold">✔</span>
                    <span>
                      <b>Round 2 Deadlines:</b> Jan – Feb 2027
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500 font-bold">✔</span>
                    <span>
                      <b>Offer Letters:</b> Late Feb – May 2027
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500 font-bold">✔</span>
                    <span>
                      <b>Classes Begin:</b> Aug / Sep 2027
                    </span>
                  </li>
                </ul>

                <div className="mt-6 text-xs text-gray-600 bg-blue-50 px-4 py-3 rounded-xl border border-blue-100">
                  💡 <b>Pro Tip:</b> Apply in Round 1 for maximum scholarship
                  chances.
                </div>
              </div>

              {/* Spring Intake */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-3xl"></div>
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
                    🌱 Spring Intake (Limited)
                  </h4>
                  <span className="bg-indigo-100 text-indigo-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    Jan Start
                  </span>
                </div>

                <ul className="space-y-4 text-gray-700 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-500 font-bold">✔</span>
                    <span>
                      <b>Applications Open:</b> May – July 2026
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-500 font-bold">✔</span>
                    <span>
                      <b>Final Deadlines:</b> Aug – Sep 2026
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-500 font-bold">✔</span>
                    <span>
                      <b>Offer Letters:</b> Oct – Nov 2026
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-500 font-bold">✔</span>
                    <span>
                      <b>Classes Begin:</b> Jan 2027
                    </span>
                  </li>
                </ul>

                <div className="mt-6 text-xs text-gray-600 bg-indigo-50 px-4 py-3 rounded-xl border border-indigo-100">
                  ⚠️ <b>Note:</b> Fewer schools offer internships for Spring
                  starters.
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Process Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-32 pb-20 mt-20 rounded-[4rem]">
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

            <div className="relative z-10 max-w-5xl mx-auto px-4">
              {/* Process Heading */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our MBA Journey Process
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  A complete roadmap from GMAT/GRE prep to stepping onto campus.
                </p>
              </div>

              {/* Timeline Items */}
              <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 h-full transform -translate-x-1/2"></div>

                {/* Steps Mapping */}
                {[
                  {
                    title: "Profile Evaluation",
                    detail:
                      "Assessing your work experience and academic background.",
                  },
                  {
                    title: "Test Prep",
                    detail:
                      "Preparing for GMAT/GRE and English Proficiency exams.",
                  },
                  {
                    title: "Shortlisting Schools",
                    detail:
                      "Choosing B-schools that align with your career ROI.",
                  },
                  {
                    title: "Documentation",
                    detail: "Drafting high-impact Essays, LORs, and SOPs.",
                  },
                  {
                    title: "Visa & Finance",
                    detail:
                      "Managing I-20 documentation and visa interview prep.",
                  },
                ].map((step, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`flex items-center mb-14 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                    >
                      <div className="w-1/2 px-4">
                        <div
                          className={`rounded-2xl px-6 py-5 text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl ${
                            index % 3 === 0
                              ? "bg-blue-400"
                              : index % 3 === 1
                                ? "bg-blue-600"
                                : "bg-blue-800"
                          }`}
                        >
                          <h4 className="font-semibold text-sm">
                            {step.title}
                          </h4>
                          <p className="text-xs opacity-90 mt-2 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      </div>

                      {/* Step Circle */}
                      <div className="relative z-10 group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-blue-400 bg-white font-bold text-blue-600 shadow-md transition duration-300 group-hover:scale-110">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 blur-xl scale-150 z-[-1] animate-pulse"></div>
                      </div>

                      <div className="w-1/2"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Float Animation Style */}
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
        </div>
      </section>

      {/* ELIGIBILITY CRITERIA FOR MBA */}
      <section
        id="eligibility"
        className="pt-10 pb-20 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Container */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 shadow-2xl text-center text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Eligibility Criteria for{" "}
              <span className="text-blue-200">MBA in USA</span>
            </h2>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto font-medium">
              Indian students must fulfill the following key requirements to
              secure admission into top-tier American business schools.
            </p>

            {/* Tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {[
                { id: "academic", label: "🎓 Academic Prep", icon: "🎓" },
                { id: "work", label: "💼 Professional Experience", icon: "💼" },
                { id: "exams", label: "📝 Entrance Exams", icon: "📝" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id)}
                  className={`px-8 py-3 rounded-2xl font-bold transition duration-300 flex items-center gap-2 ${
                    tab === item.id
                      ? "bg-white text-blue-600 shadow-xl scale-105"
                      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Content Card */}
            <div className="mt-12 bg-white rounded-[2.5rem] p-10 shadow-2xl text-gray-700 text-left relative z-10">
              {tab === "academic" && (
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                      <span className="text-3xl">🎓</span> Academic Requirements
                    </h3>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">●</span>
                        <span>
                          <b>Bachelor's Degree:</b> Minimum 3 or 4 years of
                          undergraduate study from a recognized university.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">●</span>
                        <span>
                          <b>GPA Standard:</b> A good academic record, typically{" "}
                          <b>3.0+ GPA</b> is preferred for competitive schools.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:block">
                    <img
                      src="/image/academic-qualification.jpg"
                      alt="Academic"
                      className="rounded-[2rem] shadow-lg object-cover h-64 w-full"
                    />
                  </div>
                </div>
              )}

              {tab === "work" && (
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="hidden md:block">
                    <img
                      src="/image/academic-qualification.jpg"
                      alt="Work Experience"
                      className="rounded-[2rem] shadow-lg object-cover h-64 w-full"
                    />
                  </div>
                  <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                      <span className="text-3xl">💼</span> Professional
                      Background
                    </h3>
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 font-bold">●</span>
                        <span>
                          <b>Work Experience:</b> Generally <b>2–5 years</b> of
                          professional experience is recommended.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 font-bold">●</span>
                        <span>
                          <b>Leadership:</b> Top universities look for evidence
                          of career growth and leadership potential.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {tab === "exams" && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-xl text-slate-900 mb-4">
                      Aptitude Tests
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span>
                          <b>GMAT / GRE:</b> Required (Some universities offer
                          waivers).
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-[2rem] bg-blue-50 border border-blue-200">
                    <h4 className="font-bold text-xl text-blue-900 mb-4">
                      English Proficiency
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="font-semibold text-slate-700">
                          IELTS Score
                        </span>
                        <span className="px-3 py-1 bg-white rounded-lg font-bold text-blue-600">
                          6.5 – 7.5
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-semibold text-slate-700">
                          TOEFL Score
                        </span>
                        <span className="px-3 py-1 bg-white rounded-lg font-bold text-blue-600">
                          80 – 100+
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ULTRA-MODERN INTERACTIVE CHECKLIST */}
      <section
        id="documents"
        className="pt-24 pb-32 bg-[#fafafa] relative overflow-hidden"
      >
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px] -ml-64 -mb-64"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* ORIGINAL CENTERED HEADING */}
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Pre-Application Kit
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              Application{" "}
              <span className="text-blue-600">Document Checklist</span>
            </h2>
            <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              A strong application is the key to MBA admissions. Ensure you have
              these essential documents ready for a seamless process.
            </p>
          </div>

          {/* THE "DYNAMIC STACK" LAYOUT */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* LEFT: THE HERO DOCUMENT (SOP) */}
            <div className="lg:w-1/3 flex flex-col">
              <div className="flex-1 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group flex flex-col justify-between shadow-2xl shadow-blue-900/20">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-12 transition-transform duration-500">
                    ✍️
                  </div>
                  <h3 className="text-4xl font-bold mb-4 tracking-tight">
                    SOP & <br />
                    Essays
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10">
                    The heart of your application. Your story, your goals, and
                    your "Why MBA" captured perfectly.
                  </p>
                </div>

                <div className="relative z-10">
                  <button className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-sm hover:bg-blue-50 transition-all flex items-center justify-center gap-3">
                    Book Expert Review <span>→</span>
                  </button>
                </div>

                {/* Abstract Glow */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/30 blur-[100px] group-hover:bg-blue-600/50 transition-all duration-700"></div>
              </div>
            </div>

            {/* RIGHT: THE SMART GRID */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Academic Card (Wide) */}
              <div className="md:col-span-2 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 hover:border-blue-500/30 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                      📜
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      Academic Transcripts
                    </h4>
                    <p className="text-slate-500 text-sm max-w-xs">
                      All semester-wise marksheets and your final degree
                      certificate.
                    </p>
                  </div>
                  <span className="text-[100px] font-black text-slate-50 absolute -right-4 -top-8 select-none group-hover:text-blue-50 transition-colors">
                    02
                  </span>
                </div>
              </div>

              {/* Test Scores (Tall) */}
              <div className="md:row-span-2 bg-gradient-to-b from-indigo-50 to-white border border-indigo-100/50 rounded-[2.5rem] p-8 flex flex-col justify-between hover:shadow-xl transition-all group">
                <div>
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                    📊
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">
                    Test <br />
                    Scores
                  </h4>
                  <div className="space-y-3">
                    {["GMAT / GRE", "IELTS / TOEFL"].map((test) => (
                      <div
                        key={test}
                        className="flex items-center gap-2 px-3 py-2 bg-white/60 rounded-lg text-xs font-bold text-slate-600 border border-indigo-50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>{" "}
                        {test}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-slate-400 text-xs mt-8 font-medium">
                  Official score reports are mandatory.
                </p>
              </div>

              {/* Professional Combo */}
              <div className="bg-white border border-slate-200/60 rounded-[2.5rem] p-8 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                  📄
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Impact Resume
                </h4>
                <p className="text-slate-500 text-xs mt-2">
                  1-page professional CV.
                </p>
              </div>

              {/* LOR Card */}
              <div className="bg-white border border-slate-200/60 rounded-[2.5rem] p-8 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-6 font-bold group-hover:bg-purple-600 group-hover:text-white transition-all">
                  ✉️
                </div>
                <h4 className="text-xl font-bold text-slate-900">LORs</h4>
                <p className="text-slate-500 text-xs mt-2">
                  Academic & Professional references.
                </p>
              </div>

              {/* Footer Bar (Wide) */}
              <div className="md:col-span-3 bg-white border border-slate-200/60 rounded-3xl p-5 flex items-center justify-between px-10 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🛂</span>
                  <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">
                    Passport & Work Experience
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-8 bg-blue-600 rounded-full"></div>
                  <div className="h-2 w-2 bg-slate-200 rounded-full"></div>
                  <div className="h-2 w-2 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COST OF MBA SECTION */}
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
              Cost of Studying MBA in <span className="text-blue-600">USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              MBA in the USA is a premium investment but offers high returns.
              Understanding the cost helps in better financial planning.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12">
            {/* Tuition Fees */}
            <div className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 blur-sm"></div>

              {/* inner content wrapper */}
              <div className="relative bg-white/90 rounded-3xl p-8 z-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 group-hover:text-blue-600 transition">
                  Tuition Fees
                </h3>

                {/* pricing cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-xl"></div>

                    <h4 className="text-lg font-semibold text-gray-900">
                      Total Program
                    </h4>

                    <p className="mt-3 text-blue-600 font-bold text-2xl">
                      $40k – $100k
                    </p>

                    <p className="text-gray-500 text-sm mt-1">tuition range</p>
                  </div>

                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 rounded-t-xl"></div>

                    <h4 className="text-lg font-semibold text-gray-900">
                      Total Cost (Approx)
                    </h4>

                    <p className="mt-3 text-indigo-600 font-bold text-2xl text-nowrap">
                      ₹50L – ₹1.2Cr
                    </p>

                    <p className="text-gray-500 text-sm mt-1">estimated INR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Living Expenses */}
            <div className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-indigo-200 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">
              {/* animated gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 opacity-0 group-hover:opacity-100 blur-sm"></div>

              <div className="relative bg-white/90 rounded-3xl p-8 z-10">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                  Living Expenses
                </h3>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  Living costs vary by city (e.g., NYC vs. Texas). Expenses
                  typically include accommodation, food, transportation, health
                  insurance, and personal utilities.
                </p>

                {/* highlighted price */}
                <div className="mt-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200 blur-xl opacity-60 rounded-xl"></div>

                  <div className="relative bg-white rounded-xl p-6 text-center shadow-lg">
                    <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      $12,000 – $20,000
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

      {/* Cost of Living in USA */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Cost of Living in <span className="text-blue-600">USA</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Estimated expenses for international students in the MBA in USA
            </p>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/40 backdrop-blur-xl">
            {/* Header */}
            <div className="grid md:grid-cols-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-semibold text-lg">
              <div className="p-5">Expenses</div>
              <div className="p-5">Average Cost</div>
              <div className="p-5">External Factors</div>
            </div>

            {/* Rows */}
            {[
              {
                title: "Annual Tuition Fee",
                cost: "INR 20 lakh - INR 50 lakh per year",
                extra: [
                  "Depends upon the chosen university",
                  "Depends upon the study in MBA in USA course selected",
                ],
              },
              {
                title: "Accommodation",
                cost: "INR 64,000 - INR 1,30,000",
                extra: [
                  "University accommodation or private",
                  "Includes food, transportation, medical or other important expenses",
                ],
              },
              {
                title: "Food",
                cost: "On Campus: INR 20000 monthly\nOff Campus: INR 33000 - 50000 monthly",
                extra: ["On campus", "Off campus"],
              },
              {
                title: "Phone Subscription",
                cost: "INR 4000 monthly",
                extra: [],
              },
              {
                title: "Groceries",
                cost: "INR 20000 monthly",
                extra: [],
              },
              {
                title: "Public Transportation",
                cost: "INR 8000 monthly",
                extra: [],
              },
              {
                title: "Health Insurance",
                cost: "INR 20000 monthly",
                extra: [
                  "Plan covering pre-existing conditions",
                  "Student’s age",
                ],
              },
              {
                title: "Other Utilities",
                cost: "INR 12000 monthly",
                extra: ["Electricity", "Water", "Gas", "Internet"],
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

                {/* External */}
                <div className="p-5 text-gray-700 text-sm">
                  {row.extra.length > 0 ? (
                    <ul className="space-y-1">
                      {row.extra.map((item, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="text-blue-500 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SCHOLARSHIPS SECTION */}
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
              Scholarships for Indian Students in
              <span className="text-blue-600"> MBA in USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Many universities offer financial support to MBA students to
              reduce the financial burden of a premium degree.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {[
              {
                icon: "🎓",
                title: "Merit-based Scholarships",
                details:
                  "Awarded based on academic excellence, strong GMAT/GRE scores, and overall student profile performance.",
              },
              {
                icon: "💰",
                title: "Need-based Financial Aid",
                details:
                  "Provided to students who demonstrate clear financial need to support their MBA tuition and expenses.",
              },
              {
                icon: "🌍",
                title: "Diversity Scholarships",
                details:
                  "Offered to international students who bring unique perspectives and cultural backgrounds to the B-school classroom.",
              },
              {
                icon: "🤝",
                title: "MBA Fellowships",
                details:
                  "Highly prestigious awards that often include full or partial tuition coverage along with leadership opportunities.",
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

          {/* Info Box (The 💡 Tip) */}
          <div className="mt-20 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
            {/* glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>

            <div className="relative z-10">
              <p className="text-xl max-w-3xl mx-auto font-medium">
                <span className="text-3xl mr-2">💡</span>
                Many top B-schools offer partial to full scholarships based on
                profile, leadership qualities, and academic merit.
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
      {/* JOBS SECTION */}
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
              Job Opportunities & Salary After{" "}
              <span className="text-blue-600">MBA in USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              MBA graduates from the USA are highly valued globally, commanding
              some of the world's highest starting salaries.
            </p>
          </div>

          {/* Recruiters Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10">
              Top Global Recruiters
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {[
                { name: "McKinsey", logo: "/image/mckinsey-logo.png" },
                { name: "BCG", logo: "/image/bcg-logo.png" },
                { name: "Bain", logo: "/image/bain-logo.png" },
                { name: "Amazon", logo: "/image/amazon.png" },
                { name: "Google", logo: "/image/google-logo.webp" },
                {
                  name: "Goldman Sachs",
                  logo: "/image/goldman-sachs-logo.png",
                },
              ].map((company, i) => (
                <div
                  key={i}
                  className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center hover:-translate-y-2 h-24"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-10 w-full object-contain grayscale group-hover:grayscale-0 transition duration-300"
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
                  Average Salary After MBA
                </h3>

                <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  $90,000 – $150,000
                </p>

                <p className="text-gray-500 mt-3 font-medium">
                  base salary per year
                </p>
                <p className="text-xs text-slate-400 mt-2 italic">
                  excluding signing bonuses and performance incentives
                </p>
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
              Work Opportunities During & After{" "}
              <span className="text-blue-600"> MBA in USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 font-medium">
              The USA provides a robust ecosystem for MBA students to gain
              practical experience through internships and post-study work
              permits.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            {/* During Study */}
            <div className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 hover:scale-[1.02] transition duration-300">
              <div className="bg-white rounded-3xl p-10 shadow-xl h-full relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
      bg-gradient-to-br from-blue-100/40 via-indigo-100/20 to-sky-100/30"
                ></div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 mb-6 flex items-center justify-center 
        bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl text-2xl shadow-lg 
        group-hover:scale-110 transition"
                  >
                    🤝
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    During Study
                  </h3>

                  <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

                  <ul className="mt-6 text-gray-600 space-y-4 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">●</span>
                      High-impact Summer Internships between Year 1 & Year 2
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">●</span>
                      20 hours/week part-time opportunities (on-campus)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* After Study */}
            <div className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 hover:scale-[1.02] transition duration-300">
              <div className="bg-white rounded-3xl p-10 shadow-xl h-full relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
      bg-gradient-to-br from-indigo-100/40 via-blue-100/20 to-purple-100/30"
                ></div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 mb-6 flex items-center justify-center 
        bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl text-2xl shadow-lg 
        group-hover:scale-110 transition"
                  >
                    🚀
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                    After MBA
                  </h3>

                  <div className="mt-3 w-12 h-1 bg-indigo-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

                  <ul className="mt-6 text-gray-600 space-y-4 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">●</span>
                      Standard OPT: Up to 12 months of full-time work permit
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600">●</span>
                      STEM MBA: Up to 36 months (3 years) of extended OPT
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 opacity-40"></div>
            <div className="hidden md:block absolute top-8 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-progress"></div>

            <div className="grid md:grid-cols-4 gap-10 text-center relative z-10">
              {[
                { icon: "🎓", title: "MBA Admission" },
                { icon: "🤝", title: "Summer Internship" },
                { icon: "🚀", title: "STEM OPT / Full-Time" },
                { icon: "📈", title: "Global Career" },
              ].map((step, i) => (
                <div key={i} className="group relative">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-2xl shadow-xl group-hover:scale-110 transition duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-blue-400 opacity-40 animate-ping"></div>
                  <p className="mt-4 text-sm font-bold text-gray-700">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS Animations */}
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

      {/* APPLICATION TIMELINE SECTION */}
      <section
        id="timeline"
        className="relative py-24 bg-white overflow-hidden"
      >
        {/* Subtle Background Text */}
        <div className="absolute top-10 left-10 text-[12rem] font-black text-slate-50 select-none leading-none z-0">
          PLAN
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              MBA Application <span className="text-blue-600">Timeline</span>
            </h2>
            <p className="mt-6 text-lg text-gray-500 font-medium">
              Success in MBA admissions depends on timing. Follow this strategic
              roadmap to stay ahead of the deadlines.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative border-l-2 border-dashed border-blue-200 ml-4 md:ml-0 md:border-none">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  time: "12–15 Months Before",
                  title: "Preparation Phase",
                  desc: "Focus on GMAT/GRE prep and clearing your English proficiency tests (IELTS/TOEFL).",
                  icon: "📚",
                  color: "blue",
                },
                {
                  time: "10–12 Months Before",
                  title: "Shortlisting",
                  desc: "Research B-schools, check ROI, and shortlist 5-8 universities that fit your goals.",
                  icon: "🔍",
                  color: "indigo",
                },
                {
                  time: "6–8 Months Before",
                  title: "Application Rounds",
                  desc: "Submit your SOPs, LORs, and Resume. Aim for Round 1 or Round 2 for better scholarship odds.",
                  icon: "📩",
                  color: "purple",
                },
                {
                  time: "3–5 Months Before",
                  title: "Visa & Finalize",
                  desc: "Accept your best offer, pay the deposit, and start your F-1 Visa application process.",
                  icon: "✈️",
                  color: "emerald",
                },
              ].map((step, i) => (
                <div key={i} className="relative group">
                  {/* Desktop Connector Line */}
                  {i !== 3 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-slate-100 group-hover:bg-blue-100 transition-colors z-0"></div>
                  )}

                  <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Icon Circle */}
                    <div
                      className={`w-20 h-20 rounded-[2rem] bg-white border-4 border-slate-50 flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:shadow-blue-200 transition-all duration-500 mb-6 relative`}
                    >
                      <span className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {i + 1}
                      </span>
                      {step.icon}
                    </div>

                    {/* Time Badge */}
                    <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-4">
                      {step.time}
                    </span>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed px-4 md:px-0">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pro-Tip Banner */}
          <div className="mt-24 p-8 rounded-[3rem] bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden group shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl animate-bounce">
                  💡
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Round 1 is the Secret.</h4>
                  <p className="text-blue-100 text-sm mt-1">
                    Applying in the first round maximizes your chances for both
                    admission and scholarships.
                  </p>
                </div>
              </div>
              <button className="px-8 py-4 bg-white text-blue-700 font-black rounded-2xl hover:bg-blue-50 transition-transform active:scale-95 shadow-lg">
                Check Deadlines 2026
              </button>
            </div>
            {/* Abstract Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-20 -mt-20"></div>
          </div>
        </div>
      </section>

      {/* STUDENT VISA SECTION */}
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
              Student Visa for <span className="text-blue-600">USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 font-medium">
              To study in the USA, international students must secure an
              <span className="text-blue-600"> F-1 Student Visa</span>. Follow
              these essential steps:
            </p>
          </div>

          {/* Timeline Line */}
          <div className="relative mt-20">
            {/* base line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-[3px] bg-blue-200"></div>

            {/* animated line */}
            <div className="hidden lg:block absolute top-8 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 animate-progress"></div>

            {/* Steps - Adjusted to 5 columns for your content */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {[
                "Receive I-20 form from the university",
                "Pay the required SEVIS fee",
                "Complete the DS-160 application form",
                "Schedule your visa appointment",
                "Attend your visa interview",
              ].map((step, i) => (
                <div
                  key={i}
                  className="group relative p-6 bg-white/90 backdrop-blur-lg rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center flex flex-col items-center"
                >
                  {/* step circle */}
                  <div
                    className="w-14 h-14 flex items-center justify-center 
            bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-lg font-bold shadow-lg 
            group-hover:scale-110 transition relative z-10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* pulse ring */}
                  <div className="absolute top-6 w-14 h-14 rounded-full border-2 border-blue-400 opacity-30 animate-ping"></div>

                  {/* text */}
                  <p className="mt-6 text-gray-800 font-semibold text-sm leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note Box */}
          <div className="mt-20 relative bg-slate-900 text-white rounded-[2.5rem] p-10 text-center shadow-2xl overflow-hidden group">
            {/* glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full group-hover:bg-blue-600/30 transition duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-4xl">🛂</div>
              <p className="text-xl font-medium max-w-3xl leading-relaxed">
                Proper preparation and financial documentation are the keys to a
                <span className="text-blue-400 font-bold">
                  {" "}
                  successful visa interview
                </span>
                . Ensure all your records are in order before your appointment.
              </p>
            </div>
          </div>
        </div>

        {/* Global Styles/Animations */}
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
      {/* Why Choose Beyond Admission */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/*  Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/40 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/40 blur-[150px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose <span className="text-blue-600">Beyond Admission</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Beyond Admission provides expert guidance to help students
              successfully study abroad.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16 relative">
            {/*  Center Line Glow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>

            {[
              { icon: "🎯", title: "Career counselling" },
              { icon: "🏫", title: "University shortlisting" },
              { icon: "📝", title: "Application assistance" },
              { icon: "💰", title: "Scholarship guidance" },
              { icon: "📄", title: "Visa documentation support" },
              { icon: "✈", title: "Pre-departure guidance" },
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
                      {/* 🔥 Glass Card */}
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl flex items-center gap-3 transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        {/* 🔥 Icon */}
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

                {/* 🔥 Center Dot */}
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
                Our experienced counsellors support students throughout the
                entire admission process.
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

      {/* CTA */}
      <section className="relative pt-6 pb-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img src="/image/usa-bg.png" className="w-full h-full object-cover" />
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
              If you are planning to study in the USA, our expert counsellors
              can guide you through the entire process.
            </p>

            <p className="mt-4 text-lg opacity-90">
              Fill out the consultation form to receive personalized guidance on
              universities, courses, scholarships, and visa procedures.
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
