import React, { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [menuIsOpen, openCloseMenu] = useState(false);
  return (
    <div className="navbar">
      <h3 id="logo">
        <a href="#home">Step</a>
      </h3>
      <div className="menu-icon" onClick={() => openCloseMenu(!menuIsOpen)}>
        {menuIsOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
      <ul className={menuIsOpen ? "nav-list active" : "navlist"}>
        <li>
          <a href="#home" onClick={() => openCloseMenu(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => openCloseMenu(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => openCloseMenu(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => openCloseMenu(false)}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
