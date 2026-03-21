import { FaGraduationCap, FaChevronRight } from "react-icons/fa";
import { MdOutlineStackedBarChart } from "react-icons/md";

function MAMS() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-900 to-emerald-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">MAMS Admission in India</h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Advanced Ayurvedic specialization after BAMS through AIAPGET.
          </p>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">MAMS Specializations</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {["Panchakarma", "Kayachikitsa", "Dravyaguna", "Shalya Tantra"].map(
            (item, i) => (
              <div key={i} className="bg-white shadow-lg p-6 rounded-2xl">
                <FaGraduationCap className="text-3xl text-emerald-600 mb-4" />
                <h3 className="font-bold">{item}</h3>
                <button className="mt-4 text-emerald-600 flex items-center gap-2">
                  Explore <FaChevronRight />
                </button>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  );
}

export default MAMS;
