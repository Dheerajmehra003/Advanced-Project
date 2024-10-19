import React from 'react'
import AcceptTask from './AcceptTask'

const Tasklist = ({data}) => {
  return (
    <div id='taskList' className='h-[55%]  overflow-x-auto  py-5 w-full mt-10  flex items-center rounded-md justify-start gap-5 flex-nowrap '>
       <AcceptTask data={data} />
        <div className='w-[300px] flex-shrink-0 h-full p-5 rounded-xl bg-blue-400'>
          <div className='flex justify-between items-center'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>18 october 2024</h4>
          </div>
             <h2 className='mt-5 font-semibold text-2xl'>Task Two</h2>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni expedita quas ipsa illo ipsam.</p>
        </div>
        <div className='w-[300px] flex-shrink-0 h-full p-5 rounded-xl bg-green-400'>
          <div className='flex justify-between items-center'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>18 october 2024</h4>
          </div>
             <h2 className='mt-5 font-semibold text-2xl'>Task Three</h2>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni expedita quas ipsa illo ipsam.</p>
        </div>
        <div className='w-[300px] flex-shrink-0 h-full p-5 rounded-xl bg-yellow-400'>
          <div className='flex justify-between items-center'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>18 october 2024</h4>
          </div>
             <h2 className='mt-5 font-semibold text-2xl'>Task Four</h2>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni expedita quas ipsa illo ipsam.</p>
        </div>
        <div className='w-[300px] flex-shrink-0 h-full p-5 rounded-xl bg-red-400'>
          <div className='flex justify-between items-center'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>18 october 2024</h4>
          </div>
             <h2 className='mt-5 font-semibold text-2xl'>Task Five</h2>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni expedita quas ipsa illo ipsam.</p>
        </div>
       
    </div>
  )
}

export default Tasklist