import {
  FaStickyNote,
  FaUniversity,
  FaMoneyBillWave,
  FaSearch,
  FaGraduationCap,
  FaChevronRight,
} from "react-icons/fa";

import { MdNoteAlt, MdOutlineStackedBarChart, MdSavings } from "react-icons/md";

function BHMS() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-3xl sm:text-5xl font-bold">
            BHMS Admission in India
          </h1>

          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Complete guidance for BHMS admissions through NEET and state-level
            counselling in top Homeopathy colleges across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold">
              Apply for BHMS
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Free Counselling
            </button>
          </div>
        </div>
      </section>

      {/* SPECIALIZATION SECTION */}
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2 pt-10">
          <span className="text-purple-600 text-xl font-semibold">
            Explore Homeopathy Fields
          </span>
          <span className="text-black font-semibold text-xl">
            BHMS Career Options
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-12 lg:px-16">
          {[
            "Clinical Practice",
            "Homeopathic Research",
            "Public Health",
            "Pharmaceutical Industry",
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-purple-600 p-3 rounded-xl text-white">
                  <FaGraduationCap />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{item}</h3>
              </div>

              <p className="text-slate-500 text-sm">
                Build holistic healing expertise in {item}.
              </p>

              <button className="mt-6 w-full py-2.5 bg-slate-50 text-purple-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-purple-600 hover:text-white transition-all">
                Explore <FaChevronRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WHY BHMS */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Why Choose BHMS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <FaSearch className="text-3xl text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">
                Growing Alternative Medicine
              </h3>
              <p className="text-gray-500 text-sm">
                Homeopathy is gaining popularity worldwide for safe treatment.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <MdOutlineStackedBarChart className="text-3xl text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Independent Practice</h3>
              <p className="text-gray-500 text-sm">
                Start your own clinic after graduation.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <MdNoteAlt className="text-3xl text-green-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">
                Holistic Healing Approach
              </h3>
              <p className="text-gray-500 text-sm">
                Treat patients using natural & side-effect free medicines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOP COLLEGE CARD */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Top BHMS Colleges
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 grid md:grid-cols-2 gap-6">
            <img
              src="/image/homeopathy.jpg"
              className="rounded-xl object-cover"
              alt="Homeopathy College"
            />

            <ul className="space-y-4 border rounded-xl p-4">
              <li className="flex gap-3">
                <FaStickyNote className="text-purple-600" />
                <span>
                  <b>Program:</b> BHMS
                </span>
              </li>

              <li className="flex gap-3">
                <FaMoneyBillWave className="text-green-600" />
                <span>
                  <b>Fees:</b> ₹2 – 3 Lakh / Year
                </span>
              </li>

              <li className="flex gap-3">
                <FaUniversity className="text-blue-600" />
                <span>
                  <b>Campus:</b> Kolkata
                </span>
              </li>

              <li className="flex gap-3">
                <MdSavings className="text-amber-600" />
                <span>
                  <b>Average Package:</b> 5 – 7 LPA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="w-full bg-gradient-to-br from-purple-600 to-indigo-400 px-4 py-20 text-center text-white">
        <h1 className="text-4xl font-semibold">
          Start Your Homeopathy Career Today
        </h1>
        <p className="mt-4 text-lg">
          Secure admission in top BHMS colleges with expert guidance.
        </p>
      </div>
    </>
  );
}

export default BHMS;
