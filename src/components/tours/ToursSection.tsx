import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/app/hooks";
import * as toursRedux from "@/redux/features/tours";
import TourCard from "./TourCard";
import { Oval } from "@agney/react-loading";
import { useRouter } from "next/router";

function ToursSection() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const toursState = useAppSelector(toursRedux.reducer.selectTours);
  const loadingState = useAppSelector(
    toursRedux.reducer.selectToursLoadingState
  );

  useEffect(() => {
    dispatch(toursRedux.actions.checkBeforeFetchTours());
  }, []);

  return (
    <>
      {loadingState == "idle" && (
        <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <h5 className="text-3xl">Tours</h5>

            <button
              onClick={() => {
                router.push({ pathname: `/tours` });
              }}
              type="button"
              className="bg-neutral-100 px-6 py-3 rounded-full text-lg md:text-base"
            >
              See more
            </button>
          </div>

          <div
            className={`${
              toursState.length < 3 || toursState.length == 4
                ? "md:grid-cols-2"
                : "md:grid-cols-3"
            }  grid grid-cols-1 gap-x-8 gap-y-8 rounded-3xl`}
          >
            {toursState.slice(0, 6).map((data: any, index: any) => (
              <TourCard data={data} index={index} />
            ))}
          </div>
        </div>
      )}

      {loadingState == "loading" && (
        <div className="md:h-400 h-300 flex flex-row justify-center items-center">
          <Oval width="60" color="grey" />
        </div>
      )}
    </>
  );
}

export default ToursSection;
