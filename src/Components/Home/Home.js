import React from "react";
import "../Home/Home.css";

const Home = () => {
  return (
    <section id="home" className="home text-white">
      <div className="container">
        <div className="home-content">
          <div className="home-left">
            <div className="text-secondary fw-bold">Welcome to Glint</div>
            <h1>We are a creative group</h1>
            <h1>of people who design </h1> <h1>influential brands and </h1>
            <h1>digital experiences.</h1>
            <div className="btn fw-bold">
            <a href="#contact">
              <button type="button" className="button">
                Start a project
              </button>
            </a>
            <a href="#about">
              <button type="button" className="button ">
                More about us
              </button>
            </a>
            </div>
         
          </div>
          <div className="right-icons d-flex">
            <a
              href="https://www.facebook.com/"
              className="facebook"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-name">
                <i className="icon fa-brands fa-facebook-f">
                  <span>facebook</span>
                </i>
              </div>
            </a>
            <a
              href="https://twitter.com/"
              className="twitter"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-name">
                <i className="icon fa-brands fa-twitter">
                  <span>twitter</span>
                </i>
              </div>
            </a>
            <a
              href="https://instagram.com/"
              className="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-name">
                <i className="icon fa-brands fa-instagram">
                  <span>instagram</span>
                </i>
              </div>
            </a>
            <a
              href="https://behance.com/"
              className="behance"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-name">
                <i className="icon fa-brands fa-behance">
                  <span>behance</span>
                </i>
              </div>
            </a>
            <a
              href="https://dribble.com/"
              className="dribble"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-name">
                <i className="icon fa-solid fa-basketball">
                  <span>dribble</span>
                </i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
