import { NavLink } from "react-router-dom";
import "./Navbar.css"
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`navbar navbar-expand-lg second-bg fixed-top py-4 d-flex justify-content-center align-items-center ${
        isShrunk ? "shrunk" : ""
      }`}
    >
      <div className="container">
        <NavLink className="navbar-brand text-white fw-bold fs-2" to={"/home"}>
          START FRAMEWORK
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3 ms-auto me-3">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold fs-6"
                aria-current="page"
                to={"/about"}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold fs-6" to={"/portfolio"}>
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bold fs-6" to={"/contact"}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
