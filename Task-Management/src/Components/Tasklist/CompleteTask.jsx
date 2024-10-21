import React from 'react'

const CompleteTask = ({data}) => {
  return (
  
                  <div className='w-[300px] flex-shrink-0 h-full p-5 rounded-xl bg-green-400'>
                  <div className='flex justify-between items-center'>
                      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.tasks[2].category}</h3>
                      <h4 className='text-sm'>18 october 2024</h4>
                  </div>
                     <h2 className='mt-5 font-semibold text-2xl'>{data.tasks[2].title}</h2>
                      <p className='text-sm'>{data.tasks[2].description}</p>
                      <div className='flex justify-between mt-6'>
                        <button className='bg-green-500 w-full py-1 px-2 text-sm'>Completed</button>
                     </div>
                </div>
  )
}

export default CompleteTask