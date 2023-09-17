import CustomHead from "@/components/others/CustomHead";
import HomeHeader from "@/components/home/HomeHeader";
import NavBar from "@/components/NavBar";
import React from "react";
import * as content from "../../utils/content";
import HomeCommunitySection from "@/components/home/HomeCommunitySection";
import ShortContent from "@/components/others/ShortContent";
import HomeVisionMission from "@/components/home/HomeVisionMission";
import FounderQuoteSection from "@/components/others/FounderQuoteSection";
import Footer from "@/components/Footer";
import EventsNewsSection from "@/components/others/EventsNewsSection";

export default function Home() {
  return (
    <>
      <CustomHead title="Yes To Youth" />
      <main className="bg-white transition-all">
        <NavBar />

        <HomeHeader />

        <ShortContent content={content.homeContent1}/>

        <HomeCommunitySection />

        <HomeVisionMission />
        
        <FounderQuoteSection />
        
        <EventsNewsSection/>
        
        <Footer/>
      </main>
    </>
  );
}
