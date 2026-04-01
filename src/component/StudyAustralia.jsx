import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UniversityCardList from "./UniversityCardList";
export default function StudyAustralia() {
   const [tab, setTab] = useState("academic");
  const steps = [
    {
      title: "Profile Evaluation",
      detail:
        "Analyze academic background, achievements, extracurricular activities, and career goals to suggest the best-fit universities and programs. Personalized guidance helps in building a strong application strategy.",
    },
    {
      title: "Prepare Exams",
      detail:
        "Prepare for IELTS, TOEFL, GRE, or GMAT based on your target universities. Get expert guidance, mock tests, and strategies to achieve high scores and improve your chances of admission.",
    },
    {
      title: "Shortlist University",
      detail:
        "Select universities based on global ranking, tuition fees, scholarships, course curriculum, and future job opportunities. A balanced shortlist ensures higher chances of acceptance.",
    },
    {
      title: "Writing Process (CV, LOR, SOP, Essays)",
      detail:
        "Create strong and impactful documents including SOP, LOR, CV, and essays. Highlight your strengths, achievements, and goals effectively to stand out in competitive applications.",
    },
    {
      title: "Applying",
      detail:
        "Submit applications through official university portals with complete accuracy. Track deadlines, upload required documents, and ensure error-free submission for maximum success.",
    },
    {
      title: "Offer Letter",
      detail:
        "Receive admission offers from universities and compare them based on ranking, ROI, course value, and location to make the best decision for your future.",
    },
    {
      title: "Visa & Loan",
      detail:
        "Apply for student visa with proper documentation and guidance. Get assistance in arranging finances, education loans, and preparing for visa interviews confidently.",
    },
    {
      title: "Pre-Departure Services",
      detail:
        "Complete guidance for accommodation, forex exchange, flight booking, travel insurance, and essential packing tips to ensure a smooth transition abroad.",
    },
    {
      title: "Post-Departure Services",
      detail:
        "Our support continues even after you arrive abroad. We assist with airport pickup, accommodation, local orientation, and university onboarding to ensure a smooth and hassle-free transition.",
    },
  ];
const universities = [
  "University of Sydney",
  "University of Melbourne",
  "Australian National University",
  "University of Queensland",
  "Monash University",
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
                Australia
              </span>
            </h1>

            {/*  FIXED TEXT */}
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Australia is one of the most attractive destinations for
              international students due to its high-quality education system,
              modern campuses, and strong employment opportunities.
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
         {/* RIGHT SIDE FLOATING CARD */}
                        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-20">
                          <UniversityCardList
                            title="Australia"
                            universities={universities}
                            onApplyClick={() => alert("Popup Open")}
                          />
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

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4 pt-2">
        <Link
          to="/ms-australia"
          className="px-6 py-2 bg-yellow-400 rounded-full hover:bg-blue-300"
        >
          MS In Australia
        </Link>

        <Link
          to="/mba-australia"
          className="px-6 py-2 bg-yellow-400 rounded-full hover:bg-blue-300"
        >
          MBA In Australia
        </Link>

        <Link
          to="/ug-australia"
          className="px-6 py-2 bg-yellow-400 rounded-full hover:bg-blue-300"
        >
          UG In Australia
        </Link>
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
              Study in <span className="text-blue-600">Australia</span> for
              Indian Students
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Study in Australia – Universities, Courses, Fees & Visa Guide
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
                  Why Choose Australia
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Australia is one of the most attractive destinations for
                  international students due to its high-quality education
                  system, modern campuses, and strong employment opportunities.
                  Australian universities are known for innovation, research
                  excellence, and strong industry connections.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Students from all over the world choose Australia for its
                  welcoming environment, excellent quality of life, and globally
                  recognized degrees. Beyond Admission helps students secure
                  admissions in leading Australian universities by providing
                  complete guidance on applications, scholarships, and visa
                  procedures.
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
        className="relative pt-4 pb-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
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
              Why Study in <span className="text-blue-600">Australia</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Australia offers several benefits for international students.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            <div className="group relative p-8 rounded-3xl bg-yellow-200 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  🎓
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Globally Ranked Universities
                </h3>

                <p className="mt-3 text-gray-600">
                  Australia is home to several universities ranked among the
                  best in the world.
                </p>

                <p className="mt-4 font-semibold text-gray-800">
                  Some leading universities include:
                </p>

                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>● University of Melbourne</li>
                  <li>● University of Sydney</li>
                  <li>● Australian National University</li>
                </ul>
              </div>
            </div>

            {/* High Quality of Life */}
            <div className="group relative p-8 rounded-3xl bg-yellow-200 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  🌏
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  High Quality of Life
                </h3>

                <p className="mt-3 text-gray-600">
                  Australia offers a safe environment with modern infrastructure
                  and a multicultural society.
                </p>
              </div>
            </div>

            {/* Work Opportunities */}

            <div className="group relative p-8 rounded-3xl bg-yellow-200 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  💼
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Work Opportunities
                </h3>

                <p className="mt-3 text-gray-600">
                  Students can gain practical experience through part-time jobs
                  and internships while studying in Australia.
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
        className="pt-4 pb-10 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-16">
            Popular Courses in <span className="text-blue-500">Australia</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Engineering & Technology",
                img: "/image/Engineering & Technology.webp",
                icon: "⚙️",
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
                title: "Information Technology",
                img: "/image/Business & Management.avif",
                icon: "💻",
                salary: "$85,000+ Avg Salary",
                duration: "1-2 Years",
                courses: ["MBA", "Business Analytics", "Finance", "Marketing"],
              },
              {
                title: "Business and Management",
                img: "/image/Undergraduate Programs.webp",
                icon: "📊",
                salary: "$60,000+ Avg Salary",
                duration: "4 Years",
                courses: [
                  "Bachelor Computer Science",
                  "Bachelor Engineering",
                  "BBA",
                  "Bachelor Economics",
                ],
              },
              // {
              //   title: "Healthcare and Nursing",
              //   img: "/image/Undergraduate Programs.webp",
              //   icon: "🏥",
              //   salary: "$60,000+ Avg Salary",
              //   duration: "4 Years",
              //   courses: [
              //     "Bachelor Computer Science",
              //     "Bachelor Engineering",
              //     "BBA",
              //     "Bachelor Economics",
              //   ],
              // },
              // {
              //   title: "Environmental Sciences",
              //   img: "/image/Undergraduate Programs.webp",
              //   icon: "🌱",
              //   salary: "$60,000+ Avg Salary",
              //   duration: "4 Years",
              //   courses: [
              //     "Bachelor Computer Science",
              //     "Bachelor Engineering",
              //     "BBA",
              //     "Bachelor Economics",
              //   ],
              // },
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
        className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-green-300/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Top Universities in{" "}
              <span className="text-blue-600">Australia</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Explore top universities and their locations at a glance.
            </p>
          </div>

          {/* TABLE */}
          <div className="overflow-hidden border border-gray-400">
            {/* Header */}
            <div className="grid md:grid-cols-2 bg-yellow-500 text-white font-semibold">
              <div className="p-4 border-r border-gray-400 text-center text-black">
                UNIVERSITY NAME
              </div>
              <div className="p-4 text-center text-black">LOCATION</div>
            </div>

            {/* Rows */}
            {[
              {
                name: "University of Sydney",
                location: "Sydney, NSW",
              },
              {
                name: "University of Melbourne",
                location: "Melbourne, VIC",
              },
              {
                name: "Australian National University",
                location: "Canberra, ACT",
              },
              {
                name: "Monash University",
                location: "Melbourne, VIC",
              },
              {
                name: "University of Queensland",
                location: "Brisbane, QLD",
              },
              {
                name: "University of New South Wales",
                location: "Sydney, NSW",
              },
              {
                name: "University of Adelaide",
                location: "Adelaide, SA",
              },
              {
                name: "University of Western Australia",
                location: "Perth, WA",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 border-t border-gray-400 bg-gray-200"
              >
                {/* University */}
                <div className="p-4 border-r border-gray-400 font-semibold text-gray-900 text-center">
                  {row.name}
                </div>

                {/* Location */}
                <div className="p-4 text-gray-800 text-center">
                  {row.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTAKES IN AUSTRALIA */}
      <section
        id="intakes"
        className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes in <span className="text-blue-600">Australia</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Australian universities offer three major intakes.
            </p>
          </div>

          {/* Intake Cards */}
          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {/* February Intake */}
            <div className="relative p-10 rounded-3xl bg-yellow-200 border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Main Intake
              </div>

              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                February Intake
              </h3>

              <p className="mt-4 text-gray-600">
                The main intake with the maximum number of courses available in
                Australian universities.
              </p>
            </div>

            {/* July Intake */}
            <div className="p-10 rounded-3xl bg-yellow-200 border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">📚</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                July Intake
              </h3>

              <p className="mt-4 text-gray-600">
                A secondary intake with several undergraduate and postgraduate
                program options.
              </p>
            </div>

            {/* November Intake */}
            <div className="p-10 rounded-3xl bg-yellow-200 border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🌏</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                November Intake
              </h3>

              <p className="mt-4 text-gray-600">
                Limited programs available in selected universities.
              </p>
            </div>
          </div>

          {/* Timeline Banner */}
          <div className="mt-20 bg-blue-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Application Timeline</h3>

            <p className="mt-6 text-lg opacity-90">
              Students should begin their application process
              <span className="font-semibold"> 8–10 months </span>
              before the intake.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-500">Process</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A complete roadmap designed to guide you through every step of your
            international education journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 w-[3px] bg-gradient-to-b from-blue-200 via-blue-500 to-blue-800 h-full transform -translate-x-1/2 blur-[0.5px]"></div>

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
                    className={`relative rounded-2xl px-6 py-5 text-white shadow-xl transition-all duration-500 
              hover:scale-[1.04] hover:shadow-2xl backdrop-blur-lg border border-white/20

              ${
                index % 3 === 0
                  ? "bg-yellow-500"
                  : index % 3 === 1
                    ? "bg-yellow-500"
                    : "bg-yellow-500"
              }`}
                  >
                    {/* Glow Border Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 hover:opacity-100 transition duration-500"></div>

                    {/* Title */}
                    <h4 className="font-semibold text-black text-lg relative z-10">
                      {step.title}
                    </h4>

                    {/* Detail */}
                    <p className="text-md text-blue-900 opacity-90 mt-2 leading-relaxed relative z-10">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Step Circle */}
                <div className="relative z-10 group">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-full 
              border-4 border-blue-400 bg-white font-bold text-blue-600 shadow-lg
              transition duration-300 group-hover:scale-110 group-hover:shadow-blue-300"
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

      {/* ELIGIBILITY REQUIREMENTS */}
      <section
        id="eligibility"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Eligibility Requirements to Study in{" "}
              <span className="text-blue-600">Australia</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Students must meet academic and English language requirements.
            </p>
          </div>

          {/* Requirement Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* Academic Requirements */}
            <div className="p-10 rounded-3xl bg-yellow-200 border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Academic Requirements
              </h3>

              <p className="mt-4 text-gray-600">
                Students must meet the academic eligibility criteria required by
                Australian universities for their selected program.
              </p>
            </div>

            {/* English Language */}
            <div className="p-10 rounded-3xl bg-yellow-200 border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🌏</div>

              <h3 className="text-xl font-semibold text-gray-900">
                English Language Proficiency
              </h3>

              <p className="mt-4 text-gray-600">
                English proficiency tests include:
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● International English Language Testing System</li>
                <li>● Test of English as a Foreign Language</li>
              </ul>
            </div>
          </div>

          {/* Highlight Banner */}
          <div className="mt-20 bg-blue-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <p className="text-lg max-w-3xl mx-auto">
              Universities may have additional requirements depending on the
              course and level of study.
            </p>
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
              Cost of Studying in{" "}
              <span className="text-blue-600">Australia</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The cost of studying in the Australia depends on the university,
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
                <div className="text-4xl mb-4">🎓</div>

                <h3 className="text-2xl font-semibold text-gray-900">
                  Average Tuition Fees
                </h3>

                <p className="mt-6 text-gray-600">
                  Average tuition fees range from
                  <span className="font-semibold">
                    {" "}
                    AUD 20,000 to AUD 45,000{" "}
                  </span>
                  per year depending on the program.
                </p>
              </div>
            </div>

            {/* Living Expenses */}
            <div className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-indigo-200 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">
              {/* animated gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 opacity-0 group-hover:opacity-100 blur-sm"></div>

              <div className="relative bg-white/90 rounded-3xl p-8 z-10">
                <div className="text-4xl mb-4">🏠</div>

                <h3 className="text-2xl font-semibold text-gray-900">
                  Living Expenses
                </h3>

                <p className="mt-6 text-gray-600">
                  Living expenses are approximately
                </p>

                <div className="mt-8 bg-green-50 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-green-600">
                    AUD 21,000
                  </p>

                  <p className="text-gray-500 mt-1">per year</p>
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

      {/* fees */}
      <section className="pt-6 pb-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-10">
              Study in USA{" "}
              <span className="text-blue-600">Fee Structure 2026</span>
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-hidden border border-gray-400">
            {/* Header */}
            <div className="grid md:grid-cols-3 bg-yellow-500 text-black font-bold">
              <div className="p-4 border-r border-gray-400">PARTICULAR</div>
              <div className="p-4 border-r border-gray-400">
                APPROX. FEES IN (AUD)
              </div>
              <div className="p-4">APPROX. FEES IN (INR)</div>
            </div>

            {/* Section: Indian Students */}
            <div className="p-4 bg-gray-300 font-bold border-t border-gray-400">
              For Indian Students
            </div>

            {[
              {
                program: "Bachelor Degree",
                aud: "19,896 – 44,753 AUD",
                inr: "1,07,000 – 2,490,000 INR",
              },
              {
                program: "Master Degree",
                aud: "21,892 – 49,753 AUD",
                inr: "12,18,000 – 2,768,000 INR",
              },
              {
                program: "Doctoral Degree",
                aud: "17,892 – 41,774 AUD",
                inr: "9,96,000 – 2,325,000 INR",
              },
              {
                program: "Vocational Education and Training (VET)",
                aud: "3,970 – 21,869 AUD",
                inr: "2,21,000 – 1,218,000 INR",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid md:grid-cols-3 border-t border-gray-400 bg-gray-200"
              >
                <div className="p-4 border-r border-gray-400 font-bold">
                  {row.program}
                </div>
                <div className="p-4 border-r border-gray-400">{row.aud}</div>
                <div className="p-4">{row.inr}</div>
              </div>
            ))}

            {/* Section: International Students */}
            <div className="p-4 bg-gray-300 font-bold border-t border-gray-400">
              For International Students
            </div>

            {[
              {
                program: "Bachelor Degree",
                aud: "15,000 – 30,000 AUD",
                inr: "8,35,335 – 1,67,067 INR",
              },
              {
                program: "Master Degree",
                aud: "20,000 – 37,000 AUD",
                inr: "11,14,089 – 20,60,941 INR",
              },
              {
                program: "Doctoral Degree",
                aud: "14,000 – 37,000 AUD",
                inr: "7,79,815 – 20,60,941 INR",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid md:grid-cols-3 border-t border-gray-400 bg-gray-200"
              >
                <div className="p-4 border-r border-gray-400 font-bold">
                  {row.program}
                </div>
                <div className="p-4 border-r border-gray-400">{row.aud}</div>
                <div className="p-4">{row.inr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Living in Australia */}
      <section className="pt-4 pb-10 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Cost of <span className="text-blue-600">Living in Australia</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Estimated expenses for international students in the Australia can
              vary based on lifestyle and location.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-hidden border border-gray-400">
            {/* Header */}
            <div className="grid md:grid-cols-3 bg-yellow-500 text-black font-bold">
              <div className="p-4 border-r border-gray-400">EXPENSES</div>
              <div className="p-4 border-r border-gray-400">
                APPROX. COST IN (AUD)
              </div>
              <div className="p-4">APPROX. COST IN (INR)</div>
            </div>

            {/* Rows */}
            {[
              {
                expense: "Accommodation",
                aud: "300 – 900 AUD",
                inr: "16,711 – 50,146 INR",
              },
              {
                expense: "Transportation",
                aud: "50 – 100 AUD",
                inr: "2,785 – 5,571 INR",
              },
              {
                expense: "Food and Groceries",
                aud: "200 – 400 AUD",
                inr: "11,141 – 22,282 INR",
              },
              {
                expense: "Utilities & Internet",
                aud: "80 – 150 AUD",
                inr: "4,456 – 8,356 INR",
              },
              {
                expense: "Miscellaneous",
                aud: "80 – 200 AUD",
                inr: "4,456 – 11,141 INR",
              },
              {
                expense: "Health Insurance",
                aud: "40 AUD",
                inr: "2,228 INR",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid md:grid-cols-3 border-t border-gray-400 bg-gray-200"
              >
                {/* Expense */}
                <div className="p-4 border-r border-gray-400 font-bold">
                  {row.expense}
                </div>

                {/* AUD */}
                <div className="p-4 border-r border-gray-400">{row.aud}</div>

                {/* INR */}
                <div className="p-4">{row.inr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOLARSHIPS IN AUSTRALIA */}
      <section className="pt-7 pb-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-7">
            <h2 className="text-4xl font-bold text-gray-900">
              Scholarships in{" "}
              <span className="text-blue-600">
                USA for Indian Students 2026
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-black-700 mb-2 leading-relaxed">
            Australia offers several scholarships to Indian students wishing to
            pursue higher education at the undergraduate, master's, and doctoral
            levels. Australian institutions, the government, and private groups
            all offer scholarships that help students pay for tuition, living
            expenses, and other academic expenses. Details on Scholarships to
            Study in Australia are provided below.
          </p>

          {/* Table */}
          <div className="overflow-hidden border border-gray-400">
            {/* Header */}
            <div className="grid grid-cols-2 bg-yellow-500 text-black font-semibold">
              <div className="p-4 border-r border-gray-400">
                SCHOLARSHIP NAME
              </div>
              <div className="p-4">OFFERED BY</div>
            </div>

            {/* Government Scholarships */}
            <div className="col-span-2 p-4 bg-gray-300 font-bold border-t border-gray-400">
              Government-Funded Scholarships
            </div>

            {[
              {
                name: "Australia Awards Scholarships",
                by: "Australian Government",
              },
              {
                name: "Destination Australia Scholarships",
                by: "Australian Government",
              },
              {
                name: "Australian Government Research Training Program Scholarships",
                by: "Australian Government",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-t border-gray-400 bg-gray-200"
              >
                <div className="p-4 border-r border-gray-400 font-bold">
                  {item.name}
                </div>
                <div className="p-4">{item.by}</div>
              </div>
            ))}

            {/* University Scholarships */}
            <div className="col-span-2 p-4 bg-gray-300 font-bold border-t border-gray-400">
              University-Specific Scholarships
            </div>

            {[
              {
                name: "University of Adelaide Global Citizens Scholarships",
                by: "University of Adelaide",
              },
              {
                name: "University of Sydney International Scholarships (USydIS)",
                by: "University of Sydney",
              },
              {
                name: "Monash University Scholarships",
                by: "Monash University",
              },
              {
                name: "Melbourne Research Scholarships (MRS)",
                by: "University of Melbourne",
              },
              {
                name: "Macquarie University Scholarships",
                by: "Macquarie University",
              },
              {
                name: "UNSW Sydney International Student Award",
                by: "UNSW Sydney",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-t border-gray-400 bg-gray-200"
              >
                <div className="p-4 border-r border-gray-400 font-bold">
                  {item.name}
                </div>
                <div className="p-4">{item.by}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES & VISA - AUSTRALIA */}
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
              <span className="text-blue-600"> Australia</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              International students are allowed to work while studying in
              Australia.
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
                    Work Opportunities
                  </h3>

                  {/* divider */}
                  <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

                  {/* content */}
                  <p className="mt-6 text-gray-600 leading-relaxed">
                    Students in Australia can work up to{" "}
                    <span className="font-semibold">
                      48 hours per fortnight
                    </span>{" "}
                    during their studies.
                  </p>
                </div>
              </div>
            </div>

            {/* Australia Student Visa */}
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
                    📄
                  </div>

                  {/* title */}
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                    Australia Student Visa
                  </h3>

                  {/* divider */}
                  <div className="mt-3 w-12 h-1 bg-indigo-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

                  {/* content */}
                  <p className="mt-6 text-gray-600 leading-relaxed">
                    Students must apply for the{" "}
                    <span className="font-semibold">
                      Subclass 500 Student Visa
                    </span>{" "}
                    to study in Australia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20 relative">
            {/* line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 opacity-40"></div>

            {/* animated progress line */}
            <div className="hidden md:block absolute top-8 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-progress"></div>

            <div className="grid md:grid-cols-4 gap-10 text-center relative z-10">
              {[
                {
                  icon: "🎓",
                  title: "Study in Australia",
                },
                {
                  icon: "💼",
                  title: "Part-Time Work",
                },
                {
                  icon: "🚀",
                  title: "Post-Study Work",
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
              Student Visa for <span className="text-blue-600">Australia</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Students who receive admission from an Australian institution must
              apply for the Subclass 500 Student Visa.
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
                "Receive admission from an Australian university or college",
                "Receive the Confirmation of Enrolment (CoE)",
                "Arrange Overseas Student Health Cover (OSHC)",
                "Prepare and submit the Subclass 500 visa application",
                "Attend biometrics or health checks if required",
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
                successful visa approval in Australia.
              </p>
            </div>
          </div>
        </div>

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
            {/* Center Line Glow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>

            {[
              {
                icon: "🎯",
                title: "Career Counselling",
                detail:
                  "Get personalized career guidance based on your academic background, interests, and future goals. Our experts help you choose the right course and country for long-term success.",
              },
              {
                icon: "🏫",
                title: "University Shortlisting",
                detail:
                  "Shortlist top universities based on your profile, budget, preferred location, and career opportunities. We ensure a balanced list of safe, moderate, and dream universities.",
              },
              {
                icon: "📝",
                title: "Application Assistance",
                detail:
                  "Complete support for filling applications, document submission, and meeting deadlines. We ensure error-free applications to maximize your chances of acceptance.",
              },
              {
                icon: "💰",
                title: "Scholarship Guidance",
                detail:
                  "Explore and apply for scholarships, grants, and financial aid options. Our team helps you reduce your overall study cost with the best funding opportunities.",
              },
              {
                icon: "📄",
                title: "Visa Documentation Support",
                detail:
                  "End-to-end assistance for visa filing including documentation, SOP preparation, and mock interviews to ensure a smooth and successful visa approval process.",
              },
              {
                icon: "✈",
                title: "Pre-Departure Guidance",
                detail:
                  "Complete guidance on accommodation, forex exchange, travel arrangements, packing essentials, and settling abroad to make your transition smooth and stress-free.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative mb-12 grid grid-cols-2 items-center"
              >
                {/* LEFT SIDE */}
                {i % 2 === 0 ? (
                  <div className="flex justify-end pr-8">
                    <div className="group w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600">
                      {/* Glass Card */}
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        {/* Top Row */}
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md group-hover:rotate-6 transition duration-300">
                            {step.icon}
                          </div>

                          <p className="text-lg font-semibold text-gray-800">
                            {step.title}
                          </p>
                        </div>

                        {/* Detail */}
                        <p className="text-md text-gray-600 leading-relaxed">
                          {step.detail}
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
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        {/* Top Row */}
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-md group-hover:rotate-6 transition duration-300">
                            {step.icon}
                          </div>

                          <p className="text-lg font-semibold text-gray-800">
                            {step.title}
                          </p>
                        </div>

                        {/* Detail */}
                        <p className="text-md text-gray-600 leading-relaxed">
                          {step.detail}
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

          {/* Bottom Highlight */}
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

        {/* Animation */}
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
