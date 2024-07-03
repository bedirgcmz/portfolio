import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import projectData from "../data/ProjectsData.json";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getImageURL } from "../utils/functions";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./Swiper.css";

export default ({ fromIndex, toIndex }) => {
  const [screenSize, setScreenSize] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setScreenSize(4);
      } else if (width >= 992) {
        setScreenSize(3);
      } else if (width >= 768) {
        setScreenSize(2);
      } else {
        setScreenSize(1);
      }
    };

    // Sayfa ilk yüklendiğinde boyutu ayarla
    handleResize();

    // Boyut değiştiğinde yeniden ayarla
    window.addEventListener("resize", handleResize);

    // Component temizlendiğinde event listener'ı kaldır
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={screenSize}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      autoplay={{ delay: 3000, pauseOnMouseEnter : true }}
      
      // disableOnInteraction={false}
      className="mySwiper"
    >
      {projectData
        .filter((prj, index) => index >= fromIndex && index <= toIndex)
        .map((project, index) => (
          <SwiperSlide key={project.id}>
            <motion.div
              className="my-card m-auto "
              whileHover={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 160, damping: 7 }}
            >
              <div className="card-left-content">

                <img className="card-img" src={getImageURL(project.image) } alt="Project demo" />
                <div className="line-and-cirkle-container">
                  <div className="one">
                    <div className="l-line line"></div>
                    <div className="l-circle circle"></div>
                  </div>
                  <p className="m-0">{index + 1 + fromIndex}</p>
                  <div className="two">
                    <div className="r-circle circle"></div>
                    <div className="r-line line"></div>
                  </div>
                </div>
              </div>
              <h6 className="project-title m-0">{project.project_name}</h6>
              <div className="card-right-content">
                <p className="project-info">{project.info}</p>
                <div className="d-flex justify-content-between">
                  <a href={project.link} className="see-demo me-2 btn41-43 btn-41" target="_blank" rel="noreferrer">
                    See demo
                  </a>
                  <a
                    href={project.github_link}
                    className="go-github btn41-43 btn-42"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go Github
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
