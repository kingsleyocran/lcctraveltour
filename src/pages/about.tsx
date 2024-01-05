import CustomHead from "@/components/CustomHead";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";
import AboutSection from "@/components/about/AboutPage";
import BlogNewsSection from "@/components/blogs/BlogNewsSection";
import FAQSection from "@/components/others/FAQSection";

export default function About() {
  return (
    <>
      <CustomHead title="LCC Travel and Tours" />

      <main className="bg-white transition-all">
        <NavBar />

        <AboutSection />
        <div className="h-[70px] md:h-[150px]"></div>

        <BlogNewsSection />

        <div className="h-[70px] md:h-[100px]"></div>
        <FAQSection />

        <Footer />
      </main>
    </>
  );
}
