import { useState } from "react";
import { FaChevronRight, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import Slider from "react-slick";

function BPlan() {
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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "40px" },
      },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  const colleges1 = [
    {
      name: "SPA Delhi",
      city: "New Delhi",
      image: "/image/college-8.webp",
      courses: ["B.Plan", "M.Plan"],
      featured: true,
    },
    {
      name: "CEPT University",
      city: "Ahmedabad",
      image: "/image/college-9.webp",
      courses: ["B.Plan", "Urban Design"],
      featured: true,
    },
    {
      name: "Amity University",
      city: "Noida",
      image: "/image/college-10.webp",
      courses: ["B.Plan", "B.Arch"],
      featured: true,
    },
  ];

  const colleges = [
    { name: "SPA Delhi", country: "India", fees: "₹2.4 Lakh / year" },
    { name: "CEPT University", country: "India", fees: "₹2.8 Lakh / year" },
    { name: "Amity University", country: "India", fees: "₹3.0 Lakh / year" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    exam: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            B.Plan Admission in India
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Complete guidance for Bachelor of Planning admissions through JEE
            Paper 2 & university entrance exams.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-amber-500 px-6 py-3 rounded-lg font-semibold">
              Apply for B.Plan
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
          <div>
            <span className="text-teal-700 font-semibold text-xl">
              About B.Plan
            </span>
            <h2 className="text-4xl font-bold mt-2">
              Bachelor of Planning Program
            </h2>
            <p className="text-gray-600 mt-4">
              B.Plan (Bachelor of Planning) is a 4-year undergraduate program
              focused on urban planning, infrastructure development, transport
              planning, environmental planning, and sustainable city design.
            </p>
            <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full">
              Explore More <FaChevronRight className="inline ml-2" />
            </button>
          </div>
          <img src="/image/admission.jpg" alt="BPlan Admission" />
        </div>
      </section>

      {/* COURSE HIGHLIGHTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl text-center shadow">
            <h4 className="font-bold text-teal-700">Duration</h4>
            <p className="mt-2">4 Years</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow">
            <h4 className="font-bold text-teal-700">Eligibility</h4>
            <p className="mt-2">12th with PCM</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow">
            <h4 className="font-bold text-teal-700">Entrance Exams</h4>
            <p className="mt-2">JEE Paper 2</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow">
            <h4 className="font-bold text-teal-700">Average Salary</h4>
            <p className="mt-2">₹4 – 8 LPA</p>
          </div>
        </div>
      </section>

      {/* TOP COLLEGES SLIDER */}
      <section className="bg-gray-50 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Top B.Plan Colleges</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <Slider {...settings}>
            {colleges1.map((item, i) => (
              <div key={i} className="px-3">
                <div
                  className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>

                  <div className="absolute bottom-0 p-5 text-white z-10">
                    <p className="flex items-center gap-2 text-sm">
                      <FaMapMarkerAlt /> {item.city}
                    </p>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.courses.map((c, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/20 px-3 py-1 rounded-full"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <button className="mt-4 text-amber-400 flex items-center gap-2">
                      View Details <HiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* FEES SECTION */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          B.Plan Fee Structure
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          {colleges.map((c, i) => (
            <div key={i} className="border rounded-xl p-6 hover:shadow-lg">
              <h3 className="text-xl font-semibold">{c.name}</h3>
              <p className="text-gray-500">{c.country}</p>
              <p className="mt-2 font-medium">Fees: {c.fees}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="bg-teal-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow space-y-4"
          >
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            <input
              name="mobile"
              placeholder="Mobile"
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            <input
              name="exam"
              placeholder="JEE Rank"
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />
            <button className="w-full bg-teal-700 text-white py-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default BPlan;
