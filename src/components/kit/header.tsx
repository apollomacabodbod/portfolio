import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Header(){



  const [scrolling, setScrolling] = useState(false);
  // const [sidebarOpen, setSidebarOpen] = useState(false);
    
    
    
  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  


  return(<>



    <div  className={`fixed top-0 left-0 w-full  transition-all duration-1000 ease-in-out z-40  ${
      scrolling
        ? 'backdrop-blur-lg bg-black/40 shadow-lg'
        : 'bg-transparent backdrop-blur-none shadow-none'
    }`}>


    
      <div className="flex flex-col max-w-[1200px] lg:mx-auto py-[1.2em] px-[1.25em] ">


        <div className="flex items-center justify-between ">




          <Link to={"/"} className="flex items-center cursor-pointer ">

            <p className="text-[#AEB2BA] font-inter-tight font-bold text-[1.1rem] custom-375:text-[1.2rem]">apollo</p>
            <p className="text-[#030712] font-inter-tight font-bold text-[1.1rem] custom-375:text-[1.2rem]">macabodbod.</p>

          </Link>




          <div className="flex flex-col ">



            <Link to={"/contact"} className="flex items-center gap-[0.75em] bg-[#030712] py-[0.75em] px-[1.25em] rounded-[6.25em] cursor-pointer">
            
            

              <p className="text-white font-inter-tight  not-italic font-semibold text-[1rem] ">Contact</p>

              <img src="/home-header-arrow.svg" alt="" />




            </Link>

 




          </div>


          




        </div>


        {/* <div className="flex items-center lg:hidden cursor-pointer rounded-[6.25em] py-[0.875em] px-[1.5em] border border-[#030712]">

            <img src="/home-header-humberger.svg" alt="" />

          </div> */}
      



      </div>



    </div>



    
  </>)




  



}