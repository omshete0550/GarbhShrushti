import React from 'react';

const SinglePatient = () => {
  return (
    <>
      <div className="SinglePatientCont">
       <div className="SinglePatientImg">
        <img src="https://media.istockphoto.com/id/1311858467/photo/head-shot-portrait-attractive-young-indian-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=0QWC0t9uc6tptvQkWZxlFKK6hsnOxQBCobTfgkuNbLA=" alt="" />
       </div>
       <div className="SinglePatientContInner">
          <h2>Patient Name: Vinit</h2>
          <span> <strong>Age:</strong> 32 Years</span>
          <span> <strong>Blood Group:</strong> O+</span>
          <span> <strong>Last Visited:</strong> 19/09/23 | 12.00 PM</span>
          <button type="button">Chat with me</button>
        </div>
      </div>
    </>
  )
  };

export default SinglePatient;