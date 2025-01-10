



export default function HomeHeroSection(){


  return(<>


    <div className="flex flex-col mt-[8em] border border-[#50B498] green "  >


      <p className="text-[#030712] font-inter-tight text-[3.4rem] sm:text-[6.4rem] not-italic font-bold leading-[1em] ">I’m a frontend developer with passion to create <br></br><span className="text-[#AEB2BA]"> a great experiences</span> </p>




      <div className="lg:flex lg:items-center lg:justify-between lg:gap-[2em] lg:mt-[2.5em] ">



        <div className="flex flex-col mt-[2.5em] lg:mt-[0em]">

          <img src="/home-hero-section-divider.svg" alt="" className=""/>

        </div>



        <div className="flex flex-col">

           
          <p className="text-[#374151] font-inter-tight text-[1.375rem] not-italic font-normal mt-[1em] lg:mt-[0em] ">I'm Apollo, a frontend developer I specialize in creating intuitive and engaging digital experiences. and building responsive and user-friendly interfaces.</p>
           

        </div>


      
      </div>

    </div>
    
    
  </>)
}