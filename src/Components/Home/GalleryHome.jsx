import React from "react";
import gallery from "./gallery";
import style from "./_home.module.scss";
import ContactForm from "./ContactForm";

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
     
    </div>
  );
}
