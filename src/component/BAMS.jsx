import {
  FaStickyNote,
  FaUniversity,
  FaMoneyBillWave,
  FaSearch,
  FaGraduationCap,
  FaChevronRight,
} from "react-icons/fa";

import { MdNoteAlt, MdOutlineStackedBarChart, MdSavings } from "react-icons/md";

function BAMS() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-green-900 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-3xl sm:text-5xl font-bold">
            BAMS Admission in India
          </h1>

          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Complete guidance for BAMS admissions through NEET and state-level
            counselling in top Ayurvedic medical colleges across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold">
              Apply for BAMS
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
          <span className="text-emerald-600 text-xl font-semibold">
            Explore Ayurvedic Fields
          </span>
          <span className="text-black font-semibold text-xl">
            BAMS Career Options
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-12 lg:px-16">
          {[
            "Panchakarma Therapy",
            "Ayurvedic Surgery",
            "Herbal Medicine",
            "Ayurvedic Physician",
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-emerald-600 p-3 rounded-xl text-white">
                  <FaGraduationCap />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{item}</h3>
              </div>

              <p className="text-slate-500 text-sm">
                Develop expertise and healing skills in {item}.
              </p>

              <button className="mt-6 w-full py-2.5 bg-slate-50 text-emerald-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-600 hover:text-white transition-all">
                Explore <FaChevronRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WHY BAMS */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Why Choose BAMS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <FaSearch className="text-3xl text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">
                Growing Healthcare Sector
              </h3>
              <p className="text-gray-500 text-sm">
                Ayurveda is rapidly growing in India and internationally.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <MdOutlineStackedBarChart className="text-3xl text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">
                Private Practice Opportunity
              </h3>
              <p className="text-gray-500 text-sm">
                Start your own Ayurvedic clinic after graduation.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <MdNoteAlt className="text-3xl text-green-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">
                Natural Healing Science
              </h3>
              <p className="text-gray-500 text-sm">
                Practice holistic medicine based on ancient Indian knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOP COLLEGE CARD */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Top BAMS Colleges
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 grid md:grid-cols-2 gap-6">
            <img
              src="/image/ayurveda.jpg"
              className="rounded-xl object-cover"
              alt="Ayurvedic College"
            />

            <ul className="space-y-4 border rounded-xl p-4">
              <li className="flex gap-3">
                <FaStickyNote className="text-emerald-600" />
                <span>
                  <b>Program:</b> BAMS
                </span>
              </li>

              <li className="flex gap-3">
                <FaMoneyBillWave className="text-green-600" />
                <span>
                  <b>Fees:</b> ₹2 – 4 Lakh / Year
                </span>
              </li>

              <li className="flex gap-3">
                <FaUniversity className="text-blue-600" />
                <span>
                  <b>Campus:</b> Kerala
                </span>
              </li>

              <li className="flex gap-3">
                <MdSavings className="text-amber-600" />
                <span>
                  <b>Average Package:</b> 6 – 8 LPA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="w-full bg-gradient-to-br from-emerald-600 to-green-400 px-4 py-20 text-center text-white">
        <h1 className="text-4xl font-semibold">
          Begin Your Ayurvedic Career Today
        </h1>
        <p className="mt-4 text-lg">
          Secure admission in top BAMS colleges with expert counselling.
        </p>
      </div>
    </>
  );
}

export default BAMS;
