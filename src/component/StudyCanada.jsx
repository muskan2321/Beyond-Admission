import { Link } from "react-router-dom";
export default function StudyCanada() {
  return (
    <div className="bg-white font-[Inter]">
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/image/usa-bg.png" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold">Study in Canada</h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto opacity-90">
            Canada is one of the most popular study destinations for
            international students known for its high-quality education system,
            affordable tuition fees, multicultural environment, and excellent
            career opportunities.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4">
        <a
          href="#why-usa"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Why USA?
        </a>

        <a
          href="#Popular Courses"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Popular Courses
        </a>

        <a
          href="#Top Universities"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Top Universities
        </a>

        <a
          href="#intakes"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Intakes
        </a>

        <a
          href="#fees"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Fees & Expenses
        </a>

        <a
          href="#eligibility"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Eligibility
        </a>

        <a
          href="#scholarships"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Scholarships
        </a>

        <a
          href="#jobs"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Jobs
        </a>

        <a
          href="#visa"
          className="px-6 py-2 bg-blue-200 rounded-full hover:bg-red-300"
        >
          Visa
        </a>
      </div>

      {/* STUDY IN CANADA ABOUT SECTION */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Study in <span className="text-blue-600">Canada</span> for Indian
              Students
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Study in Canada – Universities, Courses, Fees & Visa Guide
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

              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 to-transparent rounded-3xl"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg">
                <p className="text-sm font-semibold text-gray-800">
                  🍁 Top Study Destination
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-600 leading-relaxed">
                Canada has become one of the most popular destinations for
                international students due to its high-quality education system,
                affordable tuition fees, multicultural environment, and
                excellent career opportunities.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Canadian universities are globally recognized for academic
                excellence and research, making Canada an ideal destination for
                students looking for quality education and international
                exposure.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Every year thousands of students choose Canada for undergraduate
                and postgraduate programs because of its welcoming immigration
                policies and strong job market.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                At{" "}
                <span className="font-semibold text-blue-600">
                  Beyond Admission
                </span>
                , we assist students throughout the entire process including
                university selection, application guidance, scholarships, and
                Canada student visa assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDY CANADA */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Study in <span className="text-blue-600">Canada</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Canada offers numerous advantages for international students.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* High Quality Education */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                High Quality Education
              </h3>

              <p className="mt-3 text-gray-600">
                Canadian universities are known for high academic standards and
                innovative research programs.
              </p>
            </div>

            {/* Globally Recognized Degrees */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🌍</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Globally Recognized Degrees
              </h3>

              <p className="mt-3 text-gray-600">
                Degrees obtained from Canadian institutions are recognized
                worldwide and valued by employers globally.
              </p>
            </div>

            {/* Safe Environment */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🛡️</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Safe & Multicultural Environment
              </h3>

              <p className="mt-3 text-gray-600">
                Canada is one of the safest countries for international students
                and welcomes people from diverse cultures.
              </p>
            </div>

            {/* Post Study Work */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition md:col-span-2 lg:col-span-3">
              <div className="text-4xl mb-4">💼</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Post Study Work Opportunities
              </h3>

              <p className="mt-3 text-gray-600">
                Students can gain valuable international work experience after
                completing their degree through post-study work permits.
              </p>

              <p className="mt-4 font-semibold text-gray-800">
                Some of the top universities in Canada include:
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● University of Toronto</li>
                <li>● University of British Columbia</li>
                <li>● McGill University</li>
                <li>● University of Alberta</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES IN CANADA */}
      <section
        id="popular-courses"
        className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-16">
            Popular Courses in Canada
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Engineering and Technology",
                img: "/image/course-tech.jpg",
                icon: "💻",
                demand: "High Demand Field",
                duration: "2 Years",
                courses: [
                  "Computer Science",
                  "Software Engineering",
                  "Data Science",
                  "Artificial Intelligence",
                ],
              },
              {
                title: "Business and Management",
                img: "/image/course-mba.jpg",
                icon: "📊",
                demand: "Top Career Opportunities",
                duration: "1-2 Years",
                courses: [
                  "MBA",
                  "Business Analytics",
                  "Finance",
                  "International Business",
                ],
              },
              {
                title: "Other Popular Programs",
                img: "/image/course-ug.jpg",
                icon: "🎓",
                demand: "Various Career Paths",
                duration: "2-4 Years",
                courses: [
                  "Healthcare and Nursing",
                  "Environmental Science",
                  "Biotechnology",
                  "Hospitality Management",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <span className="absolute top-3 left-3 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {item.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span>{item.icon}</span>
                    {item.title}
                  </h3>

                  <p className="text-sm text-green-600 font-semibold mb-4">
                    {item.demand}
                  </p>

                  <ul className="space-y-2 text-gray-600 text-sm">
                    {item.courses.map((course, index) => (
                      <li key={index} className="hover:text-red-600 transition">
                        {course}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-5 text-sm font-semibold text-blue-600 hover:text-orange-500 transition">
                    Explore Programs →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTAKES IN CANADA */}
      <section
        id="intakes"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes in <span className="text-blue-600">Canada</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Universities in Canada offer multiple intakes throughout the year.
            </p>
          </div>

          {/* Intake Cards */}
          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {/* September Intake */}
            <div className="relative p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="absolute -top-5 left-8 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Main Intake
              </div>

              <div className="text-4xl mb-4">🍁</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                September Intake
              </h3>

              <p className="mt-4 text-gray-600">
                The main intake with the maximum number of courses available
                across Canadian universities.
              </p>
            </div>

            {/* January Intake */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📚</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                January Intake
              </h3>

              <p className="mt-4 text-gray-600">
                A secondary intake with several undergraduate and postgraduate
                program options.
              </p>
            </div>

            {/* May Intake */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                May Intake
              </h3>

              <p className="mt-4 text-gray-600">
                Limited programs available in selected universities for specific
                courses.
              </p>
            </div>
          </div>

          {/* Timeline Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Application Timeline</h3>

            <p className="mt-6 text-lg opacity-90">
              Students should ideally begin their admission process
              <span className="font-semibold"> 8–12 months </span>
              before the intake to secure admission and visa approval.
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
              <span className="text-blue-600">Canada</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Admission requirements may vary depending on the university and
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
                Students applying for master’s programs must hold a bachelor’s
                degree from a recognized institution.
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
                <li>● International English Language Testing System (IELTS)</li>
                <li>● Test of English as a Foreign Language (TOEFL)</li>
              </ul>
            </div>

            {/* Additional Exams */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📝</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Additional Standardized Tests
              </h3>

              <p className="mt-4 text-gray-600">
                Some programs may also require standardized exams like:
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● Graduate Record Examination (GRE)</li>
              </ul>
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Important Note</h3>

            <p className="mt-6 text-lg opacity-90">
              Eligibility requirements may vary depending on the university,
              course, and level of study.
            </p>
          </div>
        </div>
      </section>

      {/* COST OF STUDYING IN CANADA */}
      <section
        id="fees"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cost of Studying in <span className="text-blue-600">Canada</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The cost of studying in Canada depends on the program and
              university.
            </p>
          </div>

          {/* Cost Cards */}
          <div className="mt-20 grid lg:grid-cols-2 gap-10">
            {/* Tuition Fees */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Average Tuition Fees
              </h3>

              <div className="mt-6 space-y-4 text-gray-600">
                <div className="flex justify-between bg-blue-50 p-4 rounded-xl">
                  <span>Undergraduate Programs</span>
                  <span className="font-semibold text-blue-600">
                    CAD 15,000 – CAD 30,000
                  </span>
                </div>

                <div className="flex justify-between bg-blue-50 p-4 rounded-xl">
                  <span>Master’s Programs</span>
                  <span className="font-semibold text-blue-600">
                    CAD 18,000 – CAD 35,000
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-3">per year</p>
            </div>

            {/* Living Expenses */}
            <div className="bg-white p-10 rounded-3xl border shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🏠</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                Average Living Expenses
              </h3>

              <p className="mt-6 text-gray-600">
                International students typically spend on accommodation, food,
                transportation, and personal expenses while studying in Canada.
              </p>

              <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-blue-600">
                  CAD 10,000 – CAD 15,000
                </p>

                <p className="text-gray-500 mt-1">per year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIPS IN CANADA */}
      <section
        id="scholarships"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Scholarships in <span className="text-blue-600">Canada</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Many scholarships are available for international students to help
              reduce the cost of education.
            </p>
          </div>

          {/* Scholarship Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* Vanier Scholarship */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Vanier Canada Graduate Scholarships
              </h3>

              <p className="mt-4 text-gray-600">
                A prestigious scholarship awarded to outstanding doctoral
                students who demonstrate leadership skills and high academic
                achievement.
              </p>
            </div>

            {/* Ontario Scholarship */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🏆</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Ontario Graduate Scholarship
              </h3>

              <p className="mt-4 text-gray-600">
                This scholarship supports graduate students with strong academic
                performance and research potential in Ontario universities.
              </p>
            </div>
          </div>

          {/* Scholarship Info Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <p className="text-lg max-w-3xl mx-auto">
              Scholarships may be awarded based on
              <span className="font-semibold">
                {" "}
                academic excellence, leadership, or research achievements
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* WORK OPPORTUNITIES IN CANADA */}
      <section
        id="jobs"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Work Opportunities for Students in{" "}
              <span className="text-blue-600">Canada</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              International students in Canada can work while studying and gain
              valuable professional experience.
            </p>
          </div>

          {/* Work Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* Part-Time Work */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">💼</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Part-Time Work During Studies
              </h3>

              <p className="mt-4 text-gray-600">
                International students in Canada can work up to
                <span className="font-semibold"> 20 hours per week </span>
                during academic sessions while continuing their studies.
              </p>
            </div>

            {/* Post Study Work Permit */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🚀</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Post Study Work Permit (PGWP)
              </h3>

              <p className="mt-4 text-gray-600">
                Graduates can apply for the
                <span className="font-semibold">
                  {" "}
                  Post-Graduation Work Permit (PGWP)
                </span>
                which allows them to work in Canada for up to
                <span className="font-semibold"> 3 years </span>
                depending on the duration of their study program.
              </p>
            </div>
          </div>

          {/* Highlight Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <p className="text-lg max-w-3xl mx-auto">
              Work experience gained through PGWP can help international
              students apply for
              <span className="font-semibold">
                {" "}
                Permanent Residency (PR) in Canada
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CANADA STUDENT VISA */}
      <section
        id="visa"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Canada Student <span className="text-blue-600">Visa</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Students planning to study in Canada must apply for a
              <span className="font-semibold"> Study Permit</span>.
            </p>
          </div>

          {/* Visa Steps */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-blue-600">01</span>

              <div className="text-4xl mt-4">🎓</div>

              <p className="mt-4 text-gray-700">
                Receive admission from a designated learning institution (DLI)
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-blue-600">02</span>

              <div className="text-4xl mt-4">💰</div>

              <p className="mt-4 text-gray-700">
                Prepare financial documents to prove funds for tuition and
                living expenses
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-blue-600">03</span>

              <div className="text-4xl mt-4">📄</div>

              <p className="mt-4 text-gray-700">
                Submit the Canada student visa (study permit) application
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-blue-600">04</span>

              <div className="text-4xl mt-4">🧬</div>

              <p className="mt-4 text-gray-700">
                Complete biometrics and medical examination
              </p>
            </div>
          </div>

          {/* Visa Highlight Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Important Visa Tip</h3>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Students should apply for their Canada study permit as early as
              possible to avoid delays in visa processing and travel plans.
            </p>
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
              Why Choose <span className="text-blue-600">Beyond Admission</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Beyond Admission provides professional support to students
              planning to study abroad.
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
              <p className="mt-4 text-gray-600">
                Expert guidance to help students choose the right course and
                career path.
              </p>
            </div>

            {/* University Shortlisting */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold text-gray-900">
                University Shortlisting
              </h3>
              <p className="mt-4 text-gray-600">
                Personalized university recommendations based on academic
                profile and goals.
              </p>
            </div>

            {/* Application Guidance */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Application Guidance
              </h3>
              <p className="mt-4 text-gray-600">
                Assistance with application forms, documentation, and submission
                process.
              </p>
            </div>

            {/* Scholarship Assistance */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Scholarship Assistance
              </h3>
              <p className="mt-4 text-gray-600">
                Guidance in finding and applying for scholarships to reduce
                education costs.
              </p>
            </div>

            {/* Visa Documentation */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Visa Documentation Support
              </h3>
              <p className="mt-4 text-gray-600">
                Step-by-step assistance for preparing and submitting visa
                documentation.
              </p>
            </div>

            {/* Pre Departure Guidance */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Pre-Departure Guidance
              </h3>
              <p className="mt-4 text-gray-600">
                Important guidance about accommodation, travel, and student life
                abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-orange-500 text-white text-center">
        <h2 className="text-4xl font-bold">
          Book Free Study Abroad Consultation
        </h2>

        <button className="mt-10 px-12 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Book Free Counselling
        </button>
      </section>
    </div>
  );
}
