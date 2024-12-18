import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20'>
        {['we Create', 'Eye-opening', 'presentations'].map((item, index)=>{
            return (
                <div key={index} className='masker flex'>
                    {index === 1 && ( <motion.div initial={{width: 0}} animate={{width: '9vw'}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='w-[9vw] h-[5.3vw] bg-red-600 rounded-md relative top-[1vw]'/>)}
                <h1 className='uppercase text-[7.5vw] font-["Founders Grotesk"]  leading-[6.5vw] tracking-tighter font-medium'>{item}</h1>
               </div>
            )
        })}

      </div>
      <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
        {['For public and private companies', 'From the first pitch to IPO'].map((item, index)=>{
            return (
                <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
            )
        })}
      <div className='start flex items-center gap-1 '>
         <div className='py-2 px-5 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full '>Start the project</div>
      <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-500 '>
        <span className='rotate-[45deg]'>
        <FaArrowUpLong />
        </span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage