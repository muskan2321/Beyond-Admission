import {
  FaStickyNote,
  FaUniversity,
  FaMoneyBillWave,
  FaSearch,
  FaGraduationCap,
  FaChevronRight,
} from "react-icons/fa";
import { MdOutlineStackedBarChart, MdSavings } from "react-icons/md";

function MCA() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">
            MCA Admission in India
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Complete guidance for MCA admissions through NIMCET, state entrance
            exams & direct admission.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold">
              Apply for MCA
            </button>
            <button className="border px-6 py-3 rounded-lg">
              Free Counselling
            </button>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">MCA Specializations</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[
            "Software Development",
            "Data Science",
            "Cyber Security",
            "AI & ML",
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-lg p-6 rounded-2xl">
              <FaGraduationCap className="text-3xl text-indigo-600 mb-4" />
              <h3 className="font-bold text-lg">{item}</h3>
              <button className="mt-4 text-indigo-600 flex items-center gap-2">
                Explore <FaChevronRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY MCA */}
      <section className="bg-gray-50 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <FaSearch className="text-3xl text-indigo-600 mb-4" />
            <h3 className="font-bold text-xl mb-2">IT Industry Demand</h3>
            <p className="text-gray-500 text-sm">
              High demand for software & IT professionals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <MdOutlineStackedBarChart className="text-3xl text-purple-600 mb-4" />
            <h3 className="font-bold text-xl mb-2">Tech Career Growth</h3>
            <p className="text-gray-500 text-sm">
              Rapid career progression in tech companies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <MdSavings className="text-3xl text-green-600 mb-4" />
            <h3 className="font-bold text-xl mb-2">Global Opportunities</h3>
            <p className="text-gray-500 text-sm">Work in top MNCs worldwide.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MCA;
