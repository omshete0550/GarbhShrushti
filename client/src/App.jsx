import PatientHome from "./pages/PatientHome";
import Chat from "./pages/ChatInterface/chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Speciality from "./pages/Speciality/Speciality";
import DoctorList from "./pages/DoctorList/DoctorList";
import BookAppt from "./pages/bookAppt/bookAppt";
import Labs from "./pages/Labs/LAbs";
import LabTests from "./pages/LabTests/LabTests";
import Nutrient from "./pages/Nutrient/Nutrient";
import Landing from "./pages/Landing/Landing";
import Chatbot from "./pages/Chatbot/Chatbot";
import { useState } from "react";
import './App.css'
import Vaccine from "./pages/Vaccine/Vaccine";

function App() {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/appointments" element={<BookAppt />} />
          <Route path="/medicine" element={<Labs />} />
          <Route path="/lab-tests" element={<LabTests />} />
          <Route path="/home" element={<PatientHome />} />
          <Route path="/doctor-list/:variableName" element={<DoctorList />} />
          <Route path="/book-appointment/:doctorId" element={<BookAppt />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/nutrient" element={<Nutrient />} />
          <Route path="/vaccine" element={<Vaccine />} />
        </Routes>
        {isActive && <Chatbot />}
        <div className="chatbot" onClick={() => setActive(true)}>
          <img
            src="https://png.pngtree.com/png-vector/20220802/ourmid/pngtree-3d-rpa-cute-robot-cartoon-sky-blue-gradients-color-chatbot-png-image_6093532.png"
            alt=""
          />
        </div>
        {isActive && (
          <div className="chatbotcross" onClick={() => setActive(false)}>
            <img src="https://cdn.icon-icons.com/icons2/1673/PNG/512/closeoutline_110831.png" alt="" />
          </div>
        )}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
