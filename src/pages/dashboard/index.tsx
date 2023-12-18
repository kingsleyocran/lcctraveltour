import type { NextPage } from "next";
import { useState, useEffect } from "react";
import LoginSection from "@/components/dashboard-components/LoginSection";
import NavBar from "@/components/NavBar";
import CustomHead from "@/components/others/CustomHead";
import Footer from "@/components/Footer";

const DashboardLogin: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CustomHead title="Boxplay Ventures - Admin Login" />

      {/* Body */}
      <body className={`transition-all bg-th-background`}>
        {/* Header */}
        <NavBar />

        {/* Space under navBar*/}
        <div className="h-16"></div>

        {/* Dashboard */}
        <LoginSection />

        {/* Footer */}
        <Footer />
      </body>
    </>
  );
};

export default DashboardLogin;
