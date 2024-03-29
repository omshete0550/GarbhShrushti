import React, {useState} from 'react'
import {LuSyringe} from "react-icons/lu"
import {FaUserDoctor} from "react-icons/fa6"
import {AiFillMedicineBox} from "react-icons/ai"
import {MdVaccines} from "react-icons/md"
import {GiTalk} from "react-icons/gi"
import {BsBookmarkCheckFill} from "react-icons/bs"
import {IoFastFoodSharp} from "react-icons/io5"
import { useEffect } from 'react'
// import {LuSyringe} from "react-icons/lu"
// import {FaUserDoctor} from "react-icons/fa6"
// import {AiFillMedicineBox} from "react-icons/ai"
// import {MdVaccines} from "react-icons/md"
// import {GiTalk} from "react-icons/gi"
// import {BsBookmarkCheckFill} from "react-icons/bs"
import "./PatientHome.css";
import ApptTable from "../components/Navbar/PatientHome/ApptTable";
import Chatbot from "../pages/Chatbot/Chatbot";
import { AiFillRobot } from "react-icons/ai";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const PatientHome = () => {
  const [appointments, setAppointments] = useState([]);
  const [isActive, setActive] = React.useState(false);

    useEffect(()=>{
        function getAppointments(){
            const patientName = localStorage.getItem("userName");   
        const resp = fetch("http://localhost:8800/api/patients/applied",{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                username:patientName
              })
        }).then((res)=>res.json()).then((data)=>{
            console.log(data.appointments[0].doctorId);
            setAppointments(data)
        })
        };
        getAppointments();
    },[]);

    // Function to handle the removal of a task
  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasksData.filter((task) => task.id !== taskId);
    setTasksData(updatedTasks);
  };
  const [tasksData, setTasksData] = useState([
    {
      id: 1,
      title: 'Almonds Intake',
      description: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet. .....',
    },
    {
      id: 2,
      title: 'Exercise Intake',
      description: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet. .....',
    },
    {
      id: 3,
      title: 'Sugar Intake',
      description: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet. .....',
    },
    {
      id: 4,
      title: 'Protein Intake',
      description: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet. .....',
    },
  ]);
  const userEmail = localStorage.getItem("email");
  function handleAppointment() {
    navigate("/speciality");
  }
  return (
    <div>
      <Navbar />
      {/* {isActive && <Chatbot />}
      <div className="chatbot" onClick={() => setActive(true)}>
        <img src="https://png.pngtree.com/png-vector/20220802/ourmid/pngtree-3d-rpa-cute-robot-cartoon-sky-blue-gradients-color-chatbot-png-image_6093532.png" alt="" />
      </div>
      {isActive && (
        <div className="chatbotcross" onClick={() => setActive(false)}>
          X
        </div>
      )} */}
      <div className="PatientPane">
        <div className="ag-format-container">
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  <LuSyringe size={60} />
                  <br />
                  <br />
                  Labs / Tests
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="http://localhost:5173/nutrient" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  <IoFastFoodSharp size={60} />
                  <br />
                  <br />
                  Nutrient Tracker
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a
                href="http://localhost:3001/"
                target="blank"
                className="ag-courses-item_link"
              >
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  <AiFillMedicineBox size={60} />
                  <br />
                  <br />
                  Community
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="http://localhost:5173/vaccine" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  <MdVaccines size={60} />
                  <br />
                  <br />
                  Vaccinations
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="http://localhost:5173/emergencychoose" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  <GiTalk size={60} />
                  <br />
                  <br />
                  Emergency Consult
                </div>
              </a>
            </div>

            {/* <div onClick={handleAppointment} className="ag-courses_item"> */}
            <div className="ag-courses_item">
              <a
                href="http://localhost:5173/speciality"
                className="ag-courses-item_link"
              >
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  <BsBookmarkCheckFill size={60} />
                  <br />
                  <br />
                  Book Appointment
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
                      <button className="correct" onClick={() => handleRemoveTask(task.id)}> ✓ </button>
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
        <ApptTable data={appointments} />
      </div>

      <Footer />
    </div>
  );
};

export default PatientHome;
