import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStroage, setLocalStroage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)

  const authData = useContext(AuthContext)

  // useEffect(()=>{
  //   if(authData){
  //    const loggedInUser = localStorage.getItem('loggedInUser')
  //    if(loggedInUser){
  //     setUser(loggedInUser.role)
  //    }
  //   }
  // }, [authData])

  const handleLogin = (email, password) => {
   if(email==='admin@me.com' && password==='123') {
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
   }
   else if(authData) {
    const employee = authData.employees.find((e)=>e.email == email && e.password == password)
    if(employee){
      setUser('employee')
      setLoggedInUser(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }

   }
   else{
    console.log('Invalid credentials')
   }
  }

 
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : " "}
    { user == 'admin' ? <AdminDashboard /> : " " }
    {user == 'employee' ? <EmployeeDashboard data={loggedInUser} /> : ' '}
    </>
  )
}

export default App