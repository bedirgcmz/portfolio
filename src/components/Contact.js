import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";
import "./hovers.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w21zl4c", "template_4y8tcvh", e.target, "m2Y_XycLwC6X2Pz8M")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

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

  return (
    <section className="contact-container container" style={{ overflow: "hidden" }}>
      <div ref={ref1} className="form-div">
        <form onSubmit={sendEmail}>
          <h4 className="text-center contact-me-header">Contact Me</h4>
          <div className="input-area mb-3">
            <i className="form-icon fa-solid fa-user"></i>
            <input
              name="name"
              type="text"
              className="form-control name"
              required
              placeholder=" Your fullname.."
            />
          </div>
          <div className="input-area mb-3">
            <i className="form-icon fa-regular fa-envelope"></i>
            <input
              name="email"
              type="email"
              className="form-control email"
              required
              placeholder="  name@example.com"
            />
          </div>
          <div className="mb-3 input-area">
            <textarea
              name="message"
              className="form-control message"
              rows="3"
              required
              placeholder="Write your messages"
            ></textarea>
            <motion.button
              id="send-button"
              name="submit"
              type="submit"
              className="form-control glow-on-hover submit my-2"
              variants={{
                hidden: { opacity: 0, y: "100vw" },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", delay: 0.3, duration: 1.6 },
                },
              }}
              initial="hidden"
              animate={controls1}
            >
              Gönder
            </motion.button>
          </div>
        </form>
      </div>
      <div className="touch-div">
        <div className="touch-me">
          <h4 className="text-center">Touch Me</h4>
          <div className="touch-me-info">
            <div className="info-icons mb-4">
              {" "}
              <i className="fa-solid me-2 fa-envelope-circle-check"></i>
              bdrgcmz@gmail.com
            </div>
            <div className="info-icons mb-4">
              <i className="fa-solid me-2 fa-location-dot"></i>Alvsjo / Stockholm
            </div>
            <div className="info-icons mb-4">
              <i className="fa-solid me-2 fa-phone-volume"></i>076 963 73 90
            </div>
          </div>
          <div ref={ref2} className="mb-2 touch-me-icons">
            <>
              <motion.div
                class="touch-me-icon-container"
                variants={{
                  hidden: { opacity: 0, x: "-100vw" },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", delay: 0.3, duration: 1.6 },
                  },
                }}
                initial="hidden"
                animate={controls2}
              >
                <a
                  href="https://www.linkedin.com/in/bedirgocmez/"
                  class="touch-me-icon icon-fill"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </motion.div>
              <motion.div
                class="touch-me-icon-container"
                variants={{
                  hidden: { opacity: 0, x: "100vw" },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", delay: 0.3, duration: 1.6 },
                  },
                }}
                initial="hidden"
                animate={controls2}
              >
                <a
                  href="https://github.com/bedirgcmz"
                  class="touch-me-icon icon-fill"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </motion.div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
