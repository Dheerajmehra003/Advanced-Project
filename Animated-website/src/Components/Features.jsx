import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Features = () => {
   const [hovering, setHovering] = useState('')
   const [secondCard, setSecondCard] = useState(" ")
  return (
    <div className='w-full py-10 '>
        <div className='w-full px-10 border-b-[1px] pb-10 '>
           <h1 className='text-7xl font-["Neue Montreal tracking-tight"] '>Featured projects</h1>
        </div>
           <div className='px-5 mt-10'>
           <div className="cards w-full flex gap-5 mt-10">
            <div 
             onMouseEnter={()=>setHovering(true)}
             onMouseLeave={()=>setHovering(false)}
            className="cardContainer relative w-1/2 h-[75vh] ">
             <h1 className='absolute  overflow-hidden left-[100vh] top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase z-[9] text-8xl font-["Foounders GroTesk"] tracking-tighter  whitespace-nowrap font-bold  leading-none text-[#CDEA68] '>
             {'CARDBOARD'.split('').map((item, index)=>{
                return(
                    <motion.span key={index} initial={{y: "100%"}}
                    animate={hovering ? {y:'0'} : {y:'100%'}}
                    transition={{ease:[0.22, 1, 0.36, 1], delay: index*.06}}
                    className='inline-block'>{item}</motion.span>
                )
            })}
            </h1> 
             <div className=' w-full h-full rounded-xl overflow-hidden '>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
             </div>
            </div>
            <div
             onMouseEnter={()=>setSecondCard(true)}
             onMouseLeave={()=>setSecondCard(false)}
            className="cardContainer relative w-1/2 h-[75vh] ">
            <h1 className='absolute overflow-hidden right-2/3 top-1/2 translate-x-1/2 -translate-y-1/2 uppercase z-[9] text-8xl font-["Foounders GroTesk"] tracking-tighter w-full whitespace-nowrap font-bold  leading-none text-[#CDEA68] '>
            {'FYDE'.split('').map((item, index)=>{
                return(
                  <motion.span key={index} initial={{y: "100%"}}
                  animate={secondCard ? {y:'0'} : {y:'100%'}}
                  transition={{ease:[0.22, 1, 0.36, 1], delay: index*.06}}
                  className='inline-block'>{item}</motion.span>
                )
            })}
            </h1>
             <div className=' w-full h-full rounded-xl overflow-hidden '>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
             </div>
            </div>
           
           </div>
           </div>
           <div className='start flex items-center gap-1 mt-10 justify-center'>
         <div className='py-2 px-5 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full '>View all project</div>
      <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-500 '>
        <span className='rotate-[45deg]'>
        <FaArrowUpLong />
        </span>
        </div>
      </div>
    </div>
  )
}

export default Features