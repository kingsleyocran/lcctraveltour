import type { NextPage } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CustomHead from "@/components/others/CustomHead";

const Tours: NextPage = () => {
  return (
    <>
      <CustomHead title="LCC Travel and Tours" />

      <main className="bg-white transition-all">
        <NavBar />

        <Footer />
      </main>
    </>
  );
};

export default Tours;
