import React from "react";
import "../DoctorList/DoctorList.css";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
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
  return (
    <div style={{ display: "flex" }}>
      <div className="DoctorListContainer">
        <div style={{ marginTop: "2em" }}>
          <section className="light">
            <div className="container py-2">
              {doctData1.map((doctor, index) => (
                <article className="postcard light blue postcardMain">
                  <a className="postcard__img_link" href="#">
                    <img
                      className="postcard__img"
                      src={doctor.image}
                      alt="Image Title"
                    />
                  </a>
                  <div className="postcard__text t-dark">
                    <span className="typeDoct">{doctor.specialty}</span>
                    <h1 className="postcard__title blue">
                      <a href="#">{doctor.name}</a>
                    </h1>
                    <div className="postcard__subtitle small">
                      <time datetime="2020-05-25 12:00:00">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        {doctor.education}
                        <br />
                        {doctor.experience} | {doctor.language}
                      </time>
                    </div>
                    {/* <div className="postcard__bar"></div> */}
                    <div className="doctorStudy">
                      <i>
                        <FaLocationArrow />
                      </i>
                      <span>{doctor.hospital}</span>
                    </div>
                    <div className="doctorfees doctorfees1">
                      <span>Consultation fees</span>
                      <h2>
                        <strong>{doctor.consultationFees}</strong>
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
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button className="formbold-btn">Book Appointment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppt;
