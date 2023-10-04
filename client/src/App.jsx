import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Speciality from './pages/Speciality/Speciality';
import DoctorList from './pages/DoctorList/DoctorList';
import Navbar from './components/Navbar/Navbar';
import BookAppt from './pages/bookAppt/bookAppt';
import Trimester from './pages/Trimester/Trimester';
import Vaccine from './pages/Vaccine/Vaccine';
import Nutrient from './pages/Nutrient/Nutrient';
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
    path:"/doctor-list",
    element: <DoctorList />
  },
  {
    path:"/book-appointment",
    element: <BookAppt />
  },
  {
    path:"/trimester",
    element: <Trimester />
  },
  {
    path:"/vaccine",
    element: <Vaccine />
  },
  {
    path:"/nutrient",
    element: <Nutrient />
  }
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
