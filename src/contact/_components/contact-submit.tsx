
import { Link } from "react-router-dom"


export default function ContactSubmit(){



  return(<>



    <div className="flex items-center justify-center mb-[3em] transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">


      <Link to={"/contact"} className="flex items-center gap-[0.75em] bg-[#030712] py-[0.75em] px-[1.25em] rounded-[6.25em] cursor-pointer">
                    
                    
        
        <p className="text-white font-inter-tight  not-italic font-semibold text-[1rem] ">Message</p>
        
        <img src="/home-header-arrow.svg" alt="" />
        
        
        
      </Link>



    </div>
    
    
    
  </>)
}