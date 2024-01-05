import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ChevronLeftIcon from "./../../../public/assets/icons/chevron_left.svg";
import ChevronRightIcon from "./../../../public/assets/icons/chevron_right.svg";
import { useAppSelector, useAppDispatch } from "@/redux/app/hooks";
import * as testimonialsRedux from "@/redux/features/testimonials";
import { Oval } from "@agney/react-loading";

function TestomonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [_, setInit] = useState<any>();

  const dispatch = useAppDispatch();
  const testimonialsState = useAppSelector(
    testimonialsRedux.reducer.selectTestimonials
  );
  const loadingState = useAppSelector(
    testimonialsRedux.reducer.selectTestimonialsLoadingState
  );

  useEffect(() => {
    dispatch(testimonialsRedux.actions.checkBeforeFetchTestimonials());
  }, []);

  return (
    <div className="flex flex-col gap-5 relative max-w-7xl mx-5 xl:mx-auto my-12">
      <h5 className="text-3xl">What Are Clients Say</h5>

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

      {loadingState == "idle" && <div>
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
            {testimonialsState.slice(0, 10).map((data: any, index: any) => (
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
                  <div className="w-[70px] h-[70px] rounded-full bg-neutral-100 relative">
                    {data.imageUrl && (
                      <Image
                        src={data.imageUrl}
                        alt=""
                        fill
                        style={{ objectFit: "cover", borderRadius: "200px" }}
                        priority
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-base md:text-sm line-clamp-5 text-neutral-500">
                      {data.content}
                    </p>
                  </div>

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
      </div>}

      {loadingState == "loading" && (
        <div className="md:h-300 h-200 flex flex-row justify-center items-center">
          <Oval width="60" color="grey" />
        </div>
      )}
    </div>
  );
}

export default TestomonialSection;
