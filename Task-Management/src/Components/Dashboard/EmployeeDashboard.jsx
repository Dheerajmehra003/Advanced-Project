import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
     <Header data={data} />
     <TaskListNumber data={data} />
     <Tasklist data={data} />
    </div>
  )
}

export default EmployeeDashboard