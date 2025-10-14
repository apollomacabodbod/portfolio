import HomeAboutMe from "./_components/home-about-me";
import HomeExperience from "./_components/home-experience";
import HomeHeroSection from "./_components/home-hero-section";
import HomeLatestWorks from "./_components/home-latest-works";
import HomeLatestWorksCards from "./_components/home-latest-works-cards";
import HomeLinks from "./_components/home-links";
import HoneWinningAwards from "./_components/home-winning-awards";

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] ">
        <HomeHeroSection />
        <HomeLinks />
        <HomeAboutMe />
        <HomeExperience />
        <HoneWinningAwards />
        <HomeLatestWorks />
        <HomeLatestWorksCards />
      </div>
    </>
  );
}
