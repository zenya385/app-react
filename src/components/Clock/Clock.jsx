import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import UserContext from "../context/UserContext.jsx";
import "./Clock.scss";

export default function Clock() {
  const [time, setTime] = useState(() => {
    new Date().toLocaleTimeString();
  });
  const user = useContext(UserContext);
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => {
      stop();
    };
  }, [time]);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className="Clock__face">
      {time}
      <button type="button" onClick={stop}>
        Зупинити {user}
      </button>
    </div>
  );
}
