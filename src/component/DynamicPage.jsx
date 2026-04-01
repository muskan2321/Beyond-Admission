import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api/axios";

export default function StudyDynamicPremium() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  const safeParse = (field) => {
    try {
      return Array.isArray(field) ? field : JSON.parse(field || "[]");
    } catch {
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const cleanSlug = slug.replace("study-in-", "");
      const res = await api.get(`/study-abroad/${cleanSlug}`);
      const d = res.data;

      setData({
        ...d,
        benefits: safeParse(d.benefits),
        courses: safeParse(d.courses),
        universities: safeParse(d.universities),
        steps: safeParse(d.steps),
      });
    };

    fetchData();
  }, [slug]);

  if (!data) return <h1 className="text-center mt-10">Loading...</h1>;

  return (
    <div className="bg-white font-[Inter]">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image (DYNAMIC) */}
        <div className="absolute inset-0">
          <img
            src={
              data.hero_image
                ? `http://127.0.0.1:8000/storage/${data.hero_image}`
                : "/image/usa-bg.png"
            }
            className="w-full h-full object-cover scale-110"
            alt="hero"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

        {/* Animated Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/30 blur-3xl rounded-full animate-blob delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
          {/* LEFT */}
          <div>
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
              🎓 Your Global Education Partner
            </div>

            {/* ✅ DYNAMIC TITLE */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {data.hero_title}
            </h1>

            {/* ✅ DYNAMIC DESCRIPTION */}
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              {data.hero_description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                  Apply Now
                </button>
              </Link>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:scale-105 transition">
                Free Counselling
              </button>
            </div>

            {/* STATS (OPTIONAL STATIC) */}
            <div className="mt-10 flex gap-8 text-white/80 text-sm">
              <div>
                <p className="text-xl font-bold text-white">4500+</p>
                Universities
              </div>
              <div>
                <p className="text-xl font-bold text-white">1.5M</p>
                Students
              </div>
              <div>
                <p className="text-xl font-bold text-white">98%</p>
                Success
              </div>
            </div>
          </div>
        </div>

        {/* ANIMATIONS */}
        <style>{`
    @keyframes blob {
      0%, 100% { transform: translate(0,0) scale(1); }
      50% { transform: translate(20px,-30px) scale(1.1); }
    }

    .animate-blob {
      animation: blob 10s infinite;
    }

    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0); }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .delay-2000 { animation-delay: 2s; }
    .delay-4000 { animation-delay: 4s; }
  `}</style>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          {data.why_usa_title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {data.benefits.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white shadow-xl hover:-translate-y-3 transition"
            >
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center">Popular Courses</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {data.courses.map((course, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition"
            >
              <h3 className="font-semibold">{course}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= UNIVERSITIES ================= */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center">Top Universities</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {data.universities.map((uni, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow">
              {uni}
            </div>
          ))}
        </div>
      </section>

      {/* ================= ZIG ZAG TIMELINE ================= */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold text-center mb-16">
          Admission Process
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 w-1 bg-blue-400 h-full transform -translate-x-1/2"></div>

          {data.steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex items-center mb-12 ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 px-6">
                  <div className="bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                    {step}
                  </div>
                </div>

                <div className="w-10 h-10 bg-white border-4 border-blue-500 rounded-full z-10 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div className="w-1/2"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold">Start Your Journey Today</h2>

        <Link to="/contact">
          <button className="mt-6 px-10 py-4 bg-white text-blue-600 rounded-full font-semibold">
            Apply Now
          </button>
        </Link>
      </section>
    </div>
  );
}
