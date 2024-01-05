import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { useRouter } from "next/router";

function TourCard({ data, index }: { data: any; index: any }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push({ pathname: `/tours/${data.id}` });
      }}
      key={index}
      style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
      className=" bg-white rounded-2xl hover:scale-[102%] transition-all duration-100 cursor-pointer p-2"
    >
      {/* Image */}
      <div className="w-full h-[300px] relative">
        <Image
          src={data.imageUrl}
          alt=""
          fill
          style={{ objectFit: "cover", borderRadius: "12px" }}
          priority
        />
      </div>
      <div className="p-6 flex flex-col gap-2">
        <h5 className="text-th-accent-medium text-xl line-clamp-2">
          {data.title}
        </h5>
        <p className="line-clamp-3">{parse(data.summary)}</p>

        <div className="flex flex-row gap-3 mt-2">
          <div className="bg-th-primary-medium text-white px-4 py-2 rounded-lg flex flex-row gap-3">
            <p className="italic">Starts at:</p>
            {data.startingPrice}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
