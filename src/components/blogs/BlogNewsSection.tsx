import Image from "next/image";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/app/hooks";
import * as blogsRedux from "@/redux/features/blogs";
import { Oval } from "@agney/react-loading";
import { useRouter } from "next/router";
import BlogNewsCard from "./BlogNewsCard";

function BlogNewsSection() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const blogsState = useAppSelector(blogsRedux.reducer.selectBlogs);
  const loadingState = useAppSelector(
    blogsRedux.reducer.selectBlogsLoadingState
  );

  useEffect(() => {
    dispatch(blogsRedux.actions.checkBeforeFetchBlog());
  }, []);

  return (
    <>
    {blogsState && <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col items-center gap-4">
      <div className="w-full flex flex-row justify-between items-center">
        <h5 className="text-3xl text-center">Blogs & News</h5>
        {/* MoreButton */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              router.push({ pathname: `/blogs` });
            }}
            type="button"
            className="bg-neutral-100 px-6 py-3 rounded-full text-lg md:text-base"
          >
            Read more
          </button>
        </div>
      </div>

      {loadingState === "idle" && <div className="w-full flex flex-col gap-6">
        {blogsState.slice(0, 4).map((data: any, index: any) => (
          <BlogNewsCard data={data} index={index} />
        ))}
      </div>}

      {loadingState == "loading" && (
        <div className="md:h-300 h-300 flex flex-row justify-center items-center">
          <Oval width="60" color="grey" />
        </div>
      )}
    </div>}</>
  );
}

export default BlogNewsSection;
