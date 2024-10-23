import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-t-3xl'>
     <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[20vw] leading-none font-[Founders tesk] font-semibold uppercase '>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[20vw] leading-none font-[Founders tesk] font-semibold uppercase '>we are ochi</motion.h1>
     </div>
    </div>
  )
}

export default Marquee