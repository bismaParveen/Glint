import React from "react";
import "../Footer/Footer.css";
import LFooter from "../Images/footer.png";

function Footer() {
  return (
    <>
      <footer>
        <div id="footer" className="footer">
          <div className="footer-content">
            <div className="container">
              <div className="fdesc">
                <img src={LFooter} alt="" />
                <p>
                  Proin eget tortor risus. Mauris blandit aliquet elit, eget
                  tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
                  pellentesque nec, egestas non nisi. Mauris blandit aliquet
                  elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
                  tincidunt. Nulla porttitor accumsan tincidunt. Quaerat
                  voluptas autem necessitatibus vitae aut.
                </p>
              </div>
            </div>
            <div className="fsubsc">
              <h5>Get Notified</h5>
              <p>
                Quia quo qui sed odit. Quaerat voluptas autem necessitatibus
                vitae aut non alias sed quia. Ut itaque enim optio ut excepturi
                deserunt iusto porro.
              </p>
              <div className="fform">
                <i className="fa-regular fa-envelope"></i>
                <form>
                  <label htmlFor="email"> </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    required
                  />
                </form>
                <div className="btn">
                  <a href="#login">
                    <button type="button" className="btn-ablue">
                      Subscribe
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flast">
            <span>© Copyright Glint 2022 | Site Template by</span>

            <a href="https://colorlib.com/" target="_blank" rel="noreferrer">
              {" "}
              Colorlib
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
