import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/tooltip"


import { motion } from "framer-motion";



export default function HomeLatestWorksCards(){


  const handleClickFilmina = () => {
    window.open('https://film-makers-app.vercel.app/');
  };


  const handleClickFilminaButton = () => {
    window.open('https://film-makers-app.vercel.app/');
  };




  const handleClickParking = () => {
    window.open('https://park-camping-app.vercel.app/');
  };


  const handleClickParkingButton = () => {
    window.open('https://park-camping-app.vercel.app/');
  };






  return(<>

    <div className="grid custom-760:grid-cols-2 mt-[3.5em] gap-[2em] mb-[3.5em]">


      <div className="flex flex-col ">


        <div className="flex items-center cursor-pointer" onClick={handleClickFilmina}>

          <motion.img src="filmakers.jpeg" alt="" className="w-full object-cover object-top rounded-[0.25em] transition-all duration-1000 ease-in-out"
          
          
          
          
            
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




        <div className="flex flex-col mt-[1.5em] ">


          <div className="flex items-center justify-between">



            <div className="flex flex-col">


              <motion.p className="text-[#030712] font-inter-tight text-[1.3rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
              
              
                
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
      
              
              
              >Filmina</motion.p>


              <div className="flex items-center gap-[0.5em]">
              
                <motion.p className="text-[#374151] font-inter-tight text-[1.125rem] not-italic font-normal transition-all duration-1000 ease-in-out"
                
                
                             
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
      
                
                
                >Tech Stack</motion.p>

                <motion.div className="flex items-center gap-[0.4em] transition-all duration-1000 ease-in-out"
                
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

                        <img src="/Tailwind_CSS_Logo.svg" alt="" className="w-[1.5em] object-cover rounded-[0.25em] cursor-pointer"/>
          
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tailwind CSS</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>



                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>

                        <img src="/logo512.png" alt="" className="w-[1.5em] object-cover rounded-[0.25em] cursor-pointer"/>
          
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>ReactJs</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>





                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>

                        <img src="/Typescript_logo_2020.svg" alt="" className="w-[1.5em] object-cover rounded-[0.25em] cursor-pointer"/>
          
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Typescript</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                </motion.div>


              </div>
                  



            </div>










            <div className="flex item-center  cursor-pointer  transform transition-transform duration-300 hover:scale-110 "
              onClick={handleClickFilminaButton}
            >

              <motion.img src="/home-latest-works-arrow.svg" alt="" className="transition-all duration-1000 ease-in-out"
              
              
              
              
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

                    


                  

          </div>


        </div>





      </div>





      <div className="flex flex-col ">


        <motion.div className="flex items-center cursor-pointer transition-all duration-1000 ease-in-out" onClick={handleClickParking}
        
          
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

          <img src="parking.jpeg" alt="" className="w-full object-cover object-top rounded-[0.25em]"/>
        </motion.div>




        <div className="flex flex-col mt-[1.5em] ">


          <div className="flex items-center justify-between">



            <div className="flex flex-col">


              <motion.p className="text-[#030712] font-inter-tight text-[1.3rem] not-italic font-semibold transition-all duration-1000 ease-in-out"
              
              
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
              
              
              >Park Camping</motion.p>


              <div className="flex items-center gap-[0.5em]">
                <motion.p className="text-[#374151] font-inter-tight text-[1.125rem] not-italic font-normal transition-all duration-1000 ease-in-out"
                
                  
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
      
                
                
                
                >Tech Stack</motion.p>

                <motion.div className="flex items-center gap-[0.4em] transition-all duration-1000 ease-in-out"
                
                
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

                        <img src="/Tailwind_CSS_Logo.svg" alt="" className="w-[1.5em] object-cover rounded-[0.25em] cursor-pointer"/>
          
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tailwind CSS</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>



                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>

                        <img src="/logo512.png" alt="" className="w-[1.5em] object-cover rounded-[0.25em] cursor-pointer"/>
          
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>ReactJs</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>





                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>

                        <img src="/Typescript_logo_2020.svg" alt="" className="w-[1.5em] object-cover rounded-[0.25em] cursor-pointer"/>
          
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Typescript</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>



                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>

                        <img src="/shadcnUI.png" alt="" className="w-[1.5em] object-cover rounded-[0.25em] cursor-pointer"/>


                      </TooltipTrigger>
                      <TooltipContent>
                        <p>ShadcnUI</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>






                 
                 
                 
                  

                </motion.div>


              </div>
                  



            </div>










            <div className="flex item-center  cursor-pointer  transform transition-transform duration-300 hover:scale-110"
              onClick={handleClickParkingButton}
            
            
            >

              <motion.img src="/home-latest-works-arrow.svg" alt="" className="transition-all duration-1000 ease-in-out" 
              
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

                    


                  

          </div>


        </div>





      </div>



    </div>
    
    
  </>)
}