import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MBBSGeorgia() {
  // for FAQ start
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "Is MBBS in Georgia valid in India?",
      answer:
        "Yes, MBBS in Georgia is valid in India if you graduate from an NMC-approved university and successfully clear the FMGE/NExT examination.",
    },
    {
      question: "Is NEET required?",
      answer:
        "Yes, qualifying NEET is mandatory for Indian students to pursue MBBS in Georgia.",
    },
    {
      question: "Is IELTS required?",
      answer:
        "No, IELTS or TOEFL is generally not required for admission to most medical universities in Georgia.",
    },
    {
      question: "Is Georgia safe for Indian students?",
      answer:
        "Yes, Georgia is considered one of the safest countries in Europe, offering a secure and student-friendly environment for international students.",
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
                Georgia
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
          Why MBBS In Georgia?
        </a>

        <a
          href="#georgia-highlights"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Georgia Highlights
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
          Georgia Intakes
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
          Georgia Courses
        </a>

        <a
          href="#georgia-syllabus"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Georgia Syllabus
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
              MBBS in <span className="text-blue-600">Georgia</span> for Indian
              Students
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
                  Why Choose MBBS in Georgia?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Study MBBS in Georgia at top NMC-approved medical universities
                  with world-class infrastructure and European standards of
                  education. Georgia is emerging as one of the best destinations
                  for Indian students looking for high-quality medical education
                  abroad at affordable cost.
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  MBBS in Georgia has gained immense popularity among Indian
                  students due to its modern education system, safe environment,
                  and globally recognized medical degrees. Georgian universities
                  follow European teaching methodologies and are recognized by
                  major international bodies such as NMC, WHO, ECFMG, and
                  FAIMER.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "European Education Standards",
                  "English Medium Programs",
                  "No Donation Required",
                  "NMC & WHO Approved Universities",
                  "Affordable Tuition Fees",
                  "Global Career Opportunities",
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
      {/* WHY STUDY MBBS Georgia */}
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
                <span className="text-blue-600">MBBS in Georgia?</span>
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Studying MBBS in Georgia has become a popular choice for Indian
                students due to its affordable fees, globally recognized
                degrees, and high-quality education system. Georgian
                universities offer a safe environment, modern infrastructure,
                and strong academic support.
              </p>

              {/* Bullet Points */}
              <div className="mt-8 space-y-5">
                {[
                  "Globally recognized medical degree",
                  "European standard education system",
                  "No donation or capitation fee",
                  "English-medium MBBS programs",
                  "Safe and student-friendly country",
                  "High-quality infrastructure and modern labs",
                  "Better FMGE/NExT preparation environment",
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
                { icon: "🎓", title: "Globally Recognized Degree" },
                { icon: "📘", title: "European Education System" },
                { icon: "💸", title: "No Donation Required" },
                { icon: "🌐", title: "English Medium" },
                { icon: "🛡️", title: "Safe Country" },
                { icon: "🏥", title: "Modern Infrastructure" },
                { icon: "📖", title: "FMGE/NExT Support" },
                { icon: "🌍", title: "International Exposure" },
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
      {/* MBBS IN GEORGIA – KEY HIGHLIGHTS */}
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
            MBBS in <span className="text-blue-600">Georgia</span> Highlights
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
                    ["Medical Program", "MBBS/MD"],
                    ["Degree Type", "MD (Equivalent to MBBS in India)"],
                    ["Study Destination", "Georgia"],
                    ["Total Course Duration", "6 Years (Including Internship)"],
                    [
                      "MBBS in Georgia Eligibility",
                      "10+2 with Physics, Chemistry, Biology + NEET qualification",
                    ],
                    [
                      "Minimum Marks Required",
                      "50% for General, 40% for Reserved (as per NMC norms)",
                    ],
                    [
                      "NEET Requirement",
                      "Yes, NEET Exam is mandatory for Indian students",
                    ],
                    [
                      "Entrance Exam in Georgia",
                      "Generally no entrance exam for most universities",
                    ],
                    ["Medium of Instruction", "English Medium"],
                    [
                      "English Language Requirement",
                      "IELTS or TOEFL not required",
                    ],
                    ["Global Recognition", "NMC, WHO, ECFMG, WDOMS"],
                    ["Degree Awarded", "MD (Equivalent to MBBS in India)"],
                    [
                      "Approx Annual Tuition Fee",
                      "$5000 - $8,000 (₹415,000 - ₹664,000)",
                    ],
                    ["Approx Annual Hostel Fee", "$1750 (₹1,62,152)"],
                    ["Approx Total MBBS Cost", "$10,200 (₹944,000 )"],
                    ["Approx Annual Living Cost", "$3200 (₹265,600)"],
                    ["Top Cities for MBBS", "Tbilisi, Batumi, Kutaisi"],
                    [
                      "Top Medical Universities",
                      "Tbilisi State Medical University, East European University, New Vision University, Georgian American University",
                    ],
                    ["Admission Intakes", "February and September"],
                    ["Visa Processing Time", "15–30 Days (approx)"],
                    [
                      "Accommodation Options",
                      "University Hostel and Private Apartments",
                    ],
                    [
                      "Hostel Facilities",
                      "Furnished rooms, WiFi, kitchen and security",
                    ],
                    [
                      "Food Availability",
                      "Indian food available in major cities and universities",
                    ],
                    [
                      "Indian Student Community",
                      "Around 10,000 Indian students in Georgia",
                    ],
                    [
                      "Internship Valid in India",
                      "Yes, after clearing FMGE/NExT as per NMC rules",
                    ],
                    [
                      "Syllabus Pattern",
                      "Similar to the Indian MBBS curriculum",
                    ],
                    [
                      "Number of Medical Universities",
                      "Around 45 NMC-approved universities",
                    ],
                    [
                      "Documents Required",
                      "Passport, 10th & 12th marksheets, NEET scorecard, photographs, and medical report",
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
            MBBS in Georgia <span className="text-blue-600">Eligibility </span>
            Criteria 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-8">
            To pursue MBBS in Georgia, students must fulfill certain eligibility
            requirements set by medical universities and aligned with
            international education standards. Applicants are generally required
            to complete their higher secondary education with core science
            subjects such as Physics, Chemistry, and Biology. Additionally,
            universities expect students to secure a minimum percentage in these
            subjects and possess basic proficiency in English, as the medium of
            instruction is primarily English. In some cases, universities may
            also require candidates to qualify for entrance examinations. Below
            are the key eligibility criteria for studying MBBS in Georgia.
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
                    Minimum Marks (General Category)
                  </td>
                  <td className="p-4 border border-gray-300">
                    50% marks in 12th standard in PCB
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300  font-bold">
                    Minimum Marks (Reserve Category)
                  </td>
                  <td className="p-4 border border-gray-300">
                    40% aggregate marks in 12th standard in PCB
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Compulsory Subjects
                  </td>
                  <td className="p-4 border border-gray-300">
                    Physics, Chemistry, Biology and English
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Age Requirement
                  </td>
                  <td className="p-4 border border-gray-300">
                    Minimum age of 17 years
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    NEET Qualification
                  </td>
                  <td className="p-4 border border-gray-300">
                    NEET qualification is mandatory for Indian students
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Educational Board
                  </td>
                  <td className="p-4 border border-gray-300">
                    Academic qualifications must be from a recognised education
                    board
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
              MBBS in <span className="text-blue-600">Georgia</span> Admission
              Process
            </h2>

            {/* Paragraph (LEFT ALIGN + WIDTH CONTROL) */}
            <p className="text-gray-700 leading-relaxed max-w-4xl mb-10">
              The MBBS admission process in Georgia is straightforward and
              designed to be student-friendly, allowing international applicants
              to easily apply for medical studies. Before starting the
              application, students should confirm that they meet all
              eligibility requirements and keep their documents prepared to
              prevent any delays. The process typically starts with selecting a
              recognized medical university in Georgia that offers MBBS programs
              for international students. Once the university is chosen,
              candidates must fill out the online application form and submit
              all necessary documents for evaluation and approval. Below is a
              step-by-step guide to the admission process for MBBS in Georgia.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 text-gray-800 max-w-4xl">
              {[
                "Select a recognized medical university in Georgia that provides MBBS programs for international students.",
                "Complete the online application form through the official website of your chosen university.",
                "Upload and submit all necessary documents, including academic certificates, passport copy, NEET scorecard, and photographs.",
                "Wait for the university to review your application and verify the submitted documents.",
                "Receive the provisional admission letter once your application is successfully approved.",
                "Pay the required admission fee to secure your seat in the university.",
                "Obtain the official invitation letter from the university for visa processing.",
                "Apply for a Georgia student visa with all the required documentation.",
                "After visa approval, clear the remaining tuition fees and arrange your travel plans.",
                "Travel to Georgia, complete the enrollment process, and start your MBBS journey.",
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
              MBBS in <span className="text-blue-600">Georgia</span> Intakes
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              In Georgia, MBBS programs are usually offered in two primary
              intake sessions each year —
              <span className="font-semibold text-gray-900"> February </span>{" "}
              and
              <span className="font-semibold text-gray-900"> September</span>,
              as per the academic calendar followed by universities. These
              multiple intakes give students the advantage of planning their
              admission process comfortably and preparing in advance for their
              studies abroad. For the February intake, the application process
              generally begins between
              <span className="font-semibold"> October and December</span>. On
              the other hand, applications for the September intake are
              typically open from
              <span className="font-semibold"> May to July</span> or sometimes
              extend to early August. It is recommended that students apply as
              early as possible to avoid last-minute delays and ensure smooth
              processing of admission and visa formalities.
            </p>
          </div>
        </div>
      </section>
      {/* DOCUMENTS REQUIRED */}
      <section id="documents-required" className="pt-4 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in Georgia <span className="text-blue-600">Documents </span>
            Required
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            For applying to the MBBS program in Georgia, students are required
            to arrange a set of important documents as part of both the
            admission and visa procedures. These documents are used by
            universities and immigration authorities to verify the applicant’s
            academic background and identity. Candidates must provide their
            educational certificates, valid identification, photographs, and any
            additional supporting documents as specified by the university.
            After the successful review of the application, universities
            typically issue an admission confirmation or invitation letter.
            Ensuring that all documents are properly prepared in advance can
            make the entire admission and visa process smooth and hassle-free.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              10th Marksheet
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              12th Marksheet
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              NEET Scorecard
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Birth Certificate
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Original Passport (minimum 18 months validity)
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Passport Size Photographs (Visa Format)
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Medical Report
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Admission or Invitation Letter from the University
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Bank Statement
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Migration Certificate
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Valid Passport (at least 1 year validity)
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Six Passport-Size Photographs
            </li>
          </ul>
        </div>
      </section>
      {/* MBBS in Georgia Exam Required */}
      <section id="exam-required" className="pt-4 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-6">
            MBBS in Georgia <span className="text-blue-700">Exam</span> Required
          </h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">REQUIREMENT</th>
                  <th className="p-4 border border-gray-300">DETAILS</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    NEET Exam
                  </td>
                  <td className="p-4 border border-gray-300">
                    Qualifying the{" "}
                    <span className="text-blue-600 font-bold">NEET exam</span>{" "}
                    is mandatory for Indian students seeking admission to MBBS
                    programs.
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Minimum NEET Score
                  </td>
                  <td className="p-4 border border-gray-300">
                    The required NEET score may vary depending on the admission
                    guidelines of each university.
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Eligibility for Indian Students
                  </td>
                  <td className="p-4 border border-gray-300">
                    A valid NEET qualification is required for Indian students
                    seeking admission to MBBS courses in Georgia.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* MBBS in Georgia Courses */}
      <section
        id="georgia-courses"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in <span className="text-blue-700">Georgia</span> Courses
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            MBBS programs in Georgia are designed to provide a strong balance of
            theoretical knowledge and practical clinical experience. The course
            duration is typically 6 years, including a compulsory 1-year
            internship. During the first 5 years, students focus on academic
            learning, laboratory training, and developing a solid foundation in
            medical sciences. The final year is dedicated to clinical practice,
            where students gain hands-on experience in hospitals. The curriculum
            is aligned with international standards, ensuring that graduates
            receive globally recognized medical education and are fully prepared
            for a successful medical career worldwide.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Medicine
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Paediatrics
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Surgery
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Psychiatry
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Obstetrics and Gynaecology
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Orthopaedics
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Ophthalmology
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Dermatology
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              ENT (Ear, Nose and Throat)
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Radiology
            </li>
          </ul>
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
            MBBS in <span className="text-blue-700">Georgia</span> Syllabus
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            MBBS programs in Georgia are aligned with global education standards
            established by organizations like WHO, NMC, and ECFMG, ensuring
            quality learning and worldwide recognition. The courses are taught
            in English, making it convenient for international students without
            any language difficulties. The curriculum is structured to maintain
            a proper balance between theoretical knowledge, practical training,
            and modern diagnostic techniques. Students also receive hands-on
            clinical experience through training in associated hospitals, which
            helps them build real-world medical skills. The complete syllabus
            structure is provided below.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">PHASE</th>
                  <th className="p-4 border border-gray-300">YEAR</th>
                  <th className="p-4 border border-gray-300">
                    SUBJECTS / AREAS COVERED
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Pre-Clinical Phase
                  </td>
                  <td className="p-4 border border-gray-300">Year 1 & 2</td>
                  <td className="p-4 border border-gray-300">
                    Anatomy, Biochemistry, Physiology, Histology, Medical
                    Genetics, Embryology, Medical Terminology
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Para-Clinical Phase
                  </td>
                  <td className="p-4 border border-gray-300">Year 3</td>
                  <td className="p-4 border border-gray-300">
                    Pathology, Microbiology, Pharmacology, Forensic Medicine,
                    Community Medicine, Immunology
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Clinical Phase
                  </td>
                  <td className="p-4 border border-gray-300">Year 4 & 5</td>
                  <td className="p-4 border border-gray-300">
                    General Medicine, General Surgery, Pediatrics, Gynaecology &
                    Obstetrics, Ophthalmology, ENT, Dermatology, Psychiatry,
                    Radiology, Anesthesiology
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Internship Phase
                  </td>
                  <td className="p-4 border border-gray-300">Year 6</td>
                  <td className="p-4 border border-gray-300">
                    Emergency Medicine, Internal Medicine, Surgery, Pediatrics,
                    Gynaecology & Obstetrics, Psychiatry, Radiology, Orthopedics
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
            MBBS in Georgia <span className="text-blue-700">Fees</span>{" "}
            Structure 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            Studying MBBS in Georgia is a cost-effective option for
            international students, particularly for those from countries like
            India. Universities in Georgia provide high-quality education with
            advanced infrastructure and degrees that are recognized globally. In
            comparison to many other countries, the overall cost of medical
            education in Georgia is more affordable. Additionally, universities
            offer well-maintained hostel facilities along with student support
            services, which makes Georgia a popular choice for students planning
            to study medicine abroad. Below is a detailed overview of the annual
            tuition fees for some of the leading medical universities in
            Georgia.
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
                    East European University
                  </td>
                  <td className="p-4 border border-gray-300">$5500</td>
                  <td className="p-4 border border-gray-300">₹456,500</td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    New Vision University
                  </td>
                  <td className="p-4 border border-gray-300">$7000</td>
                  <td className="p-4 border border-gray-300">₹581,000</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Tbilisi State Medical University
                  </td>
                  <td className="p-4 border border-gray-300">$8,000</td>
                  <td className="p-4 border border-gray-300">₹664,000</td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Batumi Shota Rustaveli University
                  </td>
                  <td className="p-4 border border-gray-300">$5000</td>
                  <td className="p-4 border border-gray-300">₹415,000</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Georgian National University SEU
                  </td>
                  <td className="p-4 border border-gray-300">$6300</td>
                  <td className="p-4 border border-gray-300">₹522,900</td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Georgian American University
                  </td>
                  <td className="p-4 border border-gray-300">$6000</td>
                  <td className="p-4 border border-gray-300">₹498,000</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    ILIA State University
                  </td>
                  <td className="p-4 border border-gray-300">$6200</td>
                  <td className="p-4 border border-gray-300">₹514,600</td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Alte State Medical University
                  </td>
                  <td className="p-4 border border-gray-300">$5500</td>
                  <td className="p-4 border border-gray-300">₹456,500</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Grigol Robakidze University
                  </td>
                  <td className="p-4 border border-gray-300">$5500</td>
                  <td className="p-4 border border-gray-300">₹456,500</td>
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
            MBBS in Georgia <span className="text-blue-700">Hostel & </span>{" "}
            Accommodation
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            Hostel facilities in Georgia offer budget-friendly and comfortable
            accommodation options for international students pursuing MBBS. The
            overall cost of living in Georgia is comparatively low, which makes
            it an attractive choice for students planning to study abroad.
            Universities provide well-maintained hostels equipped with modern
            amenities such as furnished rooms, internet connectivity, security
            services, and shared common spaces. Most hostels are conveniently
            located near university campuses, making daily commuting easy for
            students. In addition to hostel accommodation, students also have
            the flexibility to choose private apartments for independent living
            during their studies.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Table Head */}
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

              {/* Table Body */}
              <tbody className="text-gray-800">
                {[
                  [
                    "Comfortable Bed Facilities",
                    "Students are provided with clean, comfortable, and well-maintained sleeping arrangements in hostel rooms.",
                  ],
                  [
                    "Common Kitchen",
                    "Shared kitchen spaces are available for students who prefer preparing their own meals.",
                  ],
                  [
                    "Furniture",
                    "Rooms are furnished with essential items including a bed, study table, chair, and wardrobe for student convenience.",
                  ],
                  [
                    "Extracurricular Activities",
                    "Universities conduct a variety of extracurricular activities to promote both personal growth and professional development.",
                  ],
                  [
                    "Water Supply",
                    "Hostels ensure an uninterrupted supply of both hot and cold water throughout the year.",
                  ],
                  [
                    "Indian Mess Facilities",
                    "Indian cuisine is available with a wide range of meal options specially catering to Indian students.",
                  ],
                  [
                    "Security",
                    "Hostel premises are secured with CCTV monitoring and trained security personnel to maintain student safety.",
                  ],
                  [
                    "Internet Access",
                    "High-speed Wi-Fi connectivity is provided across hostels and university campuses.",
                  ],
                  [
                    "Laundry Services",
                    "Laundry facilities are available within the hostel premises to help students maintain cleanliness and hygiene.",
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
                    <td className="p-4 border border-gray-300">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* MBBS in Georgia Living Cost */}
      <section
        id="living"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in Georgia <span className="text-blue-700">Living </span>
            Cost
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            The living expenses for MBBS students in Georgia generally cover
            costs such as accommodation, food, transportation, and study-related
            materials. The total expense may differ based on the type of
            accommodation selected and the student’s lifestyle preferences.
            Students choosing private apartments may have slightly higher costs
            compared to those staying in university hostels. Nevertheless, even
            with these differences, the overall cost of living in Georgia
            remains quite affordable. Along with high-quality education, this
            makes Georgia a preferred destination for international students,
            particularly from India. Below is an approximate overview of the
            yearly living expenses.
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
                    ANNUAL LIVING COST <br />
                    <span className="text-sm">(IN USD – APPROX.)</span>
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    ANNUAL LIVING COST <br />
                    <span className="text-sm">(IN INR – APPROX.)</span>
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                {[
                  ["Mess", "$1750", "₹1,62,152"],
                  ["Hostel Fees (Monthly)", "$1750", "₹1,62,152"],
                  ["Books & Supplies", "$43 to $130", "₹4,000 to ₹12,000"],
                  ["Transportation", "$173 - $289", "₹14,400 - ₹24,000"],
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
            Georgia
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            There are several universities in Georgia approved by the National
            Medical Commission (NMC), ensuring that medical institutions
            maintain high standards in education, infrastructure, and clinical
            training. This recognition is particularly important for Indian
            students, as it allows them to pursue medical education abroad and
            practice in India after completing the required licensing exams.
            Students can choose from a wide range of NMC-approved universities
            in Georgia based on their budget, preferences, and career goals.
            These universities offer quality education, modern facilities, and
            global exposure, making Georgia a preferred destination for medical
            studies.
          </p>
        </div>
      </section>
      {/* TOP MEDICAL UNIVERSITIES IN 
GEORGIA  */}
      <section
        id="top"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            Top Medical <span className="text-blue-700">Universities </span>
            In Georgia{" "}
          </h2>
          {/* {/* Tbilisi State Medical University */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4 pt-4">
            Tbilisi State <span className="text-blue-700">Medical </span>
            University (TSMU)
          </h2>
          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            Tbilisi State Medical University (TSMU), founded in 1918, is among
            the oldest and most reputed medical institutions in Georgia. It is
            well-known for delivering quality education supported by strong
            clinical exposure. The university provides highly qualified faculty,
            advanced laboratory facilities, and a well-structured curriculum
            that integrates theoretical learning with practical application.
            This approach helps students develop the skills required for
            successful careers in the global healthcare sector. TSMU is
            recognized by leading organizations such as NMC, WHO, WDOMS, and
            ECFMG, which makes it a popular choice for international students.
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
                  ["University Name", "Tbilisi State Medical University"],
                  ["Established In", "1918"],
                  ["Location", "Tbilisi, Georgia"],

                  ["Language of Teaching", "English"],
                  ["University Type", "Government Medical University"],

                  ["Recognition", "NMC, WHO, WDOMS & ECFMG"],
                  ["Course Duration", "6 years (including internship)"],
                  [
                    "Entrance Exam",
                    "NEET qualification is mandatory for Indian students",
                  ],
                  ["Approx Annual Tuition Fee", "$8000 (₹7,39,503)"],
                  ["Approx Annual Living Cost", "$3200 (₹2,65,600)"],
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
                        [1, 5, 8, 9].includes(index) ? "font-bold" : ""
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
            Georgian <span className="text-blue-700">American </span>
            University
          </h2>
          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            Georgian American University, founded in 2001 in Tbilisi, is a
            well-known private institution recognized for its modern education
            system and global academic standards. The university offers advanced
            infrastructure along with experienced faculty who contribute to
            innovative and quality learning programs. Students benefit from a
            balanced curriculum that integrates theoretical concepts with
            hands-on clinical training, helping them build strong practical
            skills. With an international student environment and globally
            accepted degrees, the university prepares graduates for successful
            careers worldwide. Over the years, Georgian American University has
            gained strong popularity among international students looking for
            high-quality medical education abroad.
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
                  ["University Name", "Georgian American University"],
                  ["Founded Year", "2001"],
                  ["Location", "Tbilisi, Georgia"],
                  ["University Type", "Private University"],
                  ["Medium of Instruction", "English"],
                  ["Course Duration", "6 years (including internship)"],
                  ["Recognition", "NMC, WHO, WFME & ECFMG (USA)"],
                  [
                    "Entrance Exam",
                    "NEET qualification is mandatory for Indian students",
                  ],
                  ["Approx Annual Tuition Fee", "$6000 (₹5,54,643)"],
                  ["Approx Annual Living Cost", "$3200 (₹2,65,600)"],
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
                        [1, 6, 8, 9].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Georgian National University */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4 pt-5">
            Georgian <span className="text-blue-700">National </span>
            University
          </h2>
          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            Georgian National University, established in 2001, is a
            well-regarded private institution known for delivering quality
            education supported by modern facilities. The university provides a
            vibrant academic environment with more than 10,000 students and a
            campus spread across approximately 80,000 square meters. It has a
            strong alumni base of over 50,000 graduates and is recognized by
            prestigious organizations such as the National Medical Commission
            (NMC) and the World Health Organization (WHO). With experienced
            faculty and well-equipped practical training at its Faculty of
            Medicine, the university ensures strong academic and clinical
            exposure. Ranked among the leading universities in the country, it
            continues to attract international students due to its affordable
            fees and globally accepted education.
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
                  ["University Name", "Georgian National University"],
                  ["Founded Year", "2001"],
                  ["Location", "Tbilisi, Georgia"],
                  ["University Type", "Private University"],
                  ["Medium of Instruction", "English"],
                  ["Course Duration", "6 years (including internship)"],
                  ["Recognition", "NMC & WHO"],
                  [
                    "Entrance Exam",
                    "NEET qualification is mandatory for Indian students",
                  ],
                  ["Approx Annual Tuition Fee", "$6300 (₹5,82,357)"],
                  ["Approx Annual Living Cost", "$3200 (₹2,65,600)"],
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
                        [1, 6, 8, 9].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Kutaisi International University (KIU) */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4 pt-5">
            Kutaisi <span className="text-blue-700">International </span>
            University (KIU)
          </h2>
          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            Kutaisi International University (KIU), founded in 2020, is a modern
            and reputable institution situated in Kutaisi, the third-largest
            city of Georgia. Backed by the Cartu Foundation, the university aims
            to develop into an international centre for education, science, and
            innovation. KIU offers MBBS as well as programs in fields like
            management, mathematics, and computer science, with a strong
            emphasis on research and clinical practice. The campus is equipped
            with advanced facilities such as a state-of-the-art library, modern
            laboratories, and a Hadron Therapy Center. With global
            collaborations and participation in international academic
            conferences, KIU provides students with strong opportunities for
            both academic excellence and career development.
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
                  ["University Name", "Kutaisi International University (KIU)"],
                  ["Founded Year", "2020"],
                  ["Location", "Kutaisi, Georgia"],
                  ["University Type", "Private University"],
                  ["Medium of Instruction", "English"],
                  ["Course Duration", "6 years (including internship)"],
                  ["Recognition", "NMC & WHO"],
                  [
                    "Entrance Exam",
                    "NEET Exam is mandatory for Indian students",
                  ],
                  ["Approx Annual Tuition Fee", "$6000 (₹5,54,467)"],
                  ["Approx Annual Living Cost", "$3200 (₹2,65,600)"],
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
                        [1, 6, 8, 9].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* BAU International University Section */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
            BAU <span className="text-blue-700">International</span> University
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            BAU International University, located in Batumi and Tbilisi, was
            founded in 2015 and has emerged as a well-known medical institution
            in Georgia. It is widely appreciated for its emphasis on practical
            clinical training that meets global education standards. The
            university provides a modern learning atmosphere supported by
            advanced lab facilities and highly qualified faculty. Its curriculum
            is designed to combine theoretical understanding with real-world
            practical exposure, helping students build strong medical skills.
            With recognition from NMC and WHO, BAU continues to attract
            international students who are looking for high-quality education
            and global career opportunities.
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
                  ["University Name", "BAU International University"],
                  ["Established In", "2015"],
                  ["Location", "Batumi and Tbilisi, Georgia"],
                  ["University Type", "Private"],
                  ["Language of Teaching", "English"],
                  ["Course Duration", "6 years"],
                  ["Recognition", "NMC & WHO"],
                  ["Entrance Exam", "NEET Exam"],
                  ["Approx Annual Tuition Fee", "$3200 (₹265,600)"],
                  ["Approx Annual Living Cost", "$4800 (₹398,400)"],
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
                        [0, 6, 7, 8, 9].includes(index) ? "font-bold" : ""
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
            APPLY NOW FOR MBBS IN GEORGIA
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
