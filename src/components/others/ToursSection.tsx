import React, { useEffect } from "react";
import Image from "next/image";
import { homeToursData } from "@/utils/content";
import { useAppSelector, useAppDispatch } from "@/redux/app/hooks";
import * as toursRedux from "@/redux/features/tours";
import parse from "html-react-parser";

function HomeToursSection() {
  const dispatch = useAppDispatch();
  const toursState = useAppSelector(toursRedux.reducer.selectTours);
  const loadingState = useAppSelector(
    toursRedux.reducer.selectToursLoadingState
  );

  useEffect(() => {
    dispatch(toursRedux.actions.checkBeforeFetchTours());
  }, []);

  return (
    <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col gap-4">
      <h5 className="text-3xl">Tours</h5>
      <div
        className={`${
          toursState.length > 3
            ? "md:grid-cols-3"
            : "md:grid-cols-2"
        } grid grid-cols-1 gap-x-8 gap-y-8 rounded-3xl`}
      >
        {toursState.slice(0, 3).map((data: any, index: any) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.06)" }}
            className=" bg-white rounded-2xl hover:scale-[102%] transition-all
            duration-100 cursor-pointer p-2"
          >
            {/* Image */}
            <div className="w-full h-[300px] relative">
              <Image
                src={data.imageUrl}
                alt=""
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
                priority
              />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h5 className="text-th-accent-medium text-xl line-clamp-2">
                {data.title}
              </h5>
              <p className="line-clamp-3">{parse(data.summary)}</p>

              <div className="flex flex-row gap-3 mt-2">
                <div className="bg-th-primary-medium text-white px-4 py-2 rounded-lg flex flex-row gap-3">
                  <p className="italic">Starts at:</p>
                  {data.startingPrice}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeToursSection;
