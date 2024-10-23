import React from 'react'

const Eyes = () => {
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div  className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
          <div className='absolute  top-1/2 left-1/2   -translate-x-[50%] -translate-y-[50%] flex gap-10 '>
            <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center'>
                <div className='w-1/4 h-1/4 rounded-full bg-zinc-100'></div>
                </div>
            </div>
            <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center'>
                <div className='w-1/4 h-1/4 rounded-full bg-zinc-100'></div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Eyes