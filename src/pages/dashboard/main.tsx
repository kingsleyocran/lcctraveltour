import type { NextPage } from "next";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DashboardMain from "@/components/dashboard-components/DashboardMain";
import ProtectedRoute from "@/context/ProtectedRoute";
import CustomHead from "@/components/CustomHead";

const Dashboard: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <ProtectedRoute>
      <CustomHead title="LCC Travel and Tours - Dashboard" />

      {/* Body */}
      <body className={`transition-all bg-th-background`}>
        {/* Header */}
        <NavBar />

        <div className="h-[10px]"></div>

        {/* Dashboard */}
        <DashboardMain />

        {/* Footer */}
        <Footer />
      </body>
    </ProtectedRoute>
  );
};

export default Dashboard;
