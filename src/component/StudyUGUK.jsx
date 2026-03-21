import React from "react";
import { useState } from "react";

const StudyUGUSA = () => {
    const [open, setOpen] = useState(null);

    const faqs = [
      {
        q: "Can I study in UK after 12th from India?",
        a: "Yes, Indian students can directly apply for UG programs.",
      },
      {
        q: "Is IELTS mandatory?",
        a: "Yes, in most cases.",
      },
      {
        q: "How many years is UG in UK?",
        a: "Typically 3 years.",
      },
      {
        q: "Is UK good for UG?",
        a: "Yes, due to shorter duration and focused education.",
      },
    ];
  return (
    <div>
      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <h1 className="text-5xl font-bold mb-6">Study UG in UK</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Explore world-class education, flexible learning, and global career
          opportunities in the UK.
        </p>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Study UG in the <span className="text-blue-600">UK?</span>
            </h2>

            <p className="text-gray-600 mb-4">
              The United Kingdom is a top destination for Indian students after
              12th due to its shorter course duration, focused curriculum, and
              globally recognized degrees.
            </p>

            <p className="text-gray-600">
              Unlike the USA, UK universities offer specialized education from
              the first year, helping students enter the workforce faster.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {[
              "🎓 Globally recognized degrees",
              "⏳ 3-year undergraduate programs",
              "🎯 Specialized courses from Year 1",
              "💼 Strong employability focus",
              "🌍 International exposure",
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

      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Top Universities in UK</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            "University of Oxford",
            "University of Cambridge",
            "University College London",
            "University of Manchester",
            "University of Edinburgh",
            "King’s College London",
            "University of Warwick",
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

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-12">Popular UG Courses in UK</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {[
            "💻 Computer Science",
            "💼 Business Management",
            "💰 Economics & Finance",
            "⚙️ Engineering",
            "🧬 Life Sciences",
            "🎨 Arts & Design",
            "📢 Media & Communication",
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

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Types of UG Degrees in UK
          </h2>

          {[
            "Bachelor of Science (BSc) – STEM courses",
            "Bachelor of Arts (BA) – Humanities & social sciences",
            "Bachelor of Engineering (BEng)",
            "Bachelor of Business Administration (BBA)",
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 p-5 rounded-lg shadow">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">Academic</h3>
            <p>Completion of 12th grade</p>
            <p>Minimum 70%–90%</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">Entrance</h3>
            <p>No SAT required (in most cases)</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-600 mb-2">English</h3>
            <p>IELTS: 6.0 – 7.0</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6">
          {[
            "Statement of Purpose (SOP) / Personal Statement",
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

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-10">Cost of Studying UG in UK</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow">
            £10,000 – £25,000 / year
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            £10,000 – £15,000 / year
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            ₹20 – ₹40 Lakhs / year
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Scholarships for Indian Students
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
          {[
            "Merit-based scholarships",
            "Need-based scholarships",
            "University-specific scholarships",
            "Government scholarships",
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 p-5 rounded-lg shadow">
              {item}
            </div>
          ))}
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
                  <li>✔ 20 hours/week part-time</li>
                </ul>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  🚀 After Graduation
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>✔ Graduate Route Visa: Up to 2 years</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= JOB OPPORTUNITIES ================= */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">
              Job Opportunities After UG in UK
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mt-12">
              {/* Recruiters */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  🏢 Top Recruiters
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>✔ Deloitte</li>
                  <li>✔ PwC</li>
                  <li>✔ EY</li>
                  <li>✔ KPMG</li>
                </ul>
              </div>

              {/* Salary */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2">
                  💰 Average Salary
                </h3>
                <p className="text-2xl font-bold">£25,000 – £40,000 / year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Visa Process for UG in UK
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Students need a{" "}
            <span className="font-semibold text-blue-600">UK Student Visa</span>
            .
          </p>

          <div className="space-y-10">
            {[
              "Receive CAS (Confirmation of Acceptance)",
              "Pay visa fee & health surcharge",
              "Submit visa application",
              "Biometrics & approval",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-6">
                {/* STEP CIRCLE */}
                <div className="w-14 h-14 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold shadow">
                  {i + 1}
                </div>

                {/* CONTENT */}
                <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-sm w-full">
                  <p className="text-gray-700 font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-12">Intakes for UG in UK</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          {/* September */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">🎓 September Intake</h3>
            <p className="text-lg font-medium">Main Intake</p>
          </div>

          {/* January */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              🌱 January Intake
            </h3>
            <p className="text-gray-700">Limited options</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Application Timeline for UG in UK
          </h2>

          <div className="space-y-10">
            {[
              { time: "12 Months Before", text: "Start IELTS preparation" },
              { time: "8–10 Months Before", text: "Shortlist universities" },
              { time: "6–8 Months Before", text: "Apply via UCAS" },
              { time: "3–5 Months Before", text: "Apply for visa" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-6 ${
                  i % 2 !== 0 ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-semibold shadow">
                  {item.time}
                </div>

                <div className="bg-blue-50 p-6 rounded-xl shadow w-full">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us for UG in UK?</h2>

        <p className="text-gray-600 mb-12">
          At Beyond Education, we provide complete admission support.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            "🎯 University Shortlisting",
            "📝 SOP Assistance",
            "📚 IELTS Coaching",
            "📄 Application Support",
            "💰 Loan Guidance",
            "✈️ Visa Assistance",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-blue-50 p-5 rounded-xl shadow cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3 className="font-semibold">{item.q}</h3>

                {open === i && (
                  <p className="text-gray-600 mt-2 text-sm">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyUGUSA;
