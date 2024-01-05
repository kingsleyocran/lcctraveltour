import type { NextPage } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CustomHead from "@/components/CustomHead";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import * as blogsRedux from "../../redux/features/blogs";
import BlogsPage from "@/components/blogs/BlogNewsPage";

interface Props {
  queryID: string;
}

export async function getServerSideProps(context: any) {
  const { blogID } = context.query;

  return {
    props: {
      queryID: blogID,
    },
  };
}

const Blog: NextPage<Props> = ({ queryID }) => {
  const dispatch = useAppDispatch();
  const loadingState = useAppSelector(
    blogsRedux.reducer.selectBlogsLoadingState
  );
  const [blogData, setblogData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const blogData = await dispatch(
        blogsRedux.actions.fetchBlogByIdAsync(queryID!.toString())
      );
      setblogData(blogData.payload);
      console.log(blogData);
    };
    fetchData();
  }, [queryID]);

  return (
    <>
      <CustomHead title="LCC Travel and blogs - Blogs & News" />

      <main className="bg-white transition-all">
        <NavBar />

        <BlogsPage blogData={blogData} isLoading={loadingState === "loading"} />

        <Footer />
      </main>
    </>
  );
};

export default Blog;
