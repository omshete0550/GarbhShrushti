import React from 'react'
import './DoctorList.css'
import CustomTabPanel from '../../components/CustomTabPanel/CustomTabPanel'
import { useParams } from 'react-router-dom';


const DoctorList = () => {
  // const { children, value, index, ...other } = props;
  const { variableName } = useParams();
  console.log(variableName)
  return (
    <>
      <div className="DoctorListContainer">

        <div className="DoctorListSearch">
          <input type="search" name="" id="" placeholder='Search Doctors...' />
        </div>
        <div>
          <CustomTabPanel />
        </div>

      </div>
    </>
  )
}

export default DoctorList