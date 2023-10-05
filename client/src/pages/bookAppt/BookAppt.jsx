import React, { useEffect, useState } from "react";
import "../DoctorList/DoctorList.css";
import { FaLocationArrow } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Review from "../../components/Review/Review";
const doctData1 = [
  {
    specialty: "General Physician",
    name: "Dr. Vijay Kumar K",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    education: "MBBS-General Medicine, MD-General Medicine",
    experience: "12 Years",
    language: "English",
    hospital: "Aster RV Hospital",
    nextAvailable: "10.00 AM - 6 Oct, Fri",
    consultationFees: "₹500 /-",
  },
];
const BookAppt = () => {
  const { doctorId } = useParams();
  console.log(doctorId);
  const [doctor, setDoctor] = useState([]);
  const [appointmentDetails, setAppointmentDetails] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentDetails({
      ...appointmentDetails,
      [name]: value,
    });
  };

  const handleAppointmentBooking = async (event) => {
    event.preventDefault();
    const updatedApptDetails = {
      ...appointmentDetails,
      patientId: localStorage.getItem("userId"), // Replace with the actual patientId
      doctorId: doctorId, // You can use the doctorId from useParams
    };
    // Here, you can use the appointmentDetails object to send data to your API or perform any other actions.
    console.log("Appointment Details:", updatedApptDetails);
    const resp = await fetch("http://localhost:8800/api/appointments/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedApptDetails),
    });
    const data = await resp.json();
    console.log(data);
  };

  useEffect(() => {
    async function getDoctor() {
      const resp = await fetch(`http://localhost:8800/api/doctors/${doctorId}`);
      const data = await resp.json();
      const dataArray = [
        {
          data,
        },
      ];

      setDoctor(dataArray);
      console.log(doctor);
    }
    getDoctor();
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="DoctorListContainer">
          <div style={{ marginTop: "2em" }}>
            <section className="light">
              <div className="container py-2">
                {doctor.map((doct, index) => (
                  <article className="postcard light blue postcardMain">
                    <a className="postcard__img_link" href="#">
                      <img
                        className="postcard__img"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                        alt="Image Title"
                      />
                    </a>
                    <div className="postcard__text t-dark">
                      <span className="typeDoct">{doct.data.speciality}</span>
                      <h1 className="postcard__title blue">
                        <a href="#">{doct.data.name}</a>
                      </h1>
                      <div className="postcard__subtitle small">
                        <time datetime="2020-05-25 12:00:00">
                          <i className="fas fa-calendar-alt mr-2"></i>
                          {doct.education}
                          <br />
                          {doct.data.hospital} | {doct.data.location}
                        </time>
                      </div>
                      {/* <div className="postcard__bar"></div> */}
                      <div className="doctorStudy">
                        <i>
                          <FaLocationArrow />
                        </i>
                        <span>{doct.data.email}</span>
                      </div>
                      <div className="doctorfees doctorfees1">
                        <span>Consultation fees</span>
                        <h2>
                          <strong>{doct.data.totalExpense}</strong>
                        </h2>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="hi">
          <div>
            <div className="formbold-main-wrapper">
              <div className="formbold-form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                  <div className="formbold-mb-5">
                    <label for="phone" className="formbold-form-label">
                      {" "}
                      Phone Number{" "}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="formbold-form-input"
                      value={appointmentDetails.patientNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="formbold-mb-5">
                    <label for="description" className="formbold-form-label">
                      {" "}
                      Description{" "}
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Enter the appointment description"
                      className="formbold-form-input"
                      value={appointmentDetails.description}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-wrap formbold--mx-3">
                    <div className="w-full sm:w-half formbold-px-3">
                      <div className="formbold-mb-5 w-full">
                        <label for="date" className="formbold-form-label">
                          {" "}
                          Timings{" "}
                        </label>
                        <div className="TimeSlotsCont">
                          <span>9.00 AM - 12.00 PM </span>
                          <span>9.00 AM - 12.00 PM </span>
                          <span>9.00 AM - 12.00 PM </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap formbold--mx-3">
                    <div className="w-full sm:w-half formbold-px-3">
                      <div className="formbold-mb-5 w-full">
                        <label for="date" className="formbold-form-label">
                          {" "}
                          Date{" "}
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          value={appointmentDetails.date}
                          onChange={handleInputChange}
                          className="formbold-form-input"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-half formbold-px-3">
                      <div className="formbold-mb-5">
                        <label for="time" className="formbold-form-label">
                          {" "}
                          Time{" "}
                        </label>
                        <input
                          type="time"
                          name="time"
                          id="time"
                          className="formbold-form-input"
                          value={appointmentDetails.time}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      className="formbold-btn"
                      onClick={handleAppointmentBooking}
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewDoc">
        <Review />
      </div>
    </>
  );
};

export default BookAppt;
