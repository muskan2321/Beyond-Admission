import { Link } from "react-router-dom";
import { useState } from "react";

export default function BDS() {
  const [tab, setTab] = useState("overview");
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study BDS in India"
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
              🦷 Your Path to Dental Excellence
            </div>

            <h1 className="text-12xl md:text-7xl font-bold text-white leading-tight">
              Study BDS in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                India
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Start your journey to become a skilled dentist with top dental
              colleges, expert guidance, and complete admission support.
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

      {/* INTRO SECTION */}
      <section className="relative pt-12 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Study BDS in <span className="text-blue-600">India</span>{" "}
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Discover comprehensive dental education, advanced clinical
              training, and a rewarding career.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="/image/usa-bg.png"
                alt="Study BDS in India"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="text-3xl font-bold text-blue-600">97%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Students Placed</p>
                  <p className="text-xl font-semibold text-gray-800">12,000+</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Choose Dental Studies in India?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  India is a premier destination for dental education, offering
                  high-quality training, advanced infrastructure, and degrees
                  recognized globally by dental councils. The BDS program is
                  regulated by the Dental Council of India (DCI), ensuring
                  adherence to the highest standards of dental education and
                  ethics.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Dental courses in India emphasize a strong foundation in oral
                  health sciences, hands-on clinical practice, and
                  patient-centric care, preparing students to excel in the field
                  of dentistry.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "DCI recognized degrees",
                  "Affordable education compared to private international colleges",
                  "Extensive clinical exposure from the early years",
                  "Access to advanced dental labs and experienced faculty",
                  "Strong career scope in India and abroad",
                  "Modern infrastructure with digital dentistry facilities",
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

      {/* ================= BDS SECTION ================= */}
      {/* <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356.257l4 4a1 1 0 011.788 0l4-4a1 1 0 01.356-.257l2.138-.914a1 1 0 000-1.84l-7-3zM16.5 9.78L15 10.44v3.31a1 1 0 01-.5.866l-4 2a1 1 0 01-1 0l-4-2a1 1 0 01-.5-.866v-3.31l-1.5-.66v4.14a1 1 0 00.5.866l5 2.5a1 1 0 001 0l5-2.5a1 1 0 00.5-.866v-4.14z" />
              </svg>
              <span>Flagship Program</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              BDS
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-3">
                Bachelor of Dental Surgery
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              BDS is the primary course for becoming a dentist, focusing on oral
              health, dental surgery, and hygiene. It is the essential degree
              for a career in dentistry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Duration</h3>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">5 Years</p>
                  <p className="text-gray-500">4 years academic study</p>
                  <p className="text-gray-500">1-year compulsory internship</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Eligibility</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">✓ 10+2 with PCB</p>
                  <p className="text-gray-700">✓ <span className="font-semibold text-green-600">NEET qualification required</span></p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Course Highlights</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">📘 Oral Pathology</p>
                  <p className="text-gray-700">🦷 Dental Anatomy</p>
                  <p className="text-gray-700">🦷 Prosthodontics</p>
                  <p className="text-gray-700">🦷 Orthodontics</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Career Opportunities</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">🦷 Dentist</p>
                  <p className="text-gray-700">🦷 Dental Surgeon</p>
                  <p className="text-gray-700">🏢 Private Clinic Owner</p>
                  <p className="text-gray-700">🏥 Hospital Dental Specialist</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">📖 Complete BDS Curriculum</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">Pre-Clinical</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dental Anatomy</li>
                    <li>• Dental Histology</li>
                    <li>• Oral Physiology</li>
                    <li>• Biochemistry</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">Para-Clinical</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Oral Pathology</li>
                    <li>• Dental Pharmacology</li>
                    <li>• Oral Microbiology</li>
                    <li>• General Medicine</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800">Clinical</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Prosthodontics</li>
                    <li>• Orthodontics</li>
                    <li>• Periodontics</li>
                    <li>• Endodontics</li>
                    <li>• Oral & Maxillofacial Surgery</li>
                    <li>• Pedodontics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-8 md:p-12 text-center">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" patternUnits="userSpaceOnUse">
                <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#pattern)" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-semibold">Pathway to Excellence</span>
              </div>
              <p className="text-white text-xl md:text-2xl font-bold mb-4">
                After BDS, pursue{" "}
                <span className="bg-white/20 px-4 py-2 rounded-lg inline-block mx-2">MDS</span> for Specialization
              </p>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Unlock advanced dental careers in Orthodontics, Oral Surgery, Prosthodontics, and more.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= COURSE HIGHLIGHTS SECTION ================= */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Core Curriculum</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Course
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ml-3">
                Highlights
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The BDS curriculum is designed to provide comprehensive knowledge
              and practical skills in various aspects of dentistry, from basic
              sciences to advanced clinical procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Oral Pathology Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Oral Pathology
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">
                    Study of oral diseases, their causes, diagnosis, and
                    treatment
                  </p>
                  <p className="text-gray-500 text-xs">
                    • Diagnosis of oral lesions • Histopathological analysis •
                    Oral cancer detection
                  </p>
                </div>
              </div>
            </div>

            {/* Dental Anatomy Card */}
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Dental Anatomy
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">
                    Understanding tooth structure, morphology, and oral cavity
                    anatomy
                  </p>
                  <p className="text-gray-500 text-xs">
                    • Tooth morphology • Dental arches • Occlusion studies
                  </p>
                </div>
              </div>
            </div>

            {/* Prosthodontics Card */}
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
                      d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Prosthodontics
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">
                    Restoration and replacement of missing teeth with
                    prosthetics
                  </p>
                  <p className="text-gray-500 text-xs">
                    • Crowns & bridges • Dentures • Dental implants
                  </p>
                </div>
              </div>
            </div>

            {/* Orthodontics Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
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
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Orthodontics
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">
                    Correction of misaligned teeth and jaw irregularities
                  </p>
                  <p className="text-gray-500 text-xs">
                    • Braces & aligners • Malocclusion treatment • Jaw
                    correction
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Course Details Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-8 md:p-12 text-center">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" patternUnits="userSpaceOnUse">
                <pattern
                  id="pattern-dental"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 10 L20 30 M10 20 L30 20"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <circle cx="20" cy="20" r="3" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#pattern-dental)" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-semibold">
                  Advanced Training
                </span>
              </div>
              <p className="text-white text-xl md:text-2xl font-bold mb-4">
                Gain expertise in{" "}
                <span className="bg-white/20 px-4 py-2 rounded-lg inline-block mx-2">
                  Modern Dentistry
                </span>
              </p>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Hands-on clinical training with advanced equipment, digital
                dentistry, and patient care management
              </p>
            </div>
          </div>

          {/* Key Takeaway Grid */}
          <div className="mt-16 grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition">
              <div className="text-purple-600 text-3xl mb-2">📚</div>
              <p className="font-semibold text-gray-800">Theory + Practical</p>
              <p className="text-xs text-gray-500">
                Comprehensive learning approach
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 text-3xl mb-2">🦷</div>
              <p className="font-semibold text-gray-800">Clinical Training</p>
              <p className="text-xs text-gray-500">Live patient exposure</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition">
              <div className="text-green-600 text-3xl mb-2">🔬</div>
              <p className="font-semibold text-gray-800">Research Focus</p>
              <p className="text-xs text-gray-500">Latest dental innovations</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition">
              <div className="text-purple-600 text-3xl mb-2">🏥</div>
              <p className="font-semibold text-gray-800">Hospital Internship</p>
              <p className="text-xs text-gray-500">Real-world experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ELIGIBILITY SECTION ================= */}
      <section
        id="eligibility"
        className="pt-0 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold">
              BDS Program Overview
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Bachelor of Dental Surgery (BDS) is the primary course for
              becoming a dentist, focusing on oral health, dental surgery, and
              hygiene.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setTab("overview")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "overview"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                📋 Overview
              </button>

              <button
                onClick={() => setTab("duration")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "duration"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                ⏳ Duration
              </button>

              <button
                onClick={() => setTab("eligibilityTab")}
                className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
                  tab === "eligibilityTab"
                    ? "bg-white text-blue-600 shadow-xl scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                ✅ Eligibility
              </button>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
              {tab === "overview" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    src="/image/usa-bg.png"
                    className="rounded-2xl shadow-lg w-full h-60 object-cover"
                    alt="BDS Overview"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Bachelor of Dental Surgery (BDS)
                    </h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>
                          BDS is the primary course for becoming a dentist
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>
                          Focuses on oral health, dental surgery, and hygiene
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>
                          Essential degree for practicing dentistry in India
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>Recognized by Dental Council of India (DCI)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {tab === "duration" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    src="/image/usa-bg.png"
                    className="rounded-2xl shadow-lg w-full h-60 object-cover"
                    alt="BDS Duration"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Program Duration
                    </h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>
                          <strong className="text-gray-900">
                            Total Duration:
                          </strong>{" "}
                          5 Years (including internship)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>4 years of academic study</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>1 year of compulsory rotating internship</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>
                          Hands-on clinical training in various dental
                          specialties
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {tab === "eligibilityTab" && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <img
                    src="/image/usa-bg.png"
                    className="rounded-2xl shadow-lg w-full h-60 object-cover"
                    alt="BDS Eligibility"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Eligibility Criteria
                    </h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>10+2 with Physics, Chemistry, Biology (PCB)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>
                          Minimum 50% aggregate marks (General Category)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>
                          40% aggregate marks for SC/ST/OBC categories
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>
                          <strong className="text-gray-900">
                            NEET-UG qualification is mandatory
                          </strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          ●
                        </span>
                        <span>
                          Age: Minimum 17 years as of December 31st of admission
                          year
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAREER OPPORTUNITIES SECTION ================= */}
      <section className="pt-8 pb-14 px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Your Future Awaits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Career
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ml-3">
                Opportunities
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              A BDS degree opens doors to diverse and rewarding career paths in
              dentistry, healthcare, and beyond. Explore the exciting
              opportunities that await you after graduation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Dentist Card - Modern Style */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <svg
                    className="w-10 h-10 text-white"
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
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Dentist
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Provide comprehensive dental care including diagnosis,
                  treatment, and preventive care
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                      General Practice
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                      Preventive Care
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                      Patient Education
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dental Surgeon Card - Modern Style */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  Dental Surgeon
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Perform surgical procedures including extractions, implants,
                  and corrective jaw surgeries
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">
                      Oral Surgeries
                    </span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">
                      Tooth Extractions
                    </span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">
                      Dental Implants
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Clinic Owner Card - Modern Style */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  Private Clinic Owner
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Establish and manage your own dental practice with complete
                  entrepreneurial freedom
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full">
                      Practice Management
                    </span>
                    <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full">
                      Business Development
                    </span>
                    <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full">
                      Patient Relations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hospital Dental Specialist Card - Modern Style */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <svg
                    className="w-10 h-10 text-white"
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
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  Hospital Dental Specialist
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Work in multi-specialty hospitals providing advanced dental
                  care and collaborating with medical teams
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full">
                      Multidisciplinary Care
                    </span>
                    <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full">
                      Emergency Dentistry
                    </span>
                    <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full">
                      Specialized Treatments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Growth Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 p-8 md:p-12 text-center mb-16">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" patternUnits="userSpaceOnUse">
                <pattern
                  id="career-pattern-new"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 10 L20 30 M10 20 L30 20"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <circle cx="20" cy="20" r="2" fill="white" />
                </pattern>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#career-pattern-new)"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <svg
                  className="w-5 h-5 text-white animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-white text-sm font-semibold">
                  Growing Demand
                </span>
              </div>
              <p className="text-white text-2xl md:text-3xl font-bold mb-4">
                The Future of Dentistry is{" "}
                <span className="bg-white/20 px-4 py-2 rounded-lg inline-block mx-2 backdrop-blur-sm">
                  Bright & Rewarding
                </span>
              </p>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                With increasing focus on oral health and aesthetic dentistry,
                the demand for skilled dental professionals is growing rapidly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Beyond Admission */}
      <section className="relative pt-6 pb-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/40 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/40 blur-[150px] rounded-full animate-float delay-2000"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose <span className="text-blue-600">Beyond Admission</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Beyond Admission provides expert guidance to help students
              successfully study abroad.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16 relative">
            {/* Center Line Glow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>

            {[
              {
                icon: "🎯",
                title: "Career Counselling",
                description:
                  "Expert guidance to identify the right career path based on your interests, strengths, and academic background.",
              },
              {
                icon: "🏫",
                title: "University Shortlisting",
                description:
                  "Personalized selection of universities that match your profile, budget, and career aspirations.",
              },
              {
                icon: "📝",
                title: "Application Assistance",
                description:
                  "End-to-end support with applications, SOPs, LORs, and ensuring all deadlines are met.",
              },
              {
                icon: "💰",
                title: "Scholarship Guidance",
                description:
                  "Comprehensive support to find and apply for scholarships, grants, and financial aid opportunities.",
              },
              {
                icon: "📄",
                title: "Visa Documentation Support",
                description:
                  "Step-by-step assistance with visa applications, document preparation, and interview preparation.",
              },
              {
                icon: "✈️",
                title: "Pre-departure Guidance",
                description:
                  "Complete support with accommodation, travel arrangements, and settling into your new academic environment.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative mb-12 grid grid-cols-2 items-center"
              >
                {/* LEFT SIDE */}
                {i % 2 === 0 ? (
                  <div className="flex justify-end pr-8">
                    <div className="group w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-xl transition-all duration-300">
                      {/* Glass Card */}
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        <div className="flex items-start gap-3">
                          {/* Icon */}
                          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md group-hover:rotate-6 transition duration-300">
                            <span className="text-xl">{step.icon}</span>
                          </div>

                          <div className="flex-1">
                            <p className="text-base font-bold text-gray-800 mb-1">
                              {step.title}
                            </p>
                            <p className="text-xs text-gray-500 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {/* RIGHT SIDE */}
                {i % 2 !== 0 ? (
                  <div className="flex justify-start pl-8">
                    <div className="group w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-xl transition-all duration-300">
                      {/* Glass Card */}
                      <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 shadow-xl transition duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        <div className="flex items-start gap-3">
                          {/* Icon */}
                          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-md group-hover:rotate-6 transition duration-300">
                            <span className="text-xl">{step.icon}</span>
                          </div>

                          <div className="flex-1">
                            <p className="text-base font-bold text-gray-800 mb-1">
                              {step.title}
                            </p>
                            <p className="text-xs text-gray-500 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg border-2 border-white"></div>
              </div>
            ))}
          </div>

          {/* Bottom Highlight */}
          <div className="mt-20 relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-10 text-center shadow-xl overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full animate-float delay-2000"></div>

            <div className="relative z-10">
              <p className="text-lg max-w-2xl mx-auto">
                Our experienced counsellors support students throughout the
                entire admission process with personalized attention and expert
                guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Animation */}
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

      {/* ================= FAQ SECTION ================= */}
      <section className="pt-4 pb-14 px-6 bg-gradient-to-br from-gray-50 to-indigo-50/30">
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
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Everything you need to know about dental education in India,
              admission process, and career opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                        What is NEET-UG and why is it important for BDS?
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 hidden md:block">
                        NEET-UG is the single entrance exam for dental
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
                      NEET-UG is the mandatory entrance examination for
                      admission to BDS courses in India. It is conducted by NTA
                      and is the single gateway for all dental colleges in
                      India. Qualifying NEET is essential for pursuing dental
                      education in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                        What is the total duration of BDS?
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
                      The total duration of the BDS course is 5 years, which
                      includes 4 years of academic study and 1 year of
                      compulsory rotating internship.
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

      {/* ================= CTA SECTION ================= */}
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

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
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

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Ready to Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-300">
              Dental Journey?
            </span>
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Get expert guidance for admission, counseling, and career planning
            from our experienced dental advisors.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">40,000+</p>
              <p className="text-white/70 text-sm">Students Placed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">180+</p>
              <p className="text-white/70 text-sm">Partner Colleges</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">96%</p>
              <p className="text-white/70 text-sm">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-white/70 text-sm">Expert Support</p>
            </div>
          </div>

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
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

          <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-up animation-delay-800">
            <p className="text-white/60 text-sm mb-4">
              Trusted by 1000+ dental aspirants every year
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
