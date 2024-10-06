import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./HireMePopup.css";
import hiremeImg from "../images/hiremebg2.png";
import hiremeImgMobil from "../images/hiremebg-mobil.png";
import button from "../images/button.png";
import { getImageURL } from "../utils/functions";

const HireMePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Popup 3 saniye sonra gösterilecek

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const projects = [
    {
      img: "skyTech.jpg",
      href: "https://skyeducationacademy.com/",
    },
    {
      img: "roseTaxi.jpg",
      href: "https://www.rosetravel.co.uk/",
    },
    {
      img: "meals.jpg",
      href: "https://bedirgcmz-meals.netlify.app/",
    },
  ];

  return (
    <>
      {isVisible && (
        <div className="popup-background" onClick={closePopup}>
          <div className="animation">
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
              <div className="close-button" onClick={closePopup}>
                <FaTimes />
              </div>
              <img className="hire-me-img" src={hiremeImg} alt="Hire me" />
              <img className="hire-me-img-mobil" src={hiremeImgMobil} alt="Hire me" />
              <div className="popup-content">
                <a href="mailto:your.email@example.com" className="hire-me-button">
                  <img className="hire-me-button-img" src={button} alt="Hire me" />
                </a>
              </div>
              <div className="projects">
                {projects.map((item) => (
                  <a target="_blank" href={item.href} rel="noreferrer">
                    <img className="project-img" src={getImageURL(item.img)} alt="Hire me" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HireMePopup;
