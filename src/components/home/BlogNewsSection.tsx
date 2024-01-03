import { homeProgramsData } from "@/utils/content";
import React from "react";
import Image from "next/image";

function BlogNewsSection() {
  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col items-center gap-4">
      <div className="w-full flex flex-row justify-between items-center">
        <h5 className="text-3xl text-center">Blogs & News</h5>
        {/* MoreButton */}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-neutral-100 px-6 py-3 rounded-full text-lg md:text-base"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6">
        <div
          style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
          className=" w-full rounded-2xl p-3 flex flex-col md:flex-row gap-4"
        >
          <div className="md:w-350 w-full h-200 md:h-150 bg-neutral-100 rounded-xl"></div>

          <div className="flex flex-col gap-2 justify-center overflow-hidden md:p-0 p-4">
            <p className="text-th-accent-medium">March 16, 2023</p>
            <h6 className="text-2xl">
              Established in 2005, LCC Travel is a globally recognized
            </h6>
            <p className="text-neutral-400">
              Established in 2005, LCC Travel is a globally recognized travel
              and tour agency, blending the thrill of travel with purposeful
              experiences. Established in 2005, LCC Travel is a globally
              recognized travel and tour
            </p>
          </div>
        </div>

        <div
          style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
          className=" w-full rounded-2xl p-3 flex flex-col md:flex-row gap-4"
        >
          <div className="md:w-350 w-full h-200 md:h-150 bg-neutral-100 rounded-xl"></div>

          <div className="flex flex-col gap-2 justify-center overflow-hidden md:p-0 p-4">
            <p className="text-th-accent-medium">March 16, 2023</p>
            <h6 className="text-2xl">
              Established in 2005, LCC Travel is a globally recognized
            </h6>
            <p className="text-neutral-400">
              Established in 2005, LCC Travel is a globally recognized travel
              and tour agency, blending the thrill of travel with purposeful
              experiences. Established in 2005, LCC Travel is a globally
              recognized travel and tour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogNewsSection;
