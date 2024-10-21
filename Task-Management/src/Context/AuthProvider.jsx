import React, { Children, createContext, useEffect, useState } from 'react'
import { getLocalStroage, setLocalStroage } from '../Utils/localStorage'

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
  // localStorage.clear()

    const [userData, setUserData] = useState('')

   useEffect(()=>{
    setLocalStroage()
    const {employees, admin} = getLocalStroage()
    setUserData({employees, admin})
   }, [])
  return (
    <div>
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider