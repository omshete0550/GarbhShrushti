import React from 'react'
import './DoctorList.css'
import CustomTabPanel from '../../components/CustomTabPanel/CustomTabPanel'

const DoctorList = () => {
  // const { children, value, index, ...other } = props;
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