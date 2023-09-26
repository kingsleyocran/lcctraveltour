import { homeProgramsData } from "@/utils/web-content";
import React from "react";
import Image from "next/image";

function GellerySection() {
  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col items-center gap-4">
      <div className="w-full flex flex-row justify-between items-center">
        <h5 className="text-3xl text-center">Gallery</h5>
        {/* MoreButton */}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-neutral-100 px-6 py-3 rounded-full text-lg md:text-base"
          >
            See more
          </button>
        </div>
      </div>

      <div className="w-full grid md:grid-cols-3 grid-cols-2 h-600 gap-x-1 gap-y-1 rounded-xl overflow-hidden">
        <div className="bg-neutral-100 w-full h-full relative">
          <Image
            src={"/assets/images/test-image.png"}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="bg-neutral-100 w-full h-full relative">
          <Image
            src={"/assets/images/test-image.png"}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="bg-neutral-100 w-full h-full relative">
          <Image
            src={"/assets/images/test-image.png"}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="bg-neutral-100 w-full h-full relative">
          <Image
            src={"/assets/images/test-image.png"}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="bg-neutral-100 w-full h-full relative">
          <Image
            src={"/assets/images/test-image.png"}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="bg-neutral-100 w-full h-full relative">
          <Image
            src={"/assets/images/test-image.png"}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default GellerySection;
