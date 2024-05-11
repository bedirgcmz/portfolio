import "./ThreeCircles.css";
import { motion } from "framer-motion";

const ThreeCircles = ({ linkId }) => {
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
    <section className="three-ciclesr-section">
      <div id={linkId} className="three-circles-container">
        <motion.div
          className="firs-circle m-5"
          variants={fromLeft}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div
          className="second-circle m-5"
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { type: "spring", delay: 0.3, duration: 1.6 },
            },
          }}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div
          className="third-circle m-5"
          variants={fromRight}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </div>
    </section>
  );
};

export default ThreeCircles;
