import React from "react";

const GMAT = () => {
  return (
    <div className="pt-20 bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            USMLE <span className="text-blue-300">Preparation</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl text-gray-200">
            Prepare for the GMAT exam with expert guidance, structured study
            plans, and proven strategies to achieve your target score and get
            into top business schools worldwide.
          </p>
        </div>
      </section>

      {/* ABOUT GMAT */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-blue-600">GMAT</span>
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            The Graduate Management Admission Test (GMAT) is a globally
            recognized entrance exam required for admission to MBA and other
            business-related programs. It evaluates analytical writing,
            quantitative, verbal, and reasoning skills. A good GMAT score helps
            students secure admission in top business schools across the USA,
            UK, Canada, and other countries.
          </p>
        </div>
      </section>

      {/* EXAM DETAILS */}
      <section className="py-10 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            GMAT <span className="text-blue-600">Exam Details</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Exam Duration", "2 hours 15 minutes"],
              ["Total Score", "205 - 805"],
              ["Mode", "Online & Test Center"],
              ["Sections", "Quantitative, Verbal, Data Insights"],
              ["Validity", "5 Years"],
              ["Frequency", "Multiple attempts allowed"],
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white rounded-xl shadow border">
                <h3 className="font-semibold text-gray-800">{item[0]}</h3>
                <p className="text-blue-600 font-bold mt-1">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            GMAT <span className="text-blue-600">Syllabus</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quantitative",
                points: ["Arithmetic", "Algebra", "Word Problems"],
              },
              {
                title: "Verbal",
                points: [
                  "Reading Comprehension",
                  "Critical Reasoning",
                  "Grammar",
                ],
              },
              {
                title: "Data Insights",
                points: [
                  "Data Interpretation",
                  "Graphs",
                  "Multi-source reasoning",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-blue-50 rounded-xl border shadow-sm"
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {item.points.map((p, index) => (
                    <li key={index}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose <span className="text-blue-600">Our GMAT Coaching?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Expert Faculty & Mentors",
              "Personalized Study Plan",
              "Mock Tests & Practice Papers",
              "Doubt Clearing Sessions",
              "Score Improvement Strategies",
              "Flexible Online & Offline Classes",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold">Start Your GMAT Journey Today 🚀</h2>
        <p className="mt-4 text-gray-200">
          Get expert guidance and achieve your dream MBA admission.
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-200 transition">
          Enroll Now
        </button>
      </section>
    </div>
  );
};

export default GMAT;
