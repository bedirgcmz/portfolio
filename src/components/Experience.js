import { useEffect, useRef } from "react";
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
  }, [isInWiew, isInWiew2, controls1, controls2]);

  const fromLeft = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", delay: 0.3, duration: 0.7 },
    },
  };
  const fromRight = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", delay: 0.3, duration: 0.7 },
    },
  };

  return (
    <section className="experience-top-div" style={{ overflow: "hidden" }}>
      <div className="experience-top-div">
        <section ref={ref1} className="experience-container d-flex">
          <div className="exp-left-cards">
            <motion.div
              className="card mb-3"
              variants={{
                hidden: { opacity: 0, x: "-100vw" },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { type: "spring", delay: 0.4, duration: 1.6 },
                },
              }}
              initial="hidden"
              animate={controls1}
            >
              <div className="card-hover"></div>
              <div className="card-header">
                <i className="fa-solid fa-building pe-3"></i> Freelance
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa-solid fa-solid fa-code pe-3 pe-3"></i> Frontend Developer
                </h5>
                <p className="card-text">
                  Coding, design, design, page management, using react, Using npm package, writing
                  html css bootstrap javascript code..
                </p>
              </div>
              <div className="exp-date">07.2022 - Currently</div>
            </motion.div>
            <motion.div className="card mb-3" variants={fromLeft} initial="hidden" animate={controls1}>
              <div className="card-hover"></div>
              <div className="card-header">
                <i className="fa-solid fa-building pe-3"></i> Toros Primary School
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa-solid fa-solid fa-person-chalkboard pe-3 pe-3"></i>Primary School
                  Teaching
                </h5>
                <p className="card-text">
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
            <i className="exp-arrow first-arrow fa-solid fa-play"></i>
            <i className="exp-arrow second-arrow fa-solid fa-play"></i>
            <i className="exp-arrow third-arrow fa-solid fa-play"></i>
            <i className="exp-arrow fourth-arrow fa-solid fa-play"></i>
          </div>
          <div ref={ref2} className="exp-right-cards">
            <motion.div className="card mb-3" variants={fromRight} initial="hidden" animate={controls2}>
              <div className="card-hover"></div>
              <div className="card-header">
                <i className="fa-solid fa-building pe-3"></i>MEM Educational Institutions
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa-solid fa-solid fa-person-walking-arrow-right pe-3 pe-3"></i>
                  Student Coaching
                </h5>
                <p className="card-text">
                  Student coaching, motivation, guidance, preparing a study program, homework
                  follow-up, seminar, coordination, family visits..
                </p>
              </div>
              <div className="exp-date">08.2018 - 09.2020</div>
            </motion.div>
            <motion.div className="card mb-3" variants={fromRight} initial="hidden" animate={controls2}>
              <div className="card-hover"></div>
              <div className="card-header">
                <i className="fa-solid fa-building pe-3"></i>Rainbow Educational Institutions
              </div>
              <div className="card-body">
                <h5 className="card-title">Primary School Teaching</h5>
                <p className="card-text">
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
