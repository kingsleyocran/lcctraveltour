import CustomHead from "@/components/CustomHead";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";
import ProgramsSection from "@/components/programs/ProgramsSection";
import ProgramsFormModal from "@/components/programs/ProgramsFormModal";

export default function Programs() {
  return (
    <>
      <CustomHead title="LCC Travel and Tours" />

      <main className="bg-white transition-all">
        <NavBar />

        <div className="mt-12"></div>

        <ProgramsSection isNarrow={false} />

        <ProgramsFormModal />

        <Footer />
      </main>
    </>
  );
}
