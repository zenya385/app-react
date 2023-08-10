// import { PureComponent } from "react";
// import styles from './ColorPicker.module.css'

// export default class ColorPicker extends PureComponent {
//   state = {
//     activeOptionIdx: 0,
//   };

// setActiveIdx = index => {
//   this.setState({ activeOptionIdx: index });
// };

// makeOptionClassName = index => {
//   return index === this.state.activeOptionIdx
//     ? styles.activeOption
//     : styles.option;
// };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];

//     return (
//       <div className={styles.container}>
//         <h2 className={styles.title}>Color Picker</h2>
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               aria-label={label}
//               className={this.makeOptionClassName(index)}
//               style={{ backgroundColor: color }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

import { useState } from "react";
import styles from "./ColorPicker.module.css";

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = (index) => {
    return index === activeOptionIdx ? styles.activeOption : styles.option;
  };

  const { label, color } = options[activeOptionIdx]; // Получаем цвет выбранной опции
  return (
    <div className={styles.container} style={{ borderColor: color }}>
      <h2 className={styles.title}>Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{
              backgroundColor: color,
              borderColor: activeOptionIdx === index ? color : "transparent", // Устанавливаем цвет бордера для выбранной опции
            }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}