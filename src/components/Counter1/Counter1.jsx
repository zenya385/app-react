import { Component, useEffect, useState } from "react";
import styles from "./Counter1.module.css";

// export default class OldCounter1 extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

//   componentDidMount() {
//     const { counterA, counterB } = this.state;
//     const totalClicks = counterA + counterB;
//     document.title = `жмакнули ${totalClicks} разів`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { counterA, counterB } = this.state;

//     if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//       const totalClicks = counterA + counterB;
//       document.title = `жмакнули ${totalClicks} разів`;
//     }
//   }

//   render() {
//     return (
//       <>
//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Жмакнули counterA {this.state.counterA} раз
//         </button>

//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Жмакнули counterB {this.state.counterB} раз
//         </button>
//       </>
//     );
//   }
// }

export default function Counter1() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((prevState) => prevState + 1);
  };
  const handleCounterBIncrement = () => {
    setCounterB((prevState) => prevState + 1);
  };

  useEffect(() => {
    // console.log("запуск useEffect counterA + counterB");
    // console.log(counterA + counterB);
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Жмакнули counterA {counterA} раз
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Жмакнули counterB {counterB} раз
      </button>
    </>
  );
}
