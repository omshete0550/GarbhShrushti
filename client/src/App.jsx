import { useState } from 'react'
import PatientHome from './pages/PatientHome'
import Navbar from '../src/components/Navbar/Navbar'
import Chat from './pages/ChatInterface/chat'
function App() {

  return (
    <>
    <Navbar/>
     <PatientHome />
     {/* <Chat /> */}
    </>
  )
}

export default App
