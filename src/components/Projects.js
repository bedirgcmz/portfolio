// import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import "./hovers.css";
import { motion } from "framer-motion";
import Swiper from "./Swiper.js";

const Projects = ({ fromIndex, toIndex, controls }) => {
  return (
    <section style={{ height: "500px" }}>
      <div>
        <motion.section
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { type: "spring", delay: 0.2, duration: 1.2 },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          <Swiper fromIndex={fromIndex} toIndex={toIndex} />
        </motion.section>
      </div>
    </section>
  );
};

export default Projects;
