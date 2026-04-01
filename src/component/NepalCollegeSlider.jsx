import { useEffect, useRef } from "react";

const colleges = [
  { name: "Institute of Medicine (IOM), Tribhuvan University" },
  { name: "B.P. Koirala Institute of Health Sciences (BPKIHS)" },
  { name: "Kathmandu Medical College" },
  { name: "Manipal College of Medical Sciences" },
  { name: "Nepal Medical College" },
];

export default function NepalCollegeSlider({ onApplyClick }) {
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
      {/* Heading */}
      {/* <h2 className="text-center text-2xl font-bold text-white mb-6">
        Top MBBS Colleges in Nepal 🇳🇵
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
