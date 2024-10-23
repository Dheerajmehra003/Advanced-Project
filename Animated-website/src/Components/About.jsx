import React from "react";

const About = () => {
  return (
    <div className="w-full px-20 py-20 bg-[#CDEA68] rounded-t-3xl text-black ">
      <h1 className="font-['Neue Montreal'] text-[4vw] tracking-tight leading-[4.5vw] font-normal ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="w-full border-t-[1px] pt-5 mt-20 border-[#a1b562] flex gap-5  ">
       <div className="w-1/2  ">
         <h1 className="text-6xl">Our approach:</h1>
         <button className="px-10 py-6 bg-zinc-900 mt-5 rounded-full uppercase text-white flex gap-10 items-center ">Read More
          <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
         </button>
       </div>
       <div className="w-1/2 h-[70vh] bg-red-700 rounded-3xl">

       </div>
      </div>
    </div>
  );
};

export default About;
