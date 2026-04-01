import { Link } from "react-router-dom";
import { useState } from "react";

export default function EngineeringColleges() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const engineeringColleges = [
    {
      name: "Indian Institute of Technology Bombay (IIT Bombay)",
      location: "Mumbai, Maharashtra",
      highlights: [
        "One of the best IITs in India",
        "Top placements in tech & core sectors",
        "Strong startup culture",
      ],
      fees: "₹8–12 Lakhs (total)",
      package: "₹20-30+ LPA",
      exam: "JEE Advanced",
    },
    {
      name: "Indian Institute of Technology Delhi (IIT Delhi)",
      location: "New Delhi",
      highlights: [
        "Excellent research & innovation ecosystem",
        "Strong global collaborations",
        "Top placement record",
      ],
      fees: "₹8–12 Lakhs (total)",
      package: "₹20-30+ LPA",
      exam: "JEE Advanced",
    },
    {
      name: "Indian Institute of Technology Madras (IIT Madras)",
      location: "Chennai, Tamil Nadu",
      highlights: [
        "Ranked among top engineering institutes",
        "Known for research & innovation",
        "Excellent campus infrastructure",
      ],
      fees: "₹8–12 Lakhs (total)",
      package: "₹20-30+ LPA",
      exam: "JEE Advanced",
    },
    {
      name: "Indian Institute of Technology Kanpur (IIT Kanpur)",
      location: "Kanpur, Uttar Pradesh",
      highlights: [
        "Strong academic structure",
        "Known for core engineering branches",
        "Excellent research facilities",
      ],
      fees: "₹8–12 Lakhs (total)",
      package: "₹18-28+ LPA",
      exam: "JEE Advanced",
    },
    {
      name: "Indian Institute of Technology Kharagpur (IIT Kharagpur)",
      location: "Kharagpur, West Bengal",
      highlights: [
        "Oldest IIT in India",
        "Wide range of courses",
        "Strong alumni network",
      ],
      fees: "₹8–12 Lakhs (total)",
      package: "₹18-28+ LPA",
      exam: "JEE Advanced",
    },
    {
      name: "National Institute of Technology Tiruchirappalli (NIT Trichy)",
      location: "Tiruchirappalli, Tamil Nadu",
      highlights: [
        "Top NIT with excellent placements",
        "Strong industry connections",
        "Excellent campus life",
      ],
      fees: "₹5–8 Lakhs (total)",
      package: "₹15-25 LPA",
      exam: "JEE Main",
    },
    {
      name: "National Institute of Technology Surathkal (NIT Surathkal)",
      location: "Karnataka",
      highlights: [
        "Known for CSE & core branches",
        "High placement rates",
        "Beautiful campus location",
      ],
      fees: "₹5–8 Lakhs (total)",
      package: "₹15-25 LPA",
      exam: "JEE Main",
    },
    {
      name: "Birla Institute of Technology and Science (BITS Pilani)",
      location: "Pilani, Rajasthan",
      highlights: [
        "Top private engineering college",
        "Flexible academic structure",
        "Excellent placements",
      ],
      fees: "₹16–20 Lakhs (total)",
      package: "₹20-30 LPA",
      exam: "BITSAT",
    },
    {
      name: "Vellore Institute of Technology (VIT)",
      location: "Vellore, Tamil Nadu",
      highlights: [
        "Popular among private universities",
        "Strong placement support",
        "Global exposure opportunities",
      ],
      fees: "₹12–16 Lakhs (total)",
      package: "₹8-15 LPA",
      exam: "VITEEE",
    },
    {
      name: "SRM Institute of Science and Technology",
      location: "Chennai, Tamil Nadu",
      highlights: [
        "Good infrastructure & global exposure",
        "Wide range of specializations",
        "Strong industry connections",
      ],
      fees: "₹10–15 Lakhs (total)",
      package: "₹8-15 LPA",
      exam: "SRMJEEE",
    },
  ];

  const faqs = [
    {
      q: "What entrance exams are required for top engineering colleges?",
      a: "Top engineering colleges accept JEE Main (for NITs, IIITs, and GFTIs), JEE Advanced (for IITs), BITSAT (for BITS Pilani), VITEEE (for VIT), SRMJEEE (for SRM), and state-level entrance exams for respective state colleges.",
    },
    {
      q: "What JEE rank is required for IITs and NITs?",
      a: "For IITs with top branches (CSE, ECE), you need under 500-2000 ranks. For NITs with top branches, under 5,000-15,000 ranks. Ranks vary each year based on competition and category.",
    },
    {
      q: "What is the total duration of B.Tech?",
      a: "B.Tech is a 4-year undergraduate program divided into 8 semesters, with mandatory internship/training typically in the 3rd year.",
    },
    {
      q: "What is the fee structure for top engineering colleges?",
      a: "IITs charge ₹8-12 Lakhs total program fee. NITs charge ₹5-8 Lakhs total. Top private colleges charge ₹8-20 Lakhs total depending on the institute and specialization.",
    },
    {
      q: "What are the placement opportunities after B.Tech?",
      a: "Students get placed in IT Companies (Google, Microsoft, Amazon), Core Engineering Firms, Consulting Companies, and Startups with packages ranging from ₹8-30+ LPA in top colleges.",
    },
    {
      q: "What is the admission process for engineering colleges?",
      a: "Admission process includes: Appear for entrance exams (JEE Main/JEE Advanced), get rank/score, participate in counselling (JoSAA for IITs/NITs, State counselling, or University counselling), choose college & branch, seat allotment, and admission confirmation.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Top Engineering Colleges in India"
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
          <div>
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
              🔧 Your Gateway to Premier Engineering Education
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Top Engineering Colleges in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                India
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Secure your future with India's most prestigious engineering
              institutions. Expert guidance for B.Tech, M.Tech, and other
              engineering programs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Apply Now
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition">
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
          .animate-blob { animation: blob 10s infinite; }
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .delay-2000 { animation-delay: 2s; }
          .delay-4000 { animation-delay: 4s; }
        `}</style>
      </section>

      {/* NAVIGATION PILLS SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#why-engineering"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Why Top Engineering Colleges?
          </a>
          <a
            href="#top-colleges"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Top Engineering Colleges
          </a>
          <a
            href="#admission-process"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Admission Process
          </a>
          <a
            href="#fee-structure"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Fee Structure
          </a>
          <a
            href="#placement-opportunities"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Placement Opportunities
          </a>
          <a
            href="#why-choose-us"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Why Choose Us
          </a>
          <a
            href="#faq"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            FAQs
          </a>
        </div>
      </div>

      {/* WHY STUDY IN TOP ENGINEERING COLLEGES */}
      <section
        id="why-engineering"
        className="relative pt-14 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Study in{" "}
              <span className="text-blue-600">
                Top Engineering Colleges in India
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              India is home to some of the best engineering colleges in the
              world, known for their academic excellence, cutting-edge research,
              and outstanding placement records. These institutions offer B.Tech
              and higher programs across multiple specializations like Computer
              Science, Mechanical, Civil, Electrical, and emerging fields like
              AI & Data Science.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                alt="Top Engineering Colleges in India"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Highest Package</p>
                  <p className="text-3xl font-bold text-blue-600">₹50+ LPA</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Top Recruiters</p>
                  <p className="text-xl font-semibold text-gray-800">
                    300+ Companies
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Choose Top Engineering Colleges?
                </h3>
                <div className="space-y-3">
                  {[
                    "High placement packages (₹8–50+ LPA in top colleges)",
                    "Strong industry exposure & internships",
                    "Advanced labs & research facilities",
                    "Global recognition & alumni network",
                    "Opportunities in top MNCs & startups",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button className="px-20 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP ENGINEERING COLLEGES SECTION */}
      <section
        id="top-colleges"
        className="relative pt-4 pb-20 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Top{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Engineering Colleges in India
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Here are some of the most prestigious engineering institutes in
              India
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {engineeringColleges.map((college, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                      {college.name}
                    </h3>
                    <div className="text-3xl">⚙️</div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{college.location}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {college.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-blue-500 mt-1">⭐</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100 grid grid-cols-3 gap-2">
                    <div>
                      <p className="text-xs text-gray-500">Entrance</p>
                      <p className="text-sm font-semibold text-blue-600">
                        {college.exam}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Avg. Package</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {college.package}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Total Fees</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {college.fees}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS SECTION */}
      <section
        id="admission-process"
        className="relative pt-4 pb-20 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Admission Process for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Top Engineering Colleges
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Step-by-step guide to secure admission in India's premier
              engineering institutes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Entrance Exams
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">JEE Main</span>
                  <span className="text-sm text-gray-500">
                    For NITs, IIITs, GFTIs
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">
                    JEE Advanced
                  </span>
                  <span className="text-sm text-gray-500">For IITs</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">BITSAT</span>
                  <span className="text-sm text-gray-500">
                    For BITS Pilani campuses
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">
                    VITEEE / SRMJEEE
                  </span>
                  <span className="text-sm text-gray-500">For VIT / SRM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">
                    State Entrance Exams
                  </span>
                  <span className="text-sm text-gray-500">
                    For state engineering colleges
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Admission Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <span>Appear for entrance exams (JEE Main/JEE Advanced)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <span>Get rank/score</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <span>
                    Participate in counselling (JoSAA / State / University)
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <span>Choose college & branch based on rank</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <span>Seat allotment & admission confirmation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-5xl mx-auto bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Rank Required (Approx)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">IITs (Top branches)</p>
                    <p className="font-bold text-blue-600">
                      Top 500–5,000 ranks
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">NITs (Top branches)</p>
                    <p className="font-bold text-blue-600">
                      Top 5,000–20,000 ranks
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Good Private Colleges
                    </p>
                    <p className="font-bold text-blue-600">
                      Higher ranks accepted
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  (Varies every year based on competition and category)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE SECTION */}
      <section
        id="fee-structure"
        className="relative pt-4 pb-20 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <span className="text-blue-600 text-sm font-semibold">
                💰 Fee Overview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fee Structure <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                (Total Program Fee)
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Understand the approximate fee range for top engineering colleges
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <span className="text-3xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">IITs</h3>
                <div className="mt-3 mb-4">
                  <span className="text-3xl font-bold text-blue-600">
                    ₹8–12
                  </span>
                  <span className="text-gray-500"> Lakhs</span>
                </div>
                <p className="text-sm text-gray-500">Total Program Fee</p>
              </div>
            </div>
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">NITs</h3>
                <div className="mt-3 mb-4">
                  <span className="text-3xl font-bold text-purple-600">
                    ₹5–8
                  </span>
                  <span className="text-gray-500"> Lakhs</span>
                </div>
                <p className="text-sm text-gray-500">Total Program Fee</p>
              </div>
            </div>
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-green-500"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <span className="text-3xl">🏫</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Private Colleges
                </h3>
                <div className="mt-3 mb-4">
                  <span className="text-3xl font-bold text-emerald-600">
                    ₹8–20
                  </span>
                  <span className="text-gray-500"> Lakhs</span>
                </div>
                <p className="text-sm text-gray-500">Total Program Fee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLACEMENT OPPORTUNITIES SECTION */}
      <section
        id="placement-opportunities"
        className="relative pt-4 pb-20 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Placement <span className="text-blue-600">Opportunities</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Students from top engineering colleges get placed in leading
              companies across sectors
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Google", icon: "🔍", sector: "IT & Tech" },
              { name: "Microsoft", icon: "💻", sector: "IT & Tech" },
              { name: "Amazon", icon: "🛒", sector: "E-commerce" },
              { name: "Apple", icon: "🍎", sector: "IT & Tech" },
              { name: "Meta", icon: "📱", sector: "IT & Tech" },
              { name: "Tata Motors", icon: "🚗", sector: "Core Engineering" },
              { name: "L&T", icon: "🏗️", sector: "Core Engineering" },
              { name: "McKinsey", icon: "📊", sector: "Consulting" },
              { name: "Goldman Sachs", icon: "🏦", sector: "Finance" },
              { name: "Flipkart", icon: "📦", sector: "E-commerce" },
            ].map((company, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition">
                  {company.icon}
                </div>
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  {company.name}
                </p>
                <p className="text-xs text-gray-500">{company.sector}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
              🚀 300+ Top Companies Recruit from Premier Engineering Colleges
              Every Year
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section
        id="why-choose-us"
        className="relative pt-12 pb-20 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Engineering College Admission Guidance"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="font-bold text-gray-800">Trusted by</p>
                    <p className="text-2xl font-bold text-blue-600">25,000+</p>
                    <p className="text-xs text-gray-500">
                      Engineering Aspirants
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <span className="text-blue-600 text-sm font-semibold">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Trusted Partner for <br />
                <span className="text-blue-600">
                  Engineering Admission Guidance
                </span>
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive support to help you navigate the
                complex engineering admission process with ease.
              </p>
              <div className="space-y-4">
                {[
                  "Rank-based college & branch prediction",
                  "JEE counselling support (JoSAA & State)",
                  "College shortlisting based on your goals",
                  "Admission assistance & document support",
                  "Career guidance & roadmap planning",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Journey →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        id="faq"
        className="pt-6 pb-14 px-6 bg-gradient-to-br from-gray-50 to-indigo-50/30"
      >
        <div className="max-w-7xl mx-auto">
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
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="border-l-4 border-blue-500">
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                    }
                    className="w-full text-left p-6 flex justify-between items-center"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                        <h3 className="font-semibold text-gray-800 text-lg">
                          {faq.q}
                        </h3>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${openFaqIndex === idx ? "rotate-180" : ""}`}
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
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? "max-h-96" : "max-h-0"}`}
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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

      {/* CTA SECTION */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="engineering-pattern"
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
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#engineering-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Targeting Top Engineering Colleges in India?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-300">
              Get Expert Guidance
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                🎯 Get a personalized college list based on your JEE rank
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                📊 Choose the best branch for your career
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-white text-sm">
                ✅ Secure admission with expert guidance
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <button className="group relative bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Book your FREE counselling session today!
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

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
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
