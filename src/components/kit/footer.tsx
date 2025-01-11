import { motion } from "framer-motion";


export default function Footer(){


  const handleClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/apollo-macabodbod-832a8a279/');
  };



  const handleClickGithub = () => {
    window.open('https://github.com/apollomacabodbod');
  };


  return (<>


    <div className="bg-[#030712]  py-[4.5em] " >


      <div className="flex flex-col bg-[#030712] max-w-[1200px] lg:mx-auto px-[1.25em] ">



        <div className="custom-930:flex custom-930:items-center custom-930:justify-between">




      
          <motion.p className=" text-center text-[#4B5563] font-inter-tight text-[1rem]  font-normal not-italic mt-[0.5em] transition-all duration-1000 ease-in-out"
          
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
          
          
          >Built with ReactJs & Tailwind</motion.p>

          <motion.div className="flex items-center justify-center gap-[1em] mt-[1em] transition-all duration-1000 ease-in-out"
          
          
          
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


         

            <img src="/footer-linkedIn.svg" alt="" className="cursor-pointer" onClick={handleClickLinkedIn}/>
            <img src="/footer-github.svg" alt="" className="cursor-pointer" onClick={handleClickGithub}/>

          </motion.div>


  



        </div>



     
        <div className="flex flex-col mt-[1em] ">


          <div className="custom-930:flex items-center custom-930:justify-between">


            <div className="flex flex-col">

              <motion.p className=" text-center text-[#4B5563] font-inter-tight text-[1rem]  font-normal not-italic mt-[0.5em] transtion-all duration-1000 ease-in-out"
              
              
                  
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
              
              >apollomacabodbod8 <span className="text-white font-semibold"> @gmail.com</span></motion.p>

            </div>


            <div className="flex flex-col">

              <motion.p className=" text-center text-[#4B5563] font-inter-tight text-[1rem]  font-normal not-italic mt-[0.5em] transition-all duration-1000 ease-in-out"
              
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
              
              
              >© 2025 All Rights Reserved.</motion.p>

            </div>




          </div>



        </div>



      
       




      </div>

 

    </div>
    






    
  </>)
}