import React from "react";
import {
  IoBedOutline,
  IoUmbrellaOutline,
  IoCartOutline,
  IoExtensionPuzzleOutline,
} from "react-icons/io5";
import style from "./_header.module.scss";

export default function Header() {
  return (
    <div className={style.container}>
      <div className="header.logo">
        <p className="prueba">PUFI</p>
      </div>
      <div className={style.containerOptions}>
        <div>
          <IoBedOutline />
          <p>PUFI PUFF </p>
        </div>
        <div>
          <IoUmbrellaOutline />
          <p>PUFI RAIN</p>
        </div>
        <div>
          <IoCartOutline />
          <p>PUFI CART</p>
        </div>
        <div>
          <IoExtensionPuzzleOutline />
          <p>PUFI NAP</p>
        </div>
      </div>
      <div className={style.containerAccount}>
        <p >MI CUENTA</p>
        <p>MI COMPRA</p>
      </div>
    </div>
  );
}
