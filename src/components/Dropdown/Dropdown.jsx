import React, { Component } from "react";
import s from "./Dropdown.module.css";

export default class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prewState) => ({
      visible: !prewState.visible,
    }));
  };

  // show = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };
  // hide = () => {
  //   this.setState({
  //     visible: false,
  //   });
  // };
  render() {
    const { visible } = this.state;
    return (
      <div className={s.dropdown}>
        {/* <button
          type="button"
          className={s.dropdown_toggle}
          onClick={this.toggle}
        >
          Відобразити
        </button> */}
        <button
          type="button"
          className={s.dropdown_toggle}
          onClick={this.toggle}
        >
          {/* Приховати */}
          {visible ? "Приховати" : "Відобразити"}
        </button>
        {visible && <div className={s.dropdown_menu}>Випадаюче меню</div>}
      </div>
    );
  }
}
