import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/tooltip"




export default function HomeAboutMe(){


  return(<>





    <div className="flex flex-col border border-[#50B498] green">



      <div className="lg:flex lg:items-center lg:justify-between gap-[2em] ">


        <div className="flex items-center justify-center border border-[#50B498] green">

          <img src="/test2.png" alt="" className="min-w-[170px] object-cover  rounded-full"/>

        </div>



        <div className="flex flex-col max-w-[900px]">

          <p className="text-[#030712] text-center lg:text-start font-inter-tight text-[2rem] not-italic font-semibold leading-[1em] mt-[1em] lg:mt-[0em]">Aim to build intuitive and engaging user experiences that inspire interaction</p>

          <p className="mt-[1em] text-center lg:text-start font-inter-tight text-[1rem] not-italic font-normal ">
            
            As a frontend developer with a keen eye for visual communication, I’m passionate developing high-quality React.js applications that are both visually stunning and user-friendly. </p>


          <p className="font-inter-tight text-[1.125rem] mt-[0.5em] text-center lg:text-start">Tech </p>

          <div className="flex items-center justify-center lg:justify-start mt-[0.5em] gap-[0.5em]">


            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/JavaScript-logo.png" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>Javascript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>




            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/React-icon.svg.png" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>ReactJs</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>



            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/Tailwind_CSS_Logo.svg" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tailwind CSS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>



            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/Typescript_logo_2020.svg" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>Typescript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>




            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/html5.png" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>HTML5</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          
           
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>

                  <img src="/Git_icon.svg" alt="" className="w-[2em] rounded-[0.25em] object-cover cursor-pointer"/>
          
                </TooltipTrigger>
                <TooltipContent>
                  <p>Git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          
          
           
          </div>


        </div>




      </div>
    </div>


       



    
    
  </>)
}