import React from "react";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact">
        <h5>CONTACT US</h5>
        <p>Reach out for a new project or just say hello</p>
      </div>
      <div className="row-container">
        <div className="row">
          <span>Send us a Message</span>
          <div className="form">
            <form>
              {/* <label htmlFor="name">This field is required.</label> */}
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
              />
            </form>
            <form>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
              />
            </form>
            <form>
              <label htmlFor="subject"></label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                placeholder="Subject"
              />
            </form>
            <form>
              <label htmlFor="form-control" className="form-label"></label>
              <textarea
                className="form-control"
                id="textarea"
                rows="4"
                required=""
                placeholder="Your Message"
              ></textarea>
            </form>
            <div className="btn" a href="/">
              <button className="btn btn-success" id="Submit" value="submit">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="text pb-5">
            <span>Contact Info</span>
          </div>

          <div className="cinfo text-white">
            <h5>Where to Find Us</h5>
            <p>
              1600 Amphitheatre Parkway <br /> Mountain View, CA <br /> 94043 US
            </p>
          </div>
          <div className="cinfo pt-5">
            <h5>Email Us At</h5>
            <p>
              contact@glintsite.com <br />
              info@glintsite.com
            </p>
          </div>
          <div className="cinfo pt-5">
            <h5>Call Us At</h5>
            <p>
              Phone: (+63) 555 1212 <br />
              Mobile: (+63) 555 0100 <br />
              Fax: (+63) 555 0101
            </p>
          </div>
          <div className="cicons">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
