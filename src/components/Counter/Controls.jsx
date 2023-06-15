import React from "react";
import s from "./Counter.module.css";

export default function Controls({ step, onDecrement, onIncrement }) {
  return (
    <>
      <button
        className={s.count_button}
        type="button"
        // onClick={() => {
        //   console.log("click +1");
        // }}
        onClick={onIncrement}
      >
        Збільшити на {step}
      </button>
      <button className={s.count_button} type="button" onClick={onDecrement}>
        Зменшити на {step}
      </button>
    </>
  );
}
