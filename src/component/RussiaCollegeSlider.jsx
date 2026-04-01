import { useEffect, useRef } from "react";

const colleges = [
  { name: "Kemerovo State Medical University" },
  { name: "Siberian State Medical University" },
  { name: "Volgograd State Medical University" },
  { name: "Voronezh State Medical University" },
  { name: "North Caucasian State Academy" },
  { name: "Bashkir State Medical University" },
  { name: "Crimea Federal University" },
];

export default function RussiaCollegeSlider({ onApplyClick }) {
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

        slider.scrollTo({ left: scrollAmount });
      }
    };

    const interval = setInterval(slide, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-700 to-blue-600 py-8 mt-16 overflow-hidden">
      {" "}
      {/* Slider */}
      <div ref={sliderRef} className="flex gap-4 overflow-x-hidden px-4">
        {[...colleges, ...colleges].map((item, index) => (
          <div
            key={index}
            className="min-w-[260px] bg-yellow-400 rounded-lg px-4 py-3 shadow-md flex items-center justify-between"
          >
            {/* College Name */}
            <p className="text-sm font-bold text-gray-800 line-clamp-2">
              {item.name}
            </p>

            {/* Button */}
            <button className="ml-3 bg-blue-500 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-700 whitespace-nowrap">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
