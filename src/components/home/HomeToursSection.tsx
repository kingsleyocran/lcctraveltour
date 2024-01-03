import React from "react";
import Image from "next/image";
import { homeToursData } from "@/utils/content";

function HomeToursSection() {
  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col gap-4">
      <h5 className="text-3xl">Tours</h5>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 rounded-3xl">
        {homeToursData.map((data, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
            className=" bg-white rounded-2xl hover:scale-[102%] transition-all
            duration-100 cursor-pointer p-2"
          >
            {/* Image */}
            <div className="w-full h-[300px] relative">
              <Image
                src={data.imgUrl}
                alt=""
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
                priority
              />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h5 className="text-th-accent-medium text-xl">{data.title}</h5>
              <p>{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeToursSection;
