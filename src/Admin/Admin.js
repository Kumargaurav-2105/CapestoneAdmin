import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddJobs from './Navbar/AddJobs'
import Employees from './Navbar/Employees'
import Home from './Navbar/Home'
import MyJobs from './Navbar/MyJobs'
import Profile from './Navbar/Profile'
const Admin = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addjobs' element={<AddJobs />} />
                    <Route path='/employees' element={<Employees />} />
                    <Route path='/myjobs' element={<MyJobs />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Admin