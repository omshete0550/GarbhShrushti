import React from "react";
import { Link } from "react-router-dom";
import "./Speciality.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const Speciality = () => {
  return (
    <>
    <Navbar />
    <h1 className="specialityHeading">Choose The Speciality</h1>
      <div className="cards-list">
        <Link to= {`/doctor-list/${0}`} style={{ textDecoration: "none" }}>
          <div className="card1">
            <div className="card_image">
              {" "}
              <img src="https://views.medibuddy.in/offlineconsults/pregnancy.png" />{" "}
            </div>
            <div className="card_title title-white">
              <p>For Mother</p>
            </div>
          </div>
        </Link>

        <Link to={`/doctor-list/${1}`}  style={{ textDecoration: "none" }}>
          <div className="card1">
            <div className="card_image">
              {" "}
              <img src="https://views.medibuddy.in/offlineconsults/child_infant_issues.png" />{" "}
            </div>
            <div className="card_title title-white">
              <p>For Child</p>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Speciality;
