import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import "./hovers.css";
import projectData from "../data/ProjectsData.json";
import { motion } from "framer-motion";
import Cards from "./Cards.js";

const Projects = () => {
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
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              {/* <div class="carousel-item active">
                <div className="top-cards row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[0].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[0].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[0].project_name}</h6>
                        <p className="project-info">{projectData[0].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[0].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[0].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card ">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[1].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[1].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[1].project_name}</h6>
                        <p className="project-info">{projectData[1].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[1].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[1].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-cards row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[2].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[2].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[2].project_name}</h6>
                        <p className="project-info">{projectData[2].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[2].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[2].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[3].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[3].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[3].project_name}</h6>
                        <p className="project-info">{projectData[3].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[3].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a href={projectData[3].link} className="go-github btn41-43 btn-42">
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="top-cards row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[4].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[4].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[4].project_name}</h6>
                        <p className="project-info">{projectData[4].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[4].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[4].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[5].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[5].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[5].project_name}</h6>
                        <p className="project-info">{projectData[5].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[5].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[5].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-cards row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[6].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[6].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[6].project_name}</h6>
                        <p className="project-info">{projectData[6].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[6].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[6].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[7].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[7].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[7].project_name}</h6>
                        <p className="project-info">{projectData[7].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[7].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a href={projectData[7].link} className="go-github btn41-43 btn-42">
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="top-cards row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[8].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[8].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[8].project_name}</h6>
                        <p className="project-info">{projectData[8].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[8].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[8].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[9].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[9].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[9].project_name}</h6>
                        <p className="project-info">{projectData[9].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[9].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[9].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-cards row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[10].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[10].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[10].project_name}</h6>
                        <p className="project-info">{projectData[10].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[10].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[10].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[11].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[11].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[11].project_name}</h6>
                        <p className="project-info">{projectData[11].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[11].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a href={projectData[11].link} className="go-github btn41-43 btn-42">
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="top-cards row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[12].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[12].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[12].project_name}</h6>
                        <p className="project-info">{projectData[12].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[12].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[12].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="my-card">
                      <div className="card-left-content">
                        <img className="card-img" src={projectData[13].image} />
                        <div className="line-and-cirkle-container">
                          <div className="one">
                            <div className="l-line line"></div>
                            <div className="l-circle circle"></div>
                          </div>
                          <p className="m-0">{projectData[13].id + 1}</p>
                          <div className="two">
                            <div className="r-circle circle"></div>
                            <div className="r-line line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <h6 className="project-title m-0">{projectData[13].project_name}</h6>
                        <p className="project-info">{projectData[13].info}</p>
                        <div className="d-flex justify-content-between">
                          <a href={projectData[13].link} className="see-demo me-2 btn41-43 btn-41">
                            See demo
                          </a>
                          <a
                            href={projectData[13].github_link}
                            className="go-github btn41-43 btn-42"
                          >
                            Go Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {
                <div class="carousel-item active ">
                  <Cards />
                </div>
              }
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </motion.section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Projects;
