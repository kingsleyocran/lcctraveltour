import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ChevronLeftIcon from "./../../../public/assets/icons/chevron_left.svg";
import ChevronRightIcon from "./../../../public/assets/icons/chevron_right.svg";
import { testimonialTestData } from "@/utils/web-content";

function TestomonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [_, setInit] = useState<any>();

  return (
    <div className="flex flex-col gap-5 relative max-w-7xl mx-5 xl:mx-auto my-12">
      <h5 className="text-3xl">Tours</h5>

      {/* Image */}
      <div className="w-full h-[130px] md:h-[320px]  relative">
        <Image
          src="/assets/images/testimonials-web-1.png"
          alt=""
          fill
          style={{ objectFit: "contain", borderRadius: "12px" }}
          priority
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-row justify-end items-center">
        <div className="flex flex-row gap-2">
          <button
            ref={prevRef}
            className="h-[40px] w-[40px] bg-neutral-100 rounded-full flex flex-row justify-center items-center"
          >
            <ChevronLeftIcon
              width="8"
              height="18"
              viewBox="0 0 12.926 22.853"
              fill="#000000"
            />
          </button>
          <button
            ref={nextRef}
            className="h-[40px] w-[40px] bg-neutral-100 rounded-full flex flex-row justify-center items-center"
          >
            <ChevronRightIcon
              width="8"
              height="18"
              viewBox="0 0 12.926 22.853"
              fill="#000000"
            />
          </button>
        </div>
      </div>

      {/* Card Row */}
      <div className="h-350 md:h-[340px]">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          modules={[Navigation, FreeMode, Pagination]}
          className="mySwiper"
          navigation={{
            prevEl: prevRef!.current,
            nextEl: nextRef!.current,
          }}
          onInit={() => setInit(true)}
        >
          {testimonialTestData.slice(0, 10).map((data: any, index) => (
            <SwiperSlide
              key={index}
              onClick={() => {}}
              style={{ width: "350px" }}
            >
              <div
                style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
                className="m-3 p-8 rounded-3xl bg-white h-350 md:h-[340px] transition-all duration-100 flex flex-col gap-6"
              >
                {/* Avatar */}
                <div className="w-[70px] h-[70px] relative">
                  <Image
                    src={data.imgUrl}
                    alt=""
                    fill
                    style={{ objectFit: "contain", borderRadius: "200px" }}
                    priority
                  />
                </div>

                <p className="text-base md:text-sm line-clamp-5 text-neutral-500">
                  {data.content} {data.content}
                </p>

                <div className="flex flex-col gap-2">
                  <p className="text-base md:text-sm bold text-th-primary-medium">
                    {data.name}
                  </p>

                  <p className="text-base md:text-sm">{data.portfolio}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MoreButton */}
      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="bg-neutral-100 px-6 py-3 rounded-full text-lg md:text-base"
        >
          See more
        </button>
      </div>
    </div>
  );
}

export default TestomonialSection;
