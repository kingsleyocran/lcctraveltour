import CustomHead from "@/components/others/CustomHead";
import HomeHeader from "@/components/home/HomeHeader";
import NavBar from "@/components/NavBar";
import React from "react";

import Footer from "@/components/Footer";
import HomeAboutSection from "@/components/home/HomeAboutSection";
import HomeToursSection from "@/components/home/HomeToursSection";
import HomeProgramsSection from "@/components/home/HomeProgramsSection";
import CitiesTilted from "@/components/home/CitiesTilted";
import TestomonialSection from "@/components/home/TestomonialSection";
import GellerySection from "@/components/home/GallerySection";
import BlogNewsSection from "@/components/home/BlogNewsSection";

export default function Home() {
  return (
    <>
      <CustomHead title="Yes To Youth" />

      <main className="bg-white transition-all">
        <NavBar />

        <HomeHeader />

        <HomeAboutSection />
        <div className="h-[70px] md:h-[100px]"></div>

        <HomeToursSection />
        <div className="h-[70px] md:h-[100px]"></div>

        <HomeProgramsSection />

        <CitiesTilted />

        <TestomonialSection />
        <div className="h-[70px] md:h-[100px]"></div>

        <GellerySection />
        <div className="h-[70px] md:h-[100px]"></div>

        <BlogNewsSection/>

        <Footer />
      </main>
    </>
  );
}
