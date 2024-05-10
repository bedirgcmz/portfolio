import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import "./hovers.css";
import { motion } from "framer-motion";
import Swiper from "./Swiper.js";

const Projects = ({ fromIndex, toIndex }) => {
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

  return (
    <div ref={ref1} style={{ minHeight: "490px" }}>
      {scrollPos1 < 900 ? (
        <motion.section
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
        >
          <Swiper fromIndex={fromIndex} toIndex={toIndex} />
        </motion.section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Projects;
