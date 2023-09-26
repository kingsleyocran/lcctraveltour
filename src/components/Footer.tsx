import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
//import FacebookIcon from "./../../public/assets/socials/facebook.svg";

function Footer() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 py-4 relative max-w-7xl mx-5 xl:mx-auto">
      {/* Footer Section */}
      <div></div>

      {/* Copyright */}
      <div className=" p-6 flex flex-col md:flex-row gap-1 md:gap-4 items-center justify-center bg-neutral-200 rounded-3xl">
        <p className={`text-base md:text-sm text-black `}>
          Copyright © Boxplay Ventures {new Date().getFullYear()}
        </p>

        <div className="flex gap-1">
          <p className={` text-base md:text-sm text-black`}>Website by </p>
          <button onClick={() => router.push("/")}>
            <p
              className={`text-base md:text-sm text-[#B53A3F] hover:underline`}
            >
              OneClick Creative Agency
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
