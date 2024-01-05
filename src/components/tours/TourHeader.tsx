import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { HeaderTextComponent, bookATourSectionList } from "@/utils/content";

function TourHeader() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col gap-12 max-w-7xl mx-5 xl:mx-auto">
      {/* Top Section */}
      <div className="h-[300px] md:h-[300px] lg:h-[350px] relative">
        {/* Background */}
        <div className="h-[300px] md:h-[300px] lg:h-[350px] w-full absolute">
          <Image
            src="/assets/vector/world_banner-background_2.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* header Content Section */}
        <div
          className="h-[300px] md:h-[300px] lg:h-[350px] flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-0
            w-full absolute z-10 px-4 lg:px-[100px] md:px-[50px]"
        >
          {/* Header Text Section */}
          <div className="md:flex-1 md:text-3xl lg:text-4xl text-2xl text-center max-w-[700px] regular">
            <HeaderTextComponent colorClass={"text-th-accent-medium"} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
        className="relative lg:mx-[70px] md:mx-[20px] mx-4 lg:h-100 md:h-200
        rounded-[20px] flex lg:flex-row flex-col lg:gap-3 mb-[100px]"
      >
        {/* Book a Tour Types Section */}
        <div className="flex-1 my-10 md:my-0 flex md:flex-row flex-col px-8 gap-5">
          {bookATourSectionList.map((data, index) => (
            <div
              key={index}
              className="flex-1 flex flex-row items-center gap-3"
            >
              <div
                className="bg-th-primary-medium flex-none h-[40px] w-[40px] rounded-full
                flex flex-row items-center justify-center"
              >
                {data.icon}
              </div>

              <div className="flex-1">
                <h4 className="text-sm">{data.title}</h4>
                <p className="text-xs">{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourHeader;
