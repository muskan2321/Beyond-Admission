import React from "react";
import {
  FaGlobe,
  FaUserGraduate,
  FaBuilding,
  FaTrophy,
  FaHeart,
  FaHandshake,
  FaLightbulb,
  FaChartLine,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaUsers,
  FaAward,
  FaRocket,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Students Guided", icon: <FaUserGraduate /> },
    { number: "50+", label: "Partner Universities", icon: <FaBuilding /> },
    { number: "25+", label: "Countries", icon: <FaGlobe /> },
    { number: "98%", label: "Success Rate", icon: <FaTrophy /> },
  ];

  const values = [
    {
      icon: <FaHeart className="text-3xl text-red-500" />,
      title: "Student First",
      desc: "We prioritize student success and well-being above everything else.",
      color: "from-red-50 to-pink-50",
    },
    {
      icon: <FaHandshake className="text-3xl text-blue-500" />,
      title: "Integrity",
      desc: "Honest and transparent guidance with no hidden agendas.",
      color: "from-blue-50 to-indigo-50",
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      title: "Innovation",
      desc: "Modern approaches to career counseling and admission strategies.",
      color: "from-yellow-50 to-orange-50",
    },
    {
      icon: <FaChartLine className="text-3xl text-green-500" />,
      title: "Excellence",
      desc: "Striving for the highest quality in every service we provide.",
      color: "from-green-50 to-emerald-50",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Founded",
      desc: "Started with a vision to guide students",
    },
    {
      year: "2017",
      title: "1000+ Students",
      desc: "Reached first milestone of 1000 students",
    },
    {
      year: "2019",
      title: "Global Expansion",
      desc: "Partnered with 25+ international universities",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      desc: "Launched online counseling platform",
    },
    {
      year: "2023",
      title: "Excellence Award",
      desc: "Received best education consultant award",
    },
    {
      year: "2025",
      title: "10,000+ Alumni",
      desc: "Celebrating a decade of success stories",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "MBBS in Russia",
      text: "Beyond Admission made my dream of studying abroad a reality. Their guidance throughout the admission process was exceptional!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Rahul Verma",
      course: "MBA in UK",
      text: "The team provided personalized attention and helped me choose the perfect university. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Anjali Patel",
      course: "Engineering in Germany",
      text: "Professional, supportive, and transparent. They handled everything from visa to accommodation.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Your Journey to
              <br />
              <span className="text-white">Global Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Empowering students to achieve their dreams of studying abroad
              with expert guidance and personalized support.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Beyond Admission is a premier educational consultancy dedicated
                to helping students achieve their dreams of studying abroad.
                With over a decade of experience, we've guided thousands of
                students to top universities worldwide.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our team of experienced counselors understands the challenges of
                studying abroad and provides comprehensive support from
                university selection to visa approval.
              </p>
              <div className="space-y-3">
                {[
                  "Personalized counseling for every student",
                  "End-to-end admission support",
                  "Visa guidance and documentation",
                  "Pre-departure orientation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Students studying abroad"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <FaQuoteLeft className="text-4xl text-blue-600 mb-2" />
                <p className="text-sm text-gray-600 max-w-xs">
                  "Education is the passport to the future, and we're here to
                  help you get it."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaRocket className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower students with the knowledge, guidance, and resources
                they need to pursue quality education abroad, making their
                dreams of international education a reality through transparent
                and personalized counseling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FaGlobe className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative educational consultancy,
                creating a global community of successful students who are
                making a positive impact in the world through quality education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide everything we do at Beyond Admission
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${value.color} p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              A decade of excellence in education consulting
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  <div className="flex-1 md:text-right">
                    <div
                      className={`bg-white p-6 rounded-2xl shadow-lg ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-md`}
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Students Say
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Success stories from our valued students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <FaQuoteLeft className="text-gray-200 text-2xl mb-2" />
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Beyond Admission?
            </h2>
            <p className="text-xl text-blue-100">
              Your trusted partner in education abroad
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers />,
                title: "Expert Counselors",
                desc: "Experienced team with global exposure",
              },
              {
                icon: <FaShieldAlt />,
                title: "100% Transparent",
                desc: "No hidden fees or commitments",
              },
              {
                icon: <FaClock />,
                title: "Fast Processing",
                desc: "Quick visa and admission processing",
              },
              {
                icon: <FaAward />,
                title: "Proven Track Record",
                desc: "98% student success rate",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get free counseling from our experts today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/919522745560"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
