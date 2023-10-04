import { useState } from 'react'
import PatientHome from './pages/PatientHome'
import Navbar from '../src/components/Navbar/Navbar'
import ChooseAppCategory from './pages/ChooseAppCategory'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
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
    path: "/category",
    element: <ChooseAppCategory />,
  },
  {
    path:"/appointments",
    element: <Appointments />
  }
]);
import Appointments from './pages/Appointments'

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
