import { NavLink } from "react-router-dom";

import logo from "../images/logo.jpg";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <nav className={`navbar navbar-expand-lg bg-light ${classes.firm}`}>
      <div className="container bg-light">
        <img className={classes.navlogo} src={logo} alt="logo" />
        <a className="navbar-brand me-auto" href="/">
          CEIS-Foundation
        </a>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-us"
                className="nav-link"
                activeclassname="active"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace("#testimonials");
                }}
              >
                <span className={`nav-link ${classes.cursor}`}>
                  Testimonials
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
