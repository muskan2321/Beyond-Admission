import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MBBSnepal() {
  // for FAQ start
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "Is MBBS in Nepal valid in India?",
      answer:
        "Yes, MBBS in Nepal is valid in India if the university is approved by NMC and students clear the FMGE/NExT examination after graduation.",
    },
    {
      question: "Is NEET required?",
      answer:
        "Yes, qualifying NEET is mandatory for Indian students to pursue MBBS in Nepal.",
    },
    {
      question: "Is IELTS required?",
      answer:
        "No, IELTS or TOEFL is not required for admission to most medical colleges in Nepal.",
    },
    {
      question: "Is Nepal safe for Indian students?",
      answer:
        "Yes, Nepal is considered a safe and friendly country for Indian students, with similar culture, language, and environment.",
    },
    {
      question: "What is the duration of MBBS in Nepal?",
      answer:
        "The duration of MBBS in Nepal is 5.5 years, which includes 4.5 years of academic study and 1 year of compulsory internship.",
    },
    {
      question: "What are the MBBS fees in Nepal?",
      answer:
        "The MBBS fees in Nepal generally range between ₹30 lakhs to ₹60 lakhs depending on the university.",
    },
    {
      question: "Is a visa required for Indian students to study in Nepal?",
      answer:
        "No, Indian students do not require a visa to study in Nepal, which makes the admission process easier.",
    },
    {
      question: "What is the medium of instruction in Nepal?",
      answer:
        "The medium of instruction for MBBS in Nepal is English, making it convenient for Indian students.",
    },
    {
      question: "Can Indian students practice in India after MBBS in Nepal?",
      answer:
        "Yes, after completing MBBS in Nepal, students can practice in India by clearing the FMGE/NExT exam as per NMC guidelines.",
    },
    {
      question: "Are Nepal medical colleges recognized globally?",
      answer:
        "Yes, many medical colleges in Nepal are recognized by NMC, WHO, and other global medical bodies, allowing students to pursue careers worldwide.",
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
                Nepal
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
          href="#why-nepal"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why MBBS In Nepal?
        </a>

        <a
          href="#nepal-highlights"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Nepal Highlights
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
          href="#nepal-intakes"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Nepal Intakes
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
          href="#nepal-courses"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Nepal Courses
        </a>

        <a
          href="#nepal-syllabus"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Nepal Syllabus
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
              MBBS in <span className="text-blue-600">Nepal</span> for Indian
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
                  Why Choose MBBS in Nepal?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  MBBS in Nepal is a great option for Indian students seeking
                  quality medical education close to home. The curriculum is
                  similar to India, making it easy to adapt, and universities
                  are recognized by NMC and WHO, ensuring global acceptance.
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Nepal offers affordable fees compared to private colleges in
                  India, along with experienced faculty, modern facilities, and
                  early clinical exposure in hospitals.
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  With English-medium education and cultural similarity to
                  India, students enjoy a comfortable and safe environment while
                  focusing on their medical studies.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Affordable Fee Structure",
                  "Indian-Based Curriculum",
                  "English Medium Programs",
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

      {/* WHY STUDY MBBS Nepal */}
      <section
        id="why-nepal"
        className="relative pt-4 pb-10 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden"
      >
        {/* Glow Background */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300/30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why Study <span className="text-blue-600">MBBS in Nepal?</span>
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                MBBS in Nepal is a great choice for Indian students due to its
                affordable fee structure, Indian-based curriculum, and globally
                recognized universities. With English-medium education and
                cultural similarity, students can easily adapt and focus on
                their medical studies without any language barrier.
              </p>

              {/* Bullet Points */}
              <div className="mt-8 space-y-5 font-bold">
                {[
                  "Affordable fees compared to private medical colleges in India",
                  "No donation or capitation fee required",
                  "Indian-based curriculum (easy to adapt)",
                  "English-medium MBBS programs available",
                  "NMC & WHO approved universities",
                  "Modern infrastructure and hospital facilities",
                  "Early clinical exposure in hospitals",
                  "Safe and culturally similar environment for Indian students",
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

            {/* RIGHT SIDE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "💰", title: "Affordable Fees" },
                { icon: "📚", title: "Indian-Based Curriculum" },
                { icon: "🌐", title: "NMC & WHO Approved" },
                { icon: "🗣️", title: "English Medium" },
                { icon: "🎓", title: "Globally Recognized Degree" },
                { icon: "🏥", title: "Modern Infrastructure" },
                { icon: "🩺", title: "Clinical Exposure" },
                { icon: "🛡️", title: "Safe Environment" },
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

      {/* MBBS IN Nepal – KEY HIGHLIGHTS */}
      <section
        id="nepal-highlights"
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
            MBBS in <span className="text-blue-600">Nepal</span> Highlights
          </h2>

          {/* TABLE CARD WRAPPER */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                {/* Header */}
                <thead>
                  <tr className="bg-slate-800 text-white text-left">
                    <th className="p-4 border border-gray-300">CATEGORY</th>
                    <th className="p-4 border border-gray-300">DETAILS</th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody className="text-gray-800">
                  {[
                    ["Popular Course", "MBBS"],
                    ["Intake for MBBS in Nepal", "September to October"],
                    [
                      "Duration of MBBS",
                      "5.5 to 6 years (including internship)",
                    ],
                    [
                      "Eligibility Criteria",
                      "50% marks in PCB (General) and 40% for Reserved category + NEET qualification",
                    ],
                    ["IELTS or TOEFL", "Not Required"],
                    ["Medium of Instruction", "English"],
                    ["Required Exam", "NEET Exam"],
                    [
                      "Tuition Fees",
                      "Approx ₹45 Lakhs – ₹70 Lakhs (depending on university)",
                    ],
                    ["NMC-Approved Medical Universities", "Yes"],
                    [
                      "Top Medical Universities in Nepal",
                      "Kathmandu University, Tribhuvan University, B.P. Koirala Institute of Health Sciences, Nepal Medical College",
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
                          [0, 2, 7].includes(index) ? "font-bold" : ""
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
            MBBS in Nepal <span className="text-blue-600">Eligibility </span>
            Criteria
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-8">
            The eligibility for MBBS in Nepal may vary from one college to
            another, but the basic requirement remains a minimum of 50% marks in
            the 12th standard. Students must have studied Physics, Chemistry,
            and Biology as core subjects. Below are the standard eligibility
            criteria for pursuing MBBS in Nepal.
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
                    50% marks in 12th standard in Physics, Chemistry and Biology
                    (PCB)
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
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
                    Physics, Biology, Chemistry and English
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-bold">
                    Educational Board
                  </td>
                  <td className="p-4 border border-gray-300">
                    Education must be completed from a recognized educational
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
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              MBBS in <span className="text-blue-600">Nepal</span> Admission
              Process 2026
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed max-w-4xl mb-10">
              The MBBS admission in Nepal is simple and easy to follow. Students
              are advised to check the eligibility criteria in advance to ensure
              a smooth and hassle-free admission process. It is also important
              to complete all necessary formalities and prepare the required
              documents at the time of application. Below are the key steps
              involved in the MBBS admission process in Nepal.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 text-gray-800 max-w-4xl">
              {[
                "Research and choose a recognized medical university.",
                "Check eligibility criteria including PCB marks and NEET qualification.",
                "Fill out the application form and submit all required documents.",
                "Appear for the entrance exam and interview (if applicable).",
                "Receive the admission offer letter and pay the tuition fees.",
                "Apply for a student visa if required.",
                "Travel to Nepal, complete enrollment formalities, and begin classes.",
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
              MBBS in <span className="text-blue-600">Nepal</span> Intakes
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              The MBBS intake in Nepal generally takes place once a year, mainly
              in
              <span className="font-semibold text-gray-900">
                {" "}
                September{" "}
              </span>{" "}
              or
              <span className="font-semibold text-gray-900"> October</span>, in
              accordance with the academic calendar of Nepal. The admission
              process usually begins a few months before the intake period,
              allowing students enough time to complete their application and
              prepare the required documents. It is advisable for students to
              start the process early to avoid last-minute delays and ensure a
              smooth admission experience.
            </p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section id="documents-required" className="pt-4 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MBBS in Nepal{" "}
            <span className="text-blue-600">Required Documents </span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            Students applying for MBBS in Nepal must submit all the necessary
            documents during the admission process. These documents are required
            for verification of academic qualifications, identity, and
            eligibility. It is important to keep both original and photocopies
            ready to ensure a smooth admission process without any delays.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Academic Certificates:</strong> Class 10 and 12 mark
                sheets and passing certificates (original and copies).
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Passport:</strong> A valid passport with at least 2-3
                years of validity.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Passport-Sized Photographs:</strong> Recent
                passport-sized photographs as per specified dimensions.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>NEET Scorecard:</strong> A valid NEET qualification
                certificate (mandatory for Indian students).
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Migration Certificate:</strong> Issued by the last
                attended school or board.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Birth Certificate:</strong> Proof of age, translated
                into English if required.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Medical Certificate:</strong> A health check-up report
                or medical fitness certificate.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Student Visa:</strong> A valid student visa for studying
                in Nepal.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>Proof of Citizenship:</strong> Citizenship or identity
                proof for verification.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* MBBS in Nepal Exam Required */}
      <section id="exam-required" className="pt-4 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-6">
            MBBS in Nepal <span className="text-blue-700">Exam</span> Required
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
                    Indian students must pass the{" "}
                    <span className="text-blue-600 font-bold">NEET exam</span>{" "}
                    as a mandatory entry requirement.
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Minimum NEET Score
                  </td>
                  <td className="p-4 border border-gray-300">
                    The minimum qualifying NEET score may vary based on the
                    university's criteria.
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Eligibility for Indian Students
                  </td>
                  <td className="p-4 border border-gray-300">
                    <span className="text-blue-600 font-bold">NEET</span> is
                    required for admission to MBBS programs in Nepal for Indian
                    students.
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Age Requirements
                  </td>
                  <td className="p-4 border border-gray-300">
                    Students must be 17 years old by 31st December of the
                    admission year.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MBBS in Nepal Courses */}
      <section
        id="nepal-courses"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in <span className="text-blue-700">Nepal</span> Courses
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            Medical universities in Nepal offer an MBBS program designed to
            align with global medical education standards. The course is highly
            practical-oriented and focuses on developing both theoretical
            knowledge and clinical skills. The duration of MBBS in Nepal is
            <strong> 5.5 years</strong>, which includes
            <strong> 4.5 years of academic learning</strong> and a
            <strong> 1-year mandatory internship</strong>. Students gain strong
            clinical exposure and hands-on training throughout the program.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3 text-gray-800">
            {/* Pre-Clinical */}
            <li className="font-semibold text-blue-700">
              Pre-Clinical Phase (Basic Sciences)
            </li>

            {[
              "Anatomy",
              "Physiology",
              "Biochemistry",
              "Pathology",
              "Microbiology",
              "Pharmacology",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 ml-4">
                <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                {item}
              </li>
            ))}

            {/* Para-Clinical */}
            <li className="font-semibold text-blue-700 mt-4">
              Para-Clinical Phase
            </li>

            {[
              "Forensic Medicine",
              "Community Medicine",
              "Pathology",
              "Microbiology",
              "Pharmacology",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 ml-4">
                <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                {item}
              </li>
            ))}

            {/* Clinical */}
            <li className="font-semibold text-blue-700 mt-4">
              Clinical Phase (Clinical Sciences)
            </li>

            {[
              "Medicine",
              "Surgery",
              "Paediatrics",
              "Obstetrics and Gynaecology",
              "Orthopaedics",
              "Psychiatry",
              "Ophthalmology",
              "ENT (Ear, Nose and Throat)",
              "Dermatology",
              "Radiology",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 ml-4">
                <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                {item}
              </li>
            ))}
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
            MBBS in <span className="text-blue-700">Nepal</span> Syllabus
          </h2>

          {/* Bullet Points (Image Content) */}
          <ul className="space-y-3 text-gray-800 max-w-5xl mb-6">
            {[
              "Designed as per WHO and NMC guidelines.",
              "English-medium instruction.",
              "Equal emphasis on practical training and theoretical knowledge.",
              "Regular clinical exposure through hospital visits and case studies.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

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
                    Anatomy, Physiology, Biochemistry
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Para-Clinical Phase
                  </td>
                  <td className="p-4 border border-gray-300">Year 3</td>
                  <td className="p-4 border border-gray-300">
                    Pathology, Microbiology, Pharmacology, Forensic Medicine,
                    Community Medicine
                  </td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Clinical Phase
                  </td>
                  <td className="p-4 border border-gray-300">Year 4 & 5</td>
                  <td className="p-4 border border-gray-300">
                    Medicine, Surgery, Paediatrics, Obstetrics and Gynaecology,
                    Orthopaedics, Psychiatry, Ophthalmology, ENT, Dermatology,
                    Radiology
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Internship Phase
                  </td>
                  <td className="p-4 border border-gray-300">Year 5.5</td>
                  <td className="p-4 border border-gray-300">
                    Clinical rotations in Medicine, Surgery, Pediatrics,
                    Gynecology, Orthopedics and other departments
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MBBS in Nepal Fees Structure */}
      <section
        id="fees-structure"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in Nepal <span className="text-blue-700">Fees</span> Structure
            2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-5xl mb-6">
            MBBS colleges in Nepal provide affordable fee structures compared to
            many universities in South Asia. The fee structure is simple and
            easy to understand, although it may vary from one college to
            another. Students are advised to check official university websites
            for exact details. Overall, MBBS in Nepal offers a cost-effective
            option for Indian students, making it easier to manage educational
            expenses compared to many other countries.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="p-4 border border-gray-300">COLLEGE NAME</th>
                  <th className="p-4 border border-gray-300">
                    TUITION FEE (APPROX)
                  </th>
                  <th className="p-4 border border-gray-300">
                    HOSTEL FEE (APPROX)
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    KIST Medical College
                  </td>
                  <td className="p-4 border border-gray-300">42 Lakh</td>
                  <td className="p-4 border border-gray-300">6 Lakh</td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Institute of Medicine, Kathmandu
                  </td>
                  <td className="p-4 border border-gray-300">39 Lakh</td>
                  <td className="p-4 border border-gray-300">6.5 Lakh</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    U. Tribhuvan
                  </td>
                  <td className="p-4 border border-gray-300">46 Lakh</td>
                  <td className="p-4 border border-gray-300">6.5 Lakh</td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-bold">
                    Kathmandu University
                  </td>
                  <td className="p-4 border border-gray-300">56 Lakh</td>
                  <td className="p-4 border border-gray-300">6 Lakh</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-bold">
                    Patan Academy of Health Sciences
                  </td>
                  <td className="p-4 border border-gray-300">31 Lakh</td>
                  <td className="p-4 border border-gray-300">6 Lakh</td>
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
            MBBS in Nepal <span className="text-blue-700">Hostel & </span>{" "}
            Accommodation
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            Nepal medical universities offer excellent hostel facilities for
            students. International students coming from outside the country can
            easily stay in on-campus hostels at an affordable cost. These
            hostels are designed to provide a comfortable and secure living
            environment with all essential amenities required for student life.
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
                    "The university provides comfortable beds for all students.",
                  ],
                  [
                    "Furniture",
                    "Each room is furnished with tables, chairs, and other essential furniture.",
                  ],
                  [
                    "Common Kitchen",
                    "A common kitchen is available for students to prepare their own meals.",
                  ],
                  [
                    "Water Supply",
                    "Hot and cold water supply is available 24/7 for students.",
                  ],
                  [
                    "Extracurricular Activities",
                    "Universities organize various extracurricular activities to enhance learning and personal development.",
                  ],
                  [
                    "Indian Mess Facilities",
                    "Indian mess facilities with authentic Indian food options are available.",
                  ],
                  [
                    "Internet Access",
                    "High-speed internet is provided in hostels for academic and personal use.",
                  ],
                  [
                    "Security",
                    "24/7 security and CCTV surveillance to ensure the safety of students.",
                  ],
                  [
                    "Laundry Services",
                    "On-campus laundry services are available for students.",
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

      {/* MBBS in Nepal Living Cost */}
      <section
        id="living"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            MBBS in Nepal <span className="text-blue-700">Living </span>
            Cost 2026
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            The cost of living in Nepal depends on the lifestyle of the student,
            but it is considered one of the most affordable countries for MBBS
            compared to other destinations. Living expenses generally include
            accommodation, food, study materials, transportation, and other
            daily needs. Students can comfortably manage their expenses by
            maintaining a balanced lifestyle. Below is an approximate overview
            of the living costs for MBBS students in Nepal.
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
                    DETAILS (IN NPR - APPROX)
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    DETAILS (IN INR - APPROX)
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-800">
                {[
                  [
                    "Tuition Fees (Annually)",
                    "NPR 1,500,000 to NPR 2,000,000",
                    "₹1,00,000 to ₹1,33,000",
                  ],
                  ["Hostel Fees (Annually)", "NPR 70,000", "₹50,000"],
                  [
                    "Living Expenses (Monthly)",
                    "NPR 15,000 to NPR 25,000",
                    "₹10,000 to ₹16,500",
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
                    <td className="p-4 border border-gray-300">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NMC Approval Medical Universities in Nepal */}
      <section
        id="nmc"
        className="pt-4 pb-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
            NMC Approval{" "}
            <span className="text-blue-700">Medical Universities</span> in Nepal
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            The NMC approves many medical universities in Nepal and the approval
            ensures that the medical courses and programs meet the standard of
            the medical practices. Students who have graduated from a recognised
            Nepal MBBS college are eligible to appear for NMC screening test and
            to practice medicine in India. There are multiple colleges that are
            NMC approved for example:
          </p>

          {/* 1.Birat Medical College */}
          <h3 className="text-2xl md:text-3xl font-bold text-grey-900 mb-4">
            Birat <span className="text-blue-700">Medical </span>
            College
          </h3>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            Birat Medical College was established in 2009 and is located in
            Biratnagar, Nepal. The college is known for its top-class education
            facilities and practical training. The college offers clinical
            exposure to its students.
          </p>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              {/* Table Head */}
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    DETAIL
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    INFORMATION
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    University Name
                  </td>
                  <td className="p-4 border border-gray-300 text-blue-600 font-medium">
                    Birat Medical College
                  </td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-semibold">
                    Location
                  </td>
                  <td className="p-4 border border-gray-300">Biratnagar</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    Established
                  </td>
                  <td className="p-4 border border-gray-300">2009</td>
                </tr>

                <tr className="bg-white">
                  <td className="p-4 border border-gray-300 font-semibold">
                    Features
                  </td>
                  <td className="p-4 border border-gray-300">
                    High-quality medical education and clinical exposure
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===== 2.College of Medical Science ===== */}
          <h3 className="text-2xl md:text-3xl font-bold text-grey-900 mb-4 mt-8">
            College of <span className="text-blue-700">Medical </span>
            Science
          </h3>

          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            The College of Medical Science, located in Bharatpur, Nepal, was
            established in 1993. It is known for its high-quality medical
            education, experienced faculty and hands-on clinical training.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    DETAIL
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    INFORMATION
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    University Name
                  </td>
                  <td className="p-4 border border-gray-300 text-blue-600 font-medium">
                    College of Medical Science
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Location
                  </td>
                  <td className="p-4 border border-gray-300">Bharatpur</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    Established
                  </td>
                  <td className="p-4 border border-gray-300">1993</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Features
                  </td>
                  <td className="p-4 border border-gray-300">
                    Known for high-quality medical education, clinical training
                    and research opportunities
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/*3.Nepal Medical College (NMC) */}
          <h3 className="text-2xl md:text-3xl font-bold text-grey-900 mb-4 mt-8">
            Nepal <span className="text-blue-700">Medical </span> College (NMC)
          </h3>

          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            Nepal Medical College which is in Kathmandu was established in 1997.
            The college was known for its practical training and knowledge. The
            university has various experienced faculties that provide hands-on
            exposure to their students.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    DETAIL
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    INFORMATION
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    University Name
                  </td>
                  <td className="p-4 border border-gray-300 text-blue-600 font-medium">
                    Nepal Medical College
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Location
                  </td>
                  <td className="p-4 border border-gray-300">Kathmandu</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    Established
                  </td>
                  <td className="p-4 border border-gray-300">1997</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Features
                  </td>
                  <td className="p-4 border border-gray-300">
                    Focus on holistic medical training and hands-on clinical
                    practice
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4.Kathmandu Medical College (KMC)*/}
          <h3 className="text-2xl md:text-3xl font-bold text-grey-900 mb-4 mt-8">
            Kathmandu <span className="text-blue-700">Medical </span> College
            (KMC)
          </h3>

          <p className="text-gray-700 leading-relaxed max-w-6xl mb-6">
            Kathmandu Medical College was set up in 1997 and is located in the
            capital of Nepal, Kathmandu. The university is providing
            high-quality and practical knowledge to its students. It also offers
            various kinds of programs and courses in undergraduate and
            postgraduate courses.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 border border-gray-300 text-left">
                    DETAIL
                  </th>
                  <th className="p-4 border border-gray-300 text-left">
                    INFORMATION
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    University Name
                  </td>
                  <td className="p-4 border border-gray-300 text-blue-600 font-medium">
                    Kathmandu Medical College
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Location
                  </td>
                  <td className="p-4 border border-gray-300">Kathmandu</td>
                </tr>

                <tr className="bg-gray-100">
                  <td className="p-4 border border-gray-300 font-semibold">
                    Established
                  </td>
                  <td className="p-4 border border-gray-300">1997</td>
                </tr>

                <tr>
                  <td className="p-4 border border-gray-300 font-semibold">
                    Features
                  </td>
                  <td className="p-4 border border-gray-300">
                    Offers high-quality education and modern infrastructure
                  </td>
                </tr>
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
