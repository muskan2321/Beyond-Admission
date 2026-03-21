import React from "react";
import { useState } from "react";

const StudyUGUSA = () => {
   const [open, setOpen] = useState(null);

   const faqs = [
     {
       q: "Is UG in Germany free?",
       a: "Yes, most public universities have no tuition fees.",
     },
     {
       q: "Do I need German language?",
       a: "Yes, for most UG programs.",
     },
     {
       q: "What is Studienkolleg?",
       a: "A foundation course required for Indian students.",
     },
   ];
  return (
    <div>
      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <h1 className="text-5xl font-bold mb-6">Study UG in Germany</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Explore world-class education, flexible learning, and global career
          opportunities in the Germany.
        </p>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Study UG in <span className="text-blue-600">Germany?</span>
            </h2>

            <p className="text-gray-600 mb-4">
              Germany is becoming a top destination for Indian students due to
              its low or no tuition fees, strong technical education, and high
              employability.
            </p>

            <p className="text-gray-600">
              Unlike many countries, public universities in Germany offer
              high-quality education at minimal cost, making it ideal for
              budget-conscious students.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {[
              "💰 Low or zero tuition fees in public universities",
              "🎓 Globally recognized degrees",
              "⚙️ Strong focus on engineering & technical fields",
              "💼 High job opportunities in Europe",
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
        <h2 className="text-4xl font-bold mb-12">
          Top Universities in Germany
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            "Technical University of Munich",
            "Ludwig Maximilian University of Munich",
            "Heidelberg University",
            "RWTH Aachen University",
            "University of Stuttgart",
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
        <h2 className="text-4xl font-bold mb-12">
          Popular UG Courses in Germany
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "⚙️ Mechanical Engineering",
            "💻 Computer Science",
            "🏗️ Civil Engineering",
            "⚡ Electrical Engineering",
            "🧬 Natural Sciences",
            "💼 Business Administration",
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
        <div className="max-w-5xl mx-auto px-6 space-y-6 text-center">
          <h2 className="text-4xl font-bold mb-10">
            Types of UG Degrees in Germany
          </h2>

          {[
            "Bachelor of Science (BSc)",
            "Bachelor of Engineering (BEng)",
            "Bachelor of Arts (BA)",
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
            <h3 className="text-blue-600 font-semibold mb-2">Academic</h3>
            <p>Completion of 12th grade</p>
            <p>Often requires 1 year of Studienkolleg (foundation course)</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">Entrance</h3>
            <p>No SAT required</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">Language</h3>
            <p>German-taught: B1–C1 (TestDaF/DSH)</p>
            <p>English-taught: IELTS 6.0 – 6.5</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6">
          {[
            "SOP",
            "Academic Transcripts",
            "Language Certificate (German/IELTS)",
            "CV/Resume",
            "Passport Copy",
          ].map((doc, i) => (
            <div key={i} className="bg-blue-50 p-5 rounded-lg shadow">
              {doc}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Cost of Studying UG in Germany
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow">
            Public: Free or €0–€1,500/year <br />
            Private: €10,000 – €20,000/year
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            €10,000 – €12,000/year
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            ₹10 – ₹25 Lakhs / year
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Scholarships for Indian Students
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          {[
            "DAAD Scholarships",
            "Merit-based scholarships",
            "University-specific funding",
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 p-5 rounded-lg shadow">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">During Study</h3>
            <p>120 full days or 240 half days/year</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold mb-2">
              After Graduation
            </h3>
            <p>18-month job-seeking visa</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Job Opportunities After UG in Germany
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["BMW", "Siemens", "Bosch", "Volkswagen"].map((c, i) => (
            <div key={i} className="bg-gray-100 px-5 py-2 rounded-full">
              {c}
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-xl max-w-md mx-auto">
          €35,000 – €55,000/year
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Visa Process for UG in Germany
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Students require a{" "}
            <span className="font-semibold text-blue-600">
              German Student Visa
            </span>
            .
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "University admission letter",
              "Open blocked account (~€11,208)",
              "Book visa appointment",
              "Submit documents",
              "Attend interview",
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
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow hover:scale-105 transition">
              Get Visa Assistance
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Intakes for UG in Germany</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {/* Winter */}
          <div className="border-2 border-blue-600 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              ❄️ Winter Intake
            </h3>
            <p className="text-lg font-medium mb-2">October</p>
            <p className="text-gray-600">
              ✔ Main intake
              <br />
              ✔ Maximum universities & courses
              <br />✔ Higher chances of admission
            </p>
          </div>

          {/* Summer */}
          <div className="border p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🌞 Summer Intake
            </h3>
            <p className="text-lg font-medium mb-2">April</p>
            <p className="text-gray-600">
              ✔ Limited programs
              <br />
              ✔ Fewer university options
              <br />✔ Good backup option
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Application Timeline for UG in Germany
          </h2>

          <div className="space-y-10">
            {[
              {
                time: "12 Months Before",
                text: "Start German/IELTS preparation",
              },
              { time: "8–10 Months Before", text: "Apply via Uni-Assist" },
              { time: "6–8 Months Before", text: "Receive admission" },
              { time: "3–5 Months Before", text: "Visa application" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-6 ${
                  i % 2 !== 0 ? "flex-row-reverse text-right" : ""
                }`}
              >
                {/* TIME BADGE */}
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

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Why Choose Us for UG in Germany?
        </h2>

        <p className="text-gray-600 mb-12">
          At Beyond Education, we provide complete support.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: "🎯",
              title: "University Shortlisting",
              desc: "We help you choose the best universities based on your profile, budget, and career goals.",
            },
            {
              icon: "📝",
              title: "SOP Guidance",
              desc: "Get expert support in writing a strong SOP that increases your chances of admission.",
            },
            {
              icon: "📚",
              title: "German/IELTS Coaching",
              desc: "Prepare for language exams with expert guidance and improve your scores.",
            },
            {
              icon: "📄",
              title: "Application Assistance",
              desc: "We guide you through the entire application process to ensure accuracy and success.",
            },
            {
              icon: "💰",
              title: "Blocked Account Guidance",
              desc: "Step-by-step support to open and manage your blocked account for Germany.",
            },
            {
              icon: "✈️",
              title: "Visa Support",
              desc: "Complete assistance with visa application, documentation, and interview preparation.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-left"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden transition"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-semibold text-gray-800">{item.q}</span>
                  <span className="text-blue-600 text-xl">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <div className="px-5 pb-5 text-gray-600 text-sm border-t">
                    {item.a}
                  </div>
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
