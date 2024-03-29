import type { NextPage } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CustomHead from "@/components/CustomHead";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import * as toursRedux from "../../redux/features/tours";
import { Oval } from "@agney/react-loading";
import ToursPage from "@/components/tours/ToursPage";

interface Props {
  queryID: string;
}

export async function getServerSideProps(context: any) {
  const { tourID } = context.query;

  return {
    props: {
      queryID: tourID,
    },
  };
}

const Tour: NextPage<Props> = ({ queryID }) => {
  const dispatch = useAppDispatch();
  const loadingState = useAppSelector(
    toursRedux.reducer.selectToursLoadingState
  );
  const [tourData, settourData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const tourData = await dispatch(
        toursRedux.actions.fetchTourByIdAsync(queryID!.toString())
      );
      settourData(tourData.payload);
    };
    fetchData();
  }, [queryID]);

  return (
    <>
      <CustomHead title="LCC Travel and Tours" />

      <main className="bg-white transition-all">
        <NavBar />

        <ToursPage tourData={tourData} isLoading={loadingState === "loading"} />

        <Footer />
      </main>
    </>
  );
};

export default Tour;
