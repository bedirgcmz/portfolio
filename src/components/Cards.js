import "./cards.css";
import projectData from "../data/ProjectsData.json";

const group1 = projectData.filter((project) => project.id >= 0 && project.id < 4);

const Cards = () => {
  return (
    <div className="top-cards row row-cols-1 row-cols-md-3 g-4">
      {group1.map((project) => (
        <div class="col">
          <div className="my-card">
            <div className="card-left-content">
              <img className="card-img" src={project.image} />
              <div className="line-and-cirkle-container">
                <div className="one">
                  <div className="l-line line"></div>
                  <div className="l-circle circle"></div>
                </div>
                <p className="m-0">{project.id + 1}</p>
                <div className="two">
                  <div className="r-circle circle"></div>
                  <div className="r-line line"></div>
                </div>
              </div>
            </div>
            <div className="card-right-content">
              <h6 className="project-title m-0">{project.project_name}</h6>
              <p className="project-info">{project.info}</p>
              <div className="d-flex justify-content-between">
                <a href={project.link} className="see-demo me-2 btn41-43 btn-41">
                  See demo
                </a>
                <a href={project.github_link} className="go-github btn41-43 btn-42">
                  Go Github
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* {group1.map((project) => (
        <div className="my-card">
          <div className="card-left-content">
            <img className="card-img" src={project.image} />
            <div className="line-and-cirkle-container">
              <div className="one">
                <div className="l-line line"></div>
                <div className="l-circle circle"></div>
              </div>
              <p className="m-0">{project.id + 1}</p>
              <div className="two">
                <div className="r-circle circle"></div>
                <div className="r-line line"></div>
              </div>
            </div>
          </div>
          <div className="card-right-content">
            <h6 className="project-title m-0">{project.project_name}</h6>
            <p className="project-info">{project.info}</p>
            <div className="d-flex justify-content-between">
              <a href={project.link} className="see-demo me-2 btn41-43 btn-41">
                See demo
              </a>
              <a href={project.github_link} className="go-github btn41-43 btn-42">
                Go Github
              </a>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Cards;
