import React, {
  Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import UserContext from "../context/UserContext.jsx";
import "./Clock.scss";

// export default class OldClock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     console.log("setInterval");

//     this.intervalId = setInterval(
//       () => this.setState({ time: new Date().toLocaleTimeString() }),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
// return <div className="Clock__face">{this.state.time}</div>;
//   }
// }

export default function Clock() {
  const [time, setTime] = useState(() => {
    new Date().toLocaleTimeString();
  });
  const user = useContext(UserContext);
  // console.log("user", user);
  const intervalId = useRef(null);
  // let intervalId = null;

  useEffect(() => {
    // console.log("time", time);
    intervalId.current = setInterval(
      // intervalId = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => {
      stop();
    };
  }, [time]);

  const stop = () => {
    clearInterval(intervalId.current);
    // clearInterval(intervalId);
  };
  // console.log("intervalId", intervalId);
  return (
    <div className="Clock__face">
      {time}
      <button type="button" onClick={stop}>
        Зупинити {user}
      </button>
    </div>
  );
}
