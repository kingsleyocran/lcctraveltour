import React from "react";
import { useRouter } from "next/router";
import { homeAboutText } from "@/utils/web-content";
import HomeAboutVector from "../../../public/assets/vector/home-about-us.svg";

function HomeAboutSection() {
  const router = useRouter();

  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto">
      <div className="bg-th-accent-medium rounded-3xl md:h-500 p-12 flex flex-row">
        <div className="flex flex-col gap-5 items-start justify-center">
          {/* Text */}
          <p className="text-white">About LCC Travel & Tour</p>
          <p className="text-white lg:text-3xl md:text-2xl text-2xl">{homeAboutText}</p>

          {/* Button */}
          <button
            type="button"
            className="text-white bg-black bg-opacity-10 px-5 py-2.5 rounded-xl"
          >
            Read more
          </button>
        </div>

        <div className="flex-none w-400 md:flex flex-col justify-center hidden">
          <HomeAboutVector />
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
