import "./ThreeCircles.css";
import { motion } from "framer-motion";

const ThreeCircles = ({ linkId }) => {
  return (
    <section className="three-ciclesr-section">
      <div id={linkId} className="three-circles-container">
        <motion.div
          className="firs-circle m-5"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", delay: 0.3, duration: 1.6 },
          }}
          viewport={{ once: false, amount: 0.8 }}
        ></motion.div>
        <motion.div
          className="second-circle m-5"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", delay: 0.3, duration: 1.6 },
          }}
          viewport={{ once: false, amount: 0.8 }}
        ></motion.div>
        <motion.div
          className="third-circle m-5"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", delay: 0.3, duration: 1.6 },
          }}
          viewport={{ once: false, amount: 0.8 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default ThreeCircles;
