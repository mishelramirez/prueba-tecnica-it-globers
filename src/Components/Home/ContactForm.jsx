import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import style from "./_home.module.scss";
import { IoArrowForward } from "react-icons/io5";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xoqbjjyl");

  if (state.succeeded) return <p>Gracias por unirte!</p>;

  return (
    <div className={style.collageform}>
      <p className={style.newsLetter}>NEWSLETTER</p>
      <p className={style.titleSuscription}>SUSCRIBITE</p>
      <p className={style.suscribeNesletter}>y enterate de todas las novedades</p>
      <form onSubmit={handleSubmit} className={style.containerForm}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          className={style.inputContact}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className={style.buttonSubmit}
        >
          <IoArrowForward />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
