import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/app/hooks";
import * as blogsRedux from "@/redux/features/blogs";
import BlogNewsCard from "./BlogNewsCard";
import { Oval } from "@agney/react-loading";

function AllBlogsPage() {
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
      {loadingState == "idle" && (
        <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col gap-4">
          {loadingState === "idle" && (
            <div className="w-full flex flex-col gap-6">
              {blogsState.slice(0, 2).map((data: any, index: any) => (
                <BlogNewsCard data={data} index={index} />
              ))}
            </div>
          )}
        </div>
      )}

      {loadingState == "loading" && (
        <div className="md:h-500 h-300 flex flex-row justify-center items-center">
          <Oval width="60" color="grey" />
        </div>
      )}
    </>
  );
}

export default AllBlogsPage;
