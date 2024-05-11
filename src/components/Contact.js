import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const [scrollPos1, setScrollPos1] = useState(0);
  const [scrollPos2, setScrollPos2] = useState(0);

  // Sayfa scroll edildiğinde pozisyonu güncelle
  const handleScroll = () => {
    // setScrollPos1(ref1.current.getBoundingClientRect().top);
    // setScrollPos2(ref2.current.getBoundingClientRect().top);
  };

  // Scroll olay dinleyicisini ekleme
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="contact-container container">
      <div ref={ref1} className="form-div">
        <motion.form
          onSubmit={sendEmail}
          variants={{
            hidden: { opacity: 0, x: "-100vw" },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: "spring", delay: 0.3, duration: 1.6 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
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
            <button
              id="send-button"
              name="submit"
              type="submit"
              className="form-control glow-on-hover submit my-2"
            >
              Gönder
            </button>
          </div>
        </motion.form>
        {/* {scrollPos1 < 1140 ? (
        ) : (
          ""
        )} */}
      </div>
      <div ref={ref2} className="touch-div">
        <motion.div
          className="touch-me"
          variants={{
            hidden: { opacity: 0, x: "100vw" },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: "spring", delay: 0.3, duration: 1.6 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
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
          <div className="mb-2 touch-me-icons">
            <div class="touch-me-icon-container">
              <a
                href="https://www.linkedin.com/in/bedirgocmez/"
                class="touch-me-icon icon-fill"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div class="touch-me-icon-container">
              <a
                href="https://github.com/bedirgcmz"
                class="touch-me-icon icon-fill"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* {scrollPos1 < 1140 ? (
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
};

export default Contact;
