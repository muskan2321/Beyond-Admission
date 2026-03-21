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

function BMS() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-3xl sm:text-5xl font-bold">
            BMS Admission in India
          </h1>

          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Complete guidance for BMS admissions in top universities and private
            colleges across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold">
              Apply for BMS
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Free Counselling
            </button>
          </div>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2 pt-10">
          <span className="text-blue-500 text-xl font-semibold">
            Explore Your Career
          </span>
          <span className="text-black font-semibold text-xl">
            BMS Specializations
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-12 lg:px-16">
          {[
            "Marketing Management",
            "Finance Management",
            "Human Resource",
            "International Business",
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-blue-600 p-3 rounded-xl text-white">
                  <FaGraduationCap />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{item}</h3>
              </div>

              <p className="text-slate-500 text-sm">
                Build expertise and leadership skills in {item}.
              </p>

              <button className="mt-6 w-full py-2.5 bg-slate-50 text-blue-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
                Explore <FaChevronRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* PREMIUM SERVICES */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Why Choose BMS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <FaSearch className="text-3xl text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Industry Exposure</h3>
              <p className="text-gray-500 text-sm">
                Get hands-on experience with internships & live projects.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <MdOutlineStackedBarChart className="text-3xl text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">High Placement Scope</h3>
              <p className="text-gray-500 text-sm">
                Excellent career opportunities in corporate & startups.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <MdNoteAlt className="text-3xl text-green-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Entrepreneurial Skills</h3>
              <p className="text-gray-500 text-sm">
                Develop leadership & business decision-making skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLEGE CARD SAMPLE */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Top BMS Colleges
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 grid md:grid-cols-2 gap-6">
            <img
              src="/image/mba-1.jpg"
              className="rounded-xl object-cover"
              alt="College"
            />

            <ul className="space-y-4 border rounded-xl p-4">
              <li className="flex gap-3">
                <FaStickyNote className="text-indigo-600" />
                <span>
                  <b>Program:</b> BMS
                </span>
              </li>

              <li className="flex gap-3">
                <FaMoneyBillWave className="text-green-600" />
                <span>
                  <b>Fees:</b> ₹3.5 Lakh
                </span>
              </li>

              <li className="flex gap-3">
                <FaUniversity className="text-blue-600" />
                <span>
                  <b>Campus:</b> Mumbai
                </span>
              </li>

              <li className="flex gap-3">
                <MdSavings className="text-amber-600" />
                <span>
                  <b>Average Package:</b> 8 LPA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="w-full bg-gradient-to-br from-blue-600 to-blue-400 px-4 py-20 text-center text-white">
        <h1 className="text-4xl font-semibold">Start Your BMS Journey Today</h1>
        <p className="mt-4 text-lg">
          Get expert guidance & secure admission in top management colleges.
        </p>
      </div>
    </>
  );
}

export default BMS;
