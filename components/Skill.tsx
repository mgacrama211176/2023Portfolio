import React from 'react';
import { motion } from "framer-motion";



type Props = {directionLeft?:boolean;}

const Skill = ({directionLeft}: Props) => {

  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img initial={{x: directionLeft ? -100 : 100, opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRk3g9oapUnqAvZHc_zbRyHirzDKkBX-G3_nVEcPOE46ZBtrSvVL9eu8kC8EgFRMjgIE&usqp=CAU"
        className='rounded-full border border-[#00255E] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'/>

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'><p className='text-3xl font-bold text-black opacity-100'>100%</p></div>
        </div>
      </div>
  )
}

export default Skill