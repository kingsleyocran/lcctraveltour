import React from "react";
import Image from "next/image";
import * as content from "../../../utils/content";
import { useRouter } from "next/router";

function HomeCommunitySection() {
  return (
    <div className=" relative max-w-7xl mx-5 xl:mx-auto">
      <div className="flex flex-col items-center h-full rounded-3xl px-5 py-12 md:px-8 md:py-12 gap-5 md:gap-8 bg-gradient-to-b from-[#FF7859] to-[#FFB695]">
        <div>
          <h4 className="text-white text-2xl md:text-3xl lg:text-4xl">
            {content.homeCommHeader}
          </h4>
        </div>

        <div className="h-[240px] md:h-[500px] w-full relative">
          <Image
            src="/assets/images/community-1.png"
            alt=""
            fill
            style={{ objectFit: "cover", borderRadius: "18px" }}
            priority
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5 mt-4">
          <p className="text-white text-4xl lg:text-5xl">
            {content.homeCommNumber}
          </p>
          <p className="text-white text-xl lg:text-2xl">
            {content.homeCommNumbertext}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-8">
          {content.commTypes.map((item: any) => (
            <HomeCommunityButton key={item.label} label={item.label} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HomeCommunityButton({ link, label }: { link: string; label: string }) {
  return (
    <button
      type="button"
      className="px-8 py-4 bg-black bg-opacity-20 hover:bg-opacity-50 active:bg-opacity-50 rounded-full text-white transition-all duration-200"
    >
      {label}
    </button>
  );
}

export default HomeCommunitySection;
