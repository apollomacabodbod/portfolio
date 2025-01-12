import { Link } from "react-router-dom";
import { motion } from "framer-motion";



export default function NotFound(){

  return(<>





    <div className="flex flex-col min-h-screen max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green ">



      {/* component */}
      <div className="flex flex-col items-center justify-center  border border-[#50B498] green flex-grow">



        <motion.p className="text-center text-[#030712] font-inter-tight text-[4.5rem] not-italic font-bold leading-[1em] transition-all duration-1000 ease-in-out"
        
        
        
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
        
        
        >404</motion.p>


        <motion.p className="text-[#030712] font-inter-tight text-[0.9375rem] not-italic font-normal text-center mt-[2em] transition-all duration-1000 ease-in-out"
        
        
        
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
        
        
        >Somethings gone missing. Sorry, we couldn’t find the page you are looking for.</motion.p>



            

        <motion.div className="flex items-center justify-center mt-[2em] transition-all duration-1000 ease-in-out"
        
        
         
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

          <Link to={"/"} className="flex items-center gap-[0.75em] bg-[#030712] py-[0.75em] px-[1.25em] rounded-[6.25em] cursor-pointer transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out ">
            
            

            <p className="text-white font-inter-tight  not-italic font-semibold text-[1rem] capitalize">back to home</p>

            <img src="/home-header-arrow.svg" alt="" />




          </Link>
    
        </motion.div>




      </div>




      




    </div>
    
    
  </>)
}