import React from "react";
import QuoteIcon from "./../../../public/assets/icons/quote.svg";
import Image from "next/image";
import * as content from "../../../utils/content";

function FounderQuoteSection() {
  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto  py-12 md:py-24 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex-1 flex flex-row justify-center md:justify-end">
          {/* Image */}
          <div className="h-[250px] w-[250px] md:h-[400px] md:w-[250px] lg:h-[450px] lg:w-[280px]  rounded-3xl relative">
            <Image
              src="/assets/images/naki-image.png"
              alt=""
              fill
              style={{ objectFit: "cover", borderRadius: "200px" }}
              priority
            />
          </div>
        </div>

        {/* Text */}

        <div className="flex lg:max-w-[450px] flex-col justify-center gap-5 text-xl lg:normal rounded-3xl lg:p-12 md:p-8 p-8">
          <QuoteIcon width="70" height="66" viewBox="0 0 107 66" />
          <p>{content.quoteText}</p>
          <p>{content.quoteAuthor}</p>
        </div>
      </div>
    </div>
  );
}

export default FounderQuoteSection;
