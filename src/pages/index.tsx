import CustomHead from "@/components/CustomHead";
import HomeHeader from "@/components/home/HomeHeader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";
import HomeAboutSection from "@/components/home/HomeAboutSection";
import ToursSection from "@/components/tours/ToursSection";
import ProgramsSection from "@/components/programs/ProgramsSection";
import CitiesTilted from "@/components/home/CitiesTilted";
import TestomonialSection from "@/components/others/TestomonialSection";
import BlogNewsSection from "@/components/blogs/BlogNewsSection";
import NewsletterSection from "@/components/others/NewsletterSection";
import FAQSection from "@/components/others/FAQSection";
import HomeServicesSection from "@/components/home/HomeServicesSection";

export default function Home() {
  return (
    <>
      <CustomHead title="LCC Travel and Tours" />

      <main className="bg-white transition-all">
        <NavBar />

        <HomeHeader />

        <HomeAboutSection />
        <div className="h-[70px] md:h-[100px]"></div>

        <ToursSection />
        <div className="h-[70px] md:h-[100px]"></div>

        <HomeServicesSection />
        <div className="h-[70px] md:h-[100px]"></div>

        <ProgramsSection isNarrow={true} />

        <CitiesTilted />

        <TestomonialSection />
        <div className="h-[70px] md:h-[100px]"></div>

        <BlogNewsSection />

        <NewsletterSection />

        <FAQSection />

        <Footer />
      </main>
    </>
  );
}
