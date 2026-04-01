import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UniversityCardList from "./UniversityCardList";

export default function MSUSA() {
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
     "University of Oxford",
     "University of Cambridge",
     "Imperial College London",
     "UCL",
     "University of Edinburgh",
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
              Study MS in{" "}
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
         {/* RIGHT SIDE FLOATING CARD */}
                        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-20">
                          <UniversityCardList
                            title="USA"
                            universities={universities}
                            onApplyClick={() => alert("Popup Open")}
                          />
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
          href="#why-usa"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why MS In USA?
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
          to="/study-usa"
          className="px-6 py-2 bg-yellow-400 rounded-full hover:bg-blue-300"
        >
          Study In USA
        </Link>

        <Link
          to="/mba-usa"
          className="px-6 py-2 bg-yellow-400 rounded-full hover:bg-blue-300"
        >
          MBA In USA
        </Link>

        <Link
          to="/ug-usa"
          className="px-6 py-2 bg-yellow-400 rounded-full hover:bg-blue-300"
        >
          UG In USA
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
              Study MS in <span className="text-blue-600">USA</span> for Indian
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
                  Why Choose MS In USA?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  The United States remains the top destination for Indian
                  students pursuing a Master of Science (MS) due to its
                  world-class education system, research opportunities, and
                  global career prospects.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  With over 1 million international students, the USA offers
                  unmatched exposure, flexibility, and innovation-driven
                  learning.
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
              Why Study MS in <span className="text-blue-600">USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Studying in the United States offers numerous benefits for
              international students.
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
                  Globally Recognized Universities
                </h3>

                <p className="mt-3 text-gray-600">
                  The USA is home to many of the world’s top universities that
                  consistently rank among the best globally.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-yellow-200 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
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

            <div className="group relative p-8 rounded-3xl bg-yellow-200 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
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

            <div className="group relative p-8 rounded-3xl bg-yellow-200 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
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

            <div className="group relative p-8 rounded-3xl bg-yellow-200 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
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

            <div className="group relative p-8 rounded-3xl bg-yellow-200 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
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
          <h2 className="text-4xl font-bold text-center mb-6">
            Popular MS Specializations{" "}
            <span className="text-blue-600">in USA</span>
          </h2>

          <p className="text-center text-gray-600 mb-16">
            Choosing the right specialization is crucial for career growth.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Technology & AI",
                img: "/image/Engineering & Technology.webp",
                icon: "💻",
                salary: "$90,000+ Avg Salary",
                duration: "2 Years",
                courses: [
                  "Computer Science (CS)",
                  "Data Science & Analytics",
                  "Artificial Intelligence & Machine Learning",
                  "Cybersecurity & Cloud Computing",
                ],
              },
              {
                title: "Engineering Fields",
                img: "/image/Undergraduate Programs.webp",
                icon: "⚙️",
                salary: "$85,000+ Avg Salary",
                duration: "2 Years",
                courses: [
                  "Mechanical Engineering",
                  "Civil Engineering",
                  "Electrical Engineering",
                ],
              },
              {
                title: "Business & Life Sciences",
                img: "/image/Business & Management.avif",
                icon: "💼",
                salary: "$80,000+ Avg Salary",
                duration: "1-2 Years",
                courses: ["Business Analytics", "Biotechnology"],
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

      {/* INTAKES */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes MS in{" "}
              <span className="text-blue-600">USA Universities</span>
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
                  📅 Fall 2027 Intake Timeline
                </h4>

                <ul className="space-y-3 text-black-700 text-md">
                  <li>
                    ✔ Applications Open Period:{" "}
                    <span className="font-bold">Nov – May 2026</span>
                  </li>

                  <li>
                    ✔ Offer Letters:{" "}
                    <span className="font-bold">Jan 2026 – May/June 2026</span>
                  </li>
                  <li>
                    ✔ Classes Begin:{" "}
                    <span className="font-bold">Aug / Sep 2027</span>
                  </li>
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

                <ul className="space-y-3 text-black-700 text-md">
                  <li>
                    ✔ Applications Open Period:{" "}
                    <span className="font-bold">May – Aug 2026</span>
                  </li>
                  <li>
                    ✔ Offer Letters:{" "}
                    <span className="font-bold">Oct – Nov 2026</span>
                  </li>
                  <li>
                    ✔ Classes Begin: <span className="font-bold">Jan 2027</span>
                  </li>
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
            {/* our process */}
            <div className="relative z-10 max-w-5xl mx-auto px-4">
              {/* Heading */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our <span className="text-blue-500">Process</span>
                </h2>

                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  A complete roadmap designed to guide you through every step of
                  your international education journey.
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
              Eligibility Criteria for MS in USA
            </h2>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              To apply for MS in the USA, Indian students must meet the
              following requirements:
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
                onClick={() => setTab("language")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "language"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                🌎 Exam Requirements
              </button>

              <button
                onClick={() => setTab("tests")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "tests"
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
                      <li>● Bachelor’s degree (3 or 4 years)</li>
                      <li>● Minimum GPA: 3.0+ (varies by university)</li>
                    </ul>
                  </div>
                </div>
              )}

              {tab === "language" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Exam Requirements
                  </h3>

                  <ul className="mt-4 space-y-3">
                    <li>● GRE (optional in some universities)</li>
                    <li>● English Proficiency:</li>
                    <li className="ml-4">○ IELTS: 6.5 – 7.5</li>
                    <li className="ml-4">○ TOEFL: 80 – 100+</li>
                  </ul>
                </div>
              )}

              {tab === "tests" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Required Documents
                  </h3>

                  <ul className="mt-4 space-y-3">
                    <li>● Statement of Purpose (SOP)</li>
                    <li>● Letters of Recommendation (LORs)</li>
                    <li>● Academic Transcripts</li>
                    <li>● Resume/CV</li>
                    <li>● GRE/IELTS/TOEFL Scores</li>
                    <li>● Passport Copy</li>
                    <li>● Work Experience (if applicable)</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* COST */}

      {/* Cost of Living in USA */}

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
              Scholarships for Indian Students in
              <span className="text-blue-600"> USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Many universities and organizations offer scholarships to reduce
              financial burden.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {[
              {
                icon: "🎓",
                title: "Merit-based Scholarships",
                details:
                  "Awarded based on academic excellence, strong GPA, and overall student performance.",
              },
              {
                icon: "💰",
                title: "Need-based Financial Aid",
                details:
                  "Provided to students who demonstrate financial need to support their education expenses.",
              },
              {
                icon: "👨‍🏫",
                title: "Teaching Assistantships (TA)",
                details:
                  "Students assist professors with teaching duties and receive a stipend along with tuition benefits.",
              },
              {
                icon: "🔬",
                title: "Research Assistantships (RA)",
                details:
                  "Students work on research projects under faculty guidance and receive funding support.",
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

                    {/* Content always visible */}
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
              Job Opportunities & Salary After MS in
              <span className="text-blue-600"> USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The USA offers excellent job prospects after completing MS.
            </p>
          </div>

          {/* Recruiters Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10">
              Top Recruiters
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
              {[
                { name: "Google", logo: "/image/google-logo.webp" },
                { name: "Microsoft", logo: "/image/microsoft.png" },
                { name: "Amazon", logo: "/image/amazon.png" },
                { name: "Meta", logo: "/image/meta.avif" },
                { name: "Apple", logo: "/image/apple.png" },
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
                  Average Salary After MS
                </h3>

                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  $70,000 – $120,000
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
              Work Opportunities During & After Study in
              <span className="text-blue-600"> USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The USA offers excellent work opportunities during and after
              completing MS.
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
                  <ul className="mt-6 text-gray-600 space-y-3">
                    <li>● 20 hours/week part-time (on-campus)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* After Study */}
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
                    After MS
                  </h3>

                  {/* divider */}
                  <div className="mt-3 w-12 h-1 bg-indigo-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

                  {/* content */}
                  <ul className="mt-6 text-gray-600 space-y-3">
                    <li>
                      ● OPT (Optional Practical Training): Up to 12–36 months
                    </li>
                    <li>● STEM students get extended OPT (up to 3 years)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline (unchanged) */}
          <div className="mt-20 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 opacity-40"></div>
            <div className="hidden md:block absolute top-8 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-progress"></div>

            <div className="grid md:grid-cols-4 gap-10 text-center relative z-10">
              {[
                { icon: "🎓", title: "Study MS in USA" },
                { icon: "💼", title: "Part-Time Work" },
                { icon: "🚀", title: "OPT / Full-Time Job" },
                { icon: "🌟", title: "Career Growth" },
              ].map((step, i) => (
                <div key={i} className="group relative">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-2xl shadow-xl group-hover:scale-110 transition duration-300">
                    {step.icon}
                  </div>

                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-blue-400 opacity-40 animate-ping"></div>

                  <p className="mt-4 text-sm font-semibold text-gray-700">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animations (same) */}
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
