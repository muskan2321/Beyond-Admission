import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function StudyUSA() {
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
            alt="Study in USA"
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
              Study in{" "}
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

            <div className="mt-10 flex gap-8 text-white/80 text-sm">
              <div>
                <p className="text-xl font-bold text-white">4500+</p>
                Universities
              </div>
              <div>
                <p className="text-xl font-bold text-white">1.5M</p>
                Students
              </div>
              <div>
                <p className="text-xl font-bold text-white">98%</p>
                Success
              </div>
            </div>
          </div>

          {/* RIGHT */}
          {/* <div className="relative hidden md:block">
            <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-xl animate-float">
              🎓 Top Universities
            </div>

            <div className="absolute top-40 right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-xl animate-float delay-2000">
              💼 Career Opportunities
            </div>

            <div className="absolute bottom-10 left-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-xl animate-float delay-4000">
              💰 Scholarships Available
            </div>
          </div> */}
        </div>

        {/* ✅ FIXED STYLE */}
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
          href="#why-usa"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why USA?
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
              Study in <span className="text-blue-600">USA</span> for Indian
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
                alt="Study in USA"
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
                  Why Choose USA?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  The United States is one of the most popular destinations for
                  international students seeking high-quality education and
                  global career opportunities. With thousands of universities
                  offering innovative programs and advanced research facilities,
                  the USA provides students with an excellent academic
                  environment and strong career prospects.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  At Beyond Admission, we help students achieve their dream of
                  studying in the USA by providing complete guidance on
                  university selection, application process, scholarships, and
                  student visa assistance.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "World-class education",
                  "Strong career opportunities",
                  "Global networking",
                  "Scholarship options",
                  "Post-study work visa",
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

      {/* WHY STUDY USA */}
      <section
        id="why-usa"
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
              Why Study in <span className="text-blue-600">USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Studying in the United States offers numerous benefits for
              international students.
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
                  Globally Recognized Universities
                </h3>

                <p className="mt-3 text-gray-600">
                  The USA is home to many of the world’s top universities that
                  consistently rank among the best globally.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  📚
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Wide Range of Courses
                </h3>

                <p className="mt-3 text-gray-600">
                  Students can choose from thousands of undergraduate and
                  postgraduate programs across various disciplines.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  🧭
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Flexible Education System
                </h3>

                <p className="mt-3 text-gray-600">
                  The US education system allows students to explore different
                  subjects before choosing their specialization.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  🔬
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Research Opportunities
                </h3>

                <p className="mt-3 text-gray-600">
                  Many universities provide advanced research facilities and
                  encourage students to participate in research projects.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  🌎
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Global Career Opportunities
                </h3>

                <p className="mt-3 text-gray-600">
                  Graduates from US universities are highly valued by employers
                  worldwide.
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
                  Internship Opportunities
                </h3>

                <p className="mt-3 text-gray-600">
                  Students gain practical experience through internships and
                  on-campus jobs, improving their career prospects.
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
        id="Popular Courses"
        className="pt-4 pb-16 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-16">
            Popular Courses in USA
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Engineering & Technology",
                img: "/image/Engineering & Technology.webp",
                icon: "💻",
                salary: "$90,000+ Avg Salary",
                duration: "2 Years",
                courses: [
                  "MS Computer Science",
                  "MS Data Science",
                  "MS Artificial Intelligence",
                  "MS Mechanical Engineering",
                ],
              },
              {
                title: "Business & Management",
                img: "/image/Business & Management.avif",
                icon: "📊",
                salary: "$85,000+ Avg Salary",
                duration: "1-2 Years",
                courses: ["MBA", "Business Analytics", "Finance", "Marketing"],
              },
              {
                title: "Undergraduate Programs",
                img: "/image/Undergraduate Programs.webp",
                icon: "🎓",
                salary: "$60,000+ Avg Salary",
                duration: "4 Years",
                courses: [
                  "Bachelor Computer Science",
                  "Bachelor Engineering",
                  "BBA",
                  "Bachelor Economics",
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
                        {course}
                      </li>
                    ))}
                  </ul>

                  {/* <button className="mt-5 text-sm font-semibold text-blue-600 hover:text-orange-500 transition">
                    Explore Programs →
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP UNIVERSITIES */}
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
              Top Universities in USA and Their{" "}
              <span className="bg-blue-600  bg-clip-text text-transparent">
                Fees
              </span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Explore top universities, programs, and tuition fees in a
              structured way.
            </p>
          </div>

          {/* Table */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 shadow-2xl">
            <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80">
              {/* Header */}
              <div className="grid grid-cols-3 bg-blue-600 text-white font-semibold text-lg">
                <div className="p-6">University</div>
                <div className="p-6">Programs</div>
                <div className="p-6">Courses & Fees</div>
              </div>

              {/* Rows */}
              {[
                {
                  name: "Harvard University",
                  programs: ["UG", "PG", "MBA"],
                  course: "Business, Law, Medicine",
                  fees: "$50,000 - $70,000 (45lakh-63lakh)",
                },
                {
                  name: "Stanford University",
                  programs: ["UG", "PG", "MBA"],
                  course: "Engineering, MBA, CS",
                  fees: "$55,000 - $75,000 (50lakh-67lakh)",
                },
                {
                  name: "MIT",
                  programs: ["UG", "PG"],
                  course: "AI, Robotics",
                  fees: "$53,000 - $73,000 (48lakh-66lakh)",
                },
                {
                  name: "UC Berkeley",
                  programs: ["UG", "PG"],
                  course: "CS, Economics",
                  fees: "$40,000 - $60,000 (36lakh-54lakh)",
                },
                {
                  name: "Columbia University",
                  programs: ["UG", "PG", "MBA"],
                  course: "Business, Journalism",
                  fees: "$60,000 - $80,000 (36lakh-72lakh)",
                },
                {
                  name: "University of Chicago",
                  programs: ["UG", "PG", "MBA"],
                  course: "Economics, Data Science",
                  fees: "$55,000 - $75,000 (50lakh-67lakh)",
                },
                {
                  name: "Yale University",
                  programs: ["UG", "PG"],
                  course: "Law, Arts",
                  fees: "$50,000 - $70,000 (45lakh-63lakh)",
                },
                {
                  name: "Johns Hopkins University",
                  programs: ["UG", "PG", "MBBS"],
                  course: "Medicine",
                  fees: "$55,000 - $65,000 (50lakh-67lakh)",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 items-center border-t border-gray-100 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition duration-300 group"
                >
                  {/* University */}
                  <div className="p-6 font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {row.name}
                  </div>

                  {/* Programs */}
                  <div className="p-6 flex flex-wrap gap-2">
                    {row.programs.map((p, idx) => (
                      <span
                        key={idx}
                        className={`
                    px-3 py-1 text-xs font-medium rounded-full shadow-sm
                    ${p === "UG" && "bg-green-100 text-green-600"}
                    ${p === "PG" && "bg-blue-100 text-blue-600"}
                    ${p === "MBA" && "bg-yellow-100 text-yellow-700"}
                    ${p === "MBBS" && "bg-red-100 text-red-600"}
                  `}
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Courses + Fees */}
                  <div className="p-6">
                    <p className="text-gray-700 text-sm group-hover:text-gray-900 transition">
                      {row.course}
                    </p>
                    <p className="text-blue-600 font-bold mt-2 text-lg">
                      {row.fees}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTAKES */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes in <span className="text-blue-600">USA Universities</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Universities in the United States typically offer two major
              admission intakes during the year.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Fall */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-blue-700 mb-6 flex items-center gap-2">
                  📅 Fall 2026 Intake Timeline
                </h4>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✔ Applications Open Period: Aug – Nov 2026</li>
                  <li>✔ Deadlines: Dec 2026 – Feb 2027</li>
                  <li>✔ Offer Letters: Mar – May 2027</li>
                  <li>✔ Classes Begin: Aug / Sep 2027</li>
                </ul>

                <div className="mt-5 text-xs text-gray-600 bg-blue-50 px-4 py-3 rounded-xl">
                  👉 Recommended preparation start: <b>Mid 2026</b>
                </div>
              </div>

              {/* Spring */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-indigo-700 mb-6 flex items-center gap-2">
                  🌱 Spring 2027 Intake Timeline
                </h4>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✔ Applications Open Period: May – Aug 2026</li>
                  <li>✔ Deadlines: Sep – Oct 2026</li>
                  <li>✔ Offer Letters: Oct – Nov 2026</li>
                  <li>✔ Classes Begin: Jan 2027</li>
                </ul>

                <div className="mt-5 text-xs text-gray-600 bg-indigo-50 px-4 py-3 rounded-xl">
                  👉 Recommended preparation start: <b>Early 2026</b>
                </div>
              </div>
            </div>
          </div>

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
                  Our Process
                </h2>

                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  A complete roadmap designed to guide you through every step of
                  your international education journey.
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 h-full transform -translate-x-1/2"></div>

                {steps.map((step, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`flex items-center mb-14 ${
                        isLeft ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Content Box */}
                      <div className="w-1/2 px-4">
                        <div
                          className={`rounded-2xl px-6 py-5 text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl
                    ${
                      index % 3 === 0
                        ? "bg-blue-400"
                        : index % 3 === 1
                          ? "bg-blue-600"
                          : "bg-blue-800"
                    }`}
                        >
                          {/* Title */}
                          <h4 className="font-semibold text-sm">
                            {step.title}
                          </h4>

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
        </div>
      </section>

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
              Eligibility Criteria to Study in USA
            </h2>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              To study in USA, one needs to meet several eligibility criteria
              and application requirements which can vary based on the level of
              education and the specific institution.
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
                🎓 Academic Qualifications
              </button>

              <button
                onClick={() => setTab("language")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "language"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                🌎 Language Proficiency
              </button>

              <button
                onClick={() => setTab("tests")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "tests"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                📝 Standardized Tests
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
                      Academic Qualifications
                    </h3>

                    <ul className="mt-4 space-y-3">
                      <li>• Undergraduate: Completion of secondary school</li>

                      <li>
                        • Graduate: A bachelor’s degree from an accredited
                        institution
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {tab === "language" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Language Proficiency
                  </h3>

                  <ul className="mt-4 space-y-3">
                    <li>• International English Language Testing System</li>
                    <li>• Test of English as a Foreign Language</li>
                  </ul>
                </div>
              )}

              {tab === "tests" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Standardized Tests
                  </h3>

                  <ul className="mt-4 space-y-3">
                    <li>• Graduate Record Examination</li>
                    <li>• Graduate Management Admission Test</li>
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
              Cost of Studying in <span className="text-blue-600">USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The cost of studying in the USA depends on the university,
              location, and program.
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
                  Average Tuition Fees
                </h3>

                {/* pricing cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-xl"></div>

                    <h4 className="text-lg font-semibold text-gray-900">
                      Undergraduate Programs
                    </h4>

                    <p className="mt-3 text-blue-600 font-bold text-2xl">
                      $20,000 – $40,000
                    </p>

                    <p className="text-gray-500 text-sm mt-1">per year</p>
                  </div>

                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 rounded-t-xl"></div>

                    <h4 className="text-lg font-semibold text-gray-900">
                      Master’s Programs
                    </h4>

                    <p className="mt-3 text-indigo-600 font-bold text-2xl">
                      $25,000 – $55,000
                    </p>

                    <p className="text-gray-500 text-sm mt-1">per year</p>
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
                  International students typically spend around $10,000 to
                  $15,000 per year on living expenses including accommodation,
                  food, transportation, and personal expenses.
                </p>

                {/* highlighted price */}
                <div className="mt-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200 blur-xl opacity-60 rounded-xl"></div>

                  <div className="relative bg-white rounded-xl p-6 text-center shadow-lg">
                    <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      $10,000 – $15,000
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
              Estimated expenses for international students in the USA
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
                  "Depends upon the study in USA course selected",
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
              Scholarships for International Students in
              <span className="text-blue-600"> USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Many universities and organizations offer scholarships to
              international students to help reduce the cost of education.
            </p>
          </div>

          {/* Cards */}
          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {[
              {
                icon: "🎓",
                title: "Fulbright Foreign Student Program",
                details:
                  "Covers tuition fees, living expenses, travel costs, and provides full financial support for international students.",
              },
              {
                icon: "🏆",
                title: "Knight-Hennessy Scholars Program",
                details:
                  "Offers full funding including tuition, stipend, and leadership development opportunities at Stanford University.",
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

                    {/* EXPAND DETAILS */}
                    <div className="mt-4 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                      <p className="text-gray-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
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
            {/* glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>

            <div className="relative z-10">
              <p className="text-lg max-w-3xl mx-auto">
                Scholarships may be awarded based on academic merit, leadership
                qualities, or financial need.
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
              Work Opportunities for Students in
              <span className="text-blue-600"> USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              International students are allowed to work while studying in the
              United States.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            {/* Part-Time Work */}
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
                    Part-Time Work
                  </h3>

                  {/* divider */}
                  <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

                  {/* content */}
                  <p className="mt-6 text-gray-600 leading-relaxed">
                    Students can work up to 20 hours per week during the
                    academic semester.
                  </p>
                </div>
              </div>
            </div>

            {/* Post Study Work */}
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
                    Post-Study Work Opportunities
                  </h3>

                  {/* divider */}
                  <div className="mt-3 w-12 h-1 bg-indigo-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

                  {/* content */}
                  <p className="mt-6 text-gray-600 leading-relaxed">
                    After graduation, students can apply for Optional Practical
                    Training (OPT), which allows them to work in the USA for up
                    to 12 months. Students from STEM fields may qualify for an
                    additional 24-month extension.
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
                  title: "Study in USA",
                },
                {
                  icon: "💼",
                  title: "Part-Time Work",
                },
                {
                  icon: "🚀",
                  title: "OPT / Full-Time Job",
                },
                {
                  icon: "🌟",
                  title: "Career Growth",
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

        <style jsx>{`
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

            <p className="mt-6 text-lg text-gray-600">
              Students who receive admission from a US university must apply for
              the F-1 Student Visa.
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
                "Receive admission from a US university",
                "Receive the I-20 form from the university",
                "Pay the SEVIS fee",
                "Complete the DS-160 visa application form",
                "Schedule and attend the visa interview",
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
            {/* glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>

            <div className="relative z-10">
              <p className="text-lg max-w-3xl mx-auto">
                Proper preparation and documentation are important for
                successful visa approval.
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
