
import { motion } from "framer-motion"

export default function ContactMessage(){

  return (<>


    <div className="flex flex-col mt-[9em] items-center justify-center flex-grow">

      <motion.p className="text-center text-[#333] font-inter-tight text-[1rem]   font-semibold transition-all duration-1000 ease-in-out"
      
      
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
      
      
      >Send a Message</motion.p>
        
    </div>
    
    
  </>)
}