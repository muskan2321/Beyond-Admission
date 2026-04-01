import { Link } from "react-router-dom";

export default function MBBS() {
  return (
    <div className="bg-white">
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
              IIT{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Delhi
              </span>
            </h1>

            {/*  FIXED TEXT */}
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Start your journey to become a doctor with top medical colleges,
              expert guidance, and complete admission support.
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
              Study MBBS in{" "}
              <span className="text-blue-600">for India</span>{" "}
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
                  Why Choose Medical Studies in India?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  India is one of the most preferred destinations for medical
                  education due to its high academic standards, globally
                  recognized degrees, and extensive clinical exposure. Medical
                  programs in India are regulated by the National Medical
                  Commission (NMC) and other respective councils, ensuring
                  quality education and ethical medical practices.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Medical courses in India combine theoretical knowledge,
                  practical training, and real-world hospital experience, making
                  students industry-ready.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Globally recognized degrees",
                  "Affordable compared to private international education",
                  "Hands-on clinical exposure from early years",
                  "Access to top hospitals and experienced faculty",
                  "Strong career scope in India and abroad",
                  "Advanced infrastructure with modern labs and research facilities",
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

      {/* ================= MBBS SECTION ================= */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356.257l4 4a1 1 0 011.788 0l4-4a1 1 0 01.356-.257l2.138-.914a1 1 0 000-1.84l-7-3zM16.5 9.78L15 10.44v3.31a1 1 0 01-.5.866l-4 2a1 1 0 01-1 0l-4-2a1 1 0 01-.5-.866v-3.31l-1.5-.66v4.14a1 1 0 00.5.866l5 2.5a1 1 0 001 0l5-2.5a1 1 0 00.5-.866v-4.14z" />
              </svg>
              <span>Flagship Program</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              MBBS
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-3">
                Bachelor of Medicine & Surgery
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              MBBS is the most sought-after medical degree in India, essential
              for becoming a licensed doctor. It provides in-depth knowledge of
              human anatomy, physiology, pharmacology, pathology, and clinical
              practices.
            </p>
          </div>

          {/* Main Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Duration Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Duration
                </h3>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">5.5 Years</p>
                  <p className="text-gray-500">4.5 years academic study</p>
                  <p className="text-gray-500">1-year compulsory internship</p>
                </div>
              </div>
            </div>

            {/* Eligibility Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Eligibility
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    ✓ 10+2 with Physics, Chemistry, Biology
                  </p>
                  <p className="text-gray-700">
                    ✓ Minimum 50% marks (General Category)
                  </p>
                  <p className="text-gray-700">
                    ✓ Must qualify{" "}
                    <span className="font-semibold text-green-600">
                      NEET-UG
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Course Structure Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Course Structure
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm">
                    📘 Pre-Clinical: Anatomy, Physiology, Biochemistry
                  </p>
                  <p className="text-gray-700 text-sm">
                    🧬 Para-Clinical: Pathology, Pharmacology, Microbiology
                  </p>
                  <p className="text-gray-700 text-sm">
                    🏥 Clinical: Medicine, Surgery, Pediatrics, OB-GYN
                  </p>
                </div>
              </div>
            </div>

            {/* Career Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Career Opportunities
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">👨‍⚕️ General Physician</p>
                  <p className="text-gray-700">🏥 Medical Officer</p>
                  <p className="text-gray-700">📊 Hospital Administrator</p>
                  <p className="text-gray-700">🔬 Clinical Researcher</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Subjects Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                📖 Complete MBBS Curriculum
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">
                      Pre-Clinical
                    </h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Human Anatomy</li>
                    <li>• Physiology</li>
                    <li>• Biochemistry</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">
                      Para-Clinical
                    </h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pathology</li>
                    <li>• Pharmacology</li>
                    <li>• Microbiology</li>
                    <li>• Forensic Medicine</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">
                      Clinical
                    </h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• General Medicine</li>
                    <li>• General Surgery</li>
                    <li>• Pediatrics</li>
                    <li>• Obstetrics & Gynecology</li>
                    <li>• Orthopedics</li>
                    <li>• Ophthalmology & ENT</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Career Path Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-8 md:p-12 text-center">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" patternUnits="userSpaceOnUse">
                <pattern
                  id="pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="2" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#pattern)" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white text-sm font-semibold">
                  Pathway to Excellence
                </span>
              </div>
              <p className="text-white text-xl md:text-2xl font-bold mb-4">
                After MBBS, pursue{" "}
                <span className="bg-white/20 px-4 py-2 rounded-lg inline-block mx-2">
                  MD/MS
                </span>{" "}
                for Specialization
              </p>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Unlock advanced medical careers, super-specializations, and
                global opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION - ATTRACTIVE DESIGN ================= */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Got Questions?
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-3">
                We've Got Answers
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Everything you need to know about medical education in India,
              admission process, and career opportunities
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-blue-500">
                <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                        What is NEET-UG and why is it important?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        NEET-UG is the single entrance exam for medical
                        admissions in India
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 transform transition-transform duration-300 faq-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="faq-answer max-h-0 overflow-hidden transition-all duration-300">
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    <p>
                      NEET-UG (National Eligibility cum Entrance Test -
                      Undergraduate) is the mandatory entrance examination for
                      admission to MBBS, BDS, and other medical courses in
                      India. It is conducted by NTA and is the single gateway
                      for all medical colleges in India including AIIMS and
                      JIPMER. Without qualifying NEET, you cannot pursue medical
                      education in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-green-500">
                <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-green-600 transition-colors">
                        What is the total duration of MBBS?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        Complete duration including internship
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 transform transition-transform duration-300 faq-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="faq-answer max-h-0 overflow-hidden transition-all duration-300">
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    <p>
                      The total duration of MBBS is 5.5 years, which includes
                      4.5 years of academic study and 1 year of compulsory
                      rotating internship. The internship involves hands-on
                      training in various departments like Medicine, Surgery,
                      Pediatrics, Obstetrics & Gynecology, and community health.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-purple-500">
                <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-purple-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-purple-600 transition-colors">
                        What are the career options after MBBS?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        Explore diverse career paths in medicine
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 transform transition-transform duration-300 faq-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="faq-answer max-h-0 overflow-hidden transition-all duration-300">
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    <p>
                      After MBBS, you have multiple career options: pursue MD/MS
                      for specialization (Cardiology, Neurology, Pediatrics,
                      etc.), work as a Medical Officer in government/private
                      hospitals, become a General Physician, join clinical
                      research, healthcare administration, or prepare for
                      international licensing exams like USMLE, PLAB, or AMC.
                      You can also pursue MBA in Healthcare Management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-orange-500">
                <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-orange-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-orange-600 transition-colors">
                        What is the fee structure for MBBS in India?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        Government vs Private college fees
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 transform transition-transform duration-300 faq-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="faq-answer max-h-0 overflow-hidden transition-all duration-300">
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    <p>
                      MBBS fees vary significantly: Government colleges charge
                      ₹20,000 - ₹1,00,000 per year. Private colleges range from
                      ₹5 lakhs to ₹25 lakhs annually. Deemed universities may
                      charge higher. However, government seats are highly
                      competitive based on NEET rank. Scholarships and education
                      loans are available for meritorious students.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-pink-500">
                <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-pink-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-pink-600 transition-colors">
                        Can international students study MBBS in India?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        Eligibility for foreign nationals
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 transform transition-transform duration-300 faq-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="faq-answer max-h-0 overflow-hidden transition-all duration-300">
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    <p>
                      Yes, international students can study MBBS in India
                      through the Foreign Nationals quota. They must qualify
                      NEET (except for some categories), have a valid passport,
                      and meet eligibility criteria of the respective medical
                      college. Many government and private colleges reserve
                      seats for foreign/NRI students. The application process is
                      managed through the Directorate General of Health Services
                      (DGHS).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="border-l-4 border-teal-500">
                <button className="faq-question w-full text-left p-6 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-teal-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-teal-600 transition-colors">
                        What is the admission process for medical colleges?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        Step-by-step admission guide
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 transform transition-transform duration-300 faq-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="faq-answer max-h-0 overflow-hidden transition-all duration-300">
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    <p>
                      The admission process involves: 1) Qualify NEET-UG with
                      required percentile, 2) Register for counseling (Medical
                      Counseling Committee for 15% AIQ and state authorities for
                      85% state quota), 3) Choice filling and locking of
                      colleges, 4) Seat allotment based on rank and preferences,
                      5) Document verification and fee payment. The entire
                      process is online and transparent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Help Section */}
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

      {/* Add JavaScript for FAQ Toggle */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
              question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('.faq-icon');
                
                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(item => {
                  if (item !== answer) {
                    item.style.maxHeight = null;
                    const otherIcon = item.previousElementSibling.querySelector('.faq-icon');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                  }
                });
                
                // Toggle current answer
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

      {/* ================= CTA SECTION - ATTRACTIVE DESIGN ================= */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 animate-gradient-x"></div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="medical-pattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="2" fill="white" />
                <path
                  d="M30 10 L30 50 M10 30 L50 30"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
                <path
                  d="M20 20 L40 40 M40 20 L20 40"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#medical-pattern)" />
          </svg>
        </div>

        {/* Floating Medical Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 animate-float-slow opacity-20">
            <svg
              className="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 animate-float-medium opacity-20">
            <svg
              className="w-20 h-20 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H8v-2h2V9h2v2h2v2h-2v4z" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-5 animate-pulse-slow opacity-10">
            <svg
              className="w-24 h-24 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <svg
              className="w-5 h-5 text-white animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white text-sm font-semibold tracking-wide">
              LIMITED SEATS AVAILABLE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Ready to Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Medical Journey?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Get expert guidance for admission, counseling, and career planning
            from our experienced medical advisors.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">50,000+</p>
              <p className="text-white/70 text-sm">Students Placed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-white/70 text-sm">Partner Colleges</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">95%</p>
              <p className="text-white/70 text-sm">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-white/70 text-sm">Expert Support</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5 animate-fade-in-up animation-delay-600">
            <button className="group relative bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Apply Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Talk to Expert
              </span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-up animation-delay-800">
            <p className="text-white/60 text-sm mb-4">
              Trusted by 1000+ medical aspirants every year
            </p>
            <div className="flex justify-center gap-8 text-white/40">
              <i className="fab fa-google text-2xl hover:text-white transition-colors"></i>
              <i className="fab fa-facebook-f text-2xl hover:text-white transition-colors"></i>
              <i className="fab fa-twitter text-2xl hover:text-white transition-colors"></i>
              <i className="fab fa-linkedin-in text-2xl hover:text-white transition-colors"></i>
              <i className="fab fa-instagram text-2xl hover:text-white transition-colors"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Add these animations to your CSS file */}
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

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
