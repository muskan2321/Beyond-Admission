import React from "react";
import { useState } from "react";

const StudyUGIreland = () => {
    const [open, setOpen] = useState(null);
  return (
    <div>
      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <h1 className="text-5xl font-bold mb-6">Study UG in Ireland</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Explore world-class education, flexible learning, and global career
          opportunities in the Ireland.
        </p>
      </section>
      {/* ================= WHY STUDY ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Undergraduate (UG) in Ireland for Indian Students – Complete Guide
            </h1>

            <h2 className="text-2xl font-semibold mb-4">
              Why Study UG in Ireland?
            </h2>

            <p className="text-gray-600 mb-4">
              Ireland is emerging as a top study destination for Indian students
              due to its high-quality education system, strong tech industry
              presence, and post-study work opportunities.
            </p>

            <p className="text-gray-600">
              It is home to many global companies, making it ideal for students
              looking for career opportunities in Europe.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "🎓 Globally recognized degrees",
              "💼 Strong job opportunities (especially in tech & business)",
              "🌍 English-speaking country in Europe",
              "🎯 Post-study work visa options",
              "🤝 Presence of global companies",
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
          Top Universities in Ireland
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            "Trinity College Dublin",
            "University College Dublin",
            "National University of Ireland Galway",
            "University College Cork",
            "Dublin City University",
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
          Popular UG Courses in Ireland
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "💻 Computer Science",
            "💼 Business & Management",
            "📊 Data Analytics",
            "💰 Finance",
            "🧬 Life Sciences",
            "⚙️ Engineering",
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
          Types of UG Degrees in Ireland
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto px-6">
          {[
            "Bachelor of Science (BSc)",
            "Bachelor of Arts (BA)",
            "Bachelor of Engineering (BEng)",
            "Bachelor of Business Studies (BBS)",
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
          Eligibility Criteria for UG in Ireland
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">
              Academic Requirements
            </h3>
            <p>Completion of 12th grade</p>
            <p>Minimum 65%–85%</p>
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
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Required Documents
        </h2>

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
          Cost of Studying UG in Ireland
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow">
            €10,000 – €25,000 per year
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            €10,000 – €12,000 per year
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            ₹18 – ₹35 Lakhs per year
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
            "Government of Ireland Scholarships",
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
            <p>20 hours/week part-time</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">
              After Graduation
            </h3>
            <p>1–2 years post-study work visa</p>
          </div>
        </div>
      </section>

      {/* ================= JOB ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Job Opportunities After UG in Ireland
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Google", "Meta", "Apple", "Amazon"].map((c, i) => (
            <div key={i} className="bg-gray-100 px-5 py-2 rounded-full">
              {c}
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-xl max-w-md mx-auto">
          €28,000 – €45,000/year
        </div>
      </section>

      {/* ================= VISA ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Visa Process for UG in Ireland
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
          {[
            "Receive admission letter",
            "Pay tuition fees (partial/full)",
            "Apply for visa online",
            "Submit documents",
            "Visa decision",
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              {i + 1}. {step}
            </div>
          ))}
        </div>
      </section>

      {/* ================= INTAKES ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Intakes for UG in Ireland</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            September Intake – Main intake
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            January Intake – Limited
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Application Timeline for UG in Ireland
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto px-6">
          {[
            "12 Months Before: Start IELTS preparation",
            "8–10 Months Before: Apply to universities",
            "6–8 Months Before: Receive offer",
            "3–5 Months Before: Apply for visa",
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
          Why Choose Us for UG in Ireland?
        </h2>

        <p className="text-gray-600 mb-8">
          At Beyond Education, we offer complete guidance.
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
              q: "Is Ireland good for Indian students?",
              a: "Yes, especially for tech and business fields.",
            },
            {
              q: "Is IELTS mandatory?",
              a: "Yes, in most cases.",
            },
            {
              q: "Can I work while studying?",
              a: "Yes, 20 hours/week.",
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

export default StudyUGIreland;
