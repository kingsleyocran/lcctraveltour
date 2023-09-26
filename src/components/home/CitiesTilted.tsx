import React from "react";
import Image from "next/image";

function CitiesTilted() {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden ">
      <div className="rotate-6 md:h-300 h-250 flex flex-col justify-center">
      <div className="bg-th-accent-medium w-[3660px] md:h-100 h-[60px]  relative flex flex-col justify-center ">
        <div className="h-[40px]  md:h-[50px] relative">
          <Image
            src="/assets/images/cities-text.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default CitiesTilted;
