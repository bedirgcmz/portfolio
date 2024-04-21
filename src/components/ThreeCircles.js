import { useEffect, useRef, useState } from "react";

import "./ThreeCircles.css";
import { motion } from "framer-motion";

const ThreeCircles = ({ linkId }) => {
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);

  // const [scrollPos1, setScrollPos1] = useState(0);
  // const [scrollPos2, setScrollPos2] = useState(0);
  // const [scrollPos3, setScrollPos3] = useState(0);

  // // Sayfa scroll edildiğinde pozisyonu güncelle
  // const handleScroll = () => {
  //   setScrollPos1(ref1.current.getBoundingClientRect().top);
  //   setScrollPos2(ref2.current.getBoundingClientRect().top);
  //   setScrollPos3(ref3.current.getBoundingClientRect().top);
  // };

  // // Scroll olay dinleyicisini ekleme
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
  );
};

export default ThreeCircles;
