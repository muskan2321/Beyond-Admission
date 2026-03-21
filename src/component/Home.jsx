import { BsCalendar2Date, BsGraphUpArrow } from "react-icons/bs";
import { FaArrowRight, FaCartPlus, FaChartArea, FaCommentAlt, FaGraduationCap, FaIndustry, FaInnosoft, FaLaptopCode, FaLinkedin, FaMobile, FaPinterest, FaPlayCircle, FaRocket, FaScrewdriver, FaStar, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaSquareWebAwesome, FaTwitter } from "react-icons/fa6";
import { GiHiveMind, GiTeacher } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import { MdGraphicEq, MdOutlinePersonOutline } from "react-icons/md";
import Slider from "react-slick";
import { useRef } from "react";
import { FaFire } from "react-icons/fa";
import {  useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaHome, FaUserGraduate, FaBriefcase, FaChartLine } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import HomePopup from "./HomePopup";
import { FaUserCheck, FaUniversity, FaFileAlt, FaPassport } from "react-icons/fa";
import CollegeSliderCard from "../component/CollegeSliderCard";


import {
  Users,
  Globe,
  Building,
  Award,
  GraduationCap,
  Star,
} from "lucide-react";


function Home() {

  const courses = [
  {
    title: "TOURISM & HOSPITALITY",
    desc: "Study travel management, hospitality services, and global tourism trends.",
    img: "/image/tourism.png",
  },
  {
    title: "RETAIL MANAGEMENT",
    desc: "Learn merchandising, sales, and retail operations management.",
    img: "/image/management.png",
  },
  {
    title: "PROJECT MANAGEMENT",
    desc: "Gain expertise in project planning, execution, and leadership.",
    img: "/image/project.jpg",
  },
  {
    title: "NURSING",
    desc: "Study patient care, clinical skills, and healthcare management.",
    img: "/image/nursing.jpg",
  },
  {
    title: "MBA",
    desc: "Learn business administration, strategy, finance, and leadership skills.",
    img: "/image/mba.jpg",
  },
  {
    title: "MANAGEMENT",
    desc: "This is a sample paragraph that provides a brief overview of the course content.",
    img: "/image/admission-1.jpg",
  },
];
   const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Beyond Admission",
      answer:
        "Beyond Admission is a platform that helps students discover and apply to their desired colleges and universities both domestically and internationally. We streamline the admission process by matching students with the best-fit institutions based on their goals and qualifications.",
    },
    {
      question: "How is Beyond Admission different from other platforms?",
      answer:
        "Unlike one-size-fits-all platforms, we focus on personalized matches based on your profile, preferences, and academic background. While others focus heavily on test prep and act as aggregators for recruitment agents and universities only or partially, Beyond Admission prioritizes student fit, success, and direct support.",
    },
    {
      question: "Is Beyond Admission or college change service free to use?", 
      answer:
        "Yes! Students can get admissions to any colleges or universities they like all across the world. Our admissions experts help them throughout the way including any formalities, without any additional charges other than mandatory university fees. If visa or immigration assistance is needed, we refer you to our hand-picked partners with additional discounts.",
    },
    {
      question: "Can I apply to multiple universities and countries through Beyond Admission?",
      answer:
        "Yes, you can apply to multiple institutions across countries and track all your applications in one platform. We actively monitor all your applications and guide you accordingly.",
    },
    {
      question: "Which countries can I apply to through Beyond Admission?",
      answer:
        "We currently support admissions to top destinations like Canada, USA, UK, Australia, and select European and Asian countries. New destinations are added regularly.",
    },
    {
      question: "Do you provide visa assistance?",
      answer:
        "We do not directly offer visa guidance, but once your admission is confirmed, our immigration and legal partners ensure you meet all requirements for a successful student visa application.",
    },
    {
      question: "What happens after I receive an admission offer?",
      answer:
        "We help you with the next steps, including accepting the offer, paying tuition deposits, preparing for the visa, and even finding accommodation or travel tips.",
    },
    {
      question: "Can someone help me choose the right university or program?",
      answer:
        "Absolutely. Our expert counselors provide 1-on-1 guidance with the help of our internal AI program selection feature to help you select programs aligned with your academic background and career goals.",
    },
    {
      question: "Do you offer support for SOPs and LORs?",
      answer:
        "Yes. We offer SOP/LOR writing and editing services to ensure your application stands out.",
    },
  ];

 

  const tabs = [
    
      "Engineering",
      "Management",
      "Commerce and Banking",
      "Medical",
      "Science",
      "Hotel Management",
      "Information Technology",
      "Arts & Humanities",
      "Agriculture",
      "Law",
      "Pharmacy",
      "Education",
    ];
  
    const [activeTab, setActiveTab] = useState("Engineering");
    const tabRef = useRef(null);
  
    const scrollTabs = (dir) => {
      if (!tabRef.current) return;
      const width = tabRef.current.clientWidth;
      tabRef.current.scrollBy({
        left: dir === "left" ? -width / 2 : width / 2,
        behavior: "smooth",
      });
    };
    
  
   
    const featuredColleges = [
      "Parul University",
      "Jadhavpur University",
      "Delhi University",
      "Jawahar Lal Nehru University",
      "Dev Bhoomi University",
      "Indian Institute Of Technology",
      "Jaipur National University",
      "Institute of Engineering and Management",
      "Lingaya's Vidyapeeth",
      "Vivekananda Global University",
    ];
  
    const relatedCourses = [
      "B Tech",
      "M Tech",
      "Bachelor of Engineering",
      "Civil Engineering",
      "Mechanical Engineering",
      "Automobile Engineering",
      "Aerospace Engineering",
      "Aeronautical Engineering",
      "Software Engineering",
      "Computer Engineering",
    ];
  
    const rightCards = [
      {
        title: "Important Exams",
        items: ["JEE Main", "JEE Advanced", "TS EAMCET", "WBJEE", "VITEEE"],
       
      },
      {
        title: "Top States",
        items: ["Maharashtra", "Tamilnadu","Madhya Pradesh", "Uttar Pradesh", "Karnataka", "Rajasthan", "Punjab","Bihar","Assam","Jharkhand","Himachal Pradesh"],
        
      },
    ];
  

    const states = [
  { name: "Andhra Pradesh", img: "/image/ap.png", link: "andhra-pradesh-universities" },
  { name: "Arunachal Pradesh", img: "/image/arunachalp.png", link: "arunachal-pradesh-universities" },
  { name: "Assam", img: "/image/assam.png", link: "assam-universities" },
  { name: "Bihar", img: "/image/bihar.png", link: "bihar-universities" },
  { name: "Chhattisgarh", img: "/image/chhattisgarh.png", link: "chhattisgarh-universities" },
  { name: "Goa", img: "/image/goa.png", link: "goa-universities" },
  { name: "Gujarat", img: "/image/gujarat.png", link: "gujarat-universities" },
  { name: "Haryana", img: "/image/haryana.png", link: "haryana-universities" },
  { name: "Himachal Pradesh", img: "/image/hp.png", link: "himachal-pradesh-universities" },
  { name: "Jharkhand", img: "/image/jharkhand.png", link: "jharkhand-universities" },
  { name: "Karnataka", img: "/image/karnataka.png", link: "karnataka-universities" },
  { name: "Kerala", img: "/image/kerala.png", link: "kerala-universities" },
  { name: "Madhya Pradesh", img: "/image/mp.png", link: "madhya-pradesh-universities" },
  { name: "Maharashtra", img: "/image/maharashtra.png", link: "maharashtra-universities" },
  { name: "Manipur", img: "/image/manipur.png", link: "manipur-universities" },
  
  { name: "Odisha", img: "/image/odisha.png", link: "odisha-universities" },
  { name: "Punjab", img: "/image/punjab.png", link: "punjab-universities" },
  { name: "Rajasthan", img: "/image/rajasthan.png", link: "rajasthan-universities" },
  
  { name: "Telangana", img: "/image/telengana.png", link: "telangana-universities" },
  
  { name: "Uttar Pradesh", img: "/image/uttarpradesh.png", link: "uttar-pradesh-universities" },
  { name: "West Bengal", img: "/image/westbengal.png", link: "west-bengal-universities" },
  { name: "Chandigarh (UT)", img: "/image/chandigarh.png", link: "chandigarh-universities" },
  { name: "Delhi (NCT)", img: "/image/delhi.png", link: "delhi-universities" },
  { name: "Jammu & Kashmir (UT)", img: "/image/jnk.png", link: "jammu-and-kashmir-universities" },
  
];

  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (dir === "left") {
      sliderRef.current.scrollLeft -= 300;
    } else {
      sliderRef.current.scrollLeft += 300;
    }
  };


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1600,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

 
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
 const steps = [
   {
     icon: <FaUserCheck />,
     title: "Profile Evaluation",
     desc: "Our admission experts analyze your academic background, grades, test scores, career goals, and financial situation to understand which country, course, and university best suits your profile.",
   },
   {
     icon: <FaUniversity />,
     title: "University Shortlisting",
     desc: "Based on your profile evaluation, we shortlist the most suitable universities and programs considering rankings, tuition fees, career opportunities, and your preferences.",
   },
   {
     icon: <FaFileAlt />,
     title: "Application Process",
     desc: "We assist you in preparing documents such as SOP, LOR, resume, and academic transcripts. Our team ensures your university applications are completed accurately.",
   },
   {
     icon: <FaPassport />,
     title: "Visa Assistance",
     desc: "After receiving the university offer letter, we guide you through the visa process including financial documentation, application submission and interview preparation.",
   },
  ];
  

    return (
      <>
        <HomePopup />
        <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden z-0">
          <Slider {...settings} className="h-[500px]">
            {[
              "/image/college-12.jpg",
              // "/image/college-4.jpg",
              // "/image/college-5.jpg",
            ].map((img, i) => (
              <div key={i} className="w-full min-h-[calc(100vh-80px)] relative">
                <img src={img} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
              </div>
            ))}
          </Slider>

          <div
            className="
      absolute inset-0 text-white
      overflow-y-auto lg:overflow-visible
      flex items-start lg:items-center
      pt-24 lg:pt-0 z-10
    "
          >
            <div className="w-full max-w-3xl px-4 sm:px-6 pb-20 mt-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
                <FaGraduationCap />
                Trusted by 10,000+ Students
              </div>

              <h1 className="font-display text-xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Your Trusted Counselling for{" "}
                <span className="text-amber-500">
                  Admissions in India & Abroad
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/80">
                Unlock your dream career with expert guidance.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-amber-600 hover:to-orange-600">
                  Apply Now <FaArrowRight className="text-sm" />
                </a>

                <a className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/70 px-8 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:-translate-y-1">
                  Free Counseling
                </a>

                <a className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-8 text-white font-semibold backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-green-500 hover:border-green-500 hover:shadow-lg hover:-translate-y-1">
                  📞 Call Now
                </a>
              </div>
            </div>

            <CollegeSliderCard />
          </div>
        </div>

        <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
          {/* Glow background */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block bg-blue-600/10 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold">
                Study Destinations
              </span>

              <h2 className="mt-6 text-4xl font-bold text-gray-900">
                Popular Countries to Study Abroad
              </h2>

              <p className="mt-4 text-gray-600">
                Explore world-class education opportunities across top
                destinations.
              </p>
            </div>

            {/* Premium Cards */}
            <div className="mt-20 grid gap-10 lg:grid-cols-2">
              {[
                {
                  // flag: "🇺🇸",
                  name: "Study in USA",
                  uni: "500+ Universities",
                  desc: "Ivy League & Top Universities",
                  img: "https://flagcdn.com/w640/us.png",
                },
                {
                  // flag: "🇬🇧",
                  name: "Study in UK",
                  uni: "130+ Universities",
                  desc: "Russell Group Universities",
                  img: "https://flagcdn.com/w640/gb.png",
                },
                {
                  // flag: "🇨🇦",
                  name: "Study in Canada",
                  uni: "100+ Universities",
                  desc: "PR Pathway Options",
                  img: "https://flagcdn.com/w640/ca.png",
                },
                {
                  // flag: "🇦🇺",
                  name: "Study in Australia",
                  uni: "45+ Universities",
                  desc: "Group of Eight Universities",
                  img: "https://flagcdn.com/w640/au.png",
                },
                {
                  // flag: "🇩🇪",
                  name: "Study in Germany",
                  uni: "400+ Universities",
                  desc: "Low Tuition Fees",
                  img: "https://flagcdn.com/w640/de.png",
                },
                {
                  // flag: "🇮🇪",
                  name: "Study in Ireland",
                  uni: "200+ Universities",
                  desc: "Top Private Universities",
                  img: "https://flagcdn.com/w640/ie.png",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-2xl p-10 flex items-center justify-between hover:scale-[1.02] transition"
                >
                  <img
                    src={item.img}
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                  />

                  <div className="relative flex items-center gap-6">
                    <span className="text-6xl">{item.flag}</span>

                    <div>
                      <h3 className="text-2xl font-semibold">{item.name}</h3>
                      <p className="text-white/80">{item.uni}</p>
                      <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                    </div>
                  </div>

                  <button className="relative px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:scale-105 transition">
                    Explore Programs
                  </button>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">
                View All Destinations
              </button>
            </div>
          </div>
        </section>

        <div className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ================= LEFT CONTENT ================= */}
            <div className="lg:col-span-2 space-y-10">
              {/* Featured News */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition">
                <div className="p-10">
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Featured Update
                  </span>

                  <h2 className="text-3xl font-bold mt-4 text-gray-900">
                    BA / BSc Part II Re-Exam Notification Released
                  </h2>

                  <p className="text-gray-500 mt-2 text-sm">
                    Sage University • 22 Jan 2026
                  </p>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    The university has officially released the re-examination
                    notification for BA and BSc Part II students. Candidates can
                    check the schedule and application procedure on the official
                    website.
                  </p>

                  <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                    Read More
                  </button>
                </div>
              </div>

              {/* Latest Updates */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-900">
                  Latest Admission & Exam Updates
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
                    >
                      <p className="text-red-600 text-xs font-semibold">
                        20 Jan 2026
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        RGPV University
                      </p>

                      <h4 className="font-semibold text-gray-800 mt-3">
                        RGPV Admission 2026-27 Notification Released
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= PROCESS CARDS ================= */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Study Abroad Admission Process */}
                <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-10 overflow-hidden">
                  {/* gradient glow */}
                  <div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-200/40 rounded-full blur-3xl"></div>

                  <h3 className="text-2xl font-bold mb-10 text-gray-900 relative z-10">
                    Study Abroad Admission Process
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 relative z-10">
                    {[
                      {
                        step: "01",
                        title: "Profile Evaluation",
                        desc: "Evaluate academic background, course interest and budget.",
                        icon: "🎓",
                      },
                      {
                        step: "02",
                        title: "University Shortlisting",
                        desc: "Find universities matching your profile and career goals.",
                        icon: "🏫",
                      },
                      {
                        step: "03",
                        title: "Entrance Exams",
                        desc: "Prepare for IELTS, TOEFL, GRE or GMAT if required.",
                        icon: "📝",
                      },
                      {
                        step: "04",
                        title: "Documents",
                        desc: "Prepare SOP, LOR, transcripts and passport documents.",
                        icon: "📄",
                      },
                      {
                        step: "05",
                        title: "Application",
                        desc: "Submit applications before deadlines.",
                        icon: "📤",
                      },
                      {
                        step: "06",
                        title: "Visa & Offer",
                        desc: "Receive offer letter and complete visa process.",
                        icon: "✈️",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="group relative bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:-translate-y-1"
                      >
                        {/* step number */}
                        <div className="absolute -top-3 -right-3 w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold shadow-md">
                          {item.step}
                        </div>

                        {/* icon */}
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-2xl mb-4 group-hover:scale-110 transition">
                          {item.icon}
                        </div>

                        <h4 className="font-semibold text-gray-800 text-lg">
                          {item.title}
                        </h4>

                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MBBS in Abroad Process */}
                <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-10 overflow-hidden">
                  {/* glow */}
                  <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-orange-200/40 rounded-full blur-3xl"></div>

                  <h3 className="text-2xl font-bold mb-10 text-gray-900 relative z-10">
                    MBBS in Abroad Admission Process
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 relative z-10">
                    {[
                      {
                        step: "01",
                        title: "Eligibility",
                        desc: "12th with PCB and NEET qualification required.",
                        icon: "🧠",
                      },
                      {
                        step: "02",
                        title: "Country Selection",
                        desc: "Choose Georgia, Russia, Kazakhstan etc.",
                        icon: "🌍",
                      },
                      {
                        step: "03",
                        title: "University Selection",
                        desc: "Select WHO & NMC approved universities.",
                        icon: "🏥",
                      },
                      {
                        step: "04",
                        title: "Documents",
                        desc: "Submit passport, academics and NEET score.",
                        icon: "📑",
                      },
                      {
                        step: "05",
                        title: "Admission Letter",
                        desc: "Receive official admission confirmation.",
                        icon: "📬",
                      },
                      {
                        step: "06",
                        title: "Visa & Travel",
                        desc: "Apply visa and prepare for departure.",
                        icon: "✈️",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="group relative bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:-translate-y-1"
                      >
                        <div className="absolute -top-3 -right-3 w-9 h-9 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold shadow-md">
                          {item.step}
                        </div>

                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-2xl mb-4 group-hover:scale-110 transition">
                          {item.icon}
                        </div>

                        <h4 className="font-semibold text-gray-800 text-lg">
                          {item.title}
                        </h4>

                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDEBAR ================= */}
            <div className="space-y-8">
              <div className="sticky top-24 space-y-8">
                {/* Quick Links */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                  <h4 className="font-bold text-xl mb-6 text-gray-900">
                    Quick Links
                  </h4>

                  <ul className="space-y-4 text-sm">
                    {[
                      "MBBS In Georgia",
                      "MBBS In Russia",
                      "Admission Process",
                      "Study Abroad",
                      "Colleges in India",
                    ].map((link, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center border-b pb-3 hover:text-blue-600 cursor-pointer transition"
                      >
                        <span>{link}</span>
                        <span>→</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-6 sm:px-8 lg:px-12 mt-20 mb-20 bg-gradient-to-b from-white via-blue-50 to-white py-16 rounded-3xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="m-0 p-0 text-4xl font-extrabold text-gray-900">
              Popular Courses in Abroad
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover top education destinations known for excellence and
              innovation.
              <br />
              Explore vibrant campuses and world-renowned institutions that
              offer unparalleled learning experiences
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Slider {...settings3}>
              {/* CARD TEMPLATE START */}
              <div className="px-4">
                <div className="group flex flex-col h-[420px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3">
                  <div className="relative overflow-hidden">
                    <img
                      src="/image/foreign-1.jpg"
                      alt="Malta"
                      className="h-52 w-full object-cover object-center group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-6 flex-grow">
                    <h4 className="text-xl font-semibold mb-4 text-center text-blue-600">
                      MBBS / Medical
                    </h4>

                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="hover:text-orange-500 transition">
                        MBBS in Georgia
                      </li>
                      <li className="hover:text-orange-500 transition">
                        MBBS in Russia
                      </li>
                      <li className="hover:text-orange-500 transition">
                        MBBS in Uzbekistan
                      </li>
                      <li className="hover:text-orange-500 transition">
                        MBBS in Kazakhstan
                      </li>
                      <li className="hover:text-orange-500 transition">
                        MBBS in Kyrgyzstan
                      </li>
                      <li className="hover:text-orange-500 transition">
                        MBBS in Phillipines
                      </li>
                      <li className="hover:text-orange-500 transition">
                        MBBS in Bangladesh
                      </li>
                    </ul>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500"></div>
                </div>
              </div>
              {/* CARD TEMPLATE END */}

              {[
                {
                  img: "/image/foreign-2.jpg",
                  title: "MS",
                  list: [
                    "MS in USA",
                    "MS in UK",
                    "MS in Canada",
                    "MS in Ireland",
                    "MS in Australia",
                    "MS in Germany",
                  ],
                },
                {
                  img: "/image/foreign-3.jpg",
                  title: "MBA / Management",
                  list: [
                    "MBA in USA",
                    "MBA in UK",
                    "MBA in Canada",
                    "MBA in Ireland",
                    "MBA in Australia",
                    "MBA in Germany",
                  ],
                },
                {
                  img: "/image/foreign-4.jpg",
                  title: "UG Programs",
                  list: [
                    "BSc Programs",
                    "BA Programs",
                    "BBA Programs",
                    "BCom Programs",
                    "BCA Programs",
                    "BCA Programs",
                  ],
                },
              ].map((item, index) => (
                <div key={index} className="px-4">
                  <div className="group flex flex-col h-[420px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-52 w-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    <div className="p-6 flex-grow">
                      <h4 className="text-xl font-semibold mb-4 text-center text-blue-600">
                        {item.title}
                      </h4>

                      <ul className="text-sm text-gray-600 space-y-2">
                        {item.list.map((course, i) => (
                          <li
                            key={i}
                            className="hover:text-orange-500 transition"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="w-full px-6 sm:px-8 lg:px-12 mt-20 mb-20 bg-gradient-to-b from-white via-blue-50 to-white py-16 rounded-3xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="m-0 p-0 text-4xl font-extrabold text-gray-900">
              Popular Courses in India
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover top education destinations known for excellence and
              innovation.
              <br />
              Explore vibrant campuses and world-renowned institutions that
              offer unparalleled learning experiences
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Slider {...settings3}>
              {/* CARD TEMPLATE START */}
              <div className="px-4">
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3 flex flex-col h-[420px]">
                  <div className="relative overflow-hidden">
                    <img
                      src="/image/foreign-1.jpg"
                      alt="Malta"
                      className="h-52 w-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-6 flex-grow">
                    <h4 className="text-xl font-semibold mb-4 text-center text-blue-600">
                      MBBS / Medical
                    </h4>

                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="hover:text-orange-500 transition">
                        MBBS in India
                      </li>
                      {/* <li className="hover:text-orange-500 transition">
                        MBBS in Philipines
                      </li>
                      <li className="hover:text-orange-500 transition">
                        MBBS in China
                      </li>
                      <li className="hover:text-orange-500 transition">
                        MBBS in Ukraine
                      </li>
                      <li className="hover:text-orange-500 transition">
                        MBBS in India
                      </li> */}
                    </ul>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500"></div>
                </div>
              </div>
              {/* CARD TEMPLATE END */}

              {/* Remaining Cards Same Styling */}

              {[
                {
                  img: "/image/foreign-2.jpg",
                  title: "Engineering",
                  list: [
                    "B.Tech in India",
                    "MS in India",
                    "M.Tech in IIT",
                    "Engineering in India",
                    "B.Tech in Private Universities",
                  ],
                },
                {
                  img: "/image/foreign-3.jpg",
                  title: "MBA / Management",
                  list: [
                    "MBA in India",
                    // "MBA in UK",
                    // "MBA in USA",
                    "PGDM Programs",
                    "Executive MBA",
                  ],
                },
                // {
                //   img: "/image/foreign-4.jpg",
                //   title: "LAW",
                //   list: [
                //     "BA LLB (5 years)",
                //     "BBA LLB",
                //     "LLB (3 years)",
                //     "LLM",
                //     "Corporate Law",
                //   ],
                // },
                // {
                //   img: "/image/foreign-4.jpg",
                //   title: "Science & Humanities",
                //   list: [
                //     "BSc Programs",
                //     "BA Programs",
                //     "MSc Programs",
                //     "MA Programs",
                //     "PhD Programs",
                //   ],
                // },
              ].map((item, index) => (
                <div key={index} className="px-4">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-52 w-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-4 text-center text-blue-600">
                        {item.title}
                      </h4>

                      <ul className="text-sm text-gray-600 space-y-2">
                        {item.list.map((course, i) => (
                          <li
                            key={i}
                            className="hover:text-orange-500 transition"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 bg-gradient-to-b from-white via-blue-50 to-white rounded-3xl">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Why Choose Beyond Admission
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              We make the university admission process simple, fast, and
              reliable for students who want to study abroad.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/image/Admission Counselling.jpg",
                title: "Admission Counselling",
                desc: "Get expert guidance to choose the right university and course based on your academic profile, budget, and career goals.",
              },
              {
                img: "/image/NEET Counselling.avif",
                title: "NEET Counselling",
                desc: "Receive professional support for NEET counselling, including college selection, documentation, and admission guidance.",
              },
              {
                img: "/image/visa-support.jpg",
                title: "Visa Support",
                desc: "Complete visa assistance including document preparation, application filing, and interview guidance for smooth approval.",
              },
              {
                img: "/image/education-loan.webp",
                title: "Educational Loan",
                desc: "Get help securing education loans with trusted financial partners to fund your tuition fees and living expenses abroad.",
              },
              {
                img: "/image/university-shortlisting.jpg",
                title: "University Shortlisted",
                desc: "We shortlist the best universities and programs based on your profile, academic performance, and future career plans.",
              },
              {
                img: "/image/sop-lor.jpeg",
                title: "SOP & LOR",
                desc: "Professional assistance in preparing strong SOPs, LORs, and resumes to improve your chances of university admission.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden group hover:-translate-y-2"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900">
                Study Abroad <span className="text-blue-600">Process</span>
              </h2>

              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Our step-by-step process ensures students get the right guidance
                from profile evaluation to visa approval.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* line */}
              <div className="hidden lg:block absolute top-10 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 to-orange-500"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                {steps.map((step, index) => (
                  <div key={index} className="relative text-center group">
                    {/* Icon */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white text-2xl shadow-lg transition group-hover:scale-110">
                      {step.icon}
                    </div>

                    {/* Card */}
                    <div
                      className="mt-10 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 
                transition-all duration-500 transform 
                group-hover:-translate-y-4 
                group-hover:rotate-1 
                group-hover:shadow-2xl"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-24 relative overflow-hidden">
          {/* Soft Glow Background */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col items-center justify-center px-4 text-center">
            {/* Top Label */}
            <span className="text-blue-600 text-lg sm:text-xl lg:text-2xl font-semibold tracking-widest uppercase bg-blue-100 px-6 py-2 rounded-full shadow-sm">
              Our Services
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 pt-6 pb-6 max-w-3xl leading-tight">
              Support, Growth & Career After Enrollment
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 max-w-4xl text-base sm:text-lg leading-relaxed">
              Our commitment doesn’t stop once you secure admission. We continue
              to walk with you through every stage of your academic and
              professional journey — from accommodation support and career
              mentoring to internships, skill development, and placement
              preparation.
              <br />
              <br />
              Explore our Beyond Admission blogs to discover expert insights,
              practical tips, and success stories that help you grow with
              confidence.
            </p>

            {/* Decorative Accent Line */}
            <div className="mt-10 h-1 w-32 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-white via-blue-50 to-white max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-16 py-24">
          {/* CARD 1 */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-3 flex flex-col">
            <div className="relative overflow-hidden">
              <img
                src="/image/campus-1.jpg"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <ul className="flex gap-6 text-sm text-gray-500 mb-3">
                <li className="flex items-center gap-1">
                  <IoTimeOutline /> Feb 02, 2024
                </li>
                <li className="flex items-center gap-1">
                  <MdOutlinePersonOutline /> Career Team
                </li>
              </ul>

              <p className="text-gray-900 text-xl font-semibold group-hover:text-orange-500 transition cursor-pointer">
                How Hostel & Campus Support Shapes Student Success
              </p>

              <a
                href="/"
                className="mt-4 text-blue-600 font-semibold hover:text-orange-500 transition"
              >
                Read more →
              </a>

              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-3 flex flex-col">
            <div className="relative overflow-hidden">
              <img
                src="/image/campus-2.jpg"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <ul className="flex gap-6 text-sm text-gray-500 mb-3">
                <li className="flex items-center gap-1">
                  <IoTimeOutline /> Feb 05, 2024
                </li>
                <li className="flex items-center gap-1">
                  <MdOutlinePersonOutline /> Placement Desk
                </li>
              </ul>

              <p className="text-gray-900 text-xl font-semibold group-hover:text-orange-500 transition cursor-pointer">
                Placement Preparation: What Every Student Should Know
              </p>

              <a
                href="/"
                className="mt-4 text-blue-600 font-semibold hover:text-orange-500 transition"
              >
                Read more →
              </a>

              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-3 flex flex-col">
            <div className="relative overflow-hidden">
              <img
                src="/image/campus-3.jpg"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <ul className="flex gap-6 text-sm text-gray-500 mb-3">
                <li className="flex items-center gap-1">
                  <IoTimeOutline /> Feb 07, 2024
                </li>
                <li className="flex items-center gap-1">
                  <MdOutlinePersonOutline /> Internship Team
                </li>
              </ul>

              <p className="text-gray-900 text-xl font-semibold group-hover:text-orange-500 transition cursor-pointer">
                Why Internships Matter More Than Your Degree
              </p>

              <a
                href="/"
                className="mt-4 text-blue-600 font-semibold hover:text-orange-500 transition"
              >
                Read more →
              </a>

              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-3 flex flex-col">
            <div className="relative overflow-hidden">
              <img
                src="/image/campus-4.jpg"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <ul className="flex gap-6 text-sm text-gray-500 mb-3">
                <li className="flex items-center gap-1">
                  <IoTimeOutline /> Feb 10, 2024
                </li>
                <li className="flex items-center gap-1">
                  <MdOutlinePersonOutline /> Mentorship Team
                </li>
              </ul>

              <p className="text-gray-900 text-xl font-semibold group-hover:text-orange-500 transition cursor-pointer">
                Career Mentorship: Your Roadmap After College
              </p>

              <a
                href="/"
                className="mt-4 text-blue-600 font-semibold hover:text-orange-500 transition"
              >
                Read more →
              </a>

              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-3 flex flex-col">
            <div className="relative overflow-hidden">
              <img
                src="/image/campus-5.jpg"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <ul className="flex gap-6 text-sm text-gray-500 mb-3">
                <li className="flex items-center gap-1">
                  <IoTimeOutline /> Feb 12, 2024
                </li>
                <li className="flex items-center gap-1">
                  <MdOutlinePersonOutline /> Student Support
                </li>
              </ul>

              <p className="text-gray-900 text-xl font-semibold group-hover:text-orange-500 transition cursor-pointer">
                Life After Admission: Managing Academics & Growth
              </p>

              <a
                href="/"
                className="mt-4 text-blue-600 font-semibold hover:text-orange-500 transition"
              >
                Read more →
              </a>

              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-3 flex flex-col">
            <div className="relative overflow-hidden">
              <img
                src="/image/campus-6.jpg"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <ul className="flex gap-6 text-sm text-gray-500 mb-3">
                <li className="flex items-center gap-1">
                  <IoTimeOutline /> Feb 15, 2024
                </li>
                <li className="flex items-center gap-1">
                  <MdOutlinePersonOutline /> Career Coach
                </li>
              </ul>

              <p className="text-gray-900 text-xl font-semibold group-hover:text-orange-500 transition cursor-pointer">
                From Classroom to Career: Your Transition Guide
              </p>

              <a
                href="/"
                className="mt-4 text-blue-600 font-semibold hover:text-orange-500 transition"
              >
                Read more →
              </a>

              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>
        </div>
        <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
          {/* Soft Glow Background */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4">
            {/* Heading */}
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                Our Impact
              </span>

              <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
                Numbers That Speak
              </h2>

              <p className="mt-4 text-lg text-gray-600">
                Our track record reflects our commitment to student success
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {/* CARD */}
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-3">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 transition">
                  <Users className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
                </div>
                <p className="text-3xl font-bold text-blue-600 group-hover:text-orange-500 transition">
                  10000+
                </p>
                <p className="mt-3 text-lg font-semibold">Students Placed</p>
                <p className="mt-2 text-sm text-gray-500">
                  Successfully admitted students
                </p>
              </div>

              {/* Repeat same card structure for remaining 5 */}

              <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-3">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 transition">
                  <Globe className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
                </div>
                <p className="text-3xl font-bold text-blue-600 group-hover:text-orange-500 transition">
                  25+
                </p>
                <p className="mt-3 text-lg font-semibold">Countries</p>
                <p className="mt-2 text-sm text-gray-500">
                  Global destinations covered
                </p>
              </div>

              <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-3">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 transition">
                  <Building className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
                </div>
                <p className="text-3xl font-bold text-blue-600 group-hover:text-orange-500 transition">
                  500+
                </p>
                <p className="mt-3 text-lg font-semibold">
                  Partner Universities
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Worldwide university network
                </p>
              </div>

              <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-3">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 transition">
                  <Award className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
                </div>
                <p className="text-3xl font-bold text-blue-600 group-hover:text-orange-500 transition">
                  98%
                </p>
                <p className="mt-3 text-lg font-semibold">Success Rate</p>
                <p className="mt-2 text-sm text-gray-500">Visa approval rate</p>
              </div>

              <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-3">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 transition">
                  <GraduationCap className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
                </div>
                <p className="text-3xl font-bold text-blue-600 group-hover:text-orange-500 transition">
                  15+
                </p>
                <p className="mt-3 text-lg font-semibold">Years Experience</p>
                <p className="mt-2 text-sm text-gray-500">
                  In education consultancy
                </p>
              </div>

              <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-3">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 transition">
                  <Star className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
                </div>
                <p className="text-3xl font-bold text-blue-600 group-hover:text-orange-500 transition">
                  4.9/5
                </p>
                <p className="mt-3 text-lg font-semibold">Student Rating</p>
                <p className="mt-2 text-sm text-gray-500">Based on reviews</p>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
          {/* Soft Glow Background */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

          {/* Heading */}
          <div className="relative text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Have questions about Beyond Admission? Find answers to the most
              common queries from students regarding our services, support, and
              processes.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:px-6 md:px-10 lg:px-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 font-semibold text-left text-gray-900 hover:text-blue-600 transition"
                  onClick={() => toggle(index)}
                >
                  <span>{faq.question}</span>

                  <span className="ml-4 transition-transform duration-300">
                    {activeIndex === index ? (
                      <FaMinus className="text-blue-600" />
                    ) : (
                      <FaPlus className="text-blue-600" />
                    )}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="px-6 py-5 text-gray-700 border-t bg-gradient-to-r from-blue-50 to-white leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
          {/* Soft Glow Background */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 text-center">
            {/* Heading */}
            <h2 className="text-4xl font-extrabold mb-14 text-gray-900">
              Universities by <span className="text-blue-600">State</span>
            </h2>

            {/* Left Button */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 
      bg-white shadow-xl hover:shadow-2xl
      hover:scale-110 transition-all duration-300 
      rounded-full p-3 z-10 border border-gray-100"
            >
              <FiChevronLeft size={22} />
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 
      bg-white shadow-xl hover:shadow-2xl
      hover:scale-110 transition-all duration-300 
      rounded-full p-3 z-10 border border-gray-100"
            >
              <FiChevronRight size={22} />
            </button>

            {/* Slider */}
            <ul
              ref={sliderRef}
              className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar px-16"
            >
              {states.map((state, i) => (
                <li key={i} className="min-w-[180px]">
                  <a
                    href={state.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center justify-center 
            bg-white rounded-3xl p-6
            shadow-md hover:shadow-2xl 
            transition-all duration-500 hover:-translate-y-3 
            border border-gray-100"
                  >
                    <div
                      className="h-24 w-24 flex items-center justify-center 
              bg-gradient-to-tr from-blue-50 to-orange-50 
              rounded-2xl mb-4 group-hover:bg-gradient-to-r 
              group-hover:from-blue-600 group-hover:to-orange-500 
              transition duration-500"
                    >
                      <img
                        src={state.img}
                        alt={state.name}
                        className="h-14 object-contain group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition">
                      {state.name}
                    </p>

                    {/* Decorative underline */}
                    <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full group-hover:w-20 transition-all duration-500"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div className="w-full bg-[#54baa8] ">
          <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 px-5 py-10 lg:py-16 lg:px-24">
            <div className="flex flex-col gap-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Join Our Newsletter
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-lg">
                Subscribe our newsletter to get our latest updates, offers &
                news.
              </p>
            </div>

            <div className="w-full sm:w-[420px] bg-white flex items-center rounded-full p-2 shadow-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm outline-none rounded-full"
              />
              <button className="bg-black text-white text-sm sm:text-base rounded-full px-5 py-2 hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-full bg-[#0e2a46] text-white">
          <div className="flex flex-col items-start justify-start gap-2 sm:p-2 md:px-4  w-full ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  items-start justify-between sm:px-4 md:px-8 lg:px-8 p-2 md:py-16 w-full">
              <div className="flex flex-col items-start justify-start gap-6 p-6 ">
                <img src="/image/beyond-logo.png" className="w-36" />
                <p className="text-white text-sm ">
                  Your trusted partner for admissions in India and abroad. We
                  help students achieve their dreams of studying at top
                  universities worldwide.
                </p>
                <ul className="flex flex-wrap items-start justify-start gap-4 ">
                  <li className="rounded-full p-3 bg-gray-500">
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="rounded-full p-3 bg-gray-500">
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="rounded-full p-3 bg-gray-500">
                    <a href="https://in.pinterest.com/" target="_blank">
                      <FaPinterest />
                    </a>
                  </li>
                  <li className="rounded-full p-3 bg-gray-500">
                    <a href="https://www.twitter.com/" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start justify-start gap-6 p-6 ">
                <h3 className="text-white text-lg md:text-2xl font-bold">
                  quick links:
                </h3>
                <ul className="flex flex-col items-start justify-start gap-4 ">
                  <li className="text-gray-400 text-lg font-semibold cursor-pointer">
                    <a href="/stake">About Us</a>
                  </li>
                  <li className="text-gray-400 text-lg font-semibold cursor-pointer">
                    <a href="/contact">Study Abroad</a>{" "}
                  </li>
                  <li className="text-gray-400 text-lg font-semibold cursor-pointer">
                    <a href="/service">India Admissions</a>
                  </li>
                  <li className="text-gray-400 text-lg font-semibold cursor-pointer">
                    <a href="/event">Courses</a>
                  </li>
                  <li className="text-gray-400 text-lg font-semibold cursor-pointer">
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start justify-start gap-6 p-6 ">
                <h3 className="text-white text-lg md:text-2xl font-bold">
                  Popular Courses
                </h3>

                <ul className="flex flex-col items-start justify-start gap-4 ">
                  <li className="text-gray-400 text-lg font-semibold cursor-pointer">
                    <a href="/">MBBS Abroad</a>
                  </li>
                  <li className="text-gray-400 text-lg font-semibold cursor-pointer">
                    <a href="/about">Engineering</a>
                  </li>
                  <li className="text-gray-400 text-lg font-semibold cursor-pointer">
                    <a href="/service">MBA</a>
                  </li>
                  <li className="text-gray-400 text-lg font-semibold cursor-pointer">
                    <a href="/blog">Medical & Nursing</a>
                  </li>
                  <li className="text-gray-400 text-lg font-semibold cursor-pointer">
                    <a href="/contact">Paramedical</a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start justify-start gap-6 p-6  ">
                <h3 className="text-white text-lg md:text-2xl font-bold">
                  Gallery
                </h3>
                <ul className="grid grid-cols-3 items-start justify-start gap-4 ">
                  <li className=" cursor-pointer">
                    <img
                      src="/image/thumb-1-1.png"
                      alt=""
                      height="70"
                      width="120"
                    />
                  </li>
                  <li className=" cursor-pointer">
                    <img
                      src="/image/thumb-1-2.png"
                      alt=""
                      height="70"
                      width="120"
                    />
                  </li>
                  <li className=" cursor-pointer">
                    <img
                      src="/image/thumb-1-3.png"
                      alt=""
                      height="70"
                      width="120"
                    />
                  </li>
                  <li className=" cursor-pointer">
                    <img
                      src="/image/thumb-1-4.png"
                      alt=""
                      height="70"
                      width="120"
                    />
                  </li>
                  <li className=" cursor-pointer">
                    <img
                      src="/image/thumb-1-5.png"
                      alt=""
                      height="70"
                      width="120"
                    />
                  </li>
                  <li className=" cursor-pointer">
                    <img
                      src="/image/thumb-1-6.png"
                      alt=""
                      height="70"
                      width="120"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0e2a46] text-white flex flex-wrap items-center justify-center gap-2 p-3  sm:px-6 md:px-12 lg:px-16 py-5 w-full">
          <span className="text-[#ffffff] text-sm">
            Copyright © 2023 <span className="text-[#0ab99d]">Educate</span> ||
            All Rights Reserved
          </span>
        </div> */}
      </>
    );
}

export default Home;