import React from "react";
import style from "./_home.module.scss";

export default function HomeImage(props) {
  const { image1, alt, title, description, image2, index } = props;

  return (
    <div
      className={style.containerHomeimageText}
      style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
    >
      <img className={style.imagenHome} src={image1} alt={alt} />
      <div className={style.textHome}>
        <img className={style.imageHome} src={image2} alt={alt} />
        <p className={style.title}>{title}</p>
        <p>{description}</p>
        <button className={style.button}>{"> VER MAS"}</button>
        <div className={style.rombo}></div>
      </div>
    </div>
  );
}
