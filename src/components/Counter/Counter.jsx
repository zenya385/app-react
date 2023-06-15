// import React from "react";

// function Counter() {
//   return (
//     <>
//       <h1>Hello!</h1>
//     </>
//   );
// }

// export default Counter;

import React, { Component } from "react";
import s from "./Counter.module.css";
import Controls from "./Controls";

//rcc

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
  };
  state = {
    value: 10,
  };
  handleIncrement = () => {
    // this.setState({ value: 123 });

    // this.setState((prevState) => {
    //   return { value: prevState.value + 1 };
    // });

    this.setState((prevState) => ({
      value: prevState.value + this.props.step,
    }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - this.props.step,
    }));
  };

  render() {
    // const { step } = this.props;
    return (
      <div className={s.wrap}>
        <h1 className={s.title}>Hello, class component!</h1>
        <span className={s.count_value}>{this.state.value}</span>
        <div>
          <Controls
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            step={this.props.step}
          />
          {/* <button
            className={s.count_button}
            type="button"
            // onClick={() => {
            //   console.log("click +1");
            // }}
            onClick={this.handleIncrement}
          >
            Збільшити на {step}
          </button>
          <button
            className={s.count_button}
            type="button"
            onClick={this.handleDecrement}
          >
            Зменшити на {step}
          </button> */}
        </div>
      </div>
    );
  }
}
