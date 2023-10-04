import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="padding_4x">
        <div className="flex">
          <section className="flex-content padding_1x">
            <h3>Health</h3>
            <a href="#">Book Medicine</a>
            <a href="#">Doctor Consultation</a>
            <a href="#">Meternity Gold</a>
            <a href="#">Dental</a>
          </section>
          <section className="flex-content padding_1x">
            <h3>Hospitalization</h3>
            <a href="#">Paln hospitalization</a>
            <a href="#">Locate Hospital</a>
            <a href="#">Track Claim</a>
            <a href="#">Terms of Service</a>
          </section>
          <section className="flex-content padding_1x">
            <h3>About</h3>
            <a href="#">Overview</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
            <a href="#">Blogs</a>
          </section>
          <section className="flex-content padding_1x">
            <h3>Resources</h3>
            <a href="#">Careers</a>
            <a href="#">Security</a>
            <a href="#">Experts</a>
            <a href="#">Agencies</a>
          </section>
          <section className="flex-content padding_1x">
            <h3>Newsletter</h3>
           
            <fieldset className="fixed_flex">
              <input
                type="email"
                name="newsletter"
                placeholder="Your Email Address"
              />
              <button className="btn btn_2">Subscribe</button>
            </fieldset>
          </section>
        </div>
        <div className="flex">
          <section className="flex-content padding_1x">
            <p>Copyright ©2023 All rights reserved || Meternity</p>
          </section>
          {/* <section className="flex-content padding_1x">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </section> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
