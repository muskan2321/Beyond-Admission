import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MBAGermany() {
  const [faq, setFaq] = useState(null);
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
              Study MBA in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Germany
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Affordable education & strong industry connections
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

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4">
        <a
          href="#why-germany"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why MBA In Germany?
        </a>

        <a
          href="#Popular Courses"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Popular Specializations
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
              Study MBA in <span className="text-blue-600">Germany</span> for
              Indian Students
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Experience high-quality education, affordable tuition, and strong
              career opportunities in Germany.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image Section (same) */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>

              <img
                src="/image/usa-bg.png"
                alt="Study Abroad"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="text-3xl font-bold text-blue-600">95%</p>
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
                  Why Choose MBA In Germany?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Germany is one of the most popular destinations for MBA
                  studies due to its affordable education, strong economy, and
                  globally recognized universities.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  With strong industry connections and a thriving job market,
                  Germany offers excellent career opportunities for
                  international students.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Low or no tuition fees",
                  "Strong job market & economy",
                  "Globally recognized universities",
                  "Post-study work opportunities",
                  "Affordable cost of living",
                  "Industry-focused learning",
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

      {/* WHY STUDY MBA IN GERMANY */}
      <section
        id="why-germany"
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
              Why Study MBA in <span className="text-blue-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Germany offers affordable MBA programs with strong industry
              connections, especially in engineering and manufacturing sectors.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card */}
            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  💰
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Lower Cost
                </h3>

                <p className="mt-3 text-gray-600">
                  More affordable than USA/UK with excellent return on
                  investment.
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
                  Industry Exposure
                </h3>

                <p className="mt-3 text-gray-600">
                  Strong connections with engineering and manufacturing sectors.
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
                  European Job Market
                </h3>

                <p className="mt-3 text-gray-600">
                  Access to opportunities across the European Union.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  📈
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  Good ROI
                </h3>

                <p className="mt-3 text-gray-600">
                  Excellent return on investment with high salary potential.
                </p>
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

      {/* POPULAR SPECIALIZATIONS */}
      <section
        id="Popular Courses"
        className="pt-4 pb-16 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-6">
            Popular MBA Specializations in Germany
          </h2>

          <p className="text-center text-gray-600 mb-16">
            Choose from diverse specializations aligned with Germany's strong
            industrial sectors.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Finance",
                icon: "📊",
                description: "Banking, Investment, Risk Management",
              },
              {
                title: "Automotive Management",
                icon: "🚗",
                description: "Supply Chain, Operations, Manufacturing",
              },
              {
                title: "Business Analytics",
                icon: "💻",
                description: "Data Science, AI, Digital Transformation",
              },
              {
                title: "International Business",
                icon: "🌐",
                description: "Global Strategy, Cross-Cultural Management",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
              Top Universities for MBA in{" "}
              <span className="bg-blue-600 bg-clip-text text-transparent">
                Germany
              </span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Explore top business schools offering world-class MBA programs.
            </p>
          </div>

          {/* Table */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 shadow-2xl">
            <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80">
              {/* Header */}
              <div className="grid grid-cols-2 bg-blue-600 text-white font-semibold text-lg">
                <div className="p-6">University</div>
                <div className="p-6 text-center">Tuition Fees (Approx)</div>
              </div>

              {/* Rows */}
              {[
                {
                  name: "Mannheim Business School",
                  fees: "€35,000 – €45,000",
                },
                {
                  name: "ESMT Berlin",
                  fees: "€38,000 – €48,000",
                },
                {
                  name: "Frankfurt School of Finance & Management",
                  fees: "€32,000 – €42,000",
                },
                {
                  name: "WHU – Otto Beisheim School of Management",
                  fees: "€39,000 – €49,000",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 items-center border-t border-gray-100 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition duration-300 group"
                >
                  <div className="p-6 font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {row.name}
                  </div>
                  <div className="p-6 text-center">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-600">
                      {row.fees}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF MBA PROGRAMS */}
      <section
        id="types"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Types of MBA Programs in{" "}
              <span className="text-blue-600">Germany</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Choose the program that best fits your career goals and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Time MBA",
                icon: "🎓",
                duration: "12-24 Months",
                description:
                  "Traditional MBA program for early-career professionals",
              },
              {
                title: "Executive MBA",
                icon: "👔",
                duration: "18-24 Months",
                description:
                  "Designed for experienced professionals and managers",
              },
              {
                title: "Part-Time MBA",
                icon: "📚",
                duration: "24-36 Months",
                description: "Flexible schedule for working professionals",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {item.duration}
                </p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTAKES */}
      <section
        id="intakes"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes for MBA in <span className="text-blue-600">Germany</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              German universities offer two main admission intakes.
            </p>
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl"></div>
                <h4 className="text-xl font-semibold text-blue-700 mb-6">
                  🍂 Fall Intake
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>✔ September/October</li>
                  <li>✔ Main intake with maximum courses</li>
                  <li>✔ Application deadlines: March - June</li>
                </ul>
              </div>

              <div className="group relative bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-3xl"></div>
                <h4 className="text-xl font-semibold text-indigo-700 mb-6">
                  🌸 Spring Intake
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>✔ March/April (Limited universities)</li>
                  <li>✔ Smaller intake with fewer programs</li>
                  <li>✔ Application deadlines: October - January</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-28 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Process
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A complete roadmap designed to guide you through every step of
              your international education journey.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 w-[3px] bg-blue-400 h-full transform -translate-x-1/2"></div>

            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex items-center mb-16 ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="w-1/2 px-6">
                    <div
                      className={`rounded-xl px-6 py-5 text-white shadow-xl
                    ${
                      index % 3 === 0
                        ? "bg-gradient-to-r from-blue-400 to-blue-600"
                        : index % 3 === 1
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                          : "bg-gradient-to-r from-indigo-700 to-blue-800"
                    }`}
                    >
                      <h4 className="font-semibold text-sm mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs opacity-90">{step.detail}</p>
                    </div>
                  </div>

                  {/* Circle */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-400 text-blue-600 font-bold flex items-center justify-center shadow-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Empty */}
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section
        id="eligibility"
        className="pt-0 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Eligibility Criteria for MBA in Germany
            </h2>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              To apply for MBA in Germany, students must meet the following
              requirements:
            </p>

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

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {tab === "academic" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    src="/image/academic-qualification.jpg"
                    className="rounded-2xl shadow-lg w-full h-60 object-cover"
                  />

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Academic & Work Requirements
                    </h3>

                    <ul className="mt-4 space-y-3">
                      <li>● Bachelor's degree (any discipline)</li>
                      <li>● Work Experience: 2–5 years required</li>
                    </ul>
                  </div>
                </div>
              )}

              {tab === "language" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Entrance & English Requirements
                  </h3>

                  <ul className="mt-4 space-y-3">
                    <li>● GMAT / GRE (required by most universities)</li>
                    <li>● IELTS: 6.5+ overall score</li>
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
                    <li>● Resume / CV</li>
                    <li>● Academic Transcripts</li>
                    <li>● IELTS / GMAT Scores</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* COST OF MBA IN GERMANY */}
      <section
        id="fees"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cost of MBA in <span className="text-blue-600">Germany</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Understanding the cost helps in better financial planning.
            </p>
          </div>

          <div className="mt-20 grid lg:grid-cols-2 gap-12">
            <div className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="relative bg-white/90 rounded-3xl p-8 z-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 group-hover:text-blue-600 transition">
                  Tuition Fees
                </h3>

                <div className="grid sm:grid-cols-1 gap-6">
                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900">
                      MBA Programs
                    </h4>
                    <p className="mt-3 text-blue-600 font-bold text-2xl">
                      €20,000 – €50,000
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      total program cost
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-indigo-200 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">
              <div className="relative bg-white/90 rounded-3xl p-8 z-10">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                  Living Expenses
                </h3>

                <div className="mt-8 relative">
                  <div className="relative bg-white rounded-xl p-6 text-center shadow-lg">
                    <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      €12,000 – €15,000
                    </p>
                    <p className="text-gray-500 mt-1">per year</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-center font-semibold text-gray-900">
                    Total Cost (Approx)
                  </p>
                  <p className="text-center text-2xl font-bold text-blue-600">
                    ₹25 Lakhs – ₹60 Lakhs
                  </p>
                </div>
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

      {/* APPLICATION TIMELINE */}
      <section
        id="timeline"
        className="pt-20 pb-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300/20 blur-3xl rounded-full"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Application Timeline for MBA in{" "}
              <span className="text-blue-600">Germany</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Plan your journey step-by-step for a smooth application process.
            </p>
          </div>

          <div className="space-y-10">
            {[
              {
                time: "12 Months Before",
                icon: "📚",
                points: ["Prepare IELTS / GMAT", "Start profile building"],
              },
              {
                time: "8–10 Months Before",
                icon: "📝",
                points: ["Shortlist universities", "Apply to colleges"],
              },
              {
                time: "3–5 Months Before",
                icon: "🛂",
                points: ["Start visa process", "Arrange financial documents"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-2xl shadow-lg group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.time}
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {item.points.map((p, idx) => (
                      <li key={idx}>✔ {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
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
              Estimated expenses for international students in the MBA in
              Germany
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
                  "Depends upon the study in MBA in Germany course selected",
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

      {/* scholarships */}
      {/* <section
        id="scholarships"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
      
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
    
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Scholarships for Indian Students in
              <span className="text-blue-600"> Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Many universities and organizations offer scholarships to reduce
              financial burden.
            </p>
          </div>

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
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
    bg-gradient-to-br from-blue-100/40 via-indigo-100/20 to-purple-100/30"
                  ></div>

                  <div className="relative z-10 text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-5 flex items-center justify-center 
      bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-2xl shadow-lg 
      group-hover:scale-110 transition"
                    >
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>

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

          <div className="mt-20 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
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
      </section> */}

      {/* JOB OPPORTUNITIES */}
      <section
        id="jobs"
        className="relative pt-10 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Job Opportunities After MBA in{" "}
              <span className="text-blue-600">Germany</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Germany offers excellent career prospects with top global
              companies.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10">
              Top Recruiters
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center max-w-3xl mx-auto">
              {[
                { name: "McKinsey & Company", logo: "/image/google-logo.webp" },
                {
                  name: "Boston Consulting Group",
                  logo: "/image/microsoft.png",
                },
                { name: "Siemens", logo: "/image/amazon.png" },
              ].map((company, i) => (
                <div
                  key={i}
                  className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center hover:-translate-y-2"
                >
                  <p className="font-semibold text-gray-700 text-center">
                    {company.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-2xl max-w-xl w-full">
              <div className="bg-white rounded-3xl p-10 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Average Salary After MBA
                </h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  €60,000 – €100,000
                </p>
                <p className="text-gray-500 mt-2">per year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section
        id="work"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Work Opportunities During & After MBA in{" "}
              <span className="text-blue-600">Germany</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Germany provides excellent work opportunities for international
              students.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 hover:scale-[1.02] transition duration-300">
              <div className="bg-white rounded-3xl p-10 shadow-xl h-full">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl text-2xl shadow-lg">
                  💼
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  During Study
                </h3>
                <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full"></div>
                <ul className="mt-6 text-gray-600 space-y-3">
                  <li>
                    ● Part-time work allowed (120 full days or 240 half days per
                    year)
                  </li>
                  <li>● Internships integrated into many programs</li>
                </ul>
              </div>
            </div>

            <div className="group relative rounded-3xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 hover:scale-[1.02] transition duration-300">
              <div className="bg-white rounded-3xl p-10 shadow-xl h-full">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl text-2xl shadow-lg">
                  🚀
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  After MBA
                </h3>
                <div className="mt-3 w-12 h-1 bg-indigo-600 rounded-full"></div>
                <ul className="mt-6 text-gray-600 space-y-3">
                  <li>● 18-month job-seeking visa after graduation</li>
                  <li>
                    ● Pathway to permanent residency after 2 years of work
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 opacity-40"></div>
            <div className="grid md:grid-cols-3 gap-10 text-center relative z-10">
              {[
                { icon: "🎓", title: "Study MBA in Germany" },
                { icon: "💼", title: "Part-Time Work" },
                { icon: "🌟", title: "Job-Seeking Visa" },
              ].map((step, i) => (
                <div key={i} className="group relative">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-2xl shadow-xl group-hover:scale-110 transition">
                    {step.icon}
                  </div>
                  <p className="mt-4 text-sm font-semibold text-gray-700">
                    {step.title}
                  </p>
                </div>
              ))}
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

      {/* VISA */}
      <section
        id="visa"
        className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-300/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Student Visa for <span className="text-blue-600">Germany</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Students who receive admission from a German university must apply
              for the German Student Visa.
            </p>
          </div>

          <div className="relative mt-20">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-[3px] bg-blue-200"></div>
            <div className="hidden lg:block absolute top-8 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 animate-progress"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {[
                "Receive admission letter from German university",
                "Open blocked account (~€11,208)",
                "Book visa appointment at German embassy",
                "Submit required documents",
                "Attend visa interview",
              ].map((step, i) => (
                <div
                  key={i}
                  className="group relative p-6 bg-white/80 backdrop-blur-lg rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center"
                >
                  <div className="w-14 h-14 mx-auto flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-lg font-bold shadow-lg group-hover:scale-110 transition">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute inset-0 w-14 h-14 mx-auto rounded-full border-2 border-blue-400 opacity-30 animate-ping"></div>
                  <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>
            <div className="relative z-10">
              <p className="text-lg max-w-3xl mx-auto">
                Proper preparation and documentation are important for
                successful visa approval. Blocked account must be opened with a
                German bank.
              </p>
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

      {/* WHY CHOOSE US */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/40 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/40 blur-[150px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose <span className="text-blue-600">Beyond Admission</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Beyond Admission provides expert guidance to help students
              successfully study abroad.
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>

            {[
              { icon: "🎯", title: "Profile Evaluation" },
              { icon: "📝", title: "SOP Assistance" },
              { icon: "📚", title: "GMAT/IELTS Coaching" },
              { icon: "📄", title: "Application Support" },
              { icon: "💰", title: "Financial Planning" },
              { icon: "✈️", title: "Visa Guidance" },
            ].map((step, i) => (
              <div
                key={i}
                className="relative mb-12 grid grid-cols-2 items-center"
              >
                {i % 2 === 0 ? (
                  <div className="flex justify-end pr-8">
                    <div className="group w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600">
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl flex items-center gap-3 transition duration-300 group-hover:scale-105">
                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md">
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

                {i % 2 !== 0 ? (
                  <div className="flex justify-start pl-8">
                    <div className="group w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600">
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl flex items-center gap-3 transition duration-300 group-hover:scale-105">
                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-md">
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

                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg border-2 border-white"></div>
              </div>
            ))}
          </div>

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
      <section className="relative pt-16 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Find answers to common questions about MBA in Germany.
            </p>
          </div>

          {/* Q&A Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                q: "Is MBA in Germany worth it?",
                a: "Yes, especially for technical and industrial careers. Germany offers excellent ROI, strong industry connections, and affordable tuition compared to USA/UK.",
              },
              {
                q: "Is GMAT required for MBA in Germany?",
                a: "Yes, GMAT is required for most universities. Some may accept GRE as an alternative. Minimum score requirements vary by institution.",
              },
            ].map((item, i) => (
              <div key={i} className="relative group cursor-pointer">
                {/* Click Area */}
                <div onClick={() => setFaq(faq === i ? null : i)}>
                  {/* Left Line */}
                  <div
                    className={`absolute left-0 top-0 h-full w-1 rounded-full transition 
              ${faq === i ? "bg-blue-600" : "bg-gradient-to-b from-blue-300 to-indigo-300"}
            `}
                  ></div>

                  <div className="pl-6">
                    {/* Question */}
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                        {item.q}
                      </h3>

                      {/* Icon */}
                      <span
                        className={`text-2xl transition-transform duration-300 ${
                          faq === i
                            ? "rotate-45 text-blue-600"
                            : "text-gray-400"
                        }`}
                      >
                        +
                      </span>
                    </div>

                    {/* Answer */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        faq === i
                          ? "max-h-40 mt-3 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pt-6 pb-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/image/usa-bg.png" className="w-full h-full object-cover" />
        </div>

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Book Free Study Abroad Consultation
            </h2>
            <p className="mt-6 text-lg opacity-90">
              If you are planning to study MBA in Germany, our expert
              counsellors can guide you through the entire process.
            </p>
            <p className="mt-4 text-lg opacity-90">
              Fill out the consultation form to receive personalized guidance on
              universities, courses, scholarships, and visa procedures.
            </p>

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
