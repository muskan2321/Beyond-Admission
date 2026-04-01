import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MSGermany() {
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
            alt="Study in MS in Germany"
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
                Germany
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
          href="#why-MS in Germany"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why MS In Germany?
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
              Study MS in <span className="text-blue-600">Germany</span> for
              Indian Students
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Experience high-quality education, low tuition fees, and excellent
              career opportunities in Germany.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>

              <img
                src="/image/usa-bg.png"
                alt="Study in MS in Germany"
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
                  Why Choose MS In Germany?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Germany is one of the most preferred destinations for Indian
                  students pursuing a Master’s degree due to its world-class
                  universities, strong research focus, and affordable education
                  system.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  With low or no tuition fees at public universities and strong
                  industry connections, Germany offers excellent career
                  opportunities and global exposure.
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

      {/* WHY STUDY MS IN GERMANY */}
      <section
        id="why-germany"
        className="relative pt-4 pb-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        {/* Animated background lights */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 blur-[130px] rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-sky-300/30 blur-[120px] rounded-full animate-float delay-4000"></div>

        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Study MS in <span className="text-blue-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Germany is one of the best destinations for MS due to its strong
              technical education, low cost, and excellent job opportunities.
            </p>
          </div>

          {/* ✅ 2x2 GRID */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group relative p-8 h-full rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Low Tuition Fees
                </h3>
                <p className="mt-3 text-gray-600">
                  Public universities in Germany offer low or no tuition fees,
                  making it highly affordable.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 h-full rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Globally Recognized Degrees
                </h3>
                <p className="mt-3 text-gray-600">
                  German degrees are internationally recognized and valued by
                  top employers worldwide.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 h-full rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Research-Focused Programs
                </h3>
                <p className="mt-3 text-gray-600">
                  Universities focus on innovation, research, and practical
                  learning.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative p-8 h-full rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Strong Job Market
                </h3>
                <p className="mt-3 text-gray-600">
                  Germany has high demand for skilled professionals in
                  engineering, IT, and business fields.
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

      {/* POPULAR COURSES SECTION */}
      <section
        id="Popular Courses"
        className="pt-16 pb-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow Effects */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular MS Specializations in{" "}
              <span className="text-blue-600">Germany</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Germany is a global hub for research and innovation. Explore the
              most sought-after Master's programs that offer excellent career
              prospects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technology & Computing",
                img: "/image/Engineering & Technology.webp",
                icon: "💻",
                duration: "2 Years",
                courses: [
                  "Data Science & Analytics",
                  "Artificial Intelligence",
                  "Cybersecurity",
                ],
              },
              {
                title: "Core Engineering",
                img: "/image/Undergraduate Programs.webp",
                icon: "⚙️",
                duration: "1.5 - 2 Years",
                courses: [
                  "Mechanical Engineering",
                  "Automotive Engineering",
                  "Electrical Engineering",
                ],
              },
              {
                title: "Life Sciences & Tech",
                img: "/image/Business & Management.avif",
                icon: "🧬",
                duration: "2 Years",
                courses: [
                  "Biotechnology",
                  "Biomedical Engineering",
                  "Molecular Science",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Duration Tag */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    {item.duration}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {item.courses.map((course, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors cursor-default"
                      >
                        <span className="mr-3 text-blue-500 text-lg">●</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP UNIVERSITIES SECTION - ULTIMATE MODERN REFINEMENT */}
      <section
        id="Top Universities"
        className="py-24 bg-[#f8fafc] relative overflow-hidden"
      >
        {/* Dynamic Background Elements */}
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-200/20 blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-indigo-200/20 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
              World-Class Education
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Top Universities in
              <span className="text-blue-600"> Germany for MS</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium">
              Compare top-ranked universities and their transparent fee
              structures.
            </p>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Table Container */}
          <div className="relative group">
            {/* Decorative Border/Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2.5rem] opacity-10 blur-md group-hover:opacity-20 transition duration-500"></div>

            <div className="relative overflow-hidden rounded-[2.2rem] bg-white border border-slate-200/60 shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-8 text-sm font-bold uppercase tracking-wider">
                        University Name
                      </th>
                      <th className="p-8 text-sm font-bold uppercase tracking-wider text-center">
                        Bachelors (UG)
                      </th>
                      <th className="p-8 text-sm font-bold uppercase tracking-wider text-center">
                        Masters (MS)
                      </th>
                      <th className="p-8 text-sm font-bold uppercase tracking-wider text-center">
                        MBA Programs
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      {
                        name: "Technical University of Munich",
                        location: "Munich",
                        ug: "₹0 - ₹4L / sem",
                        ms: "₹0 - ₹4L / sem",
                        mba: "₹15L - ₹30L",
                        type: "Elite",
                      },
                      {
                        name: "RWTH Aachen University",
                        location: "Aachen",
                        ug: "Nominal Fee",
                        ms: "Nominal Fee",
                        mba: "₹12L - ₹20L",
                        type: "Research",
                      },
                      {
                        name: "Karlsruhe Institute of Technology",
                        location: "Karlsruhe",
                        ug: "₹1.3L / sem",
                        ms: "₹1.3L / sem",
                        mba: "₹15L - ₹25L",
                        type: "Technical",
                      },
                      {
                        name: "University of Stuttgart",
                        location: "Stuttgart",
                        ug: "₹1.3L / sem",
                        ms: "₹1.3L / sem",
                        mba: "₹10L - ₹18L",
                        type: "Public",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="group hover:bg-blue-50/40 transition-all duration-300"
                      >
                        <td className="p-8">
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-800 text-xl group-hover:text-blue-600 transition-colors">
                              {row.name}
                            </span>
                            <span className="text-sm text-slate-400 font-medium mt-1 flex items-center gap-1">
                              📍 {row.location} •{" "}
                              <span className="text-blue-400">{row.type}</span>
                            </span>
                          </div>
                        </td>

                        {/* Fee Cells with Custom Components */}
                        <td className="p-8 text-center">
                          <div className="inline-block">
                            <span
                              className={`block text-sm font-bold mb-1 ${row.ug.includes("₹0") ? "text-emerald-600" : "text-slate-700"}`}
                            >
                              {row.ug}
                            </span>
                            <span className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
                              Per Semester
                            </span>
                          </div>
                        </td>

                        <td className="p-8 text-center">
                          <div className="inline-block">
                            <span className="block text-sm font-bold text-slate-700 mb-1">
                              {row.ms}
                            </span>
                            <span className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
                              Per Semester
                            </span>
                          </div>
                        </td>

                        <td className="p-8 text-center">
                          <div className="inline-flex flex-col items-center px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
                            <span className="text-sm font-black text-slate-800">
                              {row.mba}
                            </span>
                            <span className="text-[10px] uppercase font-bold text-amber-600">
                              Full Program
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 p-6 rounded-3xl bg-blue-50/50 border border-blue-100/50 max-w-4xl mx-auto">
            <p className="text-center text-slate-500 text-sm leading-relaxed">
              <strong className="text-blue-600 italic">Note:</strong> Most
              public universities in Germany charge only a semester contribution
              of <strong>€150–€350</strong>. Prices in INR are approximate and
              subject to current exchange rates.
            </p>
          </div>
        </div>
      </section>

      {/* INTAKES FOR GERMANY */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Study Intakes for MS in{" "}
              <span className="text-blue-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              German universities primarily offer two admission cycles.
              Selecting the right intake depends on your course availability and
              document readiness.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Winter Intake */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-blue-700 mb-6 flex items-center gap-2">
                  ❄️ Winter Intake (October Start)
                </h4>

                <ul className="space-y-4 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✔</span>
                    <span>
                      <b>Applications Period:</b> December – March (Early) / May
                      – July
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✔</span>
                    <span>
                      <b>Application Deadline:</b> July 15th (Strict for most
                      Public Unis)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✔</span>
                    <span>
                      <b>Admission Results:</b> August – September
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✔</span>
                    <span>
                      <b>Enrollment & Visa:</b> August – October
                    </span>
                  </li>
                </ul>

                <div className="mt-5 text-xs text-gray-600 bg-blue-50 px-4 py-3 rounded-xl border border-blue-100">
                  💡 <b>Pro Tip:</b> This is the <u>Major Intake</u> with 95% of
                  English-taught courses available. Start prep by{" "}
                  <b>January 2026</b>.
                </div>
              </div>

              {/* Summer Intake */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-3xl"></div>

                <h4 className="text-xl font-semibold text-indigo-700 mb-6 flex items-center gap-2">
                  🌱 Summer Intake (April Start)
                </h4>

                <ul className="space-y-4 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">✔</span>
                    <span>
                      <b>Applications Period:</b> June – September (Early) / Nov
                      – Jan
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">✔</span>
                    <span>
                      <b>Application Deadline:</b> January 15th
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">✔</span>
                    <span>
                      <b>Admission Results:</b> February – March
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">✔</span>
                    <span>
                      <b>Enrollment & Visa:</b> February – April
                    </span>
                  </li>
                </ul>

                <div className="mt-5 text-xs text-gray-600 bg-indigo-50 px-4 py-3 rounded-xl border border-indigo-100">
                  💡 <b>Pro Tip:</b> Limited courses available. Best for
                  students who missed the Winter cycle. Start prep by{" "}
                  <b>June 2026</b>.
                </div>
              </div>
            </div>
          </div>

          {/* Timeline/Steps Section */}
          <div className="mt-28">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A complete roadmap designed to guide you through every step of
                your international education journey.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto px-4">
              {/* Center Line */}
              <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 h-full transform -translate-x-1/2 hidden md:block"></div>

              {[
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
                  detail:
                    "Submit applications on portals and track deadlines carefully.",
                },
                {
                  title: "Offer Letter",
                  detail:
                    "Receive and compare offers to choose the best university.",
                },
                {
                  title: "Visa & Loan",
                  detail:
                    "Apply for visa and arrange finances or education loan.",
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
              ].map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex items-center mb-14 w-full ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                  >
                    {/* Content Box */}
                    <div className="md:w-1/2 w-full px-4">
                      <div
                        className={`rounded-2xl px-6 py-5 text-white shadow-xl transition duration-300 hover:scale-105 ${index % 2 === 0 ? "bg-blue-600" : "bg-indigo-600"}`}
                      >
                        <h4 className="font-bold text-lg">{step.title}</h4>
                        <p className="text-sm opacity-90 mt-2 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>

                    {/* Step Circle */}
                    <div className="relative z-10 my-4 md:my-0">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* Empty side */}
                    <div className="md:w-1/2 hidden md:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY CRITERIA FOR GERMANY */}
      <section
        id="eligibility"
        className="pt-0 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Container */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-center text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Eligibility Criteria for MS in Germany
            </h2>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto font-medium">
              To secure admission in German Public or Private Universities,
              Indian students must fulfill the following key requirements:
            </p>

            {/* Tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {[
                { id: "academic", label: "🎓 Academic Requirements" },
                { id: "language", label: "🌎 Exam & Language" },
                { id: "tests", label: "📄 Required Documents" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                    tab === t.id
                      ? "bg-white text-blue-600 border-white shadow-xl scale-105"
                      : "bg-transparent text-white border-white/30 hover:bg-white/10"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Content Card */}
            <div className="mt-12 bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl text-slate-700 text-left transition-all duration-500">
              {/* Academic Tab */}
              {tab === "academic" && (
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      alt="Academic Qualification"
                      className="relative rounded-2xl shadow-lg w-full h-64 object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">
                      Academic Requirements
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 font-semibold text-lg">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Bachelor’s degree (Minimum 60%+)
                      </li>
                      <li className="flex items-center gap-3 text-slate-600">
                        <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
                        Consistent academic record with no active backlogs.
                      </li>
                      <li className="flex items-center gap-3 text-slate-600">
                        <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
                        APS Certificate (Mandatory for Indian applicants).
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Language & Exam Tab */}
              {tab === "language" && (
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">
                      Exam & Language Requirements
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-blue-600 uppercase text-xs tracking-widest mb-2">
                          Aptitude Tests
                        </h4>
                        <p className="font-bold text-lg">
                          ● GRE (Required by some top TU9 universities)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-600 uppercase text-xs tracking-widest mb-2">
                          English Proficiency
                        </h4>
                        <p className="font-bold text-lg">
                          ● IELTS: 6.5+ Band Score
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-600 uppercase text-xs tracking-widest mb-2">
                          German Proficiency
                        </h4>
                        <p className="font-bold text-lg">
                          ● A1/B1 Level (Optional but highly recommended)
                        </p>
                        <p className="text-sm text-slate-500 mt-1 italic">
                          *Mandatory if the course is German-taught.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
                    <p className="text-slate-500 text-sm leading-relaxed">
                      German universities are highly competitive. While many
                      courses are in English, knowing basic German significantly
                      improves your visa and part-time job chances.
                    </p>
                  </div>
                </div>
              )}

              {/* Documents Tab */}
              {tab === "tests" && (
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-8 text-center">
                    Required Documents Checklist
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "SOP", desc: "Statement of Purpose" },
                      { title: "LORs", desc: "Letters of Recommendation" },
                      {
                        title: "Transcripts",
                        desc: "Official Academic Transcripts",
                      },
                      { title: "Test Scores", desc: "IELTS / GRE Score Cards" },
                      { title: "CV", desc: "Professional Europass CV" },
                      { title: "Passport", desc: "Valid Passport Copy" },
                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition"
                      >
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg font-bold">
                          ✓
                        </span>
                        <div>
                          <p className="font-black text-slate-800 leading-none">
                            {doc.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {doc.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* COST OF STUDYING IN GERMANY */}
      <section
        id="fees"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        {/* Animated Background Lights */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/20 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Cost of Studying MS in{" "}
              <span className="text-blue-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 font-medium">
              Germany is famous for its low-cost education. Here is a breakdown
              of your potential investment.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12">
            {/* Tuition Fees Card */}
            <div className="group relative p-1 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-sky-400 shadow-xl hover:shadow-2xl transition duration-500">
              <div className="relative bg-white rounded-[1.4rem] p-8 md:p-10 z-10 h-full">
                <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2">
                  <span className="p-2 bg-blue-100 rounded-lg text-blue-600 text-xl">
                    🏛️
                  </span>
                  Tuition Fees
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Public Universities */}
                  <div className="relative p-6 rounded-2xl bg-emerald-50 border border-emerald-100 transition hover:-translate-y-1">
                    <span className="absolute -top-3 right-4 px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">
                      Recommended
                    </span>
                    <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-wide">
                      Public Universities
                    </h4>
                    <p className="mt-3 text-emerald-600 font-black text-2xl">
                      Free
                    </p>
                    <p className="text-emerald-700/60 text-[10px] mt-1 font-medium">
                      or Minimal Sem. Fees
                    </p>
                  </div>

                  {/* Private Universities */}
                  <div className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 transition hover:-translate-y-1">
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Private Universities
                    </h4>
                    <p className="mt-3 text-slate-900 font-black text-xl">
                      €10,000 – €30,000
                    </p>
                    <p className="text-gray-400 text-[10px] mt-1 font-medium">
                      Full Program
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-bold">
                      Total Cost (Approx)
                    </span>
                    <span className="text-blue-600 font-black text-2xl">
                      ₹10 – ₹30 Lakhs
                    </span>
                  </div>
                  <p className="text-[10px] text-right text-slate-400 mt-1">
                    *Covers tuition, living & APS for full course
                  </p>
                </div>
              </div>
            </div>

            {/* Living Expenses Card */}
            <div className="group relative p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-indigo-100 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <span className="p-2 bg-indigo-100 rounded-lg text-indigo-600 text-xl">
                    🏠
                  </span>
                  Living Expenses
                </h3>

                <p className="text-gray-600 leading-relaxed font-medium">
                  Germany requires students to maintain a <b>Blocked Account</b>{" "}
                  to cover living expenses like accommodation, food, insurance,
                  and travel.
                </p>

                <div className="mt-10 relative">
                  {/* Soft Glow behind price */}
                  <div className="absolute inset-0 bg-indigo-200 blur-2xl opacity-40 rounded-full"></div>

                  <div className="relative bg-white rounded-2xl p-8 text-center border border-indigo-50 shadow-lg">
                    <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2">
                      Annual Requirement
                    </p>
                    <p className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      €10,000 – €12,000
                    </p>
                    <p className="text-slate-400 text-sm mt-2 font-medium">
                      Approx. €10,000 – €12,000 / year
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-center text-[11px] text-slate-400 italic font-medium">
                  *You can earn this back via part-time jobs (20 hrs/week
                  allowed).
                </p>
              </div>
            </div>
          </div>
        </div>

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

      {/* Cost of Living in MS in Germany */}
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
              Estimated expenses for international students in the Germany
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
                  "Depends upon the study in Germany course selected",
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

      {/* SCHOLARSHIPS FOR GERMANY */}
      <section
        id="scholarships"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading Area */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Scholarships for Indian Students in <br />
              <span className="text-blue-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 font-medium">
              Many organizations offer prestigious scholarships to reduce the
              financial burden for meritorious international students.
            </p>
          </div>

          {/* Cards Section - Optimized for 2 Cards */}
          <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: "🇩🇪",
                title: "DAAD Scholarship",
                details:
                  "The world's largest funding organization for international students, offering monthly stipends and travel allowances for postgraduate courses.",
              },
              {
                icon: "🏛️",
                title: "Deutschlandstipendium",
                details:
                  "A merit-based scholarship of €300/month provided by the German government and private sponsors to high-achieving students.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-[2.5rem] p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition duration-500 hover:scale-[1.03] shadow-2xl shadow-blue-100"
              >
                <div className="bg-white rounded-[2.4rem] p-10 h-full overflow-hidden relative">
                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
              bg-gradient-to-br from-blue-100/40 via-indigo-100/20 to-purple-100/30"
                  ></div>

                  <div className="relative z-10 text-center">
                    {/* Icon with Premium Circle */}
                    <div
                      className="w-20 h-20 mx-auto mb-6 flex items-center justify-center 
                bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl text-3xl shadow-xl 
                group-hover:rotate-[10deg] transition-transform duration-500"
                    >
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-slate-800 group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>

                    {/* Content Description */}
                    <div className="mt-5">
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">
                        {item.details}
                      </p>
                    </div>

                    {/* Subtle Badge */}
                    <div className="mt-8 inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      Government Funded
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary Box */}
          <div className="mt-20 relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-lg opacity-20 group-hover:opacity-30 transition"></div>

            <div className="relative bg-slate-900 text-white rounded-[2.5rem] p-10 text-center overflow-hidden">
              {/* Decorative Circles */}
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full"></div>

              <div className="relative z-10">
                <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
                  Scholarships in Germany are highly competitive and are
                  primarily awarded based on
                  <span className="text-blue-400 font-bold">
                    {" "}
                    Academic Merit
                  </span>
                  , leadership qualities, or specific research potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Floating Animation */}
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
              <span className="text-blue-600"> Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Germany offers excellent job prospects and career growth after
              completing MS.
            </p>
          </div>

          {/* Recruiters Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10">
              Top Recruiters
            </h3>

            <div className="flex flex-wrap justify-center gap-8 items-center">
              {[
                { name: "SAP", logo: "/image/sap-logo.png" },
                { name: "BMW", logo: "/image/bmw-logo.png" },
                { name: "Bosch", logo: "/image/bosch-logo.png" },
              ].map((company, i) => (
                <div
                  key={i}
                  className="group bg-white p-6 w-48 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center hover:-translate-y-2 border border-slate-50"
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
                  €45,000 – €75,000
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
              <span className="text-blue-600"> Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              International students in Germany benefit from flexible work
              rights both during and after their degree completion.
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
                    Students are legally allowed to work for{" "}
                    <b>120 full days</b> or
                    <b> 240 half days</b> per year. This helps significantly in
                    covering monthly living expenses.
                  </p>
                </div>
              </div>
            </div>

            {/* After MS */}
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
                    After MS Opportunities
                  </h3>

                  {/* divider */}
                  <div className="mt-3 w-12 h-1 bg-indigo-600 rounded-full group-hover:w-20 transition-all duration-300"></div>

                  {/* content */}
                  <p className="mt-6 text-gray-600 leading-relaxed">
                    After graduation, students are eligible for an{" "}
                    <b>18-month job-seeking visa</b>. This period allows you to
                    stay in Germany and find a job that matches your academic
                    qualifications.
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
                  title: "Study in Germany",
                },
                {
                  icon: "💼",
                  title: "Part-Time (120 Days)",
                },
                {
                  icon: "🚀",
                  title: "18-Month Job Search",
                },
                {
                  icon: "🌟",
                  title: "Full-Time Career",
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

        {/* Animation Styles (Kept as is) */}
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

      {/* VISA PROCESS SECTION */}
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
              Visa Process for MS in{" "}
              <span className="text-blue-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The process for a Master's (MS) student visa is the same as the UG
              (German National Student Visa - Type D).
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
                "Obtain APS Certificate (Mandatory for Indians)",
                "Receive Admission Letter from German University",
                "Open & Fund your Blocked Account (€11,904)",
                "Gather Documents & Book VFS/Consulate Slot",
                "Attend Visa Interview & Submit Biometrics",
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
                  <p className="mt-4 text-gray-700 text-sm leading-relaxed font-medium">
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
              <p className="text-lg max-w-3xl mx-auto font-medium">
                Note: Since MS is a long-term course, you must apply for a
                <b> National Student Visa (Type D)</b>. Proper documentation of
                finances is crucial for approval.
              </p>
            </div>
          </div>
        </div>

        {/* Styles */}
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
                  Everything you need to know about the German education system,
                  simplified to help you make the right move.
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
                  q: "Is MS in Germany worth it?",
                  a: "Absolutely. Germany offers world-class education with almost **zero tuition fees** in public universities. Combined with a strong economy and a high demand for skilled engineers and IT professionals, it provides one of the best ROIs (Return on Investment) globally.",
                },
                {
                  q: "Is IELTS enough for English-taught programs?",
                  a: "Yes, for English-taught Master's programs, a score of **6.5 or above in IELTS** is generally sufficient. While German language (A1/A2) is not always mandatory for admission, it is crucial for surviving, part-time jobs, and networking in Germany.",
                },
                {
                  q: "What is the mandatory APS Certificate?",
                  a: "The APS certificate is a mandatory document for Indian students that verifies your academic records. You must apply for this **before** your visa interview, and often before university applications.",
                },
                {
                  q: "Can I work while studying?",
                  a: "Yes! International students can work for **120 full days or 240 half days** per year. This is usually enough to cover your monthly living expenses.",
                },
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
              If you are planning to study in the MS in Germany, our expert
              counsellors can guide you through the entire process.
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
