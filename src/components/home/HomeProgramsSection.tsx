import { programsData } from "@/utils/content";
import React from "react";
import ArrowRightUpwardIcon from "../../../public/assets/icons/arrow-side-upward.svg";

function HomeProgramsSection() {
  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col items-center gap-4">
      <h5 className="text-3xl text-center">Programs</h5>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 rounded-3xl">
        {programsData.map((data, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
            className=" bg-white rounded-2xl hover:scale-[102%] transition-all gap-4 md:gap-1
          duration-100 cursor-pointer p-6 md:p-4 max-w-[600px] flex flex-col md:flex-row items-center justify-center "
          >
            {/* Image */}
            <div
              className="flex-none flex flex-row items-center justify-center md:w-[150px] md:h-[150px]
            w-[100px] h-[100px] bg-th-primary-medium rounded-xl"
            >
              {data.icon}
            </div>

            <div className="flex-1 p-4 md:p-6 flex flex-col gap-3">
              <div className="flex flex-row justify-center md:justify-between gap-2 items-center">
                <h5 className="text-xl">{data.title}</h5>

                <ArrowRightUpwardIcon
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                />
              </div>
              <p className="line-clamp-3 text-center md:text-left">
                {data.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProgramsSection;
