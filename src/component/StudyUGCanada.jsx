import { useState } from "react";
import { Link } from "react-router-dom";

const StudyUGCanada = () => {
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
              🎓 Undergraduate Programs • Canada
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Study{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                UG in Canada
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
              Undergraduate (UG) in Canada for Indian Students – Complete Guide
            </h1>

            <h2 className="text-2xl font-semibold mb-4">
              Why Study UG in Canada?
            </h2>

            <p className="text-gray-600 mb-4">
              Canada is one of the most popular destinations for Indian students
              due to its affordable education, high-quality universities, and
              excellent post-study work opportunities.
            </p>

            <p className="text-gray-600">
              The country offers a safe environment, multicultural society, and
              strong pathway to permanent residency (PR).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "🎓 Globally recognized degrees",
              "💰 Affordable compared to USA/UK",
              "🌍 Safe and welcoming environment",
              "💼 Strong job opportunities",
              "🏡 PR opportunities after study",
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
        <h2 className="text-4xl font-bold mb-12">Top Universities in Canada</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            "University of Toronto",
            "University of British Columbia",
            "McGill University",
            "University of Alberta",
            "University of Waterloo",
            "Western University",
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
          Popular UG Courses in Canada
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "💻 Computer Science",
            "💼 Business Administration",
            "📊 Data Science",
            "⚙️ Engineering",
            "🧬 Health Sciences",
            "💰 Finance",
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
          Types of UG Degrees in Canada
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto px-6">
          {[
            "Bachelor of Science (BSc)",
            "Bachelor of Arts (BA)",
            "Bachelor of Engineering (BEng)",
            "Bachelor of Business Administration (BBA)",
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
          Eligibility Criteria for UG in Canada
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
          Cost of Studying UG in Canada
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow">
            CAD 15,000 – CAD 35,000 per year
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            CAD 10,000 – CAD 15,000 per year
          </div>
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            ₹20 – ₹40 Lakhs per year
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
            "Merit-based scholarships",
            "University-specific scholarships",
            "Government scholarships",
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
            <p>20 hours/week part-time</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">
              After Graduation
            </h3>
            <p>Post-Graduation Work Permit (PGWP): Up to 3 years</p>
          </div>
        </div>
      </section>

      {/* ================= JOB ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Job Opportunities After UG in Canada
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Deloitte", "PwC", "Shopify", "RBC"].map((c, i) => (
            <div key={i} className="bg-gray-100 px-5 py-2 rounded-full">
              {c}
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-xl max-w-md mx-auto">
          CAD 45,000 – CAD 65,000 per year
        </div>
      </section>

      {/* ================= VISA ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Visa Process for UG in Canada
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
          {[
            "Receive Letter of Acceptance (LOA)",
            "Pay tuition fees",
            "Apply for study permit",
            "Biometrics & medical",
            "Visa approval",
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              {i + 1}. {step}
            </div>
          ))}
        </div>
      </section>

      {/* ================= INTAKES ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Intakes for UG in Canada</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            September Intake – Main intake
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            January Intake – Secondary intake
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Application Timeline for UG in Canada
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
          Why Choose Us for UG in Canada?
        </h2>

        <p className="text-gray-600 mb-8">
          At Beyond Education, we provide complete support.
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
            <div key={i} className="bg-blue-50 p-5 rounded-xl shadow">
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
              q: "Is Canada good for Indian students?",
              a: "Yes, due to affordability and PR opportunities.",
            },
            {
              q: "Can I work while studying?",
              a: "Yes, 20 hours/week.",
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

export default StudyUGCanada;
