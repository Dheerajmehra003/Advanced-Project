import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <>
       <div className='w-[300px] flex-shrink-0 h-full p-5 rounded-xl bg-blue-400'>
          <div className='flex justify-between items-center'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.tasks[1].category}</h3>
              <h4 className='text-sm'>{data.tasks[1].date}</h4>
          </div>
             <h2 className='mt-5 font-semibold text-2xl'>{data.tasks[1].title}</h2>
              <p className='text-sm'>{data.tasks[1].description}</p>
              <div className='flex justify-between mt-6'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
             </div>
         </div>
    </>
  )
}

export default AcceptTask