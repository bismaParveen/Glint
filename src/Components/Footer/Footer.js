import React from "react";
import "../Footer/Footer.css";
import LFooter from "../img/footer.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="fdesc">
              <img src={LFooter} alt="" />
              <p>
                Proin eget tortor risus. Mauris blandit aliquet elit, eget
                tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
                eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
                tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
                autem necessitatibus vitae aut.
              </p>
            </div>
          </div>
          <div className="fsubsc">
            <h5>Get Notified</h5>
            <p>
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>
            <div className="sform">
              <form>
                <div className="email">
                  <i className="fa-regular fa-envelope"></i>Email Address
                </div>
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="flast">
          <div className="fcopy">
            <span>© Copyright Glint 2022 </span>
          </div>

          <div className="vl"></div>
          <div className="fsite">
            <span>
              {" "}
              Site Template by{" "}
              <a href="https://colorlib.com/" target="_blank" rel="noreferrer">
                {" "}
                Colorlib
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
