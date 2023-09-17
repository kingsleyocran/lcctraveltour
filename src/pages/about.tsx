import HomeHeader from "@/components/home/HomeHeader";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <HomeHeader />
    </main>
  );
}
