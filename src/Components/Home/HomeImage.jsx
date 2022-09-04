import React from "react";
import style from "./_home.module.scss"

export default function HomeImage(props) {
  const { src, alt, description } = props;

  return (
    <div className={style.containerHomeimageText}>
      <img className={style.imagenHome} src={src} alt={alt} />
      <div>
        <p>Aqui va una descripcion</p>
      </div>
    </div>
  );
}
