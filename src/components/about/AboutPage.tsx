import React from "react";
import { useRouter } from "next/router";
import * as content from "@/utils/content";
import HomeAboutVector from "../../../public/assets/vector/home-about-us.svg";

function AboutSection() {
  const router = useRouter();

  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto">
      <div className="bg-th-accent-medium rounded-3xl md:h-500 p-12 flex flex-row">
        <div className="flex flex-col gap-5 items-start justify-center">
          {/* Text */}
          <p className="text-white">About LCC Travel & Tour</p>
          <p className="text-white lg:text-2xl md:text-2xl text-2xl">
            {content.homeAboutText}
            {content.homeAboutText2}
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="flex flex-col justify-center items-center mt-24">
        <p className="text-th-accent-medium text-lg">Our Mission</p>
        <p className="text-black lg:text-xl md:text-xl text-2xl mt-3 max-w-[700px] text-center">
          {content.aboutContentMission}
        </p>
      </div>

      {/* Vision */}
      <div className="flex flex-col justify-center items-center mt-24">
        <p className="text-th-accent-medium text-lg">Our Vision</p>
        <p className="text-black lg:text-xl md:text-xl text-2xl mt-3 max-w-[700px] text-center">
          {content.aboutContentVision}
        </p>
      </div>

      {/* Core Values */}
      <div className="flex flex-col justify-center items-center mt-24 gap-6">
        <p className="text-black text-xl">Our Core Values</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          {content.aboutContentValues.map((data: any, index: any) => (
            <div
              key={index}
              style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
              className=" bg-white rounded-2xl p-7"
            >
              <p className="text-th-primary-medium text-lg">{data.title}</p>
              <p className="text-black lg:text-lg md:text-lg text-lg mt-3 max-w-[700px] text-start">
                {data.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
