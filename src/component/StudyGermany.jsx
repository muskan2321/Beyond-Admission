import { Link } from "react-router-dom";
export default function StudyGermany() {
  return (
    <div className="bg-white font-[Inter]">
      {/* HERO SECTION */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/image/usa-bg.png" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold">Study in Germany</h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto opacity-90">
            Germany has become one of the most attractive study destinations for
            international students due to its world-class education system,
            strong engineering programs, and affordable tuition fees.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* STUDY IN GERMANY ABOUT SECTION */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Study in <span className="text-yellow-600">Germany</span> for
              Indian Students
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Study in Germany – Universities, Courses, Fees & Visa Guide
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

              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/30 to-transparent rounded-3xl"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg">
                <p className="text-sm font-semibold text-gray-800">
                  🇩🇪 Top Study Destination
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-600 leading-relaxed">
                Germany has become one of the most attractive study destinations
                for international students due to its world-class education
                system, strong engineering programs, and affordable tuition
                fees.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Many public universities in Germany offer high-quality education
                with little or no tuition fees, making it an excellent option
                for students seeking globally recognized degrees at an
                affordable cost.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Germany is particularly known for its excellence in engineering,
                technology, and research.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Students also benefit from strong industry connections,
                internships, and job opportunities in leading global companies.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                At Beyond Admission, we guide students through the entire
                process of studying in Germany, including university selection,
                application assistance, scholarships, and student visa support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDY IN GERMANY */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Study in <span className="text-yellow-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Germany offers several advantages for international students.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {/* Affordable Education */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">💰</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Affordable Education
              </h3>

              <p className="mt-3 text-gray-600">
                Many public universities in Germany charge very low or no
                tuition fees, making higher education more accessible for
                international students.
              </p>
            </div>

            {/* Globally Recognized Universities */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Globally Recognized Universities
              </h3>

              <p className="mt-3 text-gray-600">
                German universities are known for high academic standards and
                innovative research.
              </p>

              <p className="mt-4 font-semibold text-gray-800">
                Some of the top universities in Germany include:
              </p>

              <ul className="mt-3 space-y-2 text-gray-600">
                <li>● Technical University of Munich</li>
                <li>● Ludwig Maximilian University of Munich</li>
                <li>● Heidelberg University</li>
              </ul>
            </div>

            {/* Strong Industry Connections */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🏭</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Strong Industry Connections
              </h3>

              <p className="mt-3 text-gray-600">
                Germany is home to many global companies in engineering,
                automotive, and technology sectors, providing excellent
                internship and job opportunities.
              </p>
            </div>

            {/* High Quality of Life */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🌍</div>

              <h3 className="text-xl font-semibold text-gray-900">
                High Quality of Life
              </h3>

              <p className="mt-3 text-gray-600">
                Germany offers a safe environment, modern infrastructure, and
                excellent public transportation for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES IN GERMANY */}
      <section
        id="popular-courses"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Popular Courses in{" "}
              <span className="text-yellow-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Germany is particularly known for its technical and engineering
              programs.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Engineering and Technology */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">⚙️</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Engineering and Technology
              </h3>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● Mechanical Engineering</li>
                <li>● Automotive Engineering</li>
                <li>● Electrical Engineering</li>
                <li>● Robotics Engineering</li>
              </ul>
            </div>

            {/* Computer and Data Programs */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">💻</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Computer and Data Programs
              </h3>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● Computer Science</li>
                <li>● Data Science</li>
                <li>● Artificial Intelligence</li>
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
                <li>● International Business</li>
                <li>● Finance and Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTAKES IN GERMANY */}
      <section
        id="intakes"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes in <span className="text-yellow-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              German universities usually offer two major admission intakes.
            </p>
          </div>

          {/* Intake Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* Winter Intake */}
            <div className="relative p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="absolute -top-5 left-8 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Main Intake
              </div>

              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Winter Intake
              </h3>

              <p className="mt-4 text-gray-600">
                Starts in September or October and is the main intake with the
                largest number of courses available.
              </p>
            </div>

            {/* Summer Intake */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📚</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Summer Intake
              </h3>

              <p className="mt-4 text-gray-600">
                Starts in March or April with fewer program options.
              </p>
            </div>
          </div>

          {/* Timeline Banner */}
          <div className="mt-20 bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Application Timeline</h3>

            <p className="mt-6 text-lg opacity-90">
              Students should ideally start preparing their application
              <span className="font-semibold"> 10–12 months </span>
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
              <span className="text-yellow-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Admission requirements vary depending on the university and
              program.
            </p>
          </div>

          {/* Requirement Cards */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Academic Requirements */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Academic Requirements
              </h3>

              <p className="mt-4 text-gray-600">
                Students applying for master’s programs must hold a recognized
                bachelor’s degree in a relevant field.
              </p>
            </div>

            {/* English Language */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🌍</div>

              <h3 className="text-xl font-semibold text-gray-900">
                English Language Proficiency
              </h3>

              <p className="mt-4 text-gray-600">
                Many programs in Germany are taught in English and require proof
                of English proficiency through exams such as:
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● International English Language Testing System</li>
                <li>● Test of English as a Foreign Language</li>
              </ul>
            </div>

            {/* German Language */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🗣️</div>

              <h3 className="text-xl font-semibold text-gray-900">
                German Language Proficiency
              </h3>

              <p className="mt-4 text-gray-600">
                Some programs taught in German may require German language
                proficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COST OF STUDYING IN GERMANY */}
      <section
        id="fees"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cost of Studying in{" "}
              <span className="text-yellow-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Germany is known for affordable education compared to other study
              destinations.
            </p>
          </div>

          {/* Cost Cards */}
          <div className="mt-20 grid lg:grid-cols-2 gap-10">
            {/* Tuition Fees */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Tuition Fees
              </h3>

              <p className="mt-6 text-gray-600">
                Many public universities charge little or no tuition fees.
                Students usually pay a semester contribution of around
                <span className="font-semibold"> €250 – €500</span>.
              </p>

              <p className="mt-4 text-gray-600">
                Private universities may charge
                <span className="font-semibold"> €10,000 – €20,000 </span>
                per year.
              </p>
            </div>

            {/* Living Expenses */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🏠</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Living Expenses
              </h3>

              <p className="mt-6 text-gray-600">
                International students typically spend around
              </p>

              <div className="mt-8 bg-yellow-50 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-yellow-600">
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

      {/* SCHOLARSHIPS IN GERMANY */}
      <section
        id="scholarships"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Scholarships in <span className="text-yellow-600">Germany</span>
            </h2>
          </div>

          {/* Scholarship Card */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                DAAD Scholarship
              </h3>

              <p className="mt-4 text-gray-600">
                Several scholarships are available for international students.
              </p>

              <p className="mt-4 text-gray-600">
                One of the most popular scholarship programs is the
                <span className="font-semibold"> DAAD Scholarship</span>.
              </p>

              <p className="mt-4 text-gray-600">
                This scholarship supports international students with tuition,
                travel costs, and living expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES IN GERMANY */}
      <section
        id="jobs"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Work Opportunities for Students in{" "}
              <span className="text-yellow-600">Germany</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              International students can work while studying in Germany.
            </p>
          </div>

          {/* Work Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* Part Time Work */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">💼</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Part-Time Work
              </h3>

              <p className="mt-4 text-gray-600">
                Students are allowed to work
                <span className="font-semibold">
                  {" "}
                  120 full days or 240 half days per year.
                </span>
              </p>
            </div>

            {/* Post Study Work */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🚀</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Post Study Work Opportunities
              </h3>

              <p className="mt-4 text-gray-600">
                After completing their degree, students can stay in Germany for{" "}
                <span className="font-semibold">18 months</span> to search for
                employment related to their field of study.
              </p>

              <p className="mt-4 text-gray-600">
                Germany offers excellent career opportunities in sectors such as
                engineering, manufacturing, technology, and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GERMANY STUDENT VISA */}
      <section
        id="visa"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Germany Student <span className="text-yellow-600">Visa</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Students planning to study in Germany must apply for a German
              Student Visa.
            </p>
          </div>

          {/* Visa Steps */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-yellow-600">01</span>
              <div className="text-4xl mt-4">🎓</div>
              <p className="mt-4 text-gray-700">
                Receiving admission from a German university
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-yellow-600">02</span>
              <div className="text-4xl mt-4">🏦</div>
              <p className="mt-4 text-gray-700">
                Opening a blocked account for financial proof
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-yellow-600">03</span>
              <div className="text-4xl mt-4">📄</div>
              <p className="mt-4 text-gray-700">
                Submitting visa application and documents
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-yellow-600">04</span>
              <div className="text-4xl mt-4">🗓️</div>
              <p className="mt-4 text-gray-700">
                Attending visa appointment and interview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE BEYOND ADMISSION */}
      <section
        id="why-beyond"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose{" "}
              <span className="text-yellow-600">Beyond Admission</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Beyond Admission offers professional guidance to students planning
              to study in Germany.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Career Counselling */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Career Counselling
              </h3>
            </div>

            {/* University Shortlisting */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold text-gray-900">
                University Shortlisting
              </h3>
            </div>

            {/* Application Assistance */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Application Assistance
              </h3>
            </div>

            {/* Scholarship Guidance */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Scholarship Guidance
              </h3>
            </div>

            {/* Visa Documentation */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Visa Documentation Support
              </h3>
            </div>

            {/* Pre Departure */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Pre-Departure Guidance
              </h3>
            </div>
          </div>

          {/* Highlight Banner */}
          <div className="mt-20 bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-3xl p-12 text-center shadow-xl">
            <p className="text-lg max-w-3xl mx-auto">
              We ensure that students receive complete support throughout the
              admission process.
            </p>
          </div>
        </div>
      </section>

      {/* BOOK FREE CONSULTATION */}
      <section className="py-28 bg-gradient-to-r from-yellow-500 to-orange-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Book Free Consultation
          </h2>

          <p className="mt-6 text-lg opacity-90">
            If you are planning to study in Germany, our expert counsellors can
            guide you through the entire admission and visa process.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 px-12 py-4 bg-white text-yellow-600 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Book Free Counselling
          </Link>
        </div>
      </section>
    </div>
  );
}
