import React from "react";
import gallery from "./gallery";
import style from "./_home.module.scss";

export default function Gallery() {
  console.log(gallery);

  return (
    <div >
      <p className={style.titleNet}>INSTAGRAM</p>
      <p className={style.titleEspufi}>#ESPUFI</p>
      <div className={style.containerCollage}>
        {gallery.map((image) => {
          return <img className={style.collageImage} src={image.image} />;
        })}
      </div>
      <p>NEWSLETTER</p>
      <p>
        SUSCRIBITE <br />y enterate de todas las novedades
      </p>
    </div>
  );
}
