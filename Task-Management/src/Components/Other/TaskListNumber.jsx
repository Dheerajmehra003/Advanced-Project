import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between mt-10 gap-5 screen'>
        <div className='rounded-xl py-5 px-10 w-[45%] bg-red-400'>
           <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
           <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl py-5 px-10 w-[45%] bg-blue-400'>
           <h2 className='text-3xl font-semibold'>{data.taskCounts.acceptedTask}</h2>
           <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl py-5 px-10 w-[45%] bg-green-400'>
           <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
           <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl py-5 px-10 w-[45%] bg-yellow-400'>
           <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
           <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber