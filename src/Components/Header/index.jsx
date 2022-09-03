import React from "react";
import { FaBeer } from 'react-icons/fa';
import style from "./_header.module.scss"

export default function Header() {
  return (
    <div className={` ${style.container} prueba`}>
      <div className="header.logo">
        <p className="prueba">PUFI</p>
      </div>
      <div>
        <div>
          <FaBeer/>
          <p>PUFI PUFF </p>
          
        </div>
        <div>
          <p>PUFI RAIN</p>
        </div>
        <div>
          
          <p>PUFI CART</p>
        </div>
        <div>
          <p>PUFI NAP</p>
        </div>
      </div>
      <div>
        <p>MI CUENTA</p>
        <p>MI COMPRA</p>
      </div>
    </div>
  );
}
