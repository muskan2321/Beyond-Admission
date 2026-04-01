import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UniversityCardList from "./UniversityCardList";

export default function StudyGermany() {
  const [activeFaq, setActiveFaq] = useState(null);
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
        "Prepare for IELTS or German language (TestDaF/DSH) based on your target universities.",
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
      detail: "Submit applications through Uni-Assist or university portals and track deadlines carefully.",
    },
    {
      title: "Offer Letter",
      detail: "Receive and compare offers to choose the best university.",
    },
    {
      title: "Visa & Blocked Account",
      detail: "Apply for visa and open a blocked account for financial proof.",
    },
    {
      title: "Pre-Departure Services",
      detail:
        "Guidance for accommodation, health insurance, flight booking, and settling in Germany.",
    },
    {
      title: "Application Requirement",
      detail:
        "Ensure documents like transcripts, passport, language certificates, and financial proof are ready.",
    },
  ];

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-white font-[Inter]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study in Germany"
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
                Germany
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Low tuition fees & world-class engineering education
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Apply Now
                </button>
              </Link>

              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
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

      {/* tabs */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4">
        <a
          href="#why-germany"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why UG In Germany?
        </a>

        <a
          href="#popular-courses"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Popular Courses
        </a>

        <a
          href="#top-universities"
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

        {/* <a
          href="#visa"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Visa
        </a> */}
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
              Study UG in <span className="text-blue-600">Germany</span> for
              Indian Students
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Discover low-cost education, world-class engineering programs, and excellent career opportunities.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>

              <img
                src="/image/usa-bg.png"
                alt="Study in Germany"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="text-3xl font-bold text-blue-600">94%</p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-500">Students Placed</p>
                  <p className="text-xl font-semibold text-gray-800">10,000+</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Choose UG In Germany?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Germany is becoming a top destination for Indian students due to its low or no tuition fees, strong technical education, and high employability. Unlike many countries, public universities in Germany offer high-quality education at minimal cost, making it ideal for budget-conscious students.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  With a strong economy and focus on engineering and technology, Germany offers excellent career prospects for graduates.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "💰 Low or zero tuition fees",
                  "🎓 Globally recognized degrees",
                  "⚙️ Strong focus on engineering",
                  "💼 High job opportunities in Europe",
                  "🌍 International exposure",
                  "🏡 Pathway to Permanent Residency",
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

      {/* WHY STUDY GERMANY */}
      <section
        id="why-germany"
        className="relative pt-4 pb-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden scroll-mt-24"
      >
        {/* Animated Background */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 blur-[130px] rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-sky-300/30 blur-[120px] rounded-full animate-float delay-4000"></div>

        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Study UG in <span className="text-blue-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Germany is becoming a top destination for Indian students due to its low or no tuition fees, strong technical education, and high employability.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Low or zero tuition fees
                </h3>
                <p className="mt-3 text-gray-600">
                  Public universities in Germany offer high-quality education at minimal cost or completely free, making it ideal for budget-conscious students.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">🎓</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Globally recognized degrees
                </h3>
                <p className="mt-3 text-gray-600">
                  German degrees are respected worldwide, especially in engineering, technology, and sciences.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">⚙️</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Strong focus on engineering
                </h3>
                <p className="mt-3 text-gray-600">
                  Germany is renowned for its excellence in engineering, technical education, and research opportunities.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">💼</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  High job opportunities in Europe
                </h3>
                <p className="mt-3 text-gray-600">
                  Germany has a strong economy with high demand for skilled professionals across various industries.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  International exposure
                </h3>
                <p className="mt-3 text-gray-600">
                  Study in the heart of Europe with students from across the world and build a strong global network.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">🏡</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Pathway to Permanent Residency
                </h3>
                <p className="mt-3 text-gray-600">
                  Germany offers clear pathways to permanent residency for international graduates.
                </p>
              </div>
            </div>

          </div>
        </div>

        <style jsx>{`
    @keyframes float {
      0% { transform: translateY(0px) translateX(0px); }
      50% { transform: translateY(-40px) translateX(20px); }
      100% { transform: translateY(0px) translateX(0px); }
    }

    .animate-float {
      animation: float 14s ease-in-out infinite;
    }

    .delay-2000 { animation-delay: 2s; }
    .delay-4000 { animation-delay: 4s; }
  `}</style>
      </section>

      {/* POPULAR COURSES */}
      <section
        id="popular-courses"
        className="pt-4 pb-16 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden scroll-mt-24"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-6">
            Popular UG Courses in Germany
          </h2>

          <p className="text-center text-gray-600 mb-16">
            Choose from a wide range of specialized undergraduate programs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Mechanical Engineering",
                img: "/image/Engineering & Technology.webp",
                icon: "⚙️",
                salary: "€45,000+ Avg Starting Salary",
                duration: "3-4 Years",
                courses: [
                  "Mechanical Engineering",
                  "Automotive Engineering",
                  "Mechatronics",
                  "Production Engineering",
                ],
              },
              {
                title: "Computer Science",
                img: "/image/Business & Management.avif",
                icon: "💻",
                salary: "€50,000+ Avg Starting Salary",
                duration: "3 Years",
                courses: [
                  "Computer Science",
                  "Software Engineering",
                  "Artificial Intelligence",
                  "Data Science",
                ],
              },
              {
                title: "Civil Engineering",
                img: "/image/Undergraduate Programs.webp",
                icon: "🏗️",
                salary: "€42,000+ Avg Starting Salary",
                duration: "3-4 Years",
                courses: [
                  "Civil Engineering",
                  "Structural Engineering",
                  "Construction Management",
                  "Transportation Engineering",
                ],
              },
              {
                title: "Electrical Engineering",
                img: "/image/Business & Management.avif",
                icon: "⚡",
                salary: "€48,000+ Avg Starting Salary",
                duration: "3-4 Years",
                courses: [
                  "Electrical Engineering",
                  "Power Systems",
                  "Electronics",
                  "Telecommunications",
                ],
              },
              {
                title: "Natural Sciences",
                img: "/image/Engineering & Technology.webp",
                icon: "🧬",
                salary: "€40,000+ Avg Starting Salary",
                duration: "3 Years",
                courses: [
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "Biotechnology",
                ],
              },
              {
                title: "Business Administration",
                img: "/image/Undergraduate Programs.webp",
                icon: "💼",
                salary: "€42,000+ Avg Starting Salary",
                duration: "3 Years",
                courses: [
                  "Business Administration",
                  "Management",
                  "Marketing",
                  "International Business",
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
      <section
        id="top-universities"
        className="pt-0 pb-28 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden scroll-mt-24"
      >
        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-green-300/30 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Top Universities in Germany and Their{" "}
              <span className="text-blue-600">Fees</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Explore top universities and their estimated undergraduate tuition fees.
            </p>
          </div>

          {/* Table */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 shadow-2xl">
            <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80">

              {/* Header */}
              <div className="grid grid-cols-3 bg-blue-600 text-white font-semibold text-lg">
                <div className="p-6">University</div>
                <div className="p-6 text-center">UG Fees (International)</div>
                <div className="p-6 text-center">QS Ranking</div>
              </div>

              {/* Rows */}
              {[
                {
                  name: "Technical University of Munich",
                  ug: "€0 – €1,500 / semester",
                  ranking: "#37",
                },
                {
                  name: "Ludwig Maximilian University of Munich",
                  ug: "€0 – €1,500 / semester",
                  ranking: "#54",
                },
                {
                  name: "Heidelberg University",
                  ug: "€0 – €1,500 / semester",
                  ranking: "#65",
                },
                {
                  name: "RWTH Aachen University",
                  ug: "€0 – €1,500 / semester",
                  ranking: "#106",
                },
                {
                  name: "University of Stuttgart",
                  ug: "€0 – €1,500 / semester",
                  ranking: "#279",
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

                  {/* UG Fees */}
                  <div className="p-6 text-center">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-600">
                      {row.ug}
                    </span>
                  </div>

                  {/* Ranking */}
                  <div className="p-6 text-center">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-700">
                      {row.ranking}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF UG DEGREES */}
      <section className="relative pt-10 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden scroll-mt-24">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Types of UG Degrees in <span className="text-blue-600">Germany</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Choose from a variety of undergraduate programs tailored to your career goals
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* BSc Card */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl text-3xl shadow-lg group-hover:scale-110 transition duration-300">
                  🧪
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Science</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">BSc</p>
                <p className="text-gray-600 text-sm">STEM courses including Computer Science, Engineering, Mathematics, Physics, and Natural Sciences</p>
              </div>
            </div>

            {/* BEng Card */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl text-3xl shadow-lg group-hover:scale-110 transition duration-300">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Engineering</h3>
                <p className="text-sm text-green-600 font-semibold mb-3">BEng</p>
                <p className="text-gray-600 text-sm">Specialized engineering programs including Mechanical, Civil, Electrical, Automotive, and Aerospace Engineering</p>
              </div>
            </div>

            {/* BA Card */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl text-3xl shadow-lg group-hover:scale-110 transition duration-300">
                  🎭
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Arts</h3>
                <p className="text-sm text-purple-600 font-semibold mb-3">BA</p>
                <p className="text-gray-600 text-sm">Humanities & social sciences including Literature, History, Psychology, Sociology, and Languages</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              * Most undergraduate programs in Germany are 3 years in duration, with some programs like Engineering taking 3.5-4 years
            </p>
          </div>
        </div>
      </section>

      {/* Intakes */}
      <section
        id="intakes"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden scroll-mt-24"
      >
        {/* background glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes for UG in <span className="text-blue-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              German universities typically offer two major intakes for undergraduate programs.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Winter Intake */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-blue-700 mb-6 flex items-center gap-2">
                  📅 Winter Intake (Main)
                </h4>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✔ Applications Open: April – July</li>
                  <li>✔ Deadlines: July 15 (for most programs)</li>
                  <li>✔ Offer Letters: August – September</li>
                  <li>✔ Classes Begin: October</li>
                </ul>

                <div className="mt-5 text-xs text-gray-600 bg-blue-50 px-4 py-3 rounded-xl">
                  👉 Recommended preparation start: <b>1 year before intake</b>
                </div>
              </div>

              {/* Summer Intake */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-indigo-700 mb-6 flex items-center gap-2">
                  🌱 Summer Intake (Limited)
                </h4>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✔ Applications Open: October – January</li>
                  <li>✔ Deadlines: January 15</li>
                  <li>✔ Offer Letters: February – March</li>
                  <li>✔ Classes Begin: April</li>
                </ul>

                <div className="mt-5 text-xs text-gray-600 bg-indigo-50 px-4 py-3 rounded-xl">
                  👉 Recommended preparation start: <b>Early year before</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden scroll-mt-24">
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Application Timeline for <span className="text-blue-600">UG in Germany</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Follow this timeline to ensure a smooth application process
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 12 Months Before */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">
                  📅
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">12 Months Before</h3>
                <div className="w-16 h-1 bg-blue-500 mx-auto my-4 rounded-full"></div>
                <ul className="space-y-2 text-gray-600 text-sm text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">●</span>
                    <span>Start German/IELTS preparation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 8–10 Months Before */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">8–10 Months Before</h3>
                <div className="w-16 h-1 bg-green-500 mx-auto my-4 rounded-full"></div>
                <ul className="space-y-2 text-gray-600 text-sm text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">●</span>
                    <span>Apply via Uni-Assist</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 6–8 Months Before */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">
                  📝
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">6–8 Months Before</h3>
                <div className="w-16 h-1 bg-purple-500 mx-auto my-4 rounded-full"></div>
                <ul className="space-y-2 text-gray-600 text-sm text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">●</span>
                    <span>Receive admission</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3–5 Months Before */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">
                  ✈️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3–5 Months Before</h3>
                <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full"></div>
                <ul className="space-y-2 text-gray-600 text-sm text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    <span>Visa application</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Timeline Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* Important Deadlines */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                  📋
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Important Deadlines</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between items-center pb-2 border-b border-blue-200">
                  <span>Winter Intake (October)</span>
                  <span className="font-semibold text-blue-600">July 15</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-blue-200">
                  <span>Summer Intake (April)</span>
                  <span className="font-semibold text-blue-600">January 15</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Uni-Assist Processing</span>
                  <span className="font-semibold text-blue-600">4-6 weeks</span>
                </li>
              </ul>
            </div>

            {/* Application Tips */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                  ⚡
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Application Tips</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Most applications go through Uni-Assist. Submit early as processing can take 4-6 weeks.
              </p>
              <div className="mt-3 p-3 bg-white/60 rounded-lg">
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Tip:</span> Start your application process at least 12 months before your intended intake to ensure all documents are ready.
                </p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-10 text-center shadow-2xl overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>

            <div className="relative z-10">
              <p className="text-lg max-w-3xl mx-auto">
                💡 <span className="font-semibold">Pro Tip:</span> Create a checklist and track all deadlines. Starting early gives you enough time to prepare strong applications, learn German, and gather all required documents.
              </p>
            </div>
          </div>
        </div>

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
  `}</style>
      </section>

      {/* our-process */}
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
                  className={`flex items-center mb-14 ${isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                  {/* Content Box */}
                  <div className="w-1/2 px-4">
                    <div
                      className={`rounded-2xl px-6 py-5 text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl
                    ${index % 3 === 0
                          ? "bg-blue-400"
                          : index % 3 === 1
                            ? "bg-blue-600"
                            : "bg-blue-800"
                        }`}
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
        className="pt-0 pb-10 bg-gradient-to-b from-white via-blue-50 to-white scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Container */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold">
              Eligibility Criteria for UG in Germany
            </h2>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              To apply for undergraduate programs in Germany, students must meet the following requirements:
            </p>

            {/* Tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setTab("academic")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${tab === "academic"
                  ? "bg-white text-blue-600 shadow-xl scale-105"
                  : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                🎓 Academic Requirements
              </button>

              <button
                onClick={() => setTab("language")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${tab === "language"
                  ? "bg-white text-blue-600 shadow-xl scale-105"
                  : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                📝 Entrance Exams
              </button>

              <button
                onClick={() => setTab("tests")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${tab === "tests"
                  ? "bg-white text-blue-600 shadow-xl scale-105"
                  : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                🌎 Language 
              </button>

              <button
                onClick={() => setTab("documents")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${tab === "documents"
                  ? "bg-white text-blue-600 shadow-xl scale-105"
                  : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                📄 Required Documents
              </button>
            </div>

            {/* Content Card */}
            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {/* Academic Requirements */}
              {tab === "academic" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    src="/image/academic-qualification.jpg"
                    className="rounded-2xl shadow-lg w-full h-60 object-cover"
                    alt="Academic Requirements"
                  />

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Academic Requirements
                    </h3>

                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg">●</span>
                        <span>Completion of 12th grade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 text-lg">●</span>
                        <span>Often requires 1 year of Studienkolleg (foundation course)</span>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-blue-700">Note:</span> Indian students with 12th grade may need to complete a Studienkolleg foundation course before starting their undergraduate studies.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Entrance Exams */}
              {tab === "language" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Entrance Exams
                  </h3>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">No SAT required</p>
                          <p className="text-sm text-gray-600">German universities do not require SAT scores for undergraduate admissions</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Language Requirements */}
              {tab === "tests" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Language Requirements
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🇩🇪</span>
                        <h4 className="text-xl font-bold text-gray-800">German-taught Programs</h4>
                      </div>
                      <p className="text-3xl font-bold text-blue-600 mb-2">B1 – C1</p>
                      <p className="text-sm text-gray-600">TestDaF or DSH certification required</p>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🎓</span>
                        <h4 className="text-xl font-bold text-gray-800">English-taught Programs</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>● IELTS: 6.0 – 6.5</li>
                        <li>● TOEFL iBT: 80 – 90</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-yellow-700">Note:</span> Most undergraduate programs in Germany are taught in German. English-taught programs are limited.
                    </p>
                  </div>
                </div>
              )}

              {/* Required Documents */}
              {tab === "documents" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Required Documents
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "SOP / Personal Statement",
                        icon: "📝",
                        desc: "A compelling essay explaining your motivation, goals, and why you chose the program",
                      },
                      {
                        title: "Academic Transcripts",
                        icon: "📊",
                        desc: "Mark sheets from 10th and 12th grade, along with any other relevant qualifications",
                      },
                      {
                        title: "Language Certificate",
                        icon: "🗣️",
                        desc: "German (TestDaF/DSH) or IELTS/TOEFL score depending on program language",
                      },
                      {
                        title: "CV/Resume",
                        icon: "📄",
                        desc: "Detailed CV highlighting academic achievements and extracurricular activities",
                      },
                      {
                        title: "Passport Copy",
                        icon: "🛂",
                        desc: "Valid passport with at least 6 months validity beyond your intended stay",
                      },

                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition duration-300"
                      >
                        <div className="text-2xl">{doc.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{doc.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{doc.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-100 rounded-xl">
                    <p className="text-sm text-gray-700 text-center">
                      ⚠️ <span className="font-semibold">Important:</span> Submit your application through Uni-Assist for most universities. Processing takes 4-6 weeks, so apply early.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* COST */}
      <section
        id="fees"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden scroll-mt-24"
      >
        {/* Animated Background Lights */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cost of Studying UG in{" "}
              <span className="text-blue-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Understanding the cost helps in better financial planning.
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
                      Public Universities
                    </h4>

                    <p className="mt-3 text-blue-600 font-bold text-2xl">
                      Free or €0–€1,500
                    </p>

                    <p className="text-gray-500 text-sm mt-1">per year</p>
                  </div>

                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 rounded-t-xl"></div>

                    <h4 className="text-lg font-semibold text-gray-900">
                      Private Universities
                    </h4>

                    <p className="mt-3 text-indigo-600 font-bold text-2xl">
                      €10,000 – €20,000
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
                  Students typically spend around €10,000 – €12,000 per
                  year on accommodation, food, transportation, and personal
                  expenses.
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

      {/* Cost of Living in Germany */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Cost of Living in <span className="text-blue-600">Germany</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Estimated expenses for international students in Germany
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
                title: "Annual Tuition Fee (Public)",
                cost: "€0 – €1,500 per year",
                extra: [
                  "Semester contribution includes public transport pass",
                  "Depends upon the state",
                ],
              },
              {
                title: "Accommodation",
                cost: "€4,000 - €7,000 per year",
                extra: [
                  "Student dormitories or private apartments",
                  "City-dependent (Munich is most expensive)",
                ],
              },
              {
                title: "Food & Groceries",
                cost: "€2,500 - €3,500 per year",
                extra: ["Cooking at home saves money", "Student discounts available"],
              },
              {
                title: "Health Insurance",
                cost: "€1,100 - €1,300 per year",
                extra: [
                  "Mandatory for all students",
                  "Public insurance is cheaper",
                ],
              },
              {
                title: "Public Transportation",
                cost: "€500 - €1,000 per year",
                extra: ["Semester ticket included in fees", "Discounted student rates"],
              },
              {
                title: "Blocked Account Requirement",
                cost: "€11,208 per year",
                extra: [
                  "Proof of financial resources for visa",
                  "Monthly withdrawal limit",
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

      {/* scholarships */}
      <section
        id="scholarships"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden scroll-mt-24"
      >
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Scholarships for Indian Students in
              <span className="text-blue-600"> Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Various scholarships are available to support international students financially.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DAAD Scholarships */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">
                  🇩🇪
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  DAAD Scholarships
                </h3>
                <div className="mt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Prestigious scholarships funded by the German Academic Exchange Service for outstanding international students.
                  </p>
                </div>
              </div>
            </div>

            {/* Merit-based Scholarships */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">
                  🏆
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition">
                  Merit-based Scholarships
                </h3>
                <div className="mt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Awarded to students with exceptional academic achievements, outstanding grades, and excellent performance.
                  </p>
                </div>
              </div>
            </div>

            {/* University-specific Funding */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">
                  🎓
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition">
                  University-specific Funding
                </h3>
                <div className="mt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Scholarships and funding opportunities offered by individual German universities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-20 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>

            <div className="relative z-10">
              <p className="text-lg max-w-3xl mx-auto">
                Scholarships can significantly reduce the cost of studying in Germany and help students focus on their academic journey.
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

      {/* Work Opportunities */}
      <section
        id="jobs"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden scroll-mt-24"
      >
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Work Opportunities During & After Study in
              <span className="text-blue-600"> Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              International students in Germany can work during their studies and also explore post-study work opportunities after graduation.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            {/* During Study */}
            <div className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 hover:scale-[1.02] transition duration-300">
              <div className="bg-white rounded-3xl p-10 shadow-xl h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 via-indigo-100/20 to-sky-100/30"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl text-2xl shadow-lg group-hover:scale-110 transition">
                    💼
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    During Study
                  </h3>
                  <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-300"></div>
                  <p className="mt-6 text-gray-600 leading-relaxed">
                    Students can work{" "}
                    <span className="font-semibold">120 full days or 240 half days per year</span>{" "}
                    during their academic session.
                  </p>
                </div>
              </div>
            </div>

            {/* After Study */}
            <div className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 hover:scale-[1.02] transition duration-300">
              <div className="bg-white rounded-3xl p-10 shadow-xl h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-100/40 via-blue-100/20 to-purple-100/30"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl text-2xl shadow-lg group-hover:scale-110 transition">
                    🚀
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                    After UG
                  </h3>
                  <div className="mt-3 w-12 h-1 bg-indigo-600 rounded-full group-hover:w-20 transition-all duration-300"></div>
                  <p className="mt-6 text-gray-600 leading-relaxed">
                    After graduation, students may be eligible for{" "}
                    <span className="font-semibold">18-month job-seeking visa</span>
                    , allowing them to find employment in Germany.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 opacity-40"></div>
            <div className="hidden md:block absolute top-8 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-progress"></div>

            <div className="grid md:grid-cols-4 gap-10 text-center relative z-10">
              {[
                {
                  icon: "🎓",
                  title: "Study in Germany",
                },
                {
                  icon: "💼",
                  title: "120 full days/year",
                },
                {
                  icon: "🚀",
                  title: "18-month job-seeking visa",
                },
                {
                  icon: "🌟",
                  title: "Career Growth",
                },
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

      {/* Job Opportunities */}
      <section
        id="jobs"
        className="relative pt-10 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Job Opportunities & Salary After UG in
              <span className="text-blue-600"> Germany</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Germany offers strong career opportunities for international graduates.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10">
              Top Recruiters
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
              <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center hover:-translate-y-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2560px-BMW.svg.png"
                  alt="BMW"
                  className="h-10 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center hover:-translate-y-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens_AG_logo.svg/2560px-Siemens_AG_logo.svg.png"
                  alt="Siemens"
                  className="h-8 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center hover:-translate-y-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bosch-logo.svg/2560px-Bosch-logo.svg.png"
                  alt="Bosch"
                  className="h-8 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center hover:-translate-y-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Volkswagen_logo_2019.svg/2560px-Volkswagen_logo_2019.svg.png"
                  alt="Volkswagen"
                  className="h-8 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-2xl max-w-xl w-full">
              <div className="bg-white rounded-3xl p-10 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Average Starting Salary After UG
                </h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  €35,000 – €55,000
                </p>
                <p className="text-gray-500 mt-2">per year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden scroll-mt-24">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose Us for <span className="text-blue-600">UG in Germany?</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              At Beyond Education, we provide complete support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">University Shortlisting</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">Expert guidance to shortlist the best universities based on your profile, budget, and career goals.</p>
              </div>
            </div>

            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition">SOP Guidance</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">Professional help to craft compelling Statements of Purpose that stand out.</p>
              </div>
            </div>

            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition">German/IELTS Coaching</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">Comprehensive language preparation to help you achieve your target scores.</p>
              </div>
            </div>

            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">📄</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition">Application Assistance</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">End-to-end assistance with Uni-Assist applications, document preparation, and deadline tracking.</p>
              </div>
            </div>

            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cyan-600 transition">Blocked Account Guidance</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">Expert guidance on opening a blocked account for German visa requirements.</p>
              </div>
            </div>

            <div className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-full text-2xl shadow-lg group-hover:scale-110 transition">✈️</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600 transition">Visa Support</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">Complete support for German student visa application, documentation, and interview preparation.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-10 text-center shadow-2xl overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>
            <div className="relative z-10">
              <p className="text-lg max-w-2xl mx-auto">🎓 <span className="font-semibold">Your Success is Our Priority</span> - With years of experience and a dedicated team, we ensure a smooth and successful study abroad journey.</p>
              <div className="mt-6 flex justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">✓ 98% Visa Success Rate</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">✓ 5000+ Students Placed</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">✓ 100+ University Partners</span>
              </div>
            </div>
          </div>
        </div>

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
  `}</style>
      </section>

      {/* visa */}
      <section
        id="visa"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden scroll-mt-24"
      >
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Visa Process for <span className="text-blue-600">UG in Germany</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Students require a German Student Visa to pursue undergraduate studies in Germany.
            </p>
          </div>

          <div className="relative mt-20">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-[3px] bg-blue-200"></div>
            <div className="hidden lg:block absolute top-8 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 animate-progress"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {[
                "University admission letter",
                "Open blocked account (~€11,208)",
                "Book visa appointment",
                "Submit documents",
                "Attend interview",
              ].map((step, i) => (
                <div key={i} className="group relative p-6 bg-white/80 backdrop-blur-lg rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-lg font-bold shadow-lg group-hover:scale-110 transition">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute inset-0 w-14 h-14 mx-auto rounded-full border-2 border-blue-400 opacity-30 animate-ping"></div>
                  <p className="mt-4 text-gray-700 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>
            <div className="relative z-10">
              <p className="text-lg max-w-3xl mx-auto">💡 <span className="font-semibold">Important:</span> Apply for your student visa at least 3 months before your course start date. The blocked account must be opened with a recognized provider.</p>
              <div className="mt-6 flex justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">✓ Apply early</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">✓ Blocked account ready</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">✓ Health insurance</span>
              </div>
            </div>
          </div>
        </div>

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

      {/* Why Choose Beyond Admission */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/40 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/40 blur-[150px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose <span className="text-blue-600">Beyond Admission</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">We guide you at every step — from choosing the right course to securing your visa.</p>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Our structured approach ensures a smooth and stress-free journey so you can focus on achieving your global education goals.</p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>

            {[
              { icon: "🎯", title: "Career counselling", desc: "Get personalized guidance to choose the right course and career path." },
              { icon: "🏫", title: "University shortlisting", desc: "We help you shortlist top universities based on your profile and goals." },
              { icon: "📝", title: "Application assistance", desc: "Complete support in SOP, LOR, and application submissions." },
              { icon: "💰", title: "Scholarship guidance", desc: "Explore scholarships to reduce your overall study cost." },
              { icon: "📄", title: "Visa documentation support", desc: "Step-by-step help to ensure a smooth visa approval process." },
              { icon: "✈", title: "Pre-departure guidance", desc: "Guidance for accommodation, travel, and settling abroad." },
            ].map((step, i) => (
              <div key={i} className="relative mb-12 grid grid-cols-2 items-center">
                {i % 2 === 0 ? (
                  <div className="flex justify-end pr-8">
                    <div className="group w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600">
                      <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-5 shadow-xl flex items-start gap-4 transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md group-hover:rotate-6 transition">{step.icon}</div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : <div></div>}

                {i % 2 !== 0 ? (
                  <div className="flex justify-start pl-8">
                    <div className="group w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600">
                      <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-5 shadow-xl flex items-start gap-4 transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-md group-hover:rotate-6 transition">{step.icon}</div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : <div></div>}

                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg border-2 border-white"></div>
              </div>
            ))}
          </div>

          <div className="mt-20 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-10 text-center shadow-xl overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>
            <div className="relative z-10">
              <p className="text-lg max-w-2xl mx-auto">Our expert counsellors support you throughout the entire admission journey — from start to finish.</p>
            </div>
          </div>
        </div>

        <style jsx>{`
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-30px); }
      100% { transform: translateY(0px); }
    }

    .animate-float {
      animation: float 12s ease-in-out infinite;
    }

    .delay-2000 {
      animation-delay: 2s;
    }
  `}</style>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">Everything you need to know about studying UG in Germany</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              {[
                { q: "Is UG in Germany free?", a: "Yes, most public universities in Germany have no tuition fees. Students only pay a semester contribution (€150-€500) which includes public transport pass." },
                { q: "Do I need German language?", a: "Yes, for most undergraduate programs. German-taught programs require B1-C1 level proficiency. English-taught programs are limited." },
                { q: "What is Studienkolleg?", a: "A foundation course required for Indian students who have completed 12th grade. It prepares students academically for German university studies." },
                { q: "Can I work while studying?", a: "Yes, international students can work 120 full days or 240 half days per year during their studies." }
              ].map((item, i) => (
                <div key={i} className={`group rounded-2xl border transition duration-300 ${activeFaq === i ? "bg-blue-600 text-white shadow-xl" : "bg-white hover:shadow-lg"}`}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left">
                    <span className="text-lg font-semibold">{item.q}</span>
                    <span className={`text-xl transition duration-300 ${activeFaq === i ? "rotate-45 text-white" : "text-blue-600"}`}>+</span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-500 ${activeFaq === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className={`${activeFaq === i ? "text-white/90" : "text-gray-600"}`}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-1xl">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Students" className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-200" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4">
                  <p className="font-semibold text-gray-800">🎓 Study in Germany</p>
                  <p className="text-sm text-gray-500">Get access to top universities & global opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pt-6 pb-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/image/Canada-bg.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Book Free Study Abroad Consultation</h2>
            <p className="mt-6 text-lg opacity-90">If you are planning to study in Germany, our expert counsellors can guide you through the entire process.</p>
            <p className="mt-4 text-lg opacity-90">Fill out the consultation form to receive personalized guidance on universities, courses, scholarships, and visa procedures.</p>
            <div className="mt-10 flex justify-center gap-6 flex-wrap">
              <Link to="/contact" className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 inline-block">Apply Now</Link>
              <button className="px-10 py-4 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-700 hover:scale-105 transition duration-300">Free Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}