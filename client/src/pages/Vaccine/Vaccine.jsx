import React from "react";
import CustomizedTimeline from "../../components/Timeline/CustomizedTimeline";
import "./Vaccine.css";
import { VaccineCenter } from "../../data/data";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const Vaccine = () => {
  return (
    <>
      <Navbar />
      <div className="VaccineContainer">
        <h1>National Immunization Chart</h1>

        <div
          style={{ display: "flex", marginTop: "2em", "column-gap": "4rem" }}
        >
          <div style={{ width: "150%" }}>
            <CustomizedTimeline />
          </div>
          <div>
            <h1 className="vaccineCen">Vaccination Centers</h1>
            <div id="borderLeft"></div>
            <div className="Vaccinecards">
              {VaccineCenter.map((e, index) => (
                <a className="card" key={index}>
                  <div className="card-hero">
                    <img src={e.HospImg} width="288" />
                  </div>
                  <div className="card-header">
                    <h3>{e.HospName}</h3>
                    <h5
                      style={{
                        marginTop: "0.5em",
                        fontSize: "1em",
                        fontWeight: "400",
                      }}
                    >
                      {e.HospLoc}{" "}
                    </h5>
                  </div>
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun
                    </p>
                    <div>
                      <h3 style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
                        Time Slots
                      </h3>
                      <div className="timeSlotvaccine">
                        <button>9 - 11.30 AM</button>
                        <button>12 - 2 PM</button>
                        <button>3 - 5 PM</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="footer-item">
                      <button>Reserve Spot</button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vaccine;
