import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStroage, setLocalStroage } from './Utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
   if(email==='admin@me.com' && password==='123') {
    setUser('admin')
   }
   else{
    console.log('Invalid credentials')
   }
  }
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : " "}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App