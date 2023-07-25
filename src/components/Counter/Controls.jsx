import { createContext, useContext, useState } from "react";
import UserContext from "../context/UserContext.jsx";
import s from "./Counter.module.css";
import Clock from "../Clock/Clock";

export default function Controls({ step, onDecrement, onIncrement }) {
  // const UserContext = createContext(value)
  const btn = useContext(UserContext);
  console.log("user", UserContext);
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

      <Clock />
    </>
  );
}
