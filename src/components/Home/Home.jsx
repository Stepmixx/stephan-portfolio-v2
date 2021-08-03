import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home" id="home">
      <div className="title-wrapper">
        <h1>Stephan Calderin</h1>
        <h2>Front-End Developer</h2>
      </div>
      <a href="#about">
        <i className="fas fa-chevron-down"></i>
      </a>
    </div>
  );
}

export default Home;
