import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* ================= MAIN FOOTER ================= */}
      <div className="w-full bg-[#0e2a46] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* ================= COMPANY INFO ================= */}
            <div className="space-y-6">
              <img
                src="/image/beyond-logo.png"
                alt="Beyond Admission"
                className="w-36"
              />

              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted partner for admissions in India and abroad. We help
                students achieve their dreams of studying at top universities
                worldwide.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-600 p-3 rounded-full hover:bg-blue-600 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-600 p-3 rounded-full hover:bg-pink-600 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://in.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-600 p-3 rounded-full hover:bg-red-600 transition"
                >
                  <FaPinterest />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-600 p-3 rounded-full hover:bg-sky-500 transition"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/study-abroad"
                    className="hover:text-white transition"
                  >
                    Study Abroad
                  </Link>
                </li>
                <li>
                  <Link
                    to="/india-admissions"
                    className="hover:text-white transition"
                  >
                    India Admissions
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-white transition">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* ================= POPULAR COURSES ================= */}
            <div>
              <h3 className="text-xl font-bold mb-6">Popular Courses</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    to="/courses/mbbs-abroad"
                    className="hover:text-white transition"
                  >
                    MBBS Abroad
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/engineering"
                    className="hover:text-white transition"
                  >
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/mba"
                    className="hover:text-white transition"
                  >
                    MBA
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/medical-nursing"
                    className="hover:text-white transition"
                  >
                    Medical & Nursing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/paramedical"
                    className="hover:text-white transition"
                  >
                    Paramedical
                  </Link>
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div>
              <h3 className="text-xl font-bold mb-6">Gallery</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  "thumb-1-1.png",
                  "thumb-1-2.png",
                  "thumb-1-3.png",
                  "thumb-1-4.png",
                  "thumb-1-5.png",
                  "thumb-1-6.png",
                ].map((img, index) => (
                  <img
                    key={index}
                    src={`/image/${img}`}
                    alt="Gallery"
                    className="rounded-md hover:scale-105 transition cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-[#081c2e] text-center text-gray-400 py-4 text-sm">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="text-[#0ab99d] font-semibold">Beyond Admission</span>{" "}
        || All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
