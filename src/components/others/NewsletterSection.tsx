import React from "react";

function NewsletterSection() {
  return (
    <div className="flex flex-col items-center gap-7 relative max-w-7xl mx-5 xl:mx-auto my-[150px]">
      <h5 className="text-3xl text-center">Sign up to our newsletter </h5>

      {/* Bottom Section */}
      <div
        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
        className="relative lg:h-[60px] 
        rounded-[20px] flex lg:flex-row flex-col lg:gap-3 w-full max-w-[650px]"
      >
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
          className="flex-1 outline-none border-none rounded-[20px] px-8 placeholder:text-neutral-300"
        />

        {/* Book a Tour CTA */}
        <button
          className="flex-none flex flex-row items-center text-white justify-center
            lg:w-[170px] md:w-full lg:h-[60px] h-[20px] bg-th-primary-medium  lg:rounded-bl-[0px]
            lg:rounded-r-[20px] rounded-b-[20px]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewsletterSection;
