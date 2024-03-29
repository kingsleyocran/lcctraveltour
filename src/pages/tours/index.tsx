import type { NextPage } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CustomHead from "@/components/CustomHead";
import TourHeader from "@/components/tours/TourHeader";
import AllToursPage from "@/components/tours/AllToursPage";

const Tours: NextPage = () => {
  return (
    <>
      <CustomHead title="LCC Travel and Tours" />

      <main className="bg-white transition-all">
        <NavBar />

        <TourHeader />

        <AllToursPage />

        <Footer />
      </main>
    </>
  );
};

export default Tours;
