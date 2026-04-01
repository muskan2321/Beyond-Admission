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
import { FaMoneyBillWave } from "react-icons/fa";
import CollegeSliderCard from "../component/CollegeSliderCard";
import FloatingSidebar from "../component/FloatingSidebar";
import { useEffect } from "react";


import { Link } from "react-router-dom";
import {
  Users,
  Globe,
  Building,
  Award,
  GraduationCap,
  Star,
} from "lucide-react";
import { FaGlobe, FaHandshake } from "react-icons/fa";
import {
  FaClipboardList,
  
  FaFileSignature,
  FaSearch,
  FaEnvelopeOpenText,
  FaPlaneDeparture,
  
} from "react-icons/fa";
import {
  FaRupeeSign,
} from "react-icons/fa";





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
      question:
        "Can I apply to multiple universities and countries through Beyond Admission?",
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
      items: [
        "Maharashtra",
        "Tamilnadu",
        "Madhya Pradesh",
        "Uttar Pradesh",
        "Karnataka",
        "Rajasthan",
        "Punjab",
        "Bihar",
        "Assam",
        "Jharkhand",
        "Himachal Pradesh",
      ],
    },
  ];

  const states = [
    {
      name: "Andhra Pradesh",
      img: "/image/ap.png",
      link: "andhra-pradesh-universities",
    },
    {
      name: "Arunachal Pradesh",
      img: "/image/arunachalp.png",
      link: "arunachal-pradesh-universities",
    },
    { name: "Assam", img: "/image/assam.png", link: "assam-universities" },
    { name: "Bihar", img: "/image/bihar.png", link: "bihar-universities" },
    {
      name: "Chhattisgarh",
      img: "/image/chhattisgarh.png",
      link: "chhattisgarh-universities",
    },
    { name: "Goa", img: "/image/goa.png", link: "goa-universities" },
    {
      name: "Gujarat",
      img: "/image/gujarat.png",
      link: "gujarat-universities",
    },
    {
      name: "Haryana",
      img: "/image/haryana.png",
      link: "haryana-universities",
    },
    {
      name: "Himachal Pradesh",
      img: "/image/hp.png",
      link: "himachal-pradesh-universities",
    },
    {
      name: "Jharkhand",
      img: "/image/jharkhand.png",
      link: "jharkhand-universities",
    },
    {
      name: "Karnataka",
      img: "/image/karnataka.png",
      link: "karnataka-universities",
    },
    { name: "Kerala", img: "/image/kerala.png", link: "kerala-universities" },
    {
      name: "Madhya Pradesh",
      img: "/image/mp.png",
      link: "madhya-pradesh-universities",
    },
    {
      name: "Maharashtra",
      img: "/image/maharashtra.png",
      link: "maharashtra-universities",
    },
    {
      name: "Manipur",
      img: "/image/manipur.png",
      link: "manipur-universities",
    },

    { name: "Odisha", img: "/image/odisha.png", link: "odisha-universities" },
    { name: "Punjab", img: "/image/punjab.png", link: "punjab-universities" },
    {
      name: "Rajasthan",
      img: "/image/rajasthan.png",
      link: "rajasthan-universities",
    },

    {
      name: "Telangana",
      img: "/image/telengana.png",
      link: "telangana-universities",
    },

    {
      name: "Uttar Pradesh",
      img: "/image/uttarpradesh.png",
      link: "uttar-pradesh-universities",
    },
    {
      name: "West Bengal",
      img: "/image/westbengal.png",
      link: "west-bengal-universities",
    },
    {
      name: "Chandigarh (UT)",
      img: "/image/chandigarh.png",
      link: "chandigarh-universities",
    },
    {
      name: "Delhi (NCT)",
      img: "/image/delhi.png",
      link: "delhi-universities",
    },
    {
      name: "Jammu & Kashmir (UT)",
      img: "/image/jnk.png",
      link: "jammu-and-kashmir-universities",
    },
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

  // Responsive slider settings
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480, // xs screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  //  Popular Countries to Study Abroad START
  const destinations = [
    {
      name: "USA",
      fullName: "Study in USA",
      uni: "500+ Universities",
      desc: "Ivy League & Top Universities",
      longDesc:
        "Home to 8 Ivy League schools and over 4,000 accredited institutions.",
      img: "https://flagcdn.com/w80/us.png",
      link: "/study-usa",
      color: "from-blue-50 to-indigo-50",
      accent: "blue",
      stats: "33% of top 100 universities",
      popular: true,
    },
    {
      name: "UK",
      fullName: "Study in UK",
      uni: "130+ Universities",
      desc: "Russell Group Universities",
      longDesc:
        "World-class education with historic universities and modern campuses.",
      img: "https://flagcdn.com/w80/gb.png",
      link: "/study-uk",
      color: "from-red-50 to-blue-50",
      accent: "red",
      stats: "4 in top 10 global universities",
      popular: true,
    },
    {
      name: "Canada",
      fullName: "Study in Canada",
      uni: "100+ Universities",
      desc: "PR Pathway Options",
      longDesc:
        "Affordable education with excellent post-graduation work opportunities.",
      img: "https://flagcdn.com/w80/ca.png",
      link: "/study-canada",
      color: "from-red-50 to-white",
      accent: "red",
      stats: "Post-study work permit up to 3 years",
      popular: true,
    },
    {
      name: "Australia",
      fullName: "Study in Australia",
      uni: "45+ Universities",
      desc: "Group of Eight Universities",
      longDesc:
        "High-quality education and vibrant student cities with great climate.",
      img: "https://flagcdn.com/w80/au.png",
      link: "/study-australia",
      color: "from-blue-50 to-green-50",
      accent: "green",
      stats: "7 cities ranked in top 100 student cities",
      popular: false,
    },
    {
      name: "Germany",
      fullName: "Study in Germany",
      uni: "400+ Universities",
      desc: "Low Tuition Fees",
      longDesc:
        "Tuition-free education at public universities with strong engineering focus.",
      img: "https://flagcdn.com/w80/de.png",
      link: "/study-germany",
      color: "from-red-50 to-yellow-50",
      accent: "yellow",
      stats: "Public universities: zero tuition fees",
      popular: false,
    },
    {
      name: "Ireland",
      fullName: "Study in Ireland",
      uni: "200+ Universities",
      desc: "Top Private Universities",
      longDesc:
        "English-speaking gateway to Europe with thriving tech industry.",
      img: "https://flagcdn.com/w80/ie.png",
      link: "/study-ireland",
      color: "from-green-50 to-emerald-50",
      accent: "green",
      stats: "Stay-back visa up to 2 years",
      popular: false,
    },
  ];
  //  Popular Countries to Study Abroad END
  // Study Abroad Admission Process Start
  const process = [
    {
      id: "01",
      title: "Profile Evaluation",
      desc: "Our experts evaluate your academic background, goals, and budget to guide you toward the best-fit universities.",
      icon: <FaClipboardList />,
      color: "orange",
    },
    {
      id: "02",
      title: "University Shortlisting",
      desc: "Based on your profile, we shortlist top universities and programs that match your career goals.",
      icon: <FaFileAlt />,
      color: "teal",
    },
    {
      id: "03",
      title: "Entrance Exam",
      desc: "Prepare for required exams like IELTS, TOEFL, GRE, or GMAT based on your chosen country and course.",
      icon: <FaFileSignature />,
      color: "yellow",
    },
    {
      id: "04",
      title: "Documents",
      desc: "Prepare and submit all required documents including SOP, LOR, transcripts, and passport.",
      icon: <FaSearch />,
      color: "green",
    },
    {
      id: "05",
      title: "Application",
      desc: "Submit your applications to shortlisted universities with complete documentation and accuracy.",
      icon: <FaEnvelopeOpenText />,
      color: "cyan",
    },
    {
      id: "06",
      title: "Visa & Offer",
      desc: "Receive your offer letter and complete the visa process with proper documentation and guidance.",
      icon: <FaPlaneDeparture />,
      color: "blue",
    },
    {
      id: "07",
      title: "Loan Assistance",
      desc: "Get expert guidance in securing education loans with easy documentation, quick approvals, and support from trusted financial partners.",
      icon: <FaMoneyBillWave />,
      color: "blue",
    },
    {
      id: "08",
      title: "Post Admission Process",
      desc: "Complete your admission journey with visa assistance, travel planning, accommodation support, and pre-departure guidance.",
      icon: <FaUserCheck />,
      color: "blue",
    },
  ];
  const colorMap = {
    orange: "border-orange-500 text-orange-500",
    teal: "border-teal-500 text-teal-500",
    yellow: "border-yellow-500 text-yellow-500",
    green: "border-green-500 text-green-500",
    cyan: "border-cyan-500 text-cyan-500",
    blue: "border-blue-500 text-blue-500",
    pink: "border-pink-500 text-pink-500",
  };
  // Study Abroad Admission Process end
  // Study Abroad MBBS Admission Process START
  const processMBBS = [
    {
      id: "01",
      title: "Eligibility",
      desc: "We assess your academic qualifications, entrance scores, and overall profile to determine your eligibility for suitable courses and universities.",
      icon: <FaClipboardList />,
      color: "orange",
    },
    {
      id: "02",
      title: "Country Selection",
      desc: "Based on your preferences, budget, and career goals, we help you choose the most suitable country for your studies.",
      icon: <FaFileAlt />,
      color: "teal",
    },
    {
      id: "03",
      title: "University Selection",
      desc: "We shortlist the best universities and programs that align with your academic background and future career aspirations.",
      icon: <FaFileSignature />,
      color: "yellow",
    },
    {
      id: "04",
      title: "Documents",
      desc: "Get complete assistance in preparing essential documents like SOP, LOR, academic transcripts, and other requirements.",
      icon: <FaSearch />,
      color: "green",
    },
    {
      id: "05",
      title: "Admission Letter",
      desc: "We guide you through the application process and help you secure admission offers from top universities.",
      icon: <FaEnvelopeOpenText />,
      color: "cyan",
    },
    {
      id: "06",
      title: "Visa & Travel",
      desc: "Receive expert support for visa processing, interview preparation, and travel arrangements for a smooth journey abroad.",
      icon: <FaPlaneDeparture />,
      color: "blue",
    },
  ];
  const colorMap1 = {
    orange: "border-orange-500 text-orange-500",
    teal: "border-teal-500 text-teal-500",
    yellow: "border-yellow-500 text-yellow-500",
    green: "border-green-500 text-green-500",
    cyan: "border-cyan-500 text-cyan-500",
    blue: "border-blue-500 text-blue-500",
    pink: "border-pink-500 text-pink-500",
  };
  // Study Abroad mbbs Admission Process end

  // TEST-PREP START
  const testprep = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    responsive: [
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

  const exams = [
    {
      img: "/image/ielts.png",
      title: "IELTS Preparation",
      desc: "Boost your English proficiency with expert-led IELTS training.",
      path: "/ielts",
    },
    {
      img: "/image/gre.png",
      title: "GRE Preparation",
      desc: "Achieve your goals faster with focused GRE preparation.",
      path: "/gre",
    },
    {
      img: "/image/toefl.png",
      title: "TOEFL Training",
      desc: "Learn at your own pace with expert-led flexible modules.",
      path: "/toefl",
    },
    {
      img: "/image/gmat.webp",
      title: "GMAT Preparation",
      desc: "Tailored learning modules to help you ace the GMAT exam.",
      path: "/gmat",
    },
    {
      img: "/image/sat.svg",
      title: "SAT Preparation",
      desc: "Comprehensive preparation to help you achieve a high SAT score.",
      path: "/sat",
    },
  ];
  // TEST-PREP END
  // MBBS ABROAD START CLLG
  const [active, setActive] = useState("Russia");
  const countries1 = [
    "Russia",
    "Georgia",
    "Uzbekistan",
    "Kazakhstan",
    "Kyrgyzstan",
  ];

  const data1 = [
    {
      name: "Siberian State Medical University",
      city: "Tomsk, Russia",
      fees: "3,85,600 RUB / yr",
      year: "1878",
      rank: 3,
      country: "Russia",
      img: "/image/mbbs1.webp",
    },
    {
      name: "Voronezh State Medical University",
      city: "Voronezh, Russia",
      fees: "4,65,000 RUB / yr",
      year: "1918",
      rank: 15,
      country: "Russia",
      img: "/image/mbbs2.webp",
    },
    {
      name: "Bashkir State Medical University",
      city: "Kazan, Russia",
      fees: "3,90,000 RUB / yr",
      year: "1814",
      rank: 9,
      country: "Russia",
      img: "/image/mbbs3.webp",
    },
    {
      name: "Kemerovo State University",
      city: "Kazan, Russia",
      fees: "2,95,000 RUB / yr",
      year: "1955",
      rank: 12,
      country: "Russia",
      img: "/image/mbbs4.webp",
    },
    {
      name: "North Caucasian State Medical Academy",
      city: "Kazan, Russia",
      fees: "3,00,000 RUB / yr",
      year: "1814",
      rank: 9,
      country: "Russia",
      img: "/image/mbbs5.webp",
    },
    {
      name: "Kazan State Medical University",
      city: "Kazan, Russia",
      fees: "6,00,000 RUB / yr",
      year: "1814",
      rank: 9,
      country: "Russia",
      img: "/image/mbbs6.webp",
    },
    {
      name: "First Moscow State Medical University",
      city: "Moscow, Russia",
      fees: "11,00,000 RUB / yr",
      year: "1758",
      rank: 5,
      country: "Russia",
      img: "/image/mbbs7.webp",
    },
    {
      name: "Kazan Federal University",
      city: "Kazan, Russia",
      fees: "5,95,000 RUB / yr",
      year: "1804",
      rank: 10,
      country: "Russia",
      img: "/image/mbbs8.webp",
    },
    {
      name: "Tbilisi State Medical University",
      city: "Tbilisi, Georgia",
      fees: "5,00,000 INR / yr",
      year: "1918",
      rank: 10,
      country: "Georgia",
      img: "/image/mbbs9.webp",
    },
    {
      name: "Avicenna Batumi Medical University",
      city: "Batumi, Georgia",
      fees: "4,900 USD / yr",
      year: "2022",
      rank: 12,
      country: "Georgia",
      img: "/image/mbbs10.webp",
    },
    {
      name: "Ilia State University",
      city: "Tbilisi, Georgia",
      fees: "6,200 USD / yr",
      year: "2006",
      rank: 15,
      country: "Georgia",
      img: "/image/mbbs11.webp",
    },
    {
      name: "Georgian National University (SEU)",
      city: "Tbilisi, Georgia",
      fees: "6,300 USD / yr",
      year: "2001",
      rank: 14,
      country: "Georgia",
      img: "/image/mbbs12.webp",
    },
    {
      name: "David Tvildiani Medical University",
      city: "Tbilisi, Georgia",
      fees: "6,000 USD / yr",
      year: "1992",
      rank: 20,
      country: "Georgia",
      img: "/image/mbbs13.webp",
    },
    {
      name: "Grigol Robakidze University",
      city: "Tbilisi, Georgia",
      fees: "5,500 USD / yr",
      year: "1992",
      rank: 22,
      country: "Georgia",
      img: "/image/mbbs14.webp",
    },
    {
      name: "European University Georgia",
      city: "Tbilisi, Georgia",
      fees: "2,600 USD / yr",
      year: "2012",
      rank: 25,
      country: "Georgia",
      img: "/image/mbbs15.webp",
    },
    {
      name: "Tashkent Medical Academy",
      city: "Tashkent, Uzbekistan",
      fees: "4,500 USD / yr",
      year: "2005",
      rank: 10,
      country: "Uzbekistan",
      img: "/image/mbbs16.webp",
    },
    {
      name: "Fergana State University Medical Centre",
      city: "Fergana, Uzbekistan",
      fees: "3,500 USD / yr",
      year: "1992",
      rank: 18,
      country: "Uzbekistan",
      img: "/image/mbbs17.webp",
    },
    {
      name: "Samarkand State Medical University",
      city: "Samarkand, Uzbekistan",
      fees: "3,800 USD / yr",
      year: "1930",
      rank: 14,
      country: "Uzbekistan",
      img: "/image/mbbs18.webp",
    },
    {
      name: "Bukhara State Medical Institute",
      city: "Bukhara, Uzbekistan",
      fees: "3,200 USD / yr",
      year: "1990",
      rank: 19,
      country: "Uzbekistan",
      img: "/image/mbbs19.webp",
    },
    {
      name: "Tashkent State Dental Institute",
      city: "Tashkent, Uzbekistan",
      fees: "4,350 USD / yr",
      year: "2014",
      rank: 16,
      country: "Uzbekistan",
      img: "/image/mbbs20.webp",
    },
    {
      name: "Tashkent Medical Academy – Urgench Branch",
      city: "Urgench, Uzbekistan",
      fees: "4,000 USD / yr",
      year: "1992",
      rank: 22,
      country: "Uzbekistan",
      img: "/image/mbbs21.webp",
    },
    {
      name: "Andijan State Medical Institute",
      city: "Andijan, Uzbekistan",
      fees: "3,500 USD / yr",
      year: "1955",
      rank: 24,
      country: "Uzbekistan",
      img: "/image/mbbs22.webp",
    },
    {
      name: "Kazakh National Medical University",
      city: "Almaty, Kazakhstan",
      fees: "6,300 USD / yr",
      year: "1930",
      rank: 12,
      country: "Kazakhstan",
      img: "/image/mbbs23.webp",
    },
    {
      name: "Kazakh Russian Medical University",
      city: "Almaty, Kazakhstan",
      fees: "4,500 USD / yr",
      year: "1992",
      rank: 6,
      country: "Kazakhstan",
      img: "/image/mbbs24.webp",
    },
    {
      name: "Marat Ospanov Medical University",
      city: "Aktobe, Kazakhstan",
      fees: "4,100 USD / yr",
      year: "1957",
      rank: 8,
      country: "Kazakhstan",
      img: "/image/mbbs25.webp",
    },
    {
      name: "Kokshetau State University",
      city: "Kokshetau, Kazakhstan",
      fees: "3,800 USD / yr",
      year: "1962",
      rank: 13,
      country: "Kazakhstan",
      img: "/image/mbbs26.webp",
    },
    {
      name: "Caspian University",
      city: "Almaty, Kazakhstan",
      fees: "4,500 USD / yr",
      year: "1992",
      rank: 11,
      country: "Kazakhstan",
      img: "/image/mbbs27.webp",
    },
    {
      name: "Semey State Medical University",
      city: "Semey, Kazakhstan",
      fees: "3,800 USD / yr",
      year: "1952",
      rank: 19,
      country: "Kazakhstan",
      img: "/image/mbbs28.webp",
    },
    {
      name: "Al-Farabi Kazakh National University",
      city: "Almaty, Kazakhstan",
      fees: "4,900 USD / yr",
      year: "1934",
      rank: 4,
      country: "Kazakhstan",
      img: "/image/mbbs29.webp",
    },
    {
      name: "Jalalabad State University",
      city: "Jalalabad, Kyrgyzstan",
      fees: "4,200 USD / yr",
      year: "1993",
      rank: 16,
      country: "Kyrgyzstan",
      img: "/image/mbbs30.webp",
    },
    {
      name: "OSH State Medical University",
      city: "Osh, Kyrgyzstan",
      fees: "4,000 USD / yr",
      year: "1951",
      rank: 9,
      country: "Kyrgyzstan",
      img: "/image/mbbs31.webp",
    },
    {
      name: "Adam University",
      city: "Bishkek, Kyrgyzstan",
      fees: "4,000 USD / yr",
      year: "1994",
      rank: 21,
      country: "Kyrgyzstan",
      img: "/image/mbbs32.webp",
    },
    {
      name: "International School of Medicine",
      city: "Bishkek, Kyrgyzstan",
      fees: "6,000 USD / yr",
      year: "2003",
      rank: 18,
      country: "Kyrgyzstan",
      img: "/image/mbbs33.webp",
    },
    {
      name: "Asian Medical Institute",
      city: "Kant, Kyrgyzstan",
      fees: "3,400 USD / yr",
      year: "2004",
      rank: 13,
      country: "Kyrgyzstan",
      img: "/image/mbbs34.webp",
    },
    {
      name: "Kyrgyz State Medical Academy",
      city: "Bishkek, Kyrgyzstan",
      fees: "4,800 USD / yr",
      year: "1939",
      rank: 5,
      country: "Kyrgyzstan",
      img: "/image/mbbs35.webp",
    },
    {
      name: "International University of Kyrgyzstan",
      city: "Bishkek, Kyrgyzstan",
      fees: "5,000 USD / yr",
      year: "1993",
      rank: 17,
      country: "Kyrgyzstan",
      img: "/image/mbbs36.webp",
    },
  ];

  // ✅ FILTER LOGIC
  const filteredData = data1.filter((item) => item.country === active);

  const cllg = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  // MBBS ABROAD END CLLG

  // Study Abroad Testimonial start

  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      name: "Rahul Sharma",
      country: "USA 🇺🇸",
      course: "MS in Computer Science",
      review:
        "Beyond Admission made my dream come true. From university selection to visa process, everything was smooth and guided perfectly.",
      image: "/image/student1.jpg",
    },
    {
      name: "Priya Singh",
      country: "UK 🇬🇧",
      course: "MBA",
      review:
        "The counseling team is very supportive. I got admission in my dream university without any stress.",
      image: "/image/student2.avif",
    },
    {
      name: "Aman Verma",
      country: "Canada 🇨🇦",
      course: "PG Diploma",
      review:
        "Best consultancy! They helped me in SOP, visa and even accommodation. Highly recommended.",
      image: "/image/student3.jpg",
    },
    {
      name: "Sneha Gupta",
      country: "Australia 🇦🇺",
      course: "Bachelors in Business",
      review:
        "Amazing experience! Proper guidance at every step. I felt very confident throughout the process.",
      image: "/image/student4.jpg",
    },
  ];
  useEffect(() => {
    if (!testimonials?.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials]);
  // Study Abroad Testimonial end
  // Study MBBS Abroad destination start
  const mbbsDestinations = [
    {
      id: 1,
      fullName: "Georgia",
      desc: "European Standard",
      img: "https://flagcdn.com/w320/ge.png",
      longDesc:
        "European education system, globally recognized degrees, and safe environment for international students.",
      stats: "₹25-32 Lakhs • 10+ Universities",
      fees: "₹25-32 Lakhs",
      duration: "6 Years",
      recognition: "NMC (MCI), WHO, WFME",
      color: "from-purple-500/30 to-pink-500/30",
      rating: 4.8,
      link: "/mbbs-georgia",
    },
    {
      id: 2,
      fullName: "Russia",
      desc: "Top Medical Universities",
      img: "https://flagcdn.com/w320/ru.png",
      longDesc:
        "NMC & WHO approved universities with affordable fees. 6 years course with high-quality education and global recognition.",
      stats: "₹20-25 Lakhs • 50+ Universities",
      fees: "₹20-25 Lakhs",
      duration: "6 Years",
      recognition: "NMC, WHO, ECFMG",
      color: "from-red-500/30 to-blue-500/30",
      rating: 4.8,
      link: "/mbbs-russia",
    },
    {
      id: 3,
      fullName: "Uzbekistan",
      desc: "Budget-Friendly Option",
      img: "https://flagcdn.com/w320/uz.png",
      longDesc:
        "Lowest tuition fees with English medium. Simple admission process and no donation required.",
      stats: "₹15-18 Lakhs • 15+ Universities",
      fees: "₹15-18 Lakhs",
      duration: "5 Years",
      recognition: "NMC, WHO, FAIMER",
      color: "from-green-500/30 to-teal-500/30",
      rating: 4.6,
      link: "/mbbs-uzbekistan",
    },
    {
      id: 4,
      fullName: "Kazakhstan",
      desc: "High-Quality Education",
      img: "https://flagcdn.com/w320/kz.png",
      longDesc:
        "Modern infrastructure, experienced faculty, and affordable living costs. 30+ approved universities.",
      stats: "₹18-22 Lakhs • 30+ Universities",
      fees: "₹18-22 Lakhs",
      duration: "5 Years",
      recognition: "NMC, WHO, GMC",
      color: "from-yellow-500/30 to-orange-500/30",
      rating: 4.7,
      link: "/mbbs-kazakhstan",
    },
    {
      id: 5,
      fullName: "Kyrgyzstan",
      desc: "Affordable & Popular",
      img: "https://flagcdn.com/w320/kg.png",
      longDesc:
        "Affordable MBBS option with English medium and NMC approved universities. Popular among Indian students.",
      stats: "₹15-20 Lakhs • 10+ Universities",
      fees: "₹15-20 Lakhs",
      duration: "5 Years",
      recognition: "NMC, WHO, FAIMER",
      color: "from-blue-500/30 to-indigo-500/30",
      rating: 4.5,
      link: "/mbbs-kyrgyzstan",
    },
    {
      id: 6,
      fullName: "Nepal",
      desc: "Neighboring Country",
      img: "https://flagcdn.com/w320/np.png",
      longDesc:
        "Similar curriculum to India, affordable fees, and no language barrier. Easy travel and strong cultural similarity.",
      stats: "₹45-60 Lakhs • 10+ Universities",
      fees: "₹45-60 Lakhs",
      duration: "5.5 Years",
      recognition: "NMC, WHO, IMED",
      color: "from-red-500/30 to-blue-500/30",
      rating: 4.6,
      link: "/mbbs-nepal",
    },
  ];

  const RatingStars = ({ rating }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-xs ${
              i < Math.floor(rating)
                ? "text-yellow-400"
                : i < rating
                  ? "text-yellow-400 opacity-50"
                  : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };
  // Study MBBS Abroad destination end
  // studt in india start
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    {
      name: "Medical",
      icon: "🏥",
      desc: "Medical & Healthcare Programs",
      color: "from-green-500 to-emerald-500",
      subOptions: [
        { name: "MBBS", path: "/mbbs" },
        { name: "BAMS", path: "/bams" },
        { name: "BDS", path: "/bds" },
        { name: "BHMS", path: "/bhms" },
        { name: "MD/MS", path: "/md-ms" },
      ],
    },
    {
      name: "Management",
      icon: "💼",
      desc: "Business & Management Studies",
      color: "from-blue-500 to-indigo-500",
      subOptions: [
        { name: "BBA", path: "/bba" },
        { name: "BMS", path: "/bms" },
        { name: "BBM", path: "/bbm" },
        { name: "B.Com", path: "/bcom" },
        { name: "MBA", path: "/mba" },
        { name: "MCA", path: "/mca" },
      ],
    },
    {
      name: "Engineering",
      icon: "⚙️",
      desc: "Engineering & Technology",
      color: "from-orange-500 to-red-500",
      subOptions: [
        { name: "B.Tech", path: "/btech" },
        { name: "M.Tech", path: "/mtech" },
      ],
    },
    {
      name: "Humanities",
      icon: "📚",
      desc: "Arts & Humanities",
      color: "from-purple-500 to-pink-500",
      subOptions: [
        { name: "BA", path: "/ba" },
        { name: "MA", path: "/ma" },
      ],
    },
  ];
  // studt in india end
  const [showPopup, setShowPopup] = useState(false);
  

  return (
    <>
      
      {/* 1.hero section */}
     <div className="relative w-full min-h-screen overflow-hidden z-0">
     {/* Hidden background image to ensure bg5 looks "full" on first load */}
     <img src="/image/bg5.jpg" className="hidden" alt="bg-preload" />
    <FloatingSidebar />

    <Slider {...settings} className="hero-slider">
      {[
        "/image/bg5.jpg",
      ].map((img, i) => (
        <div key={i}>
          <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover object-bottom"
            />

            {/* Very light overlay to preserve image brightness but keep text readable */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      ))}
    </Slider>

    <div
      className="
      absolute inset-0 text-white
      overflow-y-auto lg:overflow-visible
      flex items-start lg:items-center
       pt-32 lg:pt-0 z-10 pt-24 sm:pt-32
    "
    >
      <div className="w-full max-w-3xl px-4 sm:px-6 pb-20 mt-10 ml-4 sm:ml-8 lg:ml-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
          <FaGraduationCap />
          Trusted by 10,000+ Students
        </div>

        <h1 className="font-display text-xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Your Trusted Counselling Partner for{" "}
          <span className="text-orange-400">
            Admissions in India & Abroad
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/80">
          Unlock your dream career with expert guidance.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {/* Apply Now */}
          <button
            onClick={() => setShowPopup(true)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-amber-600 hover:to-orange-600"
          >
            Apply Now <FaArrowRight className="text-sm" />
          </button>

          {/* Free Counseling */}
          <button
            onClick={() => setShowPopup(true)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-amber-600 hover:to-orange-600"
          >
            Free Counselling
          </button>

          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-8 text-white font-semibold backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-green-500 hover:border-green-500 hover:shadow-lg hover:-translate-y-1"
          >
            📞 Call Now
          </Link>
        </div>
      </div>

      <CollegeSliderCard />
    </div>
  </div>

  {/*   POPUP  */}
  <HomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      
      {/*2. About Section */}
      <section className="relative pt-4 pb-8 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold">
              About Beyond Admission
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 leading-snug">
              Your Trusted Partner for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Study Abroad & India
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At{" "}
              <span className="font-semibold text-gray-800">
                Beyond Admission
              </span>
              , we help students achieve their dream careers by providing expert
              guidance for admissions in top universities across India and
              abroad.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From career counselling to visa assistance, we ensure a smooth and
              successful journey for every student.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
                <p className="text-gray-600 text-sm">Students Guided</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">500+</h3>
                <p className="text-gray-600 text-sm">Universities</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">20+</h3>
                <p className="text-gray-600 text-sm">Countries</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">95%</h3>
                <p className="text-gray-600 text-sm">Success Rate</p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-8">
              <Link to="/about">
                <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                  Explore More
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {/* CARD */}
            <div className="group bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
              <FaUserGraduate className="text-blue-600 text-3xl mb-3 group-hover:scale-110 transition" />
              <h4 className="font-semibold text-gray-800">
                Expert Counselling
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Personalized guidance for your career journey.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
              <FaGlobe className="text-orange-500 text-3xl mb-3 group-hover:scale-110 transition" />
              <h4 className="font-semibold text-gray-800">Global Reach</h4>
              <p className="text-sm text-gray-600 mt-1">
                Study options across top countries worldwide.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
              <FaUniversity className="text-blue-600 text-3xl mb-3 group-hover:scale-110 transition" />
              <h4 className="font-semibold text-gray-800">Top Universities</h4>
              <p className="text-sm text-gray-600 mt-1">
                Direct tie-ups with reputed institutions.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
              <FaHandshake className="text-orange-500 text-3xl mb-3 group-hover:scale-110 transition" />
              <h4 className="font-semibold text-gray-800">Full Support</h4>
              <p className="text-sm text-gray-600 mt-1">
                End-to-end admission & visa assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*3. Popular Countries to Study Abroad */}
      <section className="pt-4 pb-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Enhanced glow effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced heading section */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-blue-700">
                Global Opportunities
              </span>
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Top Destinations for
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Your Study Abroad Journey
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Discover world-class education, diverse cultures, and incredible
              career opportunities across these premier study destinations.
            </p>
          </div>

          {/* Premium Cards Grid */}
          <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group relative block transform transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                ></div>
                <div className="relative h-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden">
                  {/* Decorative top accent */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r from-${item.accent}-400 to-${item.accent}-600`}
                  ></div>

                  <div className="p-6 flex flex-col h-full">
                    {/* Header with flag and popularity badge */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                          <img
                            src={item.img}
                            alt={`${item.name} flag`}
                            className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-slate-100"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {item.fullName}
                          </h3>
                          <p className="text-sm text-slate-500 font-medium">
                            {item.uni}
                          </p>
                        </div>
                      </div>
                      {item.popular && (
                        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-200">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                          </span>
                          Most Popular
                        </span>
                      )}
                    </div>

                    {/* Description and stats */}
                    <div className="mt-4 flex-grow">
                      <div className="flex items-center gap-2 text-slate-600 mb-2">
                        <svg
                          className="w-4 h-4 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <p className="text-sm font-medium">{item.desc}</p>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.longDesc}
                      </p>
                      <div className="mt-3 flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-full">
                          <svg
                            className="w-3 h-3 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                          {item.stats}
                        </span>
                      </div>
                    </div>

                    {/* CTA with animated arrow */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                        <span>Explore Country</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* 4.Popular Courses in Abroad  */}
      <section className="w-full pt-8 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Heading Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-700 tracking-wide">
                ACADEMIC EXCELLENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Popular Courses
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative inline-block mt-2 sm:mt-0">
                in Abroad
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full"
                  viewBox="0 0 300 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,6 C50,2 100,10 150,6 C200,2 250,10 300,6"
                    stroke="url(#gradient)"
                    fill="none"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
              Discover top education destinations known for excellence and
              innovation.
              <br className="hidden sm:block" />
              <span className="text-blue-600 font-medium">
                Explore vibrant campuses
              </span>{" "}
              and world-renowned institutions that offer unparalleled learning
              experiences
            </p>
          </div>

          <Slider {...settings3}>
            {[
              {
                img: "/image/foreign-2.jpg",
                title: "MS",
                gradient: "from-blue-500 to-cyan-500",
                icon: "🎓",
                description:
                  "Master of Science programs at top global universities",
                list: [
                  { name: "MS in USA", path: "/ms-usa" },
                  { name: "MS in UK", path: "/ms-uk" },
                  { name: "MS in Canada", path: "/ms-canada" },
                  { name: "MS in Ireland", path: "/ms-ireland"},
                  {
                    name: "MS in Australia",
                    path: "/ms-australia",
                    
                  },
                  { name: "MS in Germany", path: "/ms-germany" },
                ],
              },
              {
                img: "/image/foreign-3.jpg",
                title: "MBA / Management",
                gradient: "from-purple-500 to-pink-500",
                icon: "💼",
                description:
                  "World-class business education for future leaders",
                list: [
                  { name: "MBA in USA", path: "/mba-usa" },
                  { name: "MBA in UK", path: "/mba-uk" },
                  { name: "MBA in Canada", path: "/mba-canada" },
                  { name: "MBA in Ireland", path: "/mba-ireland" },
                  {
                    name: "MBA in Australia",
                    path: "/mba-australia",
                    
                  },
                  { name: "MBA in Germany", path: "/mba-germany" },
                ],
              },
              {
                img: "/image/foreign-4.jpg",
                title: "UG Programs",
                gradient: "from-orange-500 to-red-500",
                icon: "📚",
                description:
                  "Undergraduate degrees at prestigious institutions",
                list: [
                  { name: "UG in USA", path: "/ug-usa" },
                  { name: "UG in UK", path: "/ug-uk" },
                  { name: "UG in Canada", path: "/ug-canada" },
                  { name: "UG in Ireland", path: "/ug-ireland" },
                  {
                    name: "UG in Australia",
                    path: "/ug-australia",
                    
                  },
                  { name: "UG in Germany", path: "/ug-germany" },
                ],
              },
            ].map((item, index) => (
              <div key={index} className="px-2 sm:px-3">
                <div className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 cursor-pointer">
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl blur-md"></div>

                  <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
                    {/* Image Container with Overlay */}
                    <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-56">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                      {/* Title Badge */}
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}
                          >
                            <span className="text-xl sm:text-2xl">
                              {item.icon}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                              {item.title}
                            </h3>
                            <p className="text-white/80 text-xs sm:text-sm hidden sm:block">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-5 md:p-6">
                      <div className="mb-3 sm:mb-4">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            Study Destinations
                          </h4>
                          <span className="text-xs text-blue-600 font-medium">
                            6 Countries
                          </span>
                        </div>

                        {/* Course List with Flags - Responsive Grid */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2">
                          {item.list.map((course, i) => (
                            <Link
                              key={i}
                              to={course.path}
                              className="group/link flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-transparent hover:border-blue-200"
                            >
                              <span className="text-base sm:text-lg">
                                {course.flag}
                              </span>
                              <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover/link:text-blue-600 transition-colors whitespace-nowrap sm:whitespace-normal">
                                {course.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accent Bar */}
                    <div
                      className={`h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* 5. Test Preparation Section*/}
      <section className="pt-7 pb-10 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-3xl"></div>
        </div>

        {/* Decorative Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Heading Section */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 shadow-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </div>
              <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">
                Test Preparation
              </span>
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Crack the Following Exams
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  to Study Abroad
                </span>
                <svg
                  className="absolute -bottom-3 left-0 w-full h-3"
                  viewBox="0 0 400 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,6 C80,2 160,10 240,6 C320,2 400,10 400,6"
                    stroke="url(#gradient2)"
                    fill="none"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <defs>
                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Master your entrance exams with our comprehensive preparation
              resources and expert guidance to secure your admission in top
              global universities.
            </p>
          </div>

          {/* Enhanced Slider */}
          <Slider {...testprep}>
            {exams.map((item, i) => (
              <div key={i} className="px-3">
                <Link to={item.path}>
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md"></div>

                    <div className="relative bg-white rounded-2xl p-8 text-center h-full">
                      {/* Floating Icon Badge */}
                      <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>

                      {/* Image Container with Animation */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-24 mx-auto object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Title with Gradient */}
                      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                        {item.title}
                      </h3>

                      {/* Description with Better Styling */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {item.desc}
                      </p>

                      {/* Stats or Additional Info (Optional Enhancement) */}
                      <div className="flex items-center justify-center gap-4 mb-6 text-xs">
                        <div className="flex items-center gap-1 text-gray-500">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <span>Flexible Timing</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <span>Expert Guidance</span>
                        </div>
                      </div>

                      {/* Enhanced CTA Button */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 group-hover:from-blue-500 group-hover:to-indigo-600 rounded-xl text-gray-700 group-hover:text-white font-semibold transition-all duration-300">
                          <span>Start Preparation</span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      {/* Bottom Accent Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* 6.Study Abroad Admission Process */}
      <section className="pt-4 pb-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="mt-6 text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Study Abroad
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Admission Process
            </span>
          </h2>
          <p className="text-gray-600 mb-16 mt-5 text-center">
            The admission process for studying abroad includes the following
            steps.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-6 relative">
            {process.map((step, i) => (
              <div key={i} className="text-center relative">
                {/* Number */}
                <span className="absolute -left-6 top-10 text-2xl text-gray-500 font-semibold">
                  {step.id}
                </span>

                {/* Circle */}
                <div
                  className={`mx-auto w-24 h-24 rounded-full border-4 flex items-center justify-center text-3xl bg-white shadow-lg ${colorMap[step.color]}`}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className={`mt-4 font-semibold text-lg ${
                    colorMap[step.color].split(" ")[1]
                  }`}
                >
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-600 mt-2 max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 7.Study Abroad Testimonial */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Students Say 🌍
          </h2>
          <p className="mt-3 text-white/70">
            Real success stories from students studying abroad
          </p>

          {/* Slider */}
          <div className="mt-10 relative h-[300px] flex items-center justify-center">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`absolute w-full max-w-xl transition-all duration-700 ${
                  index === current
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
                  {/* Stars */}
                  <div className="flex justify-center mb-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-sm md:text-base text-white/90">
                    "{item.review}"
                  </p>

                  {/* Profile */}
                  <div className="mt-5 flex items-center justify-center gap-3">
                    <img
                      src={item.image}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div className="text-left">
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-xs text-white/70">
                        {item.course} • {item.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === index ? "bg-orange-500" : "bg-white/40"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
      {/* 8.Study MBBS Abroad Destination */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Top Countries for
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                MBBS Abroad
              </span>
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Explore the best destinations for MBBS with affordable fees and
              global recognition.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {mbbsDestinations.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group relative block hover:-translate-y-2 transition-all duration-300"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition`}
                ></div>

                <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-slate-100 overflow-hidden">
                  {/* Top line */}
                  <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-indigo-600"></div>

                  <div className="p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.img}
                        alt=""
                        className="w-14 h-14 rounded-full object-cover border"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600">
                          {item.fullName}
                        </h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="mt-4 text-sm text-slate-600">
                      {item.longDesc}
                    </p>

                    {/* Stats */}
                    <div className="mt-3">
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-700">
                        {item.stats}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-4 border-t">
                      <span className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore
                        <span className="transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* 9.Our Exclusive Study MBBS Abroad University */}
      <section className="pt-4 pb-7 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="mt-6 mb-10 text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Our Exclusive Study MBBS Abroad
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {countries1.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full flex items-center gap-2 shadow 
              ${
                active === c
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              >
                🌍 {c}
              </button>
            ))}
          </div>

          {/* Slider */}
          <Slider {...cllg}>
            {filteredData.map((item, i) => (
              <div key={i} className="px-3">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-52 w-full object-cover"
                    />

                    {/* Rank */}
                    <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                      🌍 Rank : {item.rank}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg">{item.name}</h3>

                    <p className="text-sm text-gray-500 mt-1">📍 {item.city}</p>

                    <p className="text-sm mt-2">💰 Tuition: {item.fees}</p>

                    <p className="text-sm">🏛 Established year: {item.year}</p>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-5">
                      <button className="flex-1 bg-blue-900 text-white py-2 rounded-lg">
                        Apply Now
                      </button>
                      <button className="flex-1 border border-gray-400 py-2 rounded-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* 10.Study MBBS Abroad Admission Process */}
      <section className="pt-4 pb-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="mt-6 text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Study Abroad MBBS
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Admission Process
            </span>
          </h2>
          <p className="text-gray-600 mb-16 mt-5 text-center">
            The admission process for studying abroad includes the following
            steps.
          </p>

          {/* Steps - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 mb-16">
            {processMBBS.slice(0, 3).map((step, i) => (
              <div key={i} className="text-center relative">
                {/* Number */}
                <span className="absolute -left-6 top-10 text-2xl text-gray-500 font-semibold">
                  {step.id}
                </span>

                {/* Circle */}
                <div
                  className={`mx-auto w-24 h-24 rounded-full border-4 flex items-center justify-center text-3xl bg-white shadow-lg ${colorMap[step.color]}`}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className={`mt-4 font-semibold text-lg ${
                    colorMap1[step.color].split(" ")[1]
                  }`}
                >
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-600 mt-2 max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Steps - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
            {processMBBS.slice(3, 6).map((step, i) => (
              <div key={i} className="text-center relative">
                {/* Number */}
                <span className="absolute -left-6 top-10 text-2xl text-gray-500 font-semibold">
                  {step.id}
                </span>

                {/* Circle */}
                <div
                  className={`mx-auto w-24 h-24 rounded-full border-4 flex items-center justify-center text-3xl bg-white shadow-lg ${colorMap[step.color]}`}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className={`mt-4 font-semibold text-lg ${
                    colorMap1[step.color].split(" ")[1]
                  }`}
                >
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-600 mt-2 max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 11.Study MBBS Abroad Testimonial */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Students Say 🌍
          </h2>
          <p className="mt-3 text-white/70">
            Real success stories from students studying abroad
          </p>

          {/* Slider */}
          <div className="mt-10 relative h-[300px] flex items-center justify-center">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`absolute w-full max-w-xl transition-all duration-700 ${
                  index === current
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
                  {/* Stars */}
                  <div className="flex justify-center mb-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-sm md:text-base text-white/90">
                    "{item.review}"
                  </p>

                  {/* Profile */}
                  <div className="mt-5 flex items-center justify-center gap-3">
                    <img
                      src={item.image}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div className="text-left">
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-xs text-white/70">
                        {item.course} • {item.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === index ? "bg-orange-500" : "bg-white/40"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
      {/* 12.Study in India */}
      <section className="pt-12 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-visible">
        {/* Glow Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-green-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-green-600">
                Career Pathways
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Explore Opportunities
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Study in India
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Discover your perfect career path with India's most prestigious
              programs and institutions
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item, i) => {
              const [isOpen, setIsOpen] = useState(false);
              let timeoutId;

              const handleMouseEnter = () => {
                clearTimeout(timeoutId);
                setIsOpen(true);
              };

              const handleMouseLeave = () => {
                timeoutId = setTimeout(() => {
                  setIsOpen(false);
                }, 200);
              };

              return (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Main Card */}
                  <div className="group relative block transform transition-all duration-500 hover:-translate-y-3">
                    {/* Gradient Border Effect */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500`}
                    ></div>

                    {/* Glow Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                    ></div>

                    {/* Card Content */}
                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 p-6 text-center overflow-hidden group-hover:border-transparent transition-all duration-500">
                      {/* Background Pattern */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-gray-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                      {/* Icon Container */}
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
                        ></div>
                        <div
                          className={`relative w-20 h-20 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                        >
                          <div className="text-3xl">{item.icon}</div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                        {item.name}
                      </h3>

                      {/* Desc */}
                      <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-600 transition-all duration-300">
                        {item.desc}
                      </p>

                      {/* Stats Badge */}
                      <div className="mt-4 flex items-center justify-center gap-2">
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{item.subOptions?.length || 0}+ Programs</span>
                        </div>
                      </div>

                      {/* Animated Bottom Line */}
                      <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-500 mx-auto"></div>

                      {/* Dropdown Indicator */}
                      <div className="mt-5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
                        <div className="flex items-center justify-center gap-2 text-green-600">
                          <span>Explore Courses</span>
                          <svg
                            className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Dropdown Menu */}
                  {isOpen && item.subOptions && (
                    <div
                      className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-slideDown"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="relative">
                        {/* Dropdown Header */}
                        <div
                          className={`bg-gradient-to-r ${item.color} px-4 py-2`}
                        >
                          <p className="text-xs font-semibold text-white/80">
                            Available Programs
                          </p>
                        </div>

                        {/* Options List */}
                        <div className="py-2 max-h-64 overflow-y-auto">
                          {item.subOptions.map((option, idx) => (
                            <Link
                              key={idx}
                              to={option.path}
                              className="group/option block px-4 py-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300 border-b border-slate-50 last:border-0"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover/option:opacity-100 transition-all duration-300`}
                                  ></div>
                                  <span className="text-sm font-medium text-slate-700 group-hover/option:text-green-600 transition-colors duration-300">
                                    {option.name}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-green-500 opacity-0 group-hover/option:opacity-100 transition-all duration-300 transform group-hover/option:translate-x-1">
                                    Apply Now
                                  </span>
                                  <svg
                                    className="w-4 h-4 text-green-500 opacity-0 group-hover/option:opacity-100 transition-all duration-300 transform group-hover/option:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Dropdown Footer */}
                        <div className="bg-gray-50 px-4 py-2 border-t border-slate-100">
                          <p className="text-xs text-center text-slate-500">
                            Click to explore detailed curriculum & admission
                            process
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* 13.Study in India Testimonial */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Students Say 🌍
          </h2>
          <p className="mt-3 text-white/70">
            Real success stories from students studying abroad
          </p>

          {/* Slider */}
          <div className="mt-10 relative h-[300px] flex items-center justify-center">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`absolute w-full max-w-xl transition-all duration-700 ${
                  index === current
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
                  {/* Stars */}
                  <div className="flex justify-center mb-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-sm md:text-base text-white/90">
                    "{item.review}"
                  </p>

                  {/* Profile */}
                  <div className="mt-5 flex items-center justify-center gap-3">
                    <img
                      src={item.image}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div className="text-left">
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-xs text-white/70">
                        {item.course} • {item.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === index ? "bg-orange-500" : "bg-white/40"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
      {/* 14.SERVICES */}
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-10 bg-gradient-to-b from-white via-blue-50 to-white rounded-3xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-3">
            Why Choose Beyond Admission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We make the university admission process simple, fast, and reliable
            for students who want to study abroad.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: "/image/Admission Counselling.webp",
              title: "Admission Counselling",
              desc: "Get expert guidance to choose the right university and course based on your academic profile, budget, and career goals.",
            },
            {
              img: "/image/NEET Counselling.jpg",
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
              img: "/image/sop-lor.jpg",
              title: "SOP & LOR",
              desc: "Professional assistance in preparing strong SOPs, LORs, and resumes to improve your chances of university admission.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Small decorative icon/line */}
                <div className="w-12 h-1 bg-blue-600 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Optional: subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/0 group-hover:border-blue-400/30 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
      {/* 15.Our Impact */}
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
                20+
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
              <p className="mt-3 text-lg font-semibold">Partner Universities</p>
              <p className="mt-2 text-sm text-gray-500">
                Worldwide university network
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-3">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 transition">
                <Award className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
              </div>
              <p className="text-3xl font-bold text-blue-600 group-hover:text-orange-500 transition">
                95%
              </p>
              <p className="mt-3 text-lg font-semibold">Success Rate</p>
              <p className="mt-2 text-sm text-gray-500">Visa approval rate</p>
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-3">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 transition">
                <GraduationCap className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
              </div>
              <p className="text-3xl font-bold text-blue-600 group-hover:text-orange-500 transition">
                11+
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
      {/* 16.FAQ */}
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
      {/* 17.Join Our Newsletter */}
      <div className="w-full bg-[#54baa8] ">
        <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 px-5 py-10 lg:py-16 lg:px-24">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Join Our Newsletter
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-lg">
              Subscribe our newsletter to get our latest updates, offers & news.
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
    </>
  );
}

export default Home;