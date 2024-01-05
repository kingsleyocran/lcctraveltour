import type { NextPage } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CustomHead from "@/components/CustomHead";
import AllBlogsPage from "@/components/blogs/AllBlogNewsPage";
import BlogNewsHeader from "@/components/blogs/BlogNewsHeader";

const Tours: NextPage = () => {
  return (
    <>
      <CustomHead title="LCC Travel and Tours - Blogs & News" />

      <main className="bg-white transition-all">
        <NavBar />

        <BlogNewsHeader />

        <AllBlogsPage />

        <Footer />
      </main>
    </>
  );
};

export default Tours;
