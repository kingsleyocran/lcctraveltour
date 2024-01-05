import React from "react";

function BlogNewsHeader() {
  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto mb-6 mt-2">
      <div className="bg-th-accent-medium rounded-3xl md:h-[150px] p-12 flex flex-row">
        <div className="flex flex-col gap-5 items-start justify-center">
          {/* Text */}
          <h1 className="text-white text-3xl">Blogs & News</h1>
        </div>
      </div>
    </div>
  );
}

export default BlogNewsHeader;
