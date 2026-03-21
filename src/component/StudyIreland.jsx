import { Link } from "react-router-dom";
export default function StudyIreland() {
  return (
    <div className="bg-white font-[Inter]">
      {/* HERO SECTION */}
      <section className="relative py-32  text-white overflow-hidden">
        <div className="absolute inset-0 ">
          <img src="/image/usa-bg.png" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold text-black">Study in Ireland</h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto opacity-90 text-black">
            Ireland has rapidly emerged as a popular destination for
            international students due to its strong education system, globally
            ranked universities, and thriving technology industry.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* STUDY IN IRELAND ABOUT SECTION */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Study in <span className="text-blue-600">Ireland</span> for
              Indian Students
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Study in Ireland – Universities, Courses, Fees & Visa Guide
            </p>
          </div>

          {/* Content Layout */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="/image/usa-bg.png"
                className="rounded-3xl shadow-xl w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/30 to-transparent rounded-3xl"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg">
                <p className="text-sm font-semibold text-gray-800">
                  🍀 Top Study Destination
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-600 leading-relaxed">
                Ireland has rapidly emerged as a popular destination for
                international students due to its strong education system,
                globally ranked universities, and thriving technology industry.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Ireland is home to many global companies including Google,
                Apple, Facebook, and Microsoft, making it an excellent
                destination for students interested in technology and business
                careers.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Irish universities focus on innovation, research, and practical
                learning, providing students with valuable industry exposure.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Beyond Admission helps students successfully apply to Irish
                universities by providing expert guidance on course selection,
                applications, scholarships, and student visa procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDY IN IRELAND */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Study in <span className="text-blue-600">Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Ireland offers many benefits for international students.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {/* Strong Technology Industry */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">💻</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Strong Technology Industry
              </h3>

              <p className="mt-3 text-gray-600">
                Ireland is a major European technology hub with many
                multinational companies operating in the country.
              </p>
            </div>

            {/* Globally Recognized Universities */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Globally Recognized Universities
              </h3>

              <p className="mt-3 text-gray-600">
                Irish universities are known for high-quality education and
                research.
              </p>

              <p className="mt-4 font-semibold text-gray-800">
                Top universities in Ireland include:
              </p>

              <ul className="mt-3 space-y-2 text-gray-600">
                <li>● Trinity College Dublin</li>
                <li>● University College Dublin</li>
                <li>● National University of Ireland Galway</li>
              </ul>
            </div>

            {/* Post Study Work */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">💼</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Post Study Work Opportunities
              </h3>

              <p className="mt-3 text-gray-600">
                Ireland offers post-study work options for international
                students, allowing them to gain valuable work experience.
              </p>
            </div>

            {/* Safe Environment */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🌍</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Safe and Friendly Environment
              </h3>

              <p className="mt-3 text-gray-600">
                Ireland is known for its welcoming culture and safe environment
                for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES IN IRELAND */}
      <section
        id="popular-courses"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Popular Courses in <span className="text-blue-600">Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Ireland is particularly known for technology and business
              programs.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Technology Programs */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">💻</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Technology Programs
              </h3>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● Computer Science</li>
                <li>● Data Science</li>
                <li>● Artificial Intelligence</li>
                <li>● Cybersecurity</li>
              </ul>
            </div>

            {/* Business Programs */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📊</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Business Programs
              </h3>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● MBA</li>
                <li>● Business Analytics</li>
                <li>● International Business</li>
                <li>● Finance</li>
              </ul>
            </div>

            {/* Other Programs */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Other Popular Programs
              </h3>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● Pharmaceutical Sciences</li>
                <li>● Biotechnology</li>
                <li>● Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTAKES IN IRELAND */}
      <section
        id="intakes"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes in <span className="text-blue-600">Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Irish universities generally offer two main intakes.
            </p>
          </div>

          {/* Intake Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* September Intake */}
            <div className="relative p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="absolute -top-5 left-8 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Main Intake
              </div>

              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                September Intake
              </h3>

              <p className="mt-4 text-gray-600">
                Main intake with the largest number of programs.
              </p>
            </div>

            {/* January Intake */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📚</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                January Intake
              </h3>

              <p className="mt-4 text-gray-600">
                Secondary intake with fewer course options.
              </p>
            </div>
          </div>

          {/* Timeline Banner */}
          <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Application Timeline</h3>

            <p className="mt-6 text-lg opacity-90">
              Students should ideally begin the application process
              <span className="font-semibold"> 8–10 months </span>
              before the intake.
            </p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY REQUIREMENTS */}
      <section
        id="eligibility"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Eligibility Requirements to Study in{" "}
              <span className="text-blue-600">Ireland</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Admission requirements depend on the course and university.
            </p>
          </div>

          {/* Requirement Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* Academic Requirements */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Academic Requirements
              </h3>

              <p className="mt-4 text-gray-600">
                Students applying for postgraduate programs must hold a
                recognized bachelor’s degree.
              </p>
            </div>

            {/* English Language */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🌍</div>

              <h3 className="text-xl font-semibold text-gray-900">
                English Language Proficiency
              </h3>

              <p className="mt-4 text-gray-600">
                International students must demonstrate English proficiency
                through exams such as:
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● International English Language Testing System</li>
                <li>● Test of English as a Foreign Language</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COST OF STUDYING IN IRELAND */}
      <section
        id="fees"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cost of Studying in{" "}
              <span className="text-blue-600">Ireland</span>
            </h2>
          </div>

          {/* Cost Cards */}
          <div className="mt-20 grid lg:grid-cols-2 gap-10">
            {/* Tuition Fees */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Tuition Fees
              </h3>

              <div className="mt-6 space-y-4 text-gray-600">
                <div className="flex justify-between bg-green-50 p-4 rounded-xl">
                  <span>Undergraduate Programs</span>
                  <span className="font-semibold text-green-600">
                    €10,000 – €25,000
                  </span>
                </div>

                <div className="flex justify-between bg-green-50 p-4 rounded-xl">
                  <span>Master’s Programs</span>
                  <span className="font-semibold text-green-600">
                    €12,000 – €30,000
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-3">per year</p>
            </div>

            {/* Living Expenses */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🏠</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Living Expenses
              </h3>

              <p className="mt-6 text-gray-600">
                International students generally spend around
              </p>

              <div className="mt-8 bg-green-50 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-green-600">
                  €10,000 – €12,000
                </p>

                <p className="text-gray-500 mt-1">per year</p>
              </div>

              <p className="mt-6 text-gray-600">
                on accommodation, food, transportation, and personal expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIPS IN IRELAND */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Scholarships in <span className="text-blue-600">Ireland</span>
            </h2>
          </div>

          <div className="mt-20 max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Government of Ireland International Education Scholarship
              </h3>

              <p className="mt-4 text-gray-600">
                Students may apply for scholarships such as the Government of
                Ireland International Education Scholarship.
              </p>

              <p className="mt-4 text-gray-600">
                These scholarships may cover tuition fees and living expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES IN IRELAND */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Work Opportunities in{" "}
              <span className="text-blue-600">Ireland</span>
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* Part Time */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">💼</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Part-Time Work
              </h3>

              <p className="mt-4 text-gray-600">
                International students are allowed to work
                <span className="font-semibold"> 20 hours per week </span>
                during their studies.
              </p>
            </div>

            {/* Post Study */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🚀</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Post Study Work Opportunities
              </h3>

              <p className="mt-4 text-gray-600">
                Graduates can stay in Ireland for
                <span className="font-semibold"> up to 2 years </span>
                under the post-study work visa scheme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IRELAND STUDENT VISA */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ireland Student <span className="text-blue-600">Visa</span>
            </h2>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white border rounded-3xl shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📄</div>

              <p className="text-gray-600 text-lg">
                Students admitted to Irish universities must apply for the
                <span className="font-semibold">
                  {" "}
                  Ireland Student Visa (D Study Visa)
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK FREE CONSULTATION */}
      <section className="py-28 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Book Free Consultation
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Speak with our expert counsellors to receive personalized guidance
            on studying in Ireland.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 px-12 py-4 bg-white text-green-600 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Book Free Counselling
          </Link>
        </div>
      </section>
    </div>
  );
}
