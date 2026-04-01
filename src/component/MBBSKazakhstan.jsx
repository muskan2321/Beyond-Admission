import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MBBSKazakhstan() {
  // for FAQ start
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "Is MBBS in Kazakhstan valid in India?",
      answer:
        "Yes, if done from an NMC-approved university and after clearing FMGE/NExT.",
    },
    {
      question: "Is NEET required?",
      answer: "Yes, NEET qualification is mandatory.",
    },
    {
      question: "Is IELTS required?",
      answer: "No, IELTS is not required.",
    },
    {
      question: "Is Kazakhstan safe for Indian students?",
      answer: "Yes, it is safe with a large Indian student community.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // for FAQ end

  return (
    <div className="bg-white font-[Inter]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/MBBS BG1.jpg"
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
              Study MBBS in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Kazakhstan
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
      {/* tabs for particular section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4">
        <a
          href="#why-Georgia"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why MBBS In Kazakhstan?
        </a>

        <a
          href="#georgia-highlights"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Kazakhstan Highlights
        </a>

        <a
          href="#eligibility"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Eligibility Criteria
        </a>

        <a
          href="#admission"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Admission Process
        </a>

        <a
          href="#georgi-intakes"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Kazakhstan Intakes
        </a>

        <a
          href="#documents-required"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Documents Required
        </a>

        <a
          href="#exam-required"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Exam Required
        </a>

        <a
          href="#georgia-courses"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Kazakhstan Courses
        </a>

        <a
          href="#georgia-syllabus"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Kazakhstan Syllabus
        </a>

        <a
          href="#fees-structure"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Fees Structure
        </a>

        <a
          href="#hostel"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Hostel & Accommodation
        </a>

        <a
          href="#living"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Living Cost
        </a>

        <a
          href="#nmc"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          NMC Approval
        </a>

        <a
          href="#top"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Top Universities
        </a>

        <a
          href="#faq"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          FAQ
        </a>
      </div>
      {/* INTRO SECTION */}
      <section className="relative pt-12 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Animated Background Lights */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>

        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>

        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>

        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              MBBS in <span className="text-blue-600">Kazakhstan</span> for
              Indian Students
            </h2>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Complete Guide 2026 – Study at top NMC-approved universities with
              world-class infrastructure and affordable fees.
            </p>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>

              <img
                src="/image/georgia-mbbs.png"
                alt="MBBS in Georgia"
                className="relative rounded-3xl shadow-xl w-full h-[350px] sm:h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Success Rate
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                    98%
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Students Enrolled
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-gray-800">
                    10,000+
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Why Choose MBBS in Kazakhstan?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Study MBBS in Kazakhstan at top NMC-approved universities
                  offering quality education at an affordable cost. It is one of
                  the most budget-friendly destinations for Indian students
                  pursuing MBBS abroad, with modern infrastructure and
                  experienced faculty
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  MBBS in Kazakhstan is popular among Indian students due to its
                  low fees, simple admission process, and English-medium
                  programs. The country also provides a safe and
                  student-friendly environment.
                </p>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Medical universities in Kazakhstan are recognized by NMC, WHO,
                  ECFMG, and FAIMER, allowing students to build careers in India
                  and abroad. With strong clinical exposure and FMGE support, it
                  is a reliable choice for MBBS.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Low Cost MBBS",
                  "English Medium Programs",
                  "No Donation Required",
                  "NMC & WHO Approved Universities",
                  // "Affordable Tuition Fees",
                  // "Global Career Opportunities",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-yellow-500 hover:bg-blue-100 transition rounded-xl p-3 text-sm sm:text-base font-medium text-black"
                  >
                    <span className="font-bold">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="flex justify-center">
                <button className="mt-4 px-8 sm:px-12 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
                  Book Your Free Counselling
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
      {/* WHY STUDY MBBS Kazakhstan */}
      <section
        id="why-Georgia"
        className="relative pt-4 pb-10 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden"
      >
        {/* Glow Background */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300/30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE (TEXT LIKE AFFINITY) */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why Study{" "}
                <span className="text-blue-600">MBBS in Kazakhstan?</span>
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Studying MBBS in Kazakhstan has become a popular choice for
                Indian students due to its affordable fees, globally recognized
                degrees, and quality education system. Universities in
                Kazakhstan offer a safe environment, modern infrastructure, and
                strong academic support.
              </p>

              {/* Bullet Points */}
              <div className="mt-8 space-y-5">
                {[
                  "Very affordable tuition fees",
                  "No donation or capitation fee",
                  "English-medium MBBS programs",
                  "NMC-approved universities",
                  "Simple and fast admission process",
                  "Good student-teacher ratio",
                  "Strong focus on practical training",
                  "Large number of Indian students",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white text-base mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE (PREMIUM FEATURE BOX GRID) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "💸", title: "Very Affordable Tuition Fees" },
                { icon: "🚫", title: "No Donation Required" },
                { icon: "🌐", title: "English-Medium Programs" },
                { icon: "🎓", title: "NMC-Approved Universities" },
                { icon: "⚡", title: "Fast Admission Process" },
                { icon: "👨‍🏫", title: "Good Student-Teacher Ratio" },
                { icon: "🧪", title: "Practical-Based Learning" },
                { icon: "🇮🇳", title: "High Indian Student Presence" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-white shadow-md border hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xl group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* MBBS IN Kazakhstan – KEY HIGHLIGHTS */}
      <section
        id="georgia-highlights"
        className="relative pt-4 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 blur-[120px] rounded-full"></div>
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-indigo-400/30 blur-[120px] rounded-full"></div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center mb-10">
            MBBS in <span className="text-blue-600">Kazakhstan</span> Highlights
          </h2>

          {/* TABLE CARD WRAPPER (IMPORTANT 🔥) */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                {/* Header */}
                <thead>
                  <tr className="bg-slate-800 text-white text-left">
                    <th className="p-4 border border-gray-300">
                      KEY INFORMATION
                    </th>
                    <th className="p-4 border border-gray-300">DETAILS</th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody className="text-gray-800 ">
                  {/* 🔥 Same rows as your code (unchanged) */}
                  {/* bas ek small improvement: hover effect add kiya */}

                  {[
                    [
                      "Medical Program",
                      "MBBS/MD (Equivalent to MBBS in India)",
                    ],
                    [
                      "Degree Type",
                      "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
                    ],
                    ["Study Destination", "Kazakhstan"],
                    [
                      "Total Course Duration",
                      "5–6 Years (Including Clinical Training)",
                    ],
                    [
                      "MBBS in Kazakhstan Eligibility",
                      "10+2 with Physics, Chemistry, Biology + NEET qualification",
                    ],
                    [
                      "Minimum Marks Required",
                      "50% for General, 40% for SC/ST/OBC",
                    ],
                    [
                      "NEET Requirement",
                      "Yes, NEET Exam is mandatory for Indian students",
                    ],
                    [
                      "Entrance Exam in Kazakhstan",
                      "Generally no entrance exam for most universities",
                    ],
                    [
                      "Medium of Instruction",
                      "English Medium (Russian/Kazakh also available)",
                    ],
                    [
                      "English Language Requirement",
                      "IELTS or TOEFL not required",
                    ],
                    [
                      "Global Recognition",
                      "WHO, NMC, FAIMER, UNESCO and USMLE",
                    ],
                    ["Degree Awarded", "MD (Equivalent to MBBS in India)"],
                    [
                      "Approx Annual Tuition Fee Range",
                      "$3,800 – $6,300 (₹351,120 - ₹581,820)",
                    ],
                    [
                      "Approx Annual Hostel Fee Range",
                      "$500 – $1,000 (₹46,200 - ₹92,400)",
                    ],
                    [
                      "Approx Total MBBS Cost",
                      "$20,400 - $26,850 (₹19 Lakhs - ₹25 Lakhs)",
                    ],
                    [
                      "Approx Annual Living Cost",
                      "$3,600 – $8,400 (₹332,640 - ₹776,160)",
                    ],
                    [
                      "Top Cities for MBBS",
                      "Almaty, Astana, Karaganda, Semey, Shymkent",
                    ],
                    [
                      "Top Medical Universities",
                      "Kazakh National Medical University, Astana Medical University, Karaganda State Medical University, Semey Medical University, South Kazakhstan Medical Academy, Al-Farabi Kazakh National University",
                    ],
                    ["Admission Intakes", "September and February"],
                    ["Visa Processing Time", "15–30 Days (approx)"],
                    [
                      "Accommodation Options",
                      "University Hostel and Private Apartments",
                    ],
                    [
                      "Hostel Facilities",
                      "Furnished rooms, WiFi, electricity, mess, security, CCTV, gym, laundry and more",
                    ],
                    [
                      "Food Availability",
                      "Indian food is available in many universities",
                    ],
                    [
                      "Indian Student Community",
                      "A large number of Indian students are studying in Kazakhstan",
                    ],
                    [
                      "Clinical Training",
                      "Includes practical and clinical exposure during the course",
                    ],
                    [
                      "Internship Valid in India",
                      "Yes, after clearing FMGE/NExT as per NMC rules",
                    ],
                    [
                      "Syllabus Pattern",
                      "learning with theory and practical training",
                    ],
                    ["Number of Medical Universities", "14+"],
                    [
                      "Documents Required",
                      "10th & 12th marksheets, NEET scorecard, passport, school leaving certificate, police clearance certificate, bank statement, invitation letter, photographs, medical fitness certificate, HIV report, birth certificate",
                    ],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-blue-50 transition`}
                    >
                      <td className="p-4 border border-gray-300 font-bold">
                        {row[0]}
                      </td>
                      <td
                        className={`p-4 border border-gray-300 ${
                          [0, 8, 12, 13, 14, 15, 17].includes(index)
                            ? "font-bold"
                            : ""
                        }`}
                      >
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* eligibility */}
      <section id="eligibility" className="pt-4 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            MBBS in Kazakhstan{" "}
            <span className="text-blue-600">Eligibility </span>
            Criteria 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-8">
            The eligibility criteria are the initial requirements that students
            must fulfill to pursue MBBS in Kazakhstan. These criteria ensure
            that applicants are academically qualified and ready for medical
            studies. By understanding and meeting the eligibility requirements
            in advance, students can avoid last-minute issues and make the
            admission process smooth. Proper preparation also increases the
            chances of securing admission to the desired university without any
            delay.
          </p>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-300">
            <table className="w-full border-collapse">
              {/* Header */}
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">
                    ELIGIBILITY CRITERIA
                  </th>
                  <th className="p-4 border border-gray-300">DETAILS</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Academic Qualification
                  </td>
                  <td className="p-4 border border-gray-300">
                    Must complete 10+2 with Physics, Chemistry, and Biology from
                    a regular board
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Minimum Marks
                  </td>
                  <td className="p-4 border border-gray-300">
                    50% required in PCB (40% for SC/ST/OBC students)
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    NEET Requirement
                  </td>
                  <td className="p-4 border border-gray-300">
                    Qualifying NEET Exam is mandatory
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Age Limit
                  </td>
                  <td className="p-4 border border-gray-300">
                    Must be at least 17 years old by 31st December of the
                    admission year
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ADMISSION PROCESS SECTION */}

      <section
        id="admission"
        className="relative pt-4 pb-10 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/30 blur-[140px] rounded-full"></div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Glass Card Wrapper */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 p-10 md:p-14">
            {/* Heading (LEFT ALIGN - AFFINITY STYLE) */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              MBBS in <span className="text-blue-600">Kazakhstan</span>{" "}
              Admission Process
            </h2>

            {/* Paragraph (LEFT ALIGN + WIDTH CONTROL) */}
            <p className="text-gray-700 leading-relaxed max-w-4xl mb-10">
              The admission process for MBBS in Kazakhstan is straightforward
              and student-friendly for aspiring candidates. Students need to
              fulfill the eligibility criteria carefully to avoid any delays or
              issues during admission. Proper documentation and timely
              submission are essential for a smooth process. By following each
              step correctly, students can ensure a hassle-free experience and
              improve their chances of securing admission to top medical
              universities. Below is the step-by-step admission process.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 text-gray-800 max-w-4xl">
              {[
                "Visit the official website of your chosen medical university in Kazakhstan.",
                "Fill out the application form carefully with accurate details.",
                "Submit all required documents, including academic certificates, passport copy, NEET scorecard, and photographs.",
                "Wait for the university to review your application and issue the admission/offer letter.",
                "Pay the required admission or tuition fee to confirm your seat.",
                "Apply for a student visa with all necessary documents.",
                "Wait for visa approval and complete the visa process.",
                "Plan and book your travel to Kazakhstan.",
                "Arrive in Kazakhstan and complete the university enrollment formalities.",
                "Begin your MBBS journey in Kazakhstan.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  {/* Dot (slightly bigger + clean) */}
                  <span className="mt-2 w-2.5 h-2.5 bg-blue-600 rounded-full"></span>

                  {/* Text */}
                  <span className="text-base md:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* INTAKES SECTION */}
      <section
        id="georgi-intakes"
        className="relative pt-6 pb-10 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden"
      >
        {/* Glow Effects (light rakha) */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Content Wrapper (NO heavy card – clean look) */}
          <div className="max-w-4xl">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MBBS in <span className="text-blue-600">Kazakhstan</span> Intakes
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Kazakhstan offers two main MBBS admission intakes each year, in
              <span className="font-semibold text-gray-900">
                {" "}
                February{" "}
              </span>{" "}
              and
              <span className="font-semibold text-gray-900"> September</span>,
              with September being the most preferred as universities release
              the highest number of seats during this time. The admission
              process begins a few months earlier, so students should start
              preparing in advance and keep all necessary documents ready,
              including academic records and passport copies. As the September
              intake is in high demand and seats get filled quickly, applying
              early is strongly recommended to ensure a smooth admission process
              without delays.
            </p>
          </div>
        </div>
      </section>
      {/* DOCUMENTS REQUIRED */}
      <section id="documents-required" className="pt-4 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in Kazakhstan <span className="text-blue-600">Documents </span>
            Required
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            Submitting the required documents is an important step for admission
            to MBBS in Kazakhstan. These documents allow universities to verify
            a student’s academic qualifications, identity, and medical fitness.
            Having all documents prepared correctly helps ensure a smooth
            admission process without unnecessary delays. Students are advised
            to arrange and update all required papers in advance according to
            university guidelines. Careful submission of documents also improves
            the chances of securing admission successfully. Below is the list of
            documents required for studying MBBS in Kazakhstan.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              10th and 12th Mark Sheets
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              NEET Scorecard
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Valid Passport
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              School Leaving Certificate
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Police Clearance Certificate
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Bank Statement
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Invitation Letter from the University
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Passport-size Photographs
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Medical Fitness Certificate
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              HIV/AIDS Negative Report
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Birth Certificate
            </li>
          </ul>
        </div>
      </section>
      {/* MBBS in Georgia Exam Required */}

      {/* MBBS in Georgia Courses */}
      <section
        id="georgia-courses"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in <span className="text-blue-700">Kazakhstan</span> Courses
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            MBBS programs in Kazakhstan are increasingly preferred by
            international students because of their affordable fees and quality
            education. These courses are provided by well-recognized medical
            universities that follow global standards, with English-medium
            options available for international students. The program usually
            lasts 5 to 6 years, covering both theoretical knowledge and
            practical clinical training. Students benefit from modern
            facilities, experienced faculty, and internationally recognized
            degrees, making Kazakhstan a strong choice for pursuing a medical
            career. Explore the programs listed below.
          </p>

          {/* Bullet List */}
          <div className="overflow-x-auto border border-gray-300">
            <table className="w-full border-collapse">
              {/* Header */}
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">Program</th>
                  <th className="p-4 border border-gray-300">Duration</th>
                  <th className="p-4 border border-gray-300">Medium</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    General Medicine
                  </td>
                  <td className="p-4 border border-gray-300">5 - 6 years</td>
                  <td className="p-4 border border-gray-300">
                    English/Russian{" "}
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Pharmacy
                  </td>
                  <td className="p-4 border border-gray-300">4 - 5 years</td>
                  <td className="p-4 border border-gray-300">
                    English/Russian{" "}
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Dentistry
                  </td>
                  <td className="p-4 border border-gray-300">5 years</td>
                  <td className="p-4 border border-gray-300">
                    English/Russian{" "}
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Paediatrics
                  </td>
                  <td className="p-4 border border-gray-300">
                    English/Russian{" "}
                  </td>
                  <td className="p-4 border border-gray-300">
                    English/Russian{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* SYLLABUS SECTION */}
      <section
        id="georgia-syllabus"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in <span className="text-blue-700">Kazakhstan</span> Syllabus
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            The MBBS syllabus in Kazakhstan is structured to guide students from
            basic concepts to advanced medical knowledge in a gradual manner. In
            the initial years, students study core subjects to build a strong
            foundation, while the later years focus on clinical exposure and
            hands-on practical training. This learning approach makes the
            process more effective and easy to understand. It helps students
            develop solid medical knowledge, enhance their practical skills, and
            build confidence to become skilled and compassionate doctors in the
            future. The syllabus details are given below.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">YEAR</th>
                  <th className="p-4 border border-gray-300">SUBJECTS</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    1st Year
                  </td>
                  <td className="p-4 border border-gray-300">
                    Anatomy, Embryology, Histology, Bioorganic Chemistry,
                    Psychology, Cytology, Medical Chemistry
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    2nd Year
                  </td>
                  <td className="p-4 border border-gray-300">
                    Anatomy, Microbiology, Embryology, Immunology, Physiology,
                    Biochemistry, Emergency Medicine
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    3rd Year
                  </td>
                  <td className="p-4 border border-gray-300">
                    Pharmacology, Radiology, Pathophysiology, Internal Medicine,
                    Surgery, Paediatrics, Hygiene
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    4th Year
                  </td>
                  <td className="p-4 border border-gray-300">
                    Neurology, Paediatrics, Forensic Medicine, Surgery,
                    Obstetrics, Ophthalmology, Biostatistics
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    5th Year
                  </td>
                  <td className="p-4 border border-gray-300">
                    Neurosurgery, Gynaecology, Oncology, Epidemiology, Internal
                    Medicine, Genetics, Stomatology
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    6th Year
                  </td>
                  <td className="p-4 border border-gray-300">
                    General Practice, Surgery, Paediatrics, Obstetrics,
                    Oncology, Infectious Diseases
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* MBBS in Georgia Fees Structure */}
      <section
        id="fees-structure"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in Kazakhstan <span className="text-blue-700">Fees</span>{" "}
            Structure 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            The MBBS fee structure in Kazakhstan for 2026 is a major reason why
            many international and Indian students choose to study there. The
            universities offer quality medical education at a reasonable cost,
            making it a budget-friendly option. Although the fees can vary based
            on the university, its facilities, and location, they are still
            lower compared to many other countries. Below are some well-known
            medical universities in Kazakhstan along with their estimated fees
            to help students make the right choice.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">
                    UNIVERSITY NAME
                  </th>
                  <th className="p-4 border border-gray-300">
                    ANNUAL TUITION COST (USD – APPROX.)
                  </th>
                  <th className="p-4 border border-gray-300">
                    APPROX ANNUAL TUITION FEE (INR – APPROX.)
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Kazakh Medical University
                  </td>
                  <td className="p-4 border border-gray-300">$6,181</td>
                  <td className="p-4 border border-gray-300">₹561,246</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Kazakh National Medical University
                  </td>
                  <td className="p-4 border border-gray-300">$6,300</td>
                  <td className="p-4 border border-gray-300">₹583,285</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Al-Farabi Kazakh National University
                  </td>
                  <td className="p-4 border border-gray-300">$4,900</td>
                  <td className="p-4 border border-gray-300">₹457,256</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Semey State Medical University
                  </td>
                  <td className="p-4 border border-gray-300">$3,800</td>
                  <td className="p-4 border border-gray-300">₹354,662</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Astana Medical University
                  </td>
                  <td className="p-4 border border-gray-300">$5,500</td>
                  <td className="p-4 border border-gray-300">₹513,285</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Karaganda State Medical University
                  </td>
                  <td className="p-4 border border-gray-300">$4,100</td>
                  <td className="p-4 border border-gray-300">₹382,568</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    South Kazakhstan Medical Academy
                  </td>
                  <td className="p-4 border border-gray-300">$4,400</td>
                  <td className="p-4 border border-gray-300">₹410,561</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Hostel & Accommodation Section */}
      <section
        id="hostel"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in Kazakhstan <span className="text-blue-700">Hostel & </span>{" "}
            Accommodation
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            Many Indian students prefer studying MBBS in Kazakhstan and often
            feel both excitement and slight nervousness while starting their
            journey in a new country. However, there is no need to worry about
            accommodation, as the hostel facilities are well-designed to provide
            a comfortable and homely environment. The rooms are fully furnished
            and include all essential amenities required by students. Most
            universities have hostels located near the campus, which makes daily
            life convenient. Indian students can also find Indian food options
            along with a friendly and supportive atmosphere. Universities ensure
            proper safety and security so that students can adjust easily and
            focus on their studies.
          </p>

          <ul className="space-y-3 text-gray-800 max-w-4xl">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Well-maintained hostels with furnished rooms, proper hygiene, and
              mess facilities
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Rooms equipped with basic items like beds, study tables, and
              chairs
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Continuous electricity supply and high-speed Wi-Fi access
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              On-campus amenities such as a gym, swimming pool, and laundry
              services
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Canteen facilities offering both vegetarian and non-vegetarian
              meals prepared by professional chefs
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              24/7 CCTV surveillance for safety
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Security guards at the entrance to allow only authorized
              individuals
            </li>
          </ul>
        </div>
      </section>

      {/* MBBS in Georgia Living Cost */}
      <section
        id="living "
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in Kazakhstan <span className="text-blue-700">Living </span>
            Cost
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            The cost of pursuing MBBS in Kazakhstan in 2026 is considered
            budget-friendly for both international and Indian students. The
            overall living expenses are quite affordable, making it easier for
            students to manage their daily needs. On average, the annual cost of
            living ranges from $3600 to $8400 (₹333,360 to ₹777,840). However,
            this cost can vary depending on a student’s lifestyle and personal
            choices. These expenses generally cover accommodation, food,
            transportation, and other daily necessities. A detailed breakdown of
            these expenses is given below.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Head */}
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    CATEGORY
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    APPROX ANNUAL AMOUNT <br />
                    <span className="text-sm">(IN USD)</span>
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    APPROX ANNUAL AMOUNT <br />
                    <span className="text-sm">(IN INR)</span>
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                {[
                  ["Hostel", "$500 – $1,000", "₹46,300 – ₹92,600"],
                  ["Mess (Food)", "$1,200", "₹111,120"],
                  ["Travel Expenses", "$500 – $1,000", "₹46,300 – ₹92,600"],
                  ["Miscellaneous", "$500 – $1,000", "₹46,300 – ₹92,600"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}
                    </td>
                    <td className="p-4 border border-gray-300">{row[1]}</td>
                    <td className="p-4 border border-gray-300">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* NMC Approval Medical Universities in Georgia */}
      <section
        id="nmc"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            NMC Approval{" "}
            <span className="text-blue-700">Medical Universities</span> in
            Kazakhstan
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            Choosing the right university is an important step for students
            planning to study MBBS abroad. Kazakhstan has many NMC-approved
            medical universities, so students should select one based on budget,
            location, and facilities. These universities offer quality
            education, experienced faculty, and modern infrastructure at an
            affordable cost with a low cost of living. Some top options include
            Karaganda State Medical University and Semey Medical University.
            Students should compare all factors carefully before making a final
            decision.
          </p>
        </div>
      </section>
      {/* TOP MEDICAL UNIVERSITIES IN 
Kazakhstan  */}
      <section
        id="top"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            Top Medical <span className="text-blue-700">Universities </span>
            In Kazakhstan{" "}
          </h2>
          {/* {/* Kazakh National Medical University */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4 pt-4">
            Kazakh National <span className="text-blue-700">Medical </span>
            University
          </h2>
          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            Kazakh National Medical University (KazNMU) is a public university
            in Almaty, established in 1930. It offers quality medical education
            in courses like MBBS, Dentistry, Pharmacy, and Nursing with
            experienced faculty and modern facilities.The university is approved
            by NMC and WHO, provides English-medium education, and does not
            require IELTS or TOEFL. With affordable fees, safe accommodation,
            and a diverse environment, it is a popular choice among
            international students.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Head */}
              <thead>
                <tr className="bg-gradient-to-r bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    CATEGORY
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    INFORMATION
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                {[
                  [
                    "University Name",
                    "Kazakh National Medical University (KazNMU)",
                  ],
                  ["Established In", "1930"],
                  ["Location", "Almaty, Kazakhstan"],
                  ["University Type", "Public"],
                  ["Language of Teaching", "English"],
                  ["Course Duration", "6 years (Including internship)"],
                  ["Accreditation", "WHO and NMC"],
                  ["Country Ranking", "5th"],
                  [
                    "Required Marks",
                    "Minimum 50% in Physics, Chemistry, and Biology",
                  ],
                  ["Entrance Exam", "NEET is required for Indian students"],
                  ["Age Requirement", "Minimum 17 years"],
                  ["IELTS / TOEFL Requirement", "Not required"],
                  ["Approx Annual Tuition Fee", "$6300 (₹583,285)"],
                  ["Approx Annual Living Cost", "$8400 (₹777,840)"],
                  [
                    "Scholarship",
                    "Merit-based scholarships for top students are available",
                  ],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}
                    </td>
                    <td
                      className={`p-4 border border-gray-300 ${
                        [1, 7, 12, 13].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Georgian American University Section */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4 pt-5">
            South Kazakhstan <span className="text-blue-700">Medical </span>
            Academy
          </h2>
          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            South Kazakhstan Medical Academy (SKMA) is a public university
            established in 1979 in Shymkent, Kazakhstan. It is recognized by
            WHO, NMC, FAIMER, and other international bodies. The university
            offers courses like MBBS, MD, BDS, and Pharmacy, mainly in
            English.SKMA has over 11,000 students from 55+ countries, including
            many international and Indian students. With 500+ qualified faculty
            members and regular seminars, it provides quality, student-focused
            medical education.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Head */}
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    CATEGORY
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    INFORMATION
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                {[
                  [
                    "University Name",
                    "South Kazakhstan Medical Academy (SKMA)",
                  ],
                  ["Establishment Year", "1979"],
                  ["Location", "Shymkent, Kazakhstan"],
                  ["University Type", "Public"],
                  ["Language of Teaching", "English"],
                  ["Course Duration", "Not specified"],
                  [
                    "Accreditation",
                    "WHO, NMC, FAIMER, USMLE and Ministry of Education and Science of the Republic of Kazakhstan",
                  ],
                  [
                    "Required Marks",
                    "Minimum 50% in Physics, Chemistry, and Biology",
                  ],
                  ["Country Ranking", "11th"],
                  ["Entrance Exam", "NEET Exam"],
                  ["Age Requirement", "At least 17 Years old"],
                  ["IELTS / TOEFL Requirement", "Not Required"],
                  ["Approx Annual Tuition Fee", "$4400 (₹4,10,561)"],
                  ["Approx Annual Living Cost", "$6,000 (₹555,600)"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}
                    </td>
                    <td
                      className={`p-4 border border-gray-300 ${
                        [1, 6, 12, 13].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Al-Farabi Kazakh National University */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4 pt-5">
            Al-Farabi Kazakh <span className="text-blue-700">National </span>
            University
          </h2>
          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            Al-Farabi Kazakh National University, established in 1934 in Almaty,
            is one of the oldest and most prestigious universities in
            Kazakhstan. It is known for its quality education and innovation,
            attracting students from over 100 countries. The university is
            recognized by NMC, WHO, and UNESCO and offers around 300 seats in
            English-medium programs.With strong global collaborations, modern
            facilities, advanced labs, and experienced faculty, it provides
            excellent academic and clinical training for medical students.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Head */}
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    CATEGORY
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    INFORMATION
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                {[
                  ["University Name", "Al-Farabi Kazakh National University"],
                  ["Establishment Year", "1934"],
                  ["Location", "Almaty, Kazakhstan"],
                  ["University Type", "Public"],
                  ["Language of Teaching", "English"],
                  ["Course Duration", "Not specified"],
                  [
                    "Accreditation",
                    "NMC, WHO, UNESCO and other institutional recognitions",
                  ],
                  ["Country Ranking", "1st"],
                  ["Entrance Exam", "NEET is required for Indian students"],
                  [
                    "Required Marks",
                    "Minimum 50% in Physics, Chemistry, and Biology",
                  ],
                  ["Age Requirement", "Minimum 17 years"],
                  ["IELTS / TOEFL Requirement", "Not Required"],
                  ["Approx Annual Tuition Fee", "$4900 (₹4,57,256)"],
                  ["Approx Annual Living Cost", "$8400 (₹777,840)"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}
                    </td>
                    <td
                      className={`p-4 border border-gray-300 ${
                        [1, 6, 12, 13].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Astana Medical University  */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4 pt-5">
            Astana <span className="text-blue-700">Medical </span>
            University
          </h2>
          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            Astana Medical University, established in 1964, is a top medical
            university in Kazakhstan, offering high-quality education with
            modern teaching methods. It has around 150 English-medium seats for
            international students and is recognised by WHO, UNESCO, and NMC.
            The university provides undergraduate and postgraduate courses with
            well-equipped facilities, secure hostels, and a safe, multicultural
            environment for students.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Head */}
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    CATEGORY
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    INFORMATION
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                {[
                  ["University Name", "Al-Farabi Kazakh National University"],
                  ["Established Year", "1934"],
                  ["Location", "Almaty, Kazakhstan"],
                  ["University Type", "Public"],
                  ["Language of Teaching", "English"],
                  ["Course Duration", "Not specified"],
                  [
                    "Accreditation",
                    "NMC, WHO, UNESCO and other institutional recognitions",
                  ],
                  ["Country Ranking", "1st"],
                  ["Entrance Exam", "NEET is required for Indian students"],
                  [
                    "Required Marks",
                    "Minimum 50% in Physics, Chemistry, and Biology",
                  ],
                  ["Age Requirement", "Minimum 17 years"],
                  ["IELTS / TOEFL Requirement", "Not Required"],
                  ["Approx Annual Tuition Fee", "$4900 (₹4,57,256)"],
                  ["Approx Annual Living Cost", "$8400 (₹777,840)"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}
                    </td>
                    <td
                      className={`p-4 border border-gray-300 ${
                        [1, 6, 12, 13].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Asfendiyarov Kazakh National Medical University Section */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
            Asfendiyarov Kazakh National{" "}
            <span className="text-blue-700">Medical</span> University
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            Asfendiyarov Kazakh National Medical University (KazNMU) is a public
            university in Almaty, Kazakhstan, founded in 1931. Ranked 24th
            nationally, it offers 250 English-medium seats for international
            students and is recognised by WHO, NMC, and FAIMER.The university
            provides MBBS, Dentistry, Pharmacy, and Nursing programs with highly
            qualified faculty. It has 8 faculties and multiple Bachelor’s,
            Master’s, and PhD programs. KazNMU offers affordable fees, modern
            infrastructure, hands-on clinical training, and a student-focused
            curriculum, making it a top choice for Indian students.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Head */}
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    CATEGORY
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    INFORMATION
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                {[
                  [
                    "University Name",
                    "Asfendiyarov Kazakh National Medical University (KazNMU)",
                  ],
                  ["Established In", "1931"],
                  ["Location", "Almaty, Kazakhstan"],
                  ["University Type", "Public"],
                  ["Language of Teaching", "English"],
                  ["Course Duration", "6 years (MBBS/MD)"],
                  ["Accreditation", "WHO, NMC and FAIMER"],
                  ["Country Ranking", "24th"],
                  ["Entrance Exam", "NEET is required for Indian students"],
                  [
                    "Required Marks",
                    "Minimum 50% in Physics, Chemistry, and Biology",
                  ],
                  ["Age Requirement", "Minimum 17 years"],
                  ["IELTS / TOEFL Requirement", "Not Required"],
                  ["Approx Annual Tuition Fee", "$6,570 (₹5,76,801)"],
                  ["Approx Annual Living Cost", "$8,400 (₹777,840)"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}
                    </td>

                    <td
                      className={`p-4 border border-gray-300 ${
                        [0, 6, 8, 12, 13].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section
        id="faq"
        className="py-20 bg-gradient-to-b from-blue-50 via-white to-indigo-100"
      >
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Frequently <span className="text-blue-600">Asked </span>Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-blue-50 transition"
                >
                  {faq.question}
                  <span className="text-blue-600 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white overflow-hidden">
        {" "}
        {/* Glow Effects */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/20 blur-[120px] rounded-full"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            APPLY NOW FOR MBBS IN KAZAKHSTAN
          </h2>

          <p className="mt-2 text-xl md:text-2xl font-semibold text-blue-100">
            2026
          </p>

          {/* Subtext */}
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Start your journey towards becoming a doctor at an affordable cost.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            {/* Call Button */}
            <button className="group bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
              📞 Book your free counselling session
            </button>

            {/* Chat Button */}
            <button className="group bg-white/10 border border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition transform hover:scale-105">
              💬 Talk to our experts
            </button>

            {/* Apply Button */}
            <button className="group bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition transform hover:scale-105 animate-pulse">
              🚀 Secure your admission today
            </button>
          </div>

          {/* WhatsApp Quick CTA */}
          <div className="mt-8">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 font-medium transition"
            >
              🟢 Chat on WhatsApp for instant response
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
