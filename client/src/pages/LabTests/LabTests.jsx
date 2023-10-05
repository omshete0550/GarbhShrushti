import React from "react";
import "../Labs/Labs.css";
import'./LabTests.css';
import { FaSearch } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const VaccineCenter = [
  {
    id: 1,
    HospImg:
      "https://arcmaxarchitect.com/sites/default/files/best_architect_for_multi_specialty_hospital_design.jpg",
    HospName: "Jupiter Hospital",
    HospLoc: "Sonography Test",
    HospDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
  },
  {
    id: 2,
    HospImg:
      "https://cdn.britannica.com/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg",
    HospName: "Ambani Hospital",
    HospLoc: "X-Ray Test",
    HospDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
  },
  {
    id: 3,
    HospImg:
      "https://lilavatihospital.com/uploads/home_banner/imgBanner-133185986163033235.jpg",
    HospName: "Lilavati Hospital",
    HospLoc: "Magnetic Resonance Imaging(MRI)",
    HospDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
  },
  {
    id: 4,
    HospImg:
      "https://i0.wp.com/calmatters.org/wp-content/uploads/2022/06/033023-Hollister-Hospital-LV_10-CM.jpg?fit=1200%2C800&ssl=1",
    HospName: "Jupiter Hospital",
    HospLoc: "Electrocardiogram(ECG)",
    HospDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
  },
  {
    id: 5,
    HospImg:
      "https://ivyhospital.com/Content/images/png/Bathinda_home.png",
    HospName: "Jupiter Hospital",
    HospLoc: "Positron Emission Tomography Scan",
    HospDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
  },
  {
    id: 6,
    HospImg:
      "https://www.vaidam.com/sites/default/files/hospitals/ivy_bhatinda-min.jpg",
    HospName: "Jupiter Hospital",
    HospLoc: "Blood Tests ",
    HospDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
  },
];

const LabTests = () => {
  return (
    <>
      <div className="LabsContainer">
        <div className="LabHero">
          <h1 style={{ display: 'flex', justifyContent: 'center', gap: '0.3em' }}> <i><FaClock /></i> Book Your Slot at Your Convenience</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2em",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
              <img
                src="https://www.medibuddy.in/assets/icons/check-tick.svg"
                alt=""
              />
              <span>100 % Genuine Tests</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
              <img
                src="https://www.medibuddy.in/assets/icons/check-tick.svg"
                alt=""
              />
              <span>Trusted Reports</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
              <img
                src="https://www.medibuddy.in/assets/icons/check-tick.svg"
                alt=""
              />
              <span>Find ato your doorstep</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
              <img
                src="https://www.medibuddy.in/assets/icons/check-tick.svg"
                alt=""
              />
              <span>Well Equiped</span>
            </div>
          </div>
        </div>
        <div className="LabSearch">
          <input type="search" placeholder="Search Medicines" />
          <button>
            <FaSearch />
          </button>
        </div>

        <div style={{ marginTop: '5em', padding: '20px 150px' }}>
          <div className="Vaccinecards">
            {VaccineCenter.map((e, index) => (
              <a className="card" key={index}>
                <div className="card-hero">
                  <img src={e.HospImg} width="288" />
                </div>
                <div className="card-header">
                  <h3>{e.HospLoc}</h3>
                  <h5
                    style={{
                      marginTop: "0.5em",
                      fontSize: "1em",
                      fontWeight: "400",
                    }}
                  >
                    {e.HospName}{" "}
                  </h5>
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididun
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
    </>
  );
};

export default LabTests;
