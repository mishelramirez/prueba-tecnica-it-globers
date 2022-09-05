import React from "react";
import style from "./_footer.module.scss";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoQrCodeOutline,
  IoShieldHalfSharp,
} from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <div className={style.containerFooter}>
        <div>
          <div>
            <p className="footerLogo">PUFI</p>{" "}
          </div>
          <div>
            <p>PUFI RAIN</p>
            <p>PUFI PUFF</p>
            <p>PUFI CART</p>
            <p>PUFI NAV</p>
          </div>
        </div>

        <div>
          <div>
            <p>CONTACTO</p>
            <p>AYUDA</p>
            <p>COMO COMPRAR</p>
            <p>TERMINOS Y CONDICIONES</p>
          </div>
        </div>
        <div>
          <p>Compra 100% segura</p>

          <div className={style.containerIconShield}>
            <div className={style.iconShield}>
              <IoQrCodeOutline />
              <IoShieldHalfSharp />
            </div>

            <div>
              <p>
                Compra con <br />
                la garantia <br /> de Pufi
              </p>
            </div>
          </div>
        </div>

        <div>
          <p>COMPRA SEGURA</p>
          <IoLogoFacebook />
          <IoLogoTwitter />
          <IoLogoInstagram />
          <p></p>
        </div>
      </div>
      <div className={style.copyRigth}>
        <p>PUFI Copyrigth 2017 - Todos los derechos reservados</p>
      </div>
    </>
  );
}
