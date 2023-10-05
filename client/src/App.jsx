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
import Labs from "./pages/Labs/LAbs";
import LabTests from "./pages/LabTests/LabTests";
const router = createBrowserRouter([
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
    path: "/medicine",
    element: <Labs />,
  },
  {
    path: "/lab-tests",
    element: <LabTests />,
  },
  {
    path: "/homepage",
    element: <PatientHome />,
  },
  {
    path: "/doctor-list/:variableName",
    element: <DoctorList />,
  },
  {
    path: "/book-appointment/:doctorId",
    element: <BookAppt />,
  },
]);

function App() {
  return (
    <>
    <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
