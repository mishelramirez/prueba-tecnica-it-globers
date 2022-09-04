import React from "react";
import Carousel from "./Carousel";
import homeImages from "./images";
import HomeImage from "./HomeImage";
import Gallery from "./GalleryHome";

export default function Home() {
  return (
    <>
      <Carousel />
      {homeImages.map((image, index) => {
        return (
          <div key={index}>
            <HomeImage
              image1={image.image1}
              alt={image.altText}
              title={image.title}
              description={image.description}
              image2={image.image2}
              index={index}
            />
          </div>
        );
      })}
      <Gallery />
    </>
  );
}
