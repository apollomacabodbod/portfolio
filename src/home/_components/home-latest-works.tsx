

import { motion } from "framer-motion"

export default function HomeLatestWorks(){


  return (<>


    <div className="flex flex-col mt-[4.5em]">

      <motion.p className="text-[#030712] font-inter-tight text-[3rem] not-italic font-semibold leading-[1em] transition-all duration-1000 ease-in-out"
      
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
          },
        }}
      
      
      >Discover my latest works</motion.p>
    </div>
    
  </>)
}