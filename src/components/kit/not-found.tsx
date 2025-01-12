import { Link } from "react-router-dom";




export default function NotFound(){

  return(<>





    <div className="flex flex-col min-h-screen max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green ">



      {/* component */}
      <div className="flex flex-col items-center justify-center  border border-[#50B498] green flex-grow">



        <p className="text-center text-[#030712] font-inter-tight text-[4.5rem] not-italic font-bold leading-[1em]">404</p>


        <p className="text-[#030712] font-inter-tight text-[0.9375rem] not-italic font-normal text-center mt-[2em]">Somethings gone missing. Sorry, we couldn’t find the page you are looking for.</p>



            

        <div className="flex items-center justify-center mt-[2em]">

          <Link to={"/"} className="flex items-center gap-[0.75em] bg-[#030712] py-[0.75em] px-[1.25em] rounded-[6.25em] cursor-pointer transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out ">
            
            

            <p className="text-white font-inter-tight  not-italic font-semibold text-[1rem] capitalize">back to home</p>

            <img src="/home-header-arrow.svg" alt="" />




          </Link>
    
        </div>




      </div>




      




    </div>
    
    
  </>)
}