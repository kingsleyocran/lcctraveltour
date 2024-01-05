import React from "react";
import { homeServicesList } from "@/utils/content";

function HomeServicesSection() {
  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col gap-4">
      <h5 className="text-3xl">Services</h5>
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-3 rounded-3xl">
        {homeServicesList.map((data, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
            className=" bg-white rounded-2xl hover:scale-[102%] transition-all
            duration-100 cursor-pointer p-2"
          >
            <div className="p-4 flex flex-col gap-2">
              <h5 className="text-th-accent-medium text-lg">{data}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeServicesSection;
