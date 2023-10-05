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
import Landing from "./pages/Landing/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
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
    path: "/appointments",
    element: <BookAppt />,
  },
  {
    path: "/home",
    element: <PatientHome />,
  },
  {
    path: "/doctor-list/:variableName",
    element: <DoctorList />,
  },
  {
    path: "/book-appointment",
    element: <BookAppt />,
  },
  {
    path: "/trimester",
    element: <Trimester />,
  },
  {
    path: "/vaccine",
    element: <Vaccine />,
  },
  {
    path: "/nutrient",
    element: <Nutrient />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
