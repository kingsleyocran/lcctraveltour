import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/app/hooks";
import * as toursRedux from "@/redux/features/tours";
import TourCard from "./TourCard";
import { Oval } from "@agney/react-loading";

function AllToursPage() {
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
          {toursState.filter((e: any) => e.tourArea == "In Ghana")
            .length !== 0 && (
            <h5 className="text-3xl mt-16">In Ghana Tours </h5>
          )}
          <div
            className={`${
              toursState.length > 3 ? "md:grid-cols-3" : "md:grid-cols-2"
            } grid grid-cols-1 gap-x-8 gap-y-8 rounded-3xl`}
          >
            {toursState
              .filter((e: any) => e.tourArea == "In Ghana")
              .map((data: any, index: any) => (
                <TourCard data={data} index={index} />
              ))}
          </div>

          {toursState.filter((e: any) => e.tourArea == "Outside Ghana")
            .length !== 0 && (
            <h5 className="text-3xl mt-16">Outside Ghana Tours </h5>
          )}
          <div
            className={`${
              toursState.length > 3 ? "md:grid-cols-3" : "md:grid-cols-2"
            } grid grid-cols-1 gap-x-8 gap-y-8 rounded-3xl`}
          >
            {toursState
              .filter((e: any) => e.tourArea == "Outside Ghana")
              .map((data: any, index: any) => (
                <TourCard data={data} index={index} />
              ))}
          </div>
        </div>
      )}

      {loadingState == "loading" && (
        <div className="md:h-500 h-300 flex flex-row justify-center items-center">
          <Oval width="60" color="grey" />
        </div>
      )}
    </>
  );
}

export default AllToursPage;
