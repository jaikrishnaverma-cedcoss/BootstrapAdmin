import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SideBar } from '../Sidebar/SideBar'
import Dashboard from './Pages/Dashboard'

const Body = () => {
  const location = useLocation();
  return (
    <>
    <div className='d-flex vw-100'>
       <SideBar />
       <div className="mainBody py-3 px-4" style={{backgroundColor:'aliceblue'}}>
        <p className="fs-2 m-0 n-blue">{(location.pathname=='/')?'Dashboard':location.pathname}</p>
        <p className="fs-6" style={{color: '#51678f'}}>Home {location.pathname.replace("/", " / ")}</p>
       <Routes>
       <Route path='/' element={<Dashboard />} />
       </Routes>
       </div>
       </div>
    </>

  )
}

export default Body