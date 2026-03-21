import { Link } from "react-router-dom";
export default function StudyUK() {
  return (
    <div className="bg-white font-[Inter]">
      {/* HERO */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/image/usa-bg.png" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold">Study in UK</h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto opacity-90">
            The United Kingdom is one of the most popular study destinations for
            international students known for its world-class universities and
            shorter degree duration.
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

      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Study in <span className="text-blue-600">UK</span> for Indian
              Students
            </h2>
          </div>

          {/* Content Layout */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="/image/usa-bg.png"
                className="rounded-3xl shadow-xl w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent rounded-3xl"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg">
                <p className="text-sm font-semibold text-gray-800">
                  🎓 Top Study Destination
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-600 leading-relaxed">
                The United Kingdom is one of the most popular study destinations
                for international students. Known for its world-class
                universities, shorter degree durations, and multicultural
                environment, the UK provides students with excellent academic
                and career opportunities.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Every year thousands of Indian students choose the UK for higher
                education due to its globally recognized universities and strong
                job market.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                At Beyond Admission, we assist students with university
                selection, application process, scholarships, and UK student
                visa guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDY UK */}
      <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Study in <span className="text-blue-600">UK</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The UK offers many advantages for international students.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Globally Recognized Universities */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Globally Recognized Universities
              </h3>

              <p className="mt-3 text-gray-600">
                The UK is home to some of the world’s most prestigious
                universities such as:
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● University of Oxford</li>
                <li>● University of Cambridge</li>
                <li>● Imperial College London</li>
              </ul>
            </div>

            {/* Shorter Course Duration */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">⏱️</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Shorter Course Duration
              </h3>

              <p className="mt-3 text-gray-600">
                Bachelor’s degrees usually take 3 years, while most master’s
                programs are completed in 1 year.
              </p>
            </div>

            {/* Strong Academic Reputation */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">📚</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Strong Academic Reputation
              </h3>

              <p className="mt-3 text-gray-600">
                UK universities focus on research, innovation, and practical
                learning.
              </p>
            </div>

            {/* Post Study Work Opportunities */}
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition md:col-span-2 lg:col-span-3">
              <div className="text-4xl mb-4">💼</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Post Study Work Opportunities
              </h3>

              <p className="mt-3 text-gray-600">
                International graduates can stay and work in the UK through the
                Graduate Route Visa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section
        id="Popular Courses"
        className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-16">
            Popular Courses in UK
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Business and Management",
                img: "/image/course-mba.jpg",
                icon: "📊",
                salary: "High Career Demand",
                duration: "1 Year",
                courses: [
                  "MBA",
                  "Business Analytics",
                  "International Business",
                  "Finance",
                ],
              },
              {
                title: "Engineering and Technology",
                img: "/image/course-tech.jpg",
                icon: "💻",
                salary: "High Demand Field",
                duration: "1 Year",
                courses: [
                  "MSc Computer Science",
                  "MSc Artificial Intelligence",
                  "MSc Mechanical Engineering",
                ],
              },
              {
                title: "Other Programs",
                img: "/image/course-ug.jpg",
                icon: "🎓",
                salary: "Various Career Options",
                duration: "1-3 Years",
                courses: [
                  "Law",
                  "Architecture",
                  "Data Science",
                  "Public Health",
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
                    {item.salary}
                  </p>

                  <ul className="space-y-2 text-gray-600 text-sm">
                    {item.courses.map((course, index) => (
                      <li
                        key={index}
                        className="hover:text-blue-600 transition"
                      >
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

      {/* TOP UNIVERSITIES */}
      <section
        id="Top Universities"
        className="py-24 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Top Universities in UK
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                name: "University of Oxford",
                img: "/image/oxford.jpg",
                rank: "#1 Global Ranking",
              },
              {
                name: "University of Cambridge",
                img: "/image/cambridge.jpg",
                rank: "#2 Global Ranking",
              },
              {
                name: "Imperial College London",
                img: "/image/imperial.jpg",
                rank: "#3 Global Ranking",
              },
              {
                name: "University College London",
                img: "/image/ucl.jpg",
                rank: "Top Global University",
              },
            ].map((uni, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={uni.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Rank Badge */}
                  <span className="absolute top-3 left-3 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {uni.rank}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {uni.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    These universities consistently rank among the best
                    institutions globally.
                  </p>

                  <button className="mt-4 text-sm font-semibold text-blue-600 hover:text-orange-500 transition">
                    View Programs →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTAKES */}
      <section
        id="intakes"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Intakes in <span className="text-blue-600">UK</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              UK universities usually offer two major intakes.
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
                Main intake with the maximum number of courses.
              </p>
            </div>

            {/* January Intake */}
            <div className="relative p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📚</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                January Intake
              </h3>

              <p className="mt-4 text-gray-600">
                Secondary intake with limited programs.
              </p>
            </div>
          </div>

          {/* Timeline Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Application Timeline</h3>

            <p className="mt-6 text-lg opacity-90">
              Students should begin their application process 8–10 months before
              the intake.
            </p>
          </div>
        </div>
      </section>

      <section
        id="eligibility"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Eligibility Requirements
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Common requirements include:
            </p>
          </div>

          {/* Requirement Cards */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Academic Qualification */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Academic Qualification
              </h3>

              <p className="mt-4 text-gray-600">
                Bachelor’s degree for postgraduate programs
              </p>

              <p className="mt-2 text-gray-600">
                Minimum academic score of around 60% or above
              </p>
            </div>

            {/* English Language Proficiency */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🌍</div>

              <h3 className="text-xl font-semibold text-gray-900">
                English Proficiency Tests
              </h3>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● International English Language Testing System</li>
              </ul>
            </div>

            {/* Additional Tests */}
            <div className="p-10 rounded-3xl bg-white border shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📝</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Other Accepted Tests
              </h3>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>● Test of English as a Foreign Language</li>
              </ul>
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Important Note</h3>

            <p className="mt-6 text-lg opacity-90">
              Eligibility requirements may vary depending on the university and
              program.
            </p>
          </div>
        </div>
      </section>

      {/* COST */}
      <section
        id="fees"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cost of Studying in <span className="text-blue-600">UK</span>
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

              <div className="mt-6 space-y-4 text-gray-600">
                <div className="flex justify-between bg-blue-50 p-4 rounded-xl">
                  <span>Undergraduate programs</span>
                  <span className="font-semibold text-blue-600">
                    £12,000 – £20,000
                  </span>
                </div>

                <div className="flex justify-between bg-blue-50 p-4 rounded-xl">
                  <span>Master’s programs</span>
                  <span className="font-semibold text-blue-600">
                    £15,000 – £30,000
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
                £10,000 – £15,000 per year depending on the city.
              </p>

              <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-blue-600">
                  £10,000 – £15,000
                </p>

                <p className="text-gray-500 mt-1">per year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="scholarships"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Scholarships in <span className="text-blue-600">UK</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              International students can apply for scholarships such as:
            </p>
          </div>

          {/* Scholarship Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* Chevening Scholarship */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Chevening Scholarship
              </h3>
            </div>

            {/* Commonwealth Scholarship */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🏆</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Commonwealth Scholarship
              </h3>
            </div>
          </div>

          {/* Scholarship Info Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-12 text-center shadow-xl">
            <p className="text-lg max-w-3xl mx-auto">
              These scholarships may cover tuition fees and living expenses.
            </p>
          </div>
        </div>
      </section>

      <section
        id="jobs"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Work Opportunities in <span className="text-blue-600">UK</span>
            </h2>
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
                Students in the UK can work 20 hours per week during their
                studies.
              </p>
            </div>

            {/* Graduate Route Visa */}
            <div className="bg-white rounded-3xl border shadow-lg p-10 hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🚀</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Post-Study Work Opportunities
              </h3>

              <p className="mt-4 text-gray-600">
                After graduation, students can apply for the Graduate Route
                Visa, which allows them to stay and work in the UK for 2 years.
              </p>
            </div>
          </div>

          {/* Highlight Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-12 text-center shadow-xl">
            <p className="text-lg max-w-3xl mx-auto">
              The UK provides excellent career opportunities for international
              graduates through the Graduate Route Visa program.
            </p>
          </div>
        </div>
      </section>

      <section
        id="visa"
        className="py-28 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              UK Student <span className="text-blue-600">Visa</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              International students must apply for the UK Student Visa.
            </p>
          </div>

          {/* Visa Steps */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-blue-600">01</span>
              <p className="mt-4 text-gray-700">
                Receive admission offer from university
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-blue-600">02</span>
              <p className="mt-4 text-gray-700">Receive CAS letter</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-blue-600">03</span>
              <p className="mt-4 text-gray-700">Complete visa application</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border shadow-lg hover:shadow-2xl transition hover:-translate-y-2 text-center">
              <span className="text-3xl font-bold text-blue-600">04</span>
              <p className="mt-4 text-gray-700">
                Attend biometrics appointment
              </p>
            </div>
          </div>

          {/* Visa Highlight Banner */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Important Note</h3>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Proper documentation and preparation are essential for successful
              UK student visa approval.
            </p>
          </div>
        </div>
      </section>

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
              Beyond Admission provides expert support including:
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white rounded-3xl border shadow-lg p-8 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🎯</div>
              <p className="font-semibold text-gray-800">Career counselling</p>
            </div>

            <div className="bg-white rounded-3xl border shadow-lg p-8 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">🏫</div>
              <p className="font-semibold text-gray-800">
                University shortlisting
              </p>
            </div>

            <div className="bg-white rounded-3xl border shadow-lg p-8 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📝</div>
              <p className="font-semibold text-gray-800">Application support</p>
            </div>

            <div className="bg-white rounded-3xl border shadow-lg p-8 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">💰</div>
              <p className="font-semibold text-gray-800">
                Scholarship guidance
              </p>
            </div>

            <div className="bg-white rounded-3xl border shadow-lg p-8 text-center hover:shadow-2xl transition hover:-translate-y-2">
              <div className="text-4xl mb-4">📄</div>
              <p className="font-semibold text-gray-800">Visa assistance</p>
            </div>
          </div>

          {/* Highlight Banner */}
          {/* <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-12 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">
              Start Your Study Abroad Journey with Expert Guidance
            </h3>

            <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
              Our experienced counsellors guide students through every step of
              the admission process to help them achieve their dream of studying
              abroad.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition"
            >
              Book Free Consultation
            </a>
          </div> */}
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
