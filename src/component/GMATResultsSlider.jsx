import { useEffect, useRef } from "react";

const results = [
  {
    name: "Ayushi Seth",
    score: "GMAT 645",
    img: "gmat1.webp",
  },
  {
    name: "Rahul Sharma",
    score: "GMAT 705",
    img: "gmat3.jpg",
  },
  {
    name: "Sneha Gupta",
    score: "GMAT 680",
    img: "gmat2.jpg",
  },
  {
    name: "Aman Verma",
    score: "GMAT 720",
    img: "gmat4.webp",
  },
  {
    name: "Priya Singh",
    score: "GMAT 690",
    img: "gmat5.jpg",
  },
];

export default function GMATResultsSlider() {
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
        GMAT Achievers 🚀
      </h2>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap px-6"
      >
        {[...results, ...results].map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 shadow-lg flex items-center gap-4"
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
