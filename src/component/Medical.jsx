import { Link } from "react-router-dom";
import { useState } from "react";

export default function BDS() {
  const [tab, setTab] = useState("overview");
  const [activeTab, setActiveTab] = useState("duration");

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study Medical Courses in India"
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
              👨‍⚕️ Your Path to Medical Excellence
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Medical Courses in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                India
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Start your journey to become a licensed doctor with top medical
              colleges, expert guidance, and complete admission support.
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

      {/* NAVIGATION PILLS SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#why-medical-india"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Why Medical in India ?
          </a>

          <a
            href="#mbbs"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            MBBS
          </a>

          <a
            href="#bams"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            BAMS
          </a>

          <a
            href="#bds"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            BDS
          </a>

          <a
            href="#bhms"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            BHMS
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
            href="#career-scope"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Career Scope
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

      {/* INTRO SECTION */}
      <section className="relative pt-14 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build Your <span className="text-blue-600"> Medical Career</span>{" "}
              in India
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="/image/usa-bg.png"
                alt="Study Medical Courses in India"
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

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Globally recognized degrees by NMC & WHO",
                  "Affordable compared to private international education",
                  "Hands-on clinical exposure from early years",
                  "Access to top hospitals and experienced faculty",
                  "Strong career scope in India and abroad",
                  "Advanced infrastructure with modern labs and research facilities",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-yellow-500 hover:bg-blue-100 transition rounded-xl p-3 text-sm font-medium text-black"
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

      {/* WHY STUDY MEDICAL IN INDIA */}
      <section
        id="why-medical-india"
        className="relative pt-4 pb-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 blur-[130px] rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-sky-300/30 blur-[120px] rounded-full animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose{" "}
              <span className="text-blue-600">Medical Studies in India</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              India offers world-class medical education with globally
              recognized degrees, affordable fees, and extensive clinical
              exposure.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Globally Recognized Degrees",
                desc: "Medical degrees from Indian universities are recognized by global medical councils including WHO, NMC, and international bodies, enabling practice worldwide.",
              },
              {
                icon: "💰",
                title: "Affordable Compared to Private International Education",
                desc: "Indian medical colleges offer high-quality education at a fraction of the cost compared to private medical colleges in countries like USA, UK, and Australia.",
              },
              {
                icon: "🏥",
                title: "Hands-on Clinical Exposure from Early Years",
                desc: "Indian medical colleges emphasize practical training with clinical rotations starting from the second year, ensuring students gain real-world experience.",
              },
              {
                icon: "👨‍⚕️",
                title: "Access to Top Hospitals and Experienced Faculty",
                desc: "Medical colleges are affiliated with top-tier hospitals, providing students access to experienced doctors, advanced medical facilities, and diverse patient cases.",
              },
              {
                icon: "📈",
                title: "Strong Career Scope in India and Abroad",
                desc: "Graduates can pursue careers in top hospitals, research institutes, or practice independently, with excellent opportunities for further specialization and international licensing.",
              },
              {
                icon: "🔬",
                title: "Advanced Infrastructure & Research Facilities",
                desc: "Modern medical colleges are equipped with state-of-the-art labs, simulation centers, and research facilities to provide cutting-edge medical education.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MBBS HEADING WITH OVERVIEW */}
      <section
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
        id="mbbs"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bachelor of{" "}
              <span className="text-blue-600">
                {" "}
                Medicine & Bachelor of Surgery
              </span>
            </h1>
            <p className="pt-7">
              MBBS is the most sought-after medical degree in India and is
              essential for becoming a licensed doctor. It provides in-depth
              knowledge of human anatomy, physiology, pharmacology, pathology,
              and clinical practices. The course duration is typically 5.5
              years, including 1 year of mandatory internship in hospitals.
              Students gain hands-on clinical experience along with theoretical
              knowledge to diagnose and treat patients effectively.
            </p>
            <p>
              Students gain hands-on clinical experience along with theoretical
              knowledge to diagnose and treat patients effectively. Admission to
              MBBS in India is primarily based on the NEET (National Eligibility
              cum Entrance Test) examination. It opens doors to various career
              opportunities such as general physician, surgeon, specialist, or
              medical researcher. MBBS graduates can also pursue higher studies
              like MD or MS to specialize in specific medical fields.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE STRUCTURE SECTION */}
      <section className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
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
              MBBS{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Course Structure
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg ">
              The MBBS curriculum is divided into three phases, providing
              comprehensive medical education
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Clinical Subjects",
                icon: "🧬",
                subjects: ["Anatomy", "Physiology", "Biochemistry"],
              },
              {
                title: "Para-Clinical Subjects",
                icon: "🔬",
                subjects: ["Pathology", "Pharmacology", "Microbiology"],
              },
              {
                title: "Clinical Subjects",
                icon: "🏥",
                subjects: [
                  "Medicine",
                  "Surgery",
                  "Pediatrics",
                  "Obstetrics & Gynecology",
                ],
              },
            ].map((course, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="p-8">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {course.title}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    {course.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DURATION & ELIGIBILITY SECTION */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Duration & Eligibility for MBBS in India
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the complete duration structure and eligibility
              requirements for pursuing MBBS in India
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setActiveTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "duration" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                ⏳ Duration
              </button>
              <button
                onClick={() => setActiveTab("eligibility")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "eligibility" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                🎓 Eligibility Criteria
              </button>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="MBBS Duration"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      5.5 Years
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          4.5 years academic study
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          1-year compulsory internship
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> The internship
                        provides hands-on clinical experience in various
                        departments
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "eligibility" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Eligibility Criteria
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📚</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Educational Qualification
                          </p>
                          <p className="text-gray-600">
                            10+2 with Physics, Chemistry, Biology
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Minimum Marks
                          </p>
                          <p className="text-gray-600">
                            Minimum 50% marks (General Category)
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            40% for reserved categories
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Entrance Exam
                          </p>
                          <p className="text-gray-600">Must qualify NEET-UG</p>
                          <p className="text-sm text-gray-500 mt-1">
                            (National Eligibility cum Entrance Test)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">👤</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Age Limit
                          </p>
                          <p className="text-gray-600">
                            Minimum 17 years as of December 31st of admission
                            year
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After
              MBBS
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore diverse career paths available after completing your MBBS
              degree
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "General Physician",
                icon: "👨‍⚕️",
                description:
                  "Diagnose and treat common illnesses, provide primary healthcare services",
              },
              {
                title: "Medical Officer",
                icon: "🏥",
                description:
                  "Work in government hospitals, corporate healthcare, or public health departments",
              },
              {
                title: "Hospital Administrator",
                icon: "📊",
                description:
                  "Manage hospital operations, coordinate departments, ensure quality healthcare delivery",
              },
              {
                title: "Clinical Researcher",
                icon: "🔬",
                description:
                  "Conduct medical research, clinical trials, and contribute to medical advancements",
              },
            ].map((career, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {career.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {career.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {career.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-3">
                    <span className="text-2xl">🎓</span>
                    <span className="font-semibold text-blue-700">
                      Further Specialization
                    </span>
                  </div>
                  <p className="text-lg text-gray-700">
                    After MBBS, students can pursue{" "}
                    <span className="font-bold text-blue-600">MD/MS</span> for
                    specialization in:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                    {[
                      "Cardiology",
                      "Neurology",
                      "Orthopedics",
                      "Pediatrics",
                      "Gynecology",
                      "Dermatology",
                      "Radiology",
                    ].map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">⚕️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAMS HEADING WITH OVERVIEW */}
      <section
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
        id="bams"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bachelor of{" "}
              <span className="text-blue-600">
                {" "}
                Ayurvedic Medicine & Surgery
              </span>
            </h1>
            <p className="pt-7">
              BAMS focuses on Ayurveda, India's traditional system of medicine,
              emphasizing natural healing and holistic wellness.
            </p>
            <p>
              The course duration is 5.5 years (including internship).
              Eligibility requires 10+2 with PCB and NEET qualification. The
              program covers Ayurvedic Pharmacology, Herbal Medicine,
              Panchakarma Therapy, and Anatomy & Physiology (modern +
              Ayurvedic). Career opportunities include Ayurvedic Doctor,
              Wellness Consultant, Researcher in Herbal Medicine, and
              establishing own clinic or practice.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE HIGHLIGHTS SECTION - Updated for BAMS */}
      <section className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
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
              BAMS{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Course Highlights
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key subjects and specializations in Ayurvedic Medicine
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Ayurvedic Pharmacology",
                icon: "🌿",
                description:
                  "Study of medicinal plants, their properties, and therapeutic applications",
              },
              {
                title: "Herbal Medicine",
                icon: "🍃",
                description:
                  "Traditional herbal remedies and their preparation methods",
              },
              {
                title: "Panchakarma Therapy",
                icon: "💆",
                description:
                  "Five-fold detoxification and rejuvenation therapy",
              },
              {
                title: "Anatomy & Physiology",
                icon: "🧬",
                description:
                  "Integration of modern and Ayurvedic anatomical knowledge",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DURATION & ELIGIBILITY SECTION - Updated for BAMS */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Duration & Eligibility for BAMS in India
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the complete duration structure and eligibility
              requirements for pursuing BAMS in India
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setActiveTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "duration" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                ⏳ Duration
              </button>
              <button
                onClick={() => setActiveTab("eligibility")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "eligibility" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                🎓 Eligibility Criteria
              </button>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="BAMS Duration"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      5.5 Years
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          5.5 years (including internship)
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> Includes
                        practical training in Ayurvedic hospitals and
                        Panchakarma centers
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "eligibility" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Eligibility Criteria
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📚</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Educational Qualification
                          </p>
                          <p className="text-gray-600">
                            10+2 with PCB (Physics, Chemistry, Biology)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Entrance Exam
                          </p>
                          <p className="text-gray-600">
                            NEET qualification required
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES SECTION - Updated for BAMS */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After
              BAMS
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore diverse career paths available after completing your BAMS
              degree
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Ayurvedic Doctor",
                icon: "👨‍⚕️",
                description:
                  "Practice Ayurvedic medicine in hospitals, clinics, or government healthcare",
              },
              {
                title: "Wellness Consultant",
                icon: "🧘",
                description:
                  "Provide holistic wellness guidance and lifestyle management",
              },
              {
                title: "Researcher in Herbal Medicine",
                icon: "🔬",
                description:
                  "Conduct research on medicinal plants and drug development",
              },
              {
                title: "Own Clinic / Practice",
                icon: "🏥",
                description:
                  "Establish independent Ayurvedic clinic or wellness center",
              },
            ].map((career, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {career.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {career.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {career.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-3">
                    <span className="text-2xl">🎓</span>
                    <span className="font-semibold text-blue-700">
                      Further Specialization
                    </span>
                  </div>
                  <p className="text-lg text-gray-700">
                    After BAMS, students can pursue higher studies like{" "}
                    <span className="font-bold text-blue-600">
                      MD in Ayurveda
                    </span>{" "}
                    to specialize in specific fields.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">🌿</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BDS HEADING WITH OVERVIEW */}
      <section
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
        id="bds"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bachelor of <span className="text-blue-600">Dental Surgery</span>
            </h1>
            <p className="pt-7">
              BDS is the primary course for becoming a dentist, focusing on oral
              health, dental surgery, and hygiene.
            </p>
            <p>
              The course duration is 5 years (including internship). Eligibility
              requires 10+2 with PCB and NEET qualification. The program covers
              Oral Pathology, Dental Anatomy, Prosthodontics, and Orthodontics.
              Career opportunities include Dentist, Dental Surgeon, Private
              Clinic Owner, and Hospital Dental Specialist.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE HIGHLIGHTS SECTION - Updated for BDS */}
      <section className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
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
              BDS{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Course Highlights
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key subjects and specializations in Dental Surgery
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Oral Pathology",
                icon: "🦷",
                description:
                  "Study of oral diseases, their causes, diagnosis, and treatment",
              },
              {
                title: "Dental Anatomy",
                icon: "🦷",
                description:
                  "Structure, development, and morphology of teeth and oral cavity",
              },
              {
                title: "Prosthodontics",
                icon: "🦷",
                description:
                  "Restoration and replacement of teeth with dental prosthetics",
              },
              {
                title: "Orthodontics",
                icon: "😬",
                description:
                  "Correction of misaligned teeth and jaw irregularities",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DURATION & ELIGIBILITY SECTION - Updated for BDS */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Duration & Eligibility for BDS in India
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the complete duration structure and eligibility
              requirements for pursuing BDS in India
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setActiveTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "duration" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                ⏳ Duration
              </button>
              <button
                onClick={() => setActiveTab("eligibility")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "eligibility" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                🎓 Eligibility Criteria
              </button>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="BDS Duration"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      5 Years
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          5 years (including internship)
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> Includes
                        practical training in dental hospitals and clinical
                        rotations
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "eligibility" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Eligibility Criteria
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📚</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Educational Qualification
                          </p>
                          <p className="text-gray-600">
                            10+2 with PCB (Physics, Chemistry, Biology)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Entrance Exam
                          </p>
                          <p className="text-gray-600">
                            NEET qualification required
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES SECTION - Updated for BDS */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After
              BDS
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore diverse career paths available after completing your BDS
              degree
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Dentist",
                icon: "🦷",
                description:
                  "Provide general dental care, diagnosis, and treatment of oral diseases",
              },
              {
                title: "Dental Surgeon",
                icon: "⚕️",
                description:
                  "Perform surgical procedures related to teeth, gums, and jaw",
              },
              {
                title: "Private Clinic Owner",
                icon: "🏥",
                description: "Establish and manage your own dental practice",
              },
              {
                title: "Hospital Dental Specialist",
                icon: "🏨",
                description:
                  "Work in multi-specialty hospitals as dental specialist",
              },
            ].map((career, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {career.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {career.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {career.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-3">
                    <span className="text-2xl">🎓</span>
                    <span className="font-semibold text-blue-700">
                      Further Specialization
                    </span>
                  </div>
                  <p className="text-lg text-gray-700">
                    After BDS, students can pursue higher studies like{" "}
                    <span className="font-bold text-blue-600">
                      MDS (Master of Dental Surgery)
                    </span>{" "}
                    to specialize in specific fields.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">🦷</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEET COUNSELLING CTA SECTION */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">
              🎯 NEET Counselling Support
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Confused About NEET Counselling?
          </h2>

          <p className="text-white/90 max-w-2xl mx-auto text-lg mb-8">
            We help you choose the best college based on your NEET rank, budget,
            and preferences. Get complete guidance from choice filling to final
            admission.
          </p>

          {/* Points */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            {[
              "College Prediction based on NEET Rank",
              "All India & State Counselling Support",
              "Guaranteed Admission Guidance",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <Link to="/neet-counselling">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition">
              Get NEET Counselling →
            </button>
          </Link>
        </div>
      </section>

      {/* BHMS HEADING WITH OVERVIEW */}
      <section
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
        id="bhms"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bachelor of{" "}
              <span className="text-blue-600">
                {" "}
                Homeopathic Medicine & Surgery
              </span>
            </h1>
            <p className="pt-7">
              BHMS is based on homeopathy, a natural and holistic system of
              medicine that stimulates the body's healing process.
            </p>
            <p>
              The course duration is 5.5 years (including internship).
              Eligibility requires 10+2 with PCB and NEET qualification. The
              program covers Homeopathic Pharmacy, Organon of Medicine, Materia
              Medica, and Repertory. Career opportunities include Homeopathic
              Doctor, Private Practitioner, and Research & Teaching.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE HIGHLIGHTS SECTION - Updated for BHMS */}
      <section className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
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
              BHMS{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Course Highlights
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Key subjects and specializations in Homeopathic Medicine
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Homeopathic Pharmacy",
                icon: "💊",
                description:
                  "Preparation and dispensing of homeopathic medicines and remedies",
              },
              {
                title: "Organon of Medicine",
                icon: "📖",
                description:
                  "Philosophy, principles, and fundamental laws of homeopathy",
              },
              {
                title: "Materia Medica",
                icon: "🌿",
                description:
                  "Study of homeopathic remedies and their therapeutic applications",
              },
              {
                title: "Repertory",
                icon: "📚",
                description:
                  "Systematic classification of symptoms and remedy selection",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DURATION & ELIGIBILITY SECTION - Updated for BHMS */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Duration & Eligibility for BHMS in India
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Understand the complete duration structure and eligibility
              requirements for pursuing BHMS in India
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setActiveTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "duration" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                ⏳ Duration
              </button>
              <button
                onClick={() => setActiveTab("eligibility")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${activeTab === "eligibility" ? "bg-white text-blue-600 shadow-xl scale-105" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                🎓 Eligibility Criteria
              </button>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {activeTab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                    <img
                      src="/image/academic-qualification.jpg"
                      className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                      alt="BHMS Duration"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Duration
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      5.5 Years
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold text-xl">
                          •
                        </span>
                        <span className="text-gray-700">
                          5.5 years (including internship)
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-bold">Note:</span> Includes
                        practical training in homeopathic hospitals and clinical
                        rotations
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "eligibility" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Eligibility Criteria
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📚</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Educational Qualification
                          </p>
                          <p className="text-gray-600">
                            10+2 with PCB (Physics, Chemistry, Biology)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">📝</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Entrance Exam
                          </p>
                          <p className="text-gray-600">
                            NEET qualification required
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES SECTION - Updated for BHMS */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Career <span className="text-blue-600">Opportunities</span> After
              BHMS
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore diverse career paths available after completing your BHMS
              degree
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Homeopathic Doctor",
                icon: "👨‍⚕️",
                description:
                  "Practice homeopathic medicine in hospitals, clinics, or government healthcare",
              },
              {
                title: "Private Practitioner",
                icon: "🏥",
                description:
                  "Establish and manage your own homeopathic clinic or practice",
              },
              {
                title: "Research",
                icon: "🔬",
                description:
                  "Conduct research in homeopathic remedies and therapeutic applications",
              },
              {
                title: "Teaching",
                icon: "📚",
                description:
                  "Educate future homeopaths as faculty in homeopathic medical colleges",
              },
            ].map((career, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
                    {career.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {career.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {career.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-3">
                    <span className="text-2xl">🎓</span>
                    <span className="font-semibold text-blue-700">
                      Further Specialization
                    </span>
                  </div>
                  <p className="text-lg text-gray-700">
                    After BHMS, students can pursue higher studies like{" "}
                    <span className="font-bold text-blue-600">
                      MD in Homeopathy
                    </span>{" "}
                    to specialize in specific fields.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">💊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS SECTION - FULL WIDTH NO BLANK SPACES */}
      <section
        className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
        id="admission-process"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
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
                Medical Courses in India
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Step-by-step guide to secure your seat in top medical colleges
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-blue-500 to-blue-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      📝
                    </div>
                    <div className="text-white text-2xl font-bold">Step 01</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Qualify NEET-UG
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Appear and qualify for the National Eligibility cum Entrance
                    Test (NEET-UG) conducted by NTA. Secure the required cutoff
                    marks based on your category.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-blue-600">
                        📌 Minimum qualifying percentile:
                      </span>{" "}
                      General - 50th, SC/ST/OBC - 40th, PwD - 45th
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      💻
                    </div>
                    <div className="text-white text-2xl font-bold">Step 02</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Participate in Centralized/State Counselling
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Register for counselling conducted by MCC (Medical
                    Counselling Committee) for AIQ seats or respective state
                    authorities for state quota seats.
                  </p>
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-indigo-600">
                        📌 Counselling rounds:
                      </span>{" "}
                      Usually 3-4 rounds including mop-up round
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-purple-500 to-purple-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      🏛️
                    </div>
                    <div className="text-white text-2xl font-bold">Step 03</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Choose College Based on Rank and Preference
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Fill your college preferences based on your NEET rank,
                    category, and seat availability. Choose from government,
                    deemed, or private medical colleges.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-purple-600">
                        📌 Key Point:
                      </span>{" "}
                      Option to modify preferences during each counselling round
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-pink-500 to-pink-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      ✅
                    </div>
                    <div className="text-white text-2xl font-bold">Step 04</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Seat Allotment and Document Verification
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Seat is allotted based on merit and preferences. Report to
                    the allotted college for document verification and confirm
                    your seat.
                  </p>
                  <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-pink-600">
                        📌 Required documents:
                      </span>{" "}
                      NEET scorecard, 10th & 12th marksheets, category
                      certificate, domicile certificate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-rose-500 to-rose-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                      💰
                    </div>
                    <div className="text-white text-2xl font-bold">Step 05</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Fee Payment and Admission Confirmation
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Pay the admission fees as per college guidelines. Complete
                    the admission formalities and secure your seat.
                  </p>
                  <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-rose-600">
                        📌 Fee Structure:
                      </span>{" "}
                      Government colleges (₹10,000 - ₹50,000/year), Private
                      colleges (₹5 Lakhs - ₹25 Lakhs/year)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Grid - Full Width */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📅</div>
                <div>
                  <h4 className="font-bold text-gray-800">Important Dates</h4>
                  <p className="text-sm text-gray-600">
                    NEET-UG: May | Counselling: June-August
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📄</div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Documents Required
                  </h4>
                  <p className="text-sm text-gray-600">
                    NEET Scorecard, 10th & 12th Marksheets, Category Certificate
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="text-3xl">💡</div>
                <div>
                  <h4 className="font-bold text-gray-800">Pro Tip</h4>
                  <p className="text-sm text-gray-600">
                    Keep documents scanned before counselling begins
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Expert Admission Guidance →
            </button>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE SECTION */}
      <section
        className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
        id="fee-structure"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <span className="text-blue-600 text-sm font-semibold">
                💰 Fee Overview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fee Structure <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                (General Overview)
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Understand the approximate fee range for medical courses across
              different types of institutions in India
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Fee Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Government Colleges */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Government Colleges
                </h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    ₹10,000
                  </span>
                  <span className="text-xl text-gray-500"> – </span>
                  <span className="text-4xl font-bold text-blue-600">
                    ₹1,00,000
                  </span>
                </div>
                <p className="text-gray-500">per year</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Affordable fee
                      structure
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Scholarship
                      opportunities available
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Reserved category
                      concessions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Private Colleges */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-4xl">🏥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Private Colleges
                </h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-purple-600">
                    ₹5,00,000
                  </span>
                  <span className="text-xl text-gray-500"> – </span>
                  <span className="text-4xl font-bold text-purple-600">
                    ₹25,00,000
                  </span>
                </div>
                <p className="text-gray-500">per year</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> World-class
                      infrastructure
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Modern facilities
                      & equipment
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-blue-500">✓</span> Scholarship &
                      loan options
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📌</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Important Note
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fees vary significantly based on college type, location,
                    category, and seat type (government quota vs. management
                    quota). Additional charges may include hostel fees,
                    examination fees, library fees, and other miscellaneous
                    expenses. Please check with individual colleges for exact
                    fee structure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Get Fee Details for Specific Colleges →
            </button>
          </div>
        </div>
      </section>

      {/* CAREER SCOPE - STYLE 1: MINIMALIST GRID */}
      <section
        className="py-20 bg-gradient-to-b from-white via-blue-50 to-white"
        id="career-scope"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Career Scope After <br />
              <span className="text-blue-600">Medical Studies</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Medical graduates have vast opportunities across various sectors
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Simple Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Hospitals & Clinics",
                icon: "🏥",
                desc: "Work in multi-specialty hospitals, private clinics, and healthcare centers",
              },
              {
                title: "Government Health Services",
                icon: "🏛️",
                desc: "Serve in public health departments, rural health programs, and government hospitals",
              },
              {
                title: "Research Institutions",
                icon: "🔬",
                desc: "Conduct clinical research, drug development, and medical innovations",
              },
              {
                title: "Medical Colleges (Teaching)",
                icon: "📚",
                desc: "Shape future doctors through academic teaching and mentoring",
              },
              {
                title: "Healthcare Startups",
                icon: "💡",
                desc: "Innovate in healthtech, telemedicine, and digital health solutions",
              },
              {
                title: "Private Practice",
                icon: "⚕️",
                desc: "Establish own clinic or partner with existing healthcare facilities",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - STYLE 2: CHECKMARK LIST */}
      <section
        className="pt-6 pb-12 bg-gradient-to-b from-white via-blue-50 to-white"
        id="why-choose-us"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Medical Admission Guidance"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="font-bold text-gray-800">Trusted by</p>
                    <p className="text-2xl font-bold text-blue-600">10,000+</p>
                    <p className="text-xs text-gray-500">Students & Parents</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <span className="text-blue-600 text-sm font-semibold">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Trusted Partner for <br />
                <span className="text-blue-600">
                  Medical Admission Guidance
                </span>
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive support to help you navigate the
                complex medical admission process with ease.
              </p>

              <div className="space-y-4">
                {[
                  "Personalized counselling tailored to your profile",
                  "College selection based on your NEET score",
                  "Complete admission support from start to finish",
                  "Documentation & process handling expertise",
                  "Post-admission assistance for smooth transition",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
        className="pt-6 pb-14 px-6 bg-gradient-to-br from-gray-50 to-indigo-50/30"
        id="faq"
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
            {/* FAQ 1 */}
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
                        What is NEET-UG and why is it important for medical
                        admissions?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        National Eligibility cum Entrance Test
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
                      NEET-UG is the mandatory entrance examination for
                      admission to MBBS, BDS, BAMS, BHMS, and other medical
                      courses in India. It is conducted by NTA and is the single
                      gateway for all medical colleges in India. Qualifying NEET
                      is essential for pursuing medical education in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                        What is the total duration of MBBS, BDS, BAMS & BHMS?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        Course duration overview
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
                      MBBS: 5.5 years (4.5 years academic + 1 year internship)
                      <br />
                      BDS: 5 years (4 years academic + 1 year internship)
                      <br />
                      BAMS: 5.5 years (including internship)
                      <br />
                      BHMS: 5.5 years (including internship)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
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
                          d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                        What is the eligibility criteria for medical courses in
                        India?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        Educational requirements
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
                      Candidates must have passed 10+2 with Physics, Chemistry,
                      and Biology (PCB) with minimum 50% marks for General
                      category (40% for reserved categories). Qualifying NEET-UG
                      is mandatory for admission to all medical courses in
                      India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
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
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                        What is the fee structure for medical colleges in India?
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
                      Government colleges: ₹10,000 - ₹1,00,000 per year
                      <br />
                      Private colleges: ₹5,00,000 - ₹25,00,000 per year
                      <br />
                      Fees vary based on college, category, and seat type.
                      Scholarships and education loans are available for
                      eligible students.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
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
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                        What are the career opportunities after medical studies?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        Career scope overview
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
                      Medical graduates can work in hospitals & clinics,
                      government health services, research institutions, medical
                      colleges (teaching), healthcare startups, and private
                      practice. After MBBS, students can pursue MD/MS for
                      specialization in various fields like Cardiology,
                      Neurology, Pediatrics, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ 6 */}
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                        How does the medical admission counselling process work?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        Step-by-step admission process
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
                      The admission process includes: 1) Qualify NEET-UG, 2)
                      Participate in centralized/state counselling, 3) Choose
                      colleges based on rank and preference, 4) Seat allotment
                      and document verification, 5) Fee payment and admission
                      confirmation. Counselling is conducted by MCC for AIQ
                      seats and state authorities for state quota seats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#medical-pattern)" />
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
            Ready to Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-300">
              Medical Journey?
            </span>
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Get expert guidance for admission, counseling, and career planning
            from our experienced medical advisors.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="group relative bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300">
              <span className="flex items-center gap-2">Talk to Expert</span>
            </button>
          </div>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const faqQuestions = document.querySelectorAll('.faq-question');
              faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                  const answer = question.nextElementSibling;
                  const icon = question.querySelector('.faq-icon');
                  document.querySelectorAll('.faq-answer').forEach(item => {
                    if (item !== answer) {
                      item.style.maxHeight = null;
                      const otherIcon = item.previousElementSibling.querySelector('.faq-icon');
                      if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                  });
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
