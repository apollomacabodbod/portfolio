import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/tooltip"



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

          <img src="filmakers2.png" alt="" className="w-full object-cover object-top rounded-[0.25em]"/>
        </div>




        <div className="flex flex-col mt-[1.5em] border border-[#50B498] green">


          <div className="flex items-center justify-between">



            <div className="flex flex-col">


              <p className="text-[#030712] font-inter-tight text-[1.3rem] not-italic font-semibold ">Filmina</p>


              <div className="flex items-center gap-[0.5em]">
                <p className="text-[#374151] font-inter-tight text-[1.125rem] not-italic font-normal ">Tech Stack</p>

                <div className="flex items-center gap-[0.4em]">

                 
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

                </div>


              </div>
                  



            </div>










            <div className="flex item-center  cursor-pointer  transform transition-transform duration-300 hover:scale-110"
              onClick={handleClickFilminaButton}
            >

              <img src="/home-latest-works-arrow.svg" alt=""  />









            </div>

                    


                  

          </div>


        </div>





      </div>





      <div className="flex flex-col ">


        <div className="flex items-center cursor-pointer " onClick={handleClickParking}>

          <img src="parking.png" alt="" className="w-full object-cover object-top rounded-[0.25em]"/>
        </div>




        <div className="flex flex-col mt-[1.5em] border border-[#50B498] green">


          <div className="flex items-center justify-between">



            <div className="flex flex-col">


              <p className="text-[#030712] font-inter-tight text-[1.3rem] not-italic font-semibold ">Park Camping</p>


              <div className="flex items-center gap-[0.5em]">
                <p className="text-[#374151] font-inter-tight text-[1.125rem] not-italic font-normal ">Tech Stack</p>

                <div className="flex items-center gap-[0.4em]">


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






                 
                 
                 
                  

                </div>


              </div>
                  



            </div>










            <div className="flex item-center  cursor-pointer  transform transition-transform duration-300 hover:scale-110"
              onClick={handleClickParkingButton}
            
            
            >

              <img src="/home-latest-works-arrow.svg" alt=""  />









            </div>

                    


                  

          </div>


        </div>





      </div>



    </div>
    
    
  </>)
}