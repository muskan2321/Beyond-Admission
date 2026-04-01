import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const StudyUGUSA = () => {
  const [tab, setTab] = useState("academic");
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
    const faqs = [
      {
        q: "Can I study in USA after 12th from India?",
        a: "Yes, Indian students can apply for UG programs directly after completing 12th.",
      },
      {
        q: "Is SAT compulsory for UG in USA?",
        a: "No, many universities are test-optional.",
      },
      {
        q: "How much percentage is required for UG in USA?",
        a: "Generally, 60%–85% depending on university ranking.",
      },
      {
        q: "Is studying UG in USA worth it?",
        a: "Yes, due to global exposure, flexible education, and strong career prospects.",
      },
    ];
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study UG in USA"
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
            {/* Badge */}
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
              🎓 Undergraduate Programs • USA
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Study{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                UG in USA
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Explore world-class undergraduate education, flexible learning,
              and global career opportunities after 12th.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Apply Now 🚀
                </button>
              </Link>

              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                Free Counselling
              </button>
            </div>
          </div>
        </div>

        {/* ANIMATIONS */}
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
      {/* tabs section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4">
        <a
          href="#why-usa"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why UG In USA?
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

        {/* <a
          href="#fees"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Fees & Expenses
        </a> */}

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
              Study UG in <span className="text-blue-600">USA</span> for Indian
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
                  Why Choose UG In USA?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  The United States is home to some of the top-ranked
                  universities in the world, offering high-quality education,
                  advanced infrastructure, and globally recognized degrees.
                  Focus on hands-on learning, research projects, internships,
                  and real-world exposure ensures students gain practical skills
                  along with theoretical knowledge.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Study alongside students from diverse cultures, helping build
                  international networks and improving communication and
                  adaptability skills.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "World-Class Education",
                  "Flexible Education System",
                  "Practical Learning Approach",
                  "Strong Career Opportunities",
                  "Wide Range of Programs",
                  "Advanced Facilities & Faculty",
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
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-8 px-20 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
                >
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
              Why Study UG in <span className="text-blue-600">USA</span>
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
      {/* POPULAR UG COURSES */}
      <section
        id="Popular Courses"
        className="pt-4 pb-16 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-6">
            Popular UG Courses in USA
          </h2>

          <p className="text-center text-gray-600 mb-16">
            Choose from a wide range of undergraduate programs based on your
            interests.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Computing & AI",
                img: "/image/Engineering & Technology.webp", // Replace with your actual image path
                icon: "💻",
                salary: "$75,000+ Avg Starting Salary",
                duration: "4 Years",
                courses: [
                  "Computer Science",
                  "Artificial Intelligence & Data Science",
                ],
              },
              {
                title: "Business & Finance",
                img: "/image/Business & Management.avif", // Replace with your actual image path
                icon: "📊",
                salary: "$70,000+ Avg Starting Salary",
                duration: "4 Years",
                courses: [
                  "Business Administration / Management",
                  "Economics & Finance",
                ],
              },
              {
                title: "Engineering & Life Sciences",
                img: "/image/Undergraduate Programs.webp", // Replace with your actual image path
                icon: "⚙️",
                salary: "$68,000+ Avg Starting Salary",
                duration: "4 Years",
                courses: [
                  "Engineering (Mechanical, Civil, Electrical)",
                  "Biology / Pre-Med",
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
                    {item.courses.map((course, idx) => (
                      <li key={idx} className="hover:text-blue-600 transition">
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
      {/* TOP UNIVERSITIES FOR UG */}
      <section
        id="Top Universities"
        className="pt-0 pb-10 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-green-300/30 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Top Universities in USA for{" "}
              <span className="bg-blue-600 bg-clip-text text-transparent">
                Undergraduate Programs
              </span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              The USA is home to many of the world’s top‑ranked universities
              offering UG programs.
            </p>
          </div>

          {/* Table */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 shadow-2xl">
            <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80">
              {/* Header */}
              <div className="grid grid-cols-3 bg-blue-600 text-white font-semibold text-lg">
                <div className="p-6">University</div>
                <div className="p-6 text-center">Popular UG Programs</div>
                <div className="p-6 text-center">Avg. Tuition (per year)</div>
              </div>

              {/* Rows */}
              {[
                {
                  name: "Harvard University",
                  programs: "Computer Science, Economics, Biology, Engineering",
                  tuition: "₹45L – ₹55L",
                },
                {
                  name: "Stanford University",
                  programs: "Computer Science, Engineering, Business, Biology",
                  tuition: "₹48L – ₹58L",
                },
                {
                  name: "Massachusetts Institute of Technology (MIT)",
                  programs:
                    "Engineering, Computer Science, Physics, Mathematics",
                  tuition: "₹50L – ₹60L",
                },
                {
                  name: "University of California, Los Angeles (UCLA)",
                  programs:
                    "Business Economics, Biology, Psychology, Computer Science",
                  tuition: "₹35L – ₹45L",
                },
                {
                  name: "New York University (NYU)",
                  programs:
                    "Business, Computer Science, Economics, Media Studies",
                  tuition: "₹42L – ₹52L",
                },
                {
                  name: "University of Michigan",
                  programs:
                    "Engineering, Business, Computer Science, Economics",
                  tuition: "₹40L – ₹50L",
                },
                {
                  name: "Arizona State University",
                  programs:
                    "Business, Engineering, Computer Science, Biological Sciences",
                  tuition: "₹28L – ₹38L",
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

                  {/* Popular UG Programs */}
                  <div className="p-6 text-center">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-600">
                      {row.programs}
                    </span>
                  </div>

                  {/* Tuition */}
                  <div className="p-6 text-center">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-600">
                      {row.tuition}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Types of UG Degrees in USA*/}
      <section className="Pt-7 pb-10 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Types of UG Degrees in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              USA
            </span>
          </h2>

          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Understanding degree types helps students make informed decisions.
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: "🧪",
                title: "Bachelor of Science (BS)",
                desc: "Technical & STEM fields",
              },
              {
                icon: "📚",
                title: "Bachelor of Arts (BA)",
                desc: "Humanities & social sciences",
              },
              {
                icon: "💼",
                title: "Bachelor of Business Administration (BBA)",
                desc: "Business & management studies",
              },
              {
                icon: "⚙️",
                title: "Bachelor of Engineering (BE)",
                desc: "Core engineering disciplines",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-[1.02] transition duration-500"
              >
                {/* INNER CARD */}
                <div className="bg-white rounded-3xl p-8 text-left shadow-lg group-hover:shadow-2xl transition relative">
                  {/* ICON */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xl mb-4 shadow-md group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm">{item.desc}</p>

                  {/* BOTTOM HIGHLIGHT LINE */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-3xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Eligibility Criteria for UG in USA */}
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
              Eligibility Criteria for UG in USA
            </h2>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Indian students must meet the following requirements after
              completing 12th:
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
                📘 Academic Requirements
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
                🌐 English Proficiency
              </button>
            </div>

            {/* Content Card */}
            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {tab === "academic" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    src="/image/academic-qualification.jpg" // Replace with your image
                    alt="Academic Requirements"
                    className="rounded-2xl shadow-lg w-full h-60 object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Academic Requirements
                    </h3>
                    <ul className="mt-4 space-y-3">
                      <li>
                        ● Completion of 12th grade from a recognized board
                      </li>
                      <li>● Minimum 60%–85% (depends on university)</li>
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
                    <li>● SAT or ACT (optional in many universities now)</li>
                  </ul>
                </div>
              )}

              {tab === "english" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    English Proficiency
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li>● IELTS: 6.0 – 7.5</li>
                    <li>● TOEFL: 70 – 100</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Required Documents, Cost & Scholarships */}
      <section className="Pt-7 pb-10 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
          {/* ================= DOCUMENTS ================= */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Required Documents
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Students must prepare the following documents:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Statement of Purpose (SOP) / Personal Essay",
                "Letters of Recommendation (LORs)",
                "Academic Transcripts (9th–12th)",
                "SAT/ACT Scores (if required)",
                "IELTS/TOEFL Scores",
                "Extracurricular Certificates",
                "Passport Copy",
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
                >
                  <div className="text-xl">📄</div>
                  <p className="text-gray-700 text-sm font-medium">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= COST ================= */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Cost of Studying UG in USA
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Planning finances is crucial for studying abroad.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  Tuition Fees
                </h3>
                <p className="text-gray-700 font-medium">
                  $20,000 – $55,000 / year
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  Living Expenses
                </h3>
                <p className="text-gray-700 font-medium">
                  $10,000 – $18,000 / year
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-2">Total Cost</h3>
                <p className="font-bold text-xl">₹25 – ₹65 Lakhs / year</p>
              </div>
            </div>
          </div>

          {/* ================= SCHOLARSHIPS ================= */}
          <div id="scholarships">
            <h2 className="text-4xl font-bold text-center mb-4">
              Scholarships for Indian Students
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Many US universities offer scholarships to undergraduate students.
              Below are the most common types.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Merit-based */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl">🏆</div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Merit-based Scholarships
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Awarded based on academic excellence, standardized test
                  scores, or exceptional talents. No separate application is
                  often required—students are automatically considered during
                  admission.
                </p>
              </div>

              {/* Need-based */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl">🤝</div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Need-based Financial Aid
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Granted to students who demonstrate financial need. Requires
                  submission of the CSS Profile or FAFSA (for US citizens),
                  along with supporting documents.
                </p>
              </div>

              {/* Athletic */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl">⚽</div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Athletic Scholarships
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Offered to talented athletes recruited by university sports
                  teams. Common in NCAA Division I and II schools. Coaches
                  typically initiate the process.
                </p>
              </div>

              {/* University-specific */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl">🏛️</div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    University-specific Scholarships
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Each university has its own exclusive scholarships—some are
                  automatically awarded based on profile, while others require a
                  separate application. Check each university's financial aid
                  page.
                </p>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="mt-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
              <p className="font-semibold text-lg">
                💡 Some universities offer up to 100% scholarships based on your
                profile.
                <br />
                <span className="text-sm font-normal opacity-90">
                  Early application and strong academic records increase your
                  chances.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* WORK OPPORTUNITIES & JOB OPPORTUNITIES  */}
      <section className="Pt-7 pb-10 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
          {/* ================= WORK OPPORTUNITIES ================= */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Work Opportunities During & After Study
            </h2>
            <p className="text-gray-600 text-center mb-12">
              International students in the USA have several options to gain
              work experience before and after graduation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              {/* During Study */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
                  🎓 During Study
                </h3>
                <ul className="text-gray-600 space-y-3 text-sm">
                  <li>
                    ✔ <strong>On-campus employment:</strong> Up to 20 hours/week
                    during semesters, full-time during breaks.
                  </li>
                  <li>
                    ✔ <strong>Curricular Practical Training (CPT):</strong> Paid
                    internships directly related to your major (available after
                    one academic year).
                  </li>
                  <li className="text-xs text-blue-500 mt-2 ml-4">
                    💡 CPT requires authorization from your university and is
                    often used for summer internships.
                  </li>
                </ul>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
                  🚀 After Graduation
                </h3>
                <ul className="text-gray-600 space-y-3 text-sm">
                  <li>
                    ✔ <strong>OPT (Optional Practical Training):</strong> 12
                    months of work authorization in your field of study.
                  </li>
                  <li>
                    ✔ <strong>STEM OPT Extension:</strong> Students with
                    eligible STEM degrees can extend OPT by 24 months (total 36
                    months).
                  </li>
                  <li>
                    ✔ <strong>H-1B Visa Sponsorship:</strong> After OPT,
                    employers may sponsor the H-1B work visa.
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
                  📌 Apply for OPT up to 90 days before graduation. STEM
                  students have two chances for the H-1B lottery.
                </div>
              </div>
            </div>
          </div>

          {/* ================= JOB OPPORTUNITIES ================= */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Job Opportunities After UG in USA
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Graduates have two primary paths: entering the workforce directly
              or pursuing further studies.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-6">
              {/* Career Paths */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-blue-600 mb-4 flex items-center gap-2">
                  🎯 Career Options
                </h3>
                <ul className="text-gray-600 space-y-3 text-sm">
                  <li>
                    ✔ <strong>Start working in the USA</strong> – Use OPT to
                    gain professional experience.
                  </li>
                  <li>
                    ✔ <strong>Pursue higher education</strong> – Many students
                    enroll in MS, MBA, or other graduate programs to enhance
                    career prospects.
                  </li>
                  <li>
                    ✔ <strong>Return to India</strong> – Leverage US degree and
                    international exposure for high-value roles in India.
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
                  📈 Popular industries: Technology, Finance, Consulting,
                  Engineering, Healthcare.
                </div>
              </div>

              {/* Salary */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-2 flex items-center justify-center gap-2">
                  💰 Average Salary
                </h3>
                <p className="text-2xl font-bold">$50,000 – $80,000 / year</p>
                <p className="text-sm opacity-80 mt-2">(Entry-level roles)</p>
                <hr className="my-4 border-white/20" />
                <p className="text-sm">
                  STEM graduates often command higher starting salaries,
                  especially in tech hubs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recruiters */}
      <section
        id="jobs"
        className="relative pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Job Opportunities & Salary After UG in
              <span className="text-blue-600"> USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The USA offers excellent job prospects after completing your
              undergraduate degree.
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
                { name: "Amazon", logo: "/image/amazon.png" },
                { name: "Microsoft", logo: "/image/microsoft.png" },
                { name: "Deloitte", logo: "/image/deloitte.png" },
                {
                  name: "Goldman Sachs",
                  logo: "/image/goldman-sachs.png",
                },
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
                  $50,000 – $80,000
                </p>

                <p className="text-gray-500 mt-2">per year (entry-level)</p>
              </div>
            </div>
          </div>
        </div>
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
              Visa Process for <span className="text-blue-600">UG in USA</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Indian students require an F-1 Student Visa to study in the United
              States.
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
                "Receive admission letter (I-20)",
                "Pay SEVIS fee",
                "Fill DS-160 form",
                "Schedule visa interview",
                "Attend visa interview",
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
                Proper preparation and documentation are essential for a
                successful visa interview.
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
      {/* Intakes for UG in USA */}
      <section
        id="intakes"
        className="Pt-7 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Intakes for <span className="text-blue-600">UG in USA</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Fall Intake */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">🎓 Fall Intake</h3>
              <p className="text-lg font-medium">August / September</p>
              <p className="mt-3 text-sm opacity-90">
                Most preferred intake with maximum course availability.
              </p>
            </div>

            {/* Spring Intake */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                🌱 Spring Intake
              </h3>
              <p className="text-lg font-medium text-gray-800">January</p>
              <p className="mt-3 text-sm text-gray-600">
                Limited course options compared to Fall intake.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Application Timeline for UG in USA */}
      <section className="pt-7 pb-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>

        <div className=" text-center max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Application Timeline for{" "}
            <span className="text-blue-600">UG in USA</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A well‑planned timeline increases your chances of admission. Follow
            these key milestones.
          </p>

          <div className="space-y-10">
            {[
              {
                time: "18–24 Months Before",
                title: "Start Your Preparation",
                desc: "Research universities, explore majors, and begin standardized test prep (SAT/ACT, IELTS/TOEFL). Build a strong extracurricular profile.",
              },
              {
                time: "12–18 Months Before",
                title: "Take Standardized Tests & Shortlist Universities",
                desc: "Take SAT/ACT and English proficiency tests. Shortlist 8–10 universities based on academics, budget, and location.",
              },
              {
                time: "10–12 Months Before",
                title: "Request LORs & Start Essays",
                desc: "Approach teachers for Letters of Recommendation (LORs). Brainstorm and draft your personal essays and supplements.",
              },
              {
                time: "8–10 Months Before (Aug–Oct)",
                title: "Early Action / Early Decision Deadlines",
                desc: "Submit applications for early rounds (usually Nov 1–15). Prepare financial documents if applying for aid.",
              },
              {
                time: "6–8 Months Before (Nov–Jan)",
                title: "Regular Decision Deadlines",
                desc: "Most regular decision deadlines fall between Jan 1 and Jan 15. Double‑check all application components.",
              },
              {
                time: "3–5 Months Before (Feb–Apr)",
                title: "Receive Offers & Apply for Visa",
                desc: "Compare admission offers and financial aid packages. Accept your final choice and pay the deposit. Begin visa process (I‑20, DS‑160, interview).",
              },
              {
                time: "1–2 Months Before (May–Jul)",
                title: "Pre‑departure Preparation",
                desc: "Arrange accommodation, book flights, attend pre‑departure orientations, and finalize health insurance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* TIME BOX */}
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md text-center">
                    {item.time}
                  </div>
                </div>

                {/* CONTENT CARD */}
                <div className="md:w-2/3 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note Box */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center text-blue-700 text-sm">
            ⚡ Deadlines vary by university. Always check each institution’s
            official website.
          </div>
        </div>
      </section>
      {/* Why Choose Us for UG in USA */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/*  Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/40 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/40 blur-[150px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose Us for{" "}
              <span className="text-blue-600">UG in USA?</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              At Beyond Education, we help students achieve their dream of
              studying in top global universities.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16 relative">
            {/*  Center Line Glow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>

            {[
              {
                icon: "🎯",
                title: "Profile Evaluation & University Shortlisting",
                description:
                  "Assess your academic strengths, extracurriculars, and career goals to find the best-fit universities.",
              },
              {
                icon: "📝",
                title: "SOP / Essay Guidance",
                description:
                  "Expert assistance in crafting compelling personal statements and essays that highlight your unique story.",
              },
              {
                icon: "📚",
                title: "SAT / IELTS Coaching",
                description:
                  "Structured coaching programs to help you achieve competitive scores in standardized tests.",
              },
              {
                icon: "📄",
                title: "Application Assistance",
                description:
                  "Step-by-step support in filling applications, tracking deadlines, and ensuring error-free submissions.",
              },
              {
                icon: "💰",
                title: "Scholarship & Loan Guidance",
                description:
                  "Identify scholarship opportunities and get help with education loan processing to ease financial burden.",
              },
              {
                icon: "✈️",
                title: "Visa Processing",
                description:
                  "Complete assistance with visa documentation, interview preparation, and mock sessions.",
              },
              {
                icon: "🏠",
                title: "Accommodation Support",
                description:
                  "Help in finding safe, affordable housing options near your university campus.",
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
                      {/*  Glass Card */}
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        <div className="flex items-center gap-3 mb-2">
                          {/*  Icon */}
                          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md group-hover:rotate-6 transition duration-300">
                            {step.icon}
                          </div>
                          <p className="text-sm font-semibold text-gray-800">
                            {step.title}
                          </p>
                        </div>
                        <p className="text-xs text-gray-600 pl-12 leading-relaxed">
                          {step.description}
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
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        <div className="flex items-center gap-3 mb-2">
                          {/* 🔥 Icon */}
                          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-md group-hover:rotate-6 transition duration-300">
                            {step.icon}
                          </div>
                          <p className="text-sm font-semibold text-gray-800">
                            {step.title}
                          </p>
                        </div>
                        <p className="text-xs text-gray-600 pl-12 leading-relaxed">
                          {step.description}
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
                entire UG admission process — from profile evaluation to
                pre‑departure.
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
      {/* Frequently Asked Questions */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-md cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3 className="font-semibold text-gray-800">{item.q}</h3>

                {open === i && (
                  <p className="text-gray-600 mt-2 text-sm">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
    </div>
  );
};

export default StudyUGUSA;
