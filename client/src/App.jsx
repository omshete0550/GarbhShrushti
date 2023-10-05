import { useState } from "react";
import PatientHome from "./pages/PatientHome";
import Navbar from "../src/components/Navbar/Navbar";
import Chat from "./pages/ChatInterface/chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Speciality from "./pages/Speciality/Speciality";
import DoctorList from "./pages/DoctorList/DoctorList";
import BookAppt from "./pages/bookAppt/bookAppt";
import Labs from "./pages/Labs/LAbs";
import LabTests from "./pages/LabTests/LabTests";
import Nutrient from "./pages/Nutrient/nutrient";
import Vaccine from "./pages/Vaccine/Vaccine";
import Landing from "./pages/Landing/Landing";
import Footer from "../src/components/Footer/Footer"
import EmergencyOption from "./pages/Speciality/EmergencyOption";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
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
          <Route path="/nutrient" element={<Nutrient/>} />
          <Route path="/emergencychoose" element={<EmergencyOption/>}/>
          <Route path="/vaccine" element={<Vaccine/>} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;