import HomeAboutMe from "./_components/home-about-me";
import HomeHeroSection from "./_components/home-hero-section";
import HomeLatestWorks from "./_components/home-latest-works";
import HomeLatestWorksCards from "./_components/home-latest-works-cards";
import HomeLinks from "./_components/home-links";

export default function Home() {


  return (<>



    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] ">

      <HomeHeroSection/>
      <HomeLinks/>
      <HomeAboutMe/>
      <HomeLatestWorks/>
      <HomeLatestWorksCards/>

    </div>



    
    
  </>)
}
  