import {
  FaBriefcase,
  FaChartLine,
  FaHome,
  FaUserGraduate,
} from "react-icons/fa";

import { FaUserDoctor } from "react-icons/fa6";

import { IoCheckmarkCircle } from "react-icons/io5";

function MD() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">
            MD / MS Admission in India
          </h1>

          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Complete guidance for MD & MS admissions through NEET PG and state
            counselling in top medical colleges.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold">
              Apply for MD/MS
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Free Counselling
            </button>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">MD / MS Specializations</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[
            "MD General Medicine",
            "MD Pediatrics",
            "MS General Surgery",
            "MS Orthopedics",
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-lg p-6 rounded-2xl">
              <FaUserDoctor className="text-3xl text-blue-600 mb-4" />
              <h3 className="font-bold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY MD/MS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose MD / MS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <IoCheckmarkCircle className="text-3xl text-green-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">
                Advanced Medical Expertise
              </h3>
              <p className="text-gray-500 text-sm">
                Deep specialization in medical & surgical fields.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <IoCheckmarkCircle className="text-3xl text-green-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Higher Salary Packages</h3>
              <p className="text-gray-500 text-sm">
                Specialists earn significantly higher income.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <IoCheckmarkCircle className="text-3xl text-green-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">
                Government & Private Opportunities
              </h3>
              <p className="text-gray-500 text-sm">
                Work in top hospitals, research centers & clinics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR EXISTING SUPPORT SECTION */}
      <div className="flex flex-col items-center justify-center w-full pt-20 pb-20 bg-white">
        <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-24 text-center">
          <span className="text-[#0A5585] text-xl sm:text-2xl font-bold">
            MD / MS
          </span>

          <p className="text-black text-2xl sm:text-3xl md:text-4xl font-bold pt-3 pb-6 max-w-3xl">
            Post Graduate Medical Professional
          </p>

          <p className="text-black text-base sm:text-lg md:text-xl pt-3 max-w-4xl">
            Our commitment doesn’t end with admission. We provide end-to-end
            support—from accommodation assistance and career mentoring to
            internships and placement preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-16 pt-8">
          <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col gap-4">
            <FaHome className="text-[#0A5585] text-xl" />
            <h3 className="font-semibold">Hostel Support</h3>
            <p className="text-sm text-gray-600">
              Safe & verified accommodation assistance.
            </p>
          </div>

          <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col gap-4">
            <FaUserGraduate className="text-[#0A5585] text-xl" />
            <h3 className="font-semibold">Mentorship</h3>
            <p className="text-sm text-gray-600">
              Career planning & professional mentoring.
            </p>
          </div>

          <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col gap-4">
            <FaBriefcase className="text-[#0A5585] text-xl" />
            <h3 className="font-semibold">Internship</h3>
            <p className="text-sm text-gray-600">
              Real-world hospital exposure.
            </p>
          </div>

          <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col gap-4">
            <FaChartLine className="text-[#0A5585] text-xl" />
            <h3 className="font-semibold">Placement Prep</h3>
            <p className="text-sm text-gray-600">
              Resume & interview preparation.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold">Become a Specialist Doctor Today</h2>
        <p className="mt-4 text-lg">
          Secure admission in top MD/MS colleges with expert guidance.
        </p>
      </div>
    </>
  );
}

export default MD;
