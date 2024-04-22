import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Educations.css";

const Educations = () => {
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
    <div ref={ref1}>
      {scrollPos1 < 900 ? (
        <motion.div
          class="accordion educations-container"
          id="accordionExample"
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
          <Accordion />
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};

const Accordion = () => {
  const myEducations = [
    {
      id: 1,
      company: "Changemaker Educations",
      edu_name: "Frontend / App Developer",
      info: "I am very happy to start taking this training. Real Changemaker Educations is a great school. I am sure that I will take my frontend skills much further.",
      date: "09.2023 - 06.2025",
      icon: "fa-solid fa-code pe-3",
    },
    {
      id: 2,
      company: " HiCoders",
      edu_name: "Full Stack Web Developer",
      info: "I had an enjoyable training period that lasted 11 months. I learned a lot from this training. I worked in both frontend and backend languages. At the end of the course, I completed an end-to-end fullstack project.",
      date: "08.2021 - 07.2022",
      icon: "fa-solid fa-laptop-code pe-3",
    },
    {
      id: 3,
      company: "Career World",
      edu_name: "Student Coaching",
      info: "Online education, Distance course tracking, Online exams and international certificates",
      date: "10.2018 - 12.2018",
      icon: "fa-solid fa-person-walking-arrow-right pe-3",
    },
    {
      id: 4,
      company: "Canakkale Onsekiz Mart Unv.",
      edu_name: "Primary School Graduate",
      info: "I received 2 years of postgraduate education. I completed my thesis research on 'The effect of the debate technique in the primary school 4th-grade social sciences course on the coursesuccess and critical thinkingi'",
      date: "09.2014 - 07.2016",
      icon: "fa-solid fa-person-chalkboard pe-3",
    },
    {
      id: 5,
      company: "Canakkale Onsekiz Mart Unv.",
      edu_name: "Primary School Teacher",
      info: "I have successfully completed my 4-year undergraduate education.",
      date: "09.2007 - 06.2011",
      icon: "fa-solid fa-person-chalkboard pe-3",
    },
  ];
  return (
    <>
      {myEducations.map((edu, index) => (
        <div key={index} class="accordion-item">
          <div className="edu-name-container">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#colleps${edu.id}`}
                aria-expanded="false"
                aria-controls={`colleps${edu.id}`}
              >
                <i class={edu.icon}></i>
                {edu.edu_name}
                <div className="edu-date">{edu.date}</div>
              </button>
            </h2>
          </div>

          <div
            id={`colleps${edu.id}`}
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h6 className="edu-company-name">
                <i class="fa-solid fa-city pe-3"></i>
                {edu.company}
              </h6>
              {edu.info}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Educations;
