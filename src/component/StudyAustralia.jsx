import { Link } from "react-router-dom";
export default function StudyAustralia() {
  return (
    <div className="bg-white font-[Inter]">
      {/* HERO SECTION */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/image/usa-bg.png" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold">Study in Australia</h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto opacity-90">
            Australia is one of the most attractive destinations for
            international students due to its high-quality education system,
            modern campuses, and strong employment opportunities.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* STUDY IN AUSTRALIA ABOUT SECTION */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Study in <span className="text-blue-600">Australia</span> for
              Indian Students
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Study in Australia – Universities, Courses, Fees & Visa Guide
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
                  🌏 Top Study Destination
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-600 leading-relaxed">
                Australia is one of the most attractive destinations for
                international students due to its high-quality education system,
                modern campuses, and strong employment opportunities.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Australian universities are known for innovation, research
                excellence, and strong industry connections.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Students from all over the world choose Australia for its
                welcoming environment, excellent quality of life, and globally
                recognized degrees.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Beyond Admission helps students secure admissions in leading
                Australian universities by providing complete guidance on
                applications, scholarships, and visa procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDY AUSTRALIA */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Study in <span className="text-blue-600">Australia</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Australia offers several benefits for international students.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Globally Ranked Universities */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Globally Ranked Universities
              </h3>

              <p className="mt-3 text-gray-600">
                Australia is home to several universities ranked among the best
                in the world.
              </p>

              <p className="mt-4 font-semibold text-gray-800">
                Some leading universities include:
              </p>

              <ul className="mt-3 space-y-2 text-gray-600">
                <li>● University of Melbourne</li>
                <li>● University of Sydney</li>
                <li>● Australian National University</li>
              </ul>
            </div>

            {/* High Quality of Life */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🌏</div>

              <h3 className="text-xl font-semibold text-gray-900">
                High Quality of Life
              </h3>

              <p className="mt-3 text-gray-600">
                Australia offers a safe environment with modern infrastructure
                and a multicultural society.
              </p>
            </div>

            {/* Work Opportunities */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">💼</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Work Opportunities
              </h3>

              <p className="mt-3 text-gray-600">
                Students can gain practical experience through part-time jobs
                and internships while studying in Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES IN AUSTRALIA */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Popular Courses in{" "}
              <span className="text-blue-600">Australia</span>
            </h2>
          </div>

          {/* Courses Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Engineering */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Engineering and Technology
              </h3>
            </div>

            {/* IT */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Information Technology
              </h3>
            </div>

            {/* Business */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Business and Management
              </h3>
            </div>

            {/* Healthcare */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Healthcare and Nursing
              </h3>
            </div>

            {/* Environmental */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Environmental Sciences
              </h3>
            </div>
          </div>

          {/* Highlight Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <p className="text-lg max-w-3xl mx-auto">
              These programs provide excellent career opportunities both in
              Australia and internationally.
            </p>
          </div>
        </div>
      </section>

      {/* INTAKES IN AUSTRALIA */}
      <section
        id="intakes"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes in <span className="text-blue-600">Australia</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Australian universities offer three major intakes.
            </p>
          </div>

          {/* Intake Cards */}
          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {/* February Intake */}
            <div className="relative p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Main Intake
              </div>

              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                February Intake
              </h3>

              <p className="mt-4 text-gray-600">
                The main intake with the maximum number of courses available in
                Australian universities.
              </p>
            </div>

            {/* July Intake */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">📚</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                July Intake
              </h3>

              <p className="mt-4 text-gray-600">
                A secondary intake with several undergraduate and postgraduate
                program options.
              </p>
            </div>

            {/* November Intake */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🌏</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                November Intake
              </h3>

              <p className="mt-4 text-gray-600">
                Limited programs available in selected universities.
              </p>
            </div>
          </div>

          {/* Timeline Banner */}
          <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Application Timeline</h3>

            <p className="mt-6 text-lg opacity-90">
              Students should begin their application process
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
              <span className="text-blue-600">Australia</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Students must meet academic and English language requirements.
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
                Students must meet the academic eligibility criteria required by
                Australian universities for their selected program.
              </p>
            </div>

            {/* English Language */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🌏</div>

              <h3 className="text-xl font-semibold text-gray-900">
                English Language Proficiency
              </h3>

              <p className="mt-4 text-gray-600">
                English proficiency tests include:
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● International English Language Testing System</li>
                <li>● Test of English as a Foreign Language</li>
              </ul>
            </div>
          </div>

          {/* Highlight Banner */}
          <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <p className="text-lg max-w-3xl mx-auto">
              Universities may have additional requirements depending on the
              course and level of study.
            </p>
          </div>
        </div>
      </section>

      {/* COST OF STUDYING IN AUSTRALIA */}
      <section
        id="fees"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cost of Studying in{" "}
              <span className="text-blue-600">Australia</span>
            </h2>
          </div>

          {/* Cost Cards */}
          <div className="mt-20 grid lg:grid-cols-2 gap-10">
            {/* Tuition Fees */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Average Tuition Fees
              </h3>

              <p className="mt-6 text-gray-600">
                Average tuition fees range from
                <span className="font-semibold">
                  {" "}
                  AUD 20,000 to AUD 45,000{" "}
                </span>
                per year depending on the program.
              </p>
            </div>

            {/* Living Expenses */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🏠</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Living Expenses
              </h3>

              <p className="mt-6 text-gray-600">
                Living expenses are approximately
              </p>

              <div className="mt-8 bg-green-50 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-green-600">AUD 21,000</p>

                <p className="text-gray-500 mt-1">per year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIPS IN AUSTRALIA */}
      <section
        id="scholarships"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Scholarships in <span className="text-blue-600">Australia</span>
            </h2>
          </div>

          {/* Scholarship Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* Australia Awards Scholarship */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Australia Awards Scholarships
              </h3>

              <p className="mt-4 text-gray-600">
                Students can apply for scholarships such as Australia Awards
                Scholarships which support international students studying in
                Australia.
              </p>
            </div>
          </div>

          {/* Highlight Banner */}
          <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <p className="text-lg max-w-3xl mx-auto">
              These scholarships may cover tuition fees, travel expenses, and
              living costs.
            </p>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES & VISA */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Work Opportunities */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">💼</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Work Opportunities
              </h3>

              <p className="mt-4 text-gray-600">
                Students in Australia can work
                <span className="font-semibold"> 48 hours per fortnight </span>
                during their studies.
              </p>
            </div>

            {/* Australia Student Visa */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📄</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Australia Student Visa
              </h3>

              <p className="mt-4 text-gray-600">
                Students must apply for the
                <span className="font-semibold">
                  {" "}
                  Subclass 500 Student Visa{" "}
                </span>
                to study in Australia.
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
            Speak with our expert counsellors to start your study in Australia
            journey.
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
