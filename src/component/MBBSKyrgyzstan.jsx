import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MBBSKyrgyzstan() {
  // for FAQ start
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "Is MBBS in Kyrgyzstan valid in India?",
      answer:
        "Yes, MBBS in Kyrgyzstan is valid in India if you graduate from an NMC-approved university and successfully clear the FMGE/NExT examination.",
    },
    {
      question: "Is NEET required?",
      answer:
        "Yes, qualifying NEET is mandatory for Indian students to pursue MBBS in Kyrgyzstan.",
    },
    {
      question: "Is IELTS required?",
      answer:
        "No, IELTS or TOEFL is generally not required for admission to most medical universities in Kyrgyzstan.",
    },
    {
      question: "Is Kyrgyzstan safe for Indian students?",
      answer:
        "Yes, Kyrgyzstan is considered a safe and student-friendly country, offering a secure environment for international students.",
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
            alt="Study in Kyrgyzstan"
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
                Kyrgyzstan
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Affordable education & globally recognized medical degrees
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

      {/* tabs for particular section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4">
        <a
          href="#why-kyrgyzstan"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why MBBS In Kyrgyzstan?
        </a>

        <a
          href="#kyrgyzstan-highlights"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Kyrgyzstan Highlights
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
          href="#kyrgyzstan-intakes"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Kyrgyzstan Intakes
        </a>

        <a
          href="#documents-required"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Documents Required
        </a>

        <a
          href="#kyrgyzstan-courses"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Kyrgyzstan Courses
        </a>

        <a
          href="#kyrgyzstan-syllabus"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Kyrgyzstan Syllabus
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
          href="#top"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          NMC Approval
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
              MBBS in <span className="text-blue-600">Kyrgyzstan</span> for
              Indian Students
            </h2>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Complete Guide 2026 – Study at top NMC-approved universities with
              affordable fees and quality education.
            </p>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>

              <img
                src="/image/georgia-mbbs.png"
                alt="MBBS in Kyrgyzstan"
                className="relative rounded-3xl shadow-xl w-full h-[350px] sm:h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Success Rate
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                    96%
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
                  Why Choose MBBS in Kyrgyzstan?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Study MBBS in Kyrgyzstan at top NMC-approved medical
                  universities with affordable fees, quality education, and a
                  strong Indian student presence. Kyrgyzstan is one of the most
                  popular destinations for Indian students looking for low-cost
                  MBBS abroad options.
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  MBBS in Kyrgyzstan is widely chosen by Indian students due to
                  its budget-friendly fee structure, simple admission process,
                  and good academic environment.
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Medical universities in Kyrgyzstan are recognized by NMC, WHO,
                  ECFMG, and FAIMER, enabling students to pursue medical careers
                  in India and abroad.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Affordable Fees",
                  "English Medium Programs",
                  "No Donation Required",
                  "NMC & WHO Approved Universities",
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

      {/* WHY STUDY MBBS KYRGYZSTAN */}
      <section
        id="why-kyrgyzstan"
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
                Why Choose{" "}
                <span className="text-blue-600">MBBS in Kyrgyzstan?</span>
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Kyrgyzstan has become a popular destination for Indian students
                seeking affordable medical education abroad. With NMC-approved
                universities, English-medium programs, and a safe environment,
                it offers a perfect balance of quality and cost.
              </p>

              {/* Bullet Points */}
              <div className="mt-8 space-y-5">
                {[
                  "Very affordable tuition fees",
                  "No donation or capitation fee",
                  "English-medium MBBS programs",
                  "NMC-approved universities",
                  "Simple and fast admission process",
                  "Large Indian student community",
                  "Good FMGE preparation environment",
                  "Decent clinical exposure",
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
                { icon: "🎓", title: "Very Affordable Tuition Fees" },
                { icon: "📘", title: "English Medium Programs" },
                { icon: "💸", title: "No Donation Required" },
                { icon: "🌐", title: "NMC-Approved Universities" },
                { icon: "🛡️", title: "Safe Environment" },
                { icon: "🏥", title: "Decent Clinical Exposure" },
                { icon: "📖", title: "Simple Admission Process" },
                { icon: "🌍", title: "Large Indian Community" },
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

      {/* MBBS IN KYRGYZSTAN – KEY HIGHLIGHTS */}
      <section
        id="kyrgyzstan-highlights"
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
            MBBS in <span className="text-blue-600">Kyrgyzstan</span> Highlights
          </h2>

          {/* TABLE CARD WRAPPER */}
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
                <tbody className="text-gray-800">
                  {[
                    ["Medical Program", "MBBS / General Medicine"],
                    ["Study Destination", "Kyrgyzstan"],
                    ["Degree Type", "MD (Equivalent to MBBS in India)"],
                    [
                      "MBBS in Kyrgyzstan Eligibility",
                      "10+2 with Physics, Chemistry, Biology + NEET qualification",
                    ],
                    ["Total Course Duration", "6 Years (Including Internship)"],
                    [
                      "Minimum Marks Required",
                      "50% for General, 40% for SC/ST/OBC (as per NMC norms)",
                    ],
                    [
                      "NEET Requirement",
                      "Yes, NEET Exam is mandatory for Indian students",
                    ],
                    [
                      "Medium of Instruction",
                      "English Medium (Russian/Kyrgyz also available in some universities)",
                    ],

                    [
                      "Entrance Exam in Kyrgyzstan",
                      "No separate entrance exam (NEET qualification required)",
                    ],
                    [
                      "English Language Requirement",
                      "IELTS or TOEFL not required",
                    ],
                    [
                      "Global Recognition",
                      "NMC, WHO, FAIMER, WDOMS, Ministry of Health & Education of Kyrgyzstan",
                    ],
                    ["Degree Awarded", "MD (Equivalent to MBBS in India)"],
                    [
                      "Approx Annual Tuition Fee Range",
                      "$3,400 – $6,000 (₹2,82,200 – ₹4,98,000)",
                    ],
                    [
                      "Approx Annual Hostel Fee Range",
                      "$450 – $1000 (₹41,946 – ₹90,990)",
                    ],
                    ["Approx Total MBBS Cost", "$70,000 (₹5,810,000)"],
                    [
                      "Approx Annual Living Cost",
                      "$5,000 – $8,000 (₹4,15,000 – ₹6,64,000)",
                    ],
                    ["Top Cities for MBBS", "Bishkek, Osh, Jalal-Abad"],
                    [
                      "Top Medical Universities",
                      "Asian Medical Institute, Jalal-Abad State University, Kyrgyz State Medical Academy, International School of Medicine, Osh State University",
                    ],
                    [
                      "Admission Intakes",
                      "September/October (main intake) and February/March",
                    ],
                    ["Visa Processing Time", "15–30 Days (approx)"],
                    [
                      "Accommodation Options",
                      "University Hostel and Private Apartments",
                    ],
                    [
                      "Indian Student Community",
                      "More than 10,000 Indian students are studying in Kyrgyzstan",
                    ],
                    ["Clinical Training", "Starts from the 3rd year onwards"],
                    [
                      "Internship Valid in India",
                      "Yes, after clearing FMGE/NExT as per NMC rules",
                    ],
                    [
                      "Syllabus Pattern",
                      "Similar to international and Indian MBBS curriculum",
                    ],
                    [
                      "Number of Medical Universities",
                      "10+ medical universities offering MBBS programs",
                    ],
                    [
                      "Documents Required",
                      "Passport, 10th & 12th marksheets, NEET scorecard, photographs, medical certificate, birth certificate, bank statement",
                    ],
                    [
                      "Hostel Facilities",
                      "Furnished rooms, WiFi, heating, mess/canteen, security, laundry",
                    ],
                    [
                      "Food Availability",
                      "Indian food is available in most universities and hostels",
                    ],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                    >
                      <td className="p-4 border border-gray-300 font-bold">
                        {row[0]}
                      </td>
                      <td
                        className={`p-4 border border-gray-300 ${[0, 5, 6, 7, 9, 11, 12, 13, 14, 15].includes(index) ? "font-bold" : ""}`}
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
            MBBS in Kyrgyzstan{" "}
            <span className="text-blue-600">Eligibility </span>
            Criteria 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-8">
            Students planning to study MBBS in Kyrgyzstan in 2026 must meet
            specific eligibility criteria set by medical universities for Indian
            applicants. These requirements ensure that students are academically
            prepared for medical studies abroad and can continue their careers
            after graduation.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-8">
            Eligible candidates can apply to recognised medical universities in
            Kyrgyzstan and start their journey toward becoming doctors. Below
            are the key eligibility criteria that applicants need to fulfil.
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
                    Minimum Marks
                  </td>
                  <td className="p-4 border border-gray-300">
                    Students should have at least 50% marks in 12th standard
                    with Physics, Chemistry, and Biology (PCB).
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    NEET Requirement
                  </td>
                  <td className="p-4 border border-gray-300">
                    Qualifying the NEET (National Eligibility cum Entrance Test)
                    is mandatory.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Reserved Category
                  </td>
                  <td className="p-4 border border-gray-300">
                    Candidates from reserved categories are eligible with a
                    minimum of 40% marks.
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Subjects Required
                  </td>
                  <td className="p-4 border border-gray-300">
                    Students must have studied Physics, Chemistry, and Biology
                    after completing 10th grade.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Educational Board
                  </td>
                  <td className="p-4 border border-gray-300">
                    Candidates must have completed their 12th from a recognised
                    board or equivalent institution.
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Age Criteria
                  </td>
                  <td className="p-4 border border-gray-300">
                    Applicants must be at least 17 years old by 31st December of
                    the admission year.
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
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              MBBS in <span className="text-blue-600">Kyrgyzstan</span>{" "}
              Admission Process
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed max-w-4xl mb-10">
              The MBBS admission process in Kyrgyzstan is simple, quick, and
              convenient for international students. The application procedure
              is easy to follow and does not involve complex formalities.
              Universities maintain a well-structured and smooth admission
              system, making the overall process hassle-free for applicants.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-4xl mb-10">
              This efficient process helps students focus on their preparation
              and plan their journey to begin their medical studies in
              Kyrgyzstan. Below is a step-by-step overview of the MBBS admission
              process.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 text-gray-800 max-w-4xl">
              {[
                "Students need to submit their application through the university's official website.",
                "After applying, they must provide scanned copies of all required documents.",
                "The university usually issues an invitation letter within 48 hours.",
                "Once the invitation letter is received, students are required to pay the registration fee.",
                "After that, they can proceed with the visa application.",
                "Study permission is generally granted within two weeks.",
                "Students are then informed about their reporting or arrival date.",
                "They can plan and travel to Kyrgyzstan accordingly.",
                "Finally, students start attending their classes.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
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
        id="kyrgyzstan-intakes"
        className="relative pt-6 pb-10 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MBBS in <span className="text-blue-600">Kyrgyzstan</span> Intakes
            </h2>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              MBBS programs in Kyrgyzstan generally have two intake sessions
              each year. The primary intake takes place in September or October,
              with application forms usually available from May to August. This
              is the most preferred intake as universities offer more seats and
              a large number of international students apply during this period.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
              The second intake is held in February or March, with applications
              typically open from December to January. It is a good option for
              students who miss the main intake, although the number of seats is
              comparatively limited. Below is a detailed overview of both
              intakes.
            </p>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-300 mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white text-left">
                    <th className="p-4 border border-gray-300">DETAILS</th>
                    <th className="p-4 border border-gray-300">TIMEFRAME</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="bg-gray-100">
                    <td className="p-4 border border-gray-300 font-bold">
                      Application Start (Main Intake)
                    </td>
                    <td className="p-4 border border-gray-300">
                      May to August
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-300 font-bold">
                      Intake (Main)
                    </td>
                    <td className="p-4 border border-gray-300">
                      September/October
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 border border-gray-300 font-bold">
                      Application Start (Second Intake)
                    </td>
                    <td className="p-4 border border-gray-300">
                      December to January
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-300 font-bold">
                      Intake (Second)
                    </td>
                    <td className="p-4 border border-gray-300">
                      February/March
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section id="documents-required" className="pt-4 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in Kyrgyzstan <span className="text-blue-600">Documents </span>
            Required
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            Students who are planning to pursue MBBS in Kyrgyzstan should keep
            all the necessary documents ready before starting the application
            process. Commonly required documents include a valid passport, 10th
            and 12th mark sheets, NEET scorecard, passport-size photographs, a
            medical fitness certificate, and a birth certificate. Some
            universities may also request financial proof or a bank statement.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            All documents must be properly scanned and verified during the
            admission process. Preparing these in advance helps avoid any delays
            in admission and visa procedures. Below is the list of essential
            documents required for MBBS admission in Kyrgyzstan.
          </p>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-300">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">DOCUMENT</th>
                  <th className="p-4 border border-gray-300">DESCRIPTION</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  [
                    "10th Grade Marksheet",
                    "Copy of the 10th standard mark sheet",
                  ],
                  [
                    "12th Grade Marksheet",
                    "Copy of the 12th standard mark sheet",
                  ],
                  [
                    "NEET Scorecard",
                    "Copy of NEET qualification score (if applicable)",
                  ],
                  ["Passport", "Valid for at least 18 months"],
                  [
                    "Passport-size Photographs",
                    "8-10 recent coloured photographs",
                  ],

                  ["Birth Certificate", "Proof of date of birth"],
                  [
                    "Medical Certificate",
                    "Certificate of good health from a doctor",
                  ],
                  [
                    "HIV Test Report",
                    "Certificate stating non-infection with HIV",
                  ],
                  [
                    "Migration Certificate",
                    "From the previous institution, if required",
                  ],
                  [
                    "Affidavit (if necessary)",
                    "Declaration for guardian's financial support",
                  ],
                  [
                    "Invitation Letter",
                    "Official letter issued by the university",
                  ],
                  [
                    "Student Visa",
                    "A form that must be completed and submitted to apply for a student visa for Kyrgyzstan.",
                  ],
                  [
                    "Bank Statement",
                    "Financial proof showing sufficient funds to support tuition fees and living expenses.",
                  ],
                  [
                    "Police Clearance Certificate",
                    "Certificate issued by the police confirming that the applicant has no criminal record.",
                  ],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}
                    </td>
                    <td className="p-4 border border-gray-300">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MBBS in Kyrgyzstan Courses */}
      <section
        id="kyrgyzstan-courses"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in <span className="text-blue-700">Kyrgyzstan</span> Courses
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            The MBBS program in Kyrgyzstan follows globally accepted medical
            education standards and is a preferred option for many international
            students, particularly from India. The course duration is usually 5
            to 6 years, combining classroom studies with practical clinical
            training in hospitals.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            The curriculum is designed to develop strong medical knowledge and
            clinical skills, helping students prepare for careers in the global
            healthcare sector. Affordable tuition fees, modern infrastructure,
            and hands-on training opportunities make Kyrgyzstan a popular
            destination for MBBS. Below are the medical courses offered by
            universities to students.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">COURSE</th>
                  <th className="p-4 border border-gray-300">DURATION</th>
                  <th className="p-4 border border-gray-300">FOCUS</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  [
                    "MBBS",
                    "5-6 years",
                    "Medical training in diagnosis, treatment and prevention.",
                  ],
                  ["BDS", "5 years", "Dental care, surgery and oral health."],
                  [
                    "Pharmacy",
                    "4 years",
                    "Drug development, testing and healthcare use.",
                  ],
                  [
                    "Nursing",
                    "4 years",
                    "Nursing practice, patient care and healthcare management.",
                  ],
                  [
                    "Physiotherapy",
                    "4 years",
                    "Rehabilitation and recovery from injuries.",
                  ],
                  [
                    "MD",
                    "3-4 years",
                    "Specialisation in fields like surgery, paediatrics, etc.",
                  ],
                  ["MS", "3-4 years", "Advanced surgical training."],
                  ["MDS", "3 years", "Specialisation in dental surgery."],
                  [
                    "Public Health",
                    "2-3 years",
                    "Health policies, community health and management.",
                  ],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}{" "}
                    </td>
                    <td className="p-4 border border-gray-300">{row[1]} </td>
                    <td className="p-4 border border-gray-300">{row[2]} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SYLLABUS SECTION */}
      <section
        id="kyrgyzstan-syllabus"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in <span className="text-blue-700">Kyrgyzstan</span> Syllabus
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            The MBBS course in Kyrgyzstan is divided into three key phases:
            pre-clinical, para-clinical, and clinical. The curriculum combines
            theoretical studies with hands-on clinical training, helping
            students gain both strong knowledge and practical experience.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            Students are encouraged to organise their studies effectively by
            using strategies like creating study schedules, joining group
            discussions, and using mind maps. These techniques help them prepare
            well for internal exams, MCQs, short-answer tests, and practical
            assessments.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">YEAR</th>
                  <th className="p-4 border border-gray-300">SYLLABUS</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  [
                    "1st year",
                    "General Psychology, Human Anatomy, Bioorganic Chemistry, Elective Courses, Internal Medicine and Cytology.",
                  ],
                  [
                    "2nd year",
                    "Microbiology, Histology, Physiology, Biochemistry, Patient Care, Anatomy and Psychology.",
                  ],
                  [
                    "3rd year",
                    "E.N.T., Medical Chemistry, Embryology, Radiology and Forensic Medicine.",
                  ],
                  [
                    "4th year",
                    "Pharmacology, Allied Subjects, Surgery and Community Medicine.",
                  ],
                  [
                    "5th year",
                    "Gynaecology & Obstetrics, Ophthalmology, Infectious Disease, etc.",
                  ],
                  [
                    "6th year",
                    "Internship under the guidance of senior doctors.",
                  ],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}{" "}
                    </td>
                    <td className="p-4 border border-gray-300">{row[1]} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MBBS in Kyrgyzstan Fees Structure */}
      <section
        id="fees-structure"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in Kyrgyzstan <span className="text-blue-700">Fees</span>{" "}
            Structure 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            MBBS in Kyrgyzstan is a preferred choice for international students
            because of its affordable tuition fees and globally recognised
            medical universities. The fee structure for 2026 is generally
            budget-friendly, making it accessible for many aspiring students.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            Tuition fees may vary depending on the university selected and
            usually do not include living expenses. Overall, Kyrgyzstan remains
            a cost-effective option for Indian students who wish to pursue
            medical education abroad. Below is the fee structure for MBBS in
            Kyrgyzstan.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">
                    UNIVERSITY NAME
                  </th>
                  <th className="p-4 border border-gray-300">
                    APPROX ANNUAL TUITION FEES (USD)
                  </th>
                  <th className="p-4 border border-gray-300">
                    APPROX ANNUAL TUITION FEES (INR)
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  ["Asian Medical Institute", "$3,400", "₹309,366"],
                  ["Osh State Medical University", "$4,000", "₹363,960"],
                  ["Jalalabad State Medical University", "$4,200", "₹382,158"],
                  ["International School of Medicine", "$6,000", "₹545,940"],
                  ["Kyrgyz Russian Slavic University", "$3,318", "₹301,754"],
                  ["Kyrgyz State Medical University", "$4,000", "₹363,960"],
                  ["Salymbekov Medical University", "$3,060", "₹278,436"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}{" "}
                    </td>
                    <td className="p-4 border border-gray-300">{row[1]} </td>
                    <td className="p-4 border border-gray-300">{row[2]} </td>
                  </tr>
                ))}
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in Kyrgyzstan <span className="text-blue-700">Hostel & </span>{" "}
            Accommodation
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            MBBS in Kyrgyzstan is a popular choice among Indian students, as
            most universities provide safe and comfortable hostel facilities.
            These hostels are usually located within or close to the campus,
            making it convenient for students to access academic buildings and
            other facilities.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            The accommodation is designed to offer a secure and student-friendly
            environment, helping international students adjust easily to a new
            country. Living in hostels also allows students to interact with
            people from different cultures while focusing on their studies.
            Overall, hostel facilities in Kyrgyzstan provide a supportive and
            comfortable atmosphere for students pursuing MBBS abroad.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    FACILITY
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  [
                    "24/7 Security",
                    "CCTV surveillance and security ensure student safety.",
                  ],
                  [
                    "Separate Accommodation",
                    "Separate accommodation is available for boys and girls.",
                  ],
                  [
                    "Wi-Fi",
                    "High-speed Wi-Fi is accessible in the hostel and across the campus.",
                  ],
                  [
                    "Furnished Rooms",
                    "Rooms are clean, comfortable, and fully furnished.",
                  ],
                  [
                    "Furniture",
                    "Furniture includes a bed, study table, wardrobe, and other essential items.",
                  ],
                  [
                    "Water Supply",
                    "A 24/7 hot and cold water supply is available.",
                  ],

                  [
                    "Kitchen",
                    "Kitchen and other basic amenities are provided for students.",
                  ],
                  [
                    "Indian Mess",
                    "Hostel campuses provide fresh and healthy meals for students.",
                  ],
                  [
                    "Laundry",
                    "Laundry facilities with washing machines and ironing rooms are available.",
                  ],

                  [
                    "Recreation",
                    "The university organises sports events, cultural activities, and workshops for student engagement and relaxation.",
                  ],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}{" "}
                    </td>
                    <td className="p-4 border border-gray-300">{row[1]} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MBBS in Kyrgyzstan Living Cost */}
      <section
        id="living"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in Kyrgyzstan <span className="text-blue-700">Living </span>
            Cost 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            The cost of living for Indian students in Kyrgyzstan is quite
            affordable compared to many other countries. On average, students
            may spend around $5,000 to $8,000 (₹4,54,950 – ₹7,27,920) per year,
            covering accommodation, food, transportation, and personal expenses.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            Many universities offer budget-friendly hostel facilities, which
            help reduce overall costs. However, total expenses can vary
            depending on a student's lifestyle and spending habits, such as food
            and travel.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            With proper planning and budgeting, students can comfortably manage
            their living expenses while pursuing MBBS in Kyrgyzstan. Below is a
            detailed breakdown of annual expenses.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    CATEGORY
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    APPROX ANNUAL RANGE (USD)
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    APPROX ANNUAL RANGE (INR)
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  [
                    "Private Apartment",
                    "$1,680 – $3,600",
                    "₹144,000 – ₹300,000",
                  ],
                  ["Public Transport", "$43.8 – $91.25", "₹3,650 – ₹7,300"],
                  ["Utilities & Internet", "$360 – $864", "₹30,000 – ₹72,000"],
                  ["Hostel", "$450 - $1,000", "₹41,946 – ₹90,990"],
                  ["Mess", "$1,200", "₹109,188"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 border border-gray-300 font-semibold">
                      {row[0]}{" "}
                    </td>
                    <td className="p-4 border border-gray-300">{row[1]} </td>
                    <td className="p-4 border border-gray-300">{row[2]} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NMC-APPROVED MEDICAL UNIVERSITIES IN KYRGYZSTAN */}
      <section
        id="top"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">
            NMC-Approved{" "}
            <span className="text-blue-700">Medical Universities</span> in
            Kyrgyzstan
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-12 text-left">
            Students planning to pursue MBBS in Kyrgyzstan can choose from a
            range of universities based on their preferences, career goals, and
            location. With multiple options available, students can select the
            institution that best suits their needs after exploring different
            programs and opportunities.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-12 text-left">
            These universities offer MBBS courses in English and are approved by
            NMC, making them suitable for Indian students. Below is a list of
            universities from which candidates can choose according to their
            requirements.
          </p>

          {/* Jalal-Abad State University */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-4">
              Jalal-Abad <span className="text-blue-700">State Medical </span>
              University
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Jalal-Abad State Medical University (JASU) is a government medical
              institution established in 1993, known for providing quality and
              affordable MBBS education. It is affiliated with the Ministry of
              Health and recognised by NMC and the World Directory of Medical
              Schools.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              The university has modern infrastructure, well-equipped labs, and
              partnerships with over 27 hospitals for clinical training. It
              currently has more than 3,300 students guided by 164 experienced
              faculty members.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              JASU focuses on practical learning, research, and professional
              development, helping students build strong medical careers and
              contribute to the healthcare sector.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
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
                <tbody className="text-gray-800">
                  {[
                    ["University Name", "Jalal-Abad State Medical University"],
                    ["Location", "Jalal-Abad, Kyrgyzstan"],
                    ["University Type", "Government Medical University"],
                    ["Established In", "1993"],
                    [
                      "Entrance Exam",
                      "The NEET qualification is mandatory for Indian students",
                    ],

                    ["Course Duration", "6 years (Including internship)"],

                    ["Language of Teaching", "English"],
                    ["Recognition", "NMC & WHO"],
                    ["Approx Annual Tuition Fee", "$4,200 (₹382,158)"],
                    ["Approx Annual Living Cost", "$5,000 (₹454,950)"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                    >
                      <td className="p-4 border border-gray-300 font-semibold">
                        {row[0]}{" "}
                      </td>
                      <td className="p-4 border border-gray-300">{row[1]} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Kyrgyz State Medical Academy */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
              Kyrgyz <span className="text-blue-700">State Medical </span>
              Academy
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Kyrgyz State Medical Academy (KSMA), established in 1939, is the
              oldest medical university in Bishkek and is known for its
              high-quality medical education. It is recognised by NMC, WHO,
              FAIMER, and IMED, making it a trusted choice for international
              students, especially from India.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              The MBBS program is offered in English, and the university
              provides hostel facilities along with Indian food for student
              comfort. KSMA is ranked among the top medical universities in
              Kyrgyzstan.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              With over 15,000 students and more than 900 faculty members, the
              university offers a strong academic environment, with a
              significant number of Indian students currently pursuing MBBS
              here.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
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
                <tbody className="text-gray-800">
                  {[
                    ["University Name", "Kyrgyz State Medical Academy"],

                    ["Location", "Bishkek, Kyrgyzstan"],
                    ["Established Year", "1939"],
                    ["University Type", "Public"],
                    ["Course Duration", "6 years (Including internship)"],
                    [
                      "Entrance Exam",
                      "NEET qualification is mandatory for Indian students",
                    ],

                    ["Language of Teaching", "English"],

                    ["Recognition", "NMC and WHO"],
                    ["Approx Annual Tuition Fee", "$4,000 (₹363,960)"],
                    ["Approx Annual Living Cost", "$6,000 (₹545,940)"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                    >
                      <td className="p-4 border border-gray-300 font-semibold">
                        {row[0]}{" "}
                      </td>
                      <td className="p-4 border border-gray-300">{row[1]} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* International School of Medicine */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
              International{" "}
              <span className="text-blue-700">School of Medicine</span>
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              International School of Medicine (ISM), established in 2003 in
              Bishkek, is a well-known choice for international students,
              especially from India, to study MBBS in Kyrgyzstan. It is
              recognised by NMC, WHO, WDOMS, and FAIMER and operates under the
              Ministry of Health and the Ministry of Education and Science of
              Kyrgyzstan.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              The university offers quality medical education through
              experienced faculty and modern infrastructure. With over 7,000
              students and 500+ teachers, ISM provides MBBS programs in English
              along with opportunities for international exposure.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Its multiple campuses and supportive academic environment help
              students gain strong knowledge and practical experience in the
              medical field.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
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
                <tbody className="text-gray-800">
                  {[
                    ["University Name", "International School of Medicine"],
                    ["Location", "Bishkek, Kyrgyzstan"],
                    ["Established In", "2003"],
                    ["Course Duration", "6 years (Including internship)"],
                    [
                      "Entrance Exam",
                      "The NEET qualification is mandatory for Indian students",
                    ],
                    ["University Type", "Private"],
                    ["Language of Teaching", "English"],

                    ["Recognition", "NMC, WHO, WDOMS and FAIMER"],

                    ["Approx Annual Tuition Fee", "$6,000 (₹545,940)"],
                    ["Approx Annual Living Cost", "$14,400 (₹1,311,256)"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                    >
                      <td className="p-4 border border-gray-300 font-semibold">
                        {row[0]}{" "}
                      </td>
                      <td className="p-4 border border-gray-300">{row[1]} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Osh State University */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
              Osh <span className="text-blue-700">State University</span>
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Osh State University, established as an institute and later
              upgraded to a university in 1992, is one of the leading
              institutions in Kyrgyzstan. It includes multiple institutes and
              faculties, along with modern labs, resource centres, medical
              clinics, sports facilities, and student hostels.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              The university is known for its quality education, affordable
              fees, and experienced faculty. It is recognised by NMC, WHO, and
              FAIMER, making it a popular choice for international students
              pursuing MBBS abroad.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              With over 32,000 students and around 2,000 faculty members, Osh
              State University provides a strong academic environment and is
              ranked among the top medical universities in Kyrgyzstan.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
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
                <tbody className="text-gray-800">
                  {[
                    ["University Name", "Osh State University"],
                    ["Location", "Osh, Kyrgyzstan"],
                    ["Established In", "1992"],
                    ["Course Duration", "6 years (Including internship)"],
                    ["University Type", "Public"],
                    ["Language of Teaching", "English"],

                    ["Recognition", "NMC, WHO, FAIMER"],
                    [
                      "Entrance Exam",
                      "NEET qualification is mandatory for Indian students",
                    ],
                    ["Approx Annual Tuition Fee", "$4,000 (₹363,960)"],
                    ["Approx Annual Living Cost", "$5,000 (₹454,950)"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                    >
                      <td className="p-4 border border-gray-300 font-semibold">
                        {row[0]}{" "}
                      </td>
                      <td className="p-4 border border-gray-300">{row[1]} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* International University of Kyrgyzstan */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
              International{" "}
              <span className="text-blue-700">University of Kyrgyzstan</span>
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              The International University of Kyrgyzstan (IUK), established in
              1993 in Bishkek, is a well-known institution offering a variety of
              undergraduate and postgraduate programs, including medicine,
              engineering, business, and humanities. It also provides MBBS
              courses in English for international students.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              The university is recognised by NMC and WHO and offers a
              multicultural learning environment. It focuses on developing the
              knowledge and skills required for successful global careers.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
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
                <tbody className="text-gray-800">
                  {[
                    [
                      "University Name",
                      "International University of Kyrgyzstan",
                    ],
                    ["Established Year", "1993"],
                    ["Course Duration", "6 years (Including internship)"],
                    [
                      "Entrance Exam",
                      "NEET qualification is mandatory for Indian students",
                    ],

                    ["Location", "Bishkek, Kyrgyzstan"],
                    ["University Type", "Public"],
                    ["Language of Teaching", "English"],

                    ["Recognition", "NMC, WHO, FAIMER"],
                    ["Approx Annual Tuition Fee", "$5,000 (₹454,950)"],
                    ["Approx Annual Living Cost", "$8,000 (₹727,920)"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                    >
                      <td className="p-4 border border-gray-300 font-semibold">
                        {row[0]}{" "}
                      </td>
                      <td className="p-4 border border-gray-300">{row[1]} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            {[
              {
                question: "Is MBBS in Kyrgyzstan valid in India?",
                answer:
                  "Yes, if completed from an NMC-approved university and after clearing FMGE/NExT.",
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
                question: "Is Kyrgyzstan safe for Indian students?",
                answer:
                  "Yes, it is safe and widely preferred by Indian students.",
              },
            ].map((faq, index) => (
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
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/20 blur-[120px] rounded-full"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            APPLY NOW FOR MBBS IN KYRGYZSTAN
          </h2>

          <p className="mt-2 text-xl md:text-2xl font-semibold text-blue-100">
            2026
          </p>

          {/* Subtext */}
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Start your journey towards becoming a doctor with world-class
            education.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="group bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
              📞 Book your free counselling session
            </button>

            <button className="group bg-white/10 border border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition transform hover:scale-105">
              💬 Talk to our experts
            </button>

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
