
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function ContactSubmit(){



  return(<>


    <motion.div className="flex flex-col transition-all duration-1000 ease-in-out items-center justify-center flex-grow"


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



    >


      <div className="flex items-center justify-center mb-[3em] transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">


        <Link to={""} className="flex items-center gap-[0.75em] bg-[#030712] py-[0.75em] px-[1.25em] rounded-[6.25em] cursor-pointer">
              
              
  
          <p className="text-white font-inter-tight  not-italic font-semibold text-[1rem] ">Message</p>
  
          <img src="/home-header-arrow.svg" alt="" />
  
  
  
        </Link>



      </div>


    </motion.div>


  
    
    
  </>)
}