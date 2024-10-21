import React from 'react'

const NewTask = ({data}) => {
  return (
     <div className='w-[300px] flex-shrink-0 h-full p-5 rounded-xl bg-red-400'>
     <div className='flex justify-between items-center'>
         <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.tasks[0].category}</h3>
         <h4 className='text-sm'>{data.tasks[0].date}</h4>
     </div>
        <h2 className='mt-5 font-semibold text-2xl'>{data.tasks[0].title}</h2>
         <p className='text-sm'>{data.tasks[0].description}</p>
         <div className='flex justify-between mt-4'>
             <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Accepted</button>
             <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Declined</button>
         </div>
     </div>
  )
}

export default NewTask