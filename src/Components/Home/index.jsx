import React from "react";
import Carousel from "./Carousel";
import Gallery from "./Gallery";
import homeImages from "./images";
import HomeImage from "./HomeImage";

export default function Home() {

  return (
    <>
      <Carousel />
      <Gallery />
      {homeImages.map((image) => {
        return (
          <div key={image.id}>
            <HomeImage src={image.src} alt={image.altText} />
          </div>
        );
      })}
    </>
  );
}
