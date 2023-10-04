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
