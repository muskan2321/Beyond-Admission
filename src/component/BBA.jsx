import { FaStickyNote, FaUniversity, FaMoneyBillWave, FaFacebookMessenger, FaStackExchange, FaHashtag, FaSearch } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdNoteAlt, MdOutlineStackedBarChart, MdSavings } from "react-icons/md";
import {
  FaFileAlt,
  FaBuilding,
  FaGraduationCap,
  FaBookOpen,
  FaChevronRight,
} from "react-icons/fa";


function BBA(){
    return(
        <>
            
           <section className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <h1 className="text-3xl sm:text-5xl font-bold">
      MBA Admission in India
    </h1>

    <p className="mt-4 text-lg text-white/80 max-w-2xl">
      Complete guidance for MBA admissions through
      CAT, XAT, CMAT, MAT & State-Level Counselling.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
      <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold">
        Apply for MBA
      </button>
      <button className="border px-6 py-3 rounded-lg">
        Free Counselling
      </button>
    </div>
  </div>
</section>
    
     <div className="flex flex-col gap-8 items-center justify-center  ">
                    <div className="flex flex-col items-center justify-center gap-2 pt-10  ">
                <span className="text-blue-500 text-xl font-semibold">Find Your Future</span>
                <span className="text-black font-semibold text-xl">Explore Programs</span>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  px-4 sm:px-12 lg:px-16">

     
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full border border-slate-100">
        <div className="flex items-center gap-4 mb-5">
          <div className="bg-blue-600 p-3 rounded-xl shadow-lg text-white group-hover:scale-110 transition-transform">
            <FaFileAlt className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">Entrance Exams</h3>
        </div>

        <p className="text-slate-500 text-sm mb-5">
          Get deep insights into exam dates, syllabus, and preparation strategies.
        </p>

        <div className="space-y-3 flex-grow">
          <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer">
            • Download Sample Papers
          </div>
          <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer">
            • Mock Test Series
          </div>
        </div>

        <button className="mt-6 w-full py-2.5 bg-slate-50 text-blue-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
          Explore all Exams <FaChevronRight />
        </button>
      </div>

   
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full border border-slate-100">
        <div className="flex items-center gap-4 mb-5">
          <div className="bg-blue-600 p-3 rounded-xl shadow-lg text-white group-hover:scale-110 transition-transform">
            <FaBuilding className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">Top Colleges</h3>
        </div>

        <p className="text-slate-500 text-sm mb-5">
          Browse top-rated institutions based on placement and infrastructure.
        </p>

        <div className="space-y-3 flex-grow">
          <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer">
            • Top Colleges in Bangalore
          </div>
          <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer">
            • Top Colleges in Pune
          </div>
        </div>

        <button className="mt-6 w-full py-2.5 bg-slate-50 text-blue-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
          Browse All Colleges <FaChevronRight />
        </button>
      </div>

     
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full border border-slate-100">
        <div className="flex items-center gap-4 mb-5">
          <div className="bg-blue-600 p-3 rounded-xl shadow-lg text-white group-hover:scale-110 transition-transform">
            <FaGraduationCap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            Admission Predictor
          </h3>
        </div>

        <p className="text-slate-500 text-sm mb-5">
          Evaluate your chances of admission in top colleges based on your scores.
        </p>

        <div className="space-y-3 flex-grow">
          <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer">
            • CAT Rank Predictor
          </div>
          <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer">
            • MBA College Predictor
          </div>
        </div>

        <button className="mt-6 w-full py-2.5 bg-slate-50 text-blue-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
          Predict Now <FaChevronRight />
        </button>
      </div>

      
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full border border-slate-100">
        <div className="flex items-center gap-4 mb-5">
          <div className="bg-blue-600 p-3 rounded-xl shadow-lg text-white group-hover:scale-110 transition-transform">
            <FaBookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            Popular Courses
          </h3>
        </div>

        <p className="text-slate-500 text-sm mb-5">
          Explore trending courses and specializations for your career growth.
        </p>

        <div className="space-y-3 flex-grow">
          <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer">
            • Management (MBA / BBA)
          </div>
          <div className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer">
            • Computer Apps (BCA / MCA)
          </div>
        </div>

        <button className="mt-6 w-full py-2.5 bg-slate-50 text-blue-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
          Explore Courses <FaChevronRight />
        </button>
      </div>

    </div>
    </div>

    <section className="py-24 px-6 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
          Our Premium Services
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-16">
          Comprehensive tools designed to help you make the best decision for
          your future. From discovery to enrollment.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-sm p-10 rounded-3xl text-left border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 bg-blue-50 text-blue-600">
                           <FaSearch />

            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Smart College Search
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Filter colleges by major, location, and acceptance rates tailored
              to your unique profile and preferences.
            </p>

            <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 transition-colors">
              Start Searching →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-sm p-10 rounded-3xl text-left border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 bg-purple-50 text-purple-600">
             
              <MdOutlineStackedBarChart />

            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Comparative Analytics
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              View side-by-side comparisons of tuition, global rankings, and
              campus facilities to find the best value.
            </p>

            <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 transition-colors">
              Compare Now →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-sm p-10 rounded-3xl text-left border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 bg-green-50 text-green-600">
              
              <MdNoteAlt />

            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Application Tracking
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Manage deadlines, essay drafts, and required documents for
              multiple applications in one intuitive dashboard.
            </p>

            <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 transition-colors">
              Track Applications →
            </button>
          </div>
        </div>
      </div>
    </section>

     <div className="max-w-7xl mx-auto px-6 relative z-10 pt-10 pb-10">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
          Why Students Trust Us?
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Why Choose <span className="text-blue-600">BeyondAdmission?</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-4 sm:px-12 lg:px-24">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition hover:-translate-y-2 group">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
            
            <FaFacebookMessenger className="text-3xl " />

          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
            Verified Colleges
          </h4>
          <p className="text-gray-600 leading-relaxed">
            We list only top-rated, government-approved colleges to ensure your
            degree has value.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition hover:-translate-y-2 group">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
            
            <FaStackExchange className="text-3xl " />
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
            Free Consultancy
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Get 100% free expert career guidance from our experienced counsellors.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition hover:-translate-y-2 group">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
            
            <FaGoogleScholar className="text-3xl " />
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
            Scholarship Aid
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Find colleges offering scholarships and financial aid to support your
            education.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition hover:-translate-y-2 group">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
            
            <FaHashtag className="text-3xl " />

          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
            Fast Admission
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Apply directly to multiple colleges with a single click and track
            status.
          </p>
        </div>
      </div>
    </div>

    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          College of Management
        </h2>
      </div>

      
     <div className="grid grid-cols-1 gap-8 px-4 sm:px-12 lg:px-24">


  <div className="bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Image */}
    <div className="w-full aspect-video rounded-xl overflow-hidden">
      <img
        src="/image/mba-2.jpg"
        alt="University of South Wales"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between">

      <ul className="space-y-4 border rounded-xl p-4">
        <li className="flex items-center gap-3 text-gray-700">
          <FaStickyNote className="text-indigo-600" />
          <span><b>Program :</b> MBA</span>
        </li>

        <li className="flex items-center gap-3 text-gray-700">
          <FaMoneyBillWave className="text-green-600" />
          <span><b>Fees :</b> 22 Lacs (All Inclusive)</span>
        </li>

        <li className="flex items-center gap-3 text-gray-700">
          <FaUniversity className="text-blue-600" />
          <span><b>Campus :</b> Shimla </span>
        </li>

        <li className="flex items-center gap-3 text-gray-700">
          <MdSavings className="text-amber-600" />
          <span><b>Average Package :</b> 25 LPA</span>
        </li>
      </ul>

      <div className="mt-6 space-y-4">
        <div className="text-sm text-gray-600">
          <p>Online Application Cost – <b>₹1000</b></p>
          <p>ApnaMBA Application Cost – <b>₹300</b></p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold">
              Start Application
            </button>
          </a>

          <div className="text-center text-sm">
            <div className="flex gap-2 justify-center">
              <img src="/image/google-pay-icon.webp" className="w-9" />
              <img src="/image/phonepe-icon.webp" className="w-9" />
            </div>
            <span className="text-indigo-600 underline">
              Scan & Pay – 9861067301
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>

 
  <div className="bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">


    <div className="w-full aspect-video rounded-xl overflow-hidden">
      <img
        src="/image/mba-1.jpg"
        alt="Lexicon Mile Global MBA"
        className="w-full h-full object-cover"
      />
    </div>

  
    <div className="flex flex-col justify-between">

      <ul className="space-y-4 border rounded-xl p-4">
        <li className="flex items-center gap-3 text-gray-700">
          <FaStickyNote className="text-indigo-600" />
          <span><b>Program :</b> Global MBA</span>
        </li>

        <li className="flex items-center gap-3 text-gray-700">
          <FaMoneyBillWave className="text-green-600" />
          <span><b>Fees :</b> 18 Lacs</span>
        </li>

        <li className="flex items-center gap-3 text-gray-700">
          <FaUniversity className="text-blue-600" />
          <span><b>Campus :</b> Pune </span>
        </li>

        <li className="flex items-center gap-3 text-gray-700">
          <MdSavings className="text-amber-600" />
          <span><b>Average Package :</b> 18 LPA</span>
        </li>
      </ul>

      <div className="mt-6 space-y-4">
        <div className="text-sm text-gray-600">
          <p>Online Application Cost – <b>₹800</b></p>
          <p>ApnaMBA Application Cost – <b>₹300</b></p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold">
              Start Application
            </button>
          </a>

          <div className="text-center text-sm">
            <div className="flex gap-2 justify-center">
              <img src="/image/google-pay-icon.webp" className="w-9" />
              <img src="/image/phonepe-icon.webp" className="w-9" />
            </div>
            <span className="text-indigo-600 underline">
              Scan & Pay – 9843083301
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>

     
    </section>

    


   <div className="w-full bg-gradient-to-br from-indigo-600 to-indigo-400  px-4 sm:px-12 lg:px-24">
      <div className="flex flex-col items-center gap-6 pt-20 pb-20  ">
            <h1 className="text-4xl text-white font-semibold">Ready to Shape Your Future?</h1>
            <p className="text-white text-xl font-normal">Join over 10,000 students who have successfully navigated their college admission journey with us</p>
            <div className="flex flex-row  items-center justify-center gap-5">
                    <a href="" className="bg-white rounded-lg font-semibold text-blue-400 px-5 py-3">Get Started for Free</a>
                    <a href="" className="text-white rounded-lg font-semibold bg-blue-400 px-5 py-3">Get Started for Free</a>
            </div>
      </div>
   </div>

    

        </>
    )
}
export default BBA;