import { useEffect, useRef } from "react";

const results = [
  {
    name: "Ananya Kapoor",
    score: "SAT 1450",
    img: "/image/gmat1.webp",
  },
  {
    name: "Rohit Sharma",
    score: "SAT 1500",
    img: "/image/gmat3.jpg",
  },
  {
    name: "Ishita Verma",
    score: "SAT 1420",
    img: "/image/gmat2.jpg",
  },
  {
    name: "Aditya Singh",
    score: "SAT 1520",
    img: "/image/gmat4.jpg",
  },
  {
    name: "Kavya Mehta",
    score: "SAT 1480",
    img: "/image/gmat5.jpg",
  },
];

export default function SATResultsSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slide = () => {
      if (slider) {
        scrollAmount += 1;

        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }

        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(slide, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-500 mt-16 pb-10 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-black mt-6 mb-8">
        SAT Achievers 
      </h2>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap px-6"
      >
        {[...results, ...results].map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 shadow-lg flex items-center gap-4"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 rounded-full border-2 border-white"
            />

            <div>
              <h3 className="text-white font-semibold text-lg">{item.name}</h3>
              <p className="text-yellow-300 font-bold">{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
