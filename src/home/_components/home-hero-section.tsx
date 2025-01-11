
import { motion } from "framer-motion"


export default function HomeHeroSection(){


  return(<>


    <div className="flex flex-col mt-[8em] border border-[#50B498] green "  >


      <motion.p className="text-[#030712] font-inter-tight text-[3.4rem] sm:text-[6.4rem] not-italic font-bold leading-[1em] transiton-all duration-1000 ease-in-out"
      
      
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
        
      
      
      >I’m a frontend developer with passion to create <br></br><span className="text-[#AEB2BA]"> a great experiences</span> </motion.p>




      <div className="lg:flex lg:items-center lg:justify-between lg:gap-[2em] lg:mt-[2.5em] ">



        <motion.div className="flex flex-col mt-[2.5em] lg:mt-[0em] transition-all duration-1000 ease-in-out"
        
        
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

          <img src="/home-hero-section-divider.svg" alt="" className=""/>

        </motion.div>



        <div className="flex flex-col">

           
          <motion.p className="text-[#374151] font-inter-tight text-[1.375rem] not-italic font-normal mt-[1em] lg:mt-[0em] transition-all duration-1000 ease-in-out"
          
          
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
            
          
          
          >I'm Apollo, a frontend developer I specialize in creating intuitive and engaging digital experiences. and building responsive and user-friendly interfaces.</motion.p>
           

        </div>


      
      </div>

    </div>
    
    
  </>)
}