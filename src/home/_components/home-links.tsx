
import { motion } from "framer-motion";


export default function HomeLinks(){



  const handleClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/apollo-macabodbod-832a8a279/');
  };



  const handleClickGithub = () => {
    window.open('https://github.com/apollomacabodbod');
  };


  return(<>

    <div className="flex flex-col my-[5.5em] ">






      <div className="flex items-center gap-[3.5em]" >

           
            
            

        <motion.div className="flex items-center gap-[0.75em] cursor-pointer transition-all duration-1000 ease-in-out" onClick={handleClickLinkedIn}
        
        
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

       

          <p className="text-[#030712] font-inter-tight text-[1rem] not-italic font-medium uppercase">LinkedIn</p>

          <img src="/home-links.svg" alt=""  className="transform transition-transform duration-300 hover:scale-110"/>


        </motion.div>


        <motion.div className="flex items-center gap-[0.75em] cursor-pointer transiton-all duration-1000 ease-in-out" onClick={handleClickGithub}
        
        
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

          <p className="text-[#030712] font-inter-tight text-[1rem] not-italic font-medium uppercase">github</p>

          <img src="/home-links.svg" alt="" className="transform transition-transform duration-300 hover:scale-110"/>


        </motion.div>




      </div>

     



    </div>
    
    
  </>)
}