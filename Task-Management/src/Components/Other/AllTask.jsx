import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)
  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded h-60'>
       <div className='bg-emerald-400 font-bold mb-2 py-2 px-4  flex justify-between rounded'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>Role</h3>
            <h5 className='w-1/5'>Accepted Task</h5>
            <h5 className='w-1/5'>Completed Task</h5>
            <h5 className='w-1/5'>Failed Task</h5>
         </div>
         <div id='verticalScrollBar' className='h-40 overflow-auto'>
         {
        authData.employees.map((item, index)=>{
            return (
                <div key={index} className='border-2 font-semibold border-emerald-500 mb-2 py-2 px-4  flex justify-between rounded '>
                <h2 className='w-1/5'>{item.firstName}</h2>
                <h3 className='w-1/5'>Employee</h3>
                <h5 className='w-1/5 text-blue-600 '>{item.taskCounts.acceptedTask}</h5>
                <h5 className='w-1/5 text-green-500'>{item.taskCounts.completed}</h5>
                <h5 className='w-1/5 text-red-600'>{item.taskCounts.failed}</h5>
            </div>
            )
        })
       }
         </div>
    
    </div>
  )
}

export default AllTask