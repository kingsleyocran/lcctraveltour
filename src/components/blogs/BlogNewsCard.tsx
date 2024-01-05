import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { useRouter } from "next/router";

function BlogNewsCard({ data, index }: { data: any; index: any }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push({ pathname: `/blogs/${data.id}` });
      }}
      key={index}
      style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
      className=" w-full rounded-2xl p-3 flex flex-col md:flex-row gap-4"
    >
      <div className="md:w-250 w-full h-200 md:h-150 bg-neutral-100 rounded-xl relative flex-none">
        <Image
          src={data.imageUrl}
          alt=""
          fill
          style={{ objectFit: "cover", borderRadius: "12px" }}
          priority
        />
      </div>

      <div className="flex-1 flex flex-col gap-2 justify-center overflow-hidden md:p-0 p-4">
        <p className="text-th-accent-medium">{data.dateCreated}</p>
        <h6 className="text-2xl">{data.title}</h6>
        <p className="text-neutral-400 line-clamp-3">{parse(data.content)}</p>
      </div>
    </div>
  );
}

export default BlogNewsCard;
