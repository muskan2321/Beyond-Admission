import { FaGraduationCap, FaChevronRight } from "react-icons/fa";

function MHMS() {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">MHMS Admission in India</h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Advanced Homeopathy specialization after BHMS through AIAPGET.
          </p>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">MHMS Specializations</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[
            "Materia Medica",
            "Repertory",
            "Organon",
            "Homeopathic Pharmacy",
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-lg p-6 rounded-2xl">
              <FaGraduationCap className="text-3xl text-purple-600 mb-4" />
              <h3 className="font-bold">{item}</h3>
              <button className="mt-4 text-purple-600 flex items-center gap-2">
                Explore <FaChevronRight />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default MHMS;
