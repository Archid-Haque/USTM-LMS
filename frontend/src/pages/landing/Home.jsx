import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/common/Navbar";
import Footer from "../../Components/common/Footer";
import {
  faGraduationCap,
  faAward,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import c1 from "../../assets/images/c1.jpg";
import c2 from "../../assets/images/html.png";
import c3 from "../../assets/images/sql.jpg";
import c4 from "../../assets/images/python.jpg";
import c5 from "../../assets/images/java.png";
import c6 from "../../assets/images/css.png";

import bannerImg from "../../assets/images/ustm-campus.jpg";

function Home() {

  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    const updateTimer = () => {

      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });

    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);

  }, []);

  const courses = [
    {
      id: 1,
      title: "JavaScript Beginner Course",
      img: c1,
    },
    {
      id: 2,
      title: "HTML Complete Course",
      img: c2,
    },
    {
      id: 3,
      title: "SQL Beginner Course",
      img: c3,
    },
    {
      id: 4,
      title: "Python Master Course",
      img: c4,
    },
    {
      id: 5,
      title: "Java Essentials",
      img: c5,
    },
    {
      id: 6,
      title: "CSS Complete Course",
      img: c6,
    },
  ];

  const featureData = [
    {
      icon: faGraduationCap,
      title: "Scholarship Facility",
      desc: "Originality is the essence of true scholarship.",
    },
    {
      icon: faStar,
      title: "Valuable Courses",
      desc: "Online education is like a rising tide—it lifts all boats.",
    },
    {
      icon: faAward,
      title: "Global Certification",
      desc: "A certificate without knowledge is like a gun without bullets.",
    },
  ];

  return (

    <div className="bg-gray-50 min-h-screen">

      <Navbar page="home" />

      {/* Hero Section */}

      <section className="relative text-center px-6 h-[110vh] overflow-hidden flex items-center justify-center -mt-20">

        {/* Background */}

        <div className="absolute inset-0 overflow-hidden">

          <img
            src={bannerImg}
            alt="USTM LMS Banner"
            className="absolute inset-0 w-full h-[120%] object-cover brightness-50"
            style={{
              objectPosition: "center 25%",
            }}
          />

          <div className="absolute inset-0 bg-black/35"></div>

        </div>

        {/* Hero Content */}

        <div className="relative z-10 max-w-5xl px-4 mt-12">

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-xl">

            Enhance your future with

            <br />

            <span className="block mt-3">

              USTM Learning Management System

            </span>

          </h2>

          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl">

            Unlock your potential with hundreds of courses,
            certifications and skills to grow your career.

          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <button
              onClick={() => navigate("/courses")}
              className="px-7 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 hover:scale-105 transition duration-300"
            >
              Explore Courses
            </button>

            <a
              href="#features"
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-semibold hover:bg-gray-100 hover:scale-105 transition duration-300"
            >
              Learn More
            </a>

          </div>

        </div>

      </section>
            {/* Features Section */}

      <section
        id="features"
        className="px-6 py-16 text-center"
      >

        <h1 className="text-3xl font-bold mb-4">
          Awesome Features
        </h1>

        <p className="text-gray-600 mb-10">
          Chance to enhance yourself
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:px-24">

          {featureData.map((feature, index) => (

            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >

              <FontAwesomeIcon
                icon={feature.icon}
                className="text-4xl text-yellow-500 mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Courses Section */}

      <section
        id="course"
        className="px-6 py-16 bg-gray-100"
      >

        <h1 className="text-3xl font-bold text-center mb-4">
          Our Popular Courses
        </h1>

        <p className="text-gray-600 text-center mb-10">
          10,000+ enrolled
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-24">

          {courses.map((course) => (

            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition duration-300 transform hover:-translate-y-2"
            >

              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">

                <h6 className="text-lg font-semibold mb-2">
                  {course.title}
                </h6>

                <div className="flex items-center text-yellow-500 mb-2">

                  {[...Array(5)].map((_, i) => (

                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                    />

                  ))}

                  <span className="ml-2 text-gray-500">
                    (239)
                  </span>

                </div>
                                <button
                  onClick={() => {

  const token = localStorage.getItem("token");

  if(token){
      navigate("/courses");
  }else{
      navigate("/login");
  }

}}
                  className="w-full mt-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-lg transition duration-300 hover:scale-105"
                >
                  Enroll Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </div>

  );

}

export default Home;