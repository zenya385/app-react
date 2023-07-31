import { useState } from "react";
import Controls from "./Controls";
import UserContext from "../context/UserContext.jsx";
import s from "./Counter.module.css";


export default function Counter({ step }) {
  const [value, setValue] = useState(0);

  function handleIncrement() {
    setValue(value + step);

  }

  function handleDecrement() {
    setValue(value - step);
  }

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Hello, class component!</h1>
      <span className={s.count_value}>{value}</span>
      <div>
        <UserContext.Provider value={"qwerty"}>
          <Controls
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            step={step}
          />
        </UserContext.Provider>
      </div>
    </div>
  );
}
