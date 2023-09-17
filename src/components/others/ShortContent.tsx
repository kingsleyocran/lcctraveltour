import React from "react";

function ShortContent({ content }: { content: string }) {
  return (
    <div
      className="relative max-w-7xl mx-5 xl:mx-auto  bg-white  normal text-3xl md:text-4xl \
  lg:text-5xl px-8 md:px-8 lg:px-24 py-24 md:py-[110px] lg:py-48 flex flex-col justify-center"
    >
      {content}
    </div>
  );
}

export default ShortContent;
