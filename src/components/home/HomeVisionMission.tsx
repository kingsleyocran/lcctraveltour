import React from "react";
import * as content from "../../../utils/content";
import Image from "next/image";

function HomeVisionMission() {
  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto  py-12 md:py-24 flex flex-col gap-8">
      {/* VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 relative">
        {/* Image */}
        <div className="lg:order-last h-[300px] md:h-auto rounded-3xl relative">
          <Image
            src="/assets/images/vision-img.png"
            alt=""
            fill
            style={{ objectFit: "cover", borderRadius: "24px" }}
            priority
          />
        </div>

        {/* Text */}
        <div className="">
          <div className="text-2xl lg:text-3xl lg:px-12 md:px-8 px-8 py-4">
            Vision
          </div>
          <div className="bg-sky-50 text-xl lg:normal rounded-3xl lg:p-12 md:p-8 p-8">
            {content.visionText}
          </div>
        </div>
      </div>

      {/* MISSION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 relative">
        {/* Image */}
        <div className="h-[300px] md:h-auto rounded-3xl relative">
          <Image
            src="/assets/images/mission-img.png"
            alt=""
            fill
            style={{ objectFit: "cover", borderRadius: "24px" }}
            priority
          />
        </div>

        {/* Text */}
        <div className="">
          <div className="text-2xl lg:text-3xl lg:px-12 md:px-8 px-8 py-4">
            Mission
          </div>
          <div className="bg-lime-50 text-xl lg:normal rounded-3xl lg:p-12 md:p-8 p-8">
            {content.missionText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeVisionMission;
