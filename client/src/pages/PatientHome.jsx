import React from 'react'
import {LuSyringe} from "react-icons/lu"
import {FaUserDoctor} from "react-icons/fa6"
import {AiFillMedicineBox} from "react-icons/ai"
import {MdVaccines} from "react-icons/md"
import {GiTalk} from "react-icons/gi"
import {BsBookmarkCheckFill} from "react-icons/bs"
import "./PatientHome.css";
import ApptTable from '../components/Navbar/PatientHome/ApptTable'
const PatientHome = () => {
    const tasksData = [
  {
    id: 1,
    title: 'Almonds Intake',
    description: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet. .....',
  },
  {
    id: 2,
    title: 'Almonds Intake',
    description: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet. .....',
  },
];
  return (
    <div>
        <div className="PatientPane">
            <div className="ag-format-container">
                <div className="ag-courses_box">
                    <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                        <LuSyringe size={60}/><br/><br/>
                        Labs / Tests
                        </div>

                        
                    </a>
                    </div>

                    <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                        <FaUserDoctor size={60}/><br/><br/>
                        Surgery
                        </div>

                        
                    </a>
                    </div>

                    <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                        <AiFillMedicineBox size={60}/><br/><br/>
                        Medicine
                        </div>

                        
                    </a>
                    </div>

                    <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                        <MdVaccines size={60}/><br/><br/>
                        Vaccinations
                        </div>

                       
                    </a>
                    </div>

                    <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                        <GiTalk size={60}/><br/><br/>
                        Emergency Consult
                        </div>

                
                    </a>
                    </div>

                    <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                        <BsBookmarkCheckFill size={60}/><br/><br/>
                        Book Appt
                        </div>
                    </a>
                    </div>
                </div>
            </div> 
            <div className="tasksPane">
               
                <div className="listTasks">
                    <div className="headingList">
                        <div className="dateList">
                            <h2> TASKS</h2>
                        </div>
                        <div className="timeList">
                            <h2>14:50</h2>
                        </div>
                    </div>
                    <div className="tasks">
                        <ul>
                        {tasksData.map((task) => (
          <li key={task.id}>
            <div className="content">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <div className="accessbtns">
              {/* <button className='cross'> X </button> */}
              <button className='correct'> ✓ </button>
            </div>
          </li>
        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div> 

        <div className="UpcomingTable">
        <h2>Upcoming Appointments</h2>
            <ApptTable/>
        </div>
        
        
    </div>
  )
}

export default PatientHome
