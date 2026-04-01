import { useEffect, useRef } from "react";

const colleges = [
  { name: "Tashkent Medical Academy" },
  { name: "Samarkand State Medical University" },
  { name: "Bukhara State Medical Institute" },
  { name: "Tashkent State Dental Institute" },
  { name: "Andijan State Medical Institute" },
  { name: "Fergana Medical Institute of Public Health" },
  { name: "Tashkent Medical Academy Urgench Branch" },
];

export default function UzbekistanCollegeSlider({ onApplyClick }) {
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
    <div className="bg-gradient-to-r from-blue-800 to-indigo-800 py-8 mt-10 overflow-hidden">
      {" "}
      {/* Heading */}
      {/* <h2 className="text-center text-2xl font-bold text-white mb-6">
        Top MBBS Colleges in Uzbekistan 🇺🇿
      </h2> */}
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
