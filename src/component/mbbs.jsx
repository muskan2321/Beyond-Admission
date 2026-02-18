import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaUserDoctor, FaLaptopCode } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import Slider from "react-slick";
function Mbbs(){
   const settings2 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  const team = [
    {
      name: "Aiims Delhi",
      role: "Government College",
      img: "/image/mba-2.jpg",
    },
    {
      name: "CMS Indore",
      role: "Private College",
      img: "/image/mba-3.jpg",
    },
    {
      name: "Aiims Bhopal",
      role: "Government College",
      img: "/image/mba-5.jpg",
    },
    {
      name: "NSMCH",
      role: "Private College",
      img: "/image/mba-6.jpg",
    },
  ];
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile: "",
      course: "",
      neet: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  

  const colleges = [
  { name:"AIIMS Delhi", country:"India", fees:"₹1,628 / year" },
  { name:"CMC Vellore", country:"India", fees:"₹50,000 / year" },
  { name:"Madras Medical University", country:"India", fees:"₹4–6 Lakh" },
];

    return(
        <>
            

            <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <h1 className="text-3xl sm:text-5xl font-bold">
      MBBS Admission in India & Abroad
    </h1>

    <p className="mt-4 text-lg text-white/80 max-w-2xl">
      Get complete guidance for NEET-based MBBS admissions in
      Government, Private & International Medical Colleges.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
      <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold">
        Apply for MBBS
      </button>
      <button className="border px-6 py-3 rounded-lg">
        Free Counselling
      </button>
    </div>
  </div>
</section>

<div className="w-full">
          <div className="flex lg:flex-row flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-6 text-sm text-gray-600 lg:w-1/2">
                <div className="flex flex-col gap-3">
                            <span className="text-[#0A2F66] text-2xl font-semibold">Enroll it !</span>
                             <h1 className="text-4xl text-black font-bold">Where your Dream fulfill into Reality</h1>
                        <p className="text-2xl"> The Expert Advisor helps students get direct admission in MBBS fast and easy. We guide them step by step, take care of all the paperwork, and give helpful advice, so they can focus on studying, enjoy learning, and have a smooth, stress-free journey to becoming a doctor.</p>
                 </div>
                  <div className="flex justify-start">
                        <a
                        href=""
                        className="bg-green-500 hover:bg-green-600 transition text-white rounded-full px-6 py-3 font-medium"
                        >
                        Explore More <FaChevronRight className="inline-block ml-2" />
                        </a>
                    </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <img src="/image/doctor-1.webp" alt="" />
            </div>
          </div>
        
        </div>
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

    {[
      "High demand doctors worldwide",
      "Stable & respected career",
      "Opportunities in India & Abroad"
    ].map((item,i)=>(
      <div key={i} className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-lg">{item}</h3>
        <p className="mt-2 text-gray-600">
          MBBS offers long-term career growth with global recognition.
        </p>
      </div>
    ))}

  </div>
</section>

<section className="py-16">
  <h2 className="text-3xl font-bold text-center mb-10">
    Top MBBS Colleges
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
    {colleges.map((c,i)=>(
      <div key={i} className="border rounded-xl p-6 hover:shadow-lg">
        <h3 className="text-xl font-semibold">{c.name}</h3>
        <p className="text-sm text-gray-500">{c.country}</p>
        <p className="mt-2 font-medium">Fees: {c.fees}</p>
        <button className="mt-4 text-blue-600">
          View Details →
        </button>
      </div>
    ))}
  </div>
</section>

<section className="bg-gray-50 py-16">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6">
      MBBS Eligibility & Fees
    </h2>

    <ul className="space-y-3 text-gray-700">
      <li>✔ NEET UG Qualified</li>
      <li>✔ 10+2 with Physics, Chemistry, Biology</li>
      <li>✔ Minimum 50% (40% for reserved categories)</li>
      <li>✔ Age: 17 years+</li>
    </ul>

    <p className="mt-6 font-medium">
      Fees Range: ₹10,000 – ₹25 Lakh (India) | ₹4 – ₹8 Lakh (Abroad)
    </p>
  </div>
</section>
<section className="py-16">
  <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-4 px-4">

    {[
      "NEET Exam",
      "Registration",
      "Choice Filling",
      "Seat Allotment",
      "College Joining"
    ].map((step,i)=>(
      <div key={i} className="bg-blue-50 p-4 rounded-lg text-center">
        <p className="font-bold text-blue-700">{i+1}</p>
        <p className="mt-2">{step}</p>
      </div>
    ))}

  </div>
</section>

<section className="bg-amber-500 py-14 text-center">
  <h2 className="text-3xl font-bold">
    Start Your MBBS Journey Today
  </h2>
  <button className="mt-6 bg-black text-white px-8 py-3 rounded-lg">
    With best college
  </button>
    <div className="w-full pt-5">
    
      {/* <div className="text-center px-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C25]">
          Core Team
        </h2>
        <p className="text-sm sm:text-lg pt-4 pb-6 max-w-3xl mx-auto">
          Professionals working together to deliver excellence
        </p>
      </div> */}

      <div className="px-4">
        <Slider {...settings2}>
          {team.map((item, i) => (
            <div key={i} className="px-3">
              <div className="flex flex-col rounded-3xl border border-gray-300 overflow-hidden bg-white transition hover:shadow-xl">
                <div className=" overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-[#2f6b4f] font-semibold text-xl">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.role}</p>
                  <div className="w-12 h-1 bg-[#2f6b4f] rounded-full mx-auto mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

</section>

<section className="bg-blue-900 text-white py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold">
      MBBS Counselling Assistance
    </h2>
    <p className="mt-4 text-white/80 max-w-2xl">
      We provide complete counselling support for
      All India Quota, State Quota & Private Colleges.
    </p>
  </div>
</section>
 <section className="bg-gradient-to-br from-[#f2f4c6] to-[#bbe6e4] from py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-cneter">
      
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Connect With Us
          </h3>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="MOBILE NO."
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            >
              <option value="">Select Course</option>
              <option value="MBBS">MBBS</option>
              <option value="MD MS">MD MS</option>
              <option value="BDS">BDS</option>
              <option value="BAMS">BAMS</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="neet"
              placeholder="NEET SCORE"
              value={formData.neet}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </div>
      
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Guiding Thousands of Medical Careers
          </h2>

          <p className="text-gray-600 text-lg">
            “A leading medical admission advisory platform, providing  aspirants with expert guidance and complete support to achieve successful MBBS admissions in top medical colleges.”
          </p>

          <p className="text-gray-800 font-semibold">
            The Doctors Guardian is the perfect choice if you’re looking for a
            reliable, transparent, and student-friendly counselling platform to
            build your dream medical career.
          </p>
        </div>
      </div>
    </section>
        </>
    )
}

export default Mbbs;