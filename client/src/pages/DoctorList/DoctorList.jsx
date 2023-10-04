import React, { useEffect, useState } from 'react'
import './DoctorList.css'
import CustomTabPanel from '../../components/CustomTabPanel/CustomTabPanel'
import { useParams } from 'react-router-dom';

const DoctorList = () => {
  const [doctorsData,setDoctorData] = useState([]);
  // const [filteredDoctors,setFilterDoctors] = useState({});

  // const { children, value, index, ...other } = props;
  const { variableName } = useParams();
  async function getDoctors(){
    const resp = await fetch("http://localhost:8800/api/doctors/");
    const data = await resp.json()
    setDoctorData(data)
    if(variableName == 0){
      // setFilterDoctors(()=>{
      //   doctorData.filter((doctor) => {
      //     // Check if the doctor's specialty is either 'General' or 'OBGY'
      //     return doctor.speciality === 'General' || doctor.speciality === 'OBGY';
      //   });
      // })
      // console.log(filteredDoctors)
    }
  }
  
  useEffect(()=>{
    getDoctors();
  },[])
  const filteredDoctors = doctorsData.filter((doctor) => {
    return doctor.speciality === 'General' || doctor.speciality === 'OBGY';
  });
  console.log(filteredDoctors)

  console.log(variableName)
  return (
    <>
      <div className="DoctorListContainer">

        <div className="DoctorListSearch">
          <input type="search" name="" id="" placeholder='Search Doctors...' />
        </div>
        <div>
          <CustomTabPanel doctorData={filteredDoctors}/>
        </div>

      </div>
    </>
  )
}

export default DoctorList