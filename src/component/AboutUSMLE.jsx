import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserMd,
  FaBookMedical,
  FaClock,
  FaGlobe,
  FaCheckCircle,
  FaArrowRight,
  FaMoneyBill,
  FaClipboardList,
  FaGraduationCap,
} from "react-icons/fa";

const AboutUSMLE = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-red-900 via-rose-800 to-red-900 text-white py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          USMLE Complete Guide 2026
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Step-by-step detailed roadmap for Indian & International medical
          students who want to practice medicine in the United States.
        </p>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* SIDEBAR */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-md h-fit sticky top-10">
          <h3 className="font-bold text-lg mb-4 text-red-700">USMLE Guide</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <a href="#about" className="hover:text-red-600">
                About USMLE
              </a>
            </li>
            <li>
              <a href="#steps" className="hover:text-red-600">
                USMLE Steps
              </a>
            </li>
            <li>
              <a href="#eligibility" className="hover:text-red-600">
                Eligibility
              </a>
            </li>
            <li>
              <a href="#fees" className="hover:text-red-600">
                Exam Fees
              </a>
            </li>
            <li>
              <a href="#registration" className="hover:text-red-600">
                Registration
              </a>
            </li>
            <li>
              <a href="#syllabus" className="hover:text-red-600">
                Step-wise Syllabus
              </a>
            </li>
            <li>
              <a href="#scores" className="hover:text-red-600">
                Score System
              </a>
            </li>
          </ul>
        </div>

        {/* CONTENT */}
        <div className="md:col-span-3 space-y-20">
          {/* ABOUT */}
          <section id="about">
            <h2 className="text-3xl font-bold mb-6">What is USMLE?</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              The United States Medical Licensing Examination (USMLE) is a
              three-step examination required for medical licensure in the USA.
              It evaluates a physician’s ability to apply knowledge, concepts,
              and principles essential for safe medical practice.
            </p>
          </section>

          {/* STEPS */}
          <section id="steps">
            <h2 className="text-3xl font-bold mb-8">USMLE Exam Steps</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow">
                <FaBookMedical className="text-3xl text-red-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Step 1</h3>
                <p>Basic Sciences (Pass/Fail)</p>
                <p className="text-gray-600 mt-2 text-sm">
                  Subjects: Anatomy, Physiology, Biochemistry, Pathology,
                  Pharmacology, Microbiology.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow">
                <FaUserMd className="text-3xl text-red-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Step 2 CK</h3>
                <p>Clinical Knowledge (3-digit score)</p>
                <p className="text-gray-600 mt-2 text-sm">
                  Subjects: Medicine, Surgery, Pediatrics, Psychiatry, OB-GYN.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow">
                <FaClock className="text-3xl text-red-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Step 3</h3>
                <p>Final Licensing Exam</p>
                <p className="text-gray-600 mt-2 text-sm">
                  Focus on patient management & clinical decision making.
                </p>
              </div>
            </div>
          </section>

          {/* ELIGIBILITY */}
          <section id="eligibility">
            <h2 className="text-3xl font-bold mb-6">Eligibility Criteria</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                ✔ Must be enrolled in or graduate from recognized medical school
              </li>
              <li>
                ✔ School listed in World Directory of Medical Schools (WDOMS)
              </li>
              <li>✔ ECFMG certification required for IMGs</li>
              <li>✔ Must pass Step 1 & Step 2 before Step 3</li>
            </ul>
          </section>

          {/* FEES */}
          <section id="fees">
            <h2 className="text-3xl font-bold mb-6">USMLE Exam Fees</h2>
            <div className="bg-white p-6 rounded-xl shadow">
              <p>Step 1: Approx $1000+</p>
              <p>Step 2 CK: Approx $1000+</p>
              <p>Additional International Testing Fee applies</p>
            </div>
          </section>

          {/* REGISTRATION */}
          <section id="registration">
            <h2 className="text-3xl font-bold mb-6">How to Register?</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Create ECFMG Account</li>
              <li>Verify Medical Degree</li>
              <li>Apply for Step Exam</li>
              <li>Schedule exam via Prometric</li>
            </ol>
          </section>

          {/* SYLLABUS */}
          <section id="syllabus">
            <h2 className="text-3xl font-bold mb-6">Step-wise Syllabus</h2>
            <p className="text-gray-700">
              Step 1 – Basic Sciences Step 2 CK – Clinical Sciences Step 3 –
              Advanced Clinical Management
            </p>
          </section>

          {/* SCORE */}
          <section id="scores">
            <h2 className="text-3xl font-bold mb-6">Score Calculation</h2>
            <p className="text-gray-700">
              Step 1 – Pass/Fail Step 2 CK – 3 digit score (200–300 range)
              Higher score increases chances of residency match.
            </p>
          </section>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-red-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-red-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Start Your USMLE Preparation <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default AboutUSMLE;
