import React, { useState } from "react";
import "../Navbar/Navbar.css";
import Glint from "../Images/glint.png";

function Navbar() {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <div id="header" className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-logo">
              <a href="/" className="text-white">
                <img src={Glint} alt="" />
              </a>
            </div>
            <div
              className="header-menu"
              onClick={() => setShowNav(true)}
              title="open"
            >
              <span className="text-center fa-1x">MENU
              </span>
              <i className="fa-solid fa-bars text-white fa-2x"></i>
            </div>

            {showNav ? (
              <nav className="nav-container">
                <div className="nav_menu" id="nav_menu">
                  <div className="navbar pt-5 mb-5">
                    <div className="nav-name">Navigation</div>
                    <div className="nav-icon">
                      <i
                        className="fa-solid fa-xmark text-white"
                        onClick={() => setShowNav(false)}
                        title="close"
                      ></i>
                    </div>
                  </div>
                  <ul className="nav_list">
                    <li className="nav-item">
                      <a href="/" className="nav_link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav_link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#services" className="nav_link">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#work" className="nav_link">
                        Works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#clients" className="nav_link">
                        Clients
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#contact" className="nav_link">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="nav-para">
                    <p>
                      Perspiciatis hic praesentium nesciunt. Et neque a dolorum{" "}
                      <b> voluptatem </b> porro iusto sequi veritatis libero
                      enim. Iusto id suscipit veritatis neque reprehenderit.
                    </p>
                    <div className="icons">
                      <a
                        href="https://www.facebook.com/"
                        className="facebook"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://twitter.com/"
                        className="twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a
                        href="https://instagram.com/"
                        className="instagram"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a
                        href="https://behance.com/"
                        className="behance"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-behance"></i>
                      </a>
                      <a
                        href="https://dribble.com/"
                        className="dribble"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-solid fa-basketball"></i>
                      </a>
                    </div>
                    {/* <div  className="arrow d-flex">
                      <i className="fa-solid fa-arrow-up"></i>
                    </div> */}
                  </div>
                </div>
              </nav>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
