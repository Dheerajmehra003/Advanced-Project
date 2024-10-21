import React from 'react'

const FailedTask = () => {
  return (
    <div className='w-[300px] flex-shrink-0 h-full p-5 rounded-xl bg-yellow-400'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>18 october 2024</h4>
    </div>
       <h2 className='mt-5 font-semibold text-2xl'>Task Four</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni expedita quas ipsa illo ipsam.</p>
        <div className='flex justify-between mt-4'>
          <button className='bg-red-500  py-1 px-2 text-sm'>Failed</button>
       </div>
  </div>  
  )
}

export default FailedTask