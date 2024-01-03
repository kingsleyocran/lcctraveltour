import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import ViewTours from "./views/ViewTours"
import ViewGallery from "./views/ViewGallery"
import ViewTestimonials from "./views/ViewTestimonials"
import ViewBlogs from "./views/ViewBlogs"

function DashboardMain() {
  const { logOut } = useAuth();
  const router = useRouter();
  const [tabIndex, settabIndex] = useState(0);

  const pages = ["Tours", "Gallery", "Testimonials", "Blogs"];

  return (

    <div className="flex flex-col gap-4 justify-between max-w-7xl mx-5 py-4 xl:mx-auto ">
      <div className="flex flex-row justify-between">
        <h3 className={`text-2xl`}>Dashboard</h3>

        { /* Log out Button */}
        <button
          onClick={async () => { logOut();  router.push("/dashboard")}}
          type="button"
          className="px-4 py-1 rounded-full bg-neutral-400 text-white text-xs"
        >
          Log out
        </button>
      </div>

      <div className="flex gap-8 ">
        {/* Side Menu */}
        <div className="flex flex-col p-4 gap-4 bg-th-container-surface h-700 w-1/5 flex-none rounded-2xl">
          {/* Menu */}
          {pages.map((page) => (
            <div
              key={pages.indexOf(page)}
              className={`${
                pages.indexOf(page) == tabIndex ? "bg-neutral-200" : "bg-white"
              } p-4 rounded-2xl hover:cursor-pointer text-sm`}
              onClick={() => {
                settabIndex(pages.indexOf(page));
              }}
            >
              {page}
            </div>
          ))}
        </div>

        {/* Page View */}
        <div className="rounded-2xl bg-th-container-surface p-8 grow w-1/5">
          {0 == tabIndex && <ViewTours />}
          {1 == tabIndex && <ViewGallery />}
          {2 == tabIndex && <ViewTestimonials />}
          {3 == tabIndex && <ViewBlogs />}
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;
