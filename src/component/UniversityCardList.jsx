import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function UniversityCardList({
  universities,
  onApplyClick,
}) {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let scrollAmount = 0;

    const slide = () => {
      if (!sliderRef.current || isPaused) return;

      scrollAmount += 0.4;

      if (scrollAmount >= sliderRef.current.scrollHeight / 2) {
        scrollAmount = 0;
      }

      sliderRef.current.scrollTop = scrollAmount;
    };

    const interval = setInterval(slide, 16);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-[380px] h-[520px] overflow-hidden">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="h-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex flex-col gap-5 py-2">
          {[...universities, ...universities].map((uni, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl px-5 py-4 text-white rounded-2xl flex justify-between items-center"
            >
              {/* LEFT SIDE */}
              <div>
                <p className="text-sm font-semibold">{uni}</p>

                {/*  NEW TEXT */}
                <p className="text-md text-white/70 mt-1">
                  Admission Open for 2026
                </p>
              </div>

              {/* RIGHT BUTTON */}
              <button
                onClick={onApplyClick}
                className="flex items-center gap-1 bg-orange-500 px-3 py-1 rounded-md text-xs hover:scale-105 transition"
              >
                Apply
                <FaArrowRight size={10} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
