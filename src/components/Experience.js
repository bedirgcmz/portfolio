import { useEffect, useRef, useState } from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  const ref1 = useRef(null);

  const [scrollPos1, setScrollPos1] = useState(0);

  // Sayfa scroll edildiğinde pozisyonu güncelle
  const handleScroll = () => {
    setScrollPos1(ref1.current.getBoundingClientRect().top);
  };

  // Scroll olay dinleyicisini ekleme
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fromLeft = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", delay: 0.3, duration: 1.6 },
    },
  };
  const fromRight = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", delay: 0.3, duration: 1.6 },
    },
  };

  return (
    <div ref={ref1}>
      {scrollPos1 < 900 ? (
        <section className="experience-container d-flex">
          <div className="exp-left-cards">
            <motion.div class="card mb-3" variants={fromLeft} initial="hidden" animate="visible">
              <div className="card-hover"></div>
              <div class="card-header">
                <i className="fa-solid fa-building pe-3"></i> Freelance
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <i className="fa-solid fa-solid fa-code pe-3 pe-3"></i> Frontend Developer
                </h5>
                <p class="card-text">
                  Coding, design, design, page management, using react, Using npm package, writing
                  html css bootstrap javascript code..
                </p>
              </div>
              <div className="exp-date">07.2022 - Currently</div>
            </motion.div>
            <motion.div class="card mb-3" variants={fromLeft} initial="hidden" animate="visible">
              <div className="card-hover"></div>
              <div class="card-header">
                <i className="fa-solid fa-building pe-3"></i> Toros Primary School
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <i className="fa-solid fa-solid fa-person-chalkboard pe-3 pe-3"></i>Primary School
                  Teaching
                </h5>
                <p class="card-text">
                  Classroom management, lecture, student follow-up, homework follow-up, teaching
                  literacy, family visits..
                </p>
              </div>
              <div className="exp-date">09.2011 - 07.2014</div>
            </motion.div>
          </div>
          <div className="middle-line-and-arrow">
            <div className="exp-line">
              <span>2011</span>
              <span>2015</span>
              <span>2019</span>
              <span>2023</span>
            </div>
            <i class="exp-arrow first-arrow fa-solid fa-play"></i>
            <i class="exp-arrow second-arrow fa-solid fa-play"></i>
            <i class="exp-arrow third-arrow fa-solid fa-play"></i>
            <i class="exp-arrow fourth-arrow fa-solid fa-play"></i>
          </div>
          <div className="exp-right-cards">
            <motion.div class="card mb-3" variants={fromRight} initial="hidden" animate="visible">
              <div className="card-hover"></div>
              <div class="card-header">
                <i className="fa-solid fa-building pe-3"></i>MEM Educational Institutions
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <i className="fa-solid fa-solid fa-person-walking-arrow-right pe-3 pe-3"></i>
                  Student Coaching
                </h5>
                <p class="card-text">
                  Student coaching, motivation, guidance, preparing a study program, homework
                  follow-up, seminar, coordination, family visits..
                </p>
              </div>
              <div className="exp-date">08.2018 - 09.2020</div>
            </motion.div>
            <motion.div class="card mb-3" variants={fromRight} initial="hidden" animate="visible">
              <div className="card-hover"></div>
              <div class="card-header">
                <i className="fa-solid fa-building pe-3"></i>Rainbow Educational Institutions
              </div>
              <div class="card-body">
                <h5 class="card-title">Primary School Teaching</h5>
                <p class="card-text">
                  Classroom management, lecture, student follow-up, homework follow-up, teaching
                  literacy, family visits..
                </p>
              </div>
              <div className="exp-date">09.2011 - 07.2014</div>
            </motion.div>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Experience;
