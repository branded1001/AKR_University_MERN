import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Colleges from './component/Colleges'
import School from './component/School'
import Coching from './component/Coching'
import Courses from './component/Courses'
import Admissions from './component/Admissions'
import AdminDashboard from './admin/AdminDashboard'

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/colleges' element={<Colleges />} />
        <Route path='/schools' element={<School />} />
        <Route path='/coaching' element={<Coching />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/admissions' element={<Admissions />} />
        <Route path="/Admin" element={<AdminDashboard/>}/>
      </Routes>

    </>
  )
}

export default MainRoute
