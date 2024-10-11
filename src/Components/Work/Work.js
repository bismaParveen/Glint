import React from "react";
import "../Work/Work.css";
import Lady from "../Images/lady.png";
import Woodcraft from "../Images/woodcraft.jpg";
import Beetle from "../Images/beetle.jpg";
import Green from "../Images/green.jpg";
import Guitarist from "../Images/guitarist.jpg";
import Palmeira from "../Images/palmeira.jpg";

const Work = () => {
  return (
    <>
    <section id="work" className="work-container black">
        <div className="work">
          <div className="text">RECENT WORKS</div>
          <h2>We love what we do, check out some of our latest works</h2>
          <hr />
        </div>
        <div className="rows">
          <div className="column">
            <div className="card">
              <div className="img">
                <div className="icon">
                  <i className="fa-solid fa-link circle"></i>
                </div>
                <a href={Lady} target="_blank" rel="noreferrer" className="btn">
                  <i className="fa-solid fa-plus"></i>
                </a>
                <div className="heading pt-5">
                  <h3>Shutterbug</h3>
                  <p>Branding</p>
                </div>
              </div>
              <img src={Lady} alt="" />
            </div>
            <div className="card">
              <div className="img">
                <div className="icon">
                  <i className="fa-solid fa-link circle"></i>
                </div>
                <a
                  href={Beetle}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
                <div className="heading pt-5">
                  <h3>The Beetle</h3>
                  <p>Web Development</p>
                </div>
              </div>
              <img src={Beetle} alt="" />
            </div>

            <div className="card">
              <div className="img">
                <div className="icon">
                  <i className="fa-solid fa-link circle"></i>
                </div>
                <a
                  href={Guitarist}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
                <div className="heading pt-5">
                  <h3>Guitarist</h3>
                  <p>Web Design</p>
                </div>
              </div>
              <img src={Guitarist} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="img">
                <div className="icon">
                  <i className="fa-solid fa-link circle"></i>
                </div>
                <a
                  href={Woodcraft}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
                <div className="heading pt-5">
                  <div className="heading">
                    <h3>Woodcraft</h3>
                    <p>Web Design</p>
                  </div>
                </div>
              </div>
              <img src={Woodcraft} alt="" />
            </div>

            <div className="card">
              <div className="img">
                <div className="icon">
                  <i className="fa-solid fa-link circle"></i>
                </div>
                <a
                  href={Green}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
                <div className="heading pt-5">
                  <h3>Grow Green</h3>
                  <p>Branding</p>
                </div>
              </div>
              <img src={Green} alt="" />
            </div>

            <div className="card">
              <div className="img">
                <div className="icon">
                  <i className="fa-solid fa-link circle"></i>
                </div>
                <a
                  href={Palmeira}
                  target="_blank "
                  rel="noreferrer"
                  className="btn"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
                <div className="heading">
                  <h3>Palmeira</h3>
                  <p>Web Design</p>
                </div>
              </div>
              <img src={Palmeira} alt="" />
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default Work;
