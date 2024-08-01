import "../Clients/Clients.css";
import Slider from "react-slick";
import React from "react";
import Apple from "../img/apple.png";
import Atom from "../img/atom.png";
import Black from "../img/black.png";
import Dropbox from "../img/dropbox.png";
import Envato from "../img/envato.png";
import Firefox from "../img/firefox.png";
import Joomla from "../img/joomla.png";
import Magneto from "../img/magento.png";
import User1 from "../img/user-01.jpg";
import User2 from "../img/user-02.jpg";
import User3 from "../img/user-03.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <section id="clients" className="clients-container">
      <div className="clients">
        <h5>OUR CLIENTS</h5>
        <p>Glint has been honored to partner up with these clients</p>
      </div>

      <div className="slider-container mb-5">
        <Slider {...setting}>
          <div>
            <img src={Apple} alt="" />
          </div>
          <div>
            <a href="/">
              <img src={Atom} alt="" />
            </a>
          </div>
          <div>
            <img src={Black} alt="" />
          </div>
          <div>
            <img src={Dropbox} alt="" />
          </div>
          <div>
            <img src={Envato} alt="" />
          </div>
          <div>
            <img src={Firefox} alt="" />
          </div>
          <div>
            <img src={Joomla} alt="" />
          </div>
          <div>
            <img src={Magneto} alt="" />
          </div>
        </Slider>
      </div>

      <hr />
      <div className="text-secondary">
        {/* <Slider {...settings}> */}
            <div className="para">
              {" "}
              <p>
                Excepturi nam cupiditate culpa doloremque deleniti repellat.
                Veniam quos repellat voluptas animi adipisci. Nisi eaque
                consequatur. Quasi voluptas eius distinctio. Atque eos maxime.
                Qui ipsam temporibus quisquam vel.{" "}
              </p>{" "}
              <div className="image">
                <img src={User3} alt="" />
                <span className="name">Sundar Pichai</span>
                <span className="pos">CEO, Google</span>{" "}
              </div>{" "}
            </div>

          <div className="para">
            <p>
              Repellat dignissimos libero. Qui sed at corrupti expedita voluptas
              odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque
              officia cum exercitationem sunt voluptatum accusamus. Quasi
              voluptas eius distinctio.{" "}
            </p>
            <div className="image">
              <img src={User2} alt="" />{" "}
              <span className="name">Satya Nadella</span>{" "}
              <span className="pos">CEO, Microsoft</span>
            </div>
          </div>
          <div className="para">
            <p>
              Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio
              nam accusantium ipsum. Laudantium quia consequatur molestias
              delectus culpa facere hic dolores aperiam. Accusantium quos qui
              praesentium corpori. Excepturi nam cupiditate culpa doloremque
              deleniti repellat.
            </p>
            <div className="image">
              <img src={User1} alt="" />
              <span className="name">Tim Cook</span>
              <span className="pos">CEO, Apple</span>
            </div>
          </div>
        {/* </Slider> */}
      </div>
    </section>
  );
}


