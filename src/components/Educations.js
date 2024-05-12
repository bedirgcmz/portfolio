import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Educations.css";

const myEducations = [
  {
    id: 1,
    company: "Changemaker Educations",
    edu_name: "Frontend / App Developer",
    info: "I am very happy to start taking this training. Real Changemaker Educations is a great school. I am sure that I will take my frontend skills much further.",
    date: "09.2023 - 06.2025",
    icon: "fa-solid fa-code pe-3",
    delayValue: 0.2,
  },
  {
    id: 2,
    company: " HiCoders",
    edu_name: "Full Stack Web Developer",
    info: "I had an enjoyable training period that lasted 11 months. I learned a lot from this training. I worked in both frontend and backend languages. At the end of the course, I completed an end-to-end fullstack project.",
    date: "08.2021 - 07.2022",
    icon: "fa-solid fa-laptop-code pe-3",
    delayValue: 0.25,
  },
  {
    id: 3,
    company: "Career World",
    edu_name: "Student Coaching",
    info: "Online education, Distance course tracking, Online exams and international certificates",
    date: "10.2018 - 12.2018",
    icon: "fa-solid fa-person-walking-arrow-right pe-3",
    delayValue: 0.3,
  },
  {
    id: 4,
    company: "Canakkale Onsekiz Mart Unv.",
    edu_name: "Primary School Graduate",
    info: "I received 2 years of postgraduate education. I completed my thesis research on 'The effect of the debate technique in the primary school 4th-grade social sciences course on the coursesuccess and critical thinkingi'",
    date: "09.2014 - 07.2016",
    icon: "fa-solid fa-person-chalkboard pe-3",
    delayValue: 0.35,
  },
  {
    id: 5,
    company: "Canakkale Onsekiz Mart Unv.",
    edu_name: "Primary School Teacher",
    info: "I have successfully completed my 4-year undergraduate education.",
    date: "09.2007 - 06.2011",
    icon: "fa-solid fa-person-chalkboard pe-3",
    delayValue: 0.4,
  },
];

const Educations = () => {
  const ref1 = useRef(null);
  const isInWiew = useInView(ref1, { once: true });

  const controls1 = useAnimation();

  useEffect(() => {
    if (isInWiew) {
      controls1.start("visible");
    }
  }, [isInWiew]);

  return (
    <section style={{ height: "480px", overflow: "hidden" }}>
      <div ref={ref1}>
        <div class="accordion educations-container" id="accordionExample">
          {myEducations.map((edu, index) => (
            <Accordion {...edu} controls1={controls1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Accordion = ({ id, icon, edu_name, date, company, info, delayValue, controls1 }) => {
  return (
    <>
      <div key={id} class="accordion-item">
        <div className="edu-name-container">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#colleps${id}`}
              aria-expanded="false"
              aria-controls={`colleps${id}`}
            >
              <i class={icon}></i>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: "-100vh" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", delay: delayValue, duration: 1.6 },
                  },
                }}
                initial="hidden"
                animate={controls1}
              >
                {edu_name}
              </motion.p>
              <div className="edu-date">{date}</div>
            </button>
          </h2>
        </div>

        <div
          id={`colleps${id}`}
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <h6 className="edu-company-name">
              <i class="fa-solid fa-city pe-3"></i>
              {company}
            </h6>
            {info}
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
