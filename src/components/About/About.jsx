import React from "react";
import "./About.scss";
import { skillsData } from "../../data";

function About() {
  return (
    <div className="about" id="about">
      <h2>About</h2>
      <div className="about-wrapper">
        <div className="right">
          <div className="intro">
            <p>
              Hi, I’m Stephan Calderin, from Margarita island, Venezuela. Here
              are some of my developer/designer skills.
            </p>
          </div>
        </div>
        <div className="center">
          <div className="developer-skills">
            <h3>Developer Skills</h3>
            <div className="dev-skills-container">
              {skillsData[0].map((d, i) => (
                <div className="tooltip-container">
                  <div
                    className="skill-img"
                    id={d.title}
                    key={i}
                    data-tooltip={d.title}
                  >
                    <img src={process.env.PUBLIC_URL + d.img} alt={d.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="left">
          <div className="designer-skills">
            <h3>Designer Skills</h3>
            <div className="des-skills-container">
              {skillsData[1].map((d, i) => (
                <div className="tooltip-container">
                  <div
                    className="skill-img"
                    id={d.title}
                    key={i}
                    data-tooltip={d.title}
                  >
                    <img src={process.env.PUBLIC_URL + d.img} alt={d.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
