import CustomHead from "@/components/CustomHead";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React, { useEffect } from "react";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useAppSelector, useAppDispatch } from "@/redux/app/hooks";
import * as galleryRedux from "@/redux/features/gallery";

export default function GalleryPage() {
  const dispatch = useAppDispatch();
  const galleryState = useAppSelector(galleryRedux.reducer.selectGallery);
  const loadingState = useAppSelector(
    galleryRedux.reducer.selectGalleryLoadingState
  );

  useEffect(() => {
    dispatch(galleryRedux.actions.checkBeforeFetchGallery());
  }, []);

  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: any) => setIndex(index);

  const slides = galleryState.map(({ imageUrl }: { imageUrl: any }) => ({
    src: imageUrl,
    width: 500,
    height: 500,
  }));

  const images = galleryState.map(
    ({ imageUrl, name }: { imageUrl: any; name: any }) => ({
      src: imageUrl,
      caption: name,
      width: 300,
      height: 200,
      customOverlay: (
        <div className="bg-th-primary-medium bottom-0 absolute w-full px-4 py-2 text-sm text-white">
          <div>{name}</div>
        </div>
      ),
    })
  );

  return (
    <>
      <CustomHead title="LCC Travel and Tours" />

      <main className="bg-white transition-all">
        <NavBar />

        <div className="relative max-w-7xl mx-5 xl:mx-auto flex flex-col gap-4">
          <h6 className="text-3xl mt-8">LCC Travel and Tour Gallery</h6>

          <div>
            <Gallery
              images={images}
              onClick={handleClick}
              enableImageSelection={false}
            />

            <Lightbox
              slides={slides}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
