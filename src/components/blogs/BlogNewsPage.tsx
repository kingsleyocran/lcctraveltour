import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { Oval } from "@agney/react-loading";
import { convertTimestamp } from "@/utils/helpers";

function BlogsPage({
  blogData,
  isLoading,
}: {
  blogData: any;
  isLoading: boolean;
}) {
  return (
    <>
      {blogData && (
        <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col gap-6">
          {/* Image */}
          <div className="w-full lg:h-[450px] h-[300px] relative">
            <Image
              src={blogData.imageUrl}
              alt=""
              fill
              style={{ objectFit: "cover", borderRadius: "12px" }}
              priority
            />
          </div>

          <div className="flex flex-row gap-3 justify-between items-center">
            <h5 className="text-th-primary-medium text-3xl">{blogData.title}</h5>

            <div className="bg-neutral-100 text-black px-4 py-2 rounded-lg flex flex-row gap-3">
            {convertTimestamp(blogData.dateCreated)}
          </div>
          </div>

          <h5 className="text-black text-base">{parse(blogData.content)}</h5>
        </div>
      )}

      {isLoading && (
        <div className="md:h-400 h-300 flex flex-row justify-center items-center">
          <Oval width="60" color="grey" />
        </div>
      )}
    </>
  );
}

export default BlogsPage;
