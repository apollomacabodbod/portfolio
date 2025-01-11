import { motion } from "framer-motion";


export default function Footer(){




  return (<>


    <div className="bg-[#030712]  py-[4.5em] " >


      <div className="flex flex-col bg-[#030712] max-w-[1200px] lg:mx-auto px-[1.25em] ">



        <div className="flex items-center justify-between">


          <p className=" text-center text-[#4B5563] font-inter-tight text-[1rem]  font-normal not-italic mt-[0.5em]">apollomacabodbod8 <span className="text-white font-semibold"> @gmail.com</span></p>
      


          <div className="flex items-center justify-center gap-[1em]">


       

            <img src="/footer-linkedIn.svg" alt="" />
            <img src="/footer-github.svg" alt="" />

          </div>



        </div>



     
        <div className="flex flex-col mt-[2em]">


          <div className="flex items-center justify-between">


            <div className="flex flex-col">
              <p className=" text-center text-[#4B5563] font-inter-tight text-[1rem]  font-normal not-italic mt-[0.5em]">"In battle, plans are useless, but planning is indispensible." - Dwight D. Eisenhower</p>

            </div>


            <div className="flex flex-col">

              <p className=" text-center text-[#4B5563] font-inter-tight text-[1rem]  font-normal not-italic mt-[0.5em]">© 2025 All Rights Reserved.</p>

            </div>




          </div>



        </div>



      
       




      </div>

 

    </div>
    






    
  </>)
}