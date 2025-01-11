import { motion } from "framer-motion";


export default function Footer(){


  const handleClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/apollo-macabodbod-832a8a279/');
  };
    
    
    
  const handleClickGithub = () => {
    window.open('https://github.com/apollomacabodbod');
  };


  return (<>


    <div className="bg-[#030712] border border-[#50B498] green pt-[4.5em] " >


      <div className="flex flex-col bg-[#030712] max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green">



        <div className="flex items-center justify-between">

          <div className="flex flex-col">
            <p className="text-[0.875rem] text-white font-inter-tight not-italic font-medium" ><span className="text-[#6B7280]">apollomacabodbod8</span>@gmail.com</p>
          </div>


          <div className="flex flex-col">

            <div className="flex items-center gap-[2em]">

              <img src="/footer-linkedIn.svg" alt="" className="transform transition-transform duration-300 hover:scale-110 cursor-pointer" onClick={handleClickLinkedIn}/>
              <img src="/footer-github.svg" alt="" className="transform transition-transform duration-300 hover:scale-110 cursor-pointer" onClick={handleClickGithub}/>
            </div>


          </div>


        </div>




      </div>




      <div className="grid md:grid-cols-2 max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green mt-[4.5em] mb-[2em]">




        <div className="flex flex-col mt-[1.5em]">



          <p className="text-[#6B7280] font-inter-tight text-[1.375rem] not-italic font-medium ">Keep up with me.</p>


          <div className="flex items-center pb-[1.25em] border-b border-white gap-[0.75em]  mt-[1.5em] max-w-[17.1em]">

            <input type="text" className="bg-[#030712] outline-none font-inter-tight text-white" placeholder="Enter your email"/>
            <img src="/footer-arrow.svg" alt="" className="transform transition-transform duration-300 hover:scale-110 cursor-pointer" />


          </div>


        </div>



        <div className="flex flex-col sm:justify-end mt-[4em]">


          <p className=" md:text-end text-[#4B5563] font-inter-tight text-[1rem]  font-normal not-italic">© 2025 All Rights Reserved.</p>

        </div>




      </div>



 

    </div>
    






    
  </>)
}