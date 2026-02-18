
import { FaBriefcase, FaHome, FaUserGraduate } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
function PG() {
    return (
        <>
 <div className="flex flex-col items-center justify-center w-full pt-20 pb-20 bg-white">
                 
                   {/* HEADING */}
                   <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-24 text-center">
                     <span className="text-[#0A5585] text-xl sm:text-2xl font-bold">
                       Post Graduate
                     </span>
                 
                     <p
                       className="text-black text-2xl sm:text-3xl md:text-4xl 
                       font-bold pt-3 pb-6 max-w-3xl"
                     >
                       Post Graduate Medical Professional
                     </p>
                 
                     <p className="text-black text-base sm:text-lg md:text-xl pt-3 max-w-4xl">
                       Our commitment doesn’t end with admission. We provide end-to-end
                       support—from accommodation assistance and career mentoring to
                       internships and placement preparation.
                     </p>
                   </div>
                 
                 
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-16 pt-8">
                 
                     
                     <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition">
                       <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                         <FaHome className="text-[#0A5585] text-xl" />
                       </div>
                 
                       <h3 className="text-lg font-semibold text-black">
                         Hostel & Accommodation Support
                       </h3>
                 
                       <p className="text-gray-600 text-sm leading-relaxed">
                         Verified hostel and PG assistance near your college for a safe and comfortable stay.
                       </p>
                     </div>
                 
                    
                     <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition">
                       <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                         <FaUserGraduate className="text-[#0A5585] text-xl" />
                       </div>
                 
                       <h3 className="text-lg font-semibold text-black">
                         Career Guidance & Mentorship
                       </h3>
                 
                       <p className="text-gray-600 text-sm leading-relaxed">
                         Personalized career roadmaps, skill guidance, and future growth planning.
                       </p>
                     </div>
                 
                     
                     <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition">
                       <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                         <FaBriefcase className="text-[#0A5585] text-xl" />
                       </div>
                 
                       <h3 className="text-lg font-semibold text-black">
                         Internship & Industry Exposure
                       </h3>
                 
                       <p className="text-gray-600 text-sm leading-relaxed">
                         Access to internships, live projects, and industry connections for real-world experience.
                       </p>
                     </div>
                 
                    
                     <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition">
                       <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                         <FaChartLine className="text-[#0A5585] text-xl" />
                       </div>
                 
                       <h3 className="text-lg font-semibold text-black">
                         Placement Preparation
                       </h3>
                 
                       <p className="text-gray-600 text-sm leading-relaxed">
                         Resume building, mock interviews, and placement readiness programs.
                       </p>
                     </div>
                 
                   </div>
                 </div>
        </>
    )
}   
export default PG;
