import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import style from "./_home.module.scss";

const items = [
  {
    src: require("../../assets/Carousel/imgCarousel1.jpg"),
    altText: "SHOP",
    caption: "SHOP",
  },
  {
    src: require("../../assets/Carousel/imgCarousel3.jpg"),
    altText: "SHOP",
    caption: "SHOP",
  },
  {
    src: require("../../assets/Carousel/imgCarousel2.jpg"),
    altText: "SHOP",
    caption: "SHOP",
  },
];

function Caruosel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className={style.customTag}
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          className={style.caruoselImage}
          src={item.src}
          alt={item.altText}
        />

        <CarouselCaption
          className={style.buttonAction}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
  );
}

export default Caruosel;
