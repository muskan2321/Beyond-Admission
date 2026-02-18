import { useState } from "react";
import { FaChevronRight, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import Slider from "react-slick";


function BTech(){
      const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "90px",
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "40px" } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };
const colleges1 = [
    {
    name: "Ravenshaw University",
    city: "cuttack",
    image: "/image/college-8.webp",
    courses: ["BBA", "BCA", "MBA", "MCA"],
    featured: true,
  },
  {
    name: "Patel University",
    city: "jaipur",
    image: "/image/college-9.webp",
    courses: ["BBA", "BCA", "MBA", "MCA"],
    featured: true,
  },
  {
    name: "GIET Baniatangi",
    city: "Bhubaneswar",
    image: "/image/college-10.webp",
    courses: ["B.Tech", "Diploma", "MBA", "MCA"],
    featured: true,
  },

  {
    name: "Dev-Bhoomi University",
    city: "Dehradun",
    image: "/image/college-10.webp",
    courses: ["B.Tech", "Diploma", "MBA", "MCA"],
    featured: true,
  },
];


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

  const colleges = [
    { name: "IIT Delhi", country: "India", fees: "₹2.5 Lakh / year" },
    { name: "NIT Trichy", country: "India", fees: "₹1.8 Lakh / year" },
    { name: "VIT Vellore", country: "India", fees: "₹2 – 4 Lakh / year" },
  ];

  const team = [
    {
      name: "IIT Bombay",
      role: "Government Institute",
      img: "/image/college-6.jpg",
    },
    {
      name: "Jadhavpur University",
      role: "Government Institute",
      img: "/image/college-6.jpg",
    },
    {
      name: "BITS Pilani",
      role: "Private Institute",
      img: "/image/college-3.jpg",
    },
    {
      name: "VIT Vellore",
      role: "Private University",
      img: "/image/college-4.jpg",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    exam: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
    return(
        <>
        
            

            <section className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-3xl sm:text-5xl font-bold">
            BTech Admission in India
          </h1>

          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Complete guidance for BTech admissions through JEE Main,
            JEE Advanced & State Counselling.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold">
              Apply for BTech
            </button>
            <button className="border px-6 py-3 rounded-lg">
              Free Counselling
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 px-4">
          <div className="space-y-5">
            <span className="text-indigo-700 text-xl font-semibold">
              Build Your Future
            </span>
            <h2 className="text-4xl font-bold">
              Engineering Your Success
            </h2>
            <p className="text-lg text-gray-600">
              We help students secure BTech admission in top IITs, NITs,
              and private universities with expert counselling, proper
              guidance, and transparent admission support.
            </p>
            <a
              href="#"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-full"
            >
              Explore More <FaChevronRight className="inline ml-2" />
            </a>
          </div>

          <img src="/image/admission.jpg" alt="" />
        </div>
      </section>

      <section className="bg-gray-50 py-20">
      <div className="text-center mb-12 px-4">
        <span className="text-blue-600 font-semibold">Popular Colleges</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Feature Colleges
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Discover top colleges that offer excellent courses, world-class
          facilities, and a great student experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <Slider {...settings}>
          {colleges1.map((item, i) => (
            <div key={i} className="px-3">
              <div
                className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Top */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  {item.featured && (
                    <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  <button className="text-white">
                    <FaHeart />
                  </button>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
                  <p className="flex items-center gap-2 text-sm opacity-80">
                    <FaMapMarkerAlt /> {item.city}
                  </p>

                  <h3 className="text-xl font-semibold mt-1">
                    {item.name}
                  </h3>

                  <div className="mt-4">
                    <h6 className="text-sm font-semibold mb-2">
                      Courses Offered
                    </h6>

                    <div className="flex flex-wrap gap-2 max-h-16 overflow-y-auto pr-1">
                      {item.courses.map((c, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/20 px-3 py-1 rounded-full"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="mt-4 inline-flex items-center gap-2 text-sm text-amber-400">
                    View Details <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>


      {/* WHY BTECH */}
      <section className="py-16 bg-gray-50">

     <div className="flex lg:flex-row flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-16 pt-8 pb-16">
                    <span className="text-xl font-bold text-blue-900 text-center">Explore Courses</span>
                </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          

          <div className="flex flex-col gap-4 p-6 bg-white shadow-lg hover:shadow-xl 
                rounded-2xl border border-gray-200 transition duration-300
                max-w-sm w-full">

  <span className="text-xl font-bold text-blue-900 text-center">
    Computer Science & Engineering
  </span>

  <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>

  <ul className="space-y-2 text-gray-700 text-sm">
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Software Developer
    </li>

    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Machine Learning
    </li>

    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Data Analyst
    </li>

    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      AI Engineer
    </li>

    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Cyber Security
    </li>
  </ul>

  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white
                     text-sm font-medium py-2 rounded-lg transition">
    Explore CSE
  </button>

</div>
<div className="flex flex-col gap-4 p-6 bg-white shadow-lg hover:shadow-xl 
                rounded-2xl border border-gray-200 transition duration-300
                max-w-sm w-full">

  <span className="text-xl font-bold text-blue-900 text-center">
    Mechanical Engineering
  </span>

  <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>

  <ul className="space-y-2 text-gray-700 text-sm">
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Production Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Design Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Automobile Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Maintenance Engineer
    </li>
  </ul>

  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white
                     text-sm font-medium py-2 rounded-lg transition">
    Explore Mechanical
  </button>
</div>

<div className="flex flex-col gap-4 p-6 bg-white shadow-lg hover:shadow-xl 
                rounded-2xl border border-gray-200 transition duration-300
                max-w-sm w-full">

  <span className="text-xl font-bold text-blue-900 text-center">
    Electrical Engineering
  </span>

  <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>

  <ul className="space-y-2 text-gray-700 text-sm">
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Power Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Electrical Design Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Control Systems Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      PSU Engineer
    </li>
  </ul>

  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white
                     text-sm font-medium py-2 rounded-lg transition">
    Explore Electrical
  </button>
</div>
<div className="flex flex-col gap-4 p-6 bg-white shadow-lg hover:shadow-xl 
                rounded-2xl border border-gray-200 transition duration-300
                max-w-sm w-full">

  <span className="text-xl font-bold text-blue-900 text-center">
    Civil Engineering
  </span>

  <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>

  <ul className="space-y-2 text-gray-700 text-sm">
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Site Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Structural Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Project Manager
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Government Engineer
    </li>
  </ul>

  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white
                     text-sm font-medium py-2 rounded-lg transition">
    Explore Civil
  </button>
</div>
<div className="flex flex-col gap-4 p-6 bg-white shadow-lg hover:shadow-xl 
                rounded-2xl border border-gray-200 transition duration-300
                max-w-sm w-full">

  <span className="text-xl font-bold text-blue-900 text-center">
    Electronics & Communication
  </span>

  <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>

  <ul className="space-y-2 text-gray-700 text-sm">
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Embedded Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Network Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      VLSI Engineer
    </li>
    <li className="flex items-center gap-2">
      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
      Telecom Engineer
    </li>
  </ul>

  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white
                     text-sm font-medium py-2 rounded-lg transition">
    Explore ECE
  </button>
</div>

        </div>
      </section>

      {/* TOP COLLEGES */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Top BTech Colleges
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          {colleges.map((c, i) => (
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

      <div className="w-full bg-gray-100 pt-20 pb-20"> 
                                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 p-4 sm:px-6 md:px-12 lg:px-24">
                            <div className="flex flex-col rounded-3xl  border border-gray-300 overflow-hidden    w-full">
                                    
                                    <img src="/image/seminar.jpg" alt="Vision" className="w-full h-50 object-cover rounded-t-2xl" />

                                    <div className="p-6 flex flex-col items-start gap-2">
                                        <span className="text-[#16315a] block  font-semibold text-lg ">
                                           B.Tech Admission Seminar
                                        </span>
                                        <p>
                                            Discover B.Tech programs, eligibility criteria, and future career paths in engineering.
                                            </p>

                                            <span>📅 15 Feb 2026</span>
                                       
                                    </div>
                                </div>

                                <div className="flex flex-col rounded-3xl  border border-gray-300 overflow-hidden    w-full">
                                    
                                    <img src="/image/campus-4.jpg" alt="Vision" className="w-full h-50 object-cover rounded-t-2xl" />

                                    <div className="p-6 flex flex-col items-start gap-2">
                                        <span className="text-[#16315a] block  font-semibold text-lg ">
                                            Engineering Innovation Workshop
                                        </span>
                                        <p>
                                            Join hands-on sessions on cutting-edge technologies and engineering innovations.
                                            </p>
                                            <span>📅 20 Feb 2026</span>
                                        
                                    </div>
                                </div>
                        </div>
            </div>

      {/* ADMISSION PROCESS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-4 px-4">
          {[
            "JEE Exam",
            "Registration",
            "Choice Filling",
            "Seat Allotment",
            "College Joining",
          ].map((step, i) => (
            <div key={i} className="bg-indigo-50 p-4 rounded-lg text-center">
              <p className="font-bold text-indigo-700">{i + 1}</p>
              <p className="mt-2">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SLIDER */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Slider {...settings2}>
            {team.map((item, i) => (
              <div key={i} className="px-3">
                <div className="rounded-3xl border overflow-hidden bg-white">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5 text-center">
                    <h3 className="font-semibold text-xl">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-gradient-to-br from-[#eef2ff] to-[#c7d2fe] py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow space-y-4"
          >
            <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-3 rounded" />
            <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-3 rounded" />
            <input name="mobile" placeholder="Mobile" onChange={handleChange} className="w-full border p-3 rounded" />

            <select name="course" onChange={handleChange} className="w-full border p-3 rounded">
              <option value="">Select Branch</option>
              <option>CSE</option>
              <option>AI & DS</option>
              <option>ECE</option>
              <option>Mechanical</option>
              <option>Civil</option>
            </select>

            <input name="exam" placeholder="JEE Rank / Score" onChange={handleChange} className="w-full border p-3 rounded" />

            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
              Submit
            </button>
          </form>

          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-3xl font-bold">
              Shaping Engineering Careers
            </h2>
            <p className="text-gray-700">
              Trusted counselling platform helping students secure
              BTech admissions in top engineering colleges.
            </p>
          </div>
        </div>
      </section>
        </>
    )
}
export default BTech;