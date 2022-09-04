import React from "react";
import gallery from "./gallery";
import style from "./_home.module.scss";

export default function Gallery(props) {
  const { image, altText } = props;

  return (
    <div>
      <p className={style.titleNet}>INSTAGRAM</p>
      <p className={style.titleEspufi}>#ESPUFI</p>
      <img src={image} alt={altText} />
      <p>NEWSLETTER</p>
      <p>
        SUSCRIBITE <br />y enterate de todas las novedades
      </p>
      {/* 
      {gallery.map((image) => {
        return <div>hola</div>;
      })} */}
    </div>
  );
}
