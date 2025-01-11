import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/tooltip"

import { motion } from "framer-motion"


export default function HomeAboutMe(){


  return(<>





    <div className="flex flex-col ">



      <div className="lg:flex lg:items-center lg:justify-between gap-[2em] ">


        <div className="flex items-center justify-center ">

          <motion.img src="/profile.jpeg" alt="" className="min-w-[170px] object-cover  rounded-full transition-all duration-1000 ease-in-out"
          
          
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
          
          
          />

        </div>



        <div className="flex flex-col max-w-[900px]">

          <motion.p className="text-[#030712] text-center lg:text-start font-inter-tight text-[2rem] not-italic font-semibold leading-[1em] mt-[1em] lg:mt-[0em] transition-all duration-1000 ease-in-out"
          
          
                    
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
          
          
          
          >Aim to build intuitive and engaging user experiences that inspire interaction</motion.p>

          <motion.p className="mt-[1em] text-center lg:text-start font-inter-tight text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
                       
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
            
            As a frontend developer with a keen eye for visual communication, I’m passionate developing high-quality React.js applications that are both visually stunning and user-friendly. </motion.p>


          <motion.p className="font-inter-tight text-[1rem] mt-[0.5em] text-center lg:text-start transition-all duration-1000 ease-in-out"
          
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
          
          
          
          >Tech </motion.p>

          <motion.div className="flex items-center justify-center lg:justify-start mt-[0.5em] gap-[0.5em] transition-all duration-1000 ease-in-out"
          
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


            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/JavaScript-logo.png" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>Javascript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>




            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/React-icon.svg.png" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>ReactJs</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>



            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/Tailwind_CSS_Logo.svg" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tailwind CSS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>



            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/Typescript_logo_2020.svg" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>Typescript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>




            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/html5.png" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>HTML5</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          
           
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/Git_icon.svg" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>Git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          
          
           
          </motion.div>


        </div>




      </div>
    </div>


       



    
    
  </>)
}