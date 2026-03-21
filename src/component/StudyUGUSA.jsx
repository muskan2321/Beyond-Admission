import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const StudyUGUSA = () => {
    const [open, setOpen] = useState(null);
    const faqs = [
      {
        q: "Can I study in USA after 12th from India?",
        a: "Yes, Indian students can apply for UG programs directly after completing 12th.",
      },
      {
        q: "Is SAT compulsory for UG in USA?",
        a: "No, many universities are test-optional.",
      },
      {
        q: "How much percentage is required for UG in USA?",
        a: "Generally, 60%–85% depending on university ranking.",
      },
      {
        q: "Is studying UG in USA worth it?",
        a: "Yes, due to global exposure, flexible education, and strong career prospects.",
      },
    ];
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study UG in USA"
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
            {/* Badge */}
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
              🎓 Undergraduate Programs • USA
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Study{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                UG in USA
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Explore world-class undergraduate education, flexible learning,
              and global career opportunities after 12th.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Apply Now 🚀
                </button>
              </Link>

              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                Free Counselling
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-8 text-white/80 text-sm">
              <div>
                <p className="text-xl font-bold text-white">4500+</p>
                Universities
              </div>
              <div>
                <p className="text-xl font-bold text-white">1.5M+</p>
                Students
              </div>
              <div>
                <p className="text-xl font-bold text-white">98%</p>
                Success Rate
              </div>
            </div>
          </div>
        </div>

        {/* ANIMATIONS */}
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

      {/* INTRO */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Why Study UG in the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                USA?
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The United States is one of the most preferred destinations for
              Indian students after 12th due to its{" "}
              <span className="font-semibold text-blue-600">
                flexible education system
              </span>
              ,{" "}
              <span className="font-semibold text-blue-600">
                global exposure
              </span>
              , and{" "}
              <span className="font-semibold text-blue-600">
                strong career opportunities
              </span>
              .
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Unlike India, the US education system allows students to explore
              multiple subjects before choosing a major, making it ideal for
              students who are still discovering their interests.
            </p>

            {/* CTA */}
            <button className="px-7 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">
              Explore Programs →
            </button>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-md border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                Flexible Learning
              </h3>
              <p className="text-sm text-gray-500">
                Choose your major after exploring subjects.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-md border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                Global Exposure
              </h3>
              <p className="text-sm text-gray-500">
                Study in a diverse international environment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 backdrop-blur-md border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                Career Growth
              </h3>
              <p className="text-sm text-gray-500">
                Strong job opportunities after graduation.
              </p>
            </div>

            {/* Highlight Card */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-semibold text-lg mb-2">
                  Discover Your Path
                </h3>
                <p className="text-sm opacity-90">
                  Perfect for students exploring their interests.
                </p>
              </div>

              <div className="mt-4 text-sm font-medium underline">
                Learn More →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-28 overflow-hidden">
        {/* MAIN GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-indigo-200"></div>

        {/* ANIMATED BLOBS */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

        {/* GRID PATTERN (VERY PREMIUM 🔥) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto px-6">
          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
            Key{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { icon: "🌍", text: "Globally recognized degrees" },
              { icon: "🎯", text: "Flexibility to choose/change majors" },
              {
                icon: "🧠",
                text: "Holistic development (academics + extracurriculars)",
              },
              {
                icon: "💼",
                text: "Strong internship & placement opportunities",
              },
              { icon: "🤝", text: "Exposure to international culture" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 flex items-center gap-5"
              >
                {/* ICON */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-2xl shadow-lg group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* TEXT */}
                <p className="text-gray-800 font-semibold text-lg">
                  {item.text}
                </p>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities in USA */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Top Universities in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              USA
            </span>
          </h2>

          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            The USA is home to many of the world’s top-ranked universities
            offering UG programs.
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Harvard University", img: "/image/harvard.jpg" },
              { name: "Stanford University", img: "/images/stanford.jpg" },
              {
                name: "Massachusetts Institute of Technology (MIT)",
                img: "/images/mit.jpg",
              },
              {
                name: "University of California, Los Angeles (UCLA)",
                img: "/images/ucla.jpg",
              },
              { name: "New York University (NYU)", img: "/images/nyu.jpg" },
              { name: "University of Michigan", img: "/images/michigan.jpg" },
              { name: "Arizona State University", img: "/images/asu.jpg" },
            ].map((uni, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              >
                {/* IMAGE */}
                <img
                  src={uni.img}
                  alt={uni.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* CONTENT */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <h3 className="font-semibold text-lg">{uni.name}</h3>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular UG Courses in USA*/}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Popular UG Courses in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              USA
            </span>
          </h2>

          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Students can choose from a wide range of undergraduate programs
            based on their interests.
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "💻", title: "Computer Science" },
              { icon: "📊", title: "Business Administration / Management" },
              { icon: "🤖", title: "Artificial Intelligence & Data Science" },
              { icon: "💰", title: "Economics & Finance" },
              { icon: "🧬", title: "Biology / Pre-Med" },
              { icon: "⚙️", title: "Engineering" },
              { icon: "🎨", title: "Liberal Arts" },
              { icon: "📢", title: "Mass Communication & Media" },
            ].map((course, i) => (
              <div
                key={i}
                className="group relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition duration-500"
              >
                {/* INNER CARD */}
                <div className="bg-white rounded-3xl p-6 h-full flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-2xl transition">
                  {/* ICON */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-2xl mb-4 shadow-md group-hover:scale-110 transition">
                    {course.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-sm font-semibold text-gray-800">
                    {course.title}
                  </h3>
                </div>

                {/* GLOW EFFECT */}
                <div className="absolute inset-0 rounded-3xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of UG Degrees in USA*/}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Types of UG Degrees in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              USA
            </span>
          </h2>

          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Understanding degree types helps students make informed decisions.
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: "🧪",
                title: "Bachelor of Science (BS)",
                desc: "Technical & STEM fields",
              },
              {
                icon: "📚",
                title: "Bachelor of Arts (BA)",
                desc: "Humanities & social sciences",
              },
              {
                icon: "💼",
                title: "Bachelor of Business Administration (BBA)",
                desc: "Business & management studies",
              },
              {
                icon: "⚙️",
                title: "Bachelor of Engineering (BE)",
                desc: "Core engineering disciplines",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-[1.02] transition duration-500"
              >
                {/* INNER CARD */}
                <div className="bg-white rounded-3xl p-8 text-left shadow-lg group-hover:shadow-2xl transition relative">
                  {/* ICON */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xl mb-4 shadow-md group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm">{item.desc}</p>

                  {/* BOTTOM HIGHLIGHT LINE */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-3xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Eligibility Criteria for UG in USA */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Eligibility Criteria for UG in USA
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Indian students must meet the following requirements after
            completing 12th:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Academic */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                📘 Academic Requirements
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✔ Completion of 12th grade from a recognized board</li>
                <li>✔ Minimum 60%–85% (depends on university)</li>
              </ul>
            </div>

            {/* Entrance */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                📝 Entrance Exams
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✔ SAT or ACT (optional in many universities)</li>
              </ul>
            </div>

            {/* English */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                🌐 English Proficiency
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✔ IELTS: 6.0 – 7.5</li>
                <li>✔ TOEFL: 70 – 100</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* ================= DOCUMENTS ================= */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Required Documents
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Students must prepare the following documents:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Statement of Purpose (SOP) / Personal Essay",
                "Letters of Recommendation (LORs)",
                "Academic Transcripts (9th–12th)",
                "SAT/ACT Scores (if required)",
                "IELTS/TOEFL Scores",
                "Extracurricular Certificates",
                "Passport Copy",
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="text-xl">📄</div>
                  <p className="text-gray-700 text-sm font-medium">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= COST ================= */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Cost of Studying UG in USA
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Planning finances is crucial for studying abroad.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  Tuition Fees
                </h3>
                <p className="text-gray-700 font-medium">
                  $20,000 – $55,000 / year
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  Living Expenses
                </h3>
                <p className="text-gray-700 font-medium">
                  $10,000 – $18,000 / year
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Total Cost</h3>
                <p className="font-bold text-xl">₹25 – ₹65 Lakhs / year</p>
              </div>
            </div>
          </div>

          {/* ================= SCHOLARSHIPS ================= */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Scholarships for Indian Students
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Many US universities offer scholarships to undergraduate students.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Merit-based scholarships",
                "Need-based financial aid",
                "Athletic scholarships",
                "University-specific scholarships",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4"
                >
                  <div className="text-2xl">🎓</div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="mt-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl text-center shadow-lg">
              <p className="font-semibold text-lg">
                💡 Some universities offer up to 100% scholarships based on your
                profile.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* ================= WORK OPPORTUNITIES ================= */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Work Opportunities During & After Study
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* During Study */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  🎓 During Study
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>✔ 20 hours/week part-time (on-campus)</li>
                </ul>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  🚀 After Graduation
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>✔ OPT (Optional Practical Training): Up to 12 months</li>
                  <li>✔ STEM graduates: Up to 36 months</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= JOB OPPORTUNITIES ================= */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Job Opportunities After UG in USA
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mt-12">
              {/* Career Paths */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  🎯 Career Options
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>✔ Pursue higher education (MS / MBA)</li>
                  <li>✔ Start working in the USA</li>
                </ul>
              </div>

              {/* Salary */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">
                  💰 Average Salary
                </h3>
                <p className="text-2xl font-bold">$50,000 – $80,000 / year</p>
                <p className="text-sm opacity-80 mt-2">(Entry-level jobs)</p>
              </div>
            </div>

            {/* Recruiters */}
            <div className="mt-14">
              <h3 className="text-2xl font-semibold text-center mb-8">
                Top Recruiters
              </h3>

              <div className="flex flex-wrap justify-center gap-6">
                {[
                  "Google",
                  "Amazon",
                  "Microsoft",
                  "Deloitte",
                  "Goldman Sachs",
                ].map((company, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition text-gray-700 font-medium"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Visa Process for UG in USA */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Visa Process for UG in USA
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Indian students require an{" "}
            <span className="font-semibold text-blue-600">
              F-1 Student Visa
            </span>
            .
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Receive admission letter (I-20)",
              "Pay SEVIS fee",
              "Fill DS-160 form",
              "Schedule visa interview",
              "Attend visa interview",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Intakes for UG in USA */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Intakes for UG in USA</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Fall Intake */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">🎓 Fall Intake</h3>
              <p className="text-lg font-medium">August / September</p>
              <p className="mt-3 text-sm opacity-90">
                Most preferred intake with maximum course availability.
              </p>
            </div>

            {/* Spring Intake */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                🌱 Spring Intake
              </h3>
              <p className="text-lg font-medium text-gray-800">January</p>
              <p className="mt-3 text-sm text-gray-600">
                Limited course options compared to Fall intake.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Application Timeline for UG in USA */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Application Timeline for UG in USA
          </h2>

          <div className="space-y-10">
            {[
              {
                time: "12–18 Months Before",
                text: "Start SAT / IELTS preparation",
              },
              { time: "10–12 Months Before", text: "Shortlist universities" },
              { time: "6–9 Months Before", text: "Submit applications" },
              {
                time: "3–5 Months Before",
                text: "Accept offer & apply for visa",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-6 ${
                  i % 2 !== 0 ? "flex-row-reverse text-right" : ""
                }`}
              >
                {/* TIME BOX */}
                <div className="bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-semibold shadow">
                  {item.time}
                </div>

                {/* CONTENT */}
                <div className="bg-white p-6 rounded-xl shadow-md w-full">
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us for UG in USA? */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Us for UG in USA?
          </h2>
          <p className="text-gray-600 mb-12">
            At Beyond Education, we help students achieve their dream of
            studying in top global universities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                text: "Profile Evaluation & University Shortlisting",
              },
              { icon: "📝", text: "SOP / Essay Guidance" },
              { icon: "📚", text: "SAT / IELTS Coaching" },
              { icon: "📄", text: "Application Assistance" },
              { icon: "💰", text: "Scholarship & Loan Guidance" },
              { icon: "✈️", text: "Visa Processing" },
              { icon: "🏠", text: "Accommodation Support" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-gray-800 font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Frequently Asked Questions */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-md cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3 className="font-semibold text-gray-800">{item.q}</h3>

                {open === i && (
                  <p className="text-gray-600 mt-2 text-sm">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
    </div>
  );
};

export default StudyUGUSA;
