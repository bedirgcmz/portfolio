import { useEffect, useRef, useState } from "react";
import "./Experience.css";
import { motion, useInView, useAnimation } from "framer-motion";

const Experience = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInWiew = useInView(ref1, { once: true });
  const isInWiew2 = useInView(ref2, { once: true });

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (isInWiew) {
      controls1.start("visible");
    }
    if (isInWiew2) {
      controls2.start("visible");
    }
  }, [isInWiew, isInWiew2]);

  const fromLeft = {
    hidden: {
      y: -75,
    },
    visible: {
      y: 0,
      transition: { type: "spring", delay: 0.3, duration: 0.7, ease: "easeIn" },
    },
  };
  const fromRight = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", delay: 0.3, duration: 0.7, ease: "easeIn" },
    },
  };

  return (
    <section className="experience-top-div">
      <div className="experience-top-div">
        <section ref={ref1} className="experience-container d-flex">
          <div className="exp-left-cards">
            <motion.div class="card mb-3" variants={fromLeft} initial="hidden" animate={controls1}>
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
            <motion.div class="card mb-3" variants={fromLeft} initial="hidden" animate={controls1}>
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
          <div ref={ref2} className="exp-right-cards">
            <motion.div class="card mb-3" variants={fromRight} initial="hidden" animate={controls2}>
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
            <motion.div class="card mb-3" variants={fromRight} initial="hidden" animate={controls2}>
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
      </div>
    </section>
  );
};

export default Experience;
