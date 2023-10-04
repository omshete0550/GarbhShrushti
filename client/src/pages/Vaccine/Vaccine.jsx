import React from "react";
import CustomizedTimeline from "../../components/Timeline/CustomizedTimeline";
import "./Vaccine.css";
import { VaccineCenter } from "../../data/data";
const Vaccine = () => {
  return (
    <>
      <div className="VaccineContainer">
        <h1>National Immunization Chart</h1>

        <div style={{ display: "flex", marginTop: "2em" }}>
          <div style={{ width: "100%" }}>
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
                    <h3>Jupiter Hospital</h3>
                    <h5
                      style={{
                        marginTop: "0.5em",
                        fontSize: "1em",
                        fontWeight: "400",
                      }}
                    >
                      Pali Hill, Bandra{" "}
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

              {/* <a className="card">
                <div className="card-hero">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzg4NQ&ixlib=rb-1.2.1&q=85"
                    width="288"
                  />
                </div>
                <div className="card-header">
                  <h3>Jupiter Hospital</h3>
                  <h5
                    style={{
                      marginTop: "0.5em",
                      fontSize: "1em",
                      fontWeight: "400",
                    }}
                  >
                    Pali Hill, Bandra{" "}
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
              <a className="card">
                <div className="card-hero">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg"
                    width="288"
                  />
                </div>
                <div className="card-header">
                  <h3>Jupiter Hospital</h3>
                  <h5
                    style={{
                      marginTop: "0.5em",
                      fontSize: "1em",
                      fontWeight: "400",
                    }}
                  >
                    Pali Hill, Bandra{" "}
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
              <a className="card">
                <div className="card-hero">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzg4NQ&ixlib=rb-1.2.1&q=85"
                    width="288"
                  />
                </div>
                <div className="card-header">
                  <h3>Jupiter Hospital</h3>
                  <h5
                    style={{
                      marginTop: "0.5em",
                      fontSize: "1em",
                      fontWeight: "400",
                    }}
                  >
                    Pali Hill, Bandra{" "}
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
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vaccine;
