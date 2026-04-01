import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MBBSUzbekistan() {
  // for FAQ start
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "Is MBBS in Uzbekistan valid in India?",
      answer:
        "Yes, MBBS in Uzbekistan is valid in India if you graduate from an NMC-approved university and successfully clear the FMGE/NExT examination.",
    },
    {
      question: "Is NEET required?",
      answer:
        "Yes, qualifying NEET is mandatory for Indian students to pursue MBBS in Uzbekistan.",
    },
    {
      question: "Is IELTS required?",
      answer:
        "No, IELTS or TOEFL is generally not required for admission to most medical universities in Uzbekistan.",
    },
    {
      question: "Is Uzbekistan safe for Indian students?",
      answer:
        "Yes, Uzbekistan is considered a very safe and student-friendly country, offering a secure environment for international students.",
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
            alt="Study in Uzbekistan"
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
                Uzbekistan
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
          href="#why-uzbekistan"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why MBBS In Uzbekistan?
        </a>

        <a
          href="#uzbekistan-highlights"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Uzbekistan Highlights
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
          href="#uzbekistan-intakes"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Uzbekistan Intakes
        </a>

        <a
          href="#documents-required"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Documents Required
        </a>

        {/* <a
          href="#exam-required"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Exam Required
        </a> */}

        <a
          href="#uzbekistan-courses"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Uzbekistan Courses
        </a>

        <a
          href="#uzbekistan-syllabus"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Uzbekistan Syllabus
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
          NMC Approval Top Universities
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
              MBBS in <span className="text-blue-600">Uzbekistan</span> for
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
                alt="MBBS in Uzbekistan"
                className="relative rounded-3xl shadow-xl w-full h-[350px] sm:h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Success Rate
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                    95%
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Students Enrolled
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-gray-800">
                    8,000+
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Why Choose MBBS in Uzbekistan?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Study MBBS in Uzbekistan at NMC-approved medical universities
                  with affordable fees, quality education, and increasing
                  popularity among Indian students. Uzbekistan is emerging as a
                  strong option for students looking for budget-friendly MBBS
                  abroad programs with decent clinical exposure.
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  MBBS in Uzbekistan is gaining popularity due to its low cost,
                  simplified admission process, and growing Indian student
                  community. The country offers a good balance between
                  affordability and education quality.
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Medical universities in Uzbekistan are recognized by NMC, WHO,
                  ECFMG, and FAIMER, allowing graduates to appear for licensing
                  exams globally.
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

      {/* WHY STUDY MBBS UZBEKISTAN */}
      <section
        id="why-uzbekistan"
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
                <span className="text-blue-600">MBBS in Uzbekistan?</span>
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Uzbekistan has become a popular destination for Indian students
                seeking affordable medical education abroad. With NMC-approved
                universities, English-medium programs, and a safe environment,
                it offers a perfect balance of quality and cost.
              </p>

              {/* Bullet Points */}
              <div className="mt-8 space-y-5">
                {[
                  "Affordable tuition fees",
                  "No donation or capitation fee",
                  "English-medium MBBS programs available",
                  "Simple admission process",
                  "Growing Indian student base",
                  "Decent infrastructure and clinical exposure",
                  "Safe and culturally friendly environment",
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
                { icon: "🎓", title: "Affordable Tuition Fees" },
                { icon: "📘", title: "English Medium Programs" },
                { icon: "💸", title: "No Donation Required" },
                { icon: "🌐", title: "Global Recognition" },
                { icon: "🛡️", title: "Safe Environment" },
                { icon: "🏥", title: "Decent Clinical Exposure" },
                { icon: "📖", title: "Simple Admission Process" },
                { icon: "🌍", title: "Growing Indian Community" },
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

      {/* MBBS IN UZBEKISTAN – KEY HIGHLIGHTS */}
      <section
        id="uzbekistan-highlights"
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
            MBBS in <span className="text-blue-600">Uzbekistan</span> Highlights
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
                <tbody className="text-gray-800 ">
                  {[
                    ["Course Name", "MBBS / MD (Equivalent to MBBS in India)"],
                    [
                      "Course Duration",
                      "6 Years (Including Clinical Training)",
                    ],
                    ["Country", "Uzbekistan"],
                    [
                      "Eligibility",
                      "10+2 with PCB (Physics, Chemistry, Biology)",
                    ],
                    ["Minimum Age", "17 Years"],
                    [
                      "Minimum Marks Required",
                      "50% for General, 45% for Reserved Category",
                    ],
                    [
                      "NEET Requirement",
                      "Yes, NEET Exam is mandatory for Indian students",
                    ],
                    [
                      "Entrance Exam in Uzbekistan",
                      "Generally No entrance exam",
                    ],
                    ["Medium of Teaching", "English Medium"],
                    ["Recognized by", "NMC, WHO, FAIMER and ECFMG"],
                    ["Degree Type", "MD (Equivalent to MBBS)"],
                    [
                      "Approx Annual Tuition Fee",
                      "$3,000 to $4,500 (₹249,000 - ₹373,500)",
                    ],
                    [
                      "Total MBBS Cost",
                      "$16,867 - $30,120 (₹14,00,000 - ₹25,00,000)",
                    ],
                    [
                      "Top Cities for MBBS",
                      "Tashkent, Samarkand, Bukhara, Fergana and Andijan",
                    ],
                    ["Intake Months", "September / October (Main Intake)"],
                    ["Application Period", "April to June"],
                    ["Admission Confirmation", "July to August"],
                    ["Accommodation", "University Hostel + Private Apartments"],
                    ["Visa Processing Time", "10–15 Working Days"],
                    [
                      "Internship Valid in India",
                      "Yes, after clearing FMGE/NExT",
                    ],
                    [
                      "Approx Annual Hostel Fee",
                      "$500 to $600 (₹41,500 to ₹49,800)",
                    ],
                    [
                      "Hostel Facilities",
                      "AC Rooms, WiFi, Indian food, security, sports and medical support",
                    ],
                    ["Food Availability", "Indian food easily available"],
                    [
                      "Indian Student Community",
                      "A large number of Indian students",
                    ],
                    ["Clinical Exposure", "depends on university"],
                    [
                      "Approx Annual Living Cost",
                      "$3600 (₹3,37,293) to $8400 (₹7,87,017)",
                    ],
                    [
                      "Syllabus Pattern",
                      "Similar to the Indian MBBS curriculum",
                    ],
                    [
                      "Medical Universities Count",
                      "10+ NMC-approved universities",
                    ],
                    [
                      "Documents Required",
                      "Passport, 10th/12th marksheet, NEET scorecard, photos, medical report, bank statement",
                    ],
                    [
                      "Best Reason to Choose Uzbekistan",
                      "Affordable fees, global recognition, safe environment, English medium",
                    ],
                    [
                      "Safety for Indian Students",
                      "Very safe and student-friendly",
                    ],
                    [
                      "Career Options After MBBS",
                      "Practice in India (FMGE/NExT), USMLE, PLAB, PG abroad",
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
                          [0, 5, 6, 7, 9, 11, 12, 13, 14, 15].includes(index)
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
            MBBS in Uzbekistan{" "}
            <span className="text-blue-600">Eligibility </span>
            Criteria 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-8">
            Students who wish to pursue MBBS in Uzbekistan must meet certain
            essential admission criteria. Uzbekistan has become a preferred
            choice for medical education, especially among students looking for
            an affordable option to study MBBS abroad. Medical universities in
            the country have specific eligibility requirements that applicants
            need to satisfy to secure admission. Fulfilling these criteria is
            crucial for a smooth admission process and to begin medical studies
            without any obstacles. Below are the key requirements that
            candidates must meet to study MBBS in Uzbekistan.
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
                    Educational Qualification
                  </td>
                  <td className="p-4 border border-gray-300">
                    Must complete 10+2 with Physics, Chemistry, and Biology with
                    at least 50% marks
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    NEET Requirement
                  </td>
                  <td className="p-4 border border-gray-300">
                    Qualifying NEET exam is mandatory for Indian Students
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Minimum Age
                  </td>
                  <td className="p-4 border border-gray-300">
                    The student must be 17 years old
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Reserved Category
                  </td>
                  <td className="p-4 border border-gray-300">
                    Minimum 45% marks in 10+2 for reserved category students
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Educational Board
                  </td>
                  <td className="p-4 border border-gray-300">
                    Must have studied from a recognised education board
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
              MBBS in <span className="text-blue-600">Uzbekistan</span>{" "}
              Admission Process
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed max-w-4xl mb-10">
              Students who are planning to take admission in medical
              universities can go through the complete details of the MBBS
              admission process in Uzbekistan, where all the necessary
              information is clearly explained. Studying MBBS in Uzbekistan has
              become a highly preferred option for Indian students due to its
              affordable fee structure and the high standard of education
              offered by globally recognized universities. The admission process
              is straightforward and student-friendly, allowing candidates to
              enroll easily and pursue their journey toward becoming successful
              medical professionals.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 text-gray-800 max-w-4xl">
              {[
                "Students can select the most appropriate medical universities in Uzbekistan based on their preferences, eligibility, budget, preferred city, along with infrastructure and hostel facilities.",
                "The admission process usually starts from the first week of July.",
                "After reviewing the application and confirming eligibility, the university issues an admission letter.",
                "Applicants are required to submit all essential academic documents, including the NEET scorecard, 10th and 12th mark sheets, and migration certificate.",
                "Students must pay the required tuition fees within the deadline set by the university.",
                "Once the fee payment is completed, the university provides an invitation letter for the visa process, which generally takes around 10–15 working days.",
                "At last student will be required to plan travel to Uzbekistan.",
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
        id="uzbekistan-intakes"
        className="relative pt-6 pb-10 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MBBS in <span className="text-blue-600">Uzbekistan</span> Intakes
            </h2>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              The MBBS admission process in Uzbekistan is well-structured and
              student-friendly, following a clear academic timeline set by
              universities. The application process generally begins between
              <span className="font-semibold text-gray-900">
                {" "}
                April and June
              </span>
              , allowing students enough time to apply for their desired medical
              programs. Admission confirmations are usually provided between
              <span className="font-semibold text-gray-900">
                {" "}
                July and August
              </span>
              , giving students sufficient time to prepare for further
              formalities. The academic session typically starts from
              <span className="font-semibold text-gray-900">
                {" "}
                September to October
              </span>
              , which is convenient for international students to begin their
              studies smoothly. Overall, the process is simple, efficient, and
              ensures a hassle-free start to medical education in Uzbekistan.
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
                      Application Start
                    </td>
                    <td className="p-4 border border-gray-300">
                      April to June
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-300 font-bold">
                      Admission Confirmation
                    </td>
                    <td className="p-4 border border-gray-300">
                      July to August
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 border border-gray-300 font-bold">
                      Intake
                    </td>
                    <td className="p-4 border border-gray-300">
                      September/October
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
            MBBS in Uzbekistan <span className="text-blue-600">Documents </span>
            Required
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            Students who are planning to apply for medical universities in
            Uzbekistan must ensure they have all the necessary documents ready
            to complete the admission process smoothly. These documents play a
            crucial role in verification and are required at every stage of the
            admission procedure. Both universities and embassy authorities
            carefully review these documents before granting admission and
            issuing a visa. Preparing all the required documents in advance
            helps avoid delays and makes the entire MBBS admission journey in
            Uzbekistan simple and hassle-free. Below is a list of the essential
            documents needed for admission.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3 text-gray-800">
            {[
              "10th marksheet",
              "12th marksheet",
              "NEET scorecard",
              "Birth certificate",
              "4-8 passport-size photographs",
              "Passport with at least 5 years of validity",
              "Invitation letter from the university",
              "Fee receipt issued by the university",
              "Verified medical reports",
              "HIV negative report",
              "Bank statements",
              "Address proof",
              "Identity Proof",
              "Visa documents",
              "No criminal Record proof",
              "Travel and health insurance",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MBBS in Uzbekistan Courses */}
      <section
        id="uzbekistan-courses"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in <span className="text-blue-700">Uzbekistan</span> Courses
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            Medical universities in Uzbekistan offer a wide range of programs
            supported by modern infrastructure, well-equipped laboratories, and
            advanced facilities. These institutions follow global academic
            standards, ensuring that students receive quality education and
            practical medical training. The curriculum is designed to build a
            strong foundation in medical sciences while enhancing students’
            skills and international exposure. With experienced faculty members
            and updated teaching methods, students gain the knowledge and
            training required to succeed in their medical careers. Below are
            some of the key courses provided by leading medical universities in
            Uzbekistan.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">
                    Courses Offered
                  </th>
                  <th className="p-4 border border-gray-300">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  [
                    "Clinical Psychology",
                    "Focuses on diagnosing and treating mental health disorders.",
                  ],

                  [
                    "Dentistry",
                    "Comprehensive training in dental health and surgery.",
                  ],
                  [
                    "Nursing",
                    "Training in patient care and hospital management.",
                  ],

                  [
                    "Pediatrics",
                    "Specialisation in medical care for children and adolescents.",
                  ],
                  [
                    "Pharmacy",
                    "Studies in drug development, usage and patient care.",
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

      {/* SYLLABUS SECTION */}
      <section
        id="uzbekistan-syllabus"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in <span className="text-blue-700">Uzbekistan</span> Syllabus
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            The MBBS curriculum in Uzbekistan is structured over a duration of
            six years, divided into twelve semesters, ensuring a proper balance
            between theoretical learning and practical exposure. In the initial
            years, students study foundational subjects such as anatomy,
            biochemistry, and psychology. As the course progresses, they move on
            to advanced subjects like pharmacology, surgery, and community
            medicine. The final year is dedicated to an internship, where
            students gain hands-on clinical experience in hospitals affiliated
            with the universities. Below is an overview of the MBBS syllabus in
            Uzbekistan.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">YEAR</th>
                  <th className="p-4 border border-gray-300">SUBJECTS</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  [
                    "First Year",
                    " General Psychology,Human Anatomy, Bioorganic Chemistry, Elective Courses, Internal Medicine, and Cytology",
                  ],
                  [
                    "Second Year",
                    " Anatomy,Histology, Biochemistry, Microbiology, Physiology, Patient Care, Psychology",
                  ],
                  [
                    "Third Year",
                    "ENT, Radiology,Embryology,  Forensic Medicine, Medical Chemistry",
                  ],
                  [
                    "Fourth Year",
                    "Allied Subjects,Pharmacology, Surgery,  Community Medicine",
                  ],
                  [
                    "Fifth Year",
                    "Infectious Disease, Ophthalmology, Gynaecology & Obstetrics",
                  ],
                  [
                    "Sixth Year",
                    "Mandatory internship at a university-affiliated hospital under the guidance of trained medical professionals",
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

      {/* MBBS in Uzbekistan Fees Structure */}
      <section
        id="fees-structure"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in Uzbekistan <span className="text-blue-700">Fees</span>{" "}
            Structure 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            The fee structure for MBBS in Uzbekistan for 2026 is highly
            affordable, making it an attractive option for international
            students seeking quality medical education at a lower cost. The
            tuition fees at leading medical universities are reasonable, with an
            approximate annual cost ranging between $3,000 to $4,500 (₹2,49,000
            – ₹3,73,500). Additionally, application and documentation charges
            are minimal, further increasing its affordability. This makes
            Uzbekistan a practical choice for students planning to study MBBS
            abroad within a budget. Below is the fee structure of some of the
            top medical universities in Uzbekistan, allowing students to select
            according to their preferences.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">UNIVERSITY</th>
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
                  ["Andijan State Medical Institute", "$3,500", "₹290,500"],

                  ["Bukhara State University", "$3,200", "₹265,600"],
                  ["Fergana State Medical University", "$3,500", "₹290,500"],

                  ["Navoi State University", "$3,500", "₹290,500"],
                  ["Samarkand State Medical University", "$3,800", "₹315,400"],

                  ["Tashkent State Dental Institute", "$3,800", "₹315,400"],

                  ["Tashkent Medical Academy", "$4,500", "₹373,500"],
                  [
                    "Tashkent Medical Academy Urgench Branch",
                    "$3,400",
                    "₹282,200",
                  ],
                  [
                    "Tashkent State Medical University Termez Branch",
                    "$3,000",
                    "₹249,000",
                  ],
                  ["Turon University", "$3,500", "₹290,500"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
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

      {/* Hostel & Accommodation Section */}
      <section
        id="hostel"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in Uzbekistan <span className="text-blue-700">Hostel & </span>{" "}
            Accommodation
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            Studying MBBS in Uzbekistan provides Indian students with a
            comfortable and convenient living experience throughout their
            academic journey. Most university hostels are situated close to the
            campus, making it easy for students to manage their daily routine.
            Hostel rooms are usually shared, giving students the opportunity to
            interact with people from diverse backgrounds and experience
            different cultures. The environment is safe, well-managed, and
            disciplined, allowing students to focus on their studies while
            enjoying life in a new country. Below are some of the key facilities
            offered by universities within the hostel premises.
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
                    "24×7 Wi-Fi",
                    "High-speed internet connectivity available round the clock",
                  ],
                  ["Reading Hall", "A quiet space for reading and studying"],
                  [
                    "AC Rooms",
                    "Comfortable living spaces equipped with air conditioning",
                  ],
                  ["Indian Food", "Fresh and hygienic Indian food available"],
                  [
                    "Sports Facilities",
                    "Indoor and outdoor sporting facilities",
                  ],
                  ["Medical Facilities", "Medical assistance available"],
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

      {/* MBBS in Uzbekistan Living Cost */}
      <section
        id="living"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in Uzbekistan <span className="text-blue-700">Living </span>
            Cost 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            The cost of living for Indian and international students pursuing
            MBBS in Uzbekistan in 2026 is quite affordable when compared to many
            other countries. On average, students may spend around $3,600
            (₹3,37,293) to $8,400 (₹7,87,017) per year, which typically includes
            expenses such as accommodation, food, transportation, and other
            daily needs. Many universities also provide hostel facilities with
            Indian meal options, making it easier for students to manage their
            expenses comfortably. Overall, Uzbekistan offers a budget-friendly
            and convenient lifestyle, making it a popular choice among Indian
            students looking to study MBBS abroad. Below is a detailed breakdown
            of the living expenses.
          </p>

          {/* Table */}
          {/* <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">CATEGORY</th>
                  <th className="p-4 border border-gray-300 text-left">ANNUAL LIVING COST (IN USD – APPROX.)</th>
                  <th className="p-4 border border-gray-300 text-left">ANNUAL LIVING COST (IN INR – APPROX.)</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  ["Accommodation", "$500 - $600", "₹41,500 - ₹49,800"],
                  ["Food", "$800 - $1,200", "₹66,400 - ₹99,600"],
                  ["Transportation", "$200 - $300", "₹16,600 - ₹24,900"],
                  ["Miscellaneous", "$100 - $200", "₹8,300 - ₹16,600"],
                ].map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}>
                    <td className="p-4 border border-gray-300 font-semibold">{row[0]}</td>
                    <td className="p-4 border border-gray-300">{row[1]}</td>
                    <td className="p-4 border border-gray-300">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>
      </section>

      {/* NMC APPROVED MEDICAL UNIVERSITIES IN UZBEKISTAN */}
      <section
        id="nmc"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">
            NMC Approved <span className="text-blue-700">Medical Colleges</span>{" "}
            in Uzbekistan
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl  mb-12 text-left">
            Indian students can study MBBS in Uzbekistan at a cost-effective
            price, making it an attractive option for medical education abroad.
            Several NMC-approved medical universities in Uzbekistan offer
            high-quality education along with valuable international exposure.
            Students can select a university based on their preferences, budget,
            and requirements. Below is a comprehensive list of NMC-approved
            universities in Uzbekistan, where aspirants can explore detailed
            information such as tuition fees, living costs, and other important
            aspects to make a well-informed decision.
          </p>

          {/* Tashkent Medical Academy */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-4">
              Tashkent <span className="text-blue-700">Medical </span>Academy
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Tashkent Medical Academy is a government medical university
              located in Tashkent, Uzbekistan, established in 2005. It holds a
              regional ranking of 5th and offers around 800 seats in
              English-medium programs for international students, making it a
              popular choice for MBBS in Uzbekistan. The university is
              recognised by leading international bodies such as NMC, WHO, and
              FAIMER, ensuring globally accepted medical education standards.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              The institution provides modern infrastructure along with
              well-equipped laboratories to enhance the learning experience. Its
              faculty includes highly qualified professionals such as
              academicians, professors, associate professors, assistant
              lecturers, and experts holding PhD and doctoral degrees. Tashkent
              Medical Academy offers a wide range of medical programs, including
              General Medicine, Dentistry, Pediatrics, Pharmacy, and more.
              Additionally, the university has around 735 postgraduate students
              across 46 specialisations and provides residency training to
              approximately 205 medical professionals in 20 different fields.
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
                    ["University Name", "Tashkent Medical Academy"],
                    ["Location", "Tashkent, Uzbekistan"],
                    ["Establishment Year", "2005"],
                    [
                      "Course Duration",
                      "6 years (Including 1 year internship)",
                    ],
                    ["Language of Teaching", "English"],
                    ["Accreditation", "NMC, WHO and FAIMER"],
                    [
                      "Entrance Exam",
                      "NEET qualification is mandatory for Indian students",
                    ],
                    ["Country Ranking", "5th"],
                    [
                      "Required Marks",
                      "Minimum 50% in Physics, Chemistry, and Biology in 12th grade",
                    ],
                    ["Age Requirement", "Minimum 17 years"],
                    ["Approx Annual Tuition Fee", "$4,500 (₹373,500)"],
                    ["Approx Annual Living Cost", "$8,400 (₹7,87,017)"],
                    ["IELTS / TOEFL Requirement", "Not required"],
                    ["English Seats", "Approx 800"],
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

          {/* Samarkand State Medical University */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
              Samarkand <span className="text-blue-700">State Medical </span>
              University
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Samarkand State Medical University is a reputed government
              institution located in Samarkand, Uzbekistan, established in 1930.
              It is recognised by international authorities such as NMC and WHO,
              making it a reliable option for students planning to pursue MBBS
              in Uzbekistan. The university offers high-quality medical
              education in English, which is especially beneficial for
              international students. The campus is equipped with advanced
              lecture halls, clinical laboratories, and multimedia classrooms
              that support both effective learning and research activities. The
              university is supported by a team of experienced and dedicated
              faculty members who ensure students receive strong academic
              knowledge and practical training.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              It offers a wide range of faculties, including General Medicine,
              Pediatrics, Medical Pedagogy, Higher Nursing, Dentistry, Pharmacy,
              Public Health, International Faculty, and Postgraduate Education.
              With 74 departments, more than 1,190 modern classrooms, 75
              multimedia-enabled classrooms, and an Academic Lyceum, the
              university provides an excellent academic environment for aspiring
              medical students.
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
                    ["University Name", "Samarkand State Medical University"],
                    ["Founded Year", "1930"],
                    ["Language of Teaching", "English"],
                    ["Course Duration", "6 years (Including internship)"],
                    ["Location", "Samarkand, Uzbekistan"],
                    ["Country Ranking", "2nd"],
                    ["Accreditation", "NMC and WHO"],
                    [
                      "Entrance Exam",
                      "The NEET qualification is mandatory for Indian candidates",
                    ],
                    [
                      "Required Marks",
                      "Minimum 50% in Physics, Chemistry, and Biology in 12th grade",
                    ],
                    ["Age Requirement", "Minimum 17 years old"],
                    ["Approx Annual Tuition Fee", "$3,800 (₹315,400)"],
                    ["Approx Annual Living Cost", "$7,200 (₹6,74,586)"],
                    ["IELTS / TOEFL Requirement", "Not required"],
                    ["English Seats", "Approx 300"],
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

          {/* Fergana State Medical University */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
              Fergana <span className="text-blue-700">State Medical </span>
              University
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Fergana State Medical University, also known as the Fergana
              Medical Institute of Public Health, is a government university
              established in 1991 in Fergana, Uzbekistan. It is recognised by
              WHO, NMC, and FAIMER. The university offers medical programs in
              fields like General Medicine, Medical Pedagogy, Preventive Care,
              and Higher Medical Care. It has around 147 professors and 19
              departments, providing quality education to students. The course
              duration is 5 years, including internship training in hospitals,
              where students gain both theoretical and practical knowledge under
              experienced professionals.
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
                      "Fergana Medical Institute of Public Health",
                    ],
                    ["Location", "Fergana, Uzbekistan"],
                    ["Establishment Year", "1991"],
                    ["Course Duration", "5 years (Including internship)"],
                    ["Language of Teaching", "English"],
                    ["Accreditation", "NMC, WHO and FAIMER"],
                    ["Country Ranking", "8th"],
                    [
                      "Required Marks",
                      "Minimum 50% in Physics, Chemistry, and Biology in 12th grade",
                    ],
                    [
                      "Entrance Exam",
                      "The NEET qualification is mandatory for Indian candidates",
                    ],
                    ["Age Requirement", "Minimum 17 years old"],
                    ["IELTS / TOEFL Requirement", "Not required"],
                    ["English Seats", "Approx 700"],
                    ["Approx Annual Living Cost", "$7,200 (₹6,74,586)"],
                    ["Approx Annual Tuition Fee", "$3,500 (₹290,500)"],
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

          {/* Bukhara State University */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
              Bukhara <span className="text-blue-700">State </span>University
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Bukhara State University is a well-known government medical
              university located in Bukhara, Uzbekistan, established in 1990. It
              is recognised by WHO and NMC, making it a preferred choice for
              students pursuing MBBS in Uzbekistan. The university has trained
              over 30,000 medical professionals and currently has around 4,000
              students, including international students from nearly 20
              countries. It is known for its quality education, modern
              infrastructure, and comfortable hostel facilities. With around 600
              qualified faculty members and 10 well-equipped laboratories, the
              university provides a strong academic environment along with
              practical training, making it a reliable option for aspiring
              medical students.
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
                    ["University Name", "Bukhara State University"],
                    ["Founded Year", "1990"],
                    ["Language of Teaching", "English"],
                    ["Course Duration", "6 years (Including internship)"],
                    ["Location", "Bukhara, Uzbekistan"],
                    ["Country Ranking", "19th"],
                    ["Accreditation", "WHO and NMC"],
                    [
                      "Entrance Exam",
                      "The NEET qualification is mandatory for Indian candidates",
                    ],
                    [
                      "Required Marks",
                      "Minimum 50% in Physics, Chemistry, and Biology in 12th grade",
                    ],
                    ["Approx Annual Tuition Fee", "$3,200 (₹265,600)"],
                    ["Approx Annual Living Cost", "$3,600 (₹3,37,293)"],
                    ["Age Requirement", "Minimum 17 years old"],
                    ["IELTS / TOEFL Requirement", "Not required"],
                    ["English Seats", "Approx 1000"],
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

          {/* Tashkent State Dental Institute */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
              Tashkent <span className="text-blue-700">State Dental </span>
              Institute
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Tashkent State Dental Institute (TSDI) is a government medical
              university established in 2014 and recognised by NMC and WHO. It
              focuses on excellence in medical education, research, and
              healthcare while maintaining global standards. The institute
              offers programs in Dentistry, Medical Practice, and Fundamental
              Medicine, with subjects like Physiology, Pathology, Surgery, and
              Orthopaedics taught using modern technology. With experienced
              faculty, well-equipped classrooms, hostel and canteen facilities,
              a library, and an air-conditioned auditorium, TSDI provides a
              comfortable and academically supportive environment for students.
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
                      "Tashkent State Dental Institute (TSDI)",
                    ],
                    ["Location", "Tashkent, Uzbekistan"],
                    ["Founded Year", "2014"],
                    [
                      "Course Duration",
                      "6 years, including one year of internship",
                    ],
                    ["Language of Teaching", "English"],
                    ["Country Ranking", "37th"],
                    [
                      "Required Marks",
                      "Minimum 50% in Physics, Chemistry, and Biology in 12th grade",
                    ],
                    ["Accreditation", "WHO and NMC"],
                    [
                      "Entrance Exam",
                      "NEET qualification is mandatory for Indian students",
                    ],
                    ["Age Requirement", "Minimum 17 years old"],
                    ["Approx Annual Tuition Fee", "$3,800 (₹315,400)"],
                    ["Approx Annual Living Cost", "$3,600 (₹3,38,437)"],
                    ["IELTS / TOEFL Requirement", "Not required"],
                    [
                      "English Seats",
                      "Limited seats available (Number of seats are not disclosed)",
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

          {/* Tashkent Medical Academy Urgench Branch */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
              Tashkent Medical Academy{" "}
              <span className="text-blue-700">Urgench Branch</span>
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Tashkent Medical Academy Urgench Branch is a reputed government
              institute located in Urgench, Uzbekistan, established in 1992. It
              offers courses like General Medicine, Pedagogy, and Nursing and is
              a popular choice among Indian students. The institute is known for
              its quality education, modern infrastructure, and advanced medical
              equipment. It has experienced faculty members who provide strong
              academic support to students. It is affiliated with the Ministry
              of Health and the Ministry of Higher Education of Uzbekistan and
              is recognised by WHO and NMC.
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
                      "Tashkent Medical Academy (Urgench Branch)",
                    ],
                    ["Location", "Urgench, Uzbekistan"],
                    ["Founded Year", "1992"],
                    ["Language of Teaching", "English"],
                    ["Course Duration", "6 years (Including internship)"],
                    ["Accreditation", "WHO and NMC"],
                    [
                      "Country Ranking",
                      "Among top medical academies in Uzbekistan",
                    ],
                    ["Age Requirement", "Minimum 17 years old"],
                    [
                      "Required Marks",
                      "Minimum 50% in Physics, Chemistry, and Biology in 12th grade",
                    ],
                    [
                      "Entrance Exam",
                      "NEET qualification is mandatory for Indian students",
                    ],
                    ["Approx Annual Living Cost", "$6,000 (₹5,64,063)"],
                    ["Approx Annual Tuition Fee", "$3,400 (₹282,200)"],
                    ["IELTS / TOEFL Requirement", "Not required"],
                    ["English Seats", "Approx 1000"],
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

          {/* Andijan State Medical Institute */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
              Andijan <span className="text-blue-700">State Medical </span>
              Institute
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              Andijan State Medical Institute (ASMI) is a government medical
              university established in 1955 in Andijan, Uzbekistan. It is
              recognised by WHO and NMC, making it a suitable option for
              students pursuing MBBS in Uzbekistan. The institute offers
              undergraduate, postgraduate, and doctoral programs in medicine,
              including MBBS in English for international students. It has four
              main faculties—Medicine, Pediatrics, Dentistry, and Advanced
              Training of Physicians—with over 56 departments. With experienced
              faculty and strong academic support, ASMI provides quality medical
              education and valuable international exposure for students.
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
                      "Andijan State Medical Institute (ASMI)",
                    ],
                    ["Location", "Andijan, Uzbekistan"],
                    ["Language of Teaching", "English"],
                    ["Course Duration", "6 years (Including internship)"],
                    ["Founded Year", "1955"],
                    ["Accreditation", "WHO and NMC"],
                    ["Country Ranking", "57th"],
                    [
                      "Required Marks",
                      "Minimum 50% in Physics, Chemistry, and Biology in 12th grade",
                    ],
                    [
                      "Entrance Exam",
                      "NEET qualification is mandatory for Indian students",
                    ],
                    ["Age Requirement", "Minimum 17 years old"],
                    ["Approx Annual Tuition Fee", "$3,500 (₹290,500)"],
                    ["Approx Annual Living Cost", "$5,000 (₹4,70,052)"],
                    ["IELTS / TOEFL Requirement", "Not required"],
                    ["English Seats", "Approx 1000"],
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
                question: "Is MBBS in Uzbekistan valid in India?",
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
                question: "Is Uzbekistan safe for Indian students?",
                answer: "Yes, it is safe and student-friendly.",
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
            APPLY NOW FOR MBBS IN UZBEKISTAN
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
