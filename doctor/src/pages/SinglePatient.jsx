
import React from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react'


const SinglePatient = () => {
  const { patientId } = useParams();
  const [patientData,setPatientData] = useState({})

  useEffect(()=>{
    async function getPatient(){
      // const headers = new Headers({
      //   'Content-Type': 'application/json',
      //   'id': `${patientId}`, // Add the patientId to the Authorization header
      // });
      console.log(patientId)
      const resp = await fetch(`http://localhost:8800/api/patients/${patientId}`).then((res)=>res.json()).then((data)=>{
        console.log(data);
        setPatientData(data);
    });
    }
    getPatient();
  },[])
  
  return (
    <>
      <div className="SinglePatientCont">
       <div className="SinglePatientImg">
        <img src="https://media.istockphoto.com/id/1311858467/photo/head-shot-portrait-attractive-young-indian-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=0QWC0t9uc6tptvQkWZxlFKK6hsnOxQBCobTfgkuNbLA=" alt="" />
       </div>
       <div className='SinglePatientContInner'>
          <h2>Patient Name:{patientData.name}</h2>
          <span> <strong>Age:</strong> {patientData.age} Years</span>
          <span> <strong>Blood Group:</strong> O+</span>
          <span> <strong>Months of Pregnancy:</strong> {patientData.monthOfPregnancy}</span>
          <button>Contact</button>

        </div>
      </div>
    </>
  )
  };

export default SinglePatient;