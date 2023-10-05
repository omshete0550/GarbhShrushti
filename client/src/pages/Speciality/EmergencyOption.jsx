import React from "react";
import { Link } from "react-router-dom";
import "./Speciality.css";
const EmergencyOption = () => {
  const name = localStorage.getItem('userName');
  console.log(name);
  const handleEmergency = async (event) => {
    event.preventDefault();
    // const updatedApptDetails = {
    //   ...appointmentDetails,
    //   patientId: localStorage.getItem("userId"), // Replace with the actual patientId
    //   doctorId: doctorId, // You can use the doctorId from useParams
    // };

    const response = await fetch("http://localhost:8800/emergency-contact",{
      method:'POST',
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        name:name
      })
    });
    const datas = await response.json();
    console.log(datas);
  }
  return (
    <>
    <h1 className="specialityHeading" style={{"color":"#1977cc", "padding":"40px", "borderBottom":"2px solid #1977cc", "boxShadow":"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>Choose The Mode</h1>
      <div className="cards-list">
        <Link to= {`/doctor-list/${0}`} style={{ textDecoration: "none" }}>
          <div className="card1">
            <div className="card_image">
              {" "}
              <img src="https://cdn.pixabay.com/photo/2016/06/06/16/39/phone-1439839_640.png" />{" "}
            </div>
            <div className="card_title title-white" style={{"paddingTop":"10px"}}>
              <p>Contact via CALL</p>
            </div>
          </div>
        </Link>

        <Link to={`/doctor-list/${1}`}  style={{ textDecoration: "none" }}>
        <a onClick={handleEmergency}>
          <div className="card1">
            <div className="card_image">
              {" "}
              <img src="https://play-lh.googleusercontent.com/c5HiVEILwq4DqYILPwcDUhRCxId_R53HqV_6rwgJPC0j44IaVlvwASCi23vGQh5G3LIZ" />{" "}
            </div>
            <div className="card_title title-white" style={{"paddingTop":"10px"}}>
              <p>Contact via MESSAGE</p>
            </div>
          </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default EmergencyOption;
