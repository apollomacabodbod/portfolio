



import { motion } from "framer-motion"

export default function ContactDetails(){


  return (<>




    <div className="grid grid-cols-1  p-[2em] gap-[2em]  lg:px-[5.625em]  ">






      <div className="grid sm:grid-cols-2 gap-[1em]">


        <div className="flex flex-col">

          <motion.input type="text" className="outline-none border-b-2 border-[rgba(16,34,29,0.60)] py-[1em] text-[rgba(16,34,29,0.60)] font-inter-tight text-[0.9375rem] not-italic font-normal transition-all duration-1000 ease-in-out " placeholder="Your Name"
  
  
  
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


        <div className="flex flex-col">

          <motion.input type="text" className="outline-none border-b-2 border-[rgba(16,34,29,0.60)] py-[1em] text-[rgba(16,34,29,0.60)] font-inter-tight text-[0.9375rem] not-italic font-normal transition-all duration-1000 ease-in-out" placeholder="Email Address"
  
  
  
  
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



      <div className="grid grid-cols-1 ">

        <div className="flex flex-col">


          <motion.textarea name="" id="" className="outline-none border-b-2 border-[rgba(16,34,29,0.60)] pt-[1em] pb-[4em] text-[rgba(16,34,29,0.60)] font-inter-tight text-[0.9375rem] not-italic font-normal resize-none transition-all duration-1000 ease-in-out" placeholder="Messages"
          
          
          
          
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
          
          
          ></motion.textarea>



        </div>


      </div>












    </div>
    
    
  </>)
}