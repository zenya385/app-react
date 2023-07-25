import { useState } from "react";
import Controls from "./Controls";
import UserContext from "../context/UserContext.jsx";
import s from "./Counter.module.css";
// import { UserContext } from "../context/UserContext";

// console.log("UserContext", UserContext);

export default function Counter({ step }) {
  const [value, setValue] = useState(0);
  // const [userName, setName] = useState("qwertyuijhgf");
  // const UserContext = createContext(userName);

  function handleIncrement() {
    setValue(value + step);
    // setValue(value + step);
    // setValue(value + step);
    // setValue((state) => state + step);
    // setValue((prev) => prev + step);
    // setValue((prev) => prev + step);
  }

  function handleDecrement() {
    // setValue(() => {
    setValue(value - step);
    // });
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
