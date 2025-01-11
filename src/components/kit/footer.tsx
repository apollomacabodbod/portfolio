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




        <p className=" text-center text-[#4B5563] font-inter-tight text-[1rem]  font-normal not-italic">© 2025 All Rights Reserved.</p>




      </div>

 

    </div>
    






    
  </>)
}