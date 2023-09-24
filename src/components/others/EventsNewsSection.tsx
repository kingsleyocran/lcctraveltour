import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
//import { htmlTagRemover } from "../utils/helpers";
import * as content from "../../utils/content";

import ChevronLeftIcon from "./../../../public/assets/icons/chevron_left.svg";
import ChevronRightIcon from "./../../../public/assets/icons/chevron_right.svg";

function EventsNewsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [_, setInit] = useState<any>();

  const newsData = [
    {
      title: "Co-creation team design",
      content: content.missionText,
      summary: content.missionText,
      imgUrl: "/assets/images/header-images/img-1.png",
      date: "Wed - Jan 23, 2022",
    },
    {
      title: "Co-creation team design",
      content: content.missionText,
      summary: content.missionText,
      imgUrl: "/assets/images/header-images/img-1.png",
      date: "Wed - Jan 23, 2022",
    },
    {
      title: "Co-creation team design",
      content: content.missionText,
      summary: content.missionText,
      imgUrl: "/assets/images/header-images/img-1.png",
      date: "Wed - Jan 23, 2022",
    },
    {
      title: "Co-creation team design",
      content: content.missionText,
      summary: content.missionText,
      imgUrl: "/assets/images/header-images/img-1.png",
      date: "Wed - Jan 23, 2022",
    },
  ];

  return (
    <div className="flex flex-col gap-5 relative max-w-7xl mx-5 xl:mx-auto my-12">
      {/* Section Header */}
      <div className="flex flex-row justify-between items-center">
        <h3 className={` text-2xl lg:text-3xl py-4`}>Events + News</h3>

        <div className="flex flex-row gap-2">
          <button
            ref={prevRef}
            className="h-[40px] w-[40px] bg-neutral-200 rounded-full flex flex-row justify-center items-center"
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
            className="h-[40px] w-[40px] bg-neutral-200 rounded-full flex flex-row justify-center items-center"
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
      <div className="h-350 md:h-400">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          freeMode={true}
          modules={[Navigation, FreeMode, Pagination]}
          className="mySwiper"
          navigation={{
            prevEl: prevRef!.current,
            nextEl: nextRef!.current,
          }}
          onInit={() => setInit(true)}
        >
          {newsData.length > 0 &&
            newsData.slice(0, 10).map((data: (typeof newsData)[0]) => (
              <SwiperSlide
                key={data.title}
                onClick={() => {}}
                style={{ width: "300px" }}
              >
                <div className="rounded-3xl ">
                  {/* Cover Image */}
                  <div className="flex-none h-350 md:h-400 w-full relative rounded-3xl ">
                    <Image
                      src={data.imgUrl}
                      alt={data.title}
                      fill
                      style={{ objectFit: "cover", borderRadius: "24px" }}
                      priority
                    />
                  </div>

                  <div
                    className={`h-350 cursor-pointer md:h-400 flex flex-col justify-between p-6 bg-gradient-to-b via-transparent from-transparent to-black w-full rounded-3xl absolute top-0 z-20`}
                  >
                    {/* Date */}
                    <div className="flex">
                      <div className="bg-white px-4 py-2 rounded-full bg-opacity-30 text-white text-sm md:text-xs">
                        {data.date}
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="flex flex-col gap-2">
                      <p
                        className={` text-lg md:text-xl text-white line-clamp-3`}
                      >
                        {data.title}
                      </p>
                      <p
                        className={`text-opacity-70 normal text-base md:text-xs text-white  line-clamp-4`}
                      >
                        {data.summary}
                      </p>
                    </div>
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
          className="bg-neutral-300 px-6 py-3 rounded-full text-lg md:text-base"
        >
          See more
        </button>
      </div>
    </div>
  );
}

export default EventsNewsSection;
