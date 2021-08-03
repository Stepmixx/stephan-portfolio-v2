import React, { useEffect, useRef } from "react";
import "./Home.scss";
import { init } from "ityped";

function Home() {
  const subtitleRef = useRef();

  useEffect(() => {
    init(subtitleRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ["Front-End Developer", "Kinda Designer", "Road to Full-Stack"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="title-wrapper">
        <h1>Stephan Calderin</h1>
        <h2>
          <span ref={subtitleRef}></span>
        </h2>
      </div>
      <a href="#about">
        <i className="fas fa-chevron-down"></i>
      </a>
    </div>
  );
}

export default Home;
