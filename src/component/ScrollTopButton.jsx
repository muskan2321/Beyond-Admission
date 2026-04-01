import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth animation
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[9999] group"
        >
          <div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-xl 
                  hover:scale-110 hover:shadow-2xl transition-all duration-300 
                  flex items-center justify-center"
          >
            <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-all duration-300" />
          </div>
        </button>
      )}
    </>
  );
}

export default ScrollTopButton;
