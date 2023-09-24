import CustomHead from "@/components/others/CustomHead";
import HomeHeader from "@/components/home/HomeHeader";
import NavBar from "@/components/NavBar";
import React from "react";
import FounderQuoteSection from "@/components/others/FounderQuoteSection";
import Footer from "@/components/Footer";
import EventsNewsSection from "@/components/others/EventsNewsSection";
import HomeAboutSection from "@/components/home/HomeAboutSection";

export default function Home() {
  return (
    <>
      <CustomHead title="Yes To Youth" />
      <main className="bg-white transition-all">
        <NavBar />

        <HomeHeader />

        <HomeAboutSection/>

        <EventsNewsSection />

        <Footer />
      </main>
    </>
  );
}
