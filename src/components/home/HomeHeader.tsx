import React from "react";
import Image from "next/image";
import * as content from "../../../utils/content";
import { useRouter } from "next/router";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

function HomeHeader() {
  const router = useRouter();

  const bannerItems = [
    {
      height: 37,
      styleProp: "#C88A51",
      toProp: "to-[#C88A51]",
      textContent: content.headerContent1,
      imgUrl: "/assets/images/header-images/img-1.png",
    },
    {
      height: 45,
      styleProp: "#F6523D",
      toProp: "to-[#F6523D]",
      textContent: content.headerContent2,
      imgUrl: "/assets/images/header-images/img-2.png",
    },
    {
      height: 25,
      styleProp: "#B3CF85",
      toProp: "to-[#B3CF85]",
      textContent: content.headerContent3,
      imgUrl: "",
    },
    {
      height: 35,
      styleProp: "#42647E",
      toProp: "to-[#42647E]",
      textContent: content.headerContent4,
      imgUrl: "/assets/images/header-images/img-3.png",
    },
    {
      height: 15,
      styleProp: "#FB9E77",
      toProp: "to-[#FB9E77]",
      textContent: content.headerContent5,
      imgUrl: "",
    },
  ];

  return (
    <div className="h-[650px] lg:h-[calc(100vh-70px)] relative max-w-7xl mx-5 xl:mx-auto">
      <div className=" h-[400px] lg:h-[500px] w-full absolute">
        <Image
          src="/assets/vector/banner-background.svg"
          alt=""
          fill
          style={{ objectFit: "contain", borderRadius: "16px" }}
          priority
        />
      </div>
      <div className=" h-[80vh] lg:h-[calc(100vh-70px)] w-full absolute z-10">
        {/* Header Text Section */}
        <div className="h-[40vh] lg:h-[calc(60vh-70px)] flex flex-col gap-3 justify-center items-center w-full">
          <h3 className="lg:pl-[0px] text-3xl md:text-4xl lg:text-[50px] normal">
            {content.headerText1}
          </h3>
          <h3 className="md:pr-[200px] lg:pr-[300px] text-3xl md:text-4xl lg:text-[50px] normal">
            {content.headerText2}
          </h3>
          <h3 className="md:pl-[100px] lg:pl-[200px] text-3xl md:text-4xl lg:text-[50px] normal">
            {content.headerText3}
          </h3>

          <button
            onClick={() => router.push("/communities")}
            type="button"
            className="mt-6 medium md:text-lg text-xl hover:bg-neutral-300 transition-all text-th-primary-dark bg-neutral-200 px-10 py-3 rounded-full"
          >
            <p>Join Us</p>
          </button>
        </div>

        {/* Desktop Header Bottom Section */}
        <div className="hidden lg:flex h-[40vh] w-full pb-8">
          <div className="flex flex-row gap-4 h-[40vh] w-full justify-stretch items-end">
            {bannerItems.map((item: any) => (
              <HeaderBottomCard
                key={item.index}
                height={item.height}
                styleProp={item.styleProp}
                imgUrl={item.imgUrl}
                textContent={item.textContent}
              />
            ))}
          </div>
        </div>

        {/* Mobile Header Bottom Section */}
        <div className="lg:hidden h-[40vh] lg:h-[45vh] ">
          <Swiper
            autoplay={{
              delay: 6000,
            }}
            spaceBetween={30}
            effect={"fade"}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className="mySwiper h-[40vh] md:h-[45vh] w-full relative"
          >
            <SwiperSlide>
              <CarouselItem
                imgUrl={bannerItems[0].imgUrl}
                textContent={bannerItems[0].textContent}
                styleProp={bannerItems[0].styleProp}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselItem
                imgUrl={bannerItems[1].imgUrl}
                textContent={bannerItems[1].textContent}
                styleProp={bannerItems[1].styleProp}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselItem
                imgUrl={bannerItems[2].imgUrl}
                textContent={bannerItems[2].textContent}
                styleProp={bannerItems[2].styleProp}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselItem
                imgUrl={bannerItems[3].imgUrl}
                textContent={bannerItems[3].textContent}
                styleProp={bannerItems[3].styleProp}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselItem
                imgUrl={bannerItems[4].imgUrl}
                textContent={bannerItems[4].textContent}
                styleProp={bannerItems[4].styleProp}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

function HeaderBottomCard({
  height,
  styleProp,
  imgUrl,
  textContent,
}: {
  height: number;
  styleProp: string;
  imgUrl: string;
  textContent: string;
}) {
  return (
    <div
      className={`bg-[${styleProp}] flex-1 rounded-3xl relative`}
      style={{ height: `${height}vh` }}
    >
      {imgUrl !== "" ? (
        <div className="w-full relative" style={{ height: `${height}vh` }}>
          <Image
            src={imgUrl}
            alt={""}
            fill
            style={{
              objectFit: "cover",
              borderRadius: "1.5rem",
              margin: "0px",
              padding: "0px",
            }}
            priority
          />
        </div>
      ) : (
        <div
          className={`bg-[${styleProp}] w-full relative rounded-3xl`}
          style={{ height: `${height}vh`, background:  `${styleProp}`}}
        ></div>
      )}
      <div
        className={`flex flex-col text-white justify-end p-5 bg-gradient-to-b from-transparent to-[${styleProp}] w-full rounded-3xl absolute top-0 z-20`}
        style={{ height: `${height}vh` }}
      >
        {textContent}
      </div>
    </div>
  );
}

function CarouselItem({
  styleProp,
  imgUrl,
  textContent,
}: {
  height?: number;
  styleProp?: string;
  imgUrl: string;
  textContent: string;
}) {
  return (
    <div className={`w-full relative  rounded-2xl`} style={{ height: `40vh` }}>
      {imgUrl !== "" ? (
        <Image
          src={imgUrl}
          alt={""}
          fill
          style={{
            objectFit: "cover",
            borderRadius: "1.5rem",
            margin: "0px",
            padding: "0px",
          }}
          priority
        />
      ) : (
        <div
          className={`bg-[${styleProp}] w-full relative rounded-3xl`}
          style={{ height: `40vh` ,background:  `${styleProp}`}}
        ></div>
      )}

      <div
        style={{ height: `40vh` }}
        className={`flex flex-col text-white justify-end p-5 bg-gradient-to-b from-transparent to-[${styleProp}] w-full rounded-3xl absolute top-0 z-20`}
      >
        <p className={` text-2xl md:text-xl text-white mt-4`}>{textContent}</p>
      </div>
    </div>
  );
}

export default HomeHeader;
