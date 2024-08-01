import React from "react";
import "../Home/Home.css";

const Home = () => {
  return (
    <section id="home" className="home_container d-flex text-white">
      <div className="section-1">
        <div className="text-secondary fw-bold">Welcome to Glint</div>
        <h1>
          We are a creative group
          <br />
          of people who design <br /> influential brands and <br /> digital
          experiences.
        </h1>
        <a href="#contact" className="btn">
          <button type="button" className="button">
            Start a project
          </button>
        </a>
        <a href="#about" className="btn">
          <button type="button" className="button">
            More about us
          </button>
        </a>
      </div>
      </section>
  );
};

export default Home;
