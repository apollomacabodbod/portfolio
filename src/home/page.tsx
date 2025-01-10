import HomeAboutMe from "./_components/home-about-me";
import HomeHeroSection from "./_components/home-hero-section";
import HomeLatestWorks from "./_components/home-latest-works";

export default function Home() {


  return (<>



    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green">

      <HomeHeroSection/>
      <HomeAboutMe/>
      <HomeLatestWorks/>

    </div>



    
    
  </>)
}
  