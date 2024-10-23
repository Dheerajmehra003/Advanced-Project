import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=" .1" className='w-full py-20 bg-[#004D43] rounded-t-3xl mt-32'>
     <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[20vw] leading-none font-[Founders tesk] font-bold uppercase tracking-tighter pr-10 '>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[20vw] leading-none font-[Founders tesk] font-bold uppercase tracking-tighter pr-10 '>we are ochi</motion.h1>
     </div>
    </div>
  )
}

export default Marquee