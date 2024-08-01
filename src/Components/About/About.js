import React from "react";
import "../About/About.css";

const About = () => {
  return (
    <section id="about" className="about-container px-3">
      <div className="about">
        <div className="text text-dark">HELLO THERE</div>
        <h1>We Are Glint.</h1>
        <hr className="text-center" />
        <p className="lead text-dark">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </p>
      </div>

      <div id="icons">
        <div className="icons">
          <span className="number text-white">127</span>
          <span className="text-dark">Awards Received</span>
        </div>
       <div className="vl"></div>
        <div className="icons">
          <span className="number text-white">1505</span>
          <span className="text-dark">Cups of Coffee</span>
        </div>
       <div className="vl"></div>
        <div className="icons">
          <span className="number text-white">109</span>
          <span className="text-dark">Projects Completed</span>
        </div>
        <div className="vl"></div>
        <div className="icons">
          <span className="number text-white">102</span>
          <span className="text-dark">Happy Clients</span>
        </div>
      </div>
    </section>
  );
};

export default About;
