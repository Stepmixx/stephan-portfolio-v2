import React from "react";
import "./Projects.scss";
import { projectsData } from "../../data";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-wrapper">
        {projectsData.map((d, i) => (
          <div className="project-img" id={d.title} key={i}>
            <a href={d.link} target="_blank" rel="noreferrer">
              <h3>{d.title}</h3>
              <img src={process.env.PUBLIC_URL + d.img} alt={d.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
