import { useState } from "react";
import PatientHome from "./pages/PatientHome";
import Navbar from "../src/components/Navbar/Navbar";
// import ChooseAppCategory from './pages/ChooseAppCategory'
import Chat from "./pages/ChatInterface/chat";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Speciality from "./pages/Speciality/Speciality";
import DoctorList from "./pages/DoctorList/DoctorList";
import BookAppt from "./pages/bookAppt/bookAppt";
import Trimester from "./pages/Trimester/Trimester";
import Vaccine from "./pages/Vaccine/Vaccine";
import Nutrient from "./pages/Nutrient/Nutrient";
import Footer from "./components/Footer/Footer";
import EmergencyOption from "./pages/Speciality/EmergencyOption";
const router = createBrowserRouter([
  {
    path: "/login",
    element:<>
      <Login />,
    </> 
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/speciality",
    element: <Speciality />,
  },
  {
    path: "/emergencyChoose",
    element: <EmergencyOption />,
  },
  {
    path:"/appointments",
    element: <BookAppt />
  },
  {
    path: "/home",
    element:<>
              <Navbar/>
              <PatientHome />
            </> 
  },
  {
    path: "/doctor-list/:variableName",
    element: <>
              <Navbar/>
              <DoctorList />
              </>
  },
  {
    path: "/book-appointment",
    element: <>
              <Navbar/>
              <BookAppt />
              </>
  },
  {
    path: "/trimester",
    element: <>
              <Navbar/>
              <Trimester />
              </>
  },
  {
    path: "/vaccine",
    element: <>
              <Navbar/>
              <Vaccine />
              </>
  },
  {
    path: "/nutrient",
    element: <Nutrient />,
  },
]);

function App() {
  return (
    <>
    {/* <Navbar /> */}
     <RouterProvider router={router} />
    </>
  );
}

export default App;
