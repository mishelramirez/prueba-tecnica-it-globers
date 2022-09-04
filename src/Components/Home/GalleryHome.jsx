import React from "react";
import gallery from "./gallery";
import style from "./_home.module.scss";

export default function Gallery() {
  return (
    <div>
      <div className={style.collageNET}>
        <p className={style.titleNet}>INSTAGRAM</p>
        <p className={style.titleEspufi}>#ESPUFI</p>
      </div>
      <div className={style.containerCollage}>
        {gallery.map((image) => {
          return <img className={style.collageImage} src={image.image} />;
        })}
      </div>
      <div className={style.collageform}>
        <p className={style.newsLetter}>NEWSLETTER</p>
        <p className={style.titleSuscription}>
         <strong >SUSCRIBITE</strong>  <br />y enterate de todas las novedades
        </p>
        <form>
          <label>
            <input
              type="Email"
              name="correo"
              id="nombre"
              placeholder="ingresa su correo"
            />
          </label>
        </form>
      </div>
    </div>
  );
}
