import { useState } from "react";
import { Link } from "react-router-dom";

const StudyUGAustralia = () => {
  const [open, setOpen] = useState(null);

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
              🎓 Undergraduate Programs • Australia
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Study{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                UG in Australia
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
      {/* ================= HERO + WHY ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Undergraduate (UG) in Australia for Indian Students – Complete
              Guide
            </h1>

            <h2 className="text-2xl font-semibold mb-4">
              Why Study UG in Australia?
            </h2>

            <p className="text-gray-600 mb-4">
              Australia is one of the most preferred destinations for Indian
              students due to its high-quality education system, globally
              recognized degrees, and strong post-study work opportunities.
            </p>

            <p className="text-gray-600">
              The country offers a practical learning approach and industry
              exposure, making students job-ready.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "🎓 Globally recognized degrees",
              "🌍 Multicultural and safe environment",
              "💼 Strong job opportunities",
              "🎯 Post-study work visa options",
              "🧠 Practical and industry-focused learning",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UNIVERSITIES ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">
          Top Universities in Australia
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            "University of Melbourne",
            "Australian National University",
            "University of Sydney",
            "University of New South Wales",
            "Monash University",
            "University of Queensland",
          ].map((uni, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              {uni}
            </div>
          ))}
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-12">
          Popular UG Courses in Australia
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "💻 Computer Science",
            "💼 Business & Management",
            "📊 Data Analytics",
            "⚙️ Engineering",
            "🧬 Health Sciences",
            "🏗️ Construction & Architecture",
          ].map((course, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {course}
            </div>
          ))}
        </div>
      </section>

      {/* ================= DEGREES ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">
          Types of UG Degrees in Australia
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto px-6">
          {[
            "Bachelor of Science (BSc)",
            "Bachelor of Arts (BA)",
            "Bachelor of Engineering (BEng)",
            "Bachelor of Business (BBus)",
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 p-5 rounded-lg shadow">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= ELIGIBILITY ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Eligibility Criteria for UG in Australia
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">
              Academic Requirements
            </h3>
            <p>Completion of 12th grade</p>
            <p>Minimum 60%–85%</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">Entrance Exams</h3>
            <p>No SAT required</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">
              English Proficiency
            </h3>
            <p>IELTS: 6.0 – 6.5</p>
          </div>
        </div>
      </section>

      {/* ================= DOCUMENTS ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Required Documents</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
          {[
            "SOP / Personal Statement",
            "Academic Transcripts",
            "IELTS Score",
            "Letters of Recommendation (if required)",
            "Passport Copy",
          ].map((doc, i) => (
            <div key={i} className="bg-blue-50 p-5 rounded-lg shadow">
              {doc}
            </div>
          ))}
        </div>
      </section>

      {/* ================= COST ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Cost of Studying UG in Australia
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow">
            AUD 20,000 – AUD 45,000 per year
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            AUD 21,000 – AUD 27,000 per year
          </div>
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            ₹25 – ₹50 Lakhs per year
          </div>
        </div>
      </section>

      {/* ================= SCHOLARSHIPS ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Scholarships for Indian Students
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          {[
            "Australia Awards Scholarships",
            "University-specific scholarships",
            "Merit-based scholarships",
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 p-5 rounded-lg shadow">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= WORK ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">During Study</h3>
            <p>48 hours per fortnight (part-time)</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">
              After Graduation
            </h3>
            <p>Post-study work visa: 2–4 years</p>
          </div>
        </div>
      </section>

      {/* ================= JOB ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Job Opportunities After UG in Australia
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Deloitte", "PwC", "EY", "KPMG"].map((c, i) => (
            <div key={i} className="bg-gray-100 px-5 py-2 rounded-full">
              {c}
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-xl max-w-md mx-auto">
          AUD 50,000 – AUD 70,000 per year
        </div>
      </section>

      {/* ================= VISA ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Visa Process for UG in Australia
        </h2>

        <p className="text-gray-600 mb-12">
          Students require an{" "}
          <span className="text-blue-600 font-semibold">
            Australia Student Visa (Subclass 500)
          </span>
          .
        </p>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
          {[
            "Receive Confirmation of Enrolment (CoE)",
            "Pay visa fee",
            "Submit visa application",
            "Medical & biometrics",
            "Visa decision",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-blue-600 text-white rounded-full">
                {i + 1}
              </div>
              <p className="text-sm font-medium text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INTAKES ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">
          Intakes for UG in Australia
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            February Intake – Main intake
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            July Intake – Secondary intake
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Application Timeline for UG in Australia
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto px-6">
          {[
            "12 Months Before: Start IELTS preparation",
            "8–10 Months Before: Apply to universities",
            "6–8 Months Before: Receive offer",
            "3–5 Months Before: Visa application",
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Why Choose Us for UG in Australia?
        </h2>

        <p className="text-gray-600 mb-8">
          At Beyond Education, we provide end-to-end support.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "🎯 University Shortlisting",
            "📝 SOP Assistance",
            "📚 IELTS Coaching",
            "📄 Application Support",
            "💰 Financial Guidance",
            "✈️ Visa Assistance",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 p-5 rounded-xl shadow hover:shadow-md transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="max-w-4xl mx-auto px-6 space-y-4">
          {[
            {
              q: "Is Australia good for Indian students?",
              a: "Yes, due to strong education and job opportunities.",
            },
            {
              q: "Can I work while studying?",
              a: "Yes, part-time work allowed.",
            },
            {
              q: "Is IELTS mandatory?",
              a: "Yes, in most cases.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <h3 className="font-semibold">{item.q}</h3>
              {open === i && (
                <p className="text-gray-600 mt-2 text-sm">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudyUGAustralia;
