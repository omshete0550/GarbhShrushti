import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="landingcontainer">
        <section>
          <em>WELCOME TO NAME_HERE</em>
          <h1>Take the world's best quality Treatment</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          <Link to="/home"><button className="LearnMore">Learn More</button></Link>
        </section>
      </div>

      <section className="section1">
        <table>
          <tr>
            <td>
              <div className="form">
                {/* <h4>REQUEST FOR YOUR</h4> */}
                <h1>Consultation</h1>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Name"
                  maxlength="60"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  maxlength="100"
                  required
                />
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder=""
                  required
                />
                <select name="service">
                  <option value="emergencyservice">Emergency Service</option>
                  <option value="certifiedservice">Certified Service</option>
                </select>
                <button type="submit" className="btn2">
                  BOOK APPOINTMENT
                </button>
              </div>
            </td>
            <td>
              <em>ABOUT US</em>
              <h1>Get better care for your health</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </td>
          </tr>
        </table>
      </section>

      <section className="section2">
        <div className="cards">
          <div className="card">
            <i className="fa fa-medkit"></i>
            <h1>Qualified Doctors</h1>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
          <div className="card">
            <i className="fa fa-certificate"></i>
            <h1>Certified Services</h1>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
          <div className="card">
            <i className="fa fa-stethoscope"></i>
            <h1>Advanced Equipment</h1>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
          <div className="card">
            <i className="fa fa-heartbeat"></i>
            <h1>Emergency Service</h1>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="cards">
          <div className="card">
            <section>
              <h1>Laboratory Services</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
          <div className="card">
            <section>
              <h1>General Treatment</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
          <div className="card">
            <section>
              <h1>Orthopedician</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </section>
          </div>
        </div>
        <div className="content">
          <h1>We are well experienced doctors</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default Landing;
