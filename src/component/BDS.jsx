import {
  FaStickyNote,
  FaUniversity,
  FaMoneyBillWave,
  FaFacebookMessenger,
  FaStackExchange,
  FaHashtag,
  FaSearch,
  FaFileAlt,
  FaBuilding,
  FaGraduationCap,
  FaBookOpen,
  FaChevronRight,
} from "react-icons/fa";

import { FaGoogleScholar } from "react-icons/fa6";
import { MdNoteAlt, MdOutlineStackedBarChart, MdSavings } from "react-icons/md";

function BDS() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-teal-900 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-3xl sm:text-5xl font-bold">
            BDS Admission in India
          </h1>

          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Complete guidance for BDS admissions through NEET and state-level
            counselling in top dental colleges across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold">
              Apply for BDS
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
          <span className="text-teal-600 text-xl font-semibold">
            Explore Dental Fields
          </span>
          <span className="text-black font-semibold text-xl">
            BDS Career Options
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-12 lg:px-16">
          {[
            "Oral Surgery",
            "Orthodontics",
            "Periodontics",
            "Prosthodontics",
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-teal-600 p-3 rounded-xl text-white">
                  <FaGraduationCap />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{item}</h3>
              </div>

              <p className="text-slate-500 text-sm">
                Build expertise and clinical skills in {item}.
              </p>

              <button className="mt-6 w-full py-2.5 bg-slate-50 text-teal-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-teal-600 hover:text-white transition-all">
                Explore <FaChevronRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WHY BDS */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Why Choose BDS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <FaSearch className="text-3xl text-teal-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">High Demand Career</h3>
              <p className="text-gray-500 text-sm">
                Dentists are in constant demand in hospitals & private clinics.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <MdOutlineStackedBarChart className="text-3xl text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">
                Attractive Salary Packages
              </h3>
              <p className="text-gray-500 text-sm">
                Earn competitive income through private practice & hospitals.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <MdNoteAlt className="text-3xl text-green-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">
                Global Career Opportunities
              </h3>
              <p className="text-gray-500 text-sm">
                Work abroad after clearing respective licensing exams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOP COLLEGE CARD */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Top BDS Colleges
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 grid md:grid-cols-2 gap-6">
            <img
              src="/image/medical-1.jpg"
              className="rounded-xl object-cover"
              alt="Dental College"
            />

            <ul className="space-y-4 border rounded-xl p-4">
              <li className="flex gap-3">
                <FaStickyNote className="text-teal-600" />
                <span>
                  <b>Program:</b> BDS
                </span>
              </li>

              <li className="flex gap-3">
                <FaMoneyBillWave className="text-green-600" />
                <span>
                  <b>Fees:</b> ₹4 – 6 Lakh / Year
                </span>
              </li>

              <li className="flex gap-3">
                <FaUniversity className="text-blue-600" />
                <span>
                  <b>Campus:</b> Delhi
                </span>
              </li>

              <li className="flex gap-3">
                <MdSavings className="text-amber-600" />
                <span>
                  <b>Average Package:</b> 10 LPA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="w-full bg-gradient-to-br from-teal-600 to-teal-400 px-4 py-20 text-center text-white">
        <h1 className="text-4xl font-semibold">
          Start Your Dental Career Today
        </h1>
        <p className="mt-4 text-lg">
          Get expert guidance & secure admission in top dental colleges.
        </p>
      </div>
    </>
  );
}

export default BDS;
