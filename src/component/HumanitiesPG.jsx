import { Link } from "react-router-dom";
import { useState } from "react";

export default function Engineering() {
  const [activeTab, setActiveTab] = useState("duration");

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image/usa-bg.png"
            className="w-full h-full object-cover scale-110"
            alt="Study Engineering Courses in India"
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
          <div>
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
              🔧 Your Path to Humanities Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Humanities Courses in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                India
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
            Start your journey to build a successful career in Humanities with top universities, expert guidance, and complete admission support.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Apply Now
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition">
                Free Counselling
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(20px,-30px) scale(1.1); }
          }
          .animate-blob { animation: blob 10s infinite; }
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .delay-2000 { animation-delay: 2s; }
          .delay-4000 { animation-delay: 4s; }
        `}</style>
      </section>

      {/* NAVIGATION PILLS SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#why-engineering"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Why Humanities in India?
          </a>
          <a
            href="#btech"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            PG
          </a>
          <a
            href="#specializations"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Specializations
          </a>
          <a
            href="#course-structure"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Course Structure
          </a>
          <a
            href="#admission-process"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Admission Process
          </a>
          <a
            href="#fee-structure"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Fee Structure
          </a>
          <a
            href="#career-scope"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Career Scope
          </a>
          <a
            href="#why-choose-us"
            className="px-5 py-2.5 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Why Choose Us
          </a>
        </div>
      </div>

      {/* intro */}
      <section
        id="why-engineering"
        className="relative pt-14 pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[130px] animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build Your{" "}
              <span className="text-blue-600"> Humanities Career</span> in
              India
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-3xl"></div>
              <img
                src="/image/usa-bg.png"
                alt="Study Engineering in India"
                className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Placement Rate</p>
                  <p className="text-3xl font-bold text-blue-600">95%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Students Placed</p>
                  <p className="text-xl font-semibold text-gray-800">20,000+</p>
                </div>
              </div>
            </div>

            <div>
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Why Pursue PG Humanities in India?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Postgraduate studies in Humanities offer a deep understanding of society,
                culture, history, and human behavior. It is an excellent choice for students
                who are passionate about critical thinking, research, and communication.
                With diverse career opportunities in education, media, public policy, and
                research, Humanities helps build a meaningful and impactful career.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                India is home to some of the top universities offering specialized PG
                programs in fields like Psychology, Sociology, Political Science, History,
                and Literature, providing both academic excellence and real-world exposure.
              </p>
            </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  " Strong foundation for competitive exams (UPSC, UGC-NET, etc.)",
                  " Wide career opportunities across industries",
                  " Ideal for research, teaching, and policy-making",
                  " Growing demand in media, content, and communication roles",
                  " Opportunities in both public and private sectors"                
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-yellow-500 hover:bg-blue-100 transition rounded-xl p-3 text-sm font-medium text-black"
                  >
                    <span className="text-black font-bold">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="mt-8 px-20 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDY ENGINEERING IN INDIA */}
      <section
        id="why-engineering-india"
        className="relative pt-4 pb-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 blur-[130px] rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-sky-300/30 blur-[120px] rounded-full animate-float delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      Why Choose{" "}
      <span className="text-blue-600">PG Humanities in India</span>
    </h2>
    <p className="mt-6 text-lg text-gray-600">
      India offers high-quality Humanities education with diverse subjects,
      strong career opportunities, and a solid foundation for competitive exams,
      making it a top choice for students.
    </p>
  </div>

  <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        icon: "📚",
        title:
          "✔️ Strong foundation for competitive exams (UPSC, UGC-NET, etc.)",
      },
      {
        icon: "💼",
        title: "✔️ Wide career opportunities across industries",
      },
      {
        icon: "🎓",
        title:
          "✔️ Ideal for research, teaching, and policy-making",
      },
      {
        icon: "📰",
        title:
          "✔️ Growing demand in media, content, and communication roles",
      },
      {
        icon: "🏛️",
        title:
          "✔️ Opportunities in both public and private sectors",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-sky-400/20"></div>
        <div className="relative z-10">
          <div className="text-4xl mb-4 group-hover:scale-110 transition">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
            {item.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
</div>

        
      </section>

      {/* M.A HEADING WITH OVERVIEW */}
      <section
        id="btech"
        className="pt-8 pb-1 bg-gradient-to-b from-white via-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Master of{" "}
              <span className="text-blue-600">Arts (MA)</span>
            </h1>
            <p className="pt-7">
            M.A. (Master of Arts) is a postgraduate degree focused on advanced knowledge in subjects like History, Political Science, Sociology, Psychology, and Literature. It helps students develop critical thinking, research skills, and a deep understanding of society and culture.
            </p>
            <p>
            The course duration is 2 years (4 semesters). Eligibility requires a bachelor’s degree (BA or equivalent) with minimum 45–55% marks (varies by university). Admission is based on merit or entrance exams conducted by universities such as CUET-PG and other university-level exams.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR B.TECH SPECIALIZATIONS */}
      <section
  id="specializations"
  className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <div className="inline-block">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Popular{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          M.A Specializations
        </span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
        Explore top postgraduate humanities specializations
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "MA in Psychology",
          icon: "🧠",
          subjects: [
            "Study of human behavior",
            "Mental health",
            "Counseling",
          ],
          career: "Psychologist, Counselor, HR Professional",
        },
        {
          title: "MA in Political Science",
          icon: "🗳️",
          subjects: [
            "Government systems",
            "Public policies",
            "International relations",
          ],
          career: "Civil Services, Policy Analyst",
        },
        {
          title: "MA in Sociology",
          icon: "🌍",
          subjects: [
            "Society",
            "Culture",
            "Social behavior",
          ],
          career: "Social Worker, Researcher",
        },
        {
          title: "MA in English",
          icon: "📖",
          subjects: [
            "Literature",
            "Language",
            "Communication",
          ],
          career: "Content Writer, Editor, Lecturer",
        },
        {
          title: "MA in History",
          icon: "📜",
          subjects: [
            "Historical research",
            "Analysis",
          ],
          career: "Historian, Archivist",
        },
        {
          title: "MA in Journalism & Mass Communication",
          icon: "🎥",
          subjects: [
            "Media",
            "Reporting",
            "Digital communication",
          ],
          career: "Journalist, Media Professional, PR Specialist",
        },
      ].map((spec, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          <div className="p-6">
            <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
              {spec.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {spec.title}
            </h3>
            <ul className="space-y-1 text-gray-600 text-sm mb-3">
              {spec.subjects.map((subject, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {subject}
                </li>
              ))}
            </ul>
            <p className="text-xs text-blue-600 font-medium mt-2">
              Career: {spec.career}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>














      {/* COURSE STRUCTURE SECTION */}
      <section
  id="course-structure"
  className="pt-4 pb-12 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <div className="inline-block">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        M.A{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Course Structure
        </span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
        Key components of postgraduate humanities programs
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          icon: "📚",
          title: "Core Subjects",
          desc: "● Core Subjects (based on specialization)",
        },
        {
          icon: "📖",
          title: "Electives",
          desc: "● Electives",
        },
        {
          icon: "🔬",
          title: "Research Methodology",
          desc: "● Research Methodology",
        },
        {
          icon: "📝",
          title: "Dissertation / Project Work",
          desc: "● Dissertation / Project Work",
        },
        {
          icon: "🏢",
          title: "Internships",
          desc: "● Internships (in some programs)",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          <div className="p-6 text-center">
            <div className="text-5xl mb-3 transform group-hover:scale-110 transition duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>











{/* HIGHER STUDIES SECTION */}
<section className="relative pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
  {/* background effects */}
  <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-emerald-400/20 blur-[130px] rounded-full"></div>
  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#16a34a_1px,transparent_1px)] [background-size:40px_40px]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* heading */}
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
        <span className="text-xl">🎓</span>
        <span className="font-semibold text-blue-700">
          Career Opportunities
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        After <span className="text-blue-600">MA Programs</span>
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        Explore diverse career paths and professional roles after completing your MA
      </p>
    </div>

    {/* options grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {[
        { name: "Teaching & Academics", icon: "🏫" },
        { name: "Civil Services", icon: "🏛️" },
        { name: "Media & Journalism", icon: "📰" },
        { name: "Content Writing & Digital Marketing", icon: "✍️" },
        { name: "NGO & Social Sector", icon: "🌱" },
        { name: "Corporate Roles (HR, PR, Communications)", icon: "💼" },
      ].map((option, idx) => (
        <div
          key={idx}
          className="group bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition">
            {option.icon}
          </div>

          <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition">
            {option.name}
          </p>
        </div>
      ))}
    </div>

    {/* bottom highlight */}
    <div className="mt-16 text-center">
      <div className="inline-block bg-gradient-to-r from-blue-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
        🎯 Unlock Your Potential & Build a Rewarding Career After MA
      </div>
    </div>
  </div>
</section>





















































      {/* DURATION & ELIGIBILITY SECTION */}
      <section className="pt-0 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <h2 className="text-4xl md:text-5xl font-bold">
        Duration & Eligibility for M.A in India
      </h2>
      <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
        Understand the complete duration structure and eligibility
        requirements for pursuing M.A in India
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <button
          onClick={() => setActiveTab("duration")}
          className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
            activeTab === "duration"
              ? "bg-white text-blue-600 shadow-xl scale-105"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          ⏳ Duration
        </button>
        <button
          onClick={() => setActiveTab("eligibility")}
          className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${
            activeTab === "eligibility"
              ? "bg-white text-blue-600 shadow-xl scale-105"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          🎓 Eligibility Criteria
        </button>
      </div>

      <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl text-gray-700">
        {activeTab === "duration" && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
              <img
                src="/image/academic-qualification.jpg"
                className="relative rounded-2xl shadow-lg w-full h-60 object-cover"
                alt="MA Duration"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Course Duration
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                2 Years
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold text-xl">•</span>
                  <span className="text-gray-700">
                     2 years (4 semesters)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "eligibility" && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Eligibility Criteria
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="text-gray-600">
                      ● Bachelor’s degree (BA or equivalent)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-gray-600">
                      ● Minimum 45–50% marks (varies by university)
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">📝</span>
                  <div>
                    <p className="text-gray-600">
                      ● Some universities may conduct entrance exams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section>

      {/* HIGHER STUDIES SECTION */}
      <section className="relative pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
  {/* background effects */}
  <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-emerald-400/20 blur-[130px] rounded-full"></div>
  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#16a34a_1px,transparent_1px)] [background-size:40px_40px]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* heading */}
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
        <span className="text-xl">🚀</span>
        <span className="font-semibold text-blue-700">
          Emerging Careers
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Explore <span className="text-blue-600">Future Opportunities</span>
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        Discover in-demand career paths in modern industries and digital domains
      </p>
    </div>

    {/* options grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {[
        { name: "Policy Research & Think Tanks", icon: "📊" },
        { name: "UX Writing & Content Strategy", icon: "✍️" },
        { name: "Public Relations (PR)", icon: "🗣️" },
        { name: "International Relations & Diplomacy", icon: "🌐" },
        { name: "Digital Media & Branding", icon: "💻" },
      ].map((option, idx) => (
        <div
          key={idx}
          className="group bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition">
            {option.icon}
          </div>

          <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition">
            {option.name}
          </p>
        </div>
      ))}
    </div>

    {/* bottom highlight */}
    <div className="mt-16 text-center">
      <div className="inline-block bg-gradient-to-r from-blue-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
        🎯 Step Into Emerging Careers & Make Your Mark
      </div>
    </div>
  </div>
</section>

      {/* ADMISSION PROCESS SECTION */}
      <section
  id="admission-process"
  className="pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white"
>
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <div className="inline-block">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Admission Process for{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          PG Humanities
        </span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
        Step-by-step guide to secure admission in top universities for PG Humanities
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
    </div>

    <div className="space-y-6">
      {[
        {
          step: 1,
          title: "Apply to Universities",
          icon: "📝",
          color: "from-blue-500 to-blue-600",
          desc: "Submit your application forms online or offline to the universities of your choice.",
          detail: "Ensure all personal, academic, and document details are accurate.",
        },
        {
          step: 2,
          title: "Entrance Exam / Merit-based Selection",
          icon: "📚",
          color: "from-indigo-500 to-indigo-600",
          desc: "Some universities conduct entrance exams; others may admit based on your academic merit.",
          detail: "Check the university website for exam syllabus, dates, and merit criteria.",
        },
        {
          step: 3,
          title: "Personal Interview (if applicable)",
          icon: "🗣️",
          color: "from-purple-500 to-purple-600",
          desc: "Certain institutes may conduct a personal interview or group discussion.",
          detail: "Prepare for questions on your academic background and career goals.",
        },
        {
          step: 4,
          title: "Admission Confirmation",
          icon: "✅",
          color: "from-pink-500 to-pink-600",
          desc: "Pay the admission fees and complete all formalities to secure your seat.",
          detail: "Keep all documents ready for verification during admission.",
        },
      ].map((item) => (
        <div
          key={item.step}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
          <div className="flex flex-col md:flex-row">
            <div
              className={`md:w-1/4 bg-gradient-to-br ${item.color} p-6 flex items-center justify-center`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-3 mx-auto">
                  {item.icon}
                </div>
                <div className="text-white text-2xl font-bold">
                  Step 0{item.step}
                </div>
              </div>
            </div>
            <div className="md:w-3/4 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {item.desc}
              </p>
              <div
                className={`bg-${item.color.split("-")[1]}-50 rounded-lg p-4 border-l-4 border-${item.color.split("-")[1]}-500`}
              >
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">📌 Key Point:</span>{" "}
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 grid md:grid-cols-3 gap-4">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5">
        <div className="flex items-center gap-3">
          <div className="text-3xl">📅</div>
          <div>
            <h4 className="font-bold text-gray-800">Important Dates</h4>
            <p className="text-sm text-gray-600">
              Varies by university – check official admission portals
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-5">
        <div className="flex items-center gap-3">
          <div className="text-3xl">📄</div>
          <div>
            <h4 className="font-bold text-gray-800">Documents Required</h4>
            <p className="text-sm text-gray-600">
              Bachelor's marksheets, degree certificate, statement of purpose, recommendation letters
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-5">
        <div className="flex items-center gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-gray-800">Pro Tip</h4>
            <p className="text-sm text-gray-600">
              Research university-specific requirements before applying
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-12 text-center">
      <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
        Get Expert Admission Guidance →
      </button>
    </div>
  </div>
</section>






      {/* FEE STRUCTURE SECTION */}
      <section
  id="fee-structure"
  className="pt-6 pb-8 bg-gradient-to-b from-white via-blue-50 to-white"
>
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
        <span className="text-blue-600 text-sm font-semibold">
          💰 Fee Overview
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Fee Structure <br />
        <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
          (General Overview)
        </span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Understand the approximate fee range for PG Humanities courses across different universities
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Government Colleges */}
      <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        <div className="p-8 text-center">
          <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
            <span className="text-4xl">🏛️</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Government Colleges
          </h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold text-blue-600">₹10,000</span>
            <span className="text-xl text-gray-500"> – </span>
            <span className="text-4xl font-bold text-blue-600">₹1,00,000</span>
          </div>
          <p className="text-gray-500">per year</p>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <ul className="space-y-2 text-left">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-500">✓</span> Affordable fee range
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-500">✓</span> Scholarships may be available
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Private Colleges */}
      <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="p-8 text-center">
          <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
            <span className="text-4xl">🏫</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Private Colleges
          </h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold text-purple-600">₹50,000</span>
            <span className="text-xl text-gray-500"> – </span>
            <span className="text-4xl font-bold text-purple-600">₹3,00,000</span>
          </div>
          <p className="text-gray-500">per year</p>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <ul className="space-y-2 text-left">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-500">✓</span> Modern facilities & infrastructure
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-500">✓</span> Scholarships & loan options
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Important Note */}
    <div className="mt-12 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500">
        <div className="flex items-start gap-4">
          <div className="text-3xl">📌</div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">
              Important Note
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fees vary by college, course, and university. Additional charges may include hostel, library, and other miscellaneous fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>











<section className="relative pt-6 pb-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
  {/* background effects */}
  <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-emerald-400/20 blur-[130px] rounded-full"></div>
  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#16a34a_1px,transparent_1px)] [background-size:40px_40px]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* heading */}
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
        <span className="text-xl">📜</span>
        <span className="font-semibold text-blue-700">
          Other PG Humanities Programs
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Explore <span className="text-blue-600">MSW (Master of Social Work)</span>
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        Focused on social service, community development, and welfare programs
      </p>
    </div>

    {/* options grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {[
        { name: "NGO Professional", icon: "🌱" },
        { name: "Social Worker", icon: "🧑‍🤝‍🧑" },
        { name: "CSR Roles in Companies", icon: "🏢" },
      ].map((option, idx) => (
        <div
          key={idx}
          className="group bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition">
            {option.icon}
          </div>

          <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition">
            {option.name}
          </p>
        </div>
      ))}
    </div>

    {/* bottom highlight */}
    <div className="mt-16 text-center">
      <div className="inline-block bg-gradient-to-r from-blue-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
        🎯 Build a Rewarding Career in Social Work & Community Development
      </div>
    </div>
  </div>
</section>
























































      {/* CAREER OPPORTUNITIES & TOP RECRUITERS */}
      <section
  id="career-scope"
  className="pt-10 bg-gradient-to-b from-white via-blue-50 to-white"
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Career <span className="text-blue-600">Opportunities</span> After MJMC
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Specialized program in media, journalism, and communication opens diverse roles
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
    </div>

    {/* Career Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {[
        {
          title: "Journalist",
          icon: "📰",
          description:
            "Report news, write articles, and create content for print, digital, or broadcast media",
        },
        {
          title: "News Anchor",
          icon: "🎤",
          description:
            "Present news on TV, radio, or digital platforms with clarity and professionalism",
        },
        {
          title: "Media Manager",
          icon: "📺",
          description:
            "Plan, manage, and oversee media campaigns and communication strategies",
        },
      ].map((career, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

          <div className="p-6 text-center">
            <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">
              {career.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {career.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {career.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>






      {/* TOP Higher Education */}
      <section className="relative pt-10 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
  {/* background effects */}
  <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full"></div>
  <div className="absolute top-20 -right-32 w-[500px] h-[500px] bg-indigo-400/20 blur-[130px] rounded-full"></div>
  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* heading */}
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4 shadow-sm">
        <span className="text-xl">🎓</span>
        <span className="font-semibold text-blue-700">
          Higher Education Options
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        After PG Humanities, Students Can Pursue:
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        Choose from advanced research, competitive exams, and specialized certifications to boost your career.
      </p>
    </div>

    {/* options grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
        {
          name: "PhD (Doctorate)",
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/PhD_icon.svg",
        },
        {
          name: "UGC-NET / JRF",
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/NET_icon.svg",
        },
        {
          name: "Digital Marketing Certification",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Digital_marketing_icon.svg",
        },
        {
          name: "Psychology Certification",
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Psychology_icon.svg",
        },
      ].map((option, idx) => (
        <div
          key={idx}
          className="group bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
        >
          <div className="h-12 flex items-center mb-4">
            <img
              src={option.icon}
              alt={option.name}
              className="h-full object-contain grayscale group-hover:grayscale-0 transition duration-300"
            />
          </div>

          <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition">
            {option.name}
          </p>
        </div>
      ))}
    </div>

    {/* bottom highlight */}
    <div className="mt-16 text-center">
      <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
        🚀 Advance your career with research, competitive exams & certifications
      </div>
    </div>
  </div>
</section>







      {/* WHY CHOOSE US SECTION */}
      <section
  id="why-choose-us"
  className="pt-12 pb-12 bg-gradient-to-b from-white via-blue-50 to-white"
>
  <div className="max-w-6xl mx-auto px-4 md:px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Image Section */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
        <img
          src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
          alt="PG Humanities Admission Guidance"
          className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
        />
        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🏆</span>
            <div>
              <p className="font-bold text-gray-800">Trusted by</p>
              <p className="text-2xl font-bold text-blue-600">15,000+</p>
              <p className="text-xs text-gray-500">Students & Parents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content Section */}
      <div>
        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
          <span className="text-blue-600 text-sm font-semibold">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Your Trusted Partner for <br />
          <span className="text-blue-600">
            PG Humanities Admission Guidance
          </span>
        </h2>
        <p className="text-gray-600 mb-6">
          We provide personalized support to help you achieve your academic
          and research goals in humanities with confidence.
        </p>

        <div className="space-y-4">
          {[
            "✔️ Career clarity & specialization guidance",
            "✔️ University shortlisting based on your goals",
            "✔️ Admission assistance",
            "✔️ Guidance for competitive exams & research careers",
            "✔️ Personalized counselling",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          Start Your Journey →
        </button>
      </div>
    </div>
  </div>
</section>




      {/* FAQ SECTION */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  {[
    {
      q: "What is PG Humanities and why is it important?",
      a: "PG Humanities programs are postgraduate degrees that allow students to gain advanced knowledge, research skills, and specialization in fields like History, Political Science, Sociology, Psychology, English Literature, and Philosophy. They prepare students for academic, research, and professional careers.",
    },
    {
      q: "What is the duration of a PG Humanities course?",
      a: "Most PG Humanities programs are 2-year postgraduate courses divided into 4 semesters.",
    },
    {
      q: "What is the eligibility criteria for PG Humanities?",
      a: "Candidates must have completed a Bachelor’s degree (BA or equivalent) with minimum 45–50% marks. Some universities may require entrance exams for certain specializations.",
    },
    {
      q: "What is the fee structure for PG Humanities programs?",
      a: "Government universities: ₹5,000–50,000 per year. Private universities: ₹50,000–2,00,000 per year (varies by institution).",
    },
    {
      q: "What are the career opportunities after PG Humanities?",
      a: "Career options include Lecturer, Researcher, Content Writer, Policy Analyst, NGO roles, Civil Services, Journalist, Cultural Expert, Archivist, and more depending on specialization.",
    },
    {
      q: "How does the PG Humanities admission process work?",
      a: "Admissions can be merit-based or through entrance exams conducted by universities. After selection, candidates complete document verification and fee payment to confirm admission.",
    },
  ].map((faq, idx) => (
    <div
      key={idx}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="border-l-4 border-blue-500">
        <button className="faq-question w-full text-left p-6 flex justify-between items-center">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">
                {faq.q}
              </h3>
            </div>
          </div>
          <svg
            className="w-5 h-5 text-gray-400 transform transition-transform duration-300 faq-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="faq-answer max-h-0 overflow-hidden transition-all duration-300">
          <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
            <p>{faq.a}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>





      {/* CTA SECTION */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="medical-pattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="2" fill="white" />
                <path
                  d="M30 10 L30 50 M10 30 L50 30"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#medical-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
    <svg
      className="w-5 h-5 text-white animate-pulse"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-white text-sm font-semibold tracking-wide">
      LIMITED SEATS AVAILABLE
    </span>
  </div>

  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
    Not sure what to do after BA?
    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-300">
      Get Expert Guidance
    </span>
  </h2>

  <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
      <p className="text-white text-sm">
        👉 Get expert guidance on the right MA specialization
      </p>
    </div>
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
      <p className="text-white text-sm">
        👉 Explore career paths aligned with your interests
      </p>
    </div>
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
      <p className="text-white text-sm">
        👉 Secure admission in top universities
      </p>
    </div>
  </div>

  <div className="flex flex-wrap justify-center gap-5">
    <button className="group relative bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <span className="relative z-10 flex items-center gap-2">
        📲 Book your FREE counselling session today!
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  </div>
</div>
      </section>





      <script
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('DOMContentLoaded', function() { const faqQuestions = document.querySelectorAll('.faq-question'); faqQuestions.forEach(question => { question.addEventListener('click', () => { const answer = question.nextElementSibling; const icon = question.querySelector('.faq-icon'); document.querySelectorAll('.faq-answer').forEach(item => { if (item !== answer) { item.style.maxHeight = null; const otherIcon = item.previousElementSibling.querySelector('.faq-icon'); if (otherIcon) otherIcon.style.transform = 'rotate(0deg)'; } }); if (answer.style.maxHeight) { answer.style.maxHeight = null; icon.style.transform = 'rotate(0deg)'; } else { answer.style.maxHeight = answer.scrollHeight + 'px'; icon.style.transform = 'rotate(180deg)'; } }); }); });`,
        }}
      />

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
