import React, { useState } from 'react'

const Login = ({handleLogin}) => {

     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")

    const SubmitHeader = (e) => {
        e.preventDefault()
        handleLogin(email, password)
      setEmail("")
      setPassword("")
    }

  return (
    <div className='flex h-screen w-screen justify-center items-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>SubmitHeader(e)} className='flex flex-col items-center justify-center'>
               <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-500' type="email" placeholder='Enter your Email' />
               <input value={password} onChange={(e)=>setPassword(e.target.value)} required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-3 placeholder:text-gray-500' type="Password" placeholder='Enter Password' />
               <button className=' outline-none  bg-emerald-600 rounded-full text-xl py-3 px-5 mt-5 placeholder:text-white' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login