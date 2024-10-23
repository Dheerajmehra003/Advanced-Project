import React from 'react'

const Cards = () => {
  return (
    <div className=' flex gap-5 items-center w-full h-screen px-20 bg-zinc-900'>
        <div className='cardContainer h-[60vh] w-1/2'>
           <div className="card relative w-full h-full bg-[#004D43] rounded-lg flex items-center justify-center">
            <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2022-2024</button>
           </div>
        </div>
        <div className='cardContainer h-[60vh] w-1/2 flex gap-5 '>
           <div className="card relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center ">
              <img className='w-32'  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='absolute text-sm px-5 py-1 rounded-full border-2 left-5 bottom-10 uppercase'>Rating 5.0 on clutch</button>
            </div>
           <div className="card relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center ">
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='absolute px-3 text-sm py-1 rounded-full border-2 left-5 bottom-10 uppercase'>Bussiness Bootcamp alumini</button>
           </div>
        </div> 
    </div>
  )
}

export default Cards