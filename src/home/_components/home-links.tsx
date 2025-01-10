

export default function HomeLinks(){



  const handleClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/apollo-macabodbod-832a8a279/');
  };



  const handleClickGithub = () => {
    window.open('https://github.com/apollomacabodbod');
  };


  return(<>

    <div className="flex flex-col my-[5.5em] ">






      <div className="flex items-center gap-[3.5em]" >

           
            
            

        <div className="flex items-center gap-[0.75em] cursor-pointer" onClick={handleClickLinkedIn}>

       

          <p className="text-[#030712] font-inter-tight text-[1rem] not-italic font-medium uppercase">LinkedIn</p>

          <img src="/home-links.svg" alt=""  className="transform transition-transform duration-300 hover:scale-110"/>


        </div>


        <div className="flex items-center gap-[0.75em] cursor-pointer" onClick={handleClickGithub}>

          <p className="text-[#030712] font-inter-tight text-[1rem] not-italic font-medium uppercase">github</p>

          <img src="/home-links.svg" alt="" className="transform transition-transform duration-300 hover:scale-110"/>


        </div>




      </div>

     



    </div>
    
    
  </>)
}