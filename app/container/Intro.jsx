import React from 'react'
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-20 p-10 relative w-full h-full overflow-hidden'>
       <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="col-span-1 flex flex-col justify-center"
      ></motion.div>
    </div>
  )
}

export default Intro
