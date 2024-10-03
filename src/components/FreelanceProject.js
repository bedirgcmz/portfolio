import "./FreelanceProject.css";
import sky from "../images/sky.jpg";
import rosee from "../images/rosee.jpg";
import { useState, useEffect } from "react";

const FreelanceProject = () => {
  const [screenWidth, setScreenWidth] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth < 769 ? true : false);
    };
    // Ekran boyutu değiştiğinde dinleyici ekle
    window.addEventListener("resize", handleResize);
    // Bileşen yüklendiğinde boyutu kontrol et
    handleResize();
    // Bellek sızıntısını önlemek için dinleyiciyi kaldır
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="free-container">
      <div className="free-card">
        <p className="hover-me-text">{screenWidth ? "Click me!" : "Hover me!"}</p>
        <div className="free-img-container">
          <img src={sky} alt="" />
        </div>
        <div className="free-card-details">
          <h2>SkyTech</h2>
          <p>
            I built a fully responsive website for SkyTech Edu Academy, which offers coding and
            various courses for children worldwide. Powered by React, the site features smooth
            animations with Frame Motion, automatic form submission to Google Sheets, and email
            integration via EmailJS. It also includes three-language support using Context API and
            saves the user's language preference with LocalStorage.
          </p>
          <div className="d-flex justify-content-between">
            <a
              href="https://bedirgcmz-skytech.netlify.app/"
              className="see-demo me-2 btn41-43 btn-41"
              target="_blank"
              rel="noreferrer"
            >
              See demo
            </a>
            <a
              href="https://github.com/bedirgcmz/skyTech"
              className="go-github btn41-43 btn-42"
              target="_blank"
              rel="noreferrer"
            >
              Go Github
            </a>
          </div>
        </div>
      </div>
      <div className="free-card">
        <p className="hover-me-text">{screenWidth ? "Click me!" : "Hover me!"}</p>
        <div className="free-img-container">
          <img src={rosee} alt="" />
        </div>
        <div className="free-card-details">
          <h2>Rose Taxi</h2>

          <p>
            For this taxi company in the UK, I created a sweet and user-friendly website. You’ll
            love the components designed with a focus on UI and UX. I also designed a custom logo
            for this site. EmailJS was used for sending emails, and the website is fully responsive.
            I worked with color palettes to find the most harmonious combinations, resulting in a
            beautifully crafted website.
          </p>
          <div className="d-flex justify-content-between">
            <a
              href="https://www.rosetravel.co.uk/"
              className="see-demo me-2 btn41-43 btn-41"
              target="_blank"
              rel="noreferrer"
            >
              See demo
            </a>
            <a
              href="https://github.com/bedirgcmz/rose-taxi"
              className="go-github btn41-43 btn-42"
              target="_blank"
              rel="noreferrer"
            >
              Go Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceProject;
