import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RussiaCollegeSlider from "./RussiaCollegeSlider";

export default function MBBSRussia() {
  // for FAQ start
  const [openIndex, setOpenIndex] = useState(null);
 const faqs = [
   {
     question: "Is MBBS in Russia valid in India?",
     answer:
       "Yes, it is valid if the degree is obtained from an NMC-approved university and after clearing FMGE/NExT as per NMC guidelines.",
   },
   {
     question: "Is NEET required for MBBS in Russia?",
     answer:
       "Yes, NEET qualification is mandatory for Indian students to pursue MBBS in Russia.",
   },
   {
     question: "Is IELTS required for MBBS in Russia?",
     answer:
       "No, IELTS or TOEFL is not required for most medical universities in Russia.",
   },
   {
     question: "Is Russia safe for Indian students?",
     answer:
       "Yes, Russia is considered safe for Indian students and has a large Indian student community.",
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
                Russia
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
          href="#why-Russia"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why MBBS In Russia?
        </a>

        <a
          href="#russia-highlights"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Russia Highlights
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
          href="#russia-intakes"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Russia Intakes
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
          href="#russia-courses"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Russia Courses
        </a>

        {/* <a
          href="#Russia-syllabus"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Russia Syllabus
        </a> */}

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
      <RussiaCollegeSlider />
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
              MBBS in <span className="text-blue-600">Russia</span> for Indian
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
                  Why Choose MBBS in Russia?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Study MBBS in Russia at top NMC-approved medical universities
                  with affordable fees, global recognition, and complete
                  admission support. Secure your medical career without donation
                  and high competition in India.
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  MBBS in Russia has become one of the most preferred choices
                  for Indian students due to its low cost, high-quality
                  education, and international recognition. Every year,
                  thousands of Indian students choose Russia to pursue their
                  dream of becoming a doctor.
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Russian medical universities are globally recognized and
                  listed in NMC, WHO, ECFMG, and FAIMER directories, making
                  graduates eligible for medical licensing exams worldwide.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "No Donation ",
                  "Affordable Fees ",
                  "English Medium Programs ",
                  "NMC & WHO Approved Universities ",
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
      {/* WHY STUDY MBBS Russia */}
      <section
        id="why-Russia"
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
                Why Study <span className="text-blue-600">MBBS in Russia?</span>
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Affordable MBBS education compared to India NMC, WHO, ECFMG &
                FAIMER recognized universities Globally accepted medical degree
                No donation or entrance exam (only NEET required) High-quality
                education with modern infrastructure Opportunity to practice
                medicine worldwide.
              </p>

              {/* Bullet Points */}
              <div className="mt-8 space-y-5 font-bold">
                {[
                  "Affordable education compared to private medical colleges in India ",
                  "No donation or capitation fee required ",
                  "Direct admission process (no entrance exam apart from NEET) ",
                  "English-medium MBBS programs available ",
                  "Globally recognized degree ",
                  "Advanced infrastructure and modern medical labs ",
                  "Early clinical exposure in hospitals ",
                  "Opportunity to practice globally (USA, UK, Europe) ",
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
                { icon: "💰", title: "Affordable Education" },
                { icon: "💸", title: "No Donation Required" },
                { icon: "📝", title: "Direct Admission (NEET Only)" },
                { icon: "🌐", title: "English Medium" },
                { icon: "🎓", title: "Globally Recognized Degree" },
                { icon: "🏥", title: "Modern Infrastructure" },
                { icon: "🩺", title: "Early Clinical Exposure" },
                { icon: "🌍", title: "Global Career Opportunities" },
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
      {/* MBBS IN Russia – KEY HIGHLIGHTS */}
      <section
        id="russia-highlights"
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
            MBBS in <span className="text-blue-600">Russia</span> Highlights
          </h2>

          {/* TABLE CARD WRAPPER (IMPORTANT ) */}
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
                  {/*  Same rows as your code (unchanged) */}
                  {/* bas ek small improvement: hover effect add kiya */}

                  {[
                    ["Medical Program", "MBBS / General Medicine"],
                    [
                      "Degree Type",
                      "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
                    ],
                    ["Study Destination", "Russia"],
                    [
                      "Total Course Duration",
                      "6 Years (Including Internship/Clinical Training)",
                    ],
                    [
                      "MBBS in Russia Eligibility",
                      "10+2 with Physics, Chemistry, Biology + NEET qualification",
                    ],
                    [
                      "Minimum Marks Required",
                      "50% for General, 40% for SC/ST/OBC (as per NMC norms)",
                    ],
                    [
                      "NEET Requirement",
                      "Yes, NEET Exam is mandatory for Indian students",
                    ],
                    [
                      "Entrance Exam in Russia",
                      "Generally no entrance exam for most universities",
                    ],
                    [
                      "Medium of Instruction",
                      "English Medium (Russian medium also available)",
                    ],
                    [
                      "English Language Requirement",
                      "IELTS or TOEFL not required",
                    ],
                    ["Global Recognition", "NMC, WHO, FAIMER, ECFMG, WDOMS"],
                    ["Degree Awarded", "MD (Equivalent to MBBS in India)"],
                    [
                      "Approx Annual Tuition Fee",
                      "2,95,000 – 10,00,000 RUB (₹3,43,089 – ₹11,64,538)",
                    ],
                    ["Approx Annual Hostel Fee", "60,000 RUB (₹69,785)"],
                    ["Approx Total MBBS Cost", "₹22 Lakh – ₹35 Lakh"],
                    ["Approx Annual Living Cost", "2,40,500 RUB (₹2,79,728)"],
                    [
                      "Top Cities for MBBS",
                      "Moscow, Kazan, Saint Petersburg, Rostov, Novosibirsk",
                    ],
                    [
                      "Top Medical Universities",
                      "Kazan State Medical University, Sechenov University, Lomonosov Moscow State University, Pirogov Russian National Research Medical University, Pavlov University",
                    ],
                    [
                      "Admission Intakes",
                      "September (main intake) and January/February",
                    ],
                    ["Visa Processing Time", "15–30 Days (approx)"],
                    [
                      "Accommodation Options",
                      "University Hostel and Private Apartments",
                    ],
                    [
                      "Hostel Facilities",
                      "Furnished rooms, WiFi, heating, mess/canteen and security",
                    ],
                    [
                      "Food Availability",
                      "Indian food available in major cities and universities",
                    ],
                    [
                      "Indian Student Community",
                      "A large number of Indian students are studying in Russia",
                    ],
                    [
                      "Clinical Training",
                      "Starts from the 3rd year onwards (depends on university)",
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
                      "50+ Government Medical Universities",
                    ],
                    [
                      "Documents Required",
                      "Passport, 10th & 12th marksheets, NEET scorecard, photographs and medical report",
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
            MBBS in Russia <span className="text-blue-600">Eligibility </span>
            Criteria 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            To study MBBS in Russia, students need to fulfill specific
            eligibility requirements. These ensure that they are well-prepared
            for medical studies and meet the standards of Russian universities.
            It also makes the admission process easier and more straightforward
            for international applicants. Below are the main eligibility
            criteria for Indian students.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-800 mb-8">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Age Limit:</strong> Minimum 17 years old on or before
                31st December of the admission year.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Academic Background:</strong> 10+2 with Physics,
                Chemistry, Biology and English as core subjects.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Minimum Marks:</strong> At least 50% in PCB for General
                and 40% for reserved categories.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>NEET Qualification:</strong> NEET exam is mandatory for
                Indian students.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                It is advisable to check the specific eligibility requirements
                of the university before applying.
              </span>
            </li>
          </ul>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-300">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">
                    ELIGIBILITY CRITERIA
                  </th>
                  <th className="p-4 border border-gray-300">DETAILS</th>
                </tr>
              </thead>

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
                  <td className="p-4 border border-gray-300 font-bold">
                    Minimum Marks (Reserved Category)
                  </td>
                  <td className="p-4 border border-gray-300">
                    40% marks in PCB (SC/ST/OBC)
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Compulsory Subjects
                  </td>
                  <td className="p-4 border border-gray-300">
                    Physics, Chemistry, Biology & English
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Age Requirement
                  </td>
                  <td className="p-4 border border-gray-300">
                    Minimum 17 years (before 31st Dec of admission year)
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    NEET Qualification
                  </td>
                  <td className="p-4 border border-gray-300">
                    NEET qualification is mandatory
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Educational Board
                  </td>
                  <td className="p-4 border border-gray-300">
                    Must be from a recognized board
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

        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 p-10 md:p-14">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              MBBS in <span className="text-blue-600">Russia</span> Admission
              Process
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
              The admission process for MBBS in Russia is simple and
              well-structured for students planning to study abroad. It
              streamlines every step, from application submission to document
              verification and final admission. By following the official
              procedures, applicants can ensure a smooth and hassle-free
              process. International students can easily enroll in English or
              Russian-medium programs, allowing them to begin their medical
              studies without any confusion. Overall, the MBBS admission process
              in Russia is straightforward. Below are the key steps that
              students need to follow.
            </p>

            {/* Step 1 */}
            <p className="text-gray-800 font-semibold mb-2">
              Step 1: Visit or call a representative of MBBS university in
              Russia and ask for a free counselling session and learn more
              information about
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
              <li>The university itself</li>
              <li>Structure of fees</li>
              <li>Accommodation options and information</li>
              <li>
                Eligibility criteria and the overall education system of Russia.
              </li>
            </ul>

            {/* Step 2 */}
            <p className="text-gray-800 font-semibold mb-2">
              Step 2: After getting to know all the details of studying MBBS in
              Russia, you can fill up the admission form. Then submit the same
              along with the scanned copies of the important documents that are
              required. The important documents required for MBBS in Russia are:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
              <li>10th and 12th Standard Mark Sheet</li>
              <li>School completion certificate</li>
              <li>Passport</li>
              <li>
                Other documents might be needed in the further procedure of
                admission.
              </li>
            </ul>

            {/* Step 3 */}
            <p className="text-gray-800 font-semibold mb-4">
              Step 3: The MBBS University in Russia that you have applied for
              will issue a letter which states the confirmation of admission
              once you have done the admission of the required documents.
            </p>

            {/* Step 4 */}
            <p className="text-gray-800 font-semibold mb-4">
              Step 4: You are almost done and now it is your turn to deposit the
              fees to let your dream of joining MBBS in Russia come true.
            </p>

            {/* Step 5 */}
            <p className="text-gray-800 font-semibold mb-4">
              Step 5: Once you have deposited the fees, it is time to apply for
              a student VISA.
            </p>

            {/* Step 6 */}
            <p className="text-gray-800 font-semibold">
              Step 6: Once you receive a visa, it is time to book your tickets
              and fly to Russia. Enjoy an enriching studying experience at this
              place and become successful in life.
            </p>
          </div>
        </div>
      </section>
      {/* INTAKES SECTION */}
      <section
        id="russia-intakes"
        className="relative pt-6 pb-10 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MBBS in <span className="text-blue-600">Russia</span> Intakes
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              Russian universities provide multiple intake options for
              international students. The most popular intake takes place in
              <span className="font-semibold text-gray-900"> September</span>,
              which is widely preferred by Indian as well as other international
              applicants. In addition, some universities offer a
              <span className="font-semibold text-gray-900">
                {" "}
                Winter intake during January or February
              </span>
              , although the number of available seats is limited. At present,
              institutions like Pitirim Sorokin Syktyvkar State University are
              offering winter admissions, allowing students to begin their
              studies earlier. Generally, applications for MBBS programs start
              in May and continue until August, though exact timelines may vary
              depending on the university. Since admission schedules differ
              across institutions, it is important to understand the intake
              system clearly. Below is an overview of MBBS intakes in Russia:
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 text-gray-800 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>
                  <strong>Primary Intake:</strong> The major intake for MBBS in
                  Russia is held in September, which is the most preferred and
                  commonly chosen intake among Indian and international
                  students.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>
                  <strong>Other Intakes:</strong> Some universities also provide
                  intake options in January or February, but these are less
                  common and have limited seat availability.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>
                  <strong>Applications for Admissions:</strong> The application
                  process for MBBS generally begins in May and continues until
                  August.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>
                  <strong>Deadlines:</strong> Application deadlines may vary
                  from one university to another. Therefore, students should
                  always verify the exact dates through the official university
                  website or consult with educational advisors.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* DOCUMENTS REQUIRED */}
      <section id="documents-required" className="pt-4 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in <span className="text-blue-600">Russia</span> Documents
            Required
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            Students planning to pursue MBBS in Russia are required to complete
            the admission process by submitting all necessary documents and
            meeting the eligibility criteria. For Indian applicants,
            universities first review and verify the submitted documents before
            issuing an admission letter, which is essential for proceeding with
            the student visa application. After obtaining the visa, students can
            travel to Russia and complete the remaining registration and
            enrollment procedures at the university. This process ensures that
            international students are officially admitted and fully prepared to
            begin their medical education in Russia. Below is the list of
            documents required for MBBS admission in Russia:
          </p>

          {/* Bullet List */}
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>A
              valid passport and student visa
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              10th and 12th marksheets
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Letter of acceptance from the medical university in Russia
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Valid NEET scorecard
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Completed application form of the university
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Passport-size photographs
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Medical test reports (if required)
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Visa-related documents
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Fee payment receipts (tuition and visa fees)
            </li>
          </ul>
        </div>
      </section>
      {/* MBBS in Russia Courses */}
      <section
        id="russia-courses"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in <span className="text-blue-700">Russia</span> Courses
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-8">
            The MBBS program in Russia is structured to deliver comprehensive
            medical knowledge combined with practical clinical exposure. It
            emphasizes both theoretical education and real-world hospital
            training. Students gain vital skills in patient care and modern
            medical techniques under the guidance of experienced professionals.
            The curriculum follows international standards, preparing graduates
            to become skilled and globally competent healthcare professionals.
            Below are the courses available at medical universities in Russia.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">S. NO</th>
                  <th className="p-4 border border-gray-300">COURSES</th>
                  <th className="p-4 border border-gray-300">
                    DURATION (YEARS)
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">1</td>
                  <td className="p-4 border border-gray-300 font-semibold">
                    MBBS/MD
                  </td>
                  <td className="p-4 border border-gray-300">Six</td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">2</td>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Dentistry
                  </td>
                  <td className="p-4 border border-gray-300">Five</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">3</td>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Pharmacy
                  </td>
                  <td className="p-4 border border-gray-300">Four</td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">4</td>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Nursing
                  </td>
                  <td className="p-4 border border-gray-300">Four</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* MBBS in Russia Fees Structure */}
      <section
        id="fees-structure"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in <span className="text-blue-700">Russia</span> Fees Structure
            2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            The cost of studying MBBS in Russia is relatively affordable when
            compared to many private medical colleges in India and other
            countries. Russian universities provide high-quality education at
            reasonable fees, making them an attractive option for international
            students. Along with low tuition costs, students also benefit from
            budget-friendly hostel facilities. Due to the overall affordability
            and access to globally recognized education, many students prefer
            Russia for their medical studies. Below is a list of top
            universities along with their fee structure to help you choose the
            most suitable option.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Head */}
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">
                    UNIVERSITY NAME
                  </th>
                  <th className="p-4 border border-gray-300">
                    APPROX ANNUAL TUITION FEE (RUB)
                  </th>
                  <th className="p-4 border border-gray-300">
                    APPROX ANNUAL TUITION FEE (INR)
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Siberian State Medical University
                  </td>
                  <td className="p-4 border border-gray-300">3,85,600 RUB</td>
                  <td className="p-4 border border-gray-300">₹4,48,403</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Kemerovo State Medical University
                  </td>
                  <td className="p-4 border border-gray-300">2,95,000 RUB</td>
                  <td className="p-4 border border-gray-300">₹3,43,089</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Voronezh State Medical University
                  </td>
                  <td className="p-4 border border-gray-300">4,12,100 RUB</td>
                  <td className="p-4 border border-gray-300">₹4,79,233</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Volgograd State Medical University
                  </td>
                  <td className="p-4 border border-gray-300">4,65,000 RUB</td>
                  <td className="p-4 border border-gray-300">₹5,40,828</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Bashkir State Medical University
                  </td>
                  <td className="p-4 border border-gray-300">3,99,000 RUB</td>
                  <td className="p-4 border border-gray-300">₹4,64,061</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    North Caucasian State Academy
                  </td>
                  <td className="p-4 border border-gray-300">3,00,000 RUB</td>
                  <td className="p-4 border border-gray-300">₹3,48,944</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Crimea Federal University
                  </td>
                  <td className="p-4 border border-gray-300">3,30,000 RUB</td>
                  <td className="p-4 border border-gray-300">₹3,84,326</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    First Moscow State Medical University
                  </td>
                  <td className="p-4 border border-gray-300">10,00,000 RUB</td>
                  <td className="p-4 border border-gray-300">₹11,64,538</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Pirogov Russian National Research Medical University
                  </td>
                  <td className="p-4 border border-gray-300">7,50,000 RUB</td>
                  <td className="p-4 border border-gray-300">₹8,73,333</td>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in <span className="text-blue-700">Russia</span> Hostel &
            Accommodation Facility for Indian Students
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            The cost of medical education in Russia is quite affordable, and
            most universities provide on-campus accommodation for students.
            Those who prefer not to stay in hostels can opt for alternative
            housing options such as rented apartments, homestays, lodges, or
            inns. Students have the flexibility to choose between on-campus and
            off-campus living. Basic accommodation can cost around{" "}
            <strong>10,000 RUB per month</strong>, making it a budget-friendly
            option for student life in Russia. Off-campus accommodation is
            comparatively more expensive, with costs starting from approximately{" "}
            <strong>70,000 RUB per year</strong>, depending on the location.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-800 mb-6">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              Do not be sad anymore because you didn’t get admission in other
              colleges.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              MBBS in Russia course duration is six years.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              You just need to get 50% marks and 45% for all SC/ST/OBC
              candidates in your 12th standard with a science background.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              There are no donations, admission tests, or language tests.
            </li>
          </ul>

          {/* Sub Heading */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            Mess Facilities
          </h3>

          {/* Mess Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl">
            Students have the option to choose between vegetarian and
            non-vegetarian meals based on their preferences. Since food habits
            vary across cultures, universities in Russia provide well-equipped
            mess facilities to cater to diverse dietary needs. Students can
            select their preferred meal plan, whether vegetarian,
            non-vegetarian, or both, at the time of admission.
          </p>
        </div>
      </section>
      {/* MBBS in Russia Living Cost */}
      <section
        id="living"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in <span className="text-blue-700">Russia</span> Living Cost
            2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
              The cost of living for students pursuing MBBS in Russia is quite
              affordable when compared to many other countries. International
              students can easily manage their daily expenses while continuing
              their studies. These expenses typically include accommodation,
              food, transportation, personal needs, and other essentials. Most
              universities offer budget-friendly hostel facilities, which
              further reduce overall costs. By maintaining a simple lifestyle
              and managing expenses wisely, students can live and study
              comfortably in Russia without financial stress. Therefore, Russia
              is considered a practical and economical choice for MBBS
              aspirants. Below is an overview of the estimated living expenses
              for MBBS students in Russia, presented in both Indian Rupees and
              Russian Rubles.
            </p>
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Head */}
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    EXPENSE TYPE
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    COST (RUB / PER YEAR - APPROX)
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    COST (INR / PER YEAR - APPROX)
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    Accommodation (Hostel)
                  </td>
                  <td className="p-4 border border-gray-300">60,000 RUB</td>
                  <td className="p-4 border border-gray-300">₹69,785</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Mess
                  </td>
                  <td className="p-4 border border-gray-300">95,102 RUB</td>
                  <td className="p-4 border border-gray-300">₹1,10,613</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    Food and Groceries
                  </td>
                  <td className="p-4 border border-gray-300">
                    96,000 – 180,000 RUB
                  </td>
                  <td className="p-4 border border-gray-300">
                    ₹86,400 – ₹1,62,000
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Transportation
                  </td>
                  <td className="p-4 border border-gray-300">
                    18,000 – 36,000 RUB
                  </td>
                  <td className="p-4 border border-gray-300">
                    ₹16,200 – ₹32,400
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    Utilities
                  </td>
                  <td className="p-4 border border-gray-300">
                    24,000 – 60,000 RUB
                  </td>
                  <td className="p-4 border border-gray-300">
                    ₹21,600 – ₹54,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* NMC Approval Medical Universities in Russia */}
      <section
        id="nmc"
        className="pt-4 pb-0 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top{" "}
            <span className="text-blue-700">
              NMC-Approved Medical Universities
            </span>{" "}
            in Russia
          </h2>

          {/* Paragraph */}
          <p className="text-gray-900 leading-relaxed max-w-6xl mb-8">
            Students aspiring to pursue <strong>MBBS abroad</strong> can
            consider some of the
            <strong>
              {" "}
              leading NMC-approved medical universities in Russia
            </strong>
            , which provide
            <strong> globally recognized education</strong> along with
            <strong> advanced training facilities</strong>. These universities
            are widely preferred by
            <strong> Indian students</strong> because of their
            <strong> high-quality education</strong>,
            <strong> practical clinical exposure</strong>, and
            <strong> internationally accepted degrees</strong>. Another key
            reason for their popularity is the
            <strong> affordability of MBBS in Russia</strong>, combined with
            <strong> strong academic standards</strong> and
            <strong> modern infrastructure</strong>. Below is an overview of
            some of the
            <strong> most reputed universities</strong> chosen by students for
            <strong> MBBS studies in Russia</strong>.
          </p>
        </div>
      </section>
      {/* TOP NMC APPROVE UNIVERSITIES IN 
Russia  */}
      <section
        id="top"
        className="pt-0 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Kemerovo State Medical University */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-4">
            Kemerovo State <span className="text-blue-700">Medical </span>
            University
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            <span className="text-blue-700 font-medium">
              Kemerovo State Medical University
            </span>{" "}
            (KSMU) is a well-known public medical university located in
            Kemerovo, Russia. It was founded in <strong>1955</strong> and has
            many years of experience in providing quality medical education to
            students from Russia and other countries. The university offers a{" "}
            <strong>6-year MBBS program</strong> taught in{" "}
            <strong>English and Russian</strong>, which makes it popular among
            international students. It is recognised by{" "}
            <strong>
              World Health Organisation, National Medical Commission and the
              Educational Commission for Foreign Medical Graduates
            </strong>
            . The university has modern facilities, experienced teachers and
            provides practical training in hospitals that help students to build
            successful medical careers. It has over{" "}
            <strong>5,000 students</strong>, which also includes international
            students from more than <strong>30 countries</strong>.
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
                  ["University Name", "Kemerovo State Medical University"],
                  ["Established In", "1955"],
                  ["Language of Teaching", "English"],
                  ["Course Length", "6 years (Including 1 year of internship)"],
                  ["Approvals", "WHO, NMC, ECFMG, FAIMER and WFME"],
                  [
                    "Required Marks",
                    "At least 50% in 12th grade in Physics, Chemistry and Biology subjects",
                  ],
                  ["Entrance Exam", "NEET qualification is mandatory"],
                  ["Age Requirement", "Students must be 17 years old"],
                  ["IELTS / TOEFL Requirement", "Not required"],
                  ["Approx Annual Tuition Fee", "2,95,000 RUB (₹3,43,089)"],
                  ["Approx Annual Living Cost", "2,40,500 RUB (₹2,79,728)"],
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
                        [1, 4, 9, 10].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Siberian State Medical University */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-4">
            Siberian State <span className="text-blue-700">Medical </span>
            University
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            <span className="text-blue-700 font-medium">
              Siberian State Medical University
            </span>{" "}
            (SSMU) is a public university which was founded in{" "}
            <strong>1878</strong>. It is one of the oldest and most respected
            medical universities in Tomsk, Russia. It is one of the top three
            medical universities in the country and became the only flagship
            medical university in Russia in <strong>2017</strong>. SibMed is one
            of the best medical colleges for students who want to{" "}
            <strong>study MBBS abroad</strong>. The faculty members of the
            university are experienced doctors with high degrees. The university
            is ranked among the <strong>top 3 medical schools in Russia</strong>{" "}
            and has more than <strong>5,000 students</strong> from 47 regions of
            Russia and 13 other countries. This university is also recognised by{" "}
            <strong>WHO, NMC, ECFMG, FAIMER and WFME</strong>.
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
                  ["University Name", "Siberian State Medical University"],
                  ["Established In", "1878"],
                  ["Language of Teaching", "English"],
                  [
                    "Course Duration",
                    "6 years (Including 1 year of internship)",
                  ],
                  ["Accreditation", "WHO, NMC, ECFMG, FAIMER and WFME"],
                  [
                    "Required Marks",
                    "At least 50% in 12th grade in Physics, Chemistry and Biology subjects",
                  ],
                  [
                    "Entrance Exam",
                    "A NEET qualification is mandatory for Indian Students",
                  ],
                  ["Age Requirement", "Students must be of 17 years old"],
                  ["Approx Annual Tuition Fee", "3,85,600 RUB (₹4,48,403)"],
                  ["Approx Annual Living Cost", "2,40,500 RUB (₹2,79,728)"],
                  ["IELTS / TOEFL Requirement", "Not required"],
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
                        [1, 4, 8, 9].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Volgograd State Medical University */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-4">
            Volgograd State <span className="text-blue-700">Medical </span>
            University
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            <span className="text-blue-700 font-medium">
              Volgograd State Medical University
            </span>{" "}
            is a well-known medical university located in Volgograd, Russia.
            Founded in <strong>1935</strong>, it was first called Stalingrad
            Medical Institute and later became a university in{" "}
            <strong>2003</strong>. The university has about{" "}
            <strong>12,000 students</strong>, including many international
            students. It offers faculties such as{" "}
            <strong>
              General Medicine, Dentistry, Pediatrics and Pharmacy
            </strong>
            . The university has <strong>87 departments</strong> and more than{" "}
            <strong>1,100 teachers</strong> with high qualifications. It is
            recognised by <strong>WHO and NMC</strong>, making it a popular
            choice for international students who want to{" "}
            <strong>study MBBS abroad</strong>.
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
                  ["University Name", "Volgograd State Medical University"],
                  ["Established In", "1935"],
                  ["Language of Teaching", "English"],
                  ["Course Length", "6 years (Including 1 year of internship)"],
                  ["Approvals", "WHO, NMC, ECFMG, FAIMER and WFME"],
                  [
                    "Required Marks",
                    "At least 50% in 12th grade in Physics, Chemistry and Biology subjects",
                  ],
                  ["Entrance Exam", "NEET qualification is mandatory"],
                  ["Age Requirement", "Students must be 17 years old"],
                  ["Approx Annual Tuition Fee", "4,65,000 RUB (₹5,40,828)"],
                  ["Approx Annual Living Cost", "2,40,500 RUB (₹2,79,728)"],
                  ["IELTS / TOEFL", "Not Required"],
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
                        [1, 4, 8, 9].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Voronezh State Medical University */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-4">
            Voronezh State <span className="text-blue-700">Medical </span>
            University
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            <span className="text-blue-700 font-medium">
              Voronezh State Medical University
            </span>{" "}
            is one of the oldest and most respected medical universities in
            Russia. It became an independent medical institute in{" "}
            <strong>1930</strong>. The university has around{" "}
            <strong>5,000 students</strong> and has trained more than{" "}
            <strong>40,000 medical specialists</strong> from over 50 countries.
            It is recognised by{" "}
            <strong>WHO, NMC, ECFMG, FAIMER and WFME</strong>. The university
            has experienced teachers, modern laboratories and{" "}
            <strong>29 affiliated hospitals</strong> where students receive
            practical training. It also provides a large library with thousands
            of medical books, helping students gain strong knowledge and skills
            for successful medical careers. The university has more than{" "}
            <strong>8,000 students</strong>. It has six main
            departments/faculties, four other institutes and one research
            centre. The university offers medical courses such as general
            medicine, dentistry, child health (paediatrics) and pharmacy.
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
                  ["University Name", "Voronezh State Medical University"],
                  ["Established Year", "1930"],
                  ["Language of Teaching", "English"],
                  [
                    "Duration of Course",
                    "6 years (Including 1 year of internship)",
                  ],
                  ["Approvals", "WHO, NMC, ECFMG, FAIMER and WFME"],
                  [
                    "Required Marks",
                    "At least 50% in 12th grade in Physics, Chemistry and Biology subjects",
                  ],
                  ["Entrance Exam", "NEET qualification is mandatory"],
                  ["Age Requirement", "Students must be 17 years old"],
                  ["Approx Annual Tuition Fee", "4,12,100 RUB (₹4,79,233)"],
                  ["Approx Annual Living Cost", "2,40,500 RUB (₹2,79,728)"],
                  ["IELTS / TOEFL", "Not mandatory"],
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
                        [1, 4, 8, 9].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* North Caucasian State Academy */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-4">
            North Caucasian State{" "}
            <span className="text-blue-700">Academy </span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            <span className="text-blue-700 font-medium">
              North Caucasian State Academy (NCSA)
            </span>{" "}
            is a public university which was established in{" "}
            <strong>1991</strong>. The university offers more than{" "}
            <strong>75 courses</strong> in bachelor’s, master’s and medical
            education programs. It has over <strong>6,000 students</strong> from{" "}
            <strong>14 regions of Russia</strong> and 11 different countries.
            NCSA has <strong>7 institutes</strong>, modern laboratories,
            comfortable student hostels and is situated near the Black Sea. NCSA
            also has a staff of 573 employees including{" "}
            <strong>31 Doctors of Science</strong> and <strong>171 PhDs</strong>
            .
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
                  ["University Name", "North Caucasian State Academy"],
                  ["Established In", "1991"],
                  ["Language of Teaching", "English and Russian"],
                  [
                    "Course Duration",
                    "6 years (Including 1 year of internship)",
                  ],
                  ["Accreditations", "WHO, NMC, ECFMG, FAIMER and WFME"],
                  [
                    "Required Marks",
                    "At least 50% in 12th grade in Physics, Chemistry and Biology subjects",
                  ],
                  ["Entrance Exam", "NEET qualification"],
                  ["Age Requirement", "Candidates must be 17 years old"],
                  ["Approx Annual Tuition Fee", "3,00,000 RUB (₹3,48,944)"],
                  ["Approx Annual Living Cost", "2,40,500 RUB (₹2,79,728)"],
                  ["IELTS / TOEFL Requirement", "Not mandatory"],
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
                        [1, 4, 8, 9].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bashkir State Medical University */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-4">
            Bashkir State <span className="text-blue-700">Medical </span>
            University
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            <span className="text-blue-700 font-medium">
              Bashkir State Medical University (BSMU)
            </span>{" "}
            is a public medical university located in Ufa, Russia. It was
            founded in <strong>1932</strong> and it is one of the largest
            medical and scientific centres in the country. The university has
            five faculties, which includes Faculty of{" "}
            <strong>General Medicine</strong>, Faculty of{" "}
            <strong>Paediatrics</strong>, Faculty of <strong>Dentistry</strong>,
            Faculty of <strong>Preventive Medicine and Biology</strong> and
            Faculty of <strong>Pharmacy</strong>. It has more than{" "}
            <strong>15,000 students</strong>, including many international
            students from different countries. BSMU is ranked{" "}
            <strong>4th</strong> among all Russian medical universities and{" "}
            <strong>11th</strong> among BRICS nations. The university provides
            modern laboratories, hospitals and experienced teachers.
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
                  ["University Name", "Bashkir State Medical University"],
                  ["Established In", "1932"],
                  ["Language of Teaching", "English"],
                  [
                    "Duration of Course",
                    "6 years (Including 1 year of internship)",
                  ],
                  ["Approvals", "WHO, NMC, ECFMG, FAIMER and WFME"],
                  [
                    "Required Marks",
                    "At least 50% in 12th grade in Physics, Chemistry and Biology subjects",
                  ],
                  ["Entrance Exam", "A NEET qualification is mandatory"],
                  ["Age Requirement", "Students must be 17 years old"],
                  ["Approx Annual Tuition Fee", "3,99,000 RUB (₹4,64,061)"],
                  ["Approx Annual Living Cost", "2,40,500 RUB (₹2,79,728)"],
                  ["IELTS / TOEFL", "Not Required"],
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
                        [1, 4, 8, 9].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* North Caucasian State Academy */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-4">
            North Caucasian State <span className="text-blue-700">Academy</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            <span className="text-blue-700 font-medium">
              North Caucasian State Academy (NCSA)
            </span>{" "}
            is a public university which was established in{" "}
            <strong>1991</strong>. The university offers more than{" "}
            <strong>75 courses</strong> in bachelor’s, master’s and medical
            education programs. It has over <strong>6,000 students</strong> from{" "}
            <strong>14 regions of Russia</strong> and 11 different countries.
            NCSA has <strong>7 institutes</strong>, modern laboratories,
            comfortable student hostels and is situated near the Black Sea. NCSA
            also has a staff of 573 employees including{" "}
            <strong>31 Doctors of Science</strong> and <strong>171 PhDs</strong>
            .
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
                  ["University Name", "North Caucasian State Academy"],
                  ["Established In", "1991"],
                  ["Language of Teaching", "English and Russian"],
                  [
                    "Course Duration",
                    "6 years (Including 1 year of internship)",
                  ],
                  ["Accreditations", "WHO, NMC, ECFMG, FAIMER and WFME"],
                  [
                    "Required Marks",
                    "At least 50% in 12th grade in Physics, Chemistry and Biology subjects",
                  ],
                  ["Entrance Exam", "NEET qualification"],
                  ["Age Requirement", "Candidates must be 17 years old"],
                  ["Approx Annual Tuition Fee", "3,00,000 RUB (₹3,48,944)"],
                  ["Approx Annual Living Cost", "2,40,500 RUB (₹2,79,728)"],
                  ["IELTS / TOEFL Requirement", "Not mandatory"],
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
                        [1, 4, 8, 9].includes(index) ? "font-bold" : ""
                      }`}
                    >
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Crimea Federal University */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-4">
            Crimea Federal <span className="text-blue-700">University</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-8">
            <span className="text-blue-700 font-medium">
              Crimean Federal University
            </span>{" "}
            is a Public university and was established in <strong>1918</strong>.
            It offers high-quality medical education with English and Russian as
            the mediums of instruction. The university provides modern
            infrastructure, advanced laboratories and experienced faculty with
            theoretical knowledge and practical training for students. It is
            recognised by global bodies like <strong>WHO and NMC</strong>, it
            attracts medical aspirants worldwide. With over{" "}
            <strong>7,000 staff</strong> and more than{" "}
            <strong>32,000 students</strong>, including{" "}
            <strong>3,000+ international students</strong>, the university
            includes <strong>23 academies and institutes</strong>,{" "}
            <strong>11 branches</strong>, <strong>7 colleges</strong> and
            several research and science centres.
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
                  ["University Name", "Crimean Federal University"],
                  ["Established Year", "1918"],
                  ["University Type", "Public"],
                  ["Language of Teaching", "English and Russian"],
                  [
                    "Course Duration",
                    "6 years (Including 1 year of internship)",
                  ],
                  ["Accreditations", "WHO and NMC"],
                  [
                    "Required Marks",
                    "At least 50% in 12th grade in Physics, Chemistry and Biology",
                  ],
                  ["Entrance Exam", "NEET qualification"],
                  ["Age Requirement", "Candidates must be 17 years old"],
                  ["Approx Annual Tuition Fee", "3,30,000 RUB (₹3,84,326)"],
                  ["Approx Annual Living Cost", "2,40,500 RUB (₹2,79,728)"],
                  ["IELTS / TOEFL Requirement", "Not mandatory"],
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
                        [1, 5, 9, 10].includes(index) ? "font-bold" : ""
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
    </div>
  );
}
